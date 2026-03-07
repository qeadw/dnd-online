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
            },
            ancestralGuardian: {
                name: "Path of the Ancestral Guardian",
                source: "XGtE",
                description: "Some barbarians hail from cultures that revere their ancestors. These tribes teach that the warriors of the past linger in the world as mighty spirits, who can guide and protect the living.",
                features: {
                    3: [{
                        name: "Ancestral Protectors",
                        description: "Spectral warriors appear when you enter your rage. While you're raging, the first creature you hit with an attack on your turn becomes the target of the warriors, which hinder its attacks. Until the start of your next turn, that target has disadvantage on any attack roll that isn't against you, and when the target hits a creature other than you with an attack, that creature has resistance to the damage dealt by the attack."
                    }],
                    6: [{
                        name: "Spirit Shield",
                        description: "The guardian spirits that aid you can provide supernatural protection to those you defend. If you are raging and another creature you can see within 30 feet of you takes damage, you can use your reaction to reduce that damage by 2d6. When you reach certain levels in this class, you can reduce the damage by more: by 3d6 at 10th level and by 4d6 at 14th level."
                    }],
                    10: [{
                        name: "Consult the Spirits",
                        description: "You gain the ability to consult with your ancestral spirits. When you do so, you cast the Augury or Clairvoyance spell, without using a spell slot or material components. Rather than creating a spherical sensor, this use of Clairvoyance invisibly summons one of your ancestral spirits to the chosen location. Wisdom is your spellcasting ability for these spells. After you cast either spell in this way, you can't use this feature again until you finish a short or long rest."
                    }],
                    14: [{
                        name: "Vengeful Ancestors",
                        description: "Your ancestral spirits grow powerful enough to retaliate. When you use your Spirit Shield to reduce the damage of an attack, the attacker takes an amount of force damage equal to the damage that your Spirit Shield prevents."
                    }]
                }
            },
            stormHerald: {
                name: "Path of the Storm Herald",
                source: "XGtE",
                description: "Typical barbarians harbor a fury that dwells within. Their rage grants them superior strength, durability, and speed. Barbarians who follow the Path of the Storm Herald learn instead to transform their rage into a mantle of primal magic that swirls around them.",
                features: {
                    3: [{
                        name: "Storm Aura",
                        description: "You emanate a stormy, magical aura while you rage. The aura extends 10 feet from you in every direction, but not through total cover. Your aura has an effect that activates when you enter your rage, and you can activate the effect again on each of your turns as a bonus action. Choose desert, sea, or tundra. Your aura's effect depends on that chosen environment. Desert: When this effect is activated, all other creatures in your aura take 2 fire damage each. The damage increases when you reach certain levels (3 at 5th, 4 at 10th, 5 at 15th, 6 at 20th). Sea: When this effect is activated, you can choose one other creature you can see in your aura. The target must make a Dexterity saving throw. The target takes 1d6 lightning damage on a failed save, or half as much on a successful one. The damage increases when you reach certain levels (2d6 at 10th, 3d6 at 15th, 4d6 at 20th). Tundra: When this effect is activated, each creature of your choice in your aura gains 2 temporary hit points, as icy spirits inure it to suffering. The temporary hit points increase when you reach certain levels (3 at 5th, 4 at 10th, 5 at 15th, 6 at 20th)."
                    }],
                    6: [{
                        name: "Storm Soul",
                        description: "The storm grants you benefits even when your aura isn't active. The benefits are based on the environment you chose for your Storm Aura. Desert: You gain resistance to fire damage, and you don't suffer the effects of extreme heat. Moreover, as an action, you can touch a flammable object that isn't being worn or carried by anyone else and set it on fire. Sea: You gain resistance to lightning damage, and you can breathe underwater. You also gain a swimming speed of 30 feet. Tundra: You gain resistance to cold damage, and you don't suffer the effects of extreme cold. Moreover, as an action, you can touch water and turn a 5-foot cube of it into ice, which melts after 1 minute."
                    }],
                    10: [{
                        name: "Shielding Storm",
                        description: "You learn to use your mastery of the storm to protect others. Each creature of your choice has the damage resistance you gained from the Storm Soul feature while the creature is in your Storm Aura."
                    }],
                    14: [{
                        name: "Raging Storm",
                        description: "The power of the storm you channel grows mightier, lashing out at your foes. The effect is based on the environment you chose for your Storm Aura. Desert: Immediately after a creature in your aura hits you with an attack, you can use your reaction to force that creature to make a Dexterity saving throw. On a failed save, the creature takes fire damage equal to half your barbarian level. Sea: When you hit a creature in your aura with an attack, you can use your reaction to force that creature to make a Strength saving throw. On a failed save, the creature is knocked prone. Tundra: Whenever the effect of your Storm Aura is activated, you can choose one creature you can see in the aura. That creature must succeed on a Strength saving throw, or its speed is reduced to 0 until the start of your next turn."
                    }]
                }
            },
            zealot: {
                name: "Path of the Zealot",
                source: "XGtE",
                description: "Some deities inspire their followers to pitch themselves into a ferocious battle fury. These barbarians are zealots - warriors who channel their rage into powerful displays of divine power.",
                features: {
                    3: [
                        {
                            name: "Divine Fury",
                            description: "You can channel divine fury into your weapon strikes. While you're raging, the first creature you hit on each of your turns with a weapon attack takes extra damage equal to 1d6 + half your barbarian level. The extra damage is necrotic or radiant; you choose the type of damage when you gain this feature."
                        },
                        {
                            name: "Warrior of the Gods",
                            description: "Your soul is marked for endless battle. If a spell, such as Raise Dead, has the sole effect of restoring you to life (but not undeath), the caster doesn't need material components to cast the spell on you."
                        }
                    ],
                    6: [{
                        name: "Fanatical Focus",
                        description: "The divine power that fuels your rage can protect you. If you fail a saving throw while you're raging, you can reroll it, and you must use the new roll. You can use this ability only once per rage."
                    }],
                    10: [{
                        name: "Zealous Presence",
                        description: "You learn to channel divine power to inspire zealotry in others. As a bonus action, you unleash a battle cry infused with divine energy. Up to ten other creatures of your choice within 60 feet of you that can hear you gain advantage on attack rolls and saving throws until the start of your next turn. Once you use this feature, you can't use it again until you finish a long rest."
                    }],
                    14: [{
                        name: "Rage Beyond Death",
                        description: "The divine power that fuels your rage allows you to shrug off fatal blows. While you're raging, having 0 hit points doesn't knock you unconscious. You still must make death saving throws, and you suffer the normal effects of taking damage while at 0 hit points. However, if you would die due to failing death saving throws, you don't die until your rage ends, and you die then only if you still have 0 hit points."
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
            },
            valor: {
                name: "College of Valor",
                description: "Bards of the College of Valor are daring skalds whose tales keep alive the memory of the great heroes of the past, inspiring a new generation of heroes.",
                features: {
                    3: [
                        {
                            name: "Bonus Proficiencies",
                            description: "You gain proficiency with medium armor, shields, and martial weapons."
                        },
                        {
                            name: "Combat Inspiration",
                            description: "A creature that has a Bardic Inspiration die from you can roll that die and add the number rolled to a weapon damage roll it just made. Alternatively, when an attack roll is made against the creature, it can use its reaction to roll the Bardic Inspiration die and add the number rolled to its AC against that attack."
                        }
                    ],
                    6: [{
                        name: "Extra Attack",
                        description: "You can attack twice, instead of once, whenever you take the Attack action on your turn."
                    }],
                    14: [{
                        name: "Battle Magic",
                        description: "When you use your action to cast a bard spell, you can make one weapon attack as a bonus action."
                    }]
                }
            },
            swords: {
                name: "College of Swords",
                description: "Bards of the College of Swords are called blades, and they entertain through daring feats of weapon prowess. They use their weapons as both performance tools and deadly weapons.",
                features: {
                    3: [
                        {
                            name: "Bonus Proficiencies",
                            description: "You gain proficiency with medium armor and the scimitar. If you're proficient with a simple or martial melee weapon, you can use it as a spellcasting focus for your bard spells."
                        },
                        {
                            name: "Fighting Style",
                            description: "You adopt a particular style of fighting as your specialty. Choose one of the following options: Dueling or Two-Weapon Fighting."
                        },
                        {
                            name: "Blade Flourish",
                            description: "Whenever you take the Attack action on your turn, your walking speed increases by 10 feet until the end of the turn, and if a weapon attack that you make as part of this action hits a creature, you can use one of your Blade Flourish options."
                        }
                    ],
                    6: [{
                        name: "Extra Attack",
                        description: "You can attack twice, instead of once, whenever you take the Attack action on your turn."
                    }],
                    14: [{
                        name: "Master's Flourish",
                        description: "Whenever you use a Blade Flourish option, you can roll a d6 and use it instead of expending a Bardic Inspiration die."
                    }]
                }
            },
            glamour: {
                name: "College of Glamour",
                description: "The College of Glamour is the home of bards who mastered their craft in the vibrant realm of the Feywild or under the tutelage of someone who dwelled there.",
                features: {
                    3: [
                        {
                            name: "Mantle of Inspiration",
                            description: "As a bonus action, you can expend one use of your Bardic Inspiration to grant yourself a wondrous appearance. When you do so, choose a number of creatures you can see and who can see you within 60 feet, up to a number equal to your Charisma modifier. Each of them gains 5 temporary hit points and can immediately use its reaction to move up to its speed, without provoking opportunity attacks."
                        },
                        {
                            name: "Enthralling Performance",
                            description: "If you perform for at least 1 minute, you can attempt to inspire wonder in your audience. At the end of the performance, choose a number of humanoids within 60 feet who watched and listened to all of it, up to a number equal to your Charisma modifier. Each target must succeed on a Wisdom saving throw or be charmed by you."
                        }
                    ],
                    6: [{
                        name: "Mantle of Majesty",
                        description: "You gain the ability to cloak yourself in a fey magic that makes others want to serve you. As a bonus action, you cast command, without expending a spell slot, and you take on an appearance of unearthly beauty for 1 minute."
                    }],
                    14: [{
                        name: "Unbreakable Majesty",
                        description: "Your appearance permanently gains an otherworldly aspect. As a bonus action, you can assume a magically majestic presence for 1 minute. For the duration, whenever any creature tries to attack you for the first time on a turn, the attacker must make a Charisma saving throw."
                    }]
                }
            },
            whispers: {
                name: "College of Whispers",
                description: "Most folk are happy to welcome a bard into their midst. Bards of the College of Whispers use this to their advantage. They appear to be like any other bard, sharing news, singing songs, and telling tales. But the College of Whispers teaches its students that they are wolves among sheep.",
                features: {
                    3: [
                        {
                            name: "Psychic Blades",
                            description: "You gain the ability to make your weapon attacks magically toxic to a creature's mind. When you hit a creature with a weapon attack, you can expend one use of your Bardic Inspiration to deal an additional 2d6 psychic damage to that target. The damage increases as you gain bard levels."
                        },
                        {
                            name: "Words of Terror",
                            description: "If you speak to a humanoid alone for at least 1 minute, you can attempt to seed paranoia and fear into its mind. At the end of the conversation, the target must succeed on a Wisdom saving throw or be frightened of you or another creature of your choice."
                        }
                    ],
                    6: [{
                        name: "Mantle of Whispers",
                        description: "You gain the ability to adopt a humanoid's persona. When a humanoid dies within 30 feet of you, you can magically capture its shadow. You can use the shadow to create a disguise that makes you look like the dead person."
                    }],
                    14: [{
                        name: "Shadow Lore",
                        description: "You gain the ability to weave dark magic into your words and tap into a creature's deepest fears. As an action, you magically whisper a phrase that only one creature of your choice within 30 feet can hear. The target must succeed on a Wisdom saving throw or be charmed by you for 8 hours."
                    }]
                }
            },
            creation: {
                name: "College of Creation",
                description: "Bards believe the cosmos is a work of art - the creation of the first dragons and gods. That creative work included harmonies that continue to resound through existence today, a power known as the Song of Creation.",
                features: {
                    3: [
                        {
                            name: "Mote of Potential",
                            description: "When you give a creature a Bardic Inspiration die, you can utter a note from the Song of Creation to create a Tiny mote of potential. The mote orbits the creature and provides different benefits depending on how the Bardic Inspiration die is used."
                        },
                        {
                            name: "Performance of Creation",
                            description: "As an action, you can channel the magic of the Song of Creation to create one nonmagical item of your choice in an unoccupied space within 10 feet. The item must appear on a surface or in a liquid that can support it."
                        }
                    ],
                    6: [{
                        name: "Animating Performance",
                        description: "As an action, you can animate one Large or smaller nonmagical item within 30 feet. The animate item uses the Dancing Item stat block. The item is friendly to you and your companions and obeys your commands."
                    }],
                    14: [{
                        name: "Creative Crescendo",
                        description: "When you use your Performance of Creation feature, you can create more than one item at once. The number of items equals your Charisma modifier."
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
            },
            knowledge: {
                name: "Knowledge Domain",
                description: "The gods of knowledge value learning and understanding above all. Some teach that knowledge is to be gathered and shared, while others hoard knowledge and keep its secrets.",
                features: {
                    1: [
                        {
                            name: "Blessings of Knowledge",
                            description: "You learn two languages of your choice. You also become proficient in your choice of two of the following skills: Arcana, History, Nature, or Religion. Your proficiency bonus is doubled for any ability check you make that uses either of those skills."
                        }
                    ],
                    2: [{
                        name: "Channel Divinity: Knowledge of the Ages",
                        description: "You can use your Channel Divinity to tap into a divine well of knowledge. As an action, you choose one skill or tool. For 10 minutes, you have proficiency with the chosen skill or tool."
                    }],
                    6: [{
                        name: "Channel Divinity: Read Thoughts",
                        description: "You can use your Channel Divinity to read a creature's thoughts. You can then use your access to the creature's mind to command it."
                    }],
                    8: [{
                        name: "Potent Spellcasting",
                        description: "You add your Wisdom modifier to the damage you deal with any cleric cantrip."
                    }],
                    17: [{
                        name: "Visions of the Past",
                        description: "You can call up visions of the past that relate to an object you hold or your immediate surroundings."
                    }]
                }
            },
            light: {
                name: "Light Domain",
                description: "Gods of light promote the ideals of rebirth and renewal, truth, vigilance, and beauty, often using the symbol of the sun.",
                features: {
                    1: [
                        {
                            name: "Bonus Cantrip",
                            description: "You gain the light cantrip if you don't already know it."
                        },
                        {
                            name: "Warding Flare",
                            description: "When you are attacked by a creature within 30 feet, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker."
                        }
                    ],
                    2: [{
                        name: "Channel Divinity: Radiance of the Dawn",
                        description: "You can use your Channel Divinity to harness sunlight, banishing darkness and dealing radiant damage to your foes."
                    }],
                    6: [{
                        name: "Improved Flare",
                        description: "You can also use your Warding Flare feature when a creature that you can see within 30 feet attacks a creature other than you."
                    }],
                    8: [{
                        name: "Potent Spellcasting",
                        description: "You add your Wisdom modifier to the damage you deal with any cleric cantrip."
                    }],
                    17: [{
                        name: "Corona of Light",
                        description: "You can use your action to activate an aura of sunlight that lasts for 1 minute or until you dismiss it. You emit bright light in a 60-foot radius and dim light 30 feet beyond that."
                    }]
                }
            },
            tempest: {
                name: "Tempest Domain",
                description: "Gods whose portfolios include the Tempest domain govern storms, sea, and sky. They include gods of lightning and thunder, gods of earthquakes, some fire gods, and certain gods of violence and destruction.",
                features: {
                    1: [
                        {
                            name: "Bonus Proficiencies",
                            description: "You gain proficiency with martial weapons and heavy armor."
                        },
                        {
                            name: "Wrath of the Storm",
                            description: "When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a Dexterity saving throw. The creature takes 2d8 lightning or thunder damage on a failed save, and half as much on a successful one."
                        }
                    ],
                    2: [{
                        name: "Channel Divinity: Destructive Wrath",
                        description: "When you roll lightning or thunder damage, you can use your Channel Divinity to deal maximum damage instead of rolling."
                    }],
                    6: [{
                        name: "Thunderbolt Strike",
                        description: "When you deal lightning damage to a Large or smaller creature, you can also push it up to 10 feet away from you."
                    }],
                    8: [{
                        name: "Divine Strike",
                        description: "Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 thunder damage to the target."
                    }],
                    17: [{
                        name: "Stormborn",
                        description: "You have a flying speed equal to your current walking speed whenever you are not underground or indoors."
                    }]
                }
            },
            trickery: {
                name: "Trickery Domain",
                description: "Gods of trickery are mischief-makers and instigators who stand as a constant challenge to the accepted order among both gods and mortals.",
                features: {
                    1: [
                        {
                            name: "Blessing of the Trickster",
                            description: "You can use your action to touch a willing creature other than yourself to give it advantage on Dexterity (Stealth) checks. This blessing lasts for 1 hour or until you use this feature again."
                        }
                    ],
                    2: [{
                        name: "Channel Divinity: Invoke Duplicity",
                        description: "You can use your Channel Divinity to create an illusory duplicate of yourself."
                    }],
                    6: [{
                        name: "Channel Divinity: Cloak of Shadows",
                        description: "You can use your Channel Divinity to become invisible until the end of your next turn."
                    }],
                    8: [{
                        name: "Divine Strike",
                        description: "Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 poison damage to the target."
                    }],
                    17: [{
                        name: "Improved Duplicity",
                        description: "You can create up to four duplicates of yourself, instead of one, when you use Invoke Duplicity."
                    }]
                }
            },
            war: {
                name: "War Domain",
                description: "War has many manifestations. It can make heroes of ordinary people. It can be desperate and horrific, with acts of cruelty and cowardice eclipsing instances of excellence and courage.",
                features: {
                    1: [
                        {
                            name: "Bonus Proficiencies",
                            description: "You gain proficiency with martial weapons and heavy armor."
                        },
                        {
                            name: "War Priest",
                            description: "When you use the Attack action, you can make one weapon attack as a bonus action. You can use this feature a number of times equal to your Wisdom modifier."
                        }
                    ],
                    2: [{
                        name: "Channel Divinity: Guided Strike",
                        description: "When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll."
                    }],
                    6: [{
                        name: "Channel Divinity: War God's Blessing",
                        description: "When a creature within 30 feet makes an attack roll, you can use your reaction to grant that creature a +10 bonus to the roll."
                    }],
                    8: [{
                        name: "Divine Strike",
                        description: "Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 damage of the same type dealt by the weapon."
                    }],
                    17: [{
                        name: "Avatar of Battle",
                        description: "You gain resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons."
                    }]
                }
            },
            nature: {
                name: "Nature Domain",
                description: "Gods of nature are as varied as the natural world itself, from inscrutable gods of the deep forests to friendly deities associated with particular springs and groves.",
                features: {
                    1: [
                        {
                            name: "Acolyte of Nature",
                            description: "You learn one druid cantrip of your choice. You also gain proficiency in one of the following skills: Animal Handling, Nature, or Survival."
                        },
                        {
                            name: "Bonus Proficiency",
                            description: "You gain proficiency with heavy armor."
                        }
                    ],
                    2: [{
                        name: "Channel Divinity: Charm Animals and Plants",
                        description: "You can use your Channel Divinity to charm animals and plants."
                    }],
                    6: [{
                        name: "Dampen Elements",
                        description: "When you or a creature within 30 feet takes acid, cold, fire, lightning, or thunder damage, you can use your reaction to grant resistance to that damage."
                    }],
                    8: [{
                        name: "Divine Strike",
                        description: "Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 cold, fire, or lightning damage."
                    }],
                    17: [{
                        name: "Master of Nature",
                        description: "You gain the ability to command animals and plant creatures."
                    }]
                }
            },
            forge: {
                name: "Forge Domain",
                description: "The gods of the forge are patrons of artisans who work with metal, from a humble blacksmith who keeps a village in horseshoes and plow blades to the mighty elf artisan whose diamond-tipped arrows of mithral have felled demon lords.",
                features: {
                    1: [
                        {
                            name: "Bonus Proficiencies",
                            description: "You gain proficiency with heavy armor and smith's tools."
                        },
                        {
                            name: "Blessing of the Forge",
                            description: "At the end of a long rest, you can touch one nonmagical object that is a suit of armor or a simple or martial weapon. Until the end of your next long rest, the object becomes a magic item, granting a +1 bonus to AC or attack and damage rolls."
                        }
                    ],
                    2: [{
                        name: "Channel Divinity: Artisan's Blessing",
                        description: "You can use your Channel Divinity to create a simple item."
                    }],
                    6: [{
                        name: "Soul of the Forge",
                        description: "You gain resistance to fire damage. While wearing heavy armor, you gain a +1 bonus to AC."
                    }],
                    8: [{
                        name: "Divine Strike",
                        description: "Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 fire damage."
                    }],
                    17: [{
                        name: "Saint of Forge and Fire",
                        description: "You become immune to fire damage. While wearing heavy armor, you have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks."
                    }]
                }
            },
            grave: {
                name: "Grave Domain",
                description: "Gods of the grave watch over the line between life and death. To these deities, death and the afterlife are a foundational part of the multiverse.",
                features: {
                    1: [
                        {
                            name: "Circle of Mortality",
                            description: "When you would normally roll one or more dice to restore hit points with a spell to a creature at 0 hit points, you instead use the highest number possible for each die."
                        },
                        {
                            name: "Eyes of the Grave",
                            description: "As an action, you can open your awareness to magically detect undead."
                        }
                    ],
                    2: [{
                        name: "Channel Divinity: Path to the Grave",
                        description: "As an action, you touch a creature. The next attack that hits it within 1 minute is a critical hit."
                    }],
                    6: [{
                        name: "Sentinel at Death's Door",
                        description: "As a reaction, you can turn a critical hit into a normal hit."
                    }],
                    8: [{
                        name: "Potent Spellcasting",
                        description: "You add your Wisdom modifier to the damage you deal with any cleric cantrip."
                    }],
                    17: [{
                        name: "Keeper of Souls",
                        description: "When an enemy you can see dies within 60 feet of you, you or one ally within 60 feet regains hit points equal to the enemy's number of Hit Dice."
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
            },
            moon: {
                name: "Circle of the Moon",
                description: "Druids of the Circle of the Moon are fierce guardians of the wilds. Their order gathers under the full moon to share news and trade warnings.",
                features: {
                    2: [
                        {
                            name: "Combat Wild Shape",
                            description: "You can use your Wild Shape as a bonus action, and you can expend a spell slot to regain hit points while in beast form."
                        },
                        {
                            name: "Circle Forms",
                            description: "You can transform into beasts with a challenge rating as high as 1 (ignoring the normal CR restrictions)."
                        }
                    ],
                    6: [{
                        name: "Primal Strike",
                        description: "Your attacks in beast form count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
                    }],
                    10: [{
                        name: "Elemental Wild Shape",
                        description: "You can expend two uses of Wild Shape to transform into an air elemental, earth elemental, fire elemental, or water elemental."
                    }],
                    14: [{
                        name: "Thousand Forms",
                        description: "You have learned to use magic to alter your physical form in more subtle ways. You can cast the alter self spell at will."
                    }]
                }
            },
            spores: {
                name: "Circle of Spores",
                description: "Druids of the Circle of Spores find beauty in decay. They see death as an essential part of life, a glorious moment that feeds the life to come.",
                features: {
                    2: [
                        {
                            name: "Halo of Spores",
                            description: "You are surrounded by invisible, necrotic spores that are harmless until you unleash them on a creature nearby. When a creature you can see moves into a space within 10 feet of you or starts its turn there, you can use your reaction to deal 1d4 necrotic damage to that creature."
                        },
                        {
                            name: "Symbiotic Entity",
                            description: "You can use your Wild Shape to awaken your spores, rather than transforming. You gain temporary hit points equal to 4 times your druid level, your Halo of Spores damage increases, and your melee weapon attacks deal an extra 1d6 necrotic damage."
                        }
                    ],
                    6: [{
                        name: "Fungal Infestation",
                        description: "Your spores gain the ability to infest a corpse and animate it. If a beast or humanoid that is Small or Medium dies within 10 feet of you, you can use your reaction to animate it, causing it to stand up immediately with 1 hit point."
                    }],
                    10: [{
                        name: "Spreading Spores",
                        description: "You gain the ability to seed an area with deadly spores. As a bonus action while your Symbiotic Entity is active, you can hurl spores up to 30 feet away, where they create a 10-foot cube that lasts for 1 minute."
                    }],
                    14: [{
                        name: "Fungal Body",
                        description: "The fungal spores in your body alter you: you can't be blinded, deafened, frightened, or poisoned, and any critical hit against you counts as a normal hit instead, unless you're incapacitated."
                    }]
                }
            },
            stars: {
                name: "Circle of Stars",
                description: "The Circle of Stars allows druids to draw on the power of starlight. These druids have tracked heavenly patterns since time immemorial, discovering secrets hidden amid the constellations.",
                features: {
                    2: [
                        {
                            name: "Star Map",
                            description: "You've created a star chart as part of your heavenly studies. While holding this map, you have the guidance and guiding bolt spells prepared, and they don't count against your prepared spells. You can cast guiding bolt without expending a spell slot a number of times equal to your proficiency bonus."
                        },
                        {
                            name: "Starry Form",
                            description: "As a bonus action, you can expend a use of Wild Shape to take on a starry form, rather than transforming into a beast. Choose a constellation to determine your starry form: Archer, Chalice, or Dragon."
                        }
                    ],
                    6: [{
                        name: "Cosmic Omen",
                        description: "Whenever you finish a long rest, you can consult your Star Map for omens. When a creature you can see within 30 feet makes an attack roll, saving throw, or ability check, you can use your reaction to roll a d6 and apply the number rolled as a bonus or penalty."
                    }],
                    10: [{
                        name: "Twinkling Constellations",
                        description: "The constellations of your Starry Form improve. The 1d8s become 2d8s, and you can change your constellation at the start of each of your turns."
                    }],
                    14: [{
                        name: "Full of Stars",
                        description: "While in your Starry Form, you become partially incorporeal, giving you resistance to bludgeoning, piercing, and slashing damage."
                    }]
                }
            },
            wildfire: {
                name: "Circle of Wildfire",
                description: "Druids within the Circle of Wildfire understand that destruction is sometimes the precursor of creation. These druids bond with a primal spirit that harbors both destructive and creative power.",
                features: {
                    2: [
                        {
                            name: "Summon Wildfire Spirit",
                            description: "You can expend one use of your Wild Shape to summon your wildfire spirit, rather than assuming a beast form. The spirit appears in an unoccupied space of your choice within 30 feet."
                        },
                        {
                            name: "Enhanced Bond",
                            description: "The bond with your wildfire spirit enhances your destructive and restorative spells. Whenever you cast a spell that deals fire damage or restores hit points, roll a d8, and you gain a bonus equal to the number rolled."
                        }
                    ],
                    6: [{
                        name: "Cauterizing Flames",
                        description: "When a Small or larger creature dies within 30 feet of you or your wildfire spirit, a harmless spectral flame springs forth that flickers for 1 minute. When a creature you can see enters that space, you can use your reaction to heal the creature or deal fire damage."
                    }],
                    10: [{
                        name: "Blazing Revival",
                        description: "The bond with your wildfire spirit can save you from death. If the spirit is within 120 feet of you when you are reduced to 0 hit points, you can have the spirit drop to 0 hit points and you regain hit points equal to half your hit point maximum."
                    }],
                    14: [{
                        name: "Fire Storm",
                        description: "As an action, you can spend your wildfire spirit to release a wave of healing and destruction. Each creature of your choice in a 30-foot-radius sphere takes fire damage or regains hit points equal to 2d10 + your Wisdom modifier."
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
            },
            eldritchKnight: {
                name: "Eldritch Knight",
                source: "PHB",
                description: "The archetypal Eldritch Knight combines the martial mastery common to all fighters with a careful study of magic. Eldritch Knights use magical techniques similar to those practiced by wizards.",
                features: {
                    3: [
                        {
                            name: "Spellcasting",
                            description: "You augment your martial prowess with the ability to cast spells. You learn two cantrips of your choice from the wizard spell list. You learn three 1st-level wizard spells of your choice, two of which must be from the abjuration and evocation schools. Intelligence is your spellcasting ability for your wizard spells."
                        },
                        {
                            name: "Weapon Bond",
                            description: "You learn a ritual that creates a magical bond between yourself and one weapon. You perform the ritual over the course of 1 hour. Once bonded, you can't be disarmed of that weapon and you can summon it to your hand as a bonus action."
                        }
                    ],
                    7: [{
                        name: "War Magic",
                        description: "When you use your action to cast a cantrip, you can make one weapon attack as a bonus action."
                    }],
                    10: [{
                        name: "Eldritch Strike",
                        description: "You learn how to make your weapon strikes undercut a creature's resistance to your spells. When you hit a creature with a weapon attack, that creature has disadvantage on the next saving throw it makes against a spell you cast before the end of your next turn."
                    }],
                    15: [{
                        name: "Arcane Charge",
                        description: "You gain the ability to teleport up to 30 feet to an unoccupied space you can see when you use your Action Surge. You can teleport before or after the additional action."
                    }],
                    18: [{
                        name: "Improved War Magic",
                        description: "When you use your action to cast a spell, you can make one weapon attack as a bonus action."
                    }]
                }
            },
            arcaneArcher: {
                name: "Arcane Archer",
                source: "XGtE",
                description: "An Arcane Archer studies a unique elven method of archery that weaves magic into attacks to produce supernatural effects. Among elves, Arcane Archers are some of their most elite warriors.",
                features: {
                    3: [
                        {
                            name: "Arcane Archer Lore",
                            description: "You learn magical theory or some of the secrets of nature - typical for practitioners of this elven martial tradition. You choose to gain proficiency in either the Arcana or the Nature skill, and you choose to learn either the Prestidigitation or the Druidcraft cantrip."
                        },
                        {
                            name: "Arcane Shot",
                            description: "You learn to unleash special magical effects with some of your shots. When you gain this feature, you learn two Arcane Shot options of your choice. Once per turn when you fire an arrow from a shortbow or longbow as part of the Attack action, you can apply one of your Arcane Shot options to that arrow. You have two uses of this ability, and you regain all expended uses when you finish a short or long rest."
                        }
                    ],
                    7: [
                        {
                            name: "Magic Arrow",
                            description: "You gain the ability to infuse arrows with magic. Whenever you fire a nonmagical arrow from a shortbow or longbow, you can make it magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage. The magic fades from the arrow immediately after it hits or misses its target."
                        },
                        {
                            name: "Curving Shot",
                            description: "You learn how to direct an errant arrow toward a new target. When you make an attack roll with a magic arrow and miss, you can use a bonus action to reroll the attack roll against a different target within 60 feet of the original target."
                        }
                    ],
                    10: [{
                        name: "Additional Arcane Shot",
                        description: "You learn an additional Arcane Shot option of your choice."
                    }],
                    15: [{
                        name: "Ever-Ready Shot",
                        description: "Your magical archery is available whenever battle starts. If you roll initiative and have no uses of Arcane Shot remaining, you regain one use of it."
                    }],
                    18: [{
                        name: "Additional Arcane Shot",
                        description: "You learn an additional Arcane Shot option of your choice. You now have four options total."
                    }]
                }
            },
            cavalier: {
                name: "Cavalier",
                source: "XGtE",
                description: "The archetypal Cavalier excels at mounted combat. Usually born among the nobility and raised at court, a Cavalier is equally at home leading a cavalry charge or exchanging repartee at a state dinner.",
                features: {
                    3: [
                        {
                            name: "Bonus Proficiency",
                            description: "You gain proficiency in one of the following skills of your choice: Animal Handling, History, Insight, Performance, or Persuasion. Alternatively, you learn one language of your choice."
                        },
                        {
                            name: "Born to the Saddle",
                            description: "Your mastery as a rider becomes apparent. You have advantage on saving throws made to avoid falling off your mount. If you fall off your mount and descend no more than 10 feet, you can land on your feet if you're not incapacitated. Mounting or dismounting a creature costs you only 5 feet of movement."
                        },
                        {
                            name: "Unwavering Mark",
                            description: "You can menace your foes, foiling their attacks and punishing them for harming others. When you hit a creature with a melee weapon attack, you can mark the creature until the end of your next turn. A marked creature has disadvantage on any attack roll that doesn't target you. If a creature marked by you deals damage to anyone other than you, you can make a special melee weapon attack against it as a bonus action on your next turn, with advantage and dealing extra damage equal to half your fighter level."
                        }
                    ],
                    7: [{
                        name: "Warding Maneuver",
                        description: "You learn to fend off strikes directed at you, your mount, or other creatures nearby. If you or a creature you can see within 5 feet of you is hit by an attack, you can roll 1d8 as a reaction if you're wielding a melee weapon or a shield. Roll the die, and add the number rolled to the target's AC against that attack. If the attack still hits, the target has resistance against the attack's damage. You can use this feature a number of times equal to your Constitution modifier, regaining all uses on a long rest."
                    }],
                    10: [{
                        name: "Hold the Line",
                        description: "You become a master of locking down your enemies. Creatures provoke an opportunity attack from you when they move 5 feet or more while within your reach, and if you hit a creature with an opportunity attack, the target's speed is reduced to 0 until the end of the current turn."
                    }],
                    15: [{
                        name: "Ferocious Charger",
                        description: "You can run down your foes, whether you're mounted or not. If you move at least 10 feet in a straight line right before attacking a creature and you hit it with the attack, that target must succeed on a Strength saving throw or be knocked prone. You can use this feature only once on each of your turns."
                    }],
                    18: [{
                        name: "Vigilant Defender",
                        description: "You respond to danger with extraordinary vigilance. In combat, you get a special reaction that you can take once on every creature's turn, except your turn. You can use this special reaction only to make an opportunity attack, and you can't use it on the same turn that you take your normal reaction."
                    }]
                }
            },
            samurai: {
                name: "Samurai",
                source: "XGtE",
                description: "The Samurai is a fighter who draws on an implacable fighting spirit to overcome enemies. A Samurai's resolve is nearly unbreakable, and the enemies in a Samurai's path have two choices: yield or die fighting.",
                features: {
                    3: [
                        {
                            name: "Bonus Proficiency",
                            description: "You gain proficiency in one of the following skills of your choice: History, Insight, Performance, or Persuasion. Alternatively, you learn one language of your choice."
                        },
                        {
                            name: "Fighting Spirit",
                            description: "Your intensity in battle can shield you and help you strike true. As a bonus action on your turn, you can give yourself advantage on weapon attack rolls until the end of the current turn. When you do so, you also gain 5 temporary hit points. The number of temporary hit points increases when you reach certain levels (10 at 10th level, 15 at 15th level). You can use this feature three times, regaining all uses on a long rest."
                        }
                    ],
                    7: [{
                        name: "Elegant Courtier",
                        description: "Your discipline and attention to detail allow you to excel in social situations. Whenever you make a Charisma (Persuasion) check, you gain a bonus to the check equal to your Wisdom modifier. Your self-control also causes you to gain proficiency in Wisdom saving throws. If you already have this proficiency, you instead gain proficiency in Intelligence or Charisma saving throws (your choice)."
                    }],
                    10: [{
                        name: "Tireless Spirit",
                        description: "When you roll initiative and have no uses of Fighting Spirit remaining, you regain one use."
                    }],
                    15: [{
                        name: "Rapid Strike",
                        description: "You learn to trade accuracy for swift strikes. If you take the Attack action on your turn and have advantage on an attack roll against one of the targets, you can forgo the advantage for that roll to make an additional weapon attack against that target, as part of the same action. You can do so no more than once per turn."
                    }],
                    18: [{
                        name: "Strength Before Death",
                        description: "Your fighting spirit can delay the grasp of death. If you take damage that reduces you to 0 hit points and doesn't kill you outright, you can use your reaction to delay falling unconscious, and you can immediately take an extra turn, interrupting the current turn. While you have 0 hit points during that extra turn, taking damage causes death saving throw failures as normal. If you would have 3 failures, you die. When the extra turn ends, you fall unconscious. Once you use this feature, you can't use it again until you finish a long rest."
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
                source: "PHB",
                description: "Monks of the Way of the Open Hand are the ultimate masters of martial arts combat.",
                features: {
                    3: [{
                        name: "Open Hand Technique",
                        description: "You can manipulate your enemy's ki when you harness your own. Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can impose one of several effects on that target: it must succeed on a Dexterity saving throw or be knocked prone, it must make a Strength saving throw or be pushed up to 15 feet away from you, or it can't take reactions until the end of your next turn."
                    }],
                    6: [{
                        name: "Wholeness of Body",
                        description: "You gain the ability to heal yourself. As an action, you can regain hit points equal to three times your monk level. You must finish a long rest before you can use this feature again."
                    }],
                    11: [{
                        name: "Tranquility",
                        description: "You can enter a special meditation that surrounds you with an aura of peace. At the end of a long rest, you gain the effect of a Sanctuary spell that lasts until the start of your next long rest. The spell can end early as normal."
                    }],
                    17: [{
                        name: "Quivering Palm",
                        description: "You gain the ability to set up lethal vibrations in someone's body. When you hit a creature with an unarmed strike, you can spend 3 ki points to start these imperceptible vibrations, which last for a number of days equal to your monk level. You can then use your action to end the vibrations harmlessly, or the creature must make a Constitution saving throw. If it fails, it is reduced to 0 hit points. If it succeeds, it takes 10d10 necrotic damage."
                    }]
                }
            },
            shadow: {
                name: "Way of Shadow",
                source: "PHB",
                description: "Monks of the Way of Shadow follow a tradition that values stealth and subterfuge. These monks might be called ninjas or shadowdancers, and they serve as spies and assassins.",
                features: {
                    3: [
                        {
                            name: "Shadow Arts",
                            description: "You can use your ki to duplicate the effects of certain spells. As an action, you can spend 2 ki points to cast Darkness, Darkvision, Pass without Trace, or Silence, without providing material components. Additionally, you gain the Minor Illusion cantrip if you don't already know it."
                        }
                    ],
                    6: [{
                        name: "Shadow Step",
                        description: "You gain the ability to step from one shadow into another. When you are in dim light or darkness, as a bonus action you can teleport up to 60 feet to an unoccupied space you can see that is also in dim light or darkness. You then have advantage on the first melee attack you make before the end of the turn."
                    }],
                    11: [{
                        name: "Cloak of Shadows",
                        description: "You have learned to become one with the shadows. When you are in an area of dim light or darkness, you can use your action to become invisible. You remain invisible until you make an attack, cast a spell, or are in an area of bright light."
                    }],
                    17: [{
                        name: "Opportunist",
                        description: "You can exploit a creature's momentary distraction when it is hit by an attack. Whenever a creature within 5 feet of you is hit by an attack made by a creature other than you, you can use your reaction to make a melee attack against that creature."
                    }]
                }
            },
            fourElements: {
                name: "Way of the Four Elements",
                source: "PHB",
                description: "You follow a monastic tradition that teaches you to harness the elements. When you focus your ki, you can align yourself with the forces of creation and bend the four elements to your will, using them as an extension of your body.",
                features: {
                    3: [{
                        name: "Disciple of the Elements",
                        description: "You learn magical disciplines that harness the power of the four elements. You learn the Elemental Attunement discipline and one other elemental discipline of your choice. You learn one additional elemental discipline at 6th, 11th, and 17th level. Whenever you learn a new elemental discipline, you can also replace one elemental discipline that you already know with a different discipline. Casting elemental spells costs ki points based on the spell level."
                    }],
                    6: [{
                        name: "Additional Elemental Discipline",
                        description: "You learn one additional elemental discipline of your choice. Some disciplines require you to spend ki points to cast spells, with costs varying by spell level."
                    }],
                    11: [{
                        name: "Additional Elemental Discipline",
                        description: "You learn one additional elemental discipline of your choice. You can select from more powerful disciplines as you gain levels."
                    }],
                    17: [{
                        name: "Additional Elemental Discipline",
                        description: "You learn one additional elemental discipline of your choice. At this level, you have access to the most powerful elemental disciplines available."
                    }]
                }
            },
            drunkenMaster: {
                name: "Way of the Drunken Master",
                source: "XGtE",
                description: "The Way of the Drunken Master teaches its students to move with the jerky, unpredictable movements of a drunkard. A drunken master's erratic stumbles conceal a carefully executed dance of blocks, parries, advances, attacks, and retreats.",
                features: {
                    3: [
                        {
                            name: "Bonus Proficiencies",
                            description: "You gain proficiency in the Performance skill if you don't already have it. Your martial arts technique mixes combat training with the precision of a dancer and the antics of a jester. You also gain proficiency with brewer's supplies if you don't already have it."
                        },
                        {
                            name: "Drunken Technique",
                            description: "You learn how to twist and turn quickly as part of your Flurry of Blows. Whenever you use Flurry of Blows, you gain the benefit of the Disengage action, and your walking speed increases by 10 feet until the end of the current turn."
                        }
                    ],
                    6: [{
                        name: "Tipsy Sway",
                        description: "You can move in sudden, swaying ways. You gain two benefits: Leap to Your Feet - When you're prone, you can stand up by spending 5 feet of movement, rather than half your speed. Redirect Attack - When a creature misses you with a melee attack roll, you can spend 1 ki point as a reaction to cause that attack to hit one creature of your choice, other than the attacker, that you can see within 5 feet of you."
                    }],
                    11: [{
                        name: "Drunkard's Luck",
                        description: "You always seem to get a lucky bounce at the right moment. When you make an ability check, an attack roll, or a saving throw and have disadvantage on the roll, you can spend 2 ki points to cancel the disadvantage for that roll."
                    }],
                    17: [{
                        name: "Intoxicated Frenzy",
                        description: "You gain the ability to make an overwhelming number of attacks against a group of enemies. When you use your Flurry of Blows, you can make up to three additional attacks with it (up to a total of five Flurry of Blows attacks), provided that each Flurry of Blows attack targets a different creature this turn."
                    }]
                }
            },
            kensei: {
                name: "Way of the Kensei",
                source: "XGtE",
                description: "Monks of the Way of the Kensei train relentlessly with their weapons, to the point where the weapon becomes an extension of the body. Founded on a mastery of sword fighting, the tradition has expanded to include many different weapons.",
                features: {
                    3: [
                        {
                            name: "Path of the Kensei",
                            description: "Your special martial arts training leads you to master the use of certain weapons. You choose two types of weapons to be your kensei weapons: one melee weapon and one ranged weapon. Each must be a simple or martial weapon that lacks the heavy and special properties. You gain proficiency with these weapons if you don't already have it, and they count as monk weapons for you."
                        },
                        {
                            name: "Agile Parry",
                            description: "If you make an unarmed strike as part of the Attack action on your turn and are holding a kensei weapon, you can use it to defend yourself. You gain a +2 bonus to AC until the start of your next turn, while the weapon is in your hand and you aren't incapacitated."
                        },
                        {
                            name: "Kensei's Shot",
                            description: "You can use a bonus action on your turn to make your ranged attacks with a kensei weapon more deadly. When you do so, any target you hit with a ranged attack using a kensei weapon takes an extra 1d4 damage of the weapon's type. You retain this benefit until the end of the current turn."
                        },
                        {
                            name: "Way of the Brush",
                            description: "You gain proficiency with your choice of calligrapher's supplies or painter's supplies."
                        }
                    ],
                    6: [
                        {
                            name: "One with the Blade",
                            description: "You extend your ki into your kensei weapons, granting you the following benefits."
                        },
                        {
                            name: "Magic Kensei Weapons",
                            description: "Your attacks with your kensei weapons count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
                        },
                        {
                            name: "Deft Strike",
                            description: "When you hit a target with a kensei weapon, you can spend 1 ki point to cause the weapon to deal extra damage to the target equal to your Martial Arts die. You can use this feature only once on each of your turns."
                        }
                    ],
                    11: [{
                        name: "Sharpen the Blade",
                        description: "You gain the ability to augment your weapons further with your ki. As a bonus action, you can expend up to 3 ki points to grant one kensei weapon you touch a bonus to attack and damage rolls when you attack with it. The bonus equals the number of ki points you spent. This bonus lasts for 1 minute or until you use this feature again. This feature has no effect on a magic weapon that already has a bonus to attack and damage rolls."
                    }],
                    17: [{
                        name: "Unerring Accuracy",
                        description: "Your mastery of weapons grants you extraordinary accuracy. If you miss with an attack roll using a monk weapon on your turn, you can reroll it. You can use this feature only once on each of your turns."
                    }]
                }
            },
            sunSoul: {
                name: "Way of the Sun Soul",
                source: "XGtE",
                description: "Monks of the Way of the Sun Soul learn to channel their life energy into searing bolts of light. They teach that meditation can unlock the ability to unleash the indomitable light shed by the soul of every living creature.",
                features: {
                    3: [{
                        name: "Radiant Sun Bolt",
                        description: "You gain a new attack option that you can use with the Attack action. This special attack is a ranged spell attack with a range of 30 feet. You are proficient with it, and you add your Dexterity modifier to its attack and damage rolls. Its damage is radiant, and its damage die is a d4. This die changes as you gain monk levels. When you take the Attack action on your turn and use this special attack as part of it, you can spend 1 ki point to make the special attack twice as a bonus action."
                    }],
                    6: [{
                        name: "Searing Arc Strike",
                        description: "You gain the ability to channel your ki into searing waves of energy. Immediately after you take the Attack action on your turn, you can spend 2 ki points to cast the Burning Hands spell as a bonus action. You can spend additional ki points to cast Burning Hands as a higher-level spell. Each additional ki point you spend increases the spell's level by 1. The maximum number of ki points (2 plus any additional points) that you can spend on the spell equals half your monk level."
                    }],
                    11: [{
                        name: "Searing Sunburst",
                        description: "You gain the ability to create an orb of light that erupts into a devastating explosion. As an action, you magically create an orb and hurl it at a point you choose within 150 feet, where it erupts into a sphere of radiant light for a brief but deadly instant. Each creature in that 20-foot-radius sphere must succeed on a Constitution saving throw or take 2d6 radiant damage. A creature doesn't need to see the orb to be affected by it. You can increase the sphere's damage by spending ki points. Each point you spend, to a maximum of 3, increases the damage by 2d6."
                    }],
                    17: [{
                        name: "Sun Shield",
                        description: "You become wreathed in a luminous, magical aura. You shed bright light in a 30-foot radius and dim light for an additional 30 feet. You can extinguish or restore the light as a bonus action. If a creature hits you with a melee attack while this light shines, you can use your reaction to deal radiant damage to the attacker. The radiant damage equals 5 + your Wisdom modifier."
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
                source: "PHB",
                description: "Emulating the Hunter archetype means accepting your place as a bulwark between civilization and the terrors of the wilderness.",
                features: {
                    3: [{
                        name: "Hunter's Prey",
                        description: "You gain one of the following features of your choice: Colossus Slayer - Once per turn, when you hit a creature with a weapon attack, the creature takes an extra 1d8 damage if it's below its hit point maximum. Giant Killer - When a Large or larger creature within 5 feet of you hits or misses you with an attack, you can use your reaction to attack that creature. Horde Breaker - Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature within 5 feet of the original target."
                    }],
                    7: [{
                        name: "Defensive Tactics",
                        description: "You gain one of the following features of your choice: Escape the Horde - Opportunity attacks against you are made with disadvantage. Multiattack Defense - When a creature hits you with an attack, you gain a +4 bonus to AC against all subsequent attacks made by that creature for the rest of the turn. Steel Will - You have advantage on saving throws against being frightened."
                    }],
                    11: [{
                        name: "Multiattack",
                        description: "You gain one of the following features of your choice: Volley - You can use your action to make a ranged attack against any number of creatures within 10 feet of a point you can see within your weapon's range. You must have ammunition for each target. Whirlwind Attack - You can use your action to make a melee attack against any number of creatures within 5 feet of you, with a separate attack roll for each target."
                    }],
                    15: [{
                        name: "Superior Hunter's Defense",
                        description: "You gain one of the following features of your choice: Evasion - When you are subjected to an effect that allows a Dexterity saving throw to take half damage, you instead take no damage if you succeed, and half damage if you fail. Stand Against the Tide - When a hostile creature misses you with a melee attack, you can use your reaction to force that creature to repeat the same attack against another creature of your choice. Uncanny Dodge - When an attacker you can see hits you with an attack, you can use your reaction to halve the attack's damage."
                    }]
                }
            },
            beastMaster: {
                name: "Beast Master",
                source: "PHB",
                description: "The Beast Master archetype embodies a friendship between the civilized races and the beasts of the world. United in focus, beast and ranger work as one to fight the monstrous foes that threaten civilization and the wilderness alike.",
                features: {
                    3: [{
                        name: "Ranger's Companion",
                        description: "You gain a beast companion that accompanies you on your adventures and is trained to fight alongside you. Choose a beast that is no larger than Medium and has a challenge rating of 1/4 or lower. Add your proficiency bonus to the beast's AC, attack rolls, damage rolls, and saving throw and skill proficiencies. Its hit point maximum equals its normal maximum or four times your ranger level, whichever is higher. The beast obeys your commands and takes its turn on your initiative. On your turn, you can verbally command the beast where to move. You can use your action to command it to take the Attack, Dash, Disengage, Dodge, or Help action."
                    }],
                    7: [{
                        name: "Exceptional Training",
                        description: "On any of your turns when your beast companion doesn't attack, you can use a bonus action to command the beast to take the Dash, Disengage, Dodge, or Help action on its turn. In addition, the beast's attacks now count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
                    }],
                    11: [{
                        name: "Bestial Fury",
                        description: "Your beast companion can make two attacks when you command it to use the Attack action, or it can take the Multiattack action if it has that action."
                    }],
                    15: [{
                        name: "Share Spells",
                        description: "When you cast a spell targeting yourself, you can also affect your beast companion with the spell if the beast is within 30 feet of you."
                    }]
                }
            },
            gloomStalker: {
                name: "Gloom Stalker",
                source: "XGtE",
                description: "Gloom Stalkers are at home in the darkest places: deep under the earth, in gloomy alleyways, in primeval forests, and wherever else the light dims. Most folk enter such places with trepidation, but a Gloom Stalker ventures boldly into the darkness.",
                features: {
                    3: [
                        {
                            name: "Gloom Stalker Magic",
                            description: "You learn an additional spell when you reach certain levels in this class. The spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know. 3rd level: Disguise Self, 5th level: Rope Trick, 9th level: Fear, 13th level: Greater Invisibility, 17th level: Seeming."
                        },
                        {
                            name: "Dread Ambusher",
                            description: "You master the art of the ambush. You can give yourself a bonus to your initiative rolls equal to your Wisdom modifier. At the start of your first turn of each combat, your walking speed increases by 10 feet, which lasts until the end of that turn. If you take the Attack action on that turn, you can make one additional weapon attack as part of that action. If that attack hits, the target takes an extra 1d8 damage of the weapon's damage type."
                        },
                        {
                            name: "Umbral Sight",
                            description: "You gain darkvision out to a range of 60 feet. If you already have darkvision from your race, its range increases by 30 feet. You are also adept at evading creatures that rely on darkvision. While in darkness, you are invisible to any creature that relies on darkvision to see you in that darkness."
                        }
                    ],
                    7: [{
                        name: "Iron Mind",
                        description: "You have honed your ability to resist the mind-altering powers of your prey. You gain proficiency in Wisdom saving throws. If you already have this proficiency, you instead gain proficiency in Intelligence or Charisma saving throws (your choice)."
                    }],
                    11: [{
                        name: "Stalker's Flurry",
                        description: "You learn to attack with such unexpected speed that you can turn a miss into another strike. Once on each of your turns when you miss with a weapon attack, you can make another weapon attack as part of the same action."
                    }],
                    15: [{
                        name: "Shadowy Dodge",
                        description: "You can dodge in unforeseen ways, with wisps of supernatural shadow around you. Whenever a creature makes an attack roll against you and doesn't have advantage on the roll, you can use your reaction to impose disadvantage on it. You must use this feature before you know the outcome of the attack roll."
                    }]
                }
            },
            horizonWalker: {
                name: "Horizon Walker",
                source: "XGtE",
                description: "Horizon Walkers guard the world against threats that originate from other planes or that seek to ravage the mortal realm with otherworldly magic. They seek out planar portals and keep watch over them.",
                features: {
                    3: [
                        {
                            name: "Horizon Walker Magic",
                            description: "You learn an additional spell when you reach certain levels in this class. The spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know. 3rd level: Protection from Evil and Good, 5th level: Misty Step, 9th level: Haste, 13th level: Banishment, 17th level: Teleportation Circle."
                        },
                        {
                            name: "Detect Portal",
                            description: "You gain the ability to magically sense the presence of a planar portal. As an action, you detect the distance and direction to the closest planar portal within 1 mile of you. Once you use this feature, you can't use it again until you finish a short or long rest."
                        },
                        {
                            name: "Planar Warrior",
                            description: "You learn to draw on the energy of the multiverse to augment your attacks. As a bonus action, choose one creature you can see within 30 feet of you. The next time you hit that creature on this turn with a weapon attack, all damage dealt by the attack becomes force damage, and the creature takes an extra 1d8 force damage from the attack. When you reach 11th level in this class, the extra damage increases to 2d8."
                        }
                    ],
                    7: [{
                        name: "Ethereal Step",
                        description: "You learn to step through the Ethereal Plane. As a bonus action, you can cast the Etherealness spell with this feature, without expending a spell slot, but the spell ends at the end of the current turn. Once you use this feature, you can't use it again until you finish a short or long rest."
                    }],
                    11: [{
                        name: "Distant Strike",
                        description: "You gain the ability to pass between the planes in the blink of an eye. When you take the Attack action, you can teleport up to 10 feet before each attack to an unoccupied space you can see. If you attack at least two different creatures with the action, you can make one additional attack with it against a third creature."
                    }],
                    15: [{
                        name: "Spectral Defense",
                        description: "Your ability to move between planes enables you to slip through the planar boundaries to lessen the harm done to you during battle. When you take damage from an attack, you can use your reaction to give yourself resistance to all of that attack's damage on this turn."
                    }]
                }
            },
            monsterSlayer: {
                name: "Monster Slayer",
                source: "XGtE",
                description: "You have dedicated yourself to hunting down creatures of the night and wielders of grim magic. A Monster Slayer seeks out vampires, dragons, evil fey, fiends, and other magical threats.",
                features: {
                    3: [
                        {
                            name: "Monster Slayer Magic",
                            description: "You learn an additional spell when you reach certain levels in this class. The spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know. 3rd level: Protection from Evil and Good, 5th level: Zone of Truth, 9th level: Magic Circle, 13th level: Banishment, 17th level: Hold Monster."
                        },
                        {
                            name: "Hunter's Sense",
                            description: "You gain the ability to peer at a creature and magically discern how best to hurt it. As an action, choose one creature you can see within 60 feet of you. You immediately learn whether the creature has any damage immunities, resistances, or vulnerabilities and what they are. If the creature is hidden from divination magic, you sense that it has no immunities, resistances, or vulnerabilities. You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a long rest."
                        },
                        {
                            name: "Slayer's Prey",
                            description: "You can focus your ire on one foe, increasing the harm you inflict on it. As a bonus action, you designate one creature you can see within 60 feet of you as the target of this feature. The first time each turn that you hit that target with a weapon attack, it takes an extra 1d6 damage from the weapon. This benefit lasts until you finish a short or long rest. It ends early if you designate a different creature."
                        }
                    ],
                    7: [{
                        name: "Supernatural Defense",
                        description: "You gain extra resilience against your prey's assaults on your mind and body. Whenever the target of your Slayer's Prey forces you to make a saving throw and whenever you make an ability check to escape that target's grapple, add 1d6 to your roll."
                    }],
                    11: [{
                        name: "Magic-User's Nemesis",
                        description: "You gain the ability to thwart someone else's magic. When you see a creature casting a spell or teleporting within 60 feet of you, you can use your reaction to try to magically foil it. The creature must succeed on a Wisdom saving throw against your spell save DC, or its spell or teleport fails and is wasted. Once you use this feature, you can't use it again until you finish a short or long rest."
                    }],
                    15: [{
                        name: "Slayer's Counter",
                        description: "You gain the ability to counterattack when your prey tries to sabotage you. If the target of your Slayer's Prey forces you to make a saving throw, you can use your reaction to make one weapon attack against the quarry. You make this attack immediately before making the saving throw. If your attack hits, your save automatically succeeds, in addition to the attack's normal effects."
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
                source: "PHB",
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
                source: "PHB",
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
            },
            arcaneTrickster: {
                name: "Arcane Trickster",
                source: "PHB",
                description: "Some rogues enhance their fine-honed skills of stealth and agility with magic, learning tricks of enchantment and illusion. These rogues include pickpockets and burglars, but also pranksters, mischief-makers, and a significant number of adventurers.",
                features: {
                    3: [
                        {
                            name: "Spellcasting",
                            description: "You gain the ability to cast spells. You learn three cantrips: Mage Hand and two other cantrips of your choice from the wizard spell list. You learn three 1st-level wizard spells of your choice, two of which must be from the enchantment and illusion schools. Intelligence is your spellcasting ability for your wizard spells."
                        },
                        {
                            name: "Mage Hand Legerdemain",
                            description: "When you cast Mage Hand, you can make the spectral hand invisible, and you can perform the following additional tasks with it: stow or retrieve objects in containers, use thieves' tools to pick locks and disarm traps at range. You can also use the bonus action granted by your Cunning Action to control the hand."
                        }
                    ],
                    9: [{
                        name: "Magical Ambush",
                        description: "If you are hidden from a creature when you cast a spell on it, the creature has disadvantage on any saving throw it makes against the spell this turn."
                    }],
                    13: [{
                        name: "Versatile Trickster",
                        description: "You gain the ability to distract targets with your Mage Hand. As a bonus action on your turn, you can designate a creature within 5 feet of the spectral hand created by the spell. Doing so gives you advantage on attack rolls against that creature until the end of the turn."
                    }],
                    17: [{
                        name: "Spell Thief",
                        description: "You gain the ability to magically steal the knowledge of how to cast a spell from another spellcaster. Immediately after a creature casts a spell that targets you or includes you in its area of effect, you can use your reaction to force the creature to make a saving throw with its spellcasting ability modifier. On a failed save, you negate the spell's effect against you, and you steal the knowledge of the spell if it is at least 1st level and of a level you can cast. For the next 8 hours, you know the spell and can cast it using your spell slots. The creature can't cast that spell until the 8 hours have passed. Once you use this feature, you can't use it again until you finish a long rest."
                    }]
                }
            },
            inquisitive: {
                name: "Inquisitive",
                source: "XGtE",
                description: "As an archetypal Inquisitive, you excel at rooting out secrets and unraveling mysteries. You rely on your sharp eye for detail, but also on your finely honed ability to read the words and deeds of other creatures to determine their true intent.",
                features: {
                    3: [
                        {
                            name: "Ear for Deceit",
                            description: "You develop a talent for picking out lies. Whenever you make a Wisdom (Insight) check to determine whether a creature is lying, treat a roll of 7 or lower on the d20 as an 8."
                        },
                        {
                            name: "Eye for Detail",
                            description: "You can use a bonus action to make a Wisdom (Perception) check to spot a hidden creature or object or to make an Intelligence (Investigation) check to uncover or decipher clues."
                        },
                        {
                            name: "Insightful Fighting",
                            description: "You gain the ability to decipher an opponent's tactics and develop a counter to them. As a bonus action, you can make a Wisdom (Insight) check against a creature you can see that isn't incapacitated, contested by the target's Charisma (Deception) check. If you succeed, you can use your Sneak Attack against that target even if you don't have advantage on the attack roll, but not if you have disadvantage on it. This benefit lasts for 1 minute or until you successfully use this feature against a different target."
                        }
                    ],
                    9: [{
                        name: "Steady Eye",
                        description: "You have advantage on any Wisdom (Perception) or Intelligence (Investigation) check if you move no more than half your speed on the same turn."
                    }],
                    13: [{
                        name: "Unerring Eye",
                        description: "Your senses are almost impossible to foil. As an action, you sense the presence of illusions, shapechangers not in their original form, and other magic designed to deceive the senses within 30 feet of you, provided you aren't blinded or deafened. You sense that an effect is attempting to trick you, but you gain no insight into what is hidden or into its true nature. You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a long rest."
                    }],
                    17: [{
                        name: "Eye for Weakness",
                        description: "You learn to exploit a creature's weaknesses by carefully studying its tactics and movement. While your Insightful Fighting feature applies to a creature, your Sneak Attack damage against that creature increases by 3d6."
                    }]
                }
            },
            mastermind: {
                name: "Mastermind",
                source: "XGtE",
                description: "Your focus is on people and on the influence and secrets they have. Many spies, courtiers, and schemers follow this archetype, leading lives of intrigue. Words are your weapons as often as knives or poison, and secrets and favors are some of your favorite treasures.",
                features: {
                    3: [
                        {
                            name: "Master of Intrigue",
                            description: "You gain proficiency with the disguise kit, the forgery kit, and one gaming set of your choice. You also learn two languages of your choice. Additionally, you can unerringly mimic the speech patterns and accent of a creature that you hear speak for at least 1 minute, enabling you to pass yourself off as a native speaker of a particular land, provided that you know the language."
                        },
                        {
                            name: "Master of Tactics",
                            description: "You can use the Help action as a bonus action. Additionally, when you use the Help action to aid an ally in attacking a creature, the target of that attack can be within 30 feet of you, rather than within 5 feet of you, if the target can see or hear you."
                        }
                    ],
                    9: [{
                        name: "Insightful Manipulator",
                        description: "If you spend at least 1 minute observing or interacting with another creature outside combat, you can learn certain information about its capabilities compared to your own. The DM tells you if the creature is your equal, superior, or inferior in regard to two of the following characteristics of your choice: Intelligence score, Wisdom score, Charisma score, or class levels (if any)."
                    }],
                    13: [{
                        name: "Misdirection",
                        description: "You can sometimes cause another creature to suffer an attack meant for you. When you are targeted by an attack while a creature within 5 feet of you is granting you cover against that attack, you can use your reaction to have the attack target that creature instead of you."
                    }],
                    17: [{
                        name: "Soul of Deceit",
                        description: "Your thoughts can't be read by telepathy or other means, unless you allow it. You can present false thoughts by succeeding on a Charisma (Deception) check contested by the mind reader's Wisdom (Insight) check. Additionally, no matter what you say, magic that would determine if you are telling the truth indicates you are being truthful if you so choose, and you can't be compelled to tell the truth by magic."
                    }]
                }
            },
            scout: {
                name: "Scout",
                source: "XGtE",
                description: "You are skilled in stealth and surviving far from the streets of a city, allowing you to scout ahead of your companions during expeditions. Rogues who embrace this archetype are at home in the wilderness and among barbarians and rangers.",
                features: {
                    3: [
                        {
                            name: "Skirmisher",
                            description: "You are difficult to pin down during a fight. You can move up to half your speed as a reaction when an enemy ends its turn within 5 feet of you. This movement doesn't provoke opportunity attacks."
                        },
                        {
                            name: "Survivalist",
                            description: "You gain proficiency in the Nature and Survival skills if you don't already have it. Your proficiency bonus is doubled for any ability check you make that uses either of those proficiencies."
                        }
                    ],
                    9: [{
                        name: "Superior Mobility",
                        description: "Your walking speed increases by 10 feet. If you have a climbing or swimming speed, this increase applies to that speed as well."
                    }],
                    13: [{
                        name: "Ambush Master",
                        description: "You excel at leading ambushes and acting first in a fight. You have advantage on initiative rolls. In addition, the first creature you hit during the first round of a combat becomes easier for you and others to strike; attack rolls against that target have advantage until the start of your next turn."
                    }],
                    17: [{
                        name: "Sudden Strike",
                        description: "You can strike with deadly speed. If you take the Attack action on your turn, you can make one additional attack as a bonus action. This attack can benefit from your Sneak Attack even if you have already used it this turn, but you can't use your Sneak Attack against the same target more than once in a turn."
                    }]
                }
            },
            swashbuckler: {
                name: "Swashbuckler",
                source: "XGtE",
                description: "You focus your training on the art of the blade, relying on speed, elegance, and charm in equal parts. While some warriors are brutes clad in heavy armor, your method of fighting looks almost like a performance.",
                features: {
                    3: [
                        {
                            name: "Fancy Footwork",
                            description: "During your turn, if you make a melee attack against a creature, that creature can't make opportunity attacks against you for the rest of your turn."
                        },
                        {
                            name: "Rakish Audacity",
                            description: "Your confidence propels you into battle. You can give yourself a bonus to your initiative rolls equal to your Charisma modifier. You also gain an additional way to use your Sneak Attack; you don't need advantage on the attack roll to use your Sneak Attack against a creature if you are within 5 feet of it, no other creatures are within 5 feet of you, and you don't have disadvantage on the attack roll."
                        }
                    ],
                    9: [{
                        name: "Panache",
                        description: "Your charm becomes extraordinarily beguiling. As an action, you can make a Charisma (Persuasion) check contested by a creature's Wisdom (Insight) check. The creature must be able to hear you, and the two of you must share a language. If you succeed and the creature is hostile to you, it has disadvantage on attack rolls against targets other than you and can't make opportunity attacks against targets other than you. This effect lasts for 1 minute, until one of your companions attacks the target or affects it with a spell, or until you and the target are more than 60 feet apart. If you succeed and the creature isn't hostile to you, it is charmed by you for 1 minute. While charmed, it regards you as a friendly acquaintance."
                    }],
                    13: [{
                        name: "Elegant Maneuver",
                        description: "You can use a bonus action on your turn to gain advantage on the next Dexterity (Acrobatics) or Strength (Athletics) check you make during the same turn."
                    }],
                    17: [{
                        name: "Master Duelist",
                        description: "Your mastery of the blade lets you turn failure into success in combat. If you miss with an attack roll, you can roll it again with advantage. Once you do so, you can't use this feature again until you finish a short or long rest."
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
                source: "PHB",
                description: "Your innate magic comes from draconic magic that was mingled with your blood or that of your ancestors. Most often, sorcerers with this origin trace their descent back to a mighty sorcerer of ancient times who made a bargain with a dragon or who might even have claimed a dragon parent.",
                features: {
                    1: [
                        {
                            name: "Dragon Ancestor",
                            description: "You choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later. You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."
                        },
                        {
                            name: "Draconic Resilience",
                            description: "As magic flows through your body, it causes physical traits of your dragon ancestors to emerge. Your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, parts of your skin are covered by a thin sheen of dragon-like scales. When you aren't wearing armor, your AC equals 13 + your Dexterity modifier."
                        }
                    ],
                    6: [{
                        name: "Elemental Affinity",
                        description: "When you cast a spell that deals damage of the type associated with your draconic ancestry, you can add your Charisma modifier to one damage roll of that spell. At the same time, you can spend 1 sorcery point to gain resistance to that damage type for 1 hour."
                    }],
                    14: [{
                        name: "Dragon Wings",
                        description: "You gain the ability to sprout a pair of dragon wings from your back, gaining a flying speed equal to your current speed. You can create these wings as a bonus action on your turn. They last until you dismiss them as a bonus action on your turn. You can't manifest your wings while wearing armor unless the armor is made to accommodate them, and clothing not made to accommodate your wings might be destroyed when you manifest them."
                    }],
                    18: [{
                        name: "Draconic Presence",
                        description: "You can channel the dread presence of your dragon ancestor, causing those around you to become awestruck or frightened. As an action, you can spend 5 sorcery points to draw on this power and exude an aura of awe or fear (your choice) to a distance of 60 feet. For 1 minute or until you lose your concentration, each hostile creature that starts its turn in this aura must succeed on a Wisdom saving throw or be charmed (if you chose awe) or frightened (if you chose fear) until the aura ends. A creature that succeeds on this saving throw is immune to your aura for 24 hours."
                    }]
                }
            },
            wildMagic: {
                name: "Wild Magic",
                source: "PHB",
                description: "Your innate magic comes from the wild forces of chaos that underlie the order of creation. You might have endured exposure to some form of raw magic, perhaps through a planar portal leading to Limbo, the Elemental Planes, or the mysterious Far Realm. Perhaps you were blessed by a powerful fey creature or marked by a demon.",
                features: {
                    1: [
                        {
                            name: "Wild Magic Surge",
                            description: "Your spellcasting can unleash surges of untamed magic. Once per turn, the DM can have you roll a d20 immediately after you cast a sorcerer spell of 1st level or higher. If you roll a 1, roll on the Wild Magic Surge table to create a magical effect. If that effect is a spell, it is too wild to be affected by your Metamagic, and if it normally requires concentration, it doesn't require concentration in this case; the spell lasts for its full duration."
                        },
                        {
                            name: "Tides of Chaos",
                            description: "You can manipulate the forces of chance and chaos to gain advantage on one attack roll, ability check, or saving throw. Once you do so, you must finish a long rest before you can use this feature again. Any time before you regain the use of this feature, the DM can have you roll on the Wild Magic Surge table immediately after you cast a sorcerer spell of 1st level or higher. You then regain the use of this feature."
                        }
                    ],
                    6: [{
                        name: "Bend Luck",
                        description: "You have the ability to twist fate using your wild magic. When another creature you can see makes an attack roll, an ability check, or a saving throw, you can use your reaction and spend 2 sorcery points to roll 1d4 and apply the number rolled as a bonus or penalty (your choice) to the creature's roll. You can do so after the creature rolls but before any effects of the roll occur."
                    }],
                    14: [{
                        name: "Controlled Chaos",
                        description: "You gain a modicum of control over the surges of your wild magic. Whenever you roll on the Wild Magic Surge table, you can roll twice and use either number."
                    }],
                    18: [{
                        name: "Spell Bombardment",
                        description: "The harmful energy of your spells intensifies. When you roll damage for a spell and roll the highest number possible on any of the dice, choose one of those dice, roll it again and add that roll to the damage. You can use the feature only once per turn."
                    }]
                }
            },
            divineSoul: {
                name: "Divine Soul",
                source: "XGtE",
                description: "Sometimes the spark of magic that fuels a sorcerer comes from a divine source that glimmers within the soul. Having such a blessed soul is a sign that your innate magic might come from a distant but powerful familial connection to a divine being. Whatever the source of your power, your magic is a divine gift.",
                features: {
                    1: [
                        {
                            name: "Divine Magic",
                            description: "Your link to the divine allows you to learn spells from the cleric class. When your Spellcasting feature lets you learn or replace a sorcerer cantrip or a sorcerer spell of 1st level or higher, you can choose the new spell from the cleric spell list or the sorcerer spell list. You must otherwise obey all the restrictions for selecting the spell, and it becomes a sorcerer spell for you. In addition, choose an affinity for the source of your divine power: good, evil, law, chaos, or neutrality. You learn an additional spell based on that affinity (Cure Wounds, Inflict Wounds, Bless, Bane, or Protection from Evil and Good respectively). It doesn't count against your number of sorcerer spells known."
                        },
                        {
                            name: "Favored by the Gods",
                            description: "Divine power guards your destiny. If you fail a saving throw or miss with an attack roll, you can roll 2d4 and add it to the total, possibly changing the outcome. Once you use this feature, you can't use it again until you finish a short or long rest."
                        }
                    ],
                    6: [{
                        name: "Empowered Healing",
                        description: "The divine energy coursing through you can empower healing spells. Whenever you or an ally within 5 feet of you rolls dice to determine the number of hit points a spell restores, you can spend 1 sorcery point to reroll any number of those dice once, provided you aren't incapacitated. You can use this feature only once per turn."
                    }],
                    14: [{
                        name: "Otherworldly Wings",
                        description: "You can use a bonus action to manifest a pair of spectral wings from your back. While the wings are present, you have a flying speed of 30 feet. The wings last until you're incapacitated, you die, or you dismiss them as a bonus action. The affinity you chose for your Divine Magic feature determines the appearance of the spectral wings: eagle wings for good or law, bat wings for evil or chaos, and dragonfly wings for neutrality."
                    }],
                    18: [{
                        name: "Unearthly Recovery",
                        description: "You gain the ability to overcome grievous injuries. As a bonus action when you have fewer than half of your hit points remaining, you can regain a number of hit points equal to half your hit point maximum. Once you use this feature, you can't use it again until you finish a long rest."
                    }]
                }
            },
            shadowMagic: {
                name: "Shadow Magic",
                source: "XGtE",
                description: "You are a creature of shadow, for your innate magic comes from the Shadowfell itself. You might trace your lineage to an entity from that place, or perhaps you were exposed to its fell energy and transformed by it. The power of shadow magic casts a strange pall over your physical presence.",
                features: {
                    1: [
                        {
                            name: "Eyes of the Dark",
                            description: "You have darkvision with a range of 120 feet. When you reach 3rd level in this class, you learn the Darkness spell, which doesn't count against your number of sorcerer spells known. In addition, you can cast it by spending 2 sorcery points or by expending a spell slot. If you cast it with sorcery points, you can see through the darkness created by the spell."
                        },
                        {
                            name: "Strength of the Grave",
                            description: "Your existence in a twilight state between life and death makes you difficult to defeat. When damage reduces you to 0 hit points, you can make a Charisma saving throw (DC 5 + the damage taken). On a success, you instead drop to 1 hit point. You can't use this feature if you are reduced to 0 hit points by radiant damage or by a critical hit. After the saving throw succeeds, you can't use this feature again until you finish a long rest."
                        }
                    ],
                    6: [{
                        name: "Hound of Ill Omen",
                        description: "You gain the ability to call forth a howling creature of darkness to harass your foes. As a bonus action, you can spend 3 sorcery points to magically summon a hound of ill omen to target one creature you can see within 120 feet of you. The hound uses the dire wolf's statistics with the following changes: it is Medium, it has temporary hit points equal to half your sorcerer level, it can move through other creatures and objects as if they were difficult terrain (taking 5 force damage if it ends its turn inside an object), and at the start of its turn it automatically knows the target's location. The hound appears in an unoccupied space of your choice within 30 feet of the target. While the hound is within 5 feet of the target, the target has disadvantage on saving throws against any spell you cast. The hound disappears if it is reduced to 0 hit points, if its target is reduced to 0 hit points, or after 5 minutes."
                    }],
                    14: [{
                        name: "Shadow Walk",
                        description: "You gain the ability to step from one shadow into another. When you are in dim light or darkness, as a bonus action, you can magically teleport up to 120 feet to an unoccupied space you can see that is also in dim light or darkness."
                    }],
                    18: [{
                        name: "Umbral Form",
                        description: "You can spend 6 sorcery points as a bonus action to magically transform yourself into a shadowy form. In this form, you have resistance to all damage except force and radiant damage, and you can move through other creatures and objects as if they were difficult terrain. You take 5 force damage if you end your turn inside an object. You remain in this form for 1 minute. It ends early if you are incapacitated, if you die, or if you dismiss it as a bonus action."
                    }]
                }
            },
            stormSorcery: {
                name: "Storm Sorcery",
                source: "XGtE",
                description: "Your innate magic comes from the power of elemental air. Many with this power can trace their magic back to a near-death experience caused by the Great Rain, but perhaps you were born during a howling gale so powerful that folk still tell stories of it, or your lineage includes the influence of potent air creatures such as djinn.",
                features: {
                    1: [
                        {
                            name: "Wind Speaker",
                            description: "The arcane magic you command is infused with elemental air. You can speak, read, and write Primordial. Knowing Primordial allows you to understand and be understood by those who speak its dialects: Aquan, Auran, Ignan, and Terran."
                        },
                        {
                            name: "Tempestuous Magic",
                            description: "You can use a bonus action on your turn to cause whirling gusts of elemental air to briefly surround you, immediately before or after you cast a spell of 1st level or higher. Doing so allows you to fly up to 10 feet without provoking opportunity attacks."
                        }
                    ],
                    6: [
                        {
                            name: "Heart of the Storm",
                            description: "You gain resistance to lightning and thunder damage. In addition, whenever you start casting a spell of 1st level or higher that deals lightning or thunder damage, stormy magic erupts from you. This eruption causes creatures of your choice that you can see within 10 feet of you to take lightning or thunder damage (choose each time this ability activates) equal to half your sorcerer level."
                        },
                        {
                            name: "Storm Guide",
                            description: "You gain the ability to subtly control the weather around you. If it is raining, you can use an action to cause the rain to stop falling in a 20-foot-radius sphere centered on you. You can end this effect as a bonus action. If it is windy, you can use a bonus action each round to choose the direction that the wind blows in a 100-foot-radius sphere centered on you. The wind blows in that direction until the end of your next turn. This feature doesn't alter the speed of the wind."
                        }
                    ],
                    14: [{
                        name: "Storm's Fury",
                        description: "When you are hit by a melee attack, you can use your reaction to deal lightning damage to the attacker. The damage equals your sorcerer level. The attacker must also make a Strength saving throw against your sorcerer spell save DC. On a failed save, the attacker is pushed in a straight line up to 20 feet away from you."
                    }],
                    18: [{
                        name: "Wind Soul",
                        description: "You gain immunity to lightning and thunder damage. You also gain a magical flying speed of 60 feet. As an action, you can reduce your flying speed to 30 feet for 1 hour and choose a number of creatures within 30 feet of you equal to 3 + your Charisma modifier. The chosen creatures gain a magical flying speed of 30 feet for 1 hour. Once you reduce your flying speed in this way, you can't do so again until you finish a short or long rest."
                    }]
                }
            },
            aberrantMind: {
                name: "Aberrant Mind",
                source: "TCoE",
                description: "An alien influence has wrapped its tendrils around your mind, giving you psionic power. You now touch other minds with that power and alter the world around you by using it to control the magical energy of the multiverse. Will this power shine from you as a hopeful beacon to others? Or will you be a source of terror to those who feel the stab of your mind and witness the unnatural manifestations of your might?",
                features: {
                    1: [
                        {
                            name: "Psionic Spells",
                            description: "You learn additional spells when you reach certain levels in this class. These spells count as sorcerer spells for you, but they don't count against the number of sorcerer spells you know. You can replace one of these spells when you gain a sorcerer level."
                        },
                        {
                            name: "Telepathic Speech",
                            description: "You can form a telepathic connection between your mind and the mind of another. As a bonus action, choose one creature you can see within 30 feet of you. You and the chosen creature can speak telepathically with each other while the two of you are within a number of miles of each other equal to your Charisma modifier (minimum of 1 mile). The telepathic connection lasts for a number of minutes equal to your sorcerer level."
                        }
                    ],
                    6: [{
                        name: "Psionic Sorcery",
                        description: "When you cast any spell of 1st level or higher from your Psionic Spells feature, you can cast it by expending a spell slot as normal or by spending a number of sorcery points equal to the spell's level. If you cast the spell using sorcery points, it requires no verbal or somatic components, and it requires no material components, unless they are consumed by the spell."
                    }],
                    14: [{
                        name: "Revelation in Flesh",
                        description: "You can unleash the aberrant truth hidden within yourself. As a bonus action, you can spend 1 or more sorcery points to magically transform your body for 10 minutes. For each sorcery point you spend, you can gain one of several benefits: see invisible creatures, gain a swimming speed and water breathing, become slimy and gain a climbing speed, or become gelatinous and squeeze through small spaces."
                    }],
                    18: [{
                        name: "Warping Implosion",
                        description: "You can unleash your aberrant power as a space-warping anomaly. As an action, you can teleport to an unoccupied space you can see within 120 feet of you. Immediately after you disappear, each creature within 30 feet of the space you left must make a Strength saving throw. On a failed save, a creature takes 3d10 force damage and is pulled straight toward the space you left, ending in an unoccupied space as close to your former space as possible. On a successful save, the creature takes half as much damage and isn't pulled."
                    }]
                }
            },
            clockworkSoul: {
                name: "Clockwork Soul",
                source: "TCoE",
                description: "The cosmic force of order has suffused you with magic. That power arises from Mechanus or a realm like it—a plane of existence shaped entirely by clockwork efficiency. You, or someone from your lineage, might have become combated in the gears of Mechanus or perhaps your innate magic stems from exposure to a modron.",
                features: {
                    1: [
                        {
                            name: "Clockwork Magic",
                            description: "You learn additional spells when you reach certain levels in this class. These spells count as sorcerer spells for you, but they don't count against the number of sorcerer spells you know. You can replace one of these spells when you gain a sorcerer level."
                        },
                        {
                            name: "Restore Balance",
                            description: "Your connection to the plane of absolute order allows you to equalize chaotic moments. When a creature you can see within 60 feet of you is about to roll a d20 with advantage or disadvantage, you can use your reaction to prevent the roll from being affected by advantage and disadvantage. You can use this feature a number of times equal to your proficiency bonus."
                        }
                    ],
                    6: [{
                        name: "Bastion of Law",
                        description: "You can tap into the grand equation of existence to imbue a creature with a shimmering shield of order. As an action, you can expend 1 to 5 sorcery points to create a magical ward around yourself or another creature you can see within 30 feet of you. The ward lasts until you finish a long rest or until you use this feature again. The ward is represented by a number of d8s equal to the number of sorcery points spent to create it. When the warded creature takes damage, it can expend a number of those dice, roll them, and reduce the damage taken by the total rolled on those dice."
                    }],
                    14: [{
                        name: "Trance of Order",
                        description: "You gain the ability to align your consciousness to the endless calculations of Mechanus. As a bonus action, you can enter this state for 1 minute. For the duration, attack rolls against you can't benefit from advantage, and whenever you make an attack roll, an ability check, or a saving throw, you can treat a roll of 9 or lower on the d20 as a 10."
                    }],
                    18: [{
                        name: "Clockwork Cavalcade",
                        description: "You summon spirits of order to expunge disorder around you. As an action, you summon the spirits in a 30-foot cube originating from you. The spirits look like modrons or other constructs of your choice. The spirits are intangible and invulnerable, and they create the following effects within the cube before vanishing: restore up to 100 hit points split among creatures of your choice, repair damaged objects entirely, and end every spell of 6th level or lower on creatures and objects of your choice."
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
            archfey: {
                name: "The Archfey",
                source: "PHB",
                description: "Your patron is a lord or lady of the fey, a creature of legend who holds secrets that were forgotten before the mortal races were born. This being's motivations are often inscrutable, and sometimes whimsical, and might involve a striving for greater magical power or the settling of age-old grudges.",
                features: {
                    1: [{
                        name: "Fey Presence",
                        description: "Your patron bestows upon you the ability to project the beguiling and fearsome presence of the fey. As an action, you can cause each creature in a 10-foot cube originating from you to make a Wisdom saving throw against your warlock spell save DC. The creatures that fail their saving throws are all charmed or frightened by you (your choice) until the end of your next turn. Once you use this feature, you can't use it again until you finish a short or long rest."
                    }],
                    6: [{
                        name: "Misty Escape",
                        description: "You can vanish in a puff of mist in response to harm. When you take damage, you can use your reaction to turn invisible and teleport up to 60 feet to an unoccupied space you can see. You remain invisible until the start of your next turn or until you attack or cast a spell. Once you use this feature, you can't use it again until you finish a short or long rest."
                    }],
                    10: [{
                        name: "Beguiling Defenses",
                        description: "Your patron teaches you how to turn the mind-affecting magic of your enemies against them. You are immune to being charmed, and when another creature attempts to charm you, you can use your reaction to attempt to turn the charm back on that creature. The creature must succeed on a Wisdom saving throw against your warlock spell save DC or be charmed by you for 1 minute or until the creature takes any damage."
                    }],
                    14: [{
                        name: "Dark Delirium",
                        description: "You can plunge a creature into an illusory realm. As an action, choose a creature that you can see within 60 feet of you. It must make a Wisdom saving throw against your warlock spell save DC. On a failed save, it is charmed or frightened by you (your choice) for 1 minute or until your concentration is broken (as if you are concentrating on a spell). This effect ends early if the creature takes any damage. Until this illusion ends, the creature thinks it is lost in a misty realm, the appearance of which you choose. The creature can see and hear only itself, you, and the illusion. You must finish a short or long rest before you can use this feature again."
                    }]
                }
            },
            fiend: {
                name: "The Fiend",
                source: "PHB",
                description: "You have made a pact with a fiend from the lower planes of existence, a being whose aims are evil, even if you strive against those aims. Such beings desire the corruption or destruction of all things, ultimately including you. Fiends powerful enough to forge a pact include demon lords, archdevils, pit fiends, and balors.",
                features: {
                    1: [{
                        name: "Dark One's Blessing",
                        description: "Starting at 1st level, when you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level (minimum of 1)."
                    }],
                    6: [{
                        name: "Dark One's Own Luck",
                        description: "Starting at 6th level, you can call on your patron to alter fate in your favor. When you make an ability check or a saving throw, you can use this feature to add a d10 to your roll. You can do so after seeing the initial roll but before any of the roll's effects occur. Once you use this feature, you can't use it again until you finish a short or long rest."
                    }],
                    10: [{
                        name: "Fiendish Resilience",
                        description: "Starting at 10th level, you can choose one damage type when you finish a short or long rest. You gain resistance to that damage type until you choose a different one with this feature. Damage from magical weapons or silver weapons ignores this resistance."
                    }],
                    14: [{
                        name: "Hurl Through Hell",
                        description: "Starting at 14th level, when you hit a creature with an attack, you can use this feature to instantly transport the target through the lower planes. The creature disappears and hurtles through a nightmare landscape. At the end of your next turn, the target returns to the space it previously occupied, or the nearest unoccupied space. If the target is not a fiend, it takes 10d10 psychic damage as it reels from its horrific experience. Once you use this feature, you can't use it again until you finish a long rest."
                    }]
                }
            },
            greatOldOne: {
                name: "The Great Old One",
                source: "PHB",
                description: "Your patron is a mysterious entity whose nature is utterly foreign to the fabric of reality. It might come from the Far Realm, the space beyond reality, or it could be one of the elder gods known only in legends. Its motives are incomprehensible to mortals, and its knowledge so immense and ancient that even the greatest libraries pale in comparison.",
                features: {
                    1: [{
                        name: "Awakened Mind",
                        description: "Starting at 1st level, your alien knowledge gives you the ability to touch the minds of other creatures. You can telepathically speak to any creature you can see within 30 feet of you. You don't need to share a language with the creature for it to understand your telepathic utterances, but the creature must be able to understand at least one language."
                    }],
                    6: [{
                        name: "Entropic Ward",
                        description: "At 6th level, you learn to magically ward yourself against attack and to turn an enemy's failed strike into good luck for yourself. When a creature makes an attack roll against you, you can use your reaction to impose disadvantage on that roll. If the attack misses you, your next attack roll against the creature has advantage if you make it before the end of your next turn. Once you use this feature, you can't use it again until you finish a short or long rest."
                    }],
                    10: [{
                        name: "Thought Shield",
                        description: "Starting at 10th level, your thoughts can't be read by telepathy or other means unless you allow it. You also have resistance to psychic damage, and whenever a creature deals psychic damage to you, that creature takes the same amount of damage that you do."
                    }],
                    14: [{
                        name: "Create Thrall",
                        description: "At 14th level, you gain the ability to infect a humanoid's mind with the alien magic of your patron. You can use your action to touch an incapacitated humanoid. That creature is then charmed by you until a Remove Curse spell is cast on it, the charmed condition is removed from it, or you use this feature again. You can communicate telepathically with the charmed creature as long as the two of you are on the same plane of existence."
                    }]
                }
            },
            celestial: {
                name: "The Celestial",
                source: "XGtE",
                description: "Your patron is a powerful being of the Upper Planes. You have bound yourself to an ancient empyrean, solar, ki-rin, unicorn, or other entity that resides in the planes of everlasting bliss. Your pact with that being allows you to experience the barest touch of the holy light that illuminates the multiverse.",
                features: {
                    1: [
                        {
                            name: "Bonus Cantrips",
                            description: "At 1st level, you learn the Light and Sacred Flame cantrips. They count as warlock cantrips for you, but they don't count against your number of cantrips known."
                        },
                        {
                            name: "Healing Light",
                            description: "At 1st level, you gain the ability to channel celestial energy to heal wounds. You have a pool of d6s that you spend to fuel this healing. The number of dice in the pool equals 1 + your warlock level. As a bonus action, you can heal one creature you can see within 60 feet of you, spending dice from the pool. The maximum number of dice you can spend at once equals your Charisma modifier (minimum of one die). Roll the dice you spend, add them together, and restore a number of hit points equal to the total. Your pool regains all expended dice when you finish a long rest."
                        }
                    ],
                    6: [{
                        name: "Radiant Soul",
                        description: "Starting at 6th level, your link to the Celestial allows you to serve as a conduit for radiant energy. You have resistance to radiant damage, and when you cast a spell that deals radiant or fire damage, you can add your Charisma modifier to one radiant or fire damage roll of that spell against one of its targets."
                    }],
                    10: [{
                        name: "Celestial Resilience",
                        description: "Starting at 10th level, you gain temporary hit points whenever you finish a short or long rest. These temporary hit points equal your warlock level + your Charisma modifier. Additionally, choose up to five creatures you can see at the end of the rest. Those creatures each gain temporary hit points equal to half your warlock level + your Charisma modifier."
                    }],
                    14: [{
                        name: "Searing Vengeance",
                        description: "Starting at 14th level, the radiant energy you channel allows you to resist death. When you have to make a death saving throw at the start of your turn, you can instead spring back to your feet with a burst of radiant energy. You regain hit points equal to half your hit point maximum, and then you stand up if you so choose. Each creature of your choice that is within 30 feet of you takes radiant damage equal to 2d8 + your Charisma modifier, and it is blinded until the end of the current turn. Once you use this feature, you can't use it again until you finish a long rest."
                    }]
                }
            },
            hexblade: {
                name: "The Hexblade",
                source: "XGtE",
                description: "You have made your pact with a mysterious entity from the Shadowfell - a force that manifests in sentient magic weapons carved from the stuff of shadow. The mighty sword Blackrazor is the most notable of these weapons, which have been spread across the multiverse over the ages. The shadowy force behind these weapons can offer power to warlocks who form pacts with it.",
                features: {
                    1: [
                        {
                            name: "Hexblade's Curse",
                            description: "Starting at 1st level, you gain the ability to place a baleful curse on someone. As a bonus action, choose one creature you can see within 30 feet of you. The target is cursed for 1 minute. The curse ends early if the target dies, you die, or you are incapacitated. Until the curse ends, you gain the following benefits: You gain a bonus to damage rolls against the cursed target. The bonus equals your proficiency bonus. Any attack roll you make against the cursed target is a critical hit on a roll of 19 or 20 on the d20. If the cursed target dies, you regain hit points equal to your warlock level + your Charisma modifier (minimum of 1 hit point). You can't use this feature again until you finish a short or long rest."
                        },
                        {
                            name: "Hex Warrior",
                            description: "At 1st level, you acquire the training necessary to effectively arm yourself for battle. You gain proficiency with medium armor, shields, and martial weapons. When you attack with a weapon, you can use your Charisma modifier, instead of Strength or Dexterity, for the attack and damage rolls. You must be wielding a weapon with which you have proficiency. This benefit extends to every weapon you are proficient with, not just one. If you later gain the Pact of the Blade feature, this benefit extends to every pact weapon you conjure with that feature, no matter the weapon's type."
                        }
                    ],
                    6: [{
                        name: "Accursed Specter",
                        description: "Starting at 6th level, you can curse the soul of a person you slay, temporarily binding it to your service. When you slay a humanoid, you can cause its spirit to rise from its corpse as a specter, the statistics for which are in the Monster Manual. When the specter appears, it gains temporary hit points equal to half your warlock level. Roll initiative for the specter, which has its own turns. It obeys your verbal commands, and it gains a special bonus to its attack rolls equal to your Charisma modifier (minimum of +0). The specter remains in your service until the end of your next long rest, at which point it vanishes to the afterlife. Once you bind a specter with this feature, you can't use the feature again until you finish a long rest."
                    }],
                    10: [{
                        name: "Armor of Hexes",
                        description: "At 10th level, your hex grows more powerful. If the target cursed by your Hexblade's Curse hits you with an attack roll, you can use your reaction to roll a d6. On a 4 or higher, the attack instead misses you, regardless of its roll."
                    }],
                    14: [{
                        name: "Master of Hexes",
                        description: "Starting at 14th level, you can spread your Hexblade's Curse from a slain creature to another creature. When the creature cursed by your Hexblade's Curse dies, you can apply the curse to a different creature you can see within 30 feet of you, provided you aren't incapacitated. When you apply the curse in this way, you don't regain hit points from the death of the previously cursed creature."
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
            abjuration: {
                name: "School of Abjuration",
                source: "PHB",
                description: "The School of Abjuration emphasizes magic that blocks, banishes, or protects. Detractors of this school say that its tradition is about denial, negation rather than positive assertion. You understand, however, that ending harmful effects, protecting the weak, and banishing evil influences is anything but a philosophical void.",
                features: {
                    2: [
                        {
                            name: "Abjuration Savant",
                            description: "Beginning when you select this school at 2nd level, the gold and time you must spend to copy an abjuration spell into your spellbook is halved."
                        },
                        {
                            name: "Arcane Ward",
                            description: "Starting at 2nd level, you can weave magic around yourself for protection. When you cast an abjuration spell of 1st level or higher, you can simultaneously use a strand of the spell's magic to create a magical ward on yourself that lasts until you finish a long rest. The ward has hit points equal to twice your wizard level + your Intelligence modifier. Whenever you take damage, the ward takes the damage instead. If this damage reduces the ward to 0 hit points, you take any remaining damage. While the ward has 0 hit points, it can't absorb damage, but its magic remains. Whenever you cast an abjuration spell of 1st level or higher, the ward regains a number of hit points equal to twice the level of the spell. Once you create the ward, you can't create it again until you finish a long rest."
                        }
                    ],
                    6: [{
                        name: "Projected Ward",
                        description: "Starting at 6th level, when a creature that you can see within 30 feet of you takes damage, you can use your reaction to cause your Arcane Ward to absorb that damage. If this damage reduces the ward to 0 hit points, the warded creature takes any remaining damage."
                    }],
                    10: [{
                        name: "Improved Abjuration",
                        description: "Beginning at 10th level, when you cast an abjuration spell that requires you to make an ability check as a part of casting that spell (as in Counterspell and Dispel Magic), you add your proficiency bonus to that ability check."
                    }],
                    14: [{
                        name: "Spell Resistance",
                        description: "Starting at 14th level, you have advantage on saving throws against spells. Furthermore, you have resistance against the damage of spells."
                    }]
                }
            },
            conjuration: {
                name: "School of Conjuration",
                source: "PHB",
                description: "As a conjurer, you favor spells that produce objects and creatures out of thin air. You can conjure billowing clouds of killing fog or summon creatures from elsewhere to fight on your behalf. As your mastery grows, you learn spells of transportation and can teleport yourself across vast distances.",
                features: {
                    2: [
                        {
                            name: "Conjuration Savant",
                            description: "Beginning when you select this school at 2nd level, the gold and time you must spend to copy a conjuration spell into your spellbook is halved."
                        },
                        {
                            name: "Minor Conjuration",
                            description: "Starting at 2nd level when you select this school, you can use your action to conjure up an inanimate object in your hand or on the ground in an unoccupied space that you can see within 10 feet of you. This object can be no larger than 3 feet on a side and weigh no more than 10 pounds, and its form must be that of a nonmagical object that you have seen. The object is visibly magical, radiating dim light out to 5 feet. The object disappears after 1 hour, when you use this feature again, or if it takes or deals any damage."
                        }
                    ],
                    6: [{
                        name: "Benign Transposition",
                        description: "Starting at 6th level, you can use your action to teleport up to 30 feet to an unoccupied space that you can see. Alternatively, you can choose a space within range that is occupied by a Small or Medium creature. If that creature is willing, you both teleport, swapping places. Once you use this feature, you can't use it again until you finish a long rest or you cast a conjuration spell of 1st level or higher."
                    }],
                    10: [{
                        name: "Focused Conjuration",
                        description: "Beginning at 10th level, while you are concentrating on a conjuration spell, your concentration can't be broken as a result of taking damage."
                    }],
                    14: [{
                        name: "Durable Summons",
                        description: "Starting at 14th level, any creature that you summon or create with a conjuration spell has 30 temporary hit points."
                    }]
                }
            },
            divination: {
                name: "School of Divination",
                source: "PHB",
                description: "The counsel of a diviner is sought by royalty and commoners alike, for all seek a clearer understanding of the past, present, and future. As a diviner, you strive to part the veils of space, time, and consciousness so that you can see clearly.",
                features: {
                    2: [
                        {
                            name: "Divination Savant",
                            description: "Beginning when you select this school at 2nd level, the gold and time you must spend to copy a divination spell into your spellbook is halved."
                        },
                        {
                            name: "Portent",
                            description: "Starting at 2nd level when you choose this school, glimpses of the future begin to press in on your awareness. When you finish a long rest, roll two d20s and record the numbers rolled. You can replace any attack roll, saving throw, or ability check made by you or a creature that you can see with one of these foretelling rolls. You must choose to do so before the roll, and you can replace a roll in this way only once per turn. Each foretelling roll can be used only once. When you finish a long rest, you lose any unused foretelling rolls."
                        }
                    ],
                    6: [{
                        name: "Expert Divination",
                        description: "Beginning at 6th level, casting divination spells comes so easily to you that it expends only a fraction of your spellcasting efforts. When you cast a divination spell of 2nd level or higher using a spell slot, you regain one expended spell slot. The slot you regain must be of a level lower than the spell you cast and can't be higher than 5th level."
                    }],
                    10: [{
                        name: "The Third Eye",
                        description: "Starting at 10th level, you can use your action to increase your powers of perception. When you do so, choose one of the following benefits, which lasts until you are incapacitated or you take a short or long rest. You can't use the feature again until you finish a rest. Darkvision: You gain darkvision out to a range of 60 feet. Ethereal Sight: You can see into the Ethereal Plane within 60 feet of you. Greater Comprehension: You can read any language. See Invisibility: You can see invisible creatures and objects within 10 feet of you that are within line of sight."
                    }],
                    14: [{
                        name: "Greater Portent",
                        description: "Starting at 14th level, the visions in your dreams intensify and paint a more accurate picture in your mind of what is to come. You roll three d20s for your Portent feature, rather than two."
                    }]
                }
            },
            enchantment: {
                name: "School of Enchantment",
                source: "PHB",
                description: "As a member of the School of Enchantment, you have honed your ability to magically entrance and beguile other people and monsters. Some enchanters are peacemakers who bewitch the violent to lay down their arms and charm the cruel into showing mercy. Others are tyrants who magically bind the unwilling into their service.",
                features: {
                    2: [
                        {
                            name: "Enchantment Savant",
                            description: "Beginning when you select this school at 2nd level, the gold and time you must spend to copy an enchantment spell into your spellbook is halved."
                        },
                        {
                            name: "Hypnotic Gaze",
                            description: "Starting at 2nd level when you choose this school, your soft words and enchanting gaze can magically enthrall another creature. As an action, choose one creature that you can see within 5 feet of you. If the target can see or hear you, it must succeed on a Wisdom saving throw against your wizard spell save DC or be charmed by you until the end of your next turn. The charmed creature's speed drops to 0, and the creature is incapacitated and visibly dazed. On subsequent turns, you can use your action to maintain this effect, extending its duration until the end of your next turn. However, the effect ends if you move more than 5 feet away from the creature, if the creature can neither see nor hear you, or if the creature takes damage. Once the effect ends, or if the creature succeeds on its initial saving throw against this effect, you can't use this feature on that creature again until you finish a long rest."
                        }
                    ],
                    6: [{
                        name: "Instinctive Charm",
                        description: "Beginning at 6th level, when a creature you can see within 30 feet of you makes an attack roll against you, you can use your reaction to divert the attack, provided that another creature is within the attack's range. The attacker must make a Wisdom saving throw against your wizard spell save DC. On a failed save, the attacker must target the creature that is closest to it, not including you or itself. If multiple creatures are closest, the attacker chooses which one to target. On a successful save, you can't use this feature on the attacker again until you finish a long rest. You must choose to use this feature before knowing whether the attack hits or misses. Creatures that can't be charmed are immune to this effect."
                    }],
                    10: [{
                        name: "Split Enchantment",
                        description: "Starting at 10th level, when you cast an enchantment spell of 1st level or higher that targets only one creature, you can have it target a second creature."
                    }],
                    14: [{
                        name: "Alter Memories",
                        description: "At 14th level, you gain the ability to make a creature unaware of your magical influence on it. When you cast an enchantment spell to charm one or more creatures, you can alter one creature's understanding so that it remains unaware of being charmed. Additionally, once before the spell expires, you can use your action to try to make the chosen creature forget some of the time it spent charmed. The creature must succeed on an Intelligence saving throw against your wizard spell save DC or lose a number of hours of its memories equal to 1 + your Charisma modifier (minimum 1). You can make the creature forget less time, and the amount of time can't exceed the duration of your enchantment spell."
                    }]
                }
            },
            evocation: {
                name: "School of Evocation",
                source: "PHB",
                description: "You focus your study on magic that creates powerful elemental effects such as bitter cold, searing flame, rolling thunder, crackling lightning, and burning acid. Some evokers find employment in military forces, serving as artillery to blast enemy armies from afar. Others use their spectacular power to protect the weak.",
                features: {
                    2: [
                        {
                            name: "Evocation Savant",
                            description: "Beginning when you select this school at 2nd level, the gold and time you must spend to copy an evocation spell into your spellbook is halved."
                        },
                        {
                            name: "Sculpt Spells",
                            description: "Beginning at 2nd level, you can create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 + the spell's level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save."
                        }
                    ],
                    6: [{
                        name: "Potent Cantrip",
                        description: "Starting at 6th level, your damaging cantrips affect even creatures that avoid the brunt of the effect. When a creature succeeds on a saving throw against your cantrip, the creature takes half the cantrip's damage (if any) but suffers no additional effect from the cantrip."
                    }],
                    10: [{
                        name: "Empowered Evocation",
                        description: "Beginning at 10th level, you can add your Intelligence modifier to one damage roll of any wizard evocation spell you cast."
                    }],
                    14: [{
                        name: "Overchannel",
                        description: "Starting at 14th level, you can increase the power of your simpler spells. When you cast a wizard spell of 1st through 5th level that deals damage, you can deal maximum damage with that spell. The first time you do so, you suffer no adverse effect. If you use this feature again before you finish a long rest, you take 2d12 necrotic damage for each level of the spell, immediately after you cast it. Each time you use this feature again before finishing a long rest, the necrotic damage per spell level increases by 1d12. This damage ignores resistance and immunity."
                    }]
                }
            },
            illusion: {
                name: "School of Illusion",
                source: "PHB",
                description: "You focus your studies on magic that dazzles the senses, befuddles the mind, and tricks even the wisest folk. Your magic is subtle, but the illusions crafted by your keen mind make the impossible seem real. Some illusionists are benign tricksters who use their spells to entertain. Others are more sinister masters of deception.",
                features: {
                    2: [
                        {
                            name: "Illusion Savant",
                            description: "Beginning when you select this school at 2nd level, the gold and time you must spend to copy an illusion spell into your spellbook is halved."
                        },
                        {
                            name: "Improved Minor Illusion",
                            description: "When you choose this school at 2nd level, you learn the Minor Illusion cantrip. If you already know this cantrip, you learn a different wizard cantrip of your choice. The cantrip doesn't count against your number of cantrips known. When you cast Minor Illusion, you can create both a sound and an image with a single casting of the spell."
                        }
                    ],
                    6: [{
                        name: "Malleable Illusions",
                        description: "Starting at 6th level, when you cast an illusion spell that has a duration of 1 minute or longer, you can use your action to change the nature of that illusion (using the spell's normal parameters for the illusion), provided that you can see the illusion."
                    }],
                    10: [{
                        name: "Illusory Self",
                        description: "Beginning at 10th level, you can create an illusory duplicate of yourself as an instant, almost instinctual reaction to danger. When a creature makes an attack roll against you, you can use your reaction to interpose the illusory duplicate between the attacker and yourself. The attack automatically misses you, then the illusion dissipates. Once you use this feature, you can't use it again until you finish a short or long rest."
                    }],
                    14: [{
                        name: "Illusory Reality",
                        description: "By 14th level, you have learned the secret of weaving shadow magic into your illusions to give them a semi-reality. When you cast an illusion spell of 1st level or higher, you can choose one inanimate, nonmagical object that is part of the illusion and make that object real. You can do this on your turn as a bonus action while the spell is ongoing. The object remains real for 1 minute. For example, you can create an illusion of a bridge over a chasm and then make it real long enough for your allies to cross. The object can't deal damage or otherwise directly harm anyone."
                    }]
                }
            },
            necromancy: {
                name: "School of Necromancy",
                source: "PHB",
                description: "The School of Necromancy explores the cosmic forces of life, death, and undeath. As you focus your studies in this tradition, you learn to manipulate the energy that animates all living things. As you progress, you learn to sap the life force from a creature as your magic destroys its body, transforming that vital energy into magical power you can manipulate.",
                features: {
                    2: [
                        {
                            name: "Necromancy Savant",
                            description: "Beginning when you select this school at 2nd level, the gold and time you must spend to copy a necromancy spell into your spellbook is halved."
                        },
                        {
                            name: "Grim Harvest",
                            description: "At 2nd level, you gain the ability to reap life energy from creatures you kill with your spells. Once per turn when you kill one or more creatures with a spell of 1st level or higher, you regain hit points equal to twice the spell's level, or three times its level if the spell belongs to the School of Necromancy. You don't gain this benefit for killing constructs or undead."
                        }
                    ],
                    6: [{
                        name: "Undead Thralls",
                        description: "At 6th level, you add the Animate Dead spell to your spellbook if it is not there already. When you cast Animate Dead, you can target one additional corpse or pile of bones, creating another zombie or skeleton, as appropriate. Whenever you create an undead using a necromancy spell, it has additional benefits: The creature's hit point maximum is increased by an amount equal to your wizard level. The creature adds your proficiency bonus to its weapon damage rolls."
                    }],
                    10: [{
                        name: "Inured to Undeath",
                        description: "Beginning at 10th level, you have resistance to necrotic damage, and your hit point maximum can't be reduced. You have spent so much time dealing with undead and the forces that animate them that you have become inured to some of their worst effects."
                    }],
                    14: [{
                        name: "Command Undead",
                        description: "Starting at 14th level, you can use magic to bring undead under your control, even those created by other wizards. As an action, you can choose one undead that you can see within 60 feet of you. That creature must make a Charisma saving throw against your wizard spell save DC. If it succeeds, you can't use this feature on it again. If it fails, it becomes friendly to you and obeys your commands until you use this feature again. Intelligent undead are harder to control in this way. If the target has an Intelligence of 8 or higher, it has advantage on the saving throw. If it fails the saving throw and has an Intelligence of 12 or higher, it can repeat the saving throw at the end of every hour until it succeeds and breaks free."
                    }]
                }
            },
            transmutation: {
                name: "School of Transmutation",
                source: "PHB",
                description: "You are a student of spells that modify energy and matter. To you, the world is not a fixed thing, but eminently mutable, and you delight in being an agent of change. You wield the raw stuff of creation and learn to alter both physical forms and mental qualities.",
                features: {
                    2: [
                        {
                            name: "Transmutation Savant",
                            description: "Beginning when you select this school at 2nd level, the gold and time you must spend to copy a transmutation spell into your spellbook is halved."
                        },
                        {
                            name: "Minor Alchemy",
                            description: "Starting at 2nd level when you select this school, you can temporarily alter the physical properties of one nonmagical object, changing it from one substance into another. You perform a special alchemical procedure on one object composed entirely of wood, stone (but not a gemstone), iron, copper, or silver, transforming it into a different one of those materials. For each 10 minutes you spend performing the procedure, you can transform up to 1 cubic foot of material. After 1 hour, or until you lose your concentration (as if you were concentrating on a spell), the material reverts to its original substance."
                        }
                    ],
                    6: [{
                        name: "Transmuter's Stone",
                        description: "Starting at 6th level, you can spend 8 hours creating a transmuter's stone that stores transmutation magic. You can benefit from the stone yourself or give it to another creature. A creature gains a benefit of your choice as long as the stone is in the creature's possession. When you create the stone, choose the benefit from the following options: Darkvision out to a range of 60 feet, An increase to speed of 10 feet while the creature is unencumbered, Proficiency in Constitution saving throws, Resistance to acid, cold, fire, lightning, or thunder damage (your choice whenever you choose this benefit). Each time you cast a transmutation spell of 1st level or higher, you can change the effect of your stone if the stone is on your person. If you create a new transmuter's stone, the previous one ceases to function."
                    }],
                    10: [{
                        name: "Shapechanger",
                        description: "At 10th level, you add the Polymorph spell to your spellbook, if it is not there already. You can cast Polymorph without expending a spell slot. When you do so, you can target only yourself and transform into a beast whose challenge rating is 1 or lower. Once you cast Polymorph in this way, you can't do so again until you finish a short or long rest, though you can still cast it normally using an available spell slot."
                    }],
                    14: [{
                        name: "Master Transmuter",
                        description: "Starting at 14th level, you can use your action to consume the reserve of transmutation magic stored within your transmuter's stone in a single burst. When you do so, choose one of the following effects. Your transmuter's stone is destroyed and can't be remade until you finish a long rest. Major Transformation: You can transmute one nonmagical object - no larger than a 5-foot cube - into another nonmagical object of similar size and mass and of equal or lesser value. You must spend 10 minutes handling the object to transform it. Panacea: You remove all curses, diseases, and poisons affecting a creature that you touch with the transmuter's stone. The creature also regains all its hit points. Restore Life: You cast the Raise Dead spell on a creature you touch with the transmuter's stone, without expending a spell slot or needing to have the spell in your spellbook. Restore Youth: You touch the transmuter's stone to a willing creature, and that creature's apparent age is reduced by 3d10 years, to a minimum of 13 years. This effect doesn't extend the creature's lifespan."
                    }]
                }
            },
            warMagic: {
                name: "War Magic",
                source: "XGtE",
                description: "A variety of arcane colleges specialize in training wizards for war. The tradition of War Magic blends principles of evocation and abjuration, rather than specializing in either of those schools. It teaches techniques that empower a caster's spells, while also providing methods for wizards to bolster their own defenses.",
                features: {
                    2: [
                        {
                            name: "Arcane Deflection",
                            description: "At 2nd level, you have learned to weave your magic to fortify yourself against harm. When you are hit by an attack or you fail a saving throw, you can use your reaction to gain a +2 bonus to your AC against that attack or a +4 bonus to that saving throw. When you use this feature, you can't cast spells other than cantrips until the end of your next turn."
                        },
                        {
                            name: "Tactical Wit",
                            description: "Starting at 2nd level, your keen ability to assess tactical situations allows you to act quickly in battle. You can add your Intelligence modifier to your initiative rolls."
                        }
                    ],
                    6: [{
                        name: "Power Surge",
                        description: "Starting at 6th level, you can store magical energy within yourself to later empower your damaging spells. In its stored form, this energy is called a power surge. You can store a maximum number of power surges equal to your Intelligence modifier (minimum of one). Whenever you finish a long rest, your number of power surges resets to one. Whenever you successfully end a spell with Dispel Magic or Counterspell, you gain one power surge, as you steal magic from the spell you foiled. If you end a short rest with no power surges, you gain one power surge. Once per turn when you deal damage to a creature or object with a wizard spell, you can spend one power surge to deal extra force damage to that target. The extra damage equals half your wizard level."
                    }],
                    10: [{
                        name: "Durable Magic",
                        description: "Beginning at 10th level, the magic you channel helps ward off harm. While you maintain concentration on a spell, you have a +2 bonus to AC and all saving throws."
                    }],
                    14: [{
                        name: "Deflecting Shroud",
                        description: "At 14th level, your Arcane Deflection becomes infused with deadly magic. When you use your Arcane Deflection feature, you can cause magical energy to arc from you. Up to three creatures of your choice that you can see within 60 feet of you each take force damage equal to half your wizard level."
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
