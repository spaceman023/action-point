import os
import sys
import shutil
import copy
import re
import json
from helpers.create_db import create_db
from bs4 import BeautifulSoup, Tag, NavigableString

def write_db(filepath, fg_data):
    with open(filepath, mode='w', encoding='UTF-8', errors='strict', buffering=1) as file:
        # item counter
        id = 0

        file.write('<root version="2.9">\n')
        file.write('<item>\n')
        for entry in fg_data:
            id += 1
            entrry_id = "00000"[0:len("00000")-len(str(id))] + str(id)
            file.write(f'<id-{entrry_id}>\n')

            for tag in sorted(entry.keys()):
                if entry[tag] != '':
                    # choose the write statement depending on the 'type' attribute
                    if re.search('^(powers|props)$', tag):
                        file.write(f'<{tag}>{entry[tag]}</{tag}>\n')
                    elif re.search('^(ac|bonus|checkpenalty|level|min_enhance|profbonus|range|speed|weight)$', tag):
                        file.write(f'<{tag} type="number">{entry[tag]}</{tag}>\n')
                    else:
                        file.write(f'<{tag} type="string">{entry[tag]}</{tag}>\n')

            file.write(f'</id-{entrry_id}>\n')
        file.write('</item>\n')
        file.write('</root>')
        return str(id)

def multi_level(soup_in):
    multi_out = []

    # Get Bonus / Cost / Level lists for items with variable bonus
    bonus_list = soup_in.find('table', class_='magicitem').find_all('td', class_='mic2')
    cost_list = soup_in.find('table', class_='magicitem').find_all('td', class_='mic3')
    level_list = soup_in.find('table', class_='magicitem').find_all('td', class_='mic1')

    # Loop through the lists to create a dictionary with three values
    idx = max(len(bonus_list), len(cost_list), len(level_list))
    for item in range(idx):
        multi_dict = {}
        multi_dict['bonus'] = ''
        multi_dict['cost'] = ''
        multi_dict['level'] = ''

        if bonus_str := bonus_list[item].string:
            multi_dict['bonus'] = bonus_str
        if cost_str := cost_list[item].string:
            multi_dict['cost'] = cost_str
        if level_str := level_list[item].string.replace('Lvl ', ''):
            multi_dict['level'] = level_str

        # Append dictionary to output list
        multi_out.append(copy.deepcopy(multi_dict))

    return multi_out

def power_construct(lines_list):

    # List of keywords to be included
    keywords_list = ['Acid', 'Augmentable', 'Aura', 'Charm', 'Cold', 'Conjuration', 'Fear', 'Fire', 'Healing', 'Illusion', 'Implement',\
        'Lightning', 'Necrotic', 'Poison', 'Polymorph', 'Psychic', 'Radiant', 'Sleep', 'Summoning', 'Teleportation', 'Thunder', 'Varies', 'Weapon', 'Zone']

    action_str = ''
    keywords_str = ''
    name_str = ''
    range_str = ''
    recharge_str = ''
    shortdescription_str = ''

    # Loop through list of strings that contains all information for a single power
    for line in lines_list:

        # Action
        action_test = re.search(r'(Free Action|Free|Immediate Interrupt|Immediate Reaction|Minor Action|Minor|Move Action|Move|No Action|Standard Action|Standard)', line)
        if action_test != None:
            action_str = action_test.group(1)

        # Keyword
        # exhaustive check to avoid false positives
        for kwd in keywords_list:
            if keywords_test := re.search(kwd, line):
                keywords_str += ', ' if keywords_str != '' else ''
                keywords_str += kwd

        # Range
        # take only the first entry as some multi-level items increase range with level
        range_test = re.search(r'(Area.*?|Close.*?|Ranged.*?)[;($\.]', line)
        if range_test != None and range_str == '':
           range_str = range_test.group(1).strip()

        # Recharge
        recharge_test = re.search(r'(At-will Attack|At-Will Attack|At-will Utillity|At-Will Utility|At-will|At-Will|Consumable|Daily Attack|Daily Utility|Daily|Encounter)', line)
        if recharge_test != None:
            recharge_str = recharge_test.group(1)

        # Description
        # also include any line that doesn't find an action, range, recharge or source is added to shortdescription
        shortdescription_test = re.search(r'(^As|^Attack:|Effect|Hit|Level|Make|Miss|Trigger|You)', line)
        if shortdescription_test != None or (action_test == None and recharge_test == None):
            if shortdescription_str != '':
                shortdescription_str += '\\n'
            shortdescription_str += re.sub('\s\s', ' ', line)

    # Create and return power as a dictionary item
    power_dict = {}
    power_dict['action'] = action_str
    power_dict['keywords'] = keywords_str
    power_dict['name'] = name_str
    power_dict['range'] = range_str
    power_dict['recharge'] = recharge_str
    power_dict['shortdescription'] = shortdescription_str

    return power_dict

def powers_format(soup_in):
    id = 0
    powers_list = []
    in_power = False

    # Find all tags that might contain powers information
    power_tags = soup_in.find_all(class_=['mihead', 'mistat', 'mistat indent', 'mistat indent1'])
    for tag in power_tags:
        # concatenate all the elements within each tag
        tag_str = ' '.join(map(str, tag.stripped_strings))
        # if we find the beginning of a power and one is already under construction then construct and add it to the power list and start a new item
        if re.search(r'^(Attack Power|Power|Utility Power)', tag_str) and in_power:
            power_item = power_construct(new_power)
            powers_list.append(copy.deepcopy(power_item))
            new_power = []
        # else if this is the beginning of the first power then start a new item
        elif re.search(r'^(Attack Power|Power|Utility Power)', tag_str):
            in_power = True
            new_power = []
        if in_power:
            new_power.append(tag_str)
    # construct final power and add it to the power list
    if in_power:
        power_item = power_construct(new_power)
        powers_list.append(copy.deepcopy(power_item))

    # Loop though power list to create all the tags
    return powers_list

