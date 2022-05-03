const config = {
  abilities: {
    str: "Strength",
    con: "Constitution",
    dex: "Dexterity",
    int: "Intelligence",
    wis: "Wisdom",
    cha: "Charisma",
  },
  alignments: {
    lg: "DND4EBETA.AlignmentLG",
    ng: "DND4EBETA.AlignmentNG",
    cg: "DND4EBETA.AlignmentCG",
    ln: "DND4EBETA.AlignmentLN",
    tn: "DND4EBETA.AlignmentTN",
    cn: "DND4EBETA.AlignmentCN",
    le: "DND4EBETA.AlignmentLE",
    ne: "DND4EBETA.AlignmentNE",
    ce: "DND4EBETA.AlignmentCE",
  },
  weaponProficiencies: {
    sim: "DND4EBETA.WeaponSimpleProficiency",
    mar: "DND4EBETA.WeaponMartialProficiency",
  },
  toolProficiencies: {
    art: "DND4EBETA.ToolArtisans",
    disg: "DND4EBETA.ToolDisguiseKit",
    forg: "DND4EBETA.ToolForgeryKit",
    game: "DND4EBETA.ToolGamingSet",
    herb: "DND4EBETA.ToolHerbalismKit",
    music: "DND4EBETA.ToolMusicalInstrument",
    navg: "DND4EBETA.ToolNavigators",
    pois: "DND4EBETA.ToolPoisonersKit",
    thief: "DND4EBETA.ToolThieves",
    vehicle: "DND4EBETA.ToolVehicle",
  },
  timePeriods: {
    day: "Days",
    hour: "Hours",
    inst: "Instantaneous",
    minute: "Minutes",
    month: "Months",
    perm: "Permanent",
    round: "Rounds",
    spec: "Special",
    turn: "Turns",
    year: "Years",
  },
  abilityActivationTypes: {
    none: "No Action",
    standard: "Standard Action",
    move: "Move Action",
    minor: "Minor Action",
    free: "Free Action",
    reaction: "Immediate Reaction",
    interrupt: "Immediate Interrupt",
    opportunity: "Opportunity Action",
  },
  abilityActivationTypesShort: {
    free: "FREE",
    interrupt: "I-IN",
    reaction: "I-RE",
    minor: "MIN",
    move: "MOV",
    none: "None",
    opportunity: "OP-A",
    standard: "STD.",
  },
  abilityConsumptionTypes: {
    ammo: "Ammunition",
    attribute: "Attribute",
    charges: "Item Uses",
    material: "Material",
  },
  actorSizes: {
    grg: "Gargantuan",
    huge: "Huge",
    lg: "Large",
    med: "Medium",
    sm: "Small",
    tiny: "Tiny",
  },
  tokenSizes: { tiny: 1, sm: 1, med: 1, lg: 2, huge: 3, grg: 4 },
  tokenHPColors: {
    damage: 16711680,
    healing: 65280,
    temp: 6737151,
    tempmax: 4456550,
    negmax: 5570560,
  },
  itemActionTypes: {
    mwak: "Melee Weapon Attack",
    rwak: "Ranged Weapon Attack",
    msak: "Melee Spell Attack",
    rsak: "Ranged Spell Attack",
    save: "Saving Throw",
    heal: "Healing",
    abil: "Ability Check",
    util: "Utility",
    other: "Other",
  },
  itemCapacityTypes: {
    items: "DND4EBETA.ItemContainerCapacityItems",
    weight: "DND4EBETA.ItemContainerCapacityWeight",
  },
  limitedUsePeriods: { enc: "Encounter", day: "Day", charges: "Charges" },
  launchOrder: {
    both: "Both Pre & Post Item",
    off: "macro Off",
    post: "Post-Item-Use",
    pre: "Pre-Item-Use",
    sub: "Substitute-Item-Use",
  },
  equipmentTypes: {
    armour: "Armour",
    arms: "Arms",
    feet: "Feet",
    hands: "Hands",
    head: "Head",
    natural: "Natural",
    neck: "Neck",
    other: "Other",
    ring: "Ring",
    waist: "Waist",
  },
  equipmentTypesArmour: {
    cloth: "Cloth Armour",
    heavy: "Heavy Armour",
    light: "Light Armour",
    natural: "Natural Armour",
  },
  equipmentTypesArms: {
    light: "Light Shield",
    heavy: "Heavy Shield",
    bracers: "Bracers",
    bracelet: "Bracelets",
  },
  equipmentTypesFeet: { shoe: "Shoes", boot: "Boots", greave: "Greaves" },
  equipmentTypesHands: { gloves: "Gloves", gauntlets: "Gauntlets" },
  equipmentTypesHead: { hat: "Hat", helmet: "Helmet", eyewear: "Eyewear" },
  equipmentTypesNeck: {
    necklace: "Necklace",
    amulet: "Amulet",
    cloak: "Cloak",
  },
  equipmentTypesWaist: { belt: "Belt" },
  armourProficiencies: { shl: "DND4EBETA.EquipmentShieldProficiency" },
  creatureOrigin: {
    aberrant: "Aberrant",
    elemental: "Elemental",
    fey: "Fey",
    immortal: "Immortal",
    natural: "Natural",
    shadow: "Shadow",
  },
  creatureRole: {
    artillery: "Artillery",
    brute: "Brute",
    controller: "Controller",
    defender: "Defender",
    leader: "Leader",
    lurker: "Lurker",
    skirmisher: "Skirmisher",
    soldier: "Soldier",
    striker: "Striker",
  },
  creatureRoleSecond: {
    elite: "Elite",
    minion: "Minion",
    other: "Other",
    solo: "Solo",
    standard: "Standard",
  },
  creatureType: {
    animate: "Animate",
    beast: "Beast",
    humanoid: "Humanoid",
    magical: "Magical Beast",
  },
  consumableTypes: {
    alchemical: "Alchemical Item",
    ammo: "Ammunition",
    food: "Food",
    poison: "Poison",
    potion: "Potion",
    scroll: "Scroll",
    trinket: "Trinket",
  },
  commonAttackBonuses: {
    comAdv: { value: 2, label: "DND4EBETA.CommonAttackComAdv" },
    charge: { value: 1, label: "DND4EBETA.CommonAttackCharge" },
    conceal: { value: -2, label: "DND4EBETA.CommonAttackConceal" },
    concealTotal: { value: -5, label: "DND4EBETA.CommonAttackConcealTotal" },
    cover: { value: -2, label: "DND4EBETA.CommonAttackCover" },
    coverSup: { value: -5, label: "DND4EBETA.CommonAttackCoverSup" },
    longRange: { value: -2, label: "DND4EBETA.CommonAttackLongRange" },
    prone: { value: -2, label: "DND4EBETA.CommonAttackProne" },
    restrained: { value: -2, label: "DND4EBETA.CommonAttackRestrained" },
    running: { value: -5, label: "DND4EBETA.CommonAttackRunning" },
    squeez: { value: -5, label: "DND4EBETA.CommonAttackSqueez" },
  },
  currencies: {
    ad: "DND4EBETA.CurrencyAD",
    pp: "DND4EBETA.CurrencyPP",
    gp: "DND4EBETA.CurrencyGP",
    sp: "DND4EBETA.CurrencySP",
    cp: "DND4EBETA.CurrencyCP",
  },
  currencyConversion: {
    cp: { into: "sp", each: 10 },
    sp: { into: "gp", each: 10 },
    gp: { into: "pp", each: 100 },
    pp: { into: "ad", each: 100 },
  },
  ritualcomponents: {
    ar: "DND4EBETA.RitualCompAR",
    ms: "DND4EBETA.RitualCompMS",
    rh: "DND4EBETA.RitualCompRH",
    si: "DND4EBETA.RitualCompSI",
    rs: "DND4EBETA.RitualCompRS",
  },
  damageTypes: {
    damage: "Damage",
    acid: "Acid",
    cold: "Cold",
    fire: "Fire",
    force: "Force",
    lightning: "Lightning",
    necrotic: "Necrotic",
    physical: "Physical",
    poison: "Poison",
    psychic: "Psychic",
    radiant: "Radiant",
    thunder: "Thunder",
  },
  def: { ac: "AC", fort: "Fort", ref: "Ref", wil: "Will" },
  defensives: {
    ac: "Armour Class",
    fort: "Fortitude Defense",
    ref: "Reflex Defense",
    wil: "Will Defense",
  },
  distanceUnits: {
    none: "None",
    self: "Self",
    touch: "Touch",
    ft: "Feet",
    mi: "Miles",
    spec: "Special",
    any: "Any",
  },
  encumbrance: { currencyPerWeight: 50, strMultiplier: 15 },
  targetTypes: {
    allyA: "Adjacent Ally",
    creatureA: "Adjacent Creature",
    enemyA: "Adjacent Enemy",
    ally: "Ally",
    creature: "Creature",
    enemy: "Enemy",
    none: "None",
    object: "Object",
    personal: "Personal",
    square: "Square",
    wall: "Wall",
  },
  areaTargetTypes: {
    cone: "cone",
    cube: "rect",
    cylinder: "circle",
    line: "ray",
    radius: "circle",
    sphere: "circle",
    square: "rect",
    wall: "ray",
    closeBlast: "rect",
    closeBurst: "circle",
    rangeBlast: "rect",
    rangeBurst: "circle",
  },
  healingTypes: { healing: "Healing", temphp: "Healing (Temporary)" },
  featureSortTypes: { name: "Item Name", level: "Level", none: "None" },
  powerType: {
    class: "Class",
    epic: "Epic Destiny",
    feat: "Feat",
    inherent: "Inherent",
    item: "Item",
    paragon: "Paragon Path",
    race: "Racial",
    skill: "Skill",
    theme: "Theme",
    utility: "Utility",
  },
  powerSubtype: { attack: "Attack", feature: "Feature", utility: "Utility" },
  powerUseType: {
    atwill: "At-Will",
    daily: "Daily",
    encounter: "Encounter",
    item: "Item",
    other: "Other",
    recharge: "Recharge",
  },
  powerSource: {
    arcane: "Arcane",
    divine: "Divine",
    Elemental: "Elemental",
    ki: "Ki",
    martial: "Martial",
    primal: "Primal",
    psionic: "Psionic",
    shadow: "Shadow",
  },
  powerGroupTypes: {
    usage: "Usage",
    action: "Action",
    type: "Type",
    powerSubtype: "Subtype",
  },
  powerSortTypes: {
    actionType: "Action",
    name: "Item Name",
    level: "Level",
    none: "None",
    rangeTextShort: "Range",
    powerSubtype: "Subtype",
    "use.value": "Used",
  },
  powerDiceTypes: {
    weapon: "Base Weapon Damage",
    flat: "Flat Damage",
    d4: "d4",
    d6: "d6",
    d8: "d8",
    d10: "d10",
    d12: "d12",
    d20: "d20",
  },
  special: {
    aa: "All Around Vision",
    bv: "Blind",
    bs: "Blindsight",
    dv: "Darkvision",
    lv: "Low-Light Vision",
    nv: "Normal Vision",
    ts: "Tremorsense",
    tr: "Truesight",
  },
  vision: { bv: "Blind", lv: "Low-Light Vision", nv: "Normal Vision" },
  weaponType: {
    melee: "Melee Weapon",
    meleeRanged: "Melee or Ranged Weapon",
    ranged: "Ranged Weapon",
    implement: "Implement",
    none: "None",
    any: "Any Weapon",
  },
  rangeType: {
    weapon: "Weapon's Range",
    melee: "Melee",
    reach: "Reach",
    range: "Ranged",
    closeBurst: "Close Burst",
    closeBlast: "Close Blast",
    rangeBurst: "Area Burst",
    rangeBlast: "Area Blast",
    wall: "Area Wall",
    personal: "Personal",
    touch: "Touch",
    special: "Special",
  },
  rangeTypeNoWeapon: {
    rangeBlast: "Area Blast",
    rangeBurst: "Area Burst",
    wall: "Area Wall",
    closeBlast: "Close Blast",
    closeBurst: "Close Burst",
    melee: "Melee",
    personal: "Personal",
    range: "Ranged",
    reach: "Reach",
    special: "Special",
    touch: "Touch",
  },
  effectTypes: {
    augmentable: "Augmentable",
    aura: "Aura",
    beast: "Beast",
    beastForm: "Beast Form",
    channelDiv: "Channel Divinity",
    charm: "Charm",
    conjuration: "Conjuration",
    disease: "Disease",
    elemental: "Elemental",
    enchantment: "Enchantment",
    evocation: "Evocation",
    fear: "Fear",
    fullDis: "Full Discipline",
    gaze: "Gaze",
    healing: "Healing",
    illusion: "Illusion",
    invigorating: "Invigorating",
    mount: "Mount",
    necro: "Necromancy",
    nether: "Nethermancy",
    poison: "Poison",
    polymorph: "Polymorph",
    rage: "Rage",
    rattling: "Rattling",
    reliable: "Reliable",
    runic: "Runic",
    sleep: "Sleep",
    spirit: "Spirit",
    stance: "Stance",
    summoning: "Summoning",
    teleportation: "Teleportation",
    transmutation: "Transmutation",
    zone: "Zone",
  },
  saves: {
    Acid: "Acid",
    Arcane: "Arcane",
    Charm: "Charm",
    Cold: "Cold",
    Divine: "Divine",
    Elemental: "Elemental",
    Fear: "Fear",
    Fire: "Fire",
    Force: "Force",
    Healing: "Healing",
    Illusion: "Illusion",
    Invigorating: "Invigorating",
    Ki: "Ki",
    Lighting: "Lightning",
    Martial: "Martial",
    Necrotic: "Necrotic",
    Poison: "Poison",
    Polymorph: "Polymorph",
    Primal: "Primal",
    Psionic: "Psionic",
    Psychic: "Psychic",
    Radiant: "Radiant",
    Rage: "Rage",
    Shadow: "Shadow",
    Sleep: "Sleep",
    Spirit: "Spirit",
    Teleportation: "Teleportation",
    "Thunder ": "Thunder",
  },
  skills: {
    acr: "Acrobatics",
    arc: "Arcana",
    ath: "Athletics",
    blu: "Bluff",
    dip: "Diplomacy",
    dun: "Dungeoneering",
    end: "Endurance",
    hea: "Healing",
    his: "History",
    ins: "Insight",
    itm: "Intimidation",
    nat: "Nature",
    prc: "Perception",
    rel: "Religion",
    stl: "Stealth",
    stw: "Streetwise",
    thi: "Thievery",
  },
  modifiers: {
    attack: "DND4EBETA.ModifierAttack",
    damage: "DND4EBETA.ModifierDamage",
  },
  spellPreparationModes: {
    always: "DND4EBETA.SpellPrepAlways",
    atwill: "DND4EBETA.SpellPrepAtWill",
    innate: "DND4EBETA.SpellPrepInnate",
    pact: "DND4EBETA.PactMagic",
    prepared: "DND4EBETA.SpellPrepPrepared",
  },
  spellUpcastModes: ["always", "pact", "prepared"],
  spellProgression: {
    none: "DND4EBETA.SpellNone",
    full: "DND4EBETA.SpellProgFull",
    half: "DND4EBETA.SpellProgHalf",
    third: "DND4EBETA.SpellProgThird",
    pact: "DND4EBETA.SpellProgPact",
    artificer: "DND4EBETA.SpellProgArt",
  },
  spellScalingModes: {
    none: "DND4EBETA.SpellNone",
    cantrip: "DND4EBETA.SpellCantrip",
    level: "DND4EBETA.SpellLevel",
  },
  weaponTypes: {
    simpleM: "Simple Melee",
    militaryM: "Military Melee",
    superiorM: "Superior Melee",
    improvM: "Improvised Melee",
    simpleR: "Simple Ranged",
    militaryR: "Military Ranged",
    superiorR: "Superior Ranged",
    improvR: "Improvised Ranged",
    implement: "Implement",
    siegeM: "Siege Weapon (Melee)",
    siegeR: "Siege Weapon (Ranged)",
    naturalM: "Natural (Melee)",
    naturalR: "Natural (Ranged)",
    improv: "Improvised",
    other: "Other",
  },
  weaponHands: { hMain: "One Hand Main", hTwo: "Two Handed", hOff: "Off-Hand" },
  weaponProperties: {
    amm: "Ammunition",
    bru: "Brutal",
    def: "Defensive",
    hic: "High-Crit",
    imp: "Implement",
    lof: "Load-Free",
    lom: "Load-Minor",
    off: "Off-Hand",
    rch: "Reach",
    rel: "Reload",
    sml: "Small",
    spc: "Special",
    thv: "Throw-Heavy",
    tlg: "Throw-Light",
    two: "Two-Handed",
    ver: "Versatile",
  },
  weaponGroup: {
    axe: "Axe",
    blowgun: "Blowgun",
    bow: "Bow",
    cbow: "Cross Bow",
    dragon: "Dragon Shard",
    flail: "Flail",
    garrote: "Garrote",
    ham: "Hammer",
    bladeH: "Heavy Blade",
    bladeL: "Light Blade",
    mace: "Mace",
    pik: "Pick",
    pole: "Polearm",
    sling: "Sling",
    spear: "Spear",
    staff: "Staff",
    unarm: "Unarmed",
    whip: "Whip",
  },
  implementGroup: {
    holyS: "Holy Symbol",
    ki: "Ki Focus",
    orb: "Orb",
    rod: "Rod",
    staff: "Staff",
    tome: "Tome",
    totem: "Totem",
    wand: "Wand",
  },
  trainingLevels: {
    0: "DND4EBETA.NotTrained",
    5: "DND4EBETA.Trained",
    8: "DND4EBETA.FocusTrained",
  },
  conditionTypes: {
    blinded: "Blinded",
    dazed: "Dazed",
    deafened: "Deafened",
    bloodied: "DND4EBETA.ConBlood",
    slowed: "DND4EBETA.ConSlower",
    immobilized: "DND4EBETA.Immobilized",
    dominated: "Dominated",
    dying: "Dying",
    helpless: "Helpless",
    invisible: "Invisible",
    marked: "Marked",
    petrified: "Petrified",
    prone: "Prone",
    restrained: "Restrained",
    stunned: "Stunned",
    surprised: "Surprised",
    unconscious: "Unconscious",
    weakened: "Weakened",
  },
  statusEffect: [
    {
      id: "mark_1",
      label: "EFFECT.statusMark",
      icon: "systems/dnd4e/icons/statusEffects/mark_1.svg",
    },
    {
      id: "mark_2",
      label: "EFFECT.statusMark",
      icon: "systems/dnd4e/icons/statusEffects/mark_2.svg",
    },
    {
      id: "mark_3",
      label: "EFFECT.statusMark",
      icon: "systems/dnd4e/icons/statusEffects/mark_3.svg",
    },
    {
      id: "mark_4",
      label: "EFFECT.statusMark",
      icon: "systems/dnd4e/icons/statusEffects/mark_4.svg",
    },
    {
      id: "mark_5",
      label: "EFFECT.statusMark",
      icon: "systems/dnd4e/icons/statusEffects/mark_5.svg",
    },
    {
      id: "mark_6",
      label: "EFFECT.statusMark",
      icon: "systems/dnd4e/icons/statusEffects/mark_6.svg",
    },
    {
      id: "mark_7",
      label: "EFFECT.statusMark",
      icon: "systems/dnd4e/icons/statusEffects/mark_7.svg",
    },
    {
      id: "bloodied",
      label: "EFFECT.statusBloodied",
      icon: "systems/dnd4e/icons/statusEffects/bloodied.svg",
    },
    {
      id: "attack_up",
      label: "EFFECT.statusAttackUp",
      icon: "systems/dnd4e/icons/statusEffects/attack_up.svg",
    },
    {
      id: "attack_down",
      label: "EFFECT.statusAttackDown",
      icon: "systems/dnd4e/icons/statusEffects/attack_down.svg",
    },
    {
      id: "defUp",
      label: "EFFECT.statusDefUp",
      icon: "systems/dnd4e/icons/statusEffects/def_up.svg",
    },
    {
      id: "defDown",
      label: "EFFECT.statusDefDown",
      icon: "systems/dnd4e/icons/statusEffects/def_down.svg",
    },
    {
      id: "regen",
      label: "EFFECT.statusRegen",
      icon: "systems/dnd4e/icons/statusEffects/regen.svg",
    },
    {
      id: "ammo_count",
      label: "EFFECT.statusAmmoCount",
      icon: "systems/dnd4e/icons/statusEffects/ammo_count.svg",
    },
    {
      id: "curse",
      label: "EFFECT.statusCurse",
      icon: "systems/dnd4e/icons/statusEffects/curse.svg",
    },
    {
      id: "oath",
      label: "EFFECT.statusOath",
      icon: "systems/dnd4e/icons/statusEffects/oath.svg",
    },
    {
      id: "hunter_mark",
      label: "EFFECT.statusHunterMark",
      icon: "systems/dnd4e/icons/statusEffects/hunter_mark.svg",
    },
    {
      id: "target",
      label: "EFFECT.statusTarget",
      icon: "systems/dnd4e/icons/statusEffects/target.svg",
    },
    {
      id: "ongoing_1",
      label: "EFFECT.statusOngoing1",
      icon: "systems/dnd4e/icons/statusEffects/ongoing_1.svg",
    },
    {
      id: "ongoing_2",
      label: "EFFECT.statusOngoing2",
      icon: "systems/dnd4e/icons/statusEffects/ongoing_2.svg",
    },
    {
      id: "ongoing_3",
      label: "EFFECT.statusOngoing3",
      icon: "systems/dnd4e/icons/statusEffects/ongoing_3.svg",
    },
    {
      id: "blinded",
      label: "EFFECT.statusBlind",
      icon: "systems/dnd4e/icons/statusEffects/blinded.svg",
    },
    {
      id: "dazed",
      label: "EFFECT.statusDazed",
      icon: "systems/dnd4e/icons/statusEffects/dazed.svg",
    },
    {
      id: "dead",
      label: "EFFECT.statusDead",
      icon: "systems/dnd4e/icons/statusEffects/dead.svg",
    },
    {
      id: "deafened",
      label: "EFFECT.statusDeafened",
      icon: "systems/dnd4e/icons/statusEffects/deafened.svg",
    },
    {
      id: "disarmed",
      label: "EFFECT.statusDisarmed",
      icon: "systems/dnd4e/icons/statusEffects/disarmed.svg",
    },
    {
      id: "dominated",
      label: "EFFECT.statusDominated",
      icon: "systems/dnd4e/icons/statusEffects/dominated.svg",
    },
    {
      id: "drunk",
      label: "EFFECT.statusDrunk",
      icon: "systems/dnd4e/icons/statusEffects/drunk.svg",
    },
    {
      id: "dying",
      label: "EFFECT.statusDying",
      icon: "systems/dnd4e/icons/statusEffects/dying.svg",
    },
    {
      id: "flying",
      label: "EFFECT.statusFlying",
      icon: "systems/dnd4e/icons/statusEffects/flying.svg",
    },
    {
      id: "grabbed",
      label: "EFFECT.statusGrabbed",
      icon: "systems/dnd4e/icons/statusEffects/grabbed.svg",
    },
    {
      id: "immobilized",
      label: "EFFECT.statusImmobilized",
      icon: "systems/dnd4e/icons/statusEffects/immobilized.svg",
    },
    {
      id: "insubstantial",
      label: "EFFECT.statusInsubstantial",
      icon: "systems/dnd4e/icons/statusEffects/insubstantial.svg",
    },
    {
      id: "invisible",
      label: "EFFECT.statusInvisible",
      icon: "systems/dnd4e/icons/statusEffects/invisible.svg",
    },
    {
      id: "mounted",
      label: "EFFECT.statusMounted",
      icon: "systems/dnd4e/icons/statusEffects/mounted.svg",
    },
    {
      id: "petrified",
      label: "EFFECT.statusPetrified",
      icon: "systems/dnd4e/icons/statusEffects/petrified.svg",
    },
    {
      id: "prone",
      label: "EFFECT.statusProne",
      icon: "systems/dnd4e/icons/statusEffects/prone.svg",
    },
    {
      id: "removed",
      label: "EFFECT.statusRemoved",
      icon: "systems/dnd4e/icons/statusEffects/removed.svg",
    },
    {
      id: "restrained",
      label: "EFFECT.statusRestrained",
      icon: "systems/dnd4e/icons/statusEffects/restrained.svg",
    },
    {
      id: "sleeping",
      label: "EFFECT.statusSleeping",
      icon: "systems/dnd4e/icons/statusEffects/sleeping.svg",
    },
    {
      id: "slowed",
      label: "EFFECT.statusSlowed",
      icon: "systems/dnd4e/icons/statusEffects/slowed.svg",
    },
    {
      id: "sneaking",
      label: "EFFECT.statusSneaking",
      icon: "systems/dnd4e/icons/statusEffects/sneaking.svg",
    },
    {
      id: "stunned",
      label: "EFFECT.statusStunned",
      icon: "systems/dnd4e/icons/statusEffects/stunned.svg",
    },
    {
      id: "surprised",
      label: "EFFECT.statusSurprised",
      icon: "systems/dnd4e/icons/statusEffects/surprised.svg",
    },
    {
      id: "torch",
      label: "EFFECT.statusTorch",
      icon: "systems/dnd4e/icons/statusEffects/torch.svg",
    },
    {
      id: "unconscious",
      label: "EFFECT.statusUnconscious",
      icon: "systems/dnd4e/icons/statusEffects/unconscious.svg",
    },
    {
      id: "weakened",
      label: "EFFECT.statusWeakened",
      icon: "systems/dnd4e/icons/statusEffects/weakend.svg",
    },
  ],
  spoken: {
    Abyssal: "Abyssal",
    Common: "Common",
    DeepSpeech: "DeepSpeech",
    Draconic: "Draconic",
    Dwarven: "Dwarven",
    Elven: "Elven",
    Giant: "Giant",
    Goblin: "Goblin",
    Primordial: "Primordial",
    Supernal: "Supernal",
  },
  script: {
    Barazhad: "Barazhad",
    Common: "Common",
    Davek: "Davek",
    Iokharic: "Iokharic",
    Rellanic: "Rellanic",
  },
  CHARACTER_EXP_LEVELS: [
    0, 1000, 2250, 3750, 5500, 7500, 10000, 13000, 16500, 20500, 26000, 32000,
    39000, 47000, 57000, 69000, 83000, 99000, 119000, 143000, 175000, 210000,
    255000, 310000, 375000, 450000, 550000, 675000, 825000, 1000000,
  ],
  characterFlags: {
    powerfulBuild: {
      name: "DND4EBETA.FlagsPowerfulBuild",
      hint: "DND4EBETA.FlagsPowerfulBuildHint",
      section: "Racial Traits",
    },
    savageAttacks: {
      name: "DND4EBETA.FlagsSavageAttacks",
      hint: "DND4EBETA.FlagsSavageAttacksHint",
      section: "Racial Traits",
    },
    elvenAccuracy: {
      name: "DND4EBETA.FlagsElvenAccuracy",
      hint: "DND4EBETA.FlagsElvenAccuracyHint",
      section: "Racial Traits",
    },
    halflingLucky: {
      name: "DND4EBETA.FlagsHalflingLucky",
      hint: "DND4EBETA.FlagsHalflingLuckyHint",
      section: "Racial Traits",
    },
    initiativeAdv: {
      name: "DND4EBETA.FlagsInitiativeAdv",
      hint: "DND4EBETA.FlagsInitiativeAdvHint",
      section: "Feats",
    },
    initiativeAlert: {
      name: "DND4EBETA.FlagsAlert",
      hint: "DND4EBETA.FlagsAlertHint",
      section: "Feats",
    },
    jackOfAllTrades: {
      name: "DND4EBETA.FlagsJOAT",
      hint: "DND4EBETA.FlagsJOATHint",
      section: "Feats",
    },
    observantFeat: {
      name: "DND4EBETA.FlagsObservant",
      hint: "DND4EBETA.FlagsObservantHint",
      skills: ["prc", "inv"],
      section: "Feats",
    },
    reliableTalent: {
      name: "DND4EBETA.FlagsReliableTalent",
      hint: "DND4EBETA.FlagsReliableTalentHint",
      section: "Feats",
    },
    remarkableAthlete: {
      name: "DND4EBETA.FlagsRemarkableAthlete",
      hint: "DND4EBETA.FlagsRemarkableAthleteHint",
      abilities: ["str", "dex", "con"],
      section: "Feats",
    },
    weaponCriticalThreshold: {
      name: "DND4EBETA.FlagsCritThreshold",
      hint: "DND4EBETA.FlagsCritThresholdHint",
      section: "Feats",
      placeholder: 20,
    },
  },
  allowedActorFlags: [
    "isPolymorphed",
    "originalActor",
    "powerfulBuild",
    "savageAttacks",
    "elvenAccuracy",
    "halflingLucky",
    "initiativeAdv",
    "initiativeAlert",
    "jackOfAllTrades",
    "observantFeat",
    "reliableTalent",
    "remarkableAthlete",
    "weaponCriticalThreshold",
  ],
};
export default config