// D&D 5e Feats Data
// Sources: https://5thsrd.com/General_Rules/feats/, https://www.dndbeyond.com/feats

const FEATS = {
    alert: {
        name: "Alert",
        prerequisite: null,
        description: "Always on the lookout for danger, you gain the following benefits:",
        benefits: [
            "You gain a +5 bonus to initiative.",
            "You can't be surprised while you are conscious.",
            "Other creatures don't gain advantage on attack rolls against you as a result of being unseen by you."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null
    },
    athlete: {
        name: "Athlete",
        prerequisite: null,
        description: "You have undergone extensive physical training to gain the following benefits:",
        benefits: [
            "Increase your Strength or Dexterity score by 1, to a maximum of 20.",
            "When you are prone, standing up uses only 5 feet of your movement.",
            "Climbing doesn't cost you extra movement.",
            "You can make a running long jump or a running high jump after moving only 5 feet on foot, rather than 10 feet."
        ],
        abilityScoreIncrease: { choice: ["str", "dex"], amount: 1 },
        grantsSpells: null,
        grantsProficiencies: null
    },
    actor: {
        name: "Actor",
        prerequisite: null,
        description: "Skilled at mimicry and dramatics, you gain the following benefits:",
        benefits: [
            "Increase your Charisma score by 1, to a maximum of 20.",
            "You have advantage on Charisma (Deception) and Charisma (Performance) checks when trying to pass yourself off as a different person.",
            "You can mimic the speech of another person or the sounds made by other creatures. You must have heard the person speaking, or heard the creature make the sound, for at least 1 minute. A successful Wisdom (Insight) check contested by your Charisma (Deception) check allows a listener to determine that the effect is faked."
        ],
        abilityScoreIncrease: { fixed: "cha", amount: 1 },
        grantsSpells: null,
        grantsProficiencies: null
    },
    charger: {
        name: "Charger",
        prerequisite: null,
        description: "When you use your action to Dash, you can use a bonus action to make one melee weapon attack or to shove a creature.",
        benefits: [
            "When you use your action to Dash, you can use a bonus action to make one melee weapon attack or to shove a creature.",
            "If you move at least 10 feet in a straight line immediately before taking this bonus action, you either gain a +5 bonus to the attack's damage roll (if you chose to make a melee attack and hit) or push the target up to 10 feet away from you (if you chose to shove and you succeed)."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null
    },
    crossbowExpert: {
        name: "Crossbow Expert",
        prerequisite: null,
        description: "Thanks to extensive practice with the crossbow, you gain the following benefits:",
        benefits: [
            "You ignore the loading quality of crossbows with which you are proficient.",
            "Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls.",
            "When you use the Attack action and attack with a one-handed weapon, you can use a bonus action to attack with a hand crossbow you are holding."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null
    },
    defensiveDuelist: {
        name: "Defensive Duelist",
        prerequisite: { abilityScore: { dex: 13 } },
        description: "When you are wielding a finesse weapon with which you are proficient and another creature hits you with a melee attack, you can use your reaction to add your proficiency bonus to your AC for that attack, potentially causing the attack to miss you.",
        benefits: [
            "When you are wielding a finesse weapon with which you are proficient and another creature hits you with a melee attack, you can use your reaction to add your proficiency bonus to your AC for that attack, potentially causing the attack to miss you."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null
    },
    dualWielder: {
        name: "Dual Wielder",
        prerequisite: null,
        description: "You master fighting with two weapons, gaining the following benefits:",
        benefits: [
            "You gain a +1 bonus to AC while you are wielding a separate melee weapon in each hand.",
            "You can use two-weapon fighting even when the one-handed melee weapons you are wielding aren't light.",
            "You can draw or stow two one-handed weapons when you would normally be able to draw or stow only one."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null
    },
    dungeonDelver: {
        name: "Dungeon Delver",
        prerequisite: null,
        description: "Alert to the hidden traps and secret doors found in many dungeons, you gain the following benefits:",
        benefits: [
            "You have advantage on Wisdom (Perception) and Intelligence (Investigation) checks made to detect the presence of secret doors.",
            "You have advantage on saving throws made to avoid or resist traps.",
            "You have resistance to the damage dealt by traps.",
            "Traveling at a fast pace doesn't impose the normal -5 penalty on your passive Wisdom (Perception) score."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null
    },
    durable: {
        name: "Durable",
        prerequisite: null,
        description: "Hardy and resilient, you gain the following benefits:",
        benefits: [
            "Increase your Constitution score by 1, to a maximum of 20.",
            "When you roll a Hit Die to regain hit points, the minimum number of hit points you regain from the roll equals twice your Constitution modifier (minimum of 2)."
        ],
        abilityScoreIncrease: { fixed: "con", amount: 1 },
        grantsSpells: null,
        grantsProficiencies: null
    },
    // Elemental Adept - Base version with element choice
    elementalAdept: {
        name: "Elemental Adept",
        prerequisite: { spellcasting: true },
        description: "When you gain this feat, choose one of the following damage types: acid, cold, fire, lightning, or thunder. Spells you cast ignore resistance to damage of the chosen type. In addition, when you roll damage for a spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2.",
        benefits: [
            "Choose one damage type: acid, cold, fire, lightning, or thunder.",
            "Spells you cast ignore resistance to damage of the chosen type.",
            "When you roll damage for a spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2.",
            "You can select this feat multiple times. Each time you do so, you must choose a different damage type."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null,
        repeatable: true,
        elementChoice: ["acid", "cold", "fire", "lightning", "thunder"]
    },
    // Elemental Adept Variants for each element
    elementalAdeptAcid: {
        name: "Elemental Adept (Acid)",
        prerequisite: { spellcasting: true },
        description: "You have focused your magical studies on acid damage. Spells you cast ignore resistance to acid damage. In addition, when you roll damage for a spell you cast that deals acid damage, you can treat any 1 on a damage die as a 2.",
        benefits: [
            "Spells you cast ignore resistance to acid damage.",
            "When you roll damage for a spell you cast that deals acid damage, you can treat any 1 on a damage die as a 2."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null,
        elementType: "acid"
    },
    elementalAdeptCold: {
        name: "Elemental Adept (Cold)",
        prerequisite: { spellcasting: true },
        description: "You have focused your magical studies on cold damage. Spells you cast ignore resistance to cold damage. In addition, when you roll damage for a spell you cast that deals cold damage, you can treat any 1 on a damage die as a 2.",
        benefits: [
            "Spells you cast ignore resistance to cold damage.",
            "When you roll damage for a spell you cast that deals cold damage, you can treat any 1 on a damage die as a 2."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null,
        elementType: "cold"
    },
    elementalAdeptFire: {
        name: "Elemental Adept (Fire)",
        prerequisite: { spellcasting: true },
        description: "You have focused your magical studies on fire damage. Spells you cast ignore resistance to fire damage. In addition, when you roll damage for a spell you cast that deals fire damage, you can treat any 1 on a damage die as a 2.",
        benefits: [
            "Spells you cast ignore resistance to fire damage.",
            "When you roll damage for a spell you cast that deals fire damage, you can treat any 1 on a damage die as a 2."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null,
        elementType: "fire"
    },
    elementalAdeptLightning: {
        name: "Elemental Adept (Lightning)",
        prerequisite: { spellcasting: true },
        description: "You have focused your magical studies on lightning damage. Spells you cast ignore resistance to lightning damage. In addition, when you roll damage for a spell you cast that deals lightning damage, you can treat any 1 on a damage die as a 2.",
        benefits: [
            "Spells you cast ignore resistance to lightning damage.",
            "When you roll damage for a spell you cast that deals lightning damage, you can treat any 1 on a damage die as a 2."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null,
        elementType: "lightning"
    },
    elementalAdeptThunder: {
        name: "Elemental Adept (Thunder)",
        prerequisite: { spellcasting: true },
        description: "You have focused your magical studies on thunder damage. Spells you cast ignore resistance to thunder damage. In addition, when you roll damage for a spell you cast that deals thunder damage, you can treat any 1 on a damage die as a 2.",
        benefits: [
            "Spells you cast ignore resistance to thunder damage.",
            "When you roll damage for a spell you cast that deals thunder damage, you can treat any 1 on a damage die as a 2."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null,
        elementType: "thunder"
    },
    grappler: {
        name: "Grappler",
        prerequisite: { abilityScore: { str: 13 } },
        description: "You've developed the skills necessary to hold your own in close-quarters grappling. You gain the following benefits:",
        benefits: [
            "You have advantage on attack rolls against a creature you are grappling.",
            "You can use your action to try to pin a creature grappled by you. To do so, make another grapple check. If you succeed, you and the creature are both restrained until the grapple ends."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null
    },
    greatWeaponMaster: {
        name: "Great Weapon Master",
        prerequisite: null,
        description: "You've learned to put the weight of a weapon to your advantage, letting its momentum empower your strikes. You gain the following benefits:",
        benefits: [
            "On your turn, when you score a critical hit with a melee weapon or reduce a creature to 0 hit points with one, you can make one melee weapon attack as a bonus action.",
            "Before you make a melee attack with a heavy weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null
    },
    healer: {
        name: "Healer",
        prerequisite: null,
        description: "You are an able physician, allowing you to mend wounds quickly and get your allies back in the fight. You gain the following benefits:",
        benefits: [
            "When you use a healer's kit to stabilize a dying creature, that creature also regains 1 hit point.",
            "As an action, you can spend one use of a healer's kit to tend to a creature and restore 1d6 + 4 hit points to it, plus additional hit points equal to the creature's maximum number of Hit Dice. The creature can't regain hit points from this feat again until it finishes a short or long rest."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null
    },
    heavilyArmored: {
        name: "Heavily Armored",
        prerequisite: { proficiency: "mediumArmor" },
        description: "You have trained to master the use of heavy armor, gaining the following benefits:",
        benefits: [
            "Increase your Strength score by 1, to a maximum of 20.",
            "You gain proficiency with heavy armor."
        ],
        abilityScoreIncrease: { fixed: "str", amount: 1 },
        grantsSpells: null,
        grantsProficiencies: { armor: ["heavy"] }
    },
    heavyArmorMaster: {
        name: "Heavy Armor Master",
        prerequisite: { proficiency: "heavyArmor" },
        description: "You can use your armor to deflect strikes that would kill others. You gain the following benefits:",
        benefits: [
            "Increase your Strength score by 1, to a maximum of 20.",
            "While you are wearing heavy armor, bludgeoning, piercing, and slashing damage that you take from nonmagical weapons is reduced by 3."
        ],
        abilityScoreIncrease: { fixed: "str", amount: 1 },
        grantsSpells: null,
        grantsProficiencies: null
    },
    inspiringLeader: {
        name: "Inspiring Leader",
        prerequisite: { abilityScore: { cha: 13 } },
        description: "You can spend 10 minutes inspiring your companions, shoring up their resolve to fight.",
        benefits: [
            "You can spend 10 minutes inspiring your companions, shoring up their resolve to fight.",
            "Choose up to six friendly creatures (which can include yourself) within 30 feet of you who can see or hear you and who can understand you.",
            "Each creature can gain temporary hit points equal to your level + your Charisma modifier.",
            "A creature can't gain temporary hit points from this feat again until it has finished a short or long rest."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null
    },
    keenMind: {
        name: "Keen Mind",
        prerequisite: null,
        description: "You have a mind that can track time, direction, and detail with uncanny precision. You gain the following benefits:",
        benefits: [
            "Increase your Intelligence score by 1, to a maximum of 20.",
            "You always know which way is north.",
            "You always know the number of hours left before the next sunrise or sunset.",
            "You can accurately recall anything you have seen or heard within the past month."
        ],
        abilityScoreIncrease: { fixed: "int", amount: 1 },
        grantsSpells: null,
        grantsProficiencies: null
    },
    lightlyArmored: {
        name: "Lightly Armored",
        prerequisite: null,
        description: "You have trained to master the use of light armor, gaining the following benefits:",
        benefits: [
            "Increase your Strength or Dexterity score by 1, to a maximum of 20.",
            "You gain proficiency with light armor."
        ],
        abilityScoreIncrease: { choice: ["str", "dex"], amount: 1 },
        grantsSpells: null,
        grantsProficiencies: { armor: ["light"] }
    },
    linguist: {
        name: "Linguist",
        prerequisite: null,
        description: "You have studied languages and codes, gaining the following benefits:",
        benefits: [
            "Increase your Intelligence score by 1, to a maximum of 20.",
            "You learn three languages of your choice.",
            "You can ably create written ciphers. Others can't decipher a code you create unless you teach them, they succeed on an Intelligence check (DC equal to your Intelligence score + your proficiency bonus), or they use magic to decipher it."
        ],
        abilityScoreIncrease: { fixed: "int", amount: 1 },
        grantsSpells: null,
        grantsProficiencies: { languages: { choice: 3 } }
    },
    lucky: {
        name: "Lucky",
        prerequisite: null,
        description: "You have inexplicable luck that seems to kick in at just the right moment.",
        benefits: [
            "You have 3 luck points. Whenever you make an attack roll, an ability check, or a saving throw, you can spend one luck point to roll an additional d20.",
            "You can choose to spend one of your luck points after you roll the die, but before the outcome is determined. You choose which of the d20s is used for the attack roll, ability check, or saving throw.",
            "You can also spend one luck point when an attack roll is made against you. Roll a d20, and then choose whether the attack uses the attacker's roll or yours.",
            "If more than one creature spends a luck point to influence the outcome of a roll, the points cancel each other out; no additional dice are rolled.",
            "You regain your expended luck points when you finish a long rest."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null,
        resourcePool: { name: "Luck Points", amount: 3, rechargeOn: "longRest" }
    },
    mageSlayer: {
        name: "Mage Slayer",
        prerequisite: null,
        description: "You have practiced techniques useful in melee combat against spellcasters, gaining the following benefits:",
        benefits: [
            "When a creature within 5 feet of you casts a spell, you can use your reaction to make a melee weapon attack against that creature.",
            "When you damage a creature that is concentrating on a spell, that creature has disadvantage on the saving throw it makes to maintain its concentration.",
            "You have advantage on saving throws against spells cast by creatures within 5 feet of you."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null
    },
    // Magic Initiate - Base version with class choice
    magicInitiate: {
        name: "Magic Initiate",
        prerequisite: null,
        description: "Choose a class: bard, cleric, druid, sorcerer, warlock, or wizard. You learn two cantrips of your choice from that class's spell list. In addition, choose one 1st-level spell to learn from that same list. Using this feat, you can cast the spell once at its lowest level, and you must finish a long rest before you can cast it in this way again.",
        benefits: [
            "Choose a class: bard, cleric, druid, sorcerer, warlock, or wizard.",
            "You learn two cantrips of your choice from that class's spell list.",
            "Choose one 1st-level spell to learn from that same list.",
            "Using this feat, you can cast the spell once at its lowest level, and you must finish a long rest before you can cast it in this way again.",
            "Your spellcasting ability for these spells depends on the class you chose: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for wizard."
        ],
        abilityScoreIncrease: null,
        grantsSpells: { cantrips: { choice: 2 }, level1: { choice: 1, usesPerLongRest: 1 } },
        grantsProficiencies: null,
        classChoice: ["bard", "cleric", "druid", "sorcerer", "warlock", "wizard"]
    },
    // Magic Initiate Variants for each class
    magicInitiateBard: {
        name: "Magic Initiate (Bard)",
        prerequisite: null,
        description: "You have learned the basics of bardic magic. You learn two cantrips of your choice from the bard spell list. In addition, choose one 1st-level spell to learn from the bard spell list. Using this feat, you can cast the spell once at its lowest level, and you must finish a long rest before you can cast it in this way again. Charisma is your spellcasting ability for these spells.",
        benefits: [
            "You learn two cantrips of your choice from the bard spell list.",
            "You learn one 1st-level spell from the bard spell list.",
            "You can cast the 1st-level spell once without expending a spell slot, regaining the ability to do so when you finish a long rest.",
            "Charisma is your spellcasting ability for these spells."
        ],
        abilityScoreIncrease: null,
        grantsSpells: {
            cantrips: { choice: 2, spellList: "bard" },
            level1: { choice: 1, spellList: "bard", usesPerLongRest: 1 }
        },
        grantsProficiencies: null,
        spellcastingAbility: "cha",
        sourceClass: "bard"
    },
    magicInitiateCleric: {
        name: "Magic Initiate (Cleric)",
        prerequisite: null,
        description: "You have learned the basics of divine magic from the cleric tradition. You learn two cantrips of your choice from the cleric spell list. In addition, choose one 1st-level spell to learn from the cleric spell list. Using this feat, you can cast the spell once at its lowest level, and you must finish a long rest before you can cast it in this way again. Wisdom is your spellcasting ability for these spells.",
        benefits: [
            "You learn two cantrips of your choice from the cleric spell list.",
            "You learn one 1st-level spell from the cleric spell list.",
            "You can cast the 1st-level spell once without expending a spell slot, regaining the ability to do so when you finish a long rest.",
            "Wisdom is your spellcasting ability for these spells."
        ],
        abilityScoreIncrease: null,
        grantsSpells: {
            cantrips: { choice: 2, spellList: "cleric" },
            level1: { choice: 1, spellList: "cleric", usesPerLongRest: 1 }
        },
        grantsProficiencies: null,
        spellcastingAbility: "wis",
        sourceClass: "cleric"
    },
    magicInitiateDruid: {
        name: "Magic Initiate (Druid)",
        prerequisite: null,
        description: "You have learned the basics of druidic magic. You learn two cantrips of your choice from the druid spell list. In addition, choose one 1st-level spell to learn from the druid spell list. Using this feat, you can cast the spell once at its lowest level, and you must finish a long rest before you can cast it in this way again. Wisdom is your spellcasting ability for these spells.",
        benefits: [
            "You learn two cantrips of your choice from the druid spell list.",
            "You learn one 1st-level spell from the druid spell list.",
            "You can cast the 1st-level spell once without expending a spell slot, regaining the ability to do so when you finish a long rest.",
            "Wisdom is your spellcasting ability for these spells."
        ],
        abilityScoreIncrease: null,
        grantsSpells: {
            cantrips: { choice: 2, spellList: "druid" },
            level1: { choice: 1, spellList: "druid", usesPerLongRest: 1 }
        },
        grantsProficiencies: null,
        spellcastingAbility: "wis",
        sourceClass: "druid"
    },
    magicInitiateSorcerer: {
        name: "Magic Initiate (Sorcerer)",
        prerequisite: null,
        description: "You have learned the basics of sorcerous magic. You learn two cantrips of your choice from the sorcerer spell list. In addition, choose one 1st-level spell to learn from the sorcerer spell list. Using this feat, you can cast the spell once at its lowest level, and you must finish a long rest before you can cast it in this way again. Charisma is your spellcasting ability for these spells.",
        benefits: [
            "You learn two cantrips of your choice from the sorcerer spell list.",
            "You learn one 1st-level spell from the sorcerer spell list.",
            "You can cast the 1st-level spell once without expending a spell slot, regaining the ability to do so when you finish a long rest.",
            "Charisma is your spellcasting ability for these spells."
        ],
        abilityScoreIncrease: null,
        grantsSpells: {
            cantrips: { choice: 2, spellList: "sorcerer" },
            level1: { choice: 1, spellList: "sorcerer", usesPerLongRest: 1 }
        },
        grantsProficiencies: null,
        spellcastingAbility: "cha",
        sourceClass: "sorcerer"
    },
    magicInitiateWarlock: {
        name: "Magic Initiate (Warlock)",
        prerequisite: null,
        description: "You have learned the basics of warlock magic. You learn two cantrips of your choice from the warlock spell list. In addition, choose one 1st-level spell to learn from the warlock spell list. Using this feat, you can cast the spell once at its lowest level, and you must finish a long rest before you can cast it in this way again. Charisma is your spellcasting ability for these spells.",
        benefits: [
            "You learn two cantrips of your choice from the warlock spell list.",
            "You learn one 1st-level spell from the warlock spell list.",
            "You can cast the 1st-level spell once without expending a spell slot, regaining the ability to do so when you finish a long rest.",
            "Charisma is your spellcasting ability for these spells."
        ],
        abilityScoreIncrease: null,
        grantsSpells: {
            cantrips: { choice: 2, spellList: "warlock" },
            level1: { choice: 1, spellList: "warlock", usesPerLongRest: 1 }
        },
        grantsProficiencies: null,
        spellcastingAbility: "cha",
        sourceClass: "warlock"
    },
    magicInitiateWizard: {
        name: "Magic Initiate (Wizard)",
        prerequisite: null,
        description: "You have learned the basics of arcane magic from the wizard tradition. You learn two cantrips of your choice from the wizard spell list. In addition, choose one 1st-level spell to learn from the wizard spell list. Using this feat, you can cast the spell once at its lowest level, and you must finish a long rest before you can cast it in this way again. Intelligence is your spellcasting ability for these spells.",
        benefits: [
            "You learn two cantrips of your choice from the wizard spell list.",
            "You learn one 1st-level spell from the wizard spell list.",
            "You can cast the 1st-level spell once without expending a spell slot, regaining the ability to do so when you finish a long rest.",
            "Intelligence is your spellcasting ability for these spells."
        ],
        abilityScoreIncrease: null,
        grantsSpells: {
            cantrips: { choice: 2, spellList: "wizard" },
            level1: { choice: 1, spellList: "wizard", usesPerLongRest: 1 }
        },
        grantsProficiencies: null,
        spellcastingAbility: "int",
        sourceClass: "wizard"
    },
    martialAdept: {
        name: "Martial Adept",
        prerequisite: null,
        description: "You have martial training that allows you to perform special combat maneuvers. You gain the following benefits:",
        benefits: [
            "You learn two maneuvers of your choice from among those available to the Battle Master archetype in the fighter class. If a maneuver you use requires your target to make a saving throw to resist the maneuver's effects, the saving throw DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice).",
            "You gain one superiority die, which is a d6 (this die is added to any superiority dice you have from another source). This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or long rest."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null,
        grantsManeuvers: { choice: 2 },
        resourcePool: { name: "Superiority Dice", amount: 1, dieSize: "d6", rechargeOn: "shortRest" }
    },
    mediumArmorMaster: {
        name: "Medium Armor Master",
        prerequisite: { proficiency: "mediumArmor" },
        description: "You have practiced moving in medium armor to gain the following benefits:",
        benefits: [
            "Wearing medium armor doesn't impose disadvantage on your Dexterity (Stealth) checks.",
            "When you wear medium armor, you can add 3, rather than 2, to your AC if you have a Dexterity of 16 or higher."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null
    },
    mobile: {
        name: "Mobile",
        prerequisite: null,
        description: "You are exceptionally speedy and agile. You gain the following benefits:",
        benefits: [
            "Your speed increases by 10 feet.",
            "When you use the Dash action, difficult terrain doesn't cost you extra movement on that turn.",
            "When you make a melee attack against a creature, you don't provoke opportunity attacks from that creature for the rest of the turn, whether you hit or not."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null,
        speedBonus: 10
    },
    moderatelyArmored: {
        name: "Moderately Armored",
        prerequisite: { proficiency: "lightArmor" },
        description: "You have trained to master the use of medium armor and shields, gaining the following benefits:",
        benefits: [
            "Increase your Strength or Dexterity score by 1, to a maximum of 20.",
            "You gain proficiency with medium armor and shields."
        ],
        abilityScoreIncrease: { choice: ["str", "dex"], amount: 1 },
        grantsSpells: null,
        grantsProficiencies: { armor: ["medium", "shields"] }
    },
    mountedCombatant: {
        name: "Mounted Combatant",
        prerequisite: null,
        description: "You are a dangerous foe to face while mounted. While you are mounted and aren't incapacitated, you gain the following benefits:",
        benefits: [
            "You have advantage on melee attack rolls against any unmounted creature that is smaller than your mount.",
            "You can force an attack targeted at your mount to target you instead.",
            "If your mount is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null
    },
    observant: {
        name: "Observant",
        prerequisite: null,
        description: "Quick to notice details of your environment, you gain the following benefits:",
        benefits: [
            "Increase your Intelligence or Wisdom score by 1, to a maximum of 20.",
            "If you can see a creature's mouth while it is speaking a language you understand, you can interpret what it's saying by reading its lips.",
            "You have a +5 bonus to your passive Wisdom (Perception) and passive Intelligence (Investigation) scores."
        ],
        abilityScoreIncrease: { choice: ["int", "wis"], amount: 1 },
        grantsSpells: null,
        grantsProficiencies: null,
        passiveBonus: { perception: 5, investigation: 5 }
    },
    polearmMaster: {
        name: "Polearm Master",
        prerequisite: null,
        description: "You can keep your enemies at bay with reach weapons. You gain the following benefits:",
        benefits: [
            "When you take the Attack action and attack with only a glaive, halberd, quarterstaff, or spear, you can use a bonus action to make a melee attack with the opposite end of the weapon; this attack uses the same ability modifier as the primary attack. The weapon's damage die for this attack is a d4, and the attack deals bludgeoning damage.",
            "While you are wielding a glaive, halberd, pike, quarterstaff, or spear, other creatures provoke an opportunity attack from you when they enter your reach."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null,
        applicableWeapons: ["glaive", "halberd", "pike", "quarterstaff", "spear"]
    },
    resilient: {
        name: "Resilient",
        prerequisite: null,
        description: "Choose one ability score. You gain the following benefits:",
        benefits: [
            "Increase the chosen ability score by 1, to a maximum of 20.",
            "You gain proficiency in saving throws using the chosen ability."
        ],
        abilityScoreIncrease: { choice: ["str", "dex", "con", "int", "wis", "cha"], amount: 1 },
        grantsSpells: null,
        grantsProficiencies: { savingThrows: { choice: 1, options: ["str", "dex", "con", "int", "wis", "cha"] } }
    },
    ritualCaster: {
        name: "Ritual Caster",
        prerequisite: { abilityScore: { int: 13 }, or: { abilityScore: { wis: 13 } } },
        description: "You have learned a number of spells that you can cast as rituals. These spells are written in a ritual book, which you must have in hand while casting one of them.",
        benefits: [
            "When you choose this feat, you acquire a ritual book holding two 1st-level spells of your choice.",
            "Choose one of the following classes: bard, cleric, druid, sorcerer, warlock, or wizard. You must choose your spells from that class's spell list, and the spells you choose must have the ritual tag.",
            "Your spellcasting ability for these spells is Intelligence if you chose wizard, Wisdom if you chose cleric or druid, or Charisma if you chose bard, sorcerer, or warlock.",
            "If you come across a spell in written form, such as a magical spell scroll or a wizard's spellbook, you might be able to add it to your ritual book if the spell is on the spell list of the class you chose, the spell's level is no higher than half your level (rounded up), and you can spare the time to transcribe the spell. For each level of the spell, the transcription process takes 2 hours and costs 50 gp."
        ],
        abilityScoreIncrease: null,
        grantsSpells: { rituals: { choice: 2, level: 1, mustHaveRitualTag: true } },
        grantsProficiencies: null,
        classChoice: ["bard", "cleric", "druid", "sorcerer", "warlock", "wizard"]
    },
    savageAttacker: {
        name: "Savage Attacker",
        prerequisite: null,
        description: "Once per turn when you roll damage for a melee weapon attack, you can reroll the weapon's damage dice and use either total.",
        benefits: [
            "Once per turn when you roll damage for a melee weapon attack, you can reroll the weapon's damage dice and use either total."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null
    },
    sentinel: {
        name: "Sentinel",
        prerequisite: null,
        description: "You have mastered techniques to take advantage of every drop in any enemy's guard, gaining the following benefits:",
        benefits: [
            "When you hit a creature with an opportunity attack, the creature's speed becomes 0 for the rest of the turn.",
            "Creatures provoke opportunity attacks from you even if they take the Disengage action before leaving your reach.",
            "When a creature within 5 feet of you makes an attack against a target other than you (and that target doesn't have this feat), you can use your reaction to make a melee weapon attack against the attacking creature."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null
    },
    sharpshooter: {
        name: "Sharpshooter",
        prerequisite: null,
        description: "You have mastered ranged weapons and can make shots that others find impossible. You gain the following benefits:",
        benefits: [
            "Attacking at long range doesn't impose disadvantage on your ranged weapon attack rolls.",
            "Your ranged weapon attacks ignore half cover and three-quarters cover.",
            "Before you make an attack with a ranged weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null
    },
    shieldMaster: {
        name: "Shield Master",
        prerequisite: null,
        description: "You use shields not just for protection but also for offense. You gain the following benefits while you are wielding a shield:",
        benefits: [
            "If you take the Attack action on your turn, you can use a bonus action to try to shove a creature within 5 feet of you with your shield.",
            "If you aren't incapacitated, you can add your shield's AC bonus to any Dexterity saving throw you make against a spell or other harmful effect that targets only you.",
            "If you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you can use your reaction to take no damage if you succeed on the saving throw, interposing your shield between yourself and the source of the effect."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null
    },
    skilled: {
        name: "Skilled",
        prerequisite: null,
        description: "You gain proficiency in any combination of three skills or tools of your choice.",
        benefits: [
            "You gain proficiency in any combination of three skills or tools of your choice."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: { skillsOrTools: { choice: 3 } }
    },
    skulker: {
        name: "Skulker",
        prerequisite: { abilityScore: { dex: 13 } },
        description: "You are expert at slinking through shadows. You gain the following benefits:",
        benefits: [
            "You can try to hide when you are lightly obscured from the creature from which you are hiding.",
            "When you are hidden from a creature and miss it with a ranged weapon attack, making the attack doesn't reveal your position.",
            "Dim light doesn't impose disadvantage on your Wisdom (Perception) checks relying on sight."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null
    },
    spellSniper: {
        name: "Spell Sniper",
        prerequisite: { spellcasting: true },
        description: "You have learned techniques to enhance your attacks with certain kinds of spells, gaining the following benefits:",
        benefits: [
            "When you cast a spell that requires you to make an attack roll, the spell's range is doubled.",
            "Your ranged spell attacks ignore half cover and three-quarters cover.",
            "You learn one cantrip that requires an attack roll. Choose the cantrip from the bard, cleric, druid, sorcerer, warlock, or wizard spell list. Your spellcasting ability for this cantrip depends on the spell list you chose from: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for wizard."
        ],
        abilityScoreIncrease: null,
        grantsSpells: { cantrips: { choice: 1, mustRequireAttackRoll: true, spellListChoice: ["bard", "cleric", "druid", "sorcerer", "warlock", "wizard"] } },
        grantsProficiencies: null
    },
    tavernBrawler: {
        name: "Tavern Brawler",
        prerequisite: null,
        description: "Accustomed to rough-and-tumble fighting using whatever weapons happen to be at hand, you gain the following benefits:",
        benefits: [
            "Increase your Strength or Constitution score by 1, to a maximum of 20.",
            "You are proficient with improvised weapons.",
            "Your unarmed strike uses a d4 for damage.",
            "When you hit a creature with an unarmed strike or an improvised weapon on your turn, you can use a bonus action to attempt to grapple the target."
        ],
        abilityScoreIncrease: { choice: ["str", "con"], amount: 1 },
        grantsSpells: null,
        grantsProficiencies: { weapons: ["improvised"] },
        unarmedStrikeDie: "d4"
    },
    tough: {
        name: "Tough",
        prerequisite: null,
        description: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points.",
        benefits: [
            "Your hit point maximum increases by an amount equal to twice your level when you gain this feat.",
            "Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null,
        hpBonusPerLevel: 2
    },
    warCaster: {
        name: "War Caster",
        prerequisite: { spellcasting: true },
        description: "You have practiced casting spells in the midst of combat, learning techniques that grant you the following benefits:",
        benefits: [
            "You have advantage on Constitution saving throws that you make to maintain your concentration on a spell when you take damage.",
            "You can perform the somatic components of spells even when you have weapons or a shield in one or both hands.",
            "When a hostile creature's movement provokes an opportunity attack from you, you can use your reaction to cast a spell at the creature, rather than making an opportunity attack. The spell must have a casting time of 1 action and must target only that creature."
        ],
        abilityScoreIncrease: null,
        grantsSpells: null,
        grantsProficiencies: null
    },
    weaponMaster: {
        name: "Weapon Master",
        prerequisite: null,
        description: "You have practiced extensively with a variety of weapons, gaining the following benefits:",
        benefits: [
            "Increase your Strength or Dexterity score by 1, to a maximum of 20.",
            "You gain proficiency with four weapons of your choice. Each one must be a simple or a martial weapon."
        ],
        abilityScoreIncrease: { choice: ["str", "dex"], amount: 1 },
        grantsSpells: null,
        grantsProficiencies: { weapons: { choice: 4, type: ["simple", "martial"] } }
    }
};

// Helper function to get all feats as an array
function getAllFeats() {
    return Object.values(FEATS);
}

// Helper function to get feats by prerequisite type
function getFeatsByPrerequisite(prereqType) {
    return Object.values(FEATS).filter(feat => {
        if (!feat.prerequisite) return prereqType === null;
        if (typeof feat.prerequisite === 'object') {
            return Object.keys(feat.prerequisite).includes(prereqType);
        }
        return false;
    });
}

// Helper function to get feats that grant ability score increases
function getFeatsWithASI() {
    return Object.values(FEATS).filter(feat => feat.abilityScoreIncrease !== null);
}

// Helper function to get feats that grant spells
function getFeatsWithSpells() {
    return Object.values(FEATS).filter(feat => feat.grantsSpells !== null);
}

// Helper function to get feats that grant proficiencies
function getFeatsWithProficiencies() {
    return Object.values(FEATS).filter(feat => feat.grantsProficiencies !== null);
}

// Helper function to get all Elemental Adept variants
function getElementalAdeptVariants() {
    return Object.entries(FEATS)
        .filter(([key, feat]) => key.startsWith('elementalAdept') && feat.elementType)
        .map(([key, feat]) => feat);
}

// Helper function to get all Magic Initiate variants
function getMagicInitiateVariants() {
    return Object.entries(FEATS)
        .filter(([key, feat]) => key.startsWith('magicInitiate') && feat.sourceClass)
        .map(([key, feat]) => feat);
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        FEATS,
        getAllFeats,
        getFeatsByPrerequisite,
        getFeatsWithASI,
        getFeatsWithSpells,
        getFeatsWithProficiencies,
        getElementalAdeptVariants,
        getMagicInitiateVariants
    };
}