def props_format(props_in):
    id = 0

    # Split the input at each \n into a list of properties
    props_list = re.split(r'\\n', props_in)
    return props_list

if __name__ == '__main__':

    # Pull data from Portable Compendium
    db = []
    try:
        db = create_db('ddiItem.sql', "','")
    except:
        print("Error reading data source.")

    print(f"{len(db)} entries recovered")

    # Convert data to FG format
    print("converting to FG format...")

    # Initialize all modules databases
    export_list = []

    if not db:
        print("NO DATA FOUND IN SOURCES, MAKE SURE YOU HAVE COPIED YOUR 4E PORTABLE COMPENDIUM DATA TO SOURCES!")
        input('Press enter to close.')
        sys.exit(0)

    for i, row in enumerate(db):

        # Parse the HTML text 
        html = row['Txt']
        html = html.replace('\\r\\n','\r\n').replace('\\','')
        parsed_html = BeautifulSoup(html, features="html.parser")

        # Retrieve the data with dedicated columns
        name_str =  row['Name'].replace('\\', '')
        category_str = row['Category'].replace('\\', '')
        rarity_str =  row['Rarity'].replace('\\', '')

        bonus_str = ''
        class_str = ''
        cost_str = ''
        critical_str = ''
        enhancement_str = ''
        flavor_str = ''
        group_str = ''
        level_str = ''
        mitype_str = ''
        powers_str = ''
        prerequisite_str = ''
        properties_str = ''
        props_str = ''
        special_str = ''
        subclass_str = ''

        # Class
        if (re.search('^(Implement|Weapon)$', category_str) and re.search('^(Common|Uncommon|Rare)', rarity_str)):
            class_str = rarity_str
            subclass_str = category_str
            mitype_str = 'weapon'

        if mitype_str != '':
            print(str(i) + ' ' + name_str)

            # Bonus / Cost / Level
            multi_bonus = True
            try:
                multi_list = multi_level(parsed_html)
            except:
                multi_bonus = False
                multi_list = []
                multi_item = {}
                multi_item['bonus'] = ''
                multi_item['cost'] = ''
                multi_item['level'] = ''
                multi_list.append(copy.deepcopy(multi_item))

            # Critical
            if critical_lbl := parsed_html.find(string='Critical:'):
                critical_str = critical_lbl.parent.next_sibling.get_text(separator = '\\n', strip = True)
                # only weapons can have a 'critical' entry
                if critical_str != '':
                    mitype_str = 'weapon'

            # Enhancement
            if enhancement_lbl := parsed_html.find(string=re.compile('^(Enhancement|Enhancement Bonus):$')):
                enhancement_str = enhancement_lbl.parent.next_sibling.get_text(separator = '\\n', strip = True)

            # Flavor
            if flavor_lbl := parsed_html.find('p', class_='miflavor'):
                flavor_str = re.sub('\s\s', ' ', flavor_lbl.get_text(separator = '\\n', strip = True))

            # Group (Weapon)
            if group_lbl := parsed_html.find(string='Weapon: '):
                group_str = group_lbl.parent.next_sibling.strip()

            # Powers
            powers_str = powers_format(parsed_html)

            # Prerequisite
            if prerequisite_lbl := parsed_html.find(string=re.compile('^(Prerequisite|Requirement):$')):
                prerequisite_str = prerequisite_lbl.parent.next_sibling.get_text(separator = '\\n', strip = True)

            # Properties
            if properties_lbl := parsed_html.find(string=re.compile('^(Property|Properties)')):
                properties_str = re.sub('\s\s', ' ', properties_lbl.parent.next_sibling.get_text(separator = '\\n', strip = True))
                properties_str = re.sub(r':\\n', ': ', properties_str)
                # non-weapon items need a separate 'props' list for the 'Abilities' tab
                if mitype_str != 'weapon':
                    props_str = props_format(properties_str)
                    properties_str = ''

            # Special (Published In)
            if special_lbl := parsed_html.find('p', class_='publishedIn'):
                special_str = re.sub('\s\s', ' ', special_lbl.text)

            # Build the item entry
            for item in multi_list:
                export_item = {}
                export_item['bonus'] = item['bonus']
                export_item['class'] = class_str
                export_item['cost'] = item['cost']
                export_item['critical'] = critical_str
                export_item['enhancement'] = enhancement_str
                export_item['flavor'] = flavor_str
                export_item['group'] = group_str
                export_item['level'] = item['level']
                export_item['mitype'] = mitype_str
                export_item['name'] = name_str + ' ' + item['bonus'] if item['bonus'] != '' else name_str
                export_item['powers'] = powers_str
                export_item['prerequisite'] = prerequisite_str
                export_item['properties'] = properties_str
                export_item['props'] = props_str
                export_item['special'] = special_str
                export_item['subclass'] = subclass_str

                # Append a copy of generated entry
                if 'Transposing'in export_item['name']:
                    print(export_item)
                export_list.append(copy.deepcopy(export_item))
    
    print(str(len(db)) + " entries parsed.")
    print(str(len(export_list)) + " export entries.")

    outputJSON = json.dumps(export_list, indent = 4)
    f = open("../collections/magic_weapon_collection.json", "w")
    f.write(outputJSON)
    f.close()
