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
                    description: "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain: advantage on Strength checks and Strength saving throws, bonus damage on melee weapon attacks using Strength, and resistance to bludgeoning, piercing, and slashing damage. You can rage a number of times equal to your proficiency bonus per long rest."
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
                    description: "You choose a path that shapes the nature of your rage: Path of the Berserker or Path of the Totem Warrior."
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
            7: [
                {
                    name: "Feral Instinct",
                    description: "Your instincts are so honed that you have advantage on initiative rolls. Additionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn."
                }
            ],
            9: [
                {
                    name: "Brutal Critical",
                    description: "You can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level."
                }
            ],
            11: [
                {
                    name: "Relentless Rage",
                    description: "Your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead."
                }
            ],
            15: [
                {
                    name: "Persistent Rage",
                    description: "Your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it."
                }
            ],
            18: [
                {
                    name: "Indomitable Might",
                    description: "If your total for a Strength check is less than your Strength score, you can use that score in place of the total."
                }
            ],
            20: [
                {
                    name: "Primal Champion",
                    description: "You embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24."
                }
            ]
        },
        subclasses: {
            berserker: {
                name: "Path of the Berserker",
                description: "For some barbarians, rage is a means to an end—that end being violence.",
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
                        description: "You can use your action to frighten someone with your menacing presence."
                    }],
                    14: [{
                        name: "Retaliation",
                        description: "When you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon attack against that creature."
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
                    description: "You adopt a particular style of fighting as your specialty: Archery, Defense, Dueling, Great Weapon Fighting, Protection, or Two-Weapon Fighting."
                },
                {
                    name: "Second Wind",
                    description: "You have a limited well of stamina that you can draw on. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level."
                }
            ],
            2: [
                {
                    name: "Action Surge",
                    description: "You can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action."
                }
            ],
            3: [
                {
                    name: "Martial Archetype",
                    description: "You choose an archetype that you strive to emulate in your combat styles and techniques: Champion, Battle Master, or Eldritch Knight."
                }
            ],
            5: [
                {
                    name: "Extra Attack",
                    description: "You can attack twice, instead of once, whenever you take the Attack action on your turn. The number of attacks increases to three at 11th level and four at 20th level."
                }
            ],
            9: [
                {
                    name: "Indomitable",
                    description: "You can reroll a saving throw that you fail. If you do so, you must use the new roll. You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level."
                }
            ]
        },
        subclasses: {
            champion: {
                name: "Champion",
                description: "The archetypal Champion focuses on the development of raw physical power honed to deadly perfection.",
                features: {
                    3: [{
                        name: "Improved Critical",
                        description: "Your weapon attacks score a critical hit on a roll of 19 or 20."
                    }],
                    7: [{
                        name: "Remarkable Athlete",
                        description: "You can add half your proficiency bonus to any Strength, Dexterity, or Constitution check you make that doesn't already use your proficiency bonus."
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
                        description: "You attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left."
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
                    description: "Choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies."
                },
                {
                    name: "Sneak Attack",
                    description: "You know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal extra 1d6 damage to one creature you hit with an attack if you have advantage or an ally is within 5 feet of the target."
                },
                {
                    name: "Thieves' Cant",
                    description: "During your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code."
                }
            ],
            2: [
                {
                    name: "Cunning Action",
                    description: "Your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns to take the Dash, Disengage, or Hide action."
                }
            ],
            3: [
                {
                    name: "Roguish Archetype",
                    description: "You choose an archetype that you emulate: Thief, Assassin, or Arcane Trickster."
                }
            ],
            5: [
                {
                    name: "Uncanny Dodge",
                    description: "When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you."
                }
            ],
            7: [
                {
                    name: "Evasion",
                    description: "When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed, and only half damage if you fail."
                }
            ],
            11: [
                {
                    name: "Reliable Talent",
                    description: "You have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10."
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
                }
            ],
            18: [
                {
                    name: "Elusive",
                    description: "You are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren't incapacitated."
                }
            ],
            20: [
                {
                    name: "Stroke of Luck",
                    description: "You have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit."
                }
            ]
        },
        subclasses: {
            thief: {
                name: "Thief",
                description: "You hone your skills in the larcenous arts. Burglars, bandits, cutpurses, and other criminals typically follow this archetype.",
                features: {
                    3: [
                        {
                            name: "Fast Hands",
                            description: "You can use the bonus action granted by your Cunning Action to make a Dexterity (Sleight of Hand) check, use your thieves' tools to disarm a trap or open a lock, or take the Use an Object action."
                        },
                        {
                            name: "Second-Story Work",
                            description: "You gain the ability to climb faster than normal; climbing no longer costs you extra movement."
                        }
                    ],
                    9: [{
                        name: "Supreme Sneak",
                        description: "You have advantage on a Dexterity (Stealth) check if you move no more than half your speed on the same turn."
                    }],
                    13: [{
                        name: "Use Magic Device",
                        description: "You have learned enough about the workings of magic that you can improvise the use of items even when they are not intended for you."
                    }],
                    17: [{
                        name: "Thief's Reflexes",
                        description: "You have become adept at laying ambushes and quickly escaping danger. You can take two turns during the first round of any combat."
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
                    description: "As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power."
                },
                {
                    name: "Arcane Recovery",
                    description: "You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover."
                }
            ],
            2: [
                {
                    name: "Arcane Tradition",
                    description: "You choose an arcane tradition, shaping your practice of magic: School of Abjuration, Conjuration, Divination, Enchantment, Evocation, Illusion, Necromancy, or Transmutation."
                }
            ],
            18: [
                {
                    name: "Spell Mastery",
                    description: "You have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell. You can cast those spells at their lowest level without expending a spell slot."
                }
            ],
            20: [
                {
                    name: "Signature Spells",
                    description: "You gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells."
                }
            ]
        },
        subclasses: {
            evocation: {
                name: "School of Evocation",
                description: "You focus your study on magic that creates powerful elemental effects.",
                features: {
                    2: [
                        {
                            name: "Evocation Savant",
                            description: "The gold and time you must spend to copy an evocation spell into your spellbook is halved."
                        },
                        {
                            name: "Sculpt Spells",
                            description: "You can create pockets of relative safety within the effects of your evocation spells."
                        }
                    ],
                    6: [{
                        name: "Potent Cantrip",
                        description: "Your damaging cantrips affect even creatures that avoid the brunt of the effect."
                    }],
                    10: [{
                        name: "Empowered Evocation",
                        description: "You can add your Intelligence modifier to one damage roll of any wizard evocation spell you cast."
                    }],
                    14: [{
                        name: "Overchannel",
                        description: "You can increase the power of your simpler spells. When you cast a wizard spell of 1st through 5th level that deals damage, you can deal maximum damage with that spell."
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
