// D&D 5e SRD Classes Data
// Source: https://www.5esrd.com/classes/

const CLASSES = {
    barbarian: {
        name: "Barbarian",
        description: "A fierce warrior of primitive background who can enter a battle rage.",
        hitDie: 12,
        primaryAbility: "Strength",
        savingThrows: ["str", "con"],
        armorProficiencies: ["Light armor", "Medium armor", "Shields"],
        weaponProficiencies: ["Simple weapons", "Martial weapons"],
        skillChoices: {
            count: 2,
            options: ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"]
        },
        startingEquipment: [
            "A greataxe OR any martial melee weapon",
            "Two handaxes OR any simple weapon",
            "An explorer's pack and four javelins"
        ],
        features: {
            1: [
                {
                    name: "Rage",
                    description: "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain: advantage on Strength checks and Strength saving throws, +2 bonus damage on melee weapon attacks using Strength (increases to +3 at 9th level, +4 at 16th level), and resistance to bludgeoning, piercing, and slashing damage. Your rage lasts for 1 minute and ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature or taken damage since your last turn. You can rage 2 times per long rest (increases at higher levels)."
                },
                {
                    name: "Unarmored Defense",
                    description: "While you are not wearing any armor, your AC equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit."
                }
            ],
            2: [
                {
                    name: "Reckless Attack",
                    description: "You can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn."
                },
                {
                    name: "Danger Sense",
                    description: "You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. You don't gain this benefit if you are blinded, deafened, or incapacitated."
                }
            ],
            3: [
                {
                    name: "Primal Path",
                    description: "You choose a path that shapes the nature of your rage: Path of the Berserker or Path of the Totem Warrior. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels."
                },
                {
                    name: "Rage (3 uses)",
                    description: "You can now rage 3 times per long rest."
                }
            ],
            4: [
                {
                    name: "Ability Score Improvement",
                    description: "You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
                }
            ],
            5: [
                {
                    name: "Extra Attack",
                    description: "You can attack twice, instead of once, whenever you take the Attack action on your turn."
                },
                {
                    name: "Fast Movement",
                    description: "Your speed increases by 10 feet while you aren't wearing heavy armor."
                }
            ],
            6: [
                {
                    name: "Primal Path Feature",
                    description: "You gain a feature from your Primal Path."
                },
                {
                    name: "Rage (4 uses)",
                    description: "You can now rage 4 times per long rest."
                }
            ],
            7: [
                {
                    name: "Feral Instinct",
                    description: "Your instincts are so honed that you have advantage on initiative rolls. Additionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn."
                }
            ],
            8: [
                {
                    name: "Ability Score Improvement",
                    description: "You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
                }
            ],
            9: [
                {
                    name: "Brutal Critical (1 die)",
                    description: "You can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack."
                },
                {
                    name: "Rage Damage (+3)",
                    description: "Your rage damage bonus increases to +3."
                }
            ],
            10: [
                {
                    name: "Primal Path Feature",
                    description: "You gain a feature from your Primal Path."
                }
            ],
            11: [
                {
                    name: "Relentless Rage",
                    description: "Your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead. Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10."
                }
            ],
            12: [
                {
                    name: "Ability Score Improvement",
                    description: "You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
                },
                {
                    name: "Rage (5 uses)",
                    description: "You can now rage 5 times per long rest."
                }
            ],
            13: [
                {
                    name: "Brutal Critical (2 dice)",
                    description: "You can roll two additional weapon damage dice when determining the extra damage for a critical hit with a melee attack."
                }
            ],
            14: [
                {
                    name: "Primal Path Feature",
                    description: "You gain a feature from your Primal Path."
                }
            ],
            15: [
                {
                    name: "Persistent Rage",
                    description: "Your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it."
                }
            ],
            16: [
                {
                    name: "Ability Score Improvement",
                    description: "You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
                },
                {
                    name: "Rage Damage (+4)",
                    description: "Your rage damage bonus increases to +4."
                }
            ],
            17: [
                {
                    name: "Brutal Critical (3 dice)",
                    description: "You can roll three additional weapon damage dice when determining the extra damage for a critical hit with a melee attack."
                },
                {
                    name: "Rage (6 uses)",
                    description: "You can now rage 6 times per long rest."
                }
            ],
            18: [
                {
                    name: "Indomitable Might",
                    description: "If your total for a Strength check is less than your Strength score, you can use that score in place of the total."
                }
            ],
            19: [
                {
                    name: "Ability Score Improvement",
                    description: "You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
                }
            ],
            20: [
                {
                    name: "Primal Champion",
                    description: "You embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24."
                },
                {
                    name: "Unlimited Rage",
                    description: "You can rage an unlimited number of times."
                }
            ]
        },
        subclasses: {
            berserker: {
                name: "Path of the Berserker",
                description: "For some barbarians, rage is a means to an end—that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood.",
                features: {
                    3: [{
                        name: "Frenzy",
                        description: "You can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion."
                    }],
                    6: [{
                        name: "Mindless Rage",
                        description: "You can't be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage."
                    }],
                    10: [{
                        name: "Intimidating Presence",
                        description: "You can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you."
                    }],
                    14: [{
                        name: "Retaliation",
                        description: "When you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon attack against that creature."
                    }]
                }
            },
            totemWarrior: {
                name: "Path of the Totem Warrior",
                description: "The Path of the Totem Warrior is a spiritual journey, as the barbarian accepts a spirit animal as guide, protector, and inspiration.",
                features: {
                    3: [
                        {
                            name: "Spirit Seeker",
                            description: "Yours is a path that seeks attunement with the natural world, giving you a kinship with beasts. You gain the ability to cast the Beast Sense and Speak with Animals spells, but only as rituals."
                        },
                        {
                            name: "Totem Spirit",
                            description: "You choose a totem spirit and gain its feature. You must make or acquire a physical totem object that incorporates fur or feathers, claws, teeth, or bones of the totem animal. Bear: While raging, you have resistance to all damage except psychic damage. Eagle: While raging and not wearing heavy armor, other creatures have disadvantage on opportunity attack rolls against you, and you can use the Dash action as a bonus action. Wolf: While raging, your friends have advantage on melee attack rolls against any creature within 5 feet of you that is hostile to you."
                        }
                    ],
                    6: [{
                        name: "Aspect of the Beast",
                        description: "You gain a magical benefit based on the totem animal of your choice. Bear: You gain the might of a bear. Your carrying capacity (including maximum load and maximum lift) is doubled, and you have advantage on Strength checks made to push, pull, lift, or break objects. Eagle: You gain the eyesight of an eagle. You can see up to 1 mile away with no difficulty, able to discern even fine details as though looking at something no more than 100 feet away from you. Additionally, dim light doesn't impose disadvantage on your Wisdom (Perception) checks. Wolf: You gain the hunting sensibilities of a wolf. You can track other creatures while traveling at a fast pace, and you can move stealthily while traveling at a normal pace."
                    }],
                    10: [{
                        name: "Spirit Walker",
                        description: "You can cast the Commune with Nature spell, but only as a ritual. When you do so, a spiritual version of one of the animals you chose for Totem Spirit or Aspect of the Beast appears to you to convey the information you seek."
                    }],
                    14: [{
                        name: "Totemic Attunement",
                        description: "You gain a magical benefit based on a totem animal of your choice. Bear: While raging, any creature within 5 feet of you that's hostile to you has disadvantage on attack rolls against targets other than you or another character with this feature. An enemy is immune to this effect if it can't see or hear you or if it can't be frightened. Eagle: While raging, you have a flying speed equal to your current walking speed. This benefit works only in short bursts; you fall if you end your turn in the air and nothing else is holding you aloft. Wolf: While raging, you can use a bonus action on your turn to knock a Large or smaller creature prone when you hit it with a melee weapon attack."
                    }]
                }
            }
        }
    },
    bard: {
        name: "Bard",
        description: "An inspiring magician whose power echoes the music of creation.",
        hitDie: 8,
        primaryAbility: "Charisma",
        savingThrows: ["dex", "cha"],
        armorProficiencies: ["Light armor"],
        weaponProficiencies: ["Simple weapons", "Hand crossbows", "Longswords", "Rapiers", "Shortswords"],
        toolProficiencies: ["Three musical instruments of your choice"],
        skillChoices: {
            count: 3,
            options: ["Any"]
        },
        spellcasting: {
            ability: "cha",
            type: "known",
            cantripsKnown: [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            spellsKnown: [4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 15, 16, 18, 19, 19, 20, 22, 22, 22]
        },
        features: {
            1: [
                {
                    name: "Spellcasting",
                    description: "You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Charisma is your spellcasting ability for your bard spells."
                },
                {
                    name: "Bardic Inspiration",
                    description: "You can inspire others through stirring words or music. As a bonus action, choose one creature other than yourself within 60 feet who can hear you. That creature gains one Bardic Inspiration die (d6). The die increases at higher levels."
                }
            ],
            2: [
                {
                    name: "Jack of All Trades",
                    description: "You can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus."
                },
                {
                    name: "Song of Rest",
                    description: "You can use soothing music or oration to help revitalize your wounded allies during a short rest."
                }
            ],
            3: [
                {
                    name: "Bard College",
                    description: "You delve into the advanced techniques of a bard college of your choice: the College of Lore or the College of Valor."
                },
                {
                    name: "Expertise",
                    description: "Choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies."
                }
            ],
            5: [
                {
                    name: "Font of Inspiration",
                    description: "You regain all of your expended uses of Bardic Inspiration when you finish a short or long rest."
                }
            ],
            6: [
                {
                    name: "Countercharm",
                    description: "You gain the ability to use musical notes or words of power to disrupt mind-influencing effects."
                }
            ],
            10: [
                {
                    name: "Magical Secrets",
                    description: "You have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any classes."
                }
            ],
            20: [
                {
                    name: "Superior Inspiration",
                    description: "When you roll initiative and have no uses of Bardic Inspiration left, you regain one use."
                }
            ]
        },
        subclasses: {
            lore: {
                name: "College of Lore",
                description: "Bards of the College of Lore know something about most things, collecting bits of knowledge.",
                features: {
                    3: [
                        {
                            name: "Bonus Proficiencies",
                            description: "You gain proficiency with three skills of your choice."
                        },
                        {
                            name: "Cutting Words",
                            description: "You learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others."
                        }
                    ],
                    6: [{
                        name: "Additional Magical Secrets",
                        description: "You learn two spells of your choice from any class."
                    }],
                    14: [{
                        name: "Peerless Skill",
                        description: "When you make an ability check, you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check."
                    }]
                }
            }
        }
    },
    cleric: {
        name: "Cleric",
        description: "A priestly champion who wields divine magic in service of a higher power.",
        hitDie: 8,
        primaryAbility: "Wisdom",
        savingThrows: ["wis", "cha"],
        armorProficiencies: ["Light armor", "Medium armor", "Shields"],
        weaponProficiencies: ["Simple weapons"],
        skillChoices: {
            count: 2,
            options: ["History", "Insight", "Medicine", "Persuasion", "Religion"]
        },
        spellcasting: {
            ability: "wis",
            type: "prepared",
            cantripsKnown: [3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
        },
        features: {
            1: [
                {
                    name: "Spellcasting",
                    description: "As a conduit for divine power, you can cast cleric spells. Wisdom is your spellcasting ability for your cleric spells."
                },
                {
                    name: "Divine Domain",
                    description: "Choose one domain related to your deity. Your choice grants you domain spells and other features."
                }
            ],
            2: [
                {
                    name: "Channel Divinity",
                    description: "You gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with Turn Undead."
                },
                {
                    name: "Turn Undead",
                    description: "As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet must make a Wisdom saving throw."
                }
            ],
            5: [
                {
                    name: "Destroy Undead",
                    description: "When an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold."
                }
            ],
            10: [
                {
                    name: "Divine Intervention",
                    description: "You can call on your deity to intervene on your behalf when your need is great."
                }
            ]
        },
        subclasses: {
            life: {
                name: "Life Domain",
                description: "The Life domain focuses on the vibrant positive energy that sustains all life.",
                features: {
                    1: [
                        {
                            name: "Bonus Proficiency",
                            description: "You gain proficiency with heavy armor."
                        },
                        {
                            name: "Disciple of Life",
                            description: "Your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points, the creature regains additional hit points equal to 2 + the spell's level."
                        }
                    ],
                    2: [{
                        name: "Channel Divinity: Preserve Life",
                        description: "You can use your Channel Divinity to heal the badly injured."
                    }],
                    6: [{
                        name: "Blessed Healer",
                        description: "When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell's level."
                    }],
                    8: [{
                        name: "Divine Strike",
                        description: "You gain the ability to infuse your weapon strikes with divine energy."
                    }],
                    17: [{
                        name: "Supreme Healing",
                        description: "When you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die."
                    }]
                }
            }
        }
    },
    druid: {
        name: "Druid",
        description: "A priest of the Old Faith, wielding the powers of nature and adopting animal forms.",
        hitDie: 8,
        primaryAbility: "Wisdom",
        savingThrows: ["int", "wis"],
        armorProficiencies: ["Light armor", "Medium armor", "Shields (druids will not wear armor or use shields made of metal)"],
        weaponProficiencies: ["Clubs", "Daggers", "Darts", "Javelins", "Maces", "Quarterstaffs", "Scimitars", "Sickles", "Slings", "Spears"],
        toolProficiencies: ["Herbalism kit"],
        skillChoices: {
            count: 2,
            options: ["Arcana", "Animal Handling", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"]
        },
        spellcasting: {
            ability: "wis",
            type: "prepared",
            cantripsKnown: [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
        },
        features: {
            1: [
                {
                    name: "Druidic",
                    description: "You know Druidic, the secret language of druids."
                },
                {
                    name: "Spellcasting",
                    description: "Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will."
                }
            ],
            2: [
                {
                    name: "Wild Shape",
                    description: "You can use your action to magically assume the shape of a beast that you have seen before."
                },
                {
                    name: "Druid Circle",
                    description: "You choose to identify with a circle of druids: the Circle of the Land or the Circle of the Moon."
                }
            ],
            18: [
                {
                    name: "Timeless Body",
                    description: "The primal magic that you wield causes you to age more slowly."
                },
                {
                    name: "Beast Spells",
                    description: "You can cast many of your druid spells in any shape you assume using Wild Shape."
                }
            ],
            20: [
                {
                    name: "Archdruid",
                    description: "You can use your Wild Shape an unlimited number of times."
                }
            ]
        },
        subclasses: {
            land: {
                name: "Circle of the Land",
                description: "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites.",
                features: {
                    2: [
                        {
                            name: "Bonus Cantrip",
                            description: "You learn one additional druid cantrip of your choice."
                        },
                        {
                            name: "Natural Recovery",
                            description: "During a short rest, you can recover expended spell slots."
                        }
                    ],
                    3: [{
                        name: "Circle Spells",
                        description: "Your mystical connection to the land infuses you with the ability to cast certain spells."
                    }],
                    6: [{
                        name: "Land's Stride",
                        description: "Moving through nonmagical difficult terrain costs you no extra movement."
                    }],
                    10: [{
                        name: "Nature's Ward",
                        description: "You can't be charmed or frightened by elementals or fey."
                    }],
                    14: [{
                        name: "Nature's Sanctuary",
                        description: "Creatures of the natural world sense your connection to nature and become hesitant to attack you."
                    }]
                }
            }
        }
    },
    fighter: {
        name: "Fighter",
        description: "A master of martial combat, skilled with a variety of weapons and armor.",
        hitDie: 10,
        primaryAbility: "Strength or Dexterity",
        savingThrows: ["str", "con"],
        armorProficiencies: ["All armor", "Shields"],
        weaponProficiencies: ["Simple weapons", "Martial weapons"],
        skillChoices: {
            count: 2,
            options: ["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"]
        },
        features: {
            1: [
                {
                    name: "Fighting Style",
                    description: "You adopt a particular style of fighting as your specialty. Archery: +2 bonus to attack rolls with ranged weapons. Defense: +1 bonus to AC while wearing armor. Dueling: +2 bonus to damage rolls when wielding a melee weapon in one hand and no other weapons. Great Weapon Fighting: Reroll 1s and 2s on damage dice for two-handed weapons. Protection: Use reaction to impose disadvantage on attack against ally within 5 feet. Two-Weapon Fighting: Add ability modifier to the damage of the second attack."
                },
                {
                    name: "Second Wind",
                    description: "You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again."
                }
            ],
            2: [
                {
                    name: "Action Surge",
                    description: "You can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action. Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn."
                }
            ],
            3: [
                {
                    name: "Martial Archetype",
                    description: "You choose an archetype that you strive to emulate in your combat styles and techniques: Champion, Battle Master, or Eldritch Knight. Your choice grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level."
                }
            ],
            4: [
                {
                    name: "Ability Score Improvement",
                    description: "You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
                }
            ],
            5: [
                {
                    name: "Extra Attack",
                    description: "You can attack twice, instead of once, whenever you take the Attack action on your turn."
                }
            ],
            6: [
                {
                    name: "Ability Score Improvement",
                    description: "You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
                }
            ],
            7: [
                {
                    name: "Martial Archetype Feature",
                    description: "You gain a feature from your Martial Archetype."
                }
            ],
            8: [
                {
                    name: "Ability Score Improvement",
                    description: "You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
                }
            ],
            9: [
                {
                    name: "Indomitable (1 use)",
                    description: "You can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest."
                }
            ],
            10: [
                {
                    name: "Martial Archetype Feature",
                    description: "You gain a feature from your Martial Archetype."
                }
            ],
            11: [
                {
                    name: "Extra Attack (2)",
                    description: "You can attack three times, instead of twice, whenever you take the Attack action on your turn."
                }
            ],
            12: [
                {
                    name: "Ability Score Improvement",
                    description: "You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
                }
            ],
            13: [
                {
                    name: "Indomitable (2 uses)",
                    description: "You can use Indomitable twice between long rests."
                }
            ],
            14: [
                {
                    name: "Ability Score Improvement",
                    description: "You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
                }
            ],
            15: [
                {
                    name: "Martial Archetype Feature",
                    description: "You gain a feature from your Martial Archetype."
                }
            ],
            16: [
                {
                    name: "Ability Score Improvement",
                    description: "You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
                }
            ],
            17: [
                {
                    name: "Action Surge (2 uses)",
                    description: "You can use Action Surge twice before a rest, but only once on the same turn."
                },
                {
                    name: "Indomitable (3 uses)",
                    description: "You can use Indomitable three times between long rests."
                }
            ],
            18: [
                {
                    name: "Martial Archetype Feature",
                    description: "You gain a feature from your Martial Archetype."
                }
            ],
            19: [
                {
                    name: "Ability Score Improvement",
                    description: "You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
                }
            ],
            20: [
                {
                    name: "Extra Attack (3)",
                    description: "You can attack four times, instead of three, whenever you take the Attack action on your turn."
                }
            ]
        },
        subclasses: {
            champion: {
                name: "Champion",
                description: "The archetypal Champion focuses on the development of raw physical power honed to deadly perfection. Those who model themselves on this archetype combine rigorous training with physical excellence to deal devastating blows.",
                features: {
                    3: [{
                        name: "Improved Critical",
                        description: "Your weapon attacks score a critical hit on a roll of 19 or 20."
                    }],
                    7: [{
                        name: "Remarkable Athlete",
                        description: "You can add half your proficiency bonus (round up) to any Strength, Dexterity, or Constitution check you make that doesn't already use your proficiency bonus. In addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your Strength modifier."
                    }],
                    10: [{
                        name: "Additional Fighting Style",
                        description: "You can choose a second option from the Fighting Style class feature."
                    }],
                    15: [{
                        name: "Superior Critical",
                        description: "Your weapon attacks score a critical hit on a roll of 18-20."
                    }],
                    18: [{
                        name: "Survivor",
                        description: "You attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left. You don't gain this benefit if you have 0 hit points."
                    }]
                }
            },
            battleMaster: {
                name: "Battle Master",
                description: "Those who emulate the archetypal Battle Master employ martial techniques passed down through generations. A Battle Master uses superiority dice to fuel special maneuvers that grant tactical advantages in combat.",
                features: {
                    3: [
                        {
                            name: "Combat Superiority",
                            description: "You learn three maneuvers of your choice. You can use only one maneuver per attack. You have four superiority dice, which are d8s. A superiority die is expended when you use it. You regain all expended superiority dice when you finish a short or long rest. You gain another superiority die at 7th level and one more at 15th level."
                        },
                        {
                            name: "Student of War",
                            description: "You gain proficiency with one type of artisan's tools of your choice."
                        },
                        {
                            name: "Maneuvers",
                            description: "Choose from: Commander's Strike, Disarming Attack, Distracting Strike, Evasive Footwork, Feinting Attack, Goading Attack, Lunging Attack, Maneuvering Attack, Menacing Attack, Parry, Precision Attack, Pushing Attack, Rally, Riposte, Sweeping Attack, Trip Attack. You learn two additional maneuvers at 7th, 10th, and 15th level."
                        }
                    ],
                    7: [
                        {
                            name: "Know Your Enemy",
                            description: "If you spend at least 1 minute observing or interacting with another creature outside combat, you can learn certain information about its capabilities compared to your own. The DM tells you if the creature is your equal, superior, or inferior in regard to two of the following characteristics of your choice: Strength score, Dexterity score, Constitution score, Armor Class, current hit points, total class levels (if any), fighter class levels (if any)."
                        },
                        {
                            name: "Additional Maneuvers",
                            description: "You learn two additional maneuvers of your choice."
                        },
                        {
                            name: "Superiority Dice (5d8)",
                            description: "You gain another superiority die (5 total)."
                        }
                    ],
                    10: [
                        {
                            name: "Improved Combat Superiority (d10)",
                            description: "Your superiority dice turn into d10s."
                        },
                        {
                            name: "Additional Maneuvers",
                            description: "You learn two additional maneuvers of your choice."
                        }
                    ],
                    15: [
                        {
                            name: "Relentless",
                            description: "When you roll initiative and have no superiority dice remaining, you regain one superiority die."
                        },
                        {
                            name: "Additional Maneuvers",
                            description: "You learn two additional maneuvers of your choice."
                        },
                        {
                            name: "Superiority Dice (6d10)",
                            description: "You gain another superiority die (6 total)."
                        }
                    ],
                    18: [{
                        name: "Improved Combat Superiority (d12)",
                        description: "Your superiority dice turn into d12s."
                    }]
                }
            }
        }
    },
    monk: {
        name: "Monk",
        description: "A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.",
        hitDie: 8,
        primaryAbility: "Dexterity & Wisdom",
        savingThrows: ["str", "dex"],
        armorProficiencies: [],
        weaponProficiencies: ["Simple weapons", "Shortswords"],
        toolProficiencies: ["One type of artisan's tools or one musical instrument"],
        skillChoices: {
            count: 2,
            options: ["Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"]
        },
        features: {
            1: [
                {
                    name: "Unarmored Defense",
                    description: "While you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier."
                },
                {
                    name: "Martial Arts",
                    description: "Your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons. You gain benefits while unarmed or using monk weapons."
                }
            ],
            2: [
                {
                    name: "Ki",
                    description: "Your training allows you to harness the mystic energy of ki. You have a number of ki points equal to your monk level."
                },
                {
                    name: "Unarmored Movement",
                    description: "Your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases as you gain monk levels."
                }
            ],
            3: [
                {
                    name: "Monastic Tradition",
                    description: "You commit yourself to a monastic tradition: the Way of the Open Hand, the Way of Shadow, or the Way of the Four Elements."
                },
                {
                    name: "Deflect Missiles",
                    description: "You can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack."
                }
            ],
            4: [
                {
                    name: "Slow Fall",
                    description: "You can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level."
                }
            ],
            5: [
                {
                    name: "Extra Attack",
                    description: "You can attack twice, instead of once, whenever you take the Attack action on your turn."
                },
                {
                    name: "Stunning Strike",
                    description: "You can interfere with the flow of ki in an opponent's body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike."
                }
            ],
            7: [
                {
                    name: "Evasion",
                    description: "When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
                },
                {
                    name: "Stillness of Mind",
                    description: "You can use your action to end one effect on yourself that is causing you to be charmed or frightened."
                }
            ],
            10: [
                {
                    name: "Purity of Body",
                    description: "Your mastery of the ki flowing through you makes you immune to disease and poison."
                }
            ],
            13: [
                {
                    name: "Tongue of the Sun and Moon",
                    description: "You learn to touch the ki of other minds so that you understand all spoken languages."
                }
            ],
            14: [
                {
                    name: "Diamond Soul",
                    description: "Your mastery of ki grants you proficiency in all saving throws."
                }
            ],
            15: [
                {
                    name: "Timeless Body",
                    description: "Your ki sustains you so that you suffer none of the frailty of old age."
                }
            ],
            18: [
                {
                    name: "Empty Body",
                    description: "You can use your action to spend 4 ki points to become invisible for 1 minute."
                }
            ],
            20: [
                {
                    name: "Perfect Self",
                    description: "When you roll for initiative and have no ki points remaining, you regain 4 ki points."
                }
            ]
        },
        subclasses: {
            openHand: {
                name: "Way of the Open Hand",
                description: "Monks of the Way of the Open Hand are the ultimate masters of martial arts combat.",
                features: {
                    3: [{
                        name: "Open Hand Technique",
                        description: "You can manipulate your enemy's ki when you harness your own. Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can impose one of several effects on that target."
                    }],
                    6: [{
                        name: "Wholeness of Body",
                        description: "You gain the ability to heal yourself. As an action, you can regain hit points equal to three times your monk level."
                    }],
                    11: [{
                        name: "Tranquility",
                        description: "You can enter a special meditation that surrounds you with an aura of peace."
                    }],
                    17: [{
                        name: "Quivering Palm",
                        description: "You gain the ability to set up lethal vibrations in someone's body."
                    }]
                }
            }
        }
    },
    paladin: {
        name: "Paladin",
        description: "A holy warrior bound to a sacred oath.",
        hitDie: 10,
        primaryAbility: "Strength & Charisma",
        savingThrows: ["wis", "cha"],
        armorProficiencies: ["All armor", "Shields"],
        weaponProficiencies: ["Simple weapons", "Martial weapons"],
        skillChoices: {
            count: 2,
            options: ["Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"]
        },
        spellcasting: {
            ability: "cha",
            type: "prepared",
            startLevel: 2
        },
        features: {
            1: [
                {
                    name: "Divine Sense",
                    description: "The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears."
                },
                {
                    name: "Lay on Hands",
                    description: "Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level × 5."
                }
            ],
            2: [
                {
                    name: "Fighting Style",
                    description: "You adopt a style of fighting as your specialty."
                },
                {
                    name: "Spellcasting",
                    description: "You have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does."
                },
                {
                    name: "Divine Smite",
                    description: "When you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon's damage."
                }
            ],
            3: [
                {
                    name: "Divine Health",
                    description: "The divine magic flowing through you makes you immune to disease."
                },
                {
                    name: "Sacred Oath",
                    description: "You swear the oath that binds you as a paladin forever: Oath of Devotion, Oath of the Ancients, or Oath of Vengeance."
                }
            ],
            5: [
                {
                    name: "Extra Attack",
                    description: "You can attack twice, instead of once, whenever you take the Attack action on your turn."
                }
            ],
            6: [
                {
                    name: "Aura of Protection",
                    description: "Whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier."
                }
            ],
            10: [
                {
                    name: "Aura of Courage",
                    description: "You and friendly creatures within 10 feet of you can't be frightened while you are conscious."
                }
            ],
            14: [
                {
                    name: "Cleansing Touch",
                    description: "You can use your action to end one spell on yourself or on one willing creature that you touch."
                }
            ]
        },
        subclasses: {
            devotion: {
                name: "Oath of Devotion",
                description: "The Oath of Devotion binds a paladin to the loftiest ideals of justice, virtue, and order.",
                features: {
                    3: [
                        {
                            name: "Oath Spells",
                            description: "You gain oath spells at the paladin levels listed."
                        },
                        {
                            name: "Channel Divinity",
                            description: "You gain Sacred Weapon and Turn the Unholy Channel Divinity options."
                        }
                    ],
                    7: [{
                        name: "Aura of Devotion",
                        description: "You and friendly creatures within 10 feet of you can't be charmed while you are conscious."
                    }],
                    15: [{
                        name: "Purity of Spirit",
                        description: "You are always under the effects of a protection from evil and good spell."
                    }],
                    20: [{
                        name: "Holy Nimbus",
                        description: "As an action, you can emanate an aura of sunlight."
                    }]
                }
            }
        }
    },
    ranger: {
        name: "Ranger",
        description: "A warrior who combats threats on the edges of civilization.",
        hitDie: 10,
        primaryAbility: "Dexterity & Wisdom",
        savingThrows: ["str", "dex"],
        armorProficiencies: ["Light armor", "Medium armor", "Shields"],
        weaponProficiencies: ["Simple weapons", "Martial weapons"],
        skillChoices: {
            count: 3,
            options: ["Animal Handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"]
        },
        spellcasting: {
            ability: "wis",
            type: "known",
            startLevel: 2,
            spellsKnown: [0, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11]
        },
        features: {
            1: [
                {
                    name: "Favored Enemy",
                    description: "You have significant experience studying, tracking, hunting, and even talking to a certain type of enemy."
                },
                {
                    name: "Natural Explorer",
                    description: "You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions."
                }
            ],
            2: [
                {
                    name: "Fighting Style",
                    description: "You adopt a particular style of fighting as your specialty."
                },
                {
                    name: "Spellcasting",
                    description: "You have learned to use the magical essence of nature to cast spells."
                }
            ],
            3: [
                {
                    name: "Ranger Archetype",
                    description: "You choose an archetype that you strive to emulate: Hunter or Beast Master."
                },
                {
                    name: "Primeval Awareness",
                    description: "You can use your action and expend one ranger spell slot to focus your awareness on the region around you."
                }
            ],
            5: [
                {
                    name: "Extra Attack",
                    description: "You can attack twice, instead of once, whenever you take the Attack action on your turn."
                }
            ],
            8: [
                {
                    name: "Land's Stride",
                    description: "Moving through nonmagical difficult terrain costs you no extra movement."
                }
            ],
            10: [
                {
                    name: "Hide in Plain Sight",
                    description: "You can spend 1 minute creating camouflage for yourself."
                }
            ],
            14: [
                {
                    name: "Vanish",
                    description: "You can use the Hide action as a bonus action on your turn."
                }
            ],
            18: [
                {
                    name: "Feral Senses",
                    description: "You gain preternatural senses that help you fight creatures you can't see."
                }
            ],
            20: [
                {
                    name: "Foe Slayer",
                    description: "You become an unparalleled hunter of your enemies."
                }
            ]
        },
        subclasses: {
            hunter: {
                name: "Hunter",
                description: "Emulating the Hunter archetype means accepting your place as a bulwark between civilization and the terrors of the wilderness.",
                features: {
                    3: [{
                        name: "Hunter's Prey",
                        description: "You gain one of the following features of your choice: Colossus Slayer, Giant Killer, or Horde Breaker."
                    }],
                    7: [{
                        name: "Defensive Tactics",
                        description: "You gain one of the following features of your choice: Escape the Horde, Multiattack Defense, or Steel Will."
                    }],
                    11: [{
                        name: "Multiattack",
                        description: "You gain one of the following features of your choice: Volley or Whirlwind Attack."
                    }],
                    15: [{
                        name: "Superior Hunter's Defense",
                        description: "You gain one of the following features of your choice: Evasion, Stand Against the Tide, or Uncanny Dodge."
                    }]
                }
            }
        }
    },
    rogue: {
        name: "Rogue",
        description: "A scoundrel who uses stealth and trickery to overcome obstacles and enemies.",
        hitDie: 8,
        primaryAbility: "Dexterity",
        savingThrows: ["dex", "int"],
        armorProficiencies: ["Light armor"],
        weaponProficiencies: ["Simple weapons", "Hand crossbows", "Longswords", "Rapiers", "Shortswords"],
        toolProficiencies: ["Thieves' tools"],
        skillChoices: {
            count: 4,
            options: ["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight of Hand", "Stealth"]
        },
        features: {
            1: [
                {
                    name: "Expertise",
                    description: "Choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. At 6th level, you can choose two more proficiencies to gain this benefit."
                },
                {
                    name: "Sneak Attack (1d6)",
                    description: "You know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon. You don't need advantage if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage. The extra damage increases as you gain levels (see Sneak Attack progression)."
                },
                {
                    name: "Thieves' Cant",
                    description: "During your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly."
                }
            ],
            2: [
                {
                    name: "Cunning Action",
                    description: "Your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action."
                }
            ],
            3: [
                {
                    name: "Roguish Archetype",
                    description: "You choose an archetype that you emulate in the exercise of your rogue abilities: Thief, Assassin, or Arcane Trickster. Your choice grants you features at 3rd level and again at 9th, 13th, and 17th level."
                },
                {
                    name: "Sneak Attack (2d6)",
                    description: "Your Sneak Attack damage increases to 2d6."
                }
            ],
            4: [
                {
                    name: "Ability Score Improvement",
                    description: "You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
                }
            ],
            5: [
                {
                    name: "Uncanny Dodge",
                    description: "When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you."
                },
                {
                    name: "Sneak Attack (3d6)",
                    description: "Your Sneak Attack damage increases to 3d6."
                }
            ],
            6: [
                {
                    name: "Expertise (2 more)",
                    description: "Choose two more of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies."
                }
            ],
            7: [
                {
                    name: "Evasion",
                    description: "When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
                },
                {
                    name: "Sneak Attack (4d6)",
                    description: "Your Sneak Attack damage increases to 4d6."
                }
            ],
            8: [
                {
                    name: "Ability Score Improvement",
                    description: "You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
                }
            ],
            9: [
                {
                    name: "Roguish Archetype Feature",
                    description: "You gain a feature from your Roguish Archetype."
                },
                {
                    name: "Sneak Attack (5d6)",
                    description: "Your Sneak Attack damage increases to 5d6."
                }
            ],
            10: [
                {
                    name: "Ability Score Improvement",
                    description: "You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
                }
            ],
            11: [
                {
                    name: "Reliable Talent",
                    description: "You have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10."
                },
                {
                    name: "Sneak Attack (6d6)",
                    description: "Your Sneak Attack damage increases to 6d6."
                }
            ],
            12: [
                {
                    name: "Ability Score Improvement",
                    description: "You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
                }
            ],
            13: [
                {
                    name: "Roguish Archetype Feature",
                    description: "You gain a feature from your Roguish Archetype."
                },
                {
                    name: "Sneak Attack (7d6)",
                    description: "Your Sneak Attack damage increases to 7d6."
                }
            ],
            14: [
                {
                    name: "Blindsense",
                    description: "If you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you."
                }
            ],
            15: [
                {
                    name: "Slippery Mind",
                    description: "You have acquired greater mental strength. You gain proficiency in Wisdom saving throws."
                },
                {
                    name: "Sneak Attack (8d6)",
                    description: "Your Sneak Attack damage increases to 8d6."
                }
            ],
            16: [
                {
                    name: "Ability Score Improvement",
                    description: "You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
                }
            ],
            17: [
                {
                    name: "Roguish Archetype Feature",
                    description: "You gain a feature from your Roguish Archetype."
                },
                {
                    name: "Sneak Attack (9d6)",
                    description: "Your Sneak Attack damage increases to 9d6."
                }
            ],
            18: [
                {
                    name: "Elusive",
                    description: "You are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren't incapacitated."
                }
            ],
            19: [
                {
                    name: "Ability Score Improvement",
                    description: "You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
                },
                {
                    name: "Sneak Attack (10d6)",
                    description: "Your Sneak Attack damage increases to 10d6."
                }
            ],
            20: [
                {
                    name: "Stroke of Luck",
                    description: "You have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20. Once you use this feature, you can't use it again until you finish a short or long rest."
                }
            ]
        },
        subclasses: {
            thief: {
                name: "Thief",
                description: "You hone your skills in the larcenous arts. Burglars, bandits, cutpurses, and other criminals typically follow this archetype, but so do rogues who prefer to think of themselves as professional treasure seekers, explorers, delvers, and investigators.",
                features: {
                    3: [
                        {
                            name: "Fast Hands",
                            description: "You can use the bonus action granted by your Cunning Action to make a Dexterity (Sleight of Hand) check, use your thieves' tools to disarm a trap or open a lock, or take the Use an Object action."
                        },
                        {
                            name: "Second-Story Work",
                            description: "You gain the ability to climb faster than normal; climbing no longer costs you extra movement. In addition, when you make a running jump, the distance you cover increases by a number of feet equal to your Dexterity modifier."
                        }
                    ],
                    9: [{
                        name: "Supreme Sneak",
                        description: "You have advantage on a Dexterity (Stealth) check if you move no more than half your speed on the same turn."
                    }],
                    13: [{
                        name: "Use Magic Device",
                        description: "You have learned enough about the workings of magic that you can improvise the use of items even when they are not intended for you. You ignore all class, race, and level requirements on the use of magic items."
                    }],
                    17: [{
                        name: "Thief's Reflexes",
                        description: "You have become adept at laying ambushes and quickly escaping danger. You can take two turns during the first round of any combat. You take your first turn at your normal initiative and your second turn at your initiative minus 10. You can't use this feature when you are surprised."
                    }]
                }
            },
            assassin: {
                name: "Assassin",
                description: "You focus your training on the grim art of death. Those who adhere to this archetype are diverse: hired killers, spies, bounty hunters, and even specially anointed priests trained to exterminate the enemies of their deity.",
                features: {
                    3: [
                        {
                            name: "Bonus Proficiencies",
                            description: "You gain proficiency with the disguise kit and the poisoner's kit."
                        },
                        {
                            name: "Assassinate",
                            description: "You are at your deadliest when you get the drop on your enemies. You have advantage on attack rolls against any creature that hasn't taken a turn in the combat yet. In addition, any hit you score against a creature that is surprised is a critical hit."
                        }
                    ],
                    9: [{
                        name: "Infiltration Expertise",
                        description: "You can unfailingly create false identities for yourself. You must spend seven days and 25 gp to establish the history, profession, and affiliations for an identity. You can't establish an identity that belongs to someone else. Thereafter, if you adopt the new identity as a disguise, other creatures believe you to be that person until given an obvious reason not to."
                    }],
                    13: [{
                        name: "Impostor",
                        description: "You gain the ability to unerringly mimic another person's speech, writing, and behavior. You must spend at least three hours studying these three components of the person's behavior, listening to speech, examining handwriting, and observing mannerisms. Your ruse is indiscernible to the casual observer. If a wary creature suspects something is amiss, you have advantage on any Charisma (Deception) check you make to avoid detection."
                    }],
                    17: [{
                        name: "Death Strike",
                        description: "You become a master of instant death. When you attack and hit a creature that is surprised, it must make a Constitution saving throw (DC 8 + your Dexterity modifier + your proficiency bonus). On a failed save, double the damage of your attack against the creature."
                    }]
                }
            }
        }
    },
    sorcerer: {
        name: "Sorcerer",
        description: "A spellcaster who draws on inherent magic from a gift or bloodline.",
        hitDie: 6,
        primaryAbility: "Charisma",
        savingThrows: ["con", "cha"],
        armorProficiencies: [],
        weaponProficiencies: ["Daggers", "Darts", "Slings", "Quarterstaffs", "Light crossbows"],
        skillChoices: {
            count: 2,
            options: ["Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"]
        },
        spellcasting: {
            ability: "cha",
            type: "known",
            cantripsKnown: [4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
            spellsKnown: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15, 15]
        },
        features: {
            1: [
                {
                    name: "Spellcasting",
                    description: "An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic."
                },
                {
                    name: "Sorcerous Origin",
                    description: "Choose a sorcerous origin, which describes the source of your innate magical power: Draconic Bloodline or Wild Magic."
                }
            ],
            2: [
                {
                    name: "Font of Magic",
                    description: "You tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects."
                }
            ],
            3: [
                {
                    name: "Metamagic",
                    description: "You gain the ability to twist your spells to suit your needs. You gain two Metamagic options of your choice."
                }
            ],
            20: [
                {
                    name: "Sorcerous Restoration",
                    description: "You regain 4 expended sorcery points whenever you finish a short rest."
                }
            ]
        },
        subclasses: {
            draconic: {
                name: "Draconic Bloodline",
                description: "Your innate magic comes from draconic magic that was mingled with your blood or that of your ancestors.",
                features: {
                    1: [
                        {
                            name: "Dragon Ancestor",
                            description: "You choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later."
                        },
                        {
                            name: "Draconic Resilience",
                            description: "As magic flows through your body, it causes physical traits of your dragon ancestors to emerge. Your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class."
                        }
                    ],
                    6: [{
                        name: "Elemental Affinity",
                        description: "When you cast a spell that deals damage of the type associated with your draconic ancestry, you can add your Charisma modifier to one damage roll of that spell."
                    }],
                    14: [{
                        name: "Dragon Wings",
                        description: "You gain the ability to sprout a pair of dragon wings from your back, gaining a flying speed equal to your current speed."
                    }],
                    18: [{
                        name: "Draconic Presence",
                        description: "You can channel the dread presence of your dragon ancestor, causing those around you to become awestruck or frightened."
                    }]
                }
            }
        }
    },
    warlock: {
        name: "Warlock",
        description: "A wielder of magic that is derived from a bargain with an extraplanar entity.",
        hitDie: 8,
        primaryAbility: "Charisma",
        savingThrows: ["wis", "cha"],
        armorProficiencies: ["Light armor"],
        weaponProficiencies: ["Simple weapons"],
        skillChoices: {
            count: 2,
            options: ["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"]
        },
        spellcasting: {
            ability: "cha",
            type: "pact",
            cantripsKnown: [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            spellsKnown: [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15]
        },
        features: {
            1: [
                {
                    name: "Otherworldly Patron",
                    description: "You have struck a bargain with an otherworldly being: The Archfey, The Fiend, or The Great Old One."
                },
                {
                    name: "Pact Magic",
                    description: "Your arcane research and the magic bestowed on you by your patron have given you facility with spells."
                }
            ],
            2: [
                {
                    name: "Eldritch Invocations",
                    description: "In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability."
                }
            ],
            3: [
                {
                    name: "Pact Boon",
                    description: "Your otherworldly patron bestows a gift upon you: Pact of the Chain, Pact of the Blade, or Pact of the Tome."
                }
            ],
            11: [
                {
                    name: "Mystic Arcanum (6th level)",
                    description: "Your patron bestows upon you a magical secret called an arcanum. Choose one 6th-level spell from the warlock spell list as this arcanum."
                }
            ],
            20: [
                {
                    name: "Eldritch Master",
                    description: "You can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots."
                }
            ]
        },
        subclasses: {
            fiend: {
                name: "The Fiend",
                description: "You have made a pact with a fiend from the lower planes of existence.",
                features: {
                    1: [{
                        name: "Dark One's Blessing",
                        description: "When you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level."
                    }],
                    6: [{
                        name: "Dark One's Own Luck",
                        description: "You can call on your patron to alter fate in your favor. When you make an ability check or a saving throw, you can use this feature to add a d10 to your roll."
                    }],
                    10: [{
                        name: "Fiendish Resilience",
                        description: "You can choose one damage type when you finish a short or long rest. You gain resistance to that damage type until you choose a different one."
                    }],
                    14: [{
                        name: "Hurl Through Hell",
                        description: "When you hit a creature with an attack, you can use this feature to instantly transport the target through the lower planes."
                    }]
                }
            }
        }
    },
    wizard: {
        name: "Wizard",
        description: "A scholarly magic-user capable of manipulating the structures of reality.",
        hitDie: 6,
        primaryAbility: "Intelligence",
        savingThrows: ["int", "wis"],
        armorProficiencies: [],
        weaponProficiencies: ["Daggers", "Darts", "Slings", "Quarterstaffs", "Light crossbows"],
        skillChoices: {
            count: 2,
            options: ["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"]
        },
        spellcasting: {
            ability: "int",
            type: "prepared",
            cantripsKnown: [3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
        },
        features: {
            1: [
                {
                    name: "Spellcasting",
                    description: "As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power. Intelligence is your spellcasting ability for your wizard spells. You learn spells by copying them into your spellbook. At 1st level, you have a spellbook containing six 1st-level wizard spells of your choice. Each time you gain a wizard level, you add two wizard spells of your choice to your spellbook for free."
                },
                {
                    name: "Arcane Recovery",
                    description: "You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher."
                }
            ],
            2: [
                {
                    name: "Arcane Tradition",
                    description: "You choose an arcane tradition, shaping your practice of magic through one of eight schools: Abjuration, Conjuration, Divination, Enchantment, Evocation, Illusion, Necromancy, or Transmutation. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level."
                }
            ],
            3: [
                {
                    name: "2nd-Level Spells",
                    description: "You can now prepare and cast 2nd-level wizard spells. You gain two 2nd-level spell slots."
                }
            ],
            4: [
                {
                    name: "Ability Score Improvement",
                    description: "You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
                }
            ],
            5: [
                {
                    name: "3rd-Level Spells",
                    description: "You can now prepare and cast 3rd-level wizard spells. You gain two 3rd-level spell slots."
                }
            ],
            6: [
                {
                    name: "Arcane Tradition Feature",
                    description: "You gain a feature from your Arcane Tradition."
                }
            ],
            7: [
                {
                    name: "4th-Level Spells",
                    description: "You can now prepare and cast 4th-level wizard spells. You gain one 4th-level spell slot."
                }
            ],
            8: [
                {
                    name: "Ability Score Improvement",
                    description: "You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
                }
            ],
            9: [
                {
                    name: "5th-Level Spells",
                    description: "You can now prepare and cast 5th-level wizard spells. You gain one 5th-level spell slot."
                }
            ],
            10: [
                {
                    name: "Arcane Tradition Feature",
                    description: "You gain a feature from your Arcane Tradition."
                }
            ],
            11: [
                {
                    name: "6th-Level Spells",
                    description: "You can now prepare and cast 6th-level wizard spells. You gain one 6th-level spell slot."
                }
            ],
            12: [
                {
                    name: "Ability Score Improvement",
                    description: "You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
                }
            ],
            13: [
                {
                    name: "7th-Level Spells",
                    description: "You can now prepare and cast 7th-level wizard spells. You gain one 7th-level spell slot."
                }
            ],
            14: [
                {
                    name: "Arcane Tradition Feature",
                    description: "You gain a feature from your Arcane Tradition."
                }
            ],
            15: [
                {
                    name: "8th-Level Spells",
                    description: "You can now prepare and cast 8th-level wizard spells. You gain one 8th-level spell slot."
                }
            ],
            16: [
                {
                    name: "Ability Score Improvement",
                    description: "You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
                }
            ],
            17: [
                {
                    name: "9th-Level Spells",
                    description: "You can now prepare and cast 9th-level wizard spells. You gain one 9th-level spell slot."
                }
            ],
            18: [
                {
                    name: "Spell Mastery",
                    description: "You have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal. By spending 8 hours in study, you can exchange one or both of the spells you chose for different spells of the same levels."
                }
            ],
            19: [
                {
                    name: "Ability Score Improvement",
                    description: "You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
                }
            ],
            20: [
                {
                    name: "Signature Spells",
                    description: "You gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don't count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can't do so again until you finish a short or long rest. If you want to cast either spell at a higher level, you must expend a spell slot as normal."
                }
            ]
        },
        subclasses: {
            evocation: {
                name: "School of Evocation",
                description: "You focus your study on magic that creates powerful elemental effects such as bitter cold, searing flame, rolling thunder, crackling lightning, and burning acid. Some evokers find employment in military forces, serving as artillery to blast enemy armies from afar.",
                features: {
                    2: [
                        {
                            name: "Evocation Savant",
                            description: "The gold and time you must spend to copy an evocation spell into your spellbook is halved."
                        },
                        {
                            name: "Sculpt Spells",
                            description: "You can create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 + the spell's level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save."
                        }
                    ],
                    6: [{
                        name: "Potent Cantrip",
                        description: "Your damaging cantrips affect even creatures that avoid the brunt of the effect. When a creature succeeds on a saving throw against your cantrip, the creature takes half the cantrip's damage (if any) but suffers no additional effect from the cantrip."
                    }],
                    10: [{
                        name: "Empowered Evocation",
                        description: "You can add your Intelligence modifier to one damage roll of any wizard evocation spell you cast."
                    }],
                    14: [{
                        name: "Overchannel",
                        description: "You can increase the power of your simpler spells. When you cast a wizard spell of 1st through 5th level that deals damage, you can deal maximum damage with that spell. The first time you do so, you suffer no adverse effect. If you use this feature again before you finish a long rest, you take 2d12 necrotic damage for each level of the spell, immediately after you cast it. Each time you use this feature again before finishing a long rest, the necrotic damage per spell level increases by 1d12. This damage ignores resistance and immunity."
                    }]
                }
            },
            abjuration: {
                name: "School of Abjuration",
                description: "The School of Abjuration emphasizes magic that blocks, banishes, or protects. Detractors of this school say that its tradition is about denial, negation rather than positive assertion. You understand, however, that ending harmful effects, protecting the weak, and banishing evil influences is anything but a philosophical void.",
                features: {
                    2: [
                        {
                            name: "Abjuration Savant",
                            description: "The gold and time you must spend to copy an abjuration spell into your spellbook is halved."
                        },
                        {
                            name: "Arcane Ward",
                            description: "You can weave magic around yourself for protection. When you cast an abjuration spell of 1st level or higher, you can simultaneously use a strand of the spell's magic to create a magical ward on yourself that lasts until you finish a long rest. The ward has hit points equal to twice your wizard level + your Intelligence modifier. Whenever you take damage, the ward takes the damage instead. If this damage reduces the ward to 0 hit points, you take any remaining damage. While the ward has 0 hit points, it can't absorb damage, but its magic remains. Whenever you cast an abjuration spell of 1st level or higher, the ward regains a number of hit points equal to twice the level of the spell. Once you create the ward, you can't create it again until you finish a long rest."
                        }
                    ],
                    6: [{
                        name: "Projected Ward",
                        description: "When a creature that you can see within 30 feet of you takes damage, you can use your reaction to cause your Arcane Ward to absorb that damage. If this damage reduces the ward to 0 hit points, the warded creature takes any remaining damage."
                    }],
                    10: [{
                        name: "Improved Abjuration",
                        description: "When you cast an abjuration spell that requires you to make an ability check as a part of casting that spell (as in Counterspell and Dispel Magic), you add your proficiency bonus to that ability check."
                    }],
                    14: [{
                        name: "Spell Resistance",
                        description: "You have advantage on saving throws against spells. Furthermore, you have resistance against the damage of spells."
                    }]
                }
            }
        }
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CLASSES;
}
