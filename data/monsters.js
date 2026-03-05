// D&D 5e SRD Monsters Database
// Source: https://www.5esrd.com/gamemastering/monsters-foes/

const MONSTERS = {
    // Beasts
    "wolf": {
        name: "Wolf",
        size: "Medium",
        type: "Beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 40 },
        abilities: { str: 12, dex: 15, con: 12, int: 3, wis: 12, cha: 6 },
        skills: { perception: 3, stealth: 4 },
        senses: ["passive Perception 13"],
        languages: [],
        cr: "1/4",
        xp: 50,
        traits: [
            {
                name: "Keen Hearing and Smell",
                description: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            },
            {
                name: "Pack Tactics",
                description: "The wolf has advantage on attack rolls against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated."
            }
        ],
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone."
            }
        ]
    },
    "dire-wolf": {
        name: "Dire Wolf",
        size: "Large",
        type: "Beast",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 37,
        hitDice: "5d10+10",
        speed: { walk: 50 },
        abilities: { str: 17, dex: 15, con: 15, int: 3, wis: 12, cha: 7 },
        skills: { perception: 3, stealth: 4 },
        senses: ["passive Perception 13"],
        languages: [],
        cr: "1",
        xp: 200,
        traits: [
            {
                name: "Keen Hearing and Smell",
                description: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            },
            {
                name: "Pack Tactics",
                description: "The wolf has advantage on attack rolls against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated."
            }
        ],
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
            }
        ]
    },
    "giant-spider": {
        name: "Giant Spider",
        size: "Large",
        type: "Beast",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 26,
        hitDice: "4d10+4",
        speed: { walk: 30, climb: 30 },
        abilities: { str: 14, dex: 16, con: 12, int: 2, wis: 11, cha: 4 },
        skills: { stealth: 7 },
        senses: ["blindsight 10 ft.", "darkvision 60 ft.", "passive Perception 10"],
        languages: [],
        cr: "1",
        xp: 200,
        traits: [
            {
                name: "Spider Climb",
                description: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            },
            {
                name: "Web Sense",
                description: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
            },
            {
                name: "Web Walker",
                description: "The spider ignores movement restrictions caused by webbing."
            }
        ],
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 7 (1d8 + 3) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
            },
            {
                name: "Web (Recharge 5-6)",
                description: "Ranged Weapon Attack: +5 to hit, range 30/60 ft., one creature. Hit: The target is restrained by webbing. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage)."
            }
        ]
    },
    "brown-bear": {
        name: "Brown Bear",
        size: "Large",
        type: "Beast",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 34,
        hitDice: "4d10+12",
        speed: { walk: 40, climb: 30 },
        abilities: { str: 19, dex: 10, con: 16, int: 2, wis: 13, cha: 7 },
        skills: { perception: 3 },
        senses: ["passive Perception 13"],
        languages: [],
        cr: "1",
        xp: 200,
        traits: [
            {
                name: "Keen Smell",
                description: "The bear has advantage on Wisdom (Perception) checks that rely on smell."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The bear makes two attacks: one with its bite and one with its claws."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage."
            },
            {
                name: "Claws",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
            }
        ]
    },
    "giant-rat": {
        name: "Giant Rat",
        size: "Small",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        hp: 7,
        hitDice: "2d6",
        speed: { walk: 30 },
        abilities: { str: 7, dex: 15, con: 11, int: 2, wis: 10, cha: 4 },
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: [],
        cr: "1/8",
        xp: 25,
        traits: [
            {
                name: "Keen Smell",
                description: "The rat has advantage on Wisdom (Perception) checks that rely on smell."
            },
            {
                name: "Pack Tactics",
                description: "The rat has advantage on an attack roll against a creature if at least one of the rat's allies is within 5 feet of the creature and the ally isn't incapacitated."
            }
        ],
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage."
            }
        ]
    },

    // Undead
    "skeleton": {
        name: "Skeleton",
        size: "Medium",
        type: "Undead",
        alignment: "lawful evil",
        ac: 13,
        acType: "armor scraps",
        hp: 13,
        hitDice: "2d8+4",
        speed: { walk: 30 },
        abilities: { str: 10, dex: 14, con: 15, int: 6, wis: 8, cha: 5 },
        damageVulnerabilities: ["bludgeoning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 9"],
        languages: ["understands all languages it knew in life but can't speak"],
        cr: "1/4",
        xp: 50,
        actions: [
            {
                name: "Shortsword",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
            },
            {
                name: "Shortbow",
                description: "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
            }
        ]
    },
    "zombie": {
        name: "Zombie",
        size: "Medium",
        type: "Undead",
        alignment: "neutral evil",
        ac: 8,
        hp: 22,
        hitDice: "3d8+9",
        speed: { walk: 20 },
        abilities: { str: 13, dex: 6, con: 16, int: 3, wis: 6, cha: 5 },
        savingThrows: { wis: 0 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 8"],
        languages: ["understands the languages it knew in life but can't speak"],
        cr: "1/4",
        xp: 50,
        traits: [
            {
                name: "Undead Fortitude",
                description: "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead."
            }
        ],
        actions: [
            {
                name: "Slam",
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage."
            }
        ]
    },
    "ghoul": {
        name: "Ghoul",
        size: "Medium",
        type: "Undead",
        alignment: "chaotic evil",
        ac: 12,
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 30 },
        abilities: { str: 13, dex: 15, con: 10, int: 7, wis: 10, cha: 6 },
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: ["Common"],
        cr: "1",
        xp: 200,
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) piercing damage."
            },
            {
                name: "Claws",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage. If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ]
    },
    "wight": {
        name: "Wight",
        size: "Medium",
        type: "Undead",
        alignment: "neutral evil",
        ac: 14,
        acType: "studded leather",
        hp: 45,
        hitDice: "6d8+18",
        speed: { walk: 30 },
        abilities: { str: 15, dex: 14, con: 16, int: 10, wis: 13, cha: 15 },
        skills: { perception: 3, stealth: 4 },
        damageResistances: ["necrotic", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 13"],
        languages: ["the languages it knew in life"],
        cr: "3",
        xp: 700,
        traits: [
            {
                name: "Sunlight Sensitivity",
                description: "While in sunlight, the wight has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The wight makes two longsword attacks or two longbow attacks. It can use its Life Drain in place of one longsword attack."
            },
            {
                name: "Life Drain",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) necrotic damage. The target must succeed on a DC 13 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
            },
            {
                name: "Longsword",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands."
            },
            {
                name: "Longbow",
                description: "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage."
            }
        ]
    },
    "vampire-spawn": {
        name: "Vampire Spawn",
        size: "Medium",
        type: "Undead",
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 82,
        hitDice: "11d8+33",
        speed: { walk: 30 },
        abilities: { str: 16, dex: 16, con: 16, int: 11, wis: 10, cha: 12 },
        savingThrows: { dex: 6, wis: 3 },
        skills: { perception: 3, stealth: 6 },
        damageResistances: ["necrotic", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft.", "passive Perception 13"],
        languages: ["the languages it knew in life"],
        cr: "5",
        xp: 1800,
        traits: [
            {
                name: "Regeneration",
                description: "The vampire regains 10 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn."
            },
            {
                name: "Spider Climb",
                description: "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            },
            {
                name: "Vampire Weaknesses",
                description: "The vampire has the following flaws: Forbiddance, Harmed by Running Water, Stake to the Heart, Sunlight Hypersensitivity."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The vampire makes two attacks, only one of which can be a bite attack."
            },
            {
                name: "Claws",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 8 (2d4 + 3) slashing damage. Instead of dealing damage, the vampire can grapple the target (escape DC 13)."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit: 6 (1d6 + 3) piercing damage plus 7 (2d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount."
            }
        ]
    },

    // Fiends
    "imp": {
        name: "Imp",
        size: "Tiny",
        type: "Fiend",
        subtype: "devil, shapechanger",
        alignment: "lawful evil",
        ac: 13,
        hp: 10,
        hitDice: "3d4+3",
        speed: { walk: 20, fly: 40 },
        abilities: { str: 6, dex: 17, con: 13, int: 11, wis: 12, cha: 14 },
        skills: { deception: 4, insight: 3, persuasion: 4, stealth: 5 },
        damageResistances: ["cold", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft.", "passive Perception 11"],
        languages: ["Infernal", "Common"],
        cr: "1",
        xp: 200,
        traits: [
            {
                name: "Shapechanger",
                description: "The imp can use its action to polymorph into a beast form that resembles a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb 20 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                name: "Devil's Sight",
                description: "Magical darkness doesn't impede the imp's darkvision."
            },
            {
                name: "Magic Resistance",
                description: "The imp has advantage on saving throws against spells and other magical effects."
            }
        ],
        actions: [
            {
                name: "Sting (Bite in Beast Form)",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage, and the target must make on a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one."
            },
            {
                name: "Invisibility",
                description: "The imp magically turns invisible until it attacks or until its concentration ends (as if concentrating on a spell). Any equipment the imp wears or carries is invisible with it."
            }
        ]
    },
    "quasit": {
        name: "Quasit",
        size: "Tiny",
        type: "Fiend",
        subtype: "demon, shapechanger",
        alignment: "chaotic evil",
        ac: 13,
        hp: 7,
        hitDice: "3d4",
        speed: { walk: 40 },
        abilities: { str: 5, dex: 17, con: 10, int: 7, wis: 10, cha: 10 },
        skills: { stealth: 5 },
        damageResistances: ["cold", "fire", "lightning", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft.", "passive Perception 10"],
        languages: ["Abyssal", "Common"],
        cr: "1",
        xp: 200,
        traits: [
            {
                name: "Shapechanger",
                description: "The quasit can use its action to polymorph into a beast form that resembles a bat (speed 10 ft., fly 40 ft.), a centipede (40 ft., climb 40 ft.), or a toad (40 ft., swim 40 ft.), or back into its true form."
            },
            {
                name: "Magic Resistance",
                description: "The quasit has advantage on saving throws against spells and other magical effects."
            }
        ],
        actions: [
            {
                name: "Claws (Bite in Beast Form)",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage, and the target must succeed on a DC 10 Constitution saving throw or take 5 (2d4) poison damage and become poisoned for 1 minute."
            },
            {
                name: "Scare (1/Day)",
                description: "One creature of the quasit's choice within 20 feet of it must succeed on a DC 10 Wisdom saving throw or be frightened for 1 minute."
            },
            {
                name: "Invisibility",
                description: "The quasit magically turns invisible until it attacks or uses Scare, or until its concentration ends (as if concentrating on a spell)."
            }
        ]
    },
    "hell-hound": {
        name: "Hell Hound",
        size: "Medium",
        type: "Fiend",
        alignment: "lawful evil",
        ac: 15,
        acType: "natural armor",
        hp: 45,
        hitDice: "7d8+14",
        speed: { walk: 50 },
        abilities: { str: 17, dex: 12, con: 14, int: 6, wis: 13, cha: 6 },
        skills: { perception: 5 },
        damageImmunities: ["fire"],
        senses: ["darkvision 60 ft.", "passive Perception 15"],
        languages: ["understands Infernal but can't speak it"],
        cr: "3",
        xp: 700,
        traits: [
            {
                name: "Keen Hearing and Smell",
                description: "The hound has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            },
            {
                name: "Pack Tactics",
                description: "The hound has advantage on an attack roll against a creature if at least one of the hound's allies is within 5 feet of the creature and the ally isn't incapacitated."
            }
        ],
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 7 (2d6) fire damage."
            },
            {
                name: "Fire Breath (Recharge 5-6)",
                description: "The hound exhales fire in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    "barbed-devil": {
        name: "Barbed Devil",
        size: "Medium",
        type: "Fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 15,
        acType: "natural armor",
        hp: 110,
        hitDice: "13d8+52",
        speed: { walk: 30 },
        abilities: { str: 16, dex: 17, con: 18, int: 12, wis: 14, cha: 14 },
        savingThrows: { str: 6, con: 7, wis: 5, cha: 5 },
        skills: { deception: 5, insight: 5, perception: 8 },
        damageResistances: ["cold", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft.", "passive Perception 18"],
        languages: ["Infernal", "telepathy 120 ft."],
        cr: "5",
        xp: 1800,
        traits: [
            {
                name: "Barbed Hide",
                description: "At the start of each of its turns, the barbed devil deals 5 (1d10) piercing damage to any creature grappling it."
            },
            {
                name: "Devil's Sight",
                description: "Magical darkness doesn't impede the devil's darkvision."
            },
            {
                name: "Magic Resistance",
                description: "The devil has advantage on saving throws against spells and other magical effects."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The devil makes three melee attacks: one with its tail and two with its claws. Alternatively, it can use Hurl Flame twice."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage."
            },
            {
                name: "Tail",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage."
            },
            {
                name: "Hurl Flame",
                description: "Ranged Spell Attack: +5 to hit, range 150 ft., one target. Hit: 10 (3d6) fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire."
            }
        ]
    },

    // Dragons
    "pseudodragon": {
        name: "Pseudodragon",
        size: "Tiny",
        type: "Dragon",
        alignment: "neutral good",
        ac: 13,
        acType: "natural armor",
        hp: 7,
        hitDice: "2d4+2",
        speed: { walk: 15, fly: 60 },
        abilities: { str: 6, dex: 15, con: 13, int: 10, wis: 12, cha: 10 },
        skills: { perception: 3, stealth: 4 },
        senses: ["blindsight 10 ft.", "darkvision 60 ft.", "passive Perception 13"],
        languages: ["understands Common and Draconic but can't speak"],
        cr: "1/4",
        xp: 50,
        traits: [
            {
                name: "Keen Senses",
                description: "The pseudodragon has advantage on Wisdom (Perception) checks that rely on sight, hearing, or smell."
            },
            {
                name: "Magic Resistance",
                description: "The pseudodragon has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Limited Telepathy",
                description: "The pseudodragon can magically communicate simple ideas, emotions, and images telepathically with any creature within 100 feet of it that can understand a language."
            }
        ],
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage."
            },
            {
                name: "Sting",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or become poisoned for 1 hour. If the saving throw fails by 5 or more, the target falls unconscious for the same duration, or until it takes damage or another creature uses an action to shake it awake."
            }
        ]
    },
    "young-red-dragon": {
        name: "Young Red Dragon",
        size: "Large",
        type: "Dragon",
        alignment: "chaotic evil",
        ac: 18,
        acType: "natural armor",
        hp: 178,
        hitDice: "17d10+85",
        speed: { walk: 40, climb: 40, fly: 80 },
        abilities: { str: 23, dex: 10, con: 21, int: 14, wis: 11, cha: 19 },
        savingThrows: { dex: 4, con: 9, wis: 4, cha: 8 },
        skills: { perception: 8, stealth: 4 },
        damageImmunities: ["fire"],
        senses: ["blindsight 30 ft.", "darkvision 120 ft.", "passive Perception 18"],
        languages: ["Common", "Draconic"],
        cr: "10",
        xp: 5900,
        actions: [
            {
                name: "Multiattack",
                description: "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 3 (1d6) fire damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
            },
            {
                name: "Fire Breath (Recharge 5-6)",
                description: "The dragon exhales fire in a 30-foot cone. Each creature in that area must make a DC 17 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    "adult-black-dragon": {
        name: "Adult Black Dragon",
        size: "Huge",
        type: "Dragon",
        alignment: "chaotic evil",
        ac: 19,
        acType: "natural armor",
        hp: 195,
        hitDice: "17d12+85",
        speed: { walk: 40, fly: 80, swim: 40 },
        abilities: { str: 23, dex: 14, con: 21, int: 14, wis: 13, cha: 17 },
        savingThrows: { dex: 7, con: 10, wis: 6, cha: 8 },
        skills: { perception: 11, stealth: 7 },
        damageImmunities: ["acid"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 21"],
        languages: ["Common", "Draconic"],
        cr: "14",
        xp: 11500,
        traits: [
            {
                name: "Amphibious",
                description: "The dragon can breathe air and water."
            },
            {
                name: "Legendary Resistance (3/Day)",
                description: "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) acid damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
            },
            {
                name: "Tail",
                description: "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage."
            },
            {
                name: "Frightful Presence",
                description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute."
            },
            {
                name: "Acid Breath (Recharge 5-6)",
                description: "The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one."
            }
        ],
        legendaryActions: [
            {
                name: "Detect",
                description: "The dragon makes a Wisdom (Perception) check."
            },
            {
                name: "Tail Attack",
                description: "The dragon makes a tail attack."
            },
            {
                name: "Wing Attack (Costs 2 Actions)",
                description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ]
    },

    // Humanoids
    "goblin": {
        name: "Goblin",
        size: "Small",
        type: "Humanoid",
        subtype: "goblinoid",
        alignment: "neutral evil",
        ac: 15,
        acType: "leather armor, shield",
        hp: 7,
        hitDice: "2d6",
        speed: { walk: 30 },
        abilities: { str: 8, dex: 14, con: 10, int: 10, wis: 8, cha: 8 },
        skills: { stealth: 6 },
        senses: ["darkvision 60 ft.", "passive Perception 9"],
        languages: ["Common", "Goblin"],
        cr: "1/4",
        xp: 50,
        traits: [
            {
                name: "Nimble Escape",
                description: "The goblin can take the Disengage or Hide action as a bonus action on each of its turns."
            }
        ],
        actions: [
            {
                name: "Scimitar",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage."
            },
            {
                name: "Shortbow",
                description: "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
            }
        ]
    },
    "orc": {
        name: "Orc",
        size: "Medium",
        type: "Humanoid",
        subtype: "orc",
        alignment: "chaotic evil",
        ac: 13,
        acType: "hide armor",
        hp: 15,
        hitDice: "2d8+6",
        speed: { walk: 30 },
        abilities: { str: 16, dex: 12, con: 16, int: 7, wis: 11, cha: 10 },
        skills: { intimidation: 2 },
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: ["Common", "Orc"],
        cr: "1/2",
        xp: 100,
        traits: [
            {
                name: "Aggressive",
                description: "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see."
            }
        ],
        actions: [
            {
                name: "Greataxe",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12 + 3) slashing damage."
            },
            {
                name: "Javelin",
                description: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 6 (1d6 + 3) piercing damage."
            }
        ]
    },
    "bandit": {
        name: "Bandit",
        size: "Medium",
        type: "Humanoid",
        subtype: "any race",
        alignment: "any non-lawful alignment",
        ac: 12,
        acType: "leather armor",
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 30 },
        abilities: { str: 11, dex: 12, con: 12, int: 10, wis: 10, cha: 10 },
        senses: ["passive Perception 10"],
        languages: ["any one language (usually Common)"],
        cr: "1/8",
        xp: 25,
        actions: [
            {
                name: "Scimitar",
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage."
            },
            {
                name: "Light Crossbow",
                description: "Ranged Weapon Attack: +3 to hit, range 80/320 ft., one target. Hit: 5 (1d8 + 1) piercing damage."
            }
        ]
    },
    "bandit-captain": {
        name: "Bandit Captain",
        size: "Medium",
        type: "Humanoid",
        subtype: "any race",
        alignment: "any non-lawful alignment",
        ac: 15,
        acType: "studded leather",
        hp: 65,
        hitDice: "10d8+20",
        speed: { walk: 30 },
        abilities: { str: 15, dex: 16, con: 14, int: 14, wis: 11, cha: 14 },
        savingThrows: { str: 4, dex: 5, wis: 2 },
        skills: { athletics: 4, deception: 4 },
        senses: ["passive Perception 10"],
        languages: ["any two languages"],
        cr: "2",
        xp: 450,
        actions: [
            {
                name: "Multiattack",
                description: "The captain makes three melee attacks: two with its scimitar and one with its dagger. Or the captain makes two ranged attacks with its daggers."
            },
            {
                name: "Scimitar",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage."
            },
            {
                name: "Dagger",
                description: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d4 + 3) piercing damage."
            }
        ],
        reactions: [
            {
                name: "Parry",
                description: "The captain adds 2 to its AC against one melee attack that would hit it. To do so, the captain must see the attacker and be wielding a melee weapon."
            }
        ]
    },

    // Monstrosities
    "owlbear": {
        name: "Owlbear",
        size: "Large",
        type: "Monstrosity",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 59,
        hitDice: "7d10+21",
        speed: { walk: 40 },
        abilities: { str: 20, dex: 12, con: 17, int: 3, wis: 12, cha: 7 },
        skills: { perception: 3 },
        senses: ["darkvision 60 ft.", "passive Perception 13"],
        languages: [],
        cr: "3",
        xp: 700,
        traits: [
            {
                name: "Keen Sight and Smell",
                description: "The owlbear has advantage on Wisdom (Perception) checks that rely on sight or smell."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The owlbear makes two attacks: one with its beak and one with its claws."
            },
            {
                name: "Beak",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 10 (1d10 + 5) piercing damage."
            },
            {
                name: "Claws",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage."
            }
        ]
    },
    "mimic": {
        name: "Mimic",
        size: "Medium",
        type: "Monstrosity",
        subtype: "shapechanger",
        alignment: "neutral",
        ac: 12,
        acType: "natural armor",
        hp: 58,
        hitDice: "9d8+18",
        speed: { walk: 15 },
        abilities: { str: 17, dex: 12, con: 15, int: 5, wis: 13, cha: 8 },
        skills: { stealth: 5 },
        damageImmunities: ["acid"],
        conditionImmunities: ["prone"],
        senses: ["darkvision 60 ft.", "passive Perception 11"],
        languages: [],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Shapechanger",
                description: "The mimic can use its action to polymorph into an object or back into its true, amorphous form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                name: "Adhesive (Object Form Only)",
                description: "The mimic adheres to anything that touches it. A Huge or smaller creature adhered to the mimic is also grappled by it (escape DC 13). Ability checks made to escape this grapple have disadvantage."
            },
            {
                name: "False Appearance (Object Form Only)",
                description: "While the mimic remains motionless, it is indistinguishable from an ordinary object."
            },
            {
                name: "Grappler",
                description: "The mimic has advantage on attack rolls against any creature grappled by it."
            }
        ],
        actions: [
            {
                name: "Pseudopod",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage. If the mimic is in object form, the target is subjected to its Adhesive trait."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 4 (1d8) acid damage."
            }
        ]
    },
    "basilisk": {
        name: "Basilisk",
        size: "Medium",
        type: "Monstrosity",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 52,
        hitDice: "8d8+16",
        speed: { walk: 20 },
        abilities: { str: 16, dex: 8, con: 15, int: 2, wis: 8, cha: 7 },
        senses: ["darkvision 60 ft.", "passive Perception 9"],
        languages: [],
        cr: "3",
        xp: 700,
        traits: [
            {
                name: "Petrifying Gaze",
                description: "If a creature starts its turn within 30 feet of the basilisk and the two of them can see each other, the basilisk can force the creature to make a DC 12 Constitution saving throw if the basilisk isn't incapacitated. On a failed save, the creature magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic."
            }
        ],
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage plus 7 (2d6) poison damage."
            }
        ]
    },

    // Aberrations
    "mind-flayer": {
        name: "Mind Flayer",
        size: "Medium",
        type: "Aberration",
        alignment: "lawful evil",
        ac: 15,
        acType: "breastplate",
        hp: 71,
        hitDice: "13d8+13",
        speed: { walk: 30 },
        abilities: { str: 11, dex: 12, con: 12, int: 19, wis: 17, cha: 17 },
        savingThrows: { int: 7, wis: 6, cha: 6 },
        skills: { arcana: 7, deception: 6, insight: 6, perception: 6, persuasion: 6, stealth: 4 },
        senses: ["darkvision 120 ft.", "passive Perception 16"],
        languages: ["Deep Speech", "Undercommon", "telepathy 120 ft."],
        cr: "7",
        xp: 2900,
        traits: [
            {
                name: "Magic Resistance",
                description: "The mind flayer has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Innate Spellcasting (Psionics)",
                description: "The mind flayer's innate spellcasting ability is Intelligence (spell save DC 15). It can innately cast the following spells, requiring no components: At will: detect thoughts, levitate. 1/day each: dominate monster, plane shift (self only)."
            }
        ],
        actions: [
            {
                name: "Tentacles",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 15 (2d10 + 4) psychic damage. If the target is Medium or smaller, it is grappled (escape DC 15) and must succeed on a DC 15 Intelligence saving throw or be stunned until this grapple ends."
            },
            {
                name: "Extract Brain",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one incapacitated humanoid grappled by the mind flayer. Hit: The target takes 55 (10d10) piercing damage. If this damage reduces the target to 0 hit points, the mind flayer kills the target by extracting and devouring its brain."
            },
            {
                name: "Mind Blast (Recharge 5-6)",
                description: "The mind flayer magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a DC 15 Intelligence saving throw or take 22 (4d8 + 4) psychic damage and be stunned for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ]
    },
    "beholder": {
        name: "Beholder",
        size: "Large",
        type: "Aberration",
        alignment: "lawful evil",
        ac: 18,
        acType: "natural armor",
        hp: 180,
        hitDice: "19d10+76",
        speed: { walk: 0, fly: 20, hover: true },
        abilities: { str: 10, dex: 14, con: 18, int: 17, wis: 15, cha: 17 },
        savingThrows: { int: 8, wis: 7, cha: 8 },
        skills: { perception: 12 },
        conditionImmunities: ["prone"],
        senses: ["darkvision 120 ft.", "passive Perception 22"],
        languages: ["Deep Speech", "Undercommon"],
        cr: "13",
        xp: 10000,
        traits: [
            {
                name: "Antimagic Cone",
                description: "The beholder's central eye creates an area of antimagic, as in the antimagic field spell, in a 150-foot cone. At the start of each of its turns, the beholder decides which way the cone faces and whether the cone is active."
            },
            {
                name: "Eye Stalks",
                description: "The beholder has ten eye stalks, each of which can use a different eye ray."
            }
        ],
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (4d6) piercing damage."
            },
            {
                name: "Eye Rays",
                description: "The beholder shoots three of its eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 feet of it. The rays include: Charm Ray, Paralyzing Ray, Fear Ray, Slowing Ray, Enervation Ray, Telekinetic Ray, Sleep Ray, Petrification Ray, Disintegration Ray, and Death Ray."
            }
        ],
        legendaryActions: [
            {
                name: "Eye Ray",
                description: "The beholder uses one random eye ray."
            }
        ]
    },

    // Elementals
    "fire-elemental": {
        name: "Fire Elemental",
        size: "Large",
        type: "Elemental",
        alignment: "neutral",
        ac: 13,
        hp: 102,
        hitDice: "12d10+36",
        speed: { walk: 50 },
        abilities: { str: 10, dex: 17, con: 16, int: 6, wis: 10, cha: 7 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: ["Ignan"],
        cr: "5",
        xp: 1800,
        traits: [
            {
                name: "Fire Form",
                description: "The elemental can move through a space as narrow as 1 inch wide without squeezing. A creature that touches the elemental or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage. In addition, the elemental can enter a hostile creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes 5 (1d10) fire damage and catches fire; until someone takes an action to douse the fire, the creature takes 5 (1d10) fire damage at the start of each of its turns."
            },
            {
                name: "Illumination",
                description: "The elemental sheds bright light in a 30-foot radius and dim light in an additional 30 feet."
            },
            {
                name: "Water Susceptibility",
                description: "For every 5 feet the elemental moves in water, or for every gallon of water splashed on it, it takes 1 cold damage."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The elemental makes two touch attacks."
            },
            {
                name: "Touch",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 5 (1d10) fire damage at the start of each of its turns."
            }
        ]
    },
    "earth-elemental": {
        name: "Earth Elemental",
        size: "Large",
        type: "Elemental",
        alignment: "neutral",
        ac: 17,
        acType: "natural armor",
        hp: 126,
        hitDice: "12d10+60",
        speed: { walk: 30, burrow: 30 },
        abilities: { str: 20, dex: 8, con: 20, int: 5, wis: 10, cha: 5 },
        damageVulnerabilities: ["thunder"],
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "paralyzed", "petrified", "poisoned", "unconscious"],
        senses: ["darkvision 60 ft.", "tremorsense 60 ft.", "passive Perception 10"],
        languages: ["Terran"],
        cr: "5",
        xp: 1800,
        traits: [
            {
                name: "Earth Glide",
                description: "The elemental can burrow through nonmagical, unworked earth and stone. While doing so, the elemental doesn't disturb the material it moves through."
            },
            {
                name: "Siege Monster",
                description: "The elemental deals double damage to objects and structures."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The elemental makes two slam attacks."
            },
            {
                name: "Slam",
                description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage."
            }
        ]
    },

    // Constructs
    "animated-armor": {
        name: "Animated Armor",
        size: "Medium",
        type: "Construct",
        alignment: "unaligned",
        ac: 18,
        acType: "natural armor",
        hp: 33,
        hitDice: "6d8+6",
        speed: { walk: 25 },
        abilities: { str: 14, dex: 11, con: 13, int: 1, wis: 3, cha: 1 },
        damageImmunities: ["poison", "psychic"],
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["blindsight 60 ft. (blind beyond this radius)", "passive Perception 6"],
        languages: [],
        cr: "1",
        xp: 200,
        traits: [
            {
                name: "Antimagic Susceptibility",
                description: "The armor is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
            },
            {
                name: "False Appearance",
                description: "While the armor remains motionless, it is indistinguishable from a normal suit of armor."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The armor makes two melee attacks."
            },
            {
                name: "Slam",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage."
            }
        ]
    },
    "shield-guardian": {
        name: "Shield Guardian",
        size: "Large",
        type: "Construct",
        alignment: "unaligned",
        ac: 17,
        acType: "natural armor",
        hp: 142,
        hitDice: "15d10+60",
        speed: { walk: 30 },
        abilities: { str: 18, dex: 8, con: 18, int: 7, wis: 10, cha: 3 },
        senses: ["blindsight 10 ft.", "darkvision 60 ft.", "passive Perception 10"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned"],
        languages: ["understands commands given in any language but can't speak"],
        cr: "7",
        xp: 2900,
        traits: [
            {
                name: "Bound",
                description: "The shield guardian is magically bound to an amulet. As long as the guardian and its amulet are on the same plane of existence, the amulet's wearer can telepathically call the guardian to travel to it, and the guardian knows the distance and direction to the amulet."
            },
            {
                name: "Regeneration",
                description: "The shield guardian regains 10 hit points at the start of its turn if it has at least 1 hit point."
            },
            {
                name: "Spell Storing",
                description: "A spellcaster who wears the shield guardian's amulet can cause the guardian to store one spell of 4th level or lower. While stored, the spell has no effect. When commanded by the wearer or when a situation predefined by the spellcaster arises, the guardian casts the stored spell."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The guardian makes two fist attacks."
            },
            {
                name: "Fist",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage."
            }
        ],
        reactions: [
            {
                name: "Shield",
                description: "When a creature makes an attack against the wearer of the guardian's amulet, the guardian grants a +2 bonus to the wearer's AC if the guardian is within 5 feet of the wearer."
            }
        ]
    },

    // Giants
    "ogre": {
        name: "Ogre",
        size: "Large",
        type: "Giant",
        alignment: "chaotic evil",
        ac: 11,
        acType: "hide armor",
        hp: 59,
        hitDice: "7d10+21",
        speed: { walk: 40 },
        abilities: { str: 19, dex: 8, con: 16, int: 5, wis: 7, cha: 7 },
        senses: ["darkvision 60 ft.", "passive Perception 8"],
        languages: ["Common", "Giant"],
        cr: "2",
        xp: 450,
        actions: [
            {
                name: "Greatclub",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage."
            },
            {
                name: "Javelin",
                description: "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 11 (2d6 + 4) piercing damage."
            }
        ]
    },
    "troll": {
        name: "Troll",
        size: "Large",
        type: "Giant",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 84,
        hitDice: "8d10+40",
        speed: { walk: 30 },
        abilities: { str: 18, dex: 13, con: 20, int: 7, wis: 9, cha: 7 },
        skills: { perception: 2 },
        senses: ["darkvision 60 ft.", "passive Perception 12"],
        languages: ["Giant"],
        cr: "5",
        xp: 1800,
        traits: [
            {
                name: "Keen Smell",
                description: "The troll has advantage on Wisdom (Perception) checks that rely on smell."
            },
            {
                name: "Regeneration",
                description: "The troll regains 10 hit points at the start of its turn. If the troll takes acid or fire damage, this trait doesn't function at the start of the troll's next turn. The troll dies only if it starts its turn with 0 hit points and doesn't regenerate."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The troll makes three attacks: one with its bite and two with its claws."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) piercing damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
            }
        ]
    },

    // Oozes
    "gelatinous-cube": {
        name: "Gelatinous Cube",
        size: "Large",
        type: "Ooze",
        alignment: "unaligned",
        ac: 6,
        hp: 84,
        hitDice: "8d10+40",
        speed: { walk: 15 },
        abilities: { str: 14, dex: 3, con: 20, int: 1, wis: 6, cha: 1 },
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "prone"],
        senses: ["blindsight 60 ft. (blind beyond this radius)", "passive Perception 8"],
        languages: [],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Ooze Cube",
                description: "The cube takes up its entire space. Other creatures can enter the space, but a creature that does so is subjected to the cube's Engulf and has disadvantage on the saving throw. Creatures inside the cube can be seen but have total cover."
            },
            {
                name: "Transparent",
                description: "Even when the cube is in plain sight, it takes a successful DC 15 Wisdom (Perception) check to spot a cube that has neither moved nor attacked. A creature that tries to enter the cube's space while unaware of the cube is surprised by the cube."
            }
        ],
        actions: [
            {
                name: "Pseudopod",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) acid damage."
            },
            {
                name: "Engulf",
                description: "The cube moves up to its speed. While doing so, it can enter Large or smaller creatures' spaces. Whenever the cube enters a creature's space, the creature must make a DC 12 Dexterity saving throw. On a successful save, the creature can choose to be pushed 5 feet back or to the side of the cube. A creature that chooses not to be pushed suffers the consequences of a failed saving throw. On a failed save, the cube enters the creature's space, and the creature takes 10 (3d6) acid damage and is engulfed."
            }
        ]
    },

    // Celestials
    "deva": {
        name: "Deva",
        size: "Medium",
        type: "Celestial",
        alignment: "lawful good",
        ac: 17,
        acType: "natural armor",
        hp: 136,
        hitDice: "16d8+64",
        speed: { walk: 30, fly: 90 },
        abilities: { str: 18, dex: 18, con: 18, int: 17, wis: 20, cha: 20 },
        savingThrows: { wis: 9, cha: 9 },
        skills: { insight: 9, perception: 9 },
        damageResistances: ["radiant", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "exhaustion", "frightened"],
        senses: ["darkvision 120 ft.", "passive Perception 19"],
        languages: ["all", "telepathy 120 ft."],
        cr: "10",
        xp: 5900,
        traits: [
            {
                name: "Angelic Weapons",
                description: "The deva's weapon attacks are magical. When the deva hits with any weapon, the weapon deals an extra 4d8 radiant damage (included in the attack)."
            },
            {
                name: "Magic Resistance",
                description: "The deva has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Innate Spellcasting",
                description: "The deva's spellcasting ability is Charisma (spell save DC 17). The deva can innately cast the following spells, requiring only verbal components: At will: detect evil and good. 1/day each: commune, raise dead."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The deva makes two melee attacks."
            },
            {
                name: "Mace",
                description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage plus 18 (4d8) radiant damage."
            },
            {
                name: "Healing Touch (3/Day)",
                description: "The deva touches another creature. The target magically regains 20 (4d8 + 2) hit points and is freed from any curse, disease, poison, blindness, or deafness."
            },
            {
                name: "Change Shape",
                description: "The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form."
            }
        ]
    },

    // Fey
    "sprite": {
        name: "Sprite",
        size: "Tiny",
        type: "Fey",
        alignment: "neutral good",
        ac: 15,
        acType: "leather armor",
        hp: 2,
        hitDice: "1d4",
        speed: { walk: 10, fly: 40 },
        abilities: { str: 3, dex: 18, con: 10, int: 14, wis: 13, cha: 11 },
        skills: { perception: 3, stealth: 8 },
        senses: ["passive Perception 13"],
        languages: ["Common", "Elvish", "Sylvan"],
        cr: "1/4",
        xp: 50,
        actions: [
            {
                name: "Longsword",
                description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 slashing damage."
            },
            {
                name: "Shortbow",
                description: "Ranged Weapon Attack: +6 to hit, range 40/160 ft., one target. Hit: 1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or become poisoned for 1 minute. If its saving throw result is 5 or lower, the poisoned target falls unconscious for the same duration, or until it takes damage or another creature takes an action to shake it awake."
            },
            {
                name: "Heart Sight",
                description: "The sprite touches a creature and magically knows the creature's current emotional state. If the target fails a DC 10 Charisma saving throw, the sprite also knows the creature's alignment."
            },
            {
                name: "Invisibility",
                description: "The sprite magically turns invisible until it attacks or casts a spell, or until its concentration ends (as if concentrating on a spell)."
            }
        ]
    },
    "green-hag": {
        name: "Green Hag",
        size: "Medium",
        type: "Fey",
        alignment: "neutral evil",
        ac: 17,
        acType: "natural armor",
        hp: 82,
        hitDice: "11d8+33",
        speed: { walk: 30 },
        abilities: { str: 18, dex: 12, con: 16, int: 13, wis: 14, cha: 14 },
        skills: { arcana: 3, deception: 4, perception: 4, stealth: 3 },
        senses: ["darkvision 60 ft.", "passive Perception 14"],
        languages: ["Common", "Draconic", "Sylvan"],
        cr: "3",
        xp: 700,
        traits: [
            {
                name: "Amphibious",
                description: "The hag can breathe air and water."
            },
            {
                name: "Innate Spellcasting",
                description: "The hag's innate spellcasting ability is Charisma (spell save DC 12). She can innately cast the following spells, requiring no material components: At will: dancing lights, minor illusion, vicious mockery."
            },
            {
                name: "Mimicry",
                description: "The hag can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight) check."
            }
        ],
        actions: [
            {
                name: "Claws",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage."
            },
            {
                name: "Illusory Appearance",
                description: "The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like another creature of her general size and humanoid shape. The illusion ends if the hag takes a bonus action to end it or if she dies."
            },
            {
                name: "Invisible Passage",
                description: "The hag magically turns invisible until she attacks or casts a spell, or until her concentration ends (as if concentrating on a spell). While invisible, she leaves no physical evidence of her passage, so she can be tracked only by magic."
            }
        ]
    },

    // Plants
    "treant": {
        name: "Treant",
        size: "Huge",
        type: "Plant",
        alignment: "chaotic good",
        ac: 16,
        acType: "natural armor",
        hp: 138,
        hitDice: "12d12+60",
        speed: { walk: 30 },
        abilities: { str: 23, dex: 8, con: 21, int: 12, wis: 16, cha: 12 },
        damageVulnerabilities: ["fire"],
        damageResistances: ["bludgeoning", "piercing"],
        senses: ["passive Perception 13"],
        languages: ["Common", "Druidic", "Elvish", "Sylvan"],
        cr: "9",
        xp: 5000,
        traits: [
            {
                name: "False Appearance",
                description: "While the treant remains motionless, it is indistinguishable from a normal tree."
            },
            {
                name: "Siege Monster",
                description: "The treant deals double damage to objects and structures."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The treant makes two slam attacks."
            },
            {
                name: "Slam",
                description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 16 (3d6 + 6) bludgeoning damage."
            },
            {
                name: "Rock",
                description: "Ranged Weapon Attack: +10 to hit, range 60/180 ft., one target. Hit: 28 (4d10 + 6) bludgeoning damage."
            },
            {
                name: "Animate Trees (1/Day)",
                description: "The treant magically animates one or two trees it can see within 60 feet of it. These trees have the same statistics as a treant, except they have Intelligence and Charisma scores of 1, they can't speak, and they have only the Slam action option."
            }
        ]
    },

    // ==========================================
    // CHROMATIC DRAGONS
    // ==========================================

    // BLACK DRAGONS
    "black-dragon-wyrmling": {
        name: "Black Dragon Wyrmling",
        size: "Medium",
        type: "Dragon",
        alignment: "chaotic evil",
        ac: 17,
        acType: "natural armor",
        hp: 33,
        hitDice: "6d8+6",
        speed: { walk: 30, fly: 60, swim: 30 },
        abilities: { str: 15, dex: 14, con: 13, int: 10, wis: 11, cha: 13 },
        savingThrows: { dex: 4, con: 3, wis: 2, cha: 3 },
        skills: { perception: 4, stealth: 4 },
        damageImmunities: ["acid"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft.", "passive Perception 14"],
        languages: ["Draconic"],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Amphibious",
                description: "The dragon can breathe air and water."
            }
        ],
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 2 (1d4) acid damage."
            },
            {
                name: "Acid Breath (Recharge 5-6)",
                description: "The dragon exhales acid in a 15-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 22 (5d8) acid damage on a failed save, or half as much damage on a successful one."
            }
        ],
        lairActions: "Black dragon wyrmlings do not typically have lairs with lair actions.",
        regionalEffects: "Black dragon wyrmlings do not typically cause regional effects."
    },
    "young-black-dragon": {
        name: "Young Black Dragon",
        size: "Large",
        type: "Dragon",
        alignment: "chaotic evil",
        ac: 18,
        acType: "natural armor",
        hp: 127,
        hitDice: "15d10+45",
        speed: { walk: 40, fly: 80, swim: 40 },
        abilities: { str: 19, dex: 14, con: 17, int: 12, wis: 11, cha: 15 },
        savingThrows: { dex: 5, con: 6, wis: 3, cha: 5 },
        skills: { perception: 6, stealth: 5 },
        damageImmunities: ["acid"],
        senses: ["blindsight 30 ft.", "darkvision 120 ft.", "passive Perception 16"],
        languages: ["Common", "Draconic"],
        cr: "7",
        xp: 2900,
        traits: [
            {
                name: "Amphibious",
                description: "The dragon can breathe air and water."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage plus 4 (1d8) acid damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
            },
            {
                name: "Acid Breath (Recharge 5-6)",
                description: "The dragon exhales acid in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 49 (11d8) acid damage on a failed save, or half as much damage on a successful one."
            }
        ],
        lairActions: "Young black dragons do not typically have lairs with lair actions.",
        regionalEffects: "Young black dragons do not typically cause regional effects."
    },
    "adult-black-dragon-full": {
        name: "Adult Black Dragon",
        size: "Huge",
        type: "Dragon",
        alignment: "chaotic evil",
        ac: 19,
        acType: "natural armor",
        hp: 195,
        hitDice: "17d12+85",
        speed: { walk: 40, fly: 80, swim: 40 },
        abilities: { str: 23, dex: 14, con: 21, int: 14, wis: 13, cha: 17 },
        savingThrows: { dex: 7, con: 10, wis: 6, cha: 8 },
        skills: { perception: 11, stealth: 7 },
        damageImmunities: ["acid"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 21"],
        languages: ["Common", "Draconic"],
        cr: "14",
        xp: 11500,
        traits: [
            {
                name: "Amphibious",
                description: "The dragon can breathe air and water."
            },
            {
                name: "Legendary Resistance (3/Day)",
                description: "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) acid damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
            },
            {
                name: "Tail",
                description: "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage."
            },
            {
                name: "Frightful Presence",
                description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                name: "Acid Breath (Recharge 5-6)",
                description: "The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one."
            }
        ],
        legendaryActions: [
            {
                name: "Legendary Actions",
                description: "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
            },
            {
                name: "Detect",
                description: "The dragon makes a Wisdom (Perception) check."
            },
            {
                name: "Tail Attack",
                description: "The dragon makes a tail attack."
            },
            {
                name: "Wing Attack (Costs 2 Actions)",
                description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        lairActions: "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row: (1) Pools of water within 120 feet surge outward, each creature on the ground within 20 feet of a pool must succeed on a DC 15 Strength saving throw or be pulled up to 20 feet into the water and knocked prone. (2) A cloud of swarming insects fills a 20-foot-radius sphere centered on a point the dragon chooses within 120 feet of it. The cloud spreads around corners and remains until the dragon dismisses it or uses this lair action again. The cloud is lightly obscured and creatures in it are blinded. (3) Magical darkness spreads from a point the dragon chooses within 60 feet of it, filling a 15-foot-radius sphere until the dragon dismisses it or uses this lair action again.",
        regionalEffects: "The region containing a legendary black dragon's lair is warped by the dragon's magic, creating one or more of the following effects: (1) The land within 6 miles of the lair takes twice as long as normal to traverse, since the plants grow thick and twisted, and the swamps are bytes deep with murky water. (2) Water sources within 1 mile of the lair are supernaturally fouled. Enemies of the dragon that drink such water regurgitate it within minutes. (3) Fog lightly obscures the land within 6 miles of the lair."
    },
    "ancient-black-dragon": {
        name: "Ancient Black Dragon",
        size: "Gargantuan",
        type: "Dragon",
        alignment: "chaotic evil",
        ac: 22,
        acType: "natural armor",
        hp: 367,
        hitDice: "21d20+147",
        speed: { walk: 40, fly: 80, swim: 40 },
        abilities: { str: 27, dex: 14, con: 25, int: 16, wis: 15, cha: 19 },
        savingThrows: { dex: 9, con: 14, wis: 9, cha: 11 },
        skills: { perception: 16, stealth: 9 },
        damageImmunities: ["acid"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 26"],
        languages: ["Common", "Draconic"],
        cr: "21",
        xp: 33000,
        traits: [
            {
                name: "Amphibious",
                description: "The dragon can breathe air and water."
            },
            {
                name: "Legendary Resistance (3/Day)",
                description: "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 9 (2d8) acid damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
            },
            {
                name: "Tail",
                description: "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
            },
            {
                name: "Frightful Presence",
                description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                name: "Acid Breath (Recharge 5-6)",
                description: "The dragon exhales acid in a 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 67 (15d8) acid damage on a failed save, or half as much damage on a successful one."
            }
        ],
        legendaryActions: [
            {
                name: "Legendary Actions",
                description: "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
            },
            {
                name: "Detect",
                description: "The dragon makes a Wisdom (Perception) check."
            },
            {
                name: "Tail Attack",
                description: "The dragon makes a tail attack."
            },
            {
                name: "Wing Attack (Costs 2 Actions)",
                description: "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        lairActions: "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row: (1) Pools of water within 120 feet surge outward, each creature on the ground within 20 feet of a pool must succeed on a DC 15 Strength saving throw or be pulled up to 20 feet into the water and knocked prone. (2) A cloud of swarming insects fills a 20-foot-radius sphere centered on a point the dragon chooses within 120 feet of it. The cloud spreads around corners and remains until the dragon dismisses it or uses this lair action again. The cloud is lightly obscured and creatures in it are blinded. (3) Magical darkness spreads from a point the dragon chooses within 60 feet of it, filling a 15-foot-radius sphere until the dragon dismisses it or uses this lair action again.",
        regionalEffects: "The region containing a legendary black dragon's lair is warped by the dragon's magic, creating one or more of the following effects: (1) The land within 6 miles of the lair takes twice as long as normal to traverse, since the plants grow thick and twisted, and the swamps are deep with murky water. (2) Water sources within 1 mile of the lair are supernaturally fouled. Enemies of the dragon that drink such water regurgitate it within minutes. (3) Fog lightly obscures the land within 6 miles of the lair."
    },

    // BLUE DRAGONS
    "blue-dragon-wyrmling": {
        name: "Blue Dragon Wyrmling",
        size: "Medium",
        type: "Dragon",
        alignment: "lawful evil",
        ac: 17,
        acType: "natural armor",
        hp: 52,
        hitDice: "8d8+16",
        speed: { walk: 30, burrow: 15, fly: 60 },
        abilities: { str: 17, dex: 10, con: 15, int: 12, wis: 11, cha: 15 },
        savingThrows: { dex: 2, con: 4, wis: 2, cha: 4 },
        skills: { perception: 4, stealth: 2 },
        damageImmunities: ["lightning"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft.", "passive Perception 14"],
        languages: ["Draconic"],
        cr: "3",
        xp: 700,
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage plus 3 (1d6) lightning damage."
            },
            {
                name: "Lightning Breath (Recharge 5-6)",
                description: "The dragon exhales lightning in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one."
            }
        ],
        lairActions: "Blue dragon wyrmlings do not typically have lairs with lair actions.",
        regionalEffects: "Blue dragon wyrmlings do not typically cause regional effects."
    },
    "young-blue-dragon": {
        name: "Young Blue Dragon",
        size: "Large",
        type: "Dragon",
        alignment: "lawful evil",
        ac: 18,
        acType: "natural armor",
        hp: 152,
        hitDice: "16d10+64",
        speed: { walk: 40, burrow: 20, fly: 80 },
        abilities: { str: 21, dex: 10, con: 19, int: 14, wis: 13, cha: 17 },
        savingThrows: { dex: 4, con: 8, wis: 5, cha: 7 },
        skills: { perception: 9, stealth: 4 },
        damageImmunities: ["lightning"],
        senses: ["blindsight 30 ft.", "darkvision 120 ft.", "passive Perception 19"],
        languages: ["Common", "Draconic"],
        cr: "9",
        xp: 5000,
        actions: [
            {
                name: "Multiattack",
                description: "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) piercing damage plus 5 (1d10) lightning damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage."
            },
            {
                name: "Lightning Breath (Recharge 5-6)",
                description: "The dragon exhales lightning in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 55 (10d10) lightning damage on a failed save, or half as much damage on a successful one."
            }
        ],
        lairActions: "Young blue dragons do not typically have lairs with lair actions.",
        regionalEffects: "Young blue dragons do not typically cause regional effects."
    },
    "adult-blue-dragon": {
        name: "Adult Blue Dragon",
        size: "Huge",
        type: "Dragon",
        alignment: "lawful evil",
        ac: 19,
        acType: "natural armor",
        hp: 225,
        hitDice: "18d12+108",
        speed: { walk: 40, burrow: 30, fly: 80 },
        abilities: { str: 25, dex: 10, con: 23, int: 16, wis: 15, cha: 19 },
        savingThrows: { dex: 5, con: 11, wis: 7, cha: 9 },
        skills: { perception: 12, stealth: 5 },
        damageImmunities: ["lightning"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 22"],
        languages: ["Common", "Draconic"],
        cr: "16",
        xp: 15000,
        traits: [
            {
                name: "Legendary Resistance (3/Day)",
                description: "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) piercing damage plus 5 (1d10) lightning damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage."
            },
            {
                name: "Tail",
                description: "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8 + 7) bludgeoning damage."
            },
            {
                name: "Frightful Presence",
                description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                name: "Lightning Breath (Recharge 5-6)",
                description: "The dragon exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one."
            }
        ],
        legendaryActions: [
            {
                name: "Legendary Actions",
                description: "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
            },
            {
                name: "Detect",
                description: "The dragon makes a Wisdom (Perception) check."
            },
            {
                name: "Tail Attack",
                description: "The dragon makes a tail attack."
            },
            {
                name: "Wing Attack (Costs 2 Actions)",
                description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        lairActions: "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row: (1) Part of the ceiling collapses above one creature the dragon can see within 120 feet of it. The creature must succeed on a DC 15 Dexterity saving throw or take 10 (3d6) bludgeoning damage and be knocked prone and buried. The buried target is restrained and unable to breathe or stand up. A creature can use an action to make a DC 10 Strength check, ending the buried state on a success. (2) A cloud of sand swirls about in a 20-foot-radius sphere centered on a point the dragon can see within 120 feet of it. The cloud spreads around corners. Each creature in the cloud must succeed on a DC 15 Constitution saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. (3) Lightning arcs, forming a 5-foot-wide line between two of the lair's solid surfaces that the dragon can see. They must be within 120 feet of the dragon and 120 feet of each other. Each creature in that line must succeed on a DC 15 Dexterity saving throw or take 10 (3d6) lightning damage.",
        regionalEffects: "The region containing a legendary blue dragon's lair is warped by the dragon's magic, creating one or more of the following effects: (1) Thunderstorms rage within 6 miles of the lair. (2) Dust devils scour the land within 6 miles of the lair. A dust devil has the statistics of an air elemental, but it can't fly, has a speed of 50 feet, and has an Intelligence and Charisma of 1 (-5). (3) Hidden sinkholes form in and around the dragon's lair. A sinkhole can be spotted from a safe distance with a successful DC 20 Wisdom (Perception) check; otherwise, the first creature to step on the thin crust covering the sinkhole must succeed on a DC 15 Dexterity saving throw or fall 1d6 x 10 feet into the sinkhole."
    },
    "ancient-blue-dragon": {
        name: "Ancient Blue Dragon",
        size: "Gargantuan",
        type: "Dragon",
        alignment: "lawful evil",
        ac: 22,
        acType: "natural armor",
        hp: 481,
        hitDice: "26d20+208",
        speed: { walk: 40, burrow: 40, fly: 80 },
        abilities: { str: 29, dex: 10, con: 27, int: 18, wis: 17, cha: 21 },
        savingThrows: { dex: 7, con: 15, wis: 10, cha: 12 },
        skills: { perception: 17, stealth: 7 },
        damageImmunities: ["lightning"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 27"],
        languages: ["Common", "Draconic"],
        cr: "23",
        xp: 50000,
        traits: [
            {
                name: "Legendary Resistance (3/Day)",
                description: "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 20 (2d10 + 9) piercing damage plus 11 (2d10) lightning damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 16 (2d6 + 9) slashing damage."
            },
            {
                name: "Tail",
                description: "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 18 (2d8 + 9) bludgeoning damage."
            },
            {
                name: "Frightful Presence",
                description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                name: "Lightning Breath (Recharge 5-6)",
                description: "The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one."
            }
        ],
        legendaryActions: [
            {
                name: "Legendary Actions",
                description: "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
            },
            {
                name: "Detect",
                description: "The dragon makes a Wisdom (Perception) check."
            },
            {
                name: "Tail Attack",
                description: "The dragon makes a tail attack."
            },
            {
                name: "Wing Attack (Costs 2 Actions)",
                description: "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6 + 9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        lairActions: "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row: (1) Part of the ceiling collapses above one creature the dragon can see within 120 feet of it. The creature must succeed on a DC 15 Dexterity saving throw or take 10 (3d6) bludgeoning damage and be knocked prone and buried. The buried target is restrained and unable to breathe or stand up. A creature can use an action to make a DC 10 Strength check, ending the buried state on a success. (2) A cloud of sand swirls about in a 20-foot-radius sphere centered on a point the dragon can see within 120 feet of it. The cloud spreads around corners. Each creature in the cloud must succeed on a DC 15 Constitution saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. (3) Lightning arcs, forming a 5-foot-wide line between two of the lair's solid surfaces that the dragon can see. They must be within 120 feet of the dragon and 120 feet of each other. Each creature in that line must succeed on a DC 15 Dexterity saving throw or take 10 (3d6) lightning damage.",
        regionalEffects: "The region containing a legendary blue dragon's lair is warped by the dragon's magic, creating one or more of the following effects: (1) Thunderstorms rage within 6 miles of the lair. (2) Dust devils scour the land within 6 miles of the lair. A dust devil has the statistics of an air elemental, but it can't fly, has a speed of 50 feet, and has an Intelligence and Charisma of 1 (-5). (3) Hidden sinkholes form in and around the dragon's lair. A sinkhole can be spotted from a safe distance with a successful DC 20 Wisdom (Perception) check; otherwise, the first creature to step on the thin crust covering the sinkhole must succeed on a DC 15 Dexterity saving throw or fall 1d6 x 10 feet into the sinkhole."
    },

    // GREEN DRAGONS
    "green-dragon-wyrmling": {
        name: "Green Dragon Wyrmling",
        size: "Medium",
        type: "Dragon",
        alignment: "lawful evil",
        ac: 17,
        acType: "natural armor",
        hp: 38,
        hitDice: "7d8+7",
        speed: { walk: 30, fly: 60, swim: 30 },
        abilities: { str: 15, dex: 12, con: 13, int: 14, wis: 11, cha: 13 },
        savingThrows: { dex: 3, con: 3, wis: 2, cha: 3 },
        skills: { perception: 4, stealth: 3 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft.", "passive Perception 14"],
        languages: ["Draconic"],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Amphibious",
                description: "The dragon can breathe air and water."
            }
        ],
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 3 (1d6) poison damage."
            },
            {
                name: "Poison Breath (Recharge 5-6)",
                description: "The dragon exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 11 Constitution saving throw, taking 21 (6d6) poison damage on a failed save, or half as much damage on a successful one."
            }
        ],
        lairActions: "Green dragon wyrmlings do not typically have lairs with lair actions.",
        regionalEffects: "Green dragon wyrmlings do not typically cause regional effects."
    },
    "young-green-dragon": {
        name: "Young Green Dragon",
        size: "Large",
        type: "Dragon",
        alignment: "lawful evil",
        ac: 18,
        acType: "natural armor",
        hp: 136,
        hitDice: "16d10+48",
        speed: { walk: 40, fly: 80, swim: 40 },
        abilities: { str: 19, dex: 12, con: 17, int: 16, wis: 13, cha: 15 },
        savingThrows: { dex: 4, con: 6, wis: 4, cha: 5 },
        skills: { deception: 5, perception: 7, stealth: 4 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 30 ft.", "darkvision 120 ft.", "passive Perception 17"],
        languages: ["Common", "Draconic"],
        cr: "8",
        xp: 3900,
        traits: [
            {
                name: "Amphibious",
                description: "The dragon can breathe air and water."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage plus 7 (2d6) poison damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
            },
            {
                name: "Poison Breath (Recharge 5-6)",
                description: "The dragon exhales poisonous gas in a 30-foot cone. Each creature in that area must make a DC 14 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one."
            }
        ],
        lairActions: "Young green dragons do not typically have lairs with lair actions.",
        regionalEffects: "Young green dragons do not typically cause regional effects."
    },
    "adult-green-dragon": {
        name: "Adult Green Dragon",
        size: "Huge",
        type: "Dragon",
        alignment: "lawful evil",
        ac: 19,
        acType: "natural armor",
        hp: 207,
        hitDice: "18d12+90",
        speed: { walk: 40, fly: 80, swim: 40 },
        abilities: { str: 23, dex: 12, con: 21, int: 18, wis: 15, cha: 17 },
        savingThrows: { dex: 6, con: 10, wis: 7, cha: 8 },
        skills: { deception: 8, insight: 7, perception: 12, persuasion: 8, stealth: 6 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 22"],
        languages: ["Common", "Draconic"],
        cr: "15",
        xp: 13000,
        traits: [
            {
                name: "Amphibious",
                description: "The dragon can breathe air and water."
            },
            {
                name: "Legendary Resistance (3/Day)",
                description: "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 7 (2d6) poison damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
            },
            {
                name: "Tail",
                description: "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage."
            },
            {
                name: "Frightful Presence",
                description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                name: "Poison Breath (Recharge 5-6)",
                description: "The dragon exhales poisonous gas in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 56 (16d6) poison damage on a failed save, or half as much damage on a successful one."
            }
        ],
        legendaryActions: [
            {
                name: "Legendary Actions",
                description: "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
            },
            {
                name: "Detect",
                description: "The dragon makes a Wisdom (Perception) check."
            },
            {
                name: "Tail Attack",
                description: "The dragon makes a tail attack."
            },
            {
                name: "Wing Attack (Costs 2 Actions)",
                description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        lairActions: "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row: (1) Grasping roots and vines erupt in a 20-foot radius centered on a point on the ground that the dragon can see within 120 feet of it. That area becomes difficult terrain, and each creature there must succeed on a DC 15 Strength saving throw or be restrained by the roots and vines. A creature can be freed if it or another creature takes an action to make a DC 15 Strength check and succeeds. The roots and vines wilt away when the dragon uses this lair action again or when the dragon dies. (2) A wall of tangled brush bristling with thorns springs into existence on a solid surface within 120 feet of the dragon. The wall is up to 60 feet long, 10 feet high, and 5 feet thick, and it blocks line of sight. When the wall appears, each creature in its area must make a DC 15 Dexterity saving throw. A creature that fails the save takes 18 (4d8) piercing damage and is pushed 5 feet out of the wall's space, appearing on whichever side of the wall it wants. A creature can move through the wall, albeit slowly and painfully. For every 1 foot a creature travels through the wall, it must spend 4 feet of movement. Furthermore, a creature in the wall's space must make a DC 15 Dexterity saving throw once each round it's in contact with the wall, taking 18 (4d8) piercing damage on a failed save, or half as much damage on a successful one. Each 10-foot section of wall has AC 5, 15 hit points, vulnerability to fire damage, resistance to bludgeoning and piercing damage, and immunity to psychic damage. The wall sinks back into the ground when the dragon uses this lair action again or when the dragon dies. (3) Magical fog billows around one creature the dragon can see within 120 feet of it. The creature must succeed on a DC 15 Wisdom saving throw or be charmed by the dragon until initiative count 20 on the next round.",
        regionalEffects: "The region containing a legendary green dragon's lair is warped by the dragon's magic, creating one or more of the following effects: (1) Thickets form labyrinthine passages within 1 mile of the dragon's lair. The thickets act as 10-foot-high, 10-foot-thick walls that block line of sight. Creatures can move through the thickets, with every 1 foot a creature moves costing it 4 feet of movement. A creature in the thickets must make a DC 15 Dexterity saving throw once each round it's in contact with the thickets or take 3 (1d6) piercing damage from thorns. Each 10-foot-cube of thickets has AC 5, 30 hit points, resistance to bludgeoning and piercing damage, vulnerability to fire damage, and immunity to psychic and thunder damage. (2) Within 1 mile of its lair, the dragon leaves no physical evidence of its passage unless it wishes to. Tracking it there is impossible except by magical means. In addition, it ignores movement impediments and damage from plants in this area that are neither combatants nor combatant-controlled. (3) Rodents and birds within 1 mile of the dragon's lair serve as the dragon's eyes and ears. Deer and other large game are strangely absent, hinting at the presence of an unnaturally hungry predator."
    },
    "ancient-green-dragon": {
        name: "Ancient Green Dragon",
        size: "Gargantuan",
        type: "Dragon",
        alignment: "lawful evil",
        ac: 21,
        acType: "natural armor",
        hp: 385,
        hitDice: "22d20+154",
        speed: { walk: 40, fly: 80, swim: 40 },
        abilities: { str: 27, dex: 12, con: 25, int: 20, wis: 17, cha: 19 },
        savingThrows: { dex: 8, con: 14, wis: 10, cha: 11 },
        skills: { deception: 11, insight: 10, perception: 17, persuasion: 11, stealth: 8 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 27"],
        languages: ["Common", "Draconic"],
        cr: "22",
        xp: 41000,
        traits: [
            {
                name: "Amphibious",
                description: "The dragon can breathe air and water."
            },
            {
                name: "Legendary Resistance (3/Day)",
                description: "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 10 (3d6) poison damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 22 (4d6 + 8) slashing damage."
            },
            {
                name: "Tail",
                description: "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
            },
            {
                name: "Frightful Presence",
                description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                name: "Poison Breath (Recharge 5-6)",
                description: "The dragon exhales poisonous gas in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 77 (22d6) poison damage on a failed save, or half as much damage on a successful one."
            }
        ],
        legendaryActions: [
            {
                name: "Legendary Actions",
                description: "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
            },
            {
                name: "Detect",
                description: "The dragon makes a Wisdom (Perception) check."
            },
            {
                name: "Tail Attack",
                description: "The dragon makes a tail attack."
            },
            {
                name: "Wing Attack (Costs 2 Actions)",
                description: "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        lairActions: "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row: (1) Grasping roots and vines erupt in a 20-foot radius centered on a point on the ground that the dragon can see within 120 feet of it. That area becomes difficult terrain, and each creature there must succeed on a DC 15 Strength saving throw or be restrained by the roots and vines. A creature can be freed if it or another creature takes an action to make a DC 15 Strength check and succeeds. The roots and vines wilt away when the dragon uses this lair action again or when the dragon dies. (2) A wall of tangled brush bristling with thorns springs into existence on a solid surface within 120 feet of the dragon. The wall is up to 60 feet long, 10 feet high, and 5 feet thick, and it blocks line of sight. When the wall appears, each creature in its area must make a DC 15 Dexterity saving throw. A creature that fails the save takes 18 (4d8) piercing damage and is pushed 5 feet out of the wall's space, appearing on whichever side of the wall it wants. A creature can move through the wall, albeit slowly and painfully. For every 1 foot a creature travels through the wall, it must spend 4 feet of movement. Furthermore, a creature in the wall's space must make a DC 15 Dexterity saving throw once each round it's in contact with the wall, taking 18 (4d8) piercing damage on a failed save, or half as much damage on a successful one. Each 10-foot section of wall has AC 5, 15 hit points, vulnerability to fire damage, resistance to bludgeoning and piercing damage, and immunity to psychic damage. The wall sinks back into the ground when the dragon uses this lair action again or when the dragon dies. (3) Magical fog billows around one creature the dragon can see within 120 feet of it. The creature must succeed on a DC 15 Wisdom saving throw or be charmed by the dragon until initiative count 20 on the next round.",
        regionalEffects: "The region containing a legendary green dragon's lair is warped by the dragon's magic, creating one or more of the following effects: (1) Thickets form labyrinthine passages within 1 mile of the dragon's lair. The thickets act as 10-foot-high, 10-foot-thick walls that block line of sight. Creatures can move through the thickets, with every 1 foot a creature moves costing it 4 feet of movement. A creature in the thickets must make a DC 15 Dexterity saving throw once each round it's in contact with the thickets or take 3 (1d6) piercing damage from thorns. Each 10-foot-cube of thickets has AC 5, 30 hit points, resistance to bludgeoning and piercing damage, vulnerability to fire damage, and immunity to psychic and thunder damage. (2) Within 1 mile of its lair, the dragon leaves no physical evidence of its passage unless it wishes to. Tracking it there is impossible except by magical means. In addition, it ignores movement impediments and damage from plants in this area that are neither combatants nor combatant-controlled. (3) Rodents and birds within 1 mile of the dragon's lair serve as the dragon's eyes and ears. Deer and other large game are strangely absent, hinting at the presence of an unnaturally hungry predator."
    },

    // WHITE DRAGONS
    "white-dragon-wyrmling": {
        name: "White Dragon Wyrmling",
        size: "Medium",
        type: "Dragon",
        alignment: "chaotic evil",
        ac: 16,
        acType: "natural armor",
        hp: 32,
        hitDice: "5d8+10",
        speed: { walk: 30, burrow: 15, fly: 60, swim: 30 },
        abilities: { str: 14, dex: 10, con: 14, int: 5, wis: 10, cha: 11 },
        savingThrows: { dex: 2, con: 4, wis: 2, cha: 2 },
        skills: { perception: 4, stealth: 2 },
        damageImmunities: ["cold"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft.", "passive Perception 14"],
        languages: ["Draconic"],
        cr: "2",
        xp: 450,
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 2 (1d4) cold damage."
            },
            {
                name: "Cold Breath (Recharge 5-6)",
                description: "The dragon exhales an icy blast in a 15-foot cone. Each creature in that area must make a DC 12 Constitution saving throw, taking 22 (5d8) cold damage on a failed save, or half as much damage on a successful one."
            }
        ],
        lairActions: "White dragon wyrmlings do not typically have lairs with lair actions.",
        regionalEffects: "White dragon wyrmlings do not typically cause regional effects."
    },
    "young-white-dragon": {
        name: "Young White Dragon",
        size: "Large",
        type: "Dragon",
        alignment: "chaotic evil",
        ac: 17,
        acType: "natural armor",
        hp: 133,
        hitDice: "14d10+56",
        speed: { walk: 40, burrow: 20, fly: 80, swim: 40 },
        abilities: { str: 18, dex: 10, con: 18, int: 6, wis: 11, cha: 12 },
        savingThrows: { dex: 3, con: 7, wis: 3, cha: 4 },
        skills: { perception: 6, stealth: 3 },
        damageImmunities: ["cold"],
        senses: ["blindsight 30 ft.", "darkvision 120 ft.", "passive Perception 16"],
        languages: ["Common", "Draconic"],
        cr: "6",
        xp: 2300,
        traits: [
            {
                name: "Ice Walk",
                description: "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage plus 4 (1d8) cold damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
            },
            {
                name: "Cold Breath (Recharge 5-6)",
                description: "The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a DC 15 Constitution saving throw, taking 45 (10d8) cold damage on a failed save, or half as much damage on a successful one."
            }
        ],
        lairActions: "Young white dragons do not typically have lairs with lair actions.",
        regionalEffects: "Young white dragons do not typically cause regional effects."
    },
    "adult-white-dragon": {
        name: "Adult White Dragon",
        size: "Huge",
        type: "Dragon",
        alignment: "chaotic evil",
        ac: 18,
        acType: "natural armor",
        hp: 200,
        hitDice: "16d12+96",
        speed: { walk: 40, burrow: 30, fly: 80, swim: 40 },
        abilities: { str: 22, dex: 10, con: 22, int: 8, wis: 12, cha: 12 },
        savingThrows: { dex: 5, con: 11, wis: 6, cha: 6 },
        skills: { perception: 11, stealth: 5 },
        damageImmunities: ["cold"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 21"],
        languages: ["Common", "Draconic"],
        cr: "13",
        xp: 10000,
        traits: [
            {
                name: "Ice Walk",
                description: "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement."
            },
            {
                name: "Legendary Resistance (3/Day)",
                description: "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) cold damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
            },
            {
                name: "Tail",
                description: "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage."
            },
            {
                name: "Frightful Presence",
                description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 14 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                name: "Cold Breath (Recharge 5-6)",
                description: "The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one."
            }
        ],
        legendaryActions: [
            {
                name: "Legendary Actions",
                description: "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
            },
            {
                name: "Detect",
                description: "The dragon makes a Wisdom (Perception) check."
            },
            {
                name: "Tail Attack",
                description: "The dragon makes a tail attack."
            },
            {
                name: "Wing Attack (Costs 2 Actions)",
                description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        lairActions: "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row: (1) Freezing fog fills a 20-foot-radius sphere centered on a point the dragon can see within 120 feet of it. The fog spreads around corners, and its area is heavily obscured. Each creature in the fog when it appears must make a DC 10 Constitution saving throw, taking 10 (3d6) cold damage on a failed save, or half as much damage on a successful one. A creature that ends its turn in the fog takes 10 (3d6) cold damage. A wind of at least 20 miles per hour disperses the fog. The fog otherwise lasts until the dragon uses this lair action again or until the dragon dies. (2) Jagged ice shards fall from the ceiling, striking up to three creatures underneath that the dragon can see within 120 feet of it. The dragon makes one ranged attack roll (+7 to hit) against each target. On a hit, the target takes 10 (3d6) piercing damage. (3) The dragon creates an opaque wall of ice on a solid surface it can see within 120 feet of it. The wall can be up to 30 feet long, 30 feet high, and 1 foot thick. When the wall appears, each creature within its area is pushed 5 feet out of the wall's space; appearing on whichever side of the wall it wants. Each 10-foot section of the wall has AC 5, 30 hit points, vulnerability to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage. The wall disappears when the dragon uses this lair action again or when the dragon dies.",
        regionalEffects: "The region containing a legendary white dragon's lair is warped by the dragon's magic, creating one or more of the following effects: (1) Chilly fog lightly obscures the land within 6 miles of the dragon's lair. (2) Freezing precipitation falls within 6 miles of the dragon's lair, sometimes forming blizzard conditions when the dragon is at rest. (3) Icy wastes within 6 miles of the dragon's lair are considered difficult terrain for non-flying creatures that lack immunity to cold damage."
    },
    "ancient-white-dragon": {
        name: "Ancient White Dragon",
        size: "Gargantuan",
        type: "Dragon",
        alignment: "chaotic evil",
        ac: 20,
        acType: "natural armor",
        hp: 333,
        hitDice: "18d20+144",
        speed: { walk: 40, burrow: 40, fly: 80, swim: 40 },
        abilities: { str: 26, dex: 10, con: 26, int: 10, wis: 13, cha: 14 },
        savingThrows: { dex: 6, con: 14, wis: 7, cha: 8 },
        skills: { perception: 13, stealth: 6 },
        damageImmunities: ["cold"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 23"],
        languages: ["Common", "Draconic"],
        cr: "20",
        xp: 25000,
        traits: [
            {
                name: "Ice Walk",
                description: "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement."
            },
            {
                name: "Legendary Resistance (3/Day)",
                description: "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 9 (2d8) cold damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
            },
            {
                name: "Tail",
                description: "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
            },
            {
                name: "Frightful Presence",
                description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                name: "Cold Breath (Recharge 5-6)",
                description: "The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 72 (16d8) cold damage on a failed save, or half as much damage on a successful one."
            }
        ],
        legendaryActions: [
            {
                name: "Legendary Actions",
                description: "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
            },
            {
                name: "Detect",
                description: "The dragon makes a Wisdom (Perception) check."
            },
            {
                name: "Tail Attack",
                description: "The dragon makes a tail attack."
            },
            {
                name: "Wing Attack (Costs 2 Actions)",
                description: "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        lairActions: "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row: (1) Freezing fog fills a 20-foot-radius sphere centered on a point the dragon can see within 120 feet of it. The fog spreads around corners, and its area is heavily obscured. Each creature in the fog when it appears must make a DC 10 Constitution saving throw, taking 10 (3d6) cold damage on a failed save, or half as much damage on a successful one. A creature that ends its turn in the fog takes 10 (3d6) cold damage. A wind of at least 20 miles per hour disperses the fog. The fog otherwise lasts until the dragon uses this lair action again or until the dragon dies. (2) Jagged ice shards fall from the ceiling, striking up to three creatures underneath that the dragon can see within 120 feet of it. The dragon makes one ranged attack roll (+7 to hit) against each target. On a hit, the target takes 10 (3d6) piercing damage. (3) The dragon creates an opaque wall of ice on a solid surface it can see within 120 feet of it. The wall can be up to 30 feet long, 30 feet high, and 1 foot thick. When the wall appears, each creature within its area is pushed 5 feet out of the wall's space; appearing on whichever side of the wall it wants. Each 10-foot section of the wall has AC 5, 30 hit points, vulnerability to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage. The wall disappears when the dragon uses this lair action again or when the dragon dies.",
        regionalEffects: "The region containing a legendary white dragon's lair is warped by the dragon's magic, creating one or more of the following effects: (1) Chilly fog lightly obscures the land within 6 miles of the dragon's lair. (2) Freezing precipitation falls within 6 miles of the dragon's lair, sometimes forming blizzard conditions when the dragon is at rest. (3) Icy wastes within 6 miles of the dragon's lair are considered difficult terrain for non-flying creatures that lack immunity to cold damage."
    },

    // ==========================================
    // ADDITIONAL MONSTROSITIES
    // ==========================================

    "ankheg": {
        name: "Ankheg",
        size: "Large",
        type: "Monstrosity",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor (11 while prone)",
        hp: 39,
        hitDice: "6d10+6",
        speed: { walk: 30, burrow: 10 },
        abilities: { str: 17, dex: 11, con: 13, int: 1, wis: 13, cha: 6 },
        senses: ["darkvision 60 ft.", "tremorsense 60 ft.", "passive Perception 11"],
        languages: [],
        cr: "2",
        xp: 450,
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage plus 3 (1d6) acid damage. If the target is a Large or smaller creature, it is grappled (escape DC 13). Until this grapple ends, the ankheg can bite only the grappled creature and has advantage on attack rolls to do so."
            },
            {
                name: "Acid Spray (Recharge 6)",
                description: "The ankheg spits acid in a line that is 30 feet long and 5 feet wide, provided that it has no creature grappled. Each creature in that line must make a DC 13 Dexterity saving throw, taking 10 (3d6) acid damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    "behir": {
        name: "Behir",
        size: "Huge",
        type: "Monstrosity",
        alignment: "neutral evil",
        ac: 17,
        acType: "natural armor",
        hp: 168,
        hitDice: "16d12+64",
        speed: { walk: 50, climb: 40 },
        abilities: { str: 23, dex: 16, con: 18, int: 7, wis: 14, cha: 12 },
        skills: { perception: 6, stealth: 7 },
        damageImmunities: ["lightning"],
        senses: ["darkvision 90 ft.", "passive Perception 16"],
        languages: ["Draconic"],
        cr: "11",
        xp: 7200,
        actions: [
            {
                name: "Multiattack",
                description: "The behir makes two attacks: one with its bite and one to constrict."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 22 (3d10 + 6) piercing damage."
            },
            {
                name: "Constrict",
                description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one Large or smaller creature. Hit: 17 (2d10 + 6) bludgeoning damage plus 17 (2d10 + 6) slashing damage. The target is grappled (escape DC 16) if the behir isn't already constricting a creature, and the target is restrained until this grapple ends."
            },
            {
                name: "Lightning Breath (Recharge 5-6)",
                description: "The behir exhales a line of lightning that is 20 feet long and 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one."
            },
            {
                name: "Swallow",
                description: "The behir makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and other effects outside the behir, and it takes 21 (6d6) acid damage at the start of each of the behir's turns. A behir can have only one creature swallowed at a time. If the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a DC 14 Constitution saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 10 feet of the behir. If the behir dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 15 feet of movement, exiting prone."
            }
        ]
    },
    "bulette": {
        name: "Bulette",
        size: "Large",
        type: "Monstrosity",
        alignment: "unaligned",
        ac: 17,
        acType: "natural armor",
        hp: 94,
        hitDice: "9d10+45",
        speed: { walk: 40, burrow: 40 },
        abilities: { str: 19, dex: 11, con: 21, int: 2, wis: 10, cha: 5 },
        skills: { perception: 6 },
        senses: ["darkvision 60 ft.", "tremorsense 60 ft.", "passive Perception 16"],
        languages: [],
        cr: "5",
        xp: 1800,
        traits: [
            {
                name: "Standing Leap",
                description: "The bulette's long jump is up to 30 feet and its high jump is up to 15 feet, with or without a running start."
            }
        ],
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 30 (4d12 + 4) piercing damage."
            },
            {
                name: "Deadly Leap",
                description: "If the bulette jumps at least 15 feet as part of its movement, it can then use this action to land on its feet in a space that contains one or more other creatures. Each of those creatures must succeed on a DC 16 Strength or Dexterity saving throw (target's choice) or be knocked prone and take 14 (3d6 + 4) bludgeoning damage plus 14 (3d6 + 4) slashing damage. On a successful save, the creature takes only half the damage, isn't knocked prone, and is pushed 5 feet out of the bulette's space into an unoccupied space of the creature's choice. If no unoccupied space is within range, the creature instead falls prone in the bulette's space."
            }
        ]
    },
    "carrion-crawler": {
        name: "Carrion Crawler",
        size: "Large",
        type: "Monstrosity",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 51,
        hitDice: "6d10+18",
        speed: { walk: 30, climb: 30 },
        abilities: { str: 14, dex: 13, con: 16, int: 1, wis: 12, cha: 5 },
        skills: { perception: 3 },
        senses: ["darkvision 60 ft.", "passive Perception 13"],
        languages: [],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Keen Smell",
                description: "The carrion crawler has advantage on Wisdom (Perception) checks that rely on smell."
            },
            {
                name: "Spider Climb",
                description: "The carrion crawler can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The carrion crawler makes two attacks: one with its tentacles and one with its bite."
            },
            {
                name: "Tentacles",
                description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit: 4 (1d4 + 2) poison damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the poison on itself on a success."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage."
            }
        ]
    },
    "chimera": {
        name: "Chimera",
        size: "Large",
        type: "Monstrosity",
        alignment: "chaotic evil",
        ac: 14,
        acType: "natural armor",
        hp: 114,
        hitDice: "12d10+48",
        speed: { walk: 30, fly: 60 },
        abilities: { str: 19, dex: 11, con: 19, int: 3, wis: 14, cha: 10 },
        skills: { perception: 8 },
        senses: ["darkvision 60 ft.", "passive Perception 18"],
        languages: ["understands Draconic but can't speak"],
        cr: "6",
        xp: 2300,
        actions: [
            {
                name: "Multiattack",
                description: "The chimera makes three attacks: one with its bite, one with its horns, and one with its claws. When its fire breath is available, it can use the breath in place of its bite or horns."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) piercing damage."
            },
            {
                name: "Horns",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12 + 4) bludgeoning damage."
            },
            {
                name: "Claws",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
            },
            {
                name: "Fire Breath (Recharge 5-6)",
                description: "The dragon head exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 31 (7d8) fire damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    "cockatrice": {
        name: "Cockatrice",
        size: "Small",
        type: "Monstrosity",
        alignment: "unaligned",
        ac: 11,
        hp: 27,
        hitDice: "6d6+6",
        speed: { walk: 20, fly: 40 },
        abilities: { str: 6, dex: 12, con: 12, int: 2, wis: 13, cha: 5 },
        senses: ["darkvision 60 ft.", "passive Perception 11"],
        languages: [],
        cr: "1/2",
        xp: 100,
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) piercing damage, and the target must succeed on a DC 11 Constitution saving throw against being magically petrified. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified for 24 hours."
            }
        ]
    },
    "displacer-beast": {
        name: "Displacer Beast",
        size: "Large",
        type: "Monstrosity",
        alignment: "lawful evil",
        ac: 13,
        acType: "natural armor",
        hp: 85,
        hitDice: "10d10+30",
        speed: { walk: 40 },
        abilities: { str: 18, dex: 15, con: 16, int: 6, wis: 12, cha: 8 },
        senses: ["darkvision 60 ft.", "passive Perception 11"],
        languages: [],
        cr: "3",
        xp: 700,
        traits: [
            {
                name: "Avoidance",
                description: "If the displacer beast is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
            },
            {
                name: "Displacement",
                description: "The displacer beast projects a magical illusion that makes it appear to be standing near its actual location, causing attack rolls against it to have disadvantage. If it is hit by an attack, this trait is disrupted until the end of its next turn. This trait is also disrupted while the displacer beast is incapacitated or has a speed of 0."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The displacer beast makes two attacks with its tentacles."
            },
            {
                name: "Tentacle",
                description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage plus 3 (1d6) piercing damage."
            }
        ]
    },
    "doppelganger": {
        name: "Doppelganger",
        size: "Medium",
        type: "Monstrosity",
        subtype: "shapechanger",
        alignment: "neutral",
        ac: 14,
        hp: 52,
        hitDice: "8d8+16",
        speed: { walk: 30 },
        abilities: { str: 11, dex: 18, con: 14, int: 11, wis: 12, cha: 14 },
        skills: { deception: 6, insight: 3 },
        conditionImmunities: ["charmed"],
        senses: ["darkvision 60 ft.", "passive Perception 11"],
        languages: ["Common"],
        cr: "3",
        xp: 700,
        traits: [
            {
                name: "Shapechanger",
                description: "The doppelganger can use its action to polymorph into a Small or Medium humanoid it has seen, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                name: "Ambusher",
                description: "In the first round of a combat, the doppelganger has advantage on attack rolls against any creature it has surprised."
            },
            {
                name: "Surprise Attack",
                description: "If the doppelganger surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 10 (3d6) damage from the attack."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The doppelganger makes two melee attacks."
            },
            {
                name: "Slam",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage."
            },
            {
                name: "Read Thoughts",
                description: "The doppelganger magically reads the surface thoughts of one creature within 60 feet of it. The effect can penetrate barriers, but 3 feet of wood or dirt, 2 feet of stone, 2 inches of metal, or a thin sheet of lead blocks it. While the target is in range, the doppelganger can continue reading its thoughts, as long as the doppelganger's concentration isn't broken (as if concentrating on a spell). While reading the target's mind, the doppelganger has advantage on Wisdom (Insight) and Charisma (Deception, Intimidation, and Persuasion) checks against the target."
            }
        ]
    },
    "gorgon": {
        name: "Gorgon",
        size: "Large",
        type: "Monstrosity",
        alignment: "unaligned",
        ac: 19,
        acType: "natural armor",
        hp: 114,
        hitDice: "12d10+48",
        speed: { walk: 40 },
        abilities: { str: 20, dex: 11, con: 18, int: 2, wis: 12, cha: 7 },
        skills: { perception: 4 },
        conditionImmunities: ["petrified"],
        senses: ["darkvision 60 ft.", "passive Perception 14"],
        languages: [],
        cr: "5",
        xp: 1800,
        traits: [
            {
                name: "Trampling Charge",
                description: "If the gorgon moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 16 Strength saving throw or be knocked prone. If the target is prone, the gorgon can make one attack with its hooves against it as a bonus action."
            }
        ],
        actions: [
            {
                name: "Gore",
                description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 18 (2d12 + 5) piercing damage."
            },
            {
                name: "Hooves",
                description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10 + 5) bludgeoning damage."
            },
            {
                name: "Petrifying Breath (Recharge 5-6)",
                description: "The gorgon exhales petrifying gas in a 30-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw. On a failed save, a target begins to turn to stone and is restrained. The restrained target must repeat the saving throw at the end of its next turn. On a success, the effect ends on the target. On a failure, the target is petrified until freed by the greater restoration spell or other magic."
            }
        ]
    },
    "grick": {
        name: "Grick",
        size: "Medium",
        type: "Monstrosity",
        alignment: "neutral",
        ac: 14,
        acType: "natural armor",
        hp: 27,
        hitDice: "6d8",
        speed: { walk: 30, climb: 30 },
        abilities: { str: 14, dex: 14, con: 11, int: 3, wis: 14, cha: 5 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft.", "passive Perception 12"],
        languages: [],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Stone Camouflage",
                description: "The grick has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The grick makes one attack with its tentacles. If that attack hits, the grick can make one beak attack against the same target."
            },
            {
                name: "Tentacles",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage."
            },
            {
                name: "Beak",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
            }
        ]
    },
    "griffon": {
        name: "Griffon",
        size: "Large",
        type: "Monstrosity",
        alignment: "unaligned",
        ac: 12,
        hp: 59,
        hitDice: "7d10+21",
        speed: { walk: 30, fly: 80 },
        abilities: { str: 18, dex: 15, con: 16, int: 2, wis: 13, cha: 8 },
        skills: { perception: 5 },
        senses: ["darkvision 60 ft.", "passive Perception 15"],
        languages: [],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Keen Sight",
                description: "The griffon has advantage on Wisdom (Perception) checks that rely on sight."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The griffon makes two attacks: one with its beak and one with its claws."
            },
            {
                name: "Beak",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage."
            },
            {
                name: "Claws",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
            }
        ]
    },
    "harpy": {
        name: "Harpy",
        size: "Medium",
        type: "Monstrosity",
        alignment: "chaotic evil",
        ac: 11,
        hp: 38,
        hitDice: "7d8+7",
        speed: { walk: 20, fly: 40 },
        abilities: { str: 12, dex: 13, con: 12, int: 7, wis: 10, cha: 13 },
        senses: ["passive Perception 10"],
        languages: ["Common"],
        cr: "1",
        xp: 200,
        actions: [
            {
                name: "Multiattack",
                description: "The harpy makes two attacks: one with its claws and one with its club."
            },
            {
                name: "Claws",
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) slashing damage."
            },
            {
                name: "Club",
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning damage."
            },
            {
                name: "Luring Song",
                description: "The harpy sings a magical melody. Every humanoid and giant within 300 feet of the harpy that can hear the song must succeed on a DC 11 Wisdom saving throw or be charmed until the song ends. The harpy must take a bonus action on its subsequent turns to continue singing. It can stop singing at any time. The song ends if the harpy is incapacitated. While charmed by the harpy, a target is incapacitated and ignores the songs of other harpies. If the charmed target is more than 5 feet away from the harpy, the target must move on its turn toward the harpy by the most direct route. It doesn't avoid opportunity attacks, but before moving into damaging terrain, such as lava or a pit, and whenever it takes damage from a source other than the harpy, a target can repeat the saving throw. A creature can also repeat the saving throw at the end of each of its turns. If a creature's saving throw is successful, the effect ends on it. A target that successfully saves is immune to this harpy's song for the next 24 hours."
            }
        ]
    },
    "hippogriff": {
        name: "Hippogriff",
        size: "Large",
        type: "Monstrosity",
        alignment: "unaligned",
        ac: 11,
        hp: 19,
        hitDice: "3d10+3",
        speed: { walk: 40, fly: 60 },
        abilities: { str: 17, dex: 13, con: 13, int: 2, wis: 12, cha: 8 },
        skills: { perception: 5 },
        senses: ["passive Perception 15"],
        languages: [],
        cr: "1",
        xp: 200,
        traits: [
            {
                name: "Keen Sight",
                description: "The hippogriff has advantage on Wisdom (Perception) checks that rely on sight."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The hippogriff makes two attacks: one with its beak and one with its claws."
            },
            {
                name: "Beak",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage."
            },
            {
                name: "Claws",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage."
            }
        ]
    },
    "hydra": {
        name: "Hydra",
        size: "Huge",
        type: "Monstrosity",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 172,
        hitDice: "15d12+75",
        speed: { walk: 30, swim: 30 },
        abilities: { str: 20, dex: 12, con: 20, int: 2, wis: 10, cha: 7 },
        skills: { perception: 6 },
        senses: ["darkvision 60 ft.", "passive Perception 16"],
        languages: [],
        cr: "8",
        xp: 3900,
        traits: [
            {
                name: "Hold Breath",
                description: "The hydra can hold its breath for 1 hour."
            },
            {
                name: "Multiple Heads",
                description: "The hydra has five heads. While it has more than one head, the hydra has advantage on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious. Whenever the hydra takes 25 or more damage in a single turn, one of its heads dies. If all its heads die, the hydra dies. At the end of its turn, it grows two heads for each of its heads that died since its last turn, unless it has taken fire damage since its last turn. The hydra regains 10 hit points for each head regrown in this way."
            },
            {
                name: "Reactive Heads",
                description: "For each head the hydra has beyond one, it gets an extra reaction that can be used only for opportunity attacks."
            },
            {
                name: "Wakeful",
                description: "While the hydra sleeps, at least one of its heads is awake."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The hydra makes as many bite attacks as it has heads."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 10 (1d10 + 5) piercing damage."
            }
        ]
    },
    "kraken": {
        name: "Kraken",
        size: "Gargantuan",
        type: "Monstrosity",
        subtype: "titan",
        alignment: "chaotic evil",
        ac: 18,
        acType: "natural armor",
        hp: 472,
        hitDice: "27d20+189",
        speed: { walk: 20, swim: 60 },
        abilities: { str: 30, dex: 11, con: 25, int: 22, wis: 18, cha: 20 },
        savingThrows: { str: 17, dex: 7, con: 14, int: 13, wis: 11 },
        damageImmunities: ["lightning", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["frightened", "paralyzed"],
        senses: ["truesight 120 ft.", "passive Perception 14"],
        languages: ["Abyssal", "Celestial", "Infernal", "Primordial", "telepathy 120 ft."],
        cr: "23",
        xp: 50000,
        traits: [
            {
                name: "Amphibious",
                description: "The kraken can breathe air and water."
            },
            {
                name: "Freedom of Movement",
                description: "The kraken ignores difficult terrain, and magical effects can't reduce its speed or cause it to be restrained. It can spend 5 feet of movement to escape from nonmagical restraints or being grappled."
            },
            {
                name: "Siege Monster",
                description: "The kraken deals double damage to objects and structures."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The kraken makes three tentacle attacks, each of which it can replace with one use of Fling."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +17 to hit, reach 5 ft., one target. Hit: 23 (3d8 + 10) piercing damage. If the target is a Large or smaller creature grappled by the kraken, that creature is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the kraken, and it takes 42 (12d6) acid damage at the start of each of the kraken's turns. If the kraken takes 50 damage or more on a single turn from a creature inside it, the kraken must succeed on a DC 25 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the kraken. If the kraken dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone."
            },
            {
                name: "Tentacle",
                description: "Melee Weapon Attack: +17 to hit, reach 30 ft., one target. Hit: 20 (3d6 + 10) bludgeoning damage, and the target is grappled (escape DC 18). Until this grapple ends, the target is restrained. The kraken has ten tentacles, each of which can grapple one target."
            },
            {
                name: "Fling",
                description: "One Large or smaller object held or creature grappled by the kraken is thrown up to 60 feet in a random direction and knocked prone. If a thrown target strikes a solid surface, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 18 Dexterity saving throw or take the same damage and be knocked prone."
            },
            {
                name: "Lightning Storm",
                description: "The kraken magically creates three bolts of lightning, each of which can strike a target the kraken can see within 120 feet of it. A target must make a DC 23 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one."
            }
        ],
        legendaryActions: [
            {
                name: "Tentacle Attack or Fling",
                description: "The kraken makes one tentacle attack or uses its Fling."
            },
            {
                name: "Lightning Storm (Costs 2 Actions)",
                description: "The kraken uses Lightning Storm."
            },
            {
                name: "Ink Cloud (Costs 3 Actions)",
                description: "While underwater, the kraken expels an ink cloud in a 60-foot radius. The cloud spreads around corners, and that area is heavily obscured to creatures other than the kraken. Each creature other than the kraken that ends its turn there must succeed on a DC 23 Constitution saving throw, taking 16 (3d10) poison damage on a failed save, or half as much damage on a successful one. A strong current disperses the cloud, which otherwise disappears at the end of the kraken's next turn."
            }
        ]
    },
    "lamia": {
        name: "Lamia",
        size: "Large",
        type: "Monstrosity",
        alignment: "chaotic evil",
        ac: 13,
        acType: "natural armor",
        hp: 97,
        hitDice: "13d10+26",
        speed: { walk: 30 },
        abilities: { str: 16, dex: 13, con: 15, int: 14, wis: 15, cha: 16 },
        skills: { deception: 7, insight: 4, stealth: 3 },
        senses: ["darkvision 60 ft.", "passive Perception 12"],
        languages: ["Abyssal", "Common"],
        cr: "4",
        xp: 1100,
        traits: [
            {
                name: "Innate Spellcasting",
                description: "The lamia's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast the following spells, requiring no material components. At will: disguise self (any humanoid form), major image. 3/day each: charm person, mirror image, scrying, suggestion. 1/day: geas."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The lamia makes two attacks: one with its claws and one with its dagger or Intoxicating Touch."
            },
            {
                name: "Claws",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (2d10 + 3) slashing damage."
            },
            {
                name: "Dagger",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage."
            },
            {
                name: "Intoxicating Touch",
                description: "Melee Spell Attack: +5 to hit, reach 5 ft., one creature. Hit: The target is magically cursed for 1 hour. Until the curse ends, the target has disadvantage on Wisdom saving throws and all ability checks."
            }
        ]
    },
    "manticore": {
        name: "Manticore",
        size: "Large",
        type: "Monstrosity",
        alignment: "lawful evil",
        ac: 14,
        acType: "natural armor",
        hp: 68,
        hitDice: "8d10+24",
        speed: { walk: 30, fly: 50 },
        abilities: { str: 17, dex: 16, con: 17, int: 7, wis: 12, cha: 8 },
        senses: ["darkvision 60 ft.", "passive Perception 11"],
        languages: ["Common"],
        cr: "3",
        xp: 700,
        traits: [
            {
                name: "Tail Spike Regrowth",
                description: "The manticore has twenty-four tail spikes. Used spikes regrow when the manticore finishes a long rest."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The manticore makes three attacks: one with its bite and two with its claws or three with its tail spikes."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage."
            },
            {
                name: "Tail Spike",
                description: "Ranged Weapon Attack: +5 to hit, range 100/200 ft., one target. Hit: 7 (1d8 + 3) piercing damage."
            }
        ]
    },
    "medusa": {
        name: "Medusa",
        size: "Medium",
        type: "Monstrosity",
        alignment: "lawful evil",
        ac: 15,
        acType: "natural armor",
        hp: 127,
        hitDice: "17d8+51",
        speed: { walk: 30 },
        abilities: { str: 10, dex: 15, con: 16, int: 12, wis: 13, cha: 15 },
        skills: { deception: 5, insight: 4, perception: 4, stealth: 5 },
        senses: ["darkvision 60 ft.", "passive Perception 14"],
        languages: ["Common"],
        cr: "6",
        xp: 2300,
        traits: [
            {
                name: "Petrifying Gaze",
                description: "When a creature that can see the medusa's eyes starts its turn within 30 feet of the medusa, the medusa can force it to make a DC 14 Constitution saving throw if the medusa isn't incapacitated and can see the creature. If the saving throw fails by 5 or more, the creature is instantly petrified. Otherwise, a creature that fails the save begins to turn to stone and is restrained. The restrained creature must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the creature is freed by the greater restoration spell or other magic. Unless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it can't see the medusa until the start of its next turn, when it can avert its eyes again. If the creature looks at the medusa in the meantime, it must immediately make the save. If the medusa sees itself reflected on a polished surface within 30 feet of it and in an area of bright light, the medusa is, due to its curse, affected by its own gaze."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The medusa makes either three melee attacks--one with its snake hair and two with its shortsword--or two ranged attacks with its longbow."
            },
            {
                name: "Snake Hair",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage plus 14 (4d6) poison damage."
            },
            {
                name: "Shortsword",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
            },
            {
                name: "Longbow",
                description: "Ranged Weapon Attack: +5 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage plus 7 (2d6) poison damage."
            }
        ]
    },
    "minotaur": {
        name: "Minotaur",
        size: "Large",
        type: "Monstrosity",
        alignment: "chaotic evil",
        ac: 14,
        acType: "natural armor",
        hp: 76,
        hitDice: "9d10+27",
        speed: { walk: 40 },
        abilities: { str: 18, dex: 11, con: 16, int: 6, wis: 16, cha: 9 },
        skills: { perception: 7 },
        senses: ["darkvision 60 ft.", "passive Perception 17"],
        languages: ["Abyssal"],
        cr: "3",
        xp: 700,
        traits: [
            {
                name: "Charge",
                description: "If the minotaur moves at least 10 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be pushed up to 10 feet away and knocked prone."
            },
            {
                name: "Labyrinthine Recall",
                description: "The minotaur can perfectly recall any path it has traveled."
            },
            {
                name: "Reckless",
                description: "At the start of its turn, the minotaur can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn."
            }
        ],
        actions: [
            {
                name: "Greataxe",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (2d12 + 4) slashing damage."
            },
            {
                name: "Gore",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage."
            }
        ]
    },
    "peryton": {
        name: "Peryton",
        size: "Medium",
        type: "Monstrosity",
        alignment: "chaotic evil",
        ac: 13,
        acType: "natural armor",
        hp: 33,
        hitDice: "6d8+6",
        speed: { walk: 20, fly: 60 },
        abilities: { str: 16, dex: 12, con: 13, int: 9, wis: 12, cha: 10 },
        skills: { perception: 5 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["passive Perception 15"],
        languages: ["understands Common and Elvish but can't speak"],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Dive Attack",
                description: "If the peryton is flying and dives at least 30 feet straight toward a target and then hits it with a melee weapon attack, the attack deals an extra 9 (2d8) damage to the target."
            },
            {
                name: "Flyby",
                description: "The peryton doesn't provoke an opportunity attack when it flies out of an enemy's reach."
            },
            {
                name: "Keen Sight and Smell",
                description: "The peryton has advantage on Wisdom (Perception) checks that rely on sight or smell."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The peryton makes one gore attack and one talon attack."
            },
            {
                name: "Gore",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage."
            },
            {
                name: "Talons",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) piercing damage."
            }
        ]
    },
    "phase-spider": {
        name: "Phase Spider",
        size: "Large",
        type: "Monstrosity",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 32,
        hitDice: "5d10+5",
        speed: { walk: 30, climb: 30 },
        abilities: { str: 15, dex: 15, con: 12, int: 6, wis: 10, cha: 6 },
        skills: { stealth: 6 },
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: [],
        cr: "3",
        xp: 700,
        traits: [
            {
                name: "Ethereal Jaunt",
                description: "As a bonus action, the spider can magically shift from the Material Plane to the Ethereal Plane, or vice versa."
            },
            {
                name: "Spider Climb",
                description: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            },
            {
                name: "Web Walker",
                description: "The spider ignores movement restrictions caused by webbing."
            }
        ],
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 18 (4d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
            }
        ]
    },
    "purple-worm": {
        name: "Purple Worm",
        size: "Gargantuan",
        type: "Monstrosity",
        alignment: "unaligned",
        ac: 18,
        acType: "natural armor",
        hp: 247,
        hitDice: "15d20+90",
        speed: { walk: 50, burrow: 30 },
        abilities: { str: 28, dex: 7, con: 22, int: 1, wis: 8, cha: 4 },
        savingThrows: { con: 11, wis: 4 },
        senses: ["blindsight 30 ft.", "tremorsense 60 ft.", "passive Perception 9"],
        languages: [],
        cr: "15",
        xp: 13000,
        traits: [
            {
                name: "Tunneler",
                description: "The worm can burrow through solid rock at half its burrow speed and leaves a 10-foot-diameter tunnel in its wake."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The worm makes two attacks: one with its bite and one with its stinger."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 22 (3d8 + 9) piercing damage. If the target is a Large or smaller creature, it must succeed on a DC 19 Dexterity saving throw or be swallowed by the worm. A swallowed creature is blinded and restrained, it has total cover against attacks and other effects outside the worm, and it takes 21 (6d6) acid damage at the start of each of the worm's turns. If the worm takes 30 damage or more on a single turn from a creature inside it, the worm must succeed on a DC 21 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the worm. If the worm dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 20 feet of movement, exiting prone."
            },
            {
                name: "Tail Stinger",
                description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one creature. Hit: 19 (3d6 + 9) piercing damage, and the target must make a DC 19 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    "remorhaz": {
        name: "Remorhaz",
        size: "Huge",
        type: "Monstrosity",
        alignment: "unaligned",
        ac: 17,
        acType: "natural armor",
        hp: 195,
        hitDice: "17d12+85",
        speed: { walk: 30, burrow: 20 },
        abilities: { str: 24, dex: 13, con: 21, int: 4, wis: 10, cha: 5 },
        damageImmunities: ["cold", "fire"],
        senses: ["darkvision 60 ft.", "tremorsense 60 ft.", "passive Perception 10"],
        languages: [],
        cr: "11",
        xp: 7200,
        traits: [
            {
                name: "Heated Body",
                description: "A creature that touches the remorhaz or hits it with a melee attack while within 5 feet of it takes 10 (3d6) fire damage."
            }
        ],
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 40 (6d10 + 7) piercing damage plus 10 (3d6) fire damage. If the target is a creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the remorhaz can't bite another target."
            },
            {
                name: "Swallow",
                description: "The remorhaz makes one bite attack against a Medium or smaller creature it is grappling. If the attack hits, that creature takes the bite's damage and is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the remorhaz, and it takes 21 (6d6) acid damage at the start of each of the remorhaz's turns. If the remorhaz takes 30 damage or more on a single turn from a creature inside it, the remorhaz must succeed on a DC 15 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the remorhaz. If the remorhaz dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone."
            }
        ]
    },
    "roc": {
        name: "Roc",
        size: "Gargantuan",
        type: "Monstrosity",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 248,
        hitDice: "16d20+80",
        speed: { walk: 20, fly: 120 },
        abilities: { str: 28, dex: 10, con: 20, int: 3, wis: 10, cha: 9 },
        savingThrows: { dex: 4, con: 9, wis: 4, cha: 3 },
        skills: { perception: 4 },
        senses: ["passive Perception 14"],
        languages: [],
        cr: "11",
        xp: 7200,
        traits: [
            {
                name: "Keen Sight",
                description: "The roc has advantage on Wisdom (Perception) checks that rely on sight."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The roc makes two attacks: one with its beak and one with its talons."
            },
            {
                name: "Beak",
                description: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 27 (4d8 + 9) piercing damage."
            },
            {
                name: "Talons",
                description: "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 23 (4d6 + 9) slashing damage, and the target is grappled (escape DC 19). Until this grapple ends, the target is restrained, and the roc can't use its talons on another target."
            }
        ]
    },
    "roper": {
        name: "Roper",
        size: "Large",
        type: "Monstrosity",
        alignment: "neutral evil",
        ac: 20,
        acType: "natural armor",
        hp: 93,
        hitDice: "11d10+33",
        speed: { walk: 10, climb: 10 },
        abilities: { str: 18, dex: 8, con: 17, int: 7, wis: 16, cha: 6 },
        skills: { perception: 6, stealth: 5 },
        senses: ["darkvision 60 ft.", "passive Perception 16"],
        languages: [],
        cr: "5",
        xp: 1800,
        traits: [
            {
                name: "False Appearance",
                description: "While the roper remains motionless, it is indistinguishable from a normal cave formation, such as a stalagmite."
            },
            {
                name: "Grasping Tendrils",
                description: "The roper can have up to six tendrils at a time. Each tendril can be attacked (AC 20; 10 hit points; immunity to poison and psychic damage). Destroying a tendril deals no damage to the roper, which can extrude a replacement tendril on its next turn. A tendril can also be broken if a creature takes an action and succeeds on a DC 15 Strength check against it."
            },
            {
                name: "Spider Climb",
                description: "The roper can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The roper makes four tendril attacks, then uses Reel, and makes one bite attack."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 22 (4d8 + 4) piercing damage."
            },
            {
                name: "Tendril",
                description: "Melee Weapon Attack: +7 to hit, reach 50 ft., one creature. Hit: The target is grappled (escape DC 15). Until the grapple ends, the target is restrained and has disadvantage on Strength checks and Strength saving throws, and the roper can't use the same tendril on another target."
            },
            {
                name: "Reel",
                description: "The roper pulls each creature grappled by it up to 25 feet straight toward it."
            }
        ]
    },
    "rust-monster": {
        name: "Rust Monster",
        size: "Medium",
        type: "Monstrosity",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 27,
        hitDice: "5d8+5",
        speed: { walk: 40 },
        abilities: { str: 13, dex: 12, con: 13, int: 2, wis: 13, cha: 6 },
        senses: ["darkvision 60 ft.", "passive Perception 11"],
        languages: [],
        cr: "1/2",
        xp: 100,
        traits: [
            {
                name: "Iron Scent",
                description: "The rust monster can pinpoint, by scent, the location of ferrous metal within 30 feet of it."
            },
            {
                name: "Rust Metal",
                description: "Any nonmagical weapon made of metal that hits the rust monster corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal that hits the rust monster is destroyed after dealing damage."
            }
        ],
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) piercing damage."
            },
            {
                name: "Antennae",
                description: "The rust monster corrodes a nonmagical ferrous metal object it can see within 5 feet of it. If the object isn't being worn or carried, the touch destroys a 1-foot cube of it. If the object is being worn or carried by a creature, the creature can make a DC 11 Dexterity saving throw to avoid the rust monster's touch. If the object touched is either metal armor or a metal shield being worn or carried, its takes a permanent and cumulative -1 penalty to the AC it offers. Armor reduced to an AC of 10 or a shield that drops to a +0 bonus is destroyed. If the object touched is a held metal weapon, it rusts as described in the Rust Metal trait."
            }
        ]
    },
    "androsphinx": {
        name: "Androsphinx",
        size: "Large",
        type: "Monstrosity",
        alignment: "lawful neutral",
        ac: 17,
        acType: "natural armor",
        hp: 199,
        hitDice: "19d10+95",
        speed: { walk: 40, fly: 60 },
        abilities: { str: 22, dex: 10, con: 20, int: 16, wis: 18, cha: 23 },
        savingThrows: { dex: 6, con: 11, int: 9, wis: 10 },
        skills: { arcana: 9, perception: 10, religion: 15 },
        damageImmunities: ["psychic", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "frightened"],
        senses: ["truesight 120 ft.", "passive Perception 20"],
        languages: ["Common", "Sphinx"],
        cr: "17",
        xp: 18000,
        traits: [
            {
                name: "Inscrutable",
                description: "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage."
            },
            {
                name: "Magic Weapons",
                description: "The sphinx's weapon attacks are magical."
            },
            {
                name: "Spellcasting",
                description: "The sphinx is a 12th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 18, +10 to hit with spell attacks). It requires no material components to cast its spells. The sphinx has the following cleric spells prepared: Cantrips (at will): sacred flame, spare the dying, thaumaturgy. 1st level (4 slots): command, detect evil and good, detect magic. 2nd level (3 slots): lesser restoration, zone of truth. 3rd level (3 slots): dispel magic, tongues. 4th level (3 slots): banishment, freedom of movement. 5th level (2 slots): flame strike, greater restoration. 6th level (1 slot): heroes' feast."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The sphinx makes two claw attacks."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 17 (2d10 + 6) slashing damage."
            },
            {
                name: "Roar (3/Day)",
                description: "The sphinx emits a magical roar. Each time it roars before finishing a long rest, the roar is louder and the effect is different, as detailed below. Each creature within 500 feet of the sphinx and able to hear the roar must make a saving throw. First Roar: Each creature that fails a DC 18 Wisdom saving throw is frightened for 1 minute. A frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Second Roar: Each creature that fails a DC 18 Wisdom saving throw is deafened and frightened for 1 minute. A frightened creature is paralyzed and can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Third Roar: Each creature makes a DC 18 Constitution saving throw. On a failed save, a creature takes 44 (8d10) thunder damage and is knocked prone. On a successful save, the creature takes half as much damage and isn't knocked prone."
            }
        ],
        legendaryActions: [
            {
                name: "Claw Attack",
                description: "The sphinx makes one claw attack."
            },
            {
                name: "Teleport (Costs 2 Actions)",
                description: "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
            },
            {
                name: "Cast a Spell (Costs 3 Actions)",
                description: "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal."
            }
        ]
    },
    "gynosphinx": {
        name: "Gynosphinx",
        size: "Large",
        type: "Monstrosity",
        alignment: "lawful neutral",
        ac: 17,
        acType: "natural armor",
        hp: 136,
        hitDice: "16d10+48",
        speed: { walk: 40, fly: 60 },
        abilities: { str: 18, dex: 15, con: 16, int: 18, wis: 18, cha: 18 },
        skills: { arcana: 12, history: 12, perception: 8, religion: 8 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["psychic"],
        conditionImmunities: ["charmed", "frightened"],
        senses: ["truesight 120 ft.", "passive Perception 18"],
        languages: ["Common", "Sphinx"],
        cr: "11",
        xp: 7200,
        traits: [
            {
                name: "Inscrutable",
                description: "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage."
            },
            {
                name: "Magic Weapons",
                description: "The sphinx's weapon attacks are magical."
            },
            {
                name: "Spellcasting",
                description: "The sphinx is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 16, +8 to hit with spell attacks). It requires no material components to cast its spells. The sphinx has the following wizard spells prepared: Cantrips (at will): mage hand, minor illusion, prestidigitation. 1st level (4 slots): detect magic, identify, shield. 2nd level (3 slots): darkness, locate object, suggestion. 3rd level (3 slots): dispel magic, remove curse, tongues. 4th level (3 slots): banishment, greater invisibility. 5th level (1 slot): legend lore."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The sphinx makes two claw attacks."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage."
            }
        ],
        legendaryActions: [
            {
                name: "Claw Attack",
                description: "The sphinx makes one claw attack."
            },
            {
                name: "Teleport (Costs 2 Actions)",
                description: "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
            },
            {
                name: "Cast a Spell (Costs 3 Actions)",
                description: "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal."
            }
        ]
    },
    "tarrasque": {
        name: "Tarrasque",
        size: "Gargantuan",
        type: "Monstrosity",
        subtype: "titan",
        alignment: "unaligned",
        ac: 25,
        acType: "natural armor",
        hp: 676,
        hitDice: "33d20+330",
        speed: { walk: 40 },
        abilities: { str: 30, dex: 11, con: 30, int: 3, wis: 11, cha: 11 },
        savingThrows: { int: 5, wis: 9, cha: 9 },
        damageImmunities: ["fire", "poison", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "frightened", "paralyzed", "poisoned"],
        senses: ["blindsight 120 ft.", "passive Perception 10"],
        languages: [],
        cr: "30",
        xp: 155000,
        traits: [
            {
                name: "Legendary Resistance (3/Day)",
                description: "If the tarrasque fails a saving throw, it can choose to succeed instead."
            },
            {
                name: "Magic Resistance",
                description: "The tarrasque has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Reflective Carapace",
                description: "Any time the tarrasque is targeted by a magic missile spell, a line spell, or a spell that requires a ranged attack roll, roll a d6. On a 1 to 5, the tarrasque is unaffected. On a 6, the tarrasque is unaffected, and the effect is reflected back at the caster as though it originated from the tarrasque, turning the caster into the target."
            },
            {
                name: "Siege Monster",
                description: "The tarrasque deals double damage to objects and structures."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The tarrasque can use its Frightful Presence. It then makes five attacks: one with its bite, two with its claws, one with its horns, and one with its tail. It can use its Swallow instead of its bite."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 36 (4d12 + 10) piercing damage. If the target is a creature, it is grappled (escape DC 20). Until this grapple ends, the target is restrained, and the tarrasque can't bite another target."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +19 to hit, reach 15 ft., one target. Hit: 28 (4d8 + 10) slashing damage."
            },
            {
                name: "Horns",
                description: "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 32 (4d10 + 10) piercing damage."
            },
            {
                name: "Tail",
                description: "Melee Weapon Attack: +19 to hit, reach 20 ft., one target. Hit: 24 (4d6 + 10) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be knocked prone."
            },
            {
                name: "Frightful Presence",
                description: "Each creature of the tarrasque's choice within 120 feet of it and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the tarrasque is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the tarrasque's Frightful Presence for the next 24 hours."
            },
            {
                name: "Swallow",
                description: "The tarrasque makes one bite attack against a Large or smaller creature it is grappling. If the attack hits, the target takes the bite's damage, the target is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the tarrasque, and it takes 56 (16d6) acid damage at the start of each of the tarrasque's turns. If the tarrasque takes 60 damage or more on a single turn from a creature inside it, the tarrasque must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the tarrasque. If the tarrasque dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 30 feet of movement, exiting prone."
            }
        ],
        legendaryActions: [
            {
                name: "Attack",
                description: "The tarrasque makes one claw attack or tail attack."
            },
            {
                name: "Move",
                description: "The tarrasque moves up to half its speed."
            },
            {
                name: "Chomp (Costs 2 Actions)",
                description: "The tarrasque makes one bite attack or uses its Swallow."
            }
        ]
    },
    "umber-hulk": {
        name: "Umber Hulk",
        size: "Large",
        type: "Monstrosity",
        alignment: "chaotic evil",
        ac: 18,
        acType: "natural armor",
        hp: 93,
        hitDice: "11d10+33",
        speed: { walk: 30, burrow: 20 },
        abilities: { str: 20, dex: 13, con: 16, int: 9, wis: 10, cha: 10 },
        senses: ["darkvision 120 ft.", "tremorsense 60 ft.", "passive Perception 10"],
        languages: ["Umber Hulk"],
        cr: "5",
        xp: 1800,
        traits: [
            {
                name: "Confusing Gaze",
                description: "When a creature starts its turn within 30 feet of the umber hulk and is able to see the umber hulk's eyes, the umber hulk can magically force it to make a DC 15 Charisma saving throw, unless the umber hulk is incapacitated. On a failed saving throw, the creature can't take reactions until the start of its next turn and rolls a d8 to determine what it does during that turn. On a 1 to 4, the creature does nothing. On a 5 or 6, the creature takes no action but uses all its movement to move in a random direction. On a 7 or 8, the creature makes one melee attack against a random creature, or it does nothing if no creature is within reach. Unless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it can't see the umber hulk until the start of its next turn, when it can avert its eyes again. If the creature looks at the umber hulk in the meantime, it must immediately make the save."
            },
            {
                name: "Tunneler",
                description: "The umber hulk can burrow through solid rock at half its burrowing speed and leaves a 5 foot-wide, 8-foot-high tunnel in its wake."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The umber hulk makes three attacks: two with its claws and one with its mandibles."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) slashing damage."
            },
            {
                name: "Mandibles",
                description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage."
            }
        ]
    },
    "yeti": {
        name: "Yeti",
        size: "Large",
        type: "Monstrosity",
        alignment: "chaotic evil",
        ac: 12,
        acType: "natural armor",
        hp: 51,
        hitDice: "6d10+18",
        speed: { walk: 40, climb: 40 },
        abilities: { str: 18, dex: 13, con: 16, int: 8, wis: 12, cha: 7 },
        skills: { perception: 3, stealth: 3 },
        damageImmunities: ["cold"],
        senses: ["darkvision 60 ft.", "passive Perception 13"],
        languages: ["Yeti"],
        cr: "3",
        xp: 700,
        traits: [
            {
                name: "Fear of Fire",
                description: "If the yeti takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn."
            },
            {
                name: "Keen Smell",
                description: "The yeti has advantage on Wisdom (Perception) checks that rely on smell."
            },
            {
                name: "Snow Camouflage",
                description: "The yeti has advantage on Dexterity (Stealth) checks made to hide in snowy terrain."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The yeti can use its Chilling Gaze and makes two claw attacks."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) slashing damage plus 3 (1d6) cold damage."
            },
            {
                name: "Chilling Gaze",
                description: "The yeti targets one creature it can see within 30 feet of it. If the target can see the yeti, the target must succeed on a DC 13 Constitution saving throw against this magic or take 10 (3d6) cold damage and then be paralyzed for 1 minute, unless it is immune to cold damage. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If the target's saving throw is successful, or if the effect ends on it, the target is immune to the Chilling Gaze of all yetis (but not abominable yetis) for 1 hour."
            }
        ]
    },

    // ==========================================
    // ADDITIONAL UNDEAD
    // ==========================================

    "ghast": {
        name: "Ghast",
        size: "Medium",
        type: "Undead",
        alignment: "chaotic evil",
        ac: 13,
        hp: 36,
        hitDice: "8d8",
        speed: { walk: 30 },
        abilities: { str: 16, dex: 17, con: 10, int: 11, wis: 10, cha: 8 },
        damageResistances: ["necrotic"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: ["Common"],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Stench",
                description: "Any creature that starts its turn within 5 feet of the ghast must succeed on a DC 10 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the ghast's Stench for 24 hours."
            },
            {
                name: "Turning Defiance",
                description: "The ghast and any ghouls within 30 feet of it have advantage on saving throws against effects that turn undead."
            }
        ],
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 12 (2d8 + 3) piercing damage."
            },
            {
                name: "Claws",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage. If the target is a creature other than an undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ]
    },
    "specter": {
        name: "Specter",
        size: "Medium",
        type: "Undead",
        alignment: "chaotic evil",
        ac: 12,
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 0, fly: 50, hover: true },
        abilities: { str: 1, dex: 14, con: 11, int: 10, wis: 10, cha: 11 },
        damageResistances: ["acid", "cold", "fire", "lightning", "thunder", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: ["understands all languages it knew in life but can't speak"],
        cr: "1",
        xp: 200,
        traits: [
            {
                name: "Incorporeal Movement",
                description: "The specter can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
            },
            {
                name: "Sunlight Sensitivity",
                description: "While in sunlight, the specter has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            }
        ],
        actions: [
            {
                name: "Life Drain",
                description: "Melee Spell Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) necrotic damage. The target must succeed on a DC 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
            }
        ]
    },
    "wraith": {
        name: "Wraith",
        size: "Medium",
        type: "Undead",
        alignment: "neutral evil",
        ac: 13,
        hp: 67,
        hitDice: "9d8+27",
        speed: { walk: 0, fly: 60, hover: true },
        abilities: { str: 6, dex: 16, con: 16, int: 12, wis: 14, cha: 15 },
        damageResistances: ["acid", "cold", "fire", "lightning", "thunder", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained"],
        senses: ["darkvision 60 ft.", "passive Perception 12"],
        languages: ["the languages it knew in life"],
        cr: "5",
        xp: 1800,
        traits: [
            {
                name: "Incorporeal Movement",
                description: "The wraith can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
            },
            {
                name: "Sunlight Sensitivity",
                description: "While in sunlight, the wraith has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            }
        ],
        actions: [
            {
                name: "Life Drain",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 21 (4d8 + 3) necrotic damage. The target must succeed on a DC 14 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
            },
            {
                name: "Create Specter",
                description: "The wraith targets a humanoid within 10 feet of it that has been dead for no longer than 1 minute and died violently. The target's spirit rises as a specter in the space of its corpse or in the nearest unoccupied space. The specter is under the wraith's control. The wraith can have no more than seven specters under its control at one time."
            }
        ]
    },
    "mummy": {
        name: "Mummy",
        size: "Medium",
        type: "Undead",
        alignment: "lawful evil",
        ac: 11,
        acType: "natural armor",
        hp: 58,
        hitDice: "9d8+18",
        speed: { walk: 20 },
        abilities: { str: 16, dex: 8, con: 15, int: 6, wis: 10, cha: 12 },
        savingThrows: { wis: 2 },
        damageVulnerabilities: ["fire"],
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: ["the languages it knew in life"],
        cr: "3",
        xp: 700,
        actions: [
            {
                name: "Multiattack",
                description: "The mummy can use its Dreadful Glare and makes one attack with its rotting fist."
            },
            {
                name: "Rotting Fist",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage plus 10 (3d6) necrotic damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw or be cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic."
            },
            {
                name: "Dreadful Glare",
                description: "The mummy targets one creature it can see within 60 feet of it. If the target can see the mummy, it must succeed on a DC 11 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies (but not mummy lords) for the next 24 hours."
            }
        ]
    },
    "mummy-lord": {
        name: "Mummy Lord",
        size: "Medium",
        type: "Undead",
        alignment: "lawful evil",
        ac: 17,
        acType: "natural armor",
        hp: 97,
        hitDice: "13d8+39",
        speed: { walk: 20 },
        abilities: { str: 18, dex: 10, con: 17, int: 11, wis: 18, cha: 16 },
        savingThrows: { con: 8, int: 5, wis: 9, cha: 8 },
        skills: { history: 5, religion: 5 },
        damageVulnerabilities: ["fire"],
        damageImmunities: ["necrotic", "poison", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 14"],
        languages: ["the languages it knew in life"],
        cr: "15",
        xp: 13000,
        traits: [
            {
                name: "Magic Resistance",
                description: "The mummy lord has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Rejuvenation",
                description: "A destroyed mummy lord gains a new body in 24 hours if its heart is intact, regaining all its hit points and becoming active again. The new body appears within 5 feet of the mummy lord's heart."
            },
            {
                name: "Spellcasting",
                description: "The mummy lord is a 10th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 17, +9 to hit with spell attacks). The mummy lord has the following cleric spells prepared: Cantrips (at will): sacred flame, thaumaturgy. 1st level (4 slots): command, guiding bolt, shield of faith. 2nd level (3 slots): hold person, silence, spiritual weapon. 3rd level (3 slots): animate dead, dispel magic. 4th level (3 slots): divination, guardian of faith. 5th level (2 slots): contagion, insect plague. 6th level (1 slot): harm."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The mummy lord can use its Dreadful Glare and makes one attack with its rotting fist."
            },
            {
                name: "Rotting Fist",
                description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 14 (3d6 + 4) bludgeoning damage plus 21 (6d6) necrotic damage. If the target is a creature, it must succeed on a DC 16 Constitution saving throw or be cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic."
            },
            {
                name: "Dreadful Glare",
                description: "The mummy lord targets one creature it can see within 60 feet of it. If the target can see the mummy lord, it must succeed on a DC 16 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies and mummy lords for the next 24 hours."
            }
        ],
        legendaryActions: [
            {
                name: "Attack",
                description: "The mummy lord makes one attack with its rotting fist or uses its Dreadful Glare."
            },
            {
                name: "Blinding Dust",
                description: "Blinding dust and sand swirls magically around the mummy lord. Each creature within 5 feet of the mummy lord must succeed on a DC 16 Constitution saving throw or be blinded until the end of the creature's next turn."
            },
            {
                name: "Blasphemous Word (Costs 2 Actions)",
                description: "The mummy lord utters a blasphemous word. Each non-undead creature within 10 feet of the mummy lord that can hear the magical utterance must succeed on a DC 16 Constitution saving throw or be stunned until the end of the mummy lord's next turn."
            },
            {
                name: "Channel Negative Energy (Costs 2 Actions)",
                description: "The mummy lord magically unleashes negative energy. Creatures within 60 feet of the mummy lord, including ones behind barriers and around corners, can't regain hit points until the end of the mummy lord's next turn."
            },
            {
                name: "Whirlwind of Sand (Costs 2 Actions)",
                description: "The mummy lord magically transforms into a whirlwind of sand, moves up to 60 feet, and reverts to its normal form. While in whirlwind form, the mummy lord is immune to all damage, and it can't be grappled, petrified, knocked prone, restrained, or stunned. Equipment worn or carried by the mummy lord remain in its possession."
            }
        ]
    },
    "banshee": {
        name: "Banshee",
        size: "Medium",
        type: "Undead",
        alignment: "chaotic evil",
        ac: 12,
        hp: 58,
        hitDice: "13d8",
        speed: { walk: 0, fly: 40, hover: true },
        abilities: { str: 1, dex: 14, con: 10, int: 12, wis: 11, cha: 17 },
        savingThrows: { wis: 2, cha: 5 },
        damageResistances: ["acid", "fire", "lightning", "thunder", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["cold", "necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: ["Common", "Elvish"],
        cr: "4",
        xp: 1100,
        traits: [
            {
                name: "Detect Life",
                description: "The banshee can magically sense the presence of creatures up to 5 miles away that aren't undead or constructs. She knows the general direction they're in but not their exact locations."
            },
            {
                name: "Incorporeal Movement",
                description: "The banshee can move through other creatures and objects as if they were difficult terrain. She takes 5 (1d10) force damage if she ends her turn inside an object."
            }
        ],
        actions: [
            {
                name: "Corrupting Touch",
                description: "Melee Spell Attack: +4 to hit, reach 5 ft., one target. Hit: 12 (3d6 + 2) necrotic damage."
            },
            {
                name: "Horrifying Visage",
                description: "Each non-undead creature within 60 feet of the banshee that can see her must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, with disadvantage if the banshee is within line of sight, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the banshee's Horrifying Visage for the next 24 hours."
            },
            {
                name: "Wail (1/Day)",
                description: "The banshee releases a mournful wail, provided that she isn't in sunlight. This wail has no effect on constructs and undead. All other creatures within 30 feet of her that can hear her must make a DC 13 Constitution saving throw. On a failure, a creature drops to 0 hit points. On a success, a creature takes 10 (3d6) psychic damage."
            }
        ]
    },
    "death-knight": {
        name: "Death Knight",
        size: "Medium",
        type: "Undead",
        alignment: "chaotic evil",
        ac: 20,
        acType: "plate, shield",
        hp: 180,
        hitDice: "19d8+95",
        speed: { walk: 30 },
        abilities: { str: 20, dex: 11, con: 20, int: 12, wis: 16, cha: 18 },
        savingThrows: { dex: 6, wis: 9, cha: 10 },
        damageImmunities: ["necrotic", "poison"],
        conditionImmunities: ["exhaustion", "frightened", "poisoned"],
        senses: ["darkvision 120 ft.", "passive Perception 13"],
        languages: ["Abyssal", "Common"],
        cr: "17",
        xp: 18000,
        traits: [
            {
                name: "Magic Resistance",
                description: "The death knight has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Marshal Undead",
                description: "Unless the death knight is incapacitated, it and undead creatures of its choice within 60 feet of it have advantage on saving throws against features that turn undead."
            },
            {
                name: "Spellcasting",
                description: "The death knight is a 19th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 18, +10 to hit with spell attacks). It has the following paladin spells prepared: 1st level (4 slots): command, compelled duel, searing smite. 2nd level (3 slots): hold person, magic weapon. 3rd level (3 slots): dispel magic, elemental weapon. 4th level (3 slots): banishment, staggering smite. 5th level (2 slots): destructive wave (necrotic)."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The death knight makes three longsword attacks."
            },
            {
                name: "Longsword",
                description: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) slashing damage, or 10 (1d10 + 5) slashing damage if used with two hands, plus 18 (4d8) necrotic damage."
            },
            {
                name: "Hellfire Orb (1/Day)",
                description: "The death knight hurls a magical ball of fire that explodes at a point it can see within 120 feet of it. Each creature in a 20-foot-radius sphere centered on that point must make a DC 18 Dexterity saving throw. The sphere spreads around corners. A creature takes 35 (10d6) fire damage and 35 (10d6) necrotic damage on a failed save, or half as much damage on a successful one."
            }
        ],
        reactions: [
            {
                name: "Parry",
                description: "The death knight adds 6 to its AC against one melee attack that would hit it. To do so, the death knight must see the attacker and be wielding a melee weapon."
            }
        ],
        legendaryActions: [
            {
                name: "Attack",
                description: "The death knight makes a weapon attack."
            },
            {
                name: "Cowing Presence (Costs 2 Actions)",
                description: "Each creature of the death knight's choice that is within 30 feet of it must succeed on a DC 18 Wisdom saving throw or be frightened for 1 minute."
            },
            {
                name: "Spell (Costs 2 Actions)",
                description: "The death knight casts one spell."
            }
        ]
    },

    // ==========================================
    // ADDITIONAL FIENDS
    // ==========================================

    "balor": {
        name: "Balor",
        size: "Huge",
        type: "Fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 19,
        acType: "natural armor",
        hp: 262,
        hitDice: "21d12+126",
        speed: { walk: 40, fly: 80 },
        abilities: { str: 26, dex: 15, con: 22, int: 20, wis: 16, cha: 22 },
        savingThrows: { str: 14, con: 12, wis: 9, cha: 12 },
        damageResistances: ["cold", "lightning", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["truesight 120 ft.", "passive Perception 13"],
        languages: ["Abyssal", "telepathy 120 ft."],
        cr: "19",
        xp: 22000,
        traits: [
            {
                name: "Death Throes",
                description: "When the balor dies, it explodes, and each creature within 30 feet of it must make a DC 20 Dexterity saving throw, taking 70 (20d6) fire damage on a failed save, or half as much damage on a successful one. The explosion ignites flammable objects in that area that aren't being worn or carried, and it destroys the balor's weapons."
            },
            {
                name: "Fire Aura",
                description: "At the start of each of the balor's turns, each creature within 5 feet of it takes 10 (3d6) fire damage, and flammable objects in the aura that aren't being worn or carried ignite. A creature that touches the balor or hits it with a melee attack while within 5 feet of it takes 10 (3d6) fire damage."
            },
            {
                name: "Magic Resistance",
                description: "The balor has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Magic Weapons",
                description: "The balor's weapon attacks are magical."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The balor makes two attacks: one with its longsword and one with its whip."
            },
            {
                name: "Longsword",
                description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 21 (3d8 + 8) slashing damage plus 13 (3d8) lightning damage. If the balor scores a critical hit, it rolls damage dice three times, instead of twice."
            },
            {
                name: "Whip",
                description: "Melee Weapon Attack: +14 to hit, reach 30 ft., one target. Hit: 15 (2d6 + 8) slashing damage plus 10 (3d6) fire damage, and the target must succeed on a DC 20 Strength saving throw or be pulled up to 25 feet toward the balor."
            },
            {
                name: "Teleport",
                description: "The balor magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
            }
        ]
    },
    "pit-fiend": {
        name: "Pit Fiend",
        size: "Large",
        type: "Fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 19,
        acType: "natural armor",
        hp: 300,
        hitDice: "24d10+168",
        speed: { walk: 30, fly: 60 },
        abilities: { str: 26, dex: 14, con: 24, int: 22, wis: 18, cha: 24 },
        savingThrows: { dex: 8, con: 13, wis: 10 },
        damageResistances: ["cold", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["truesight 120 ft.", "passive Perception 14"],
        languages: ["Infernal", "telepathy 120 ft."],
        cr: "20",
        xp: 25000,
        traits: [
            {
                name: "Fear Aura",
                description: "Any creature hostile to the pit fiend that starts its turn within 20 feet of the pit fiend must make a DC 21 Wisdom saving throw, unless the pit fiend is incapacitated. On a failed save, the creature is frightened until the start of its next turn. If a creature's saving throw is successful, the creature is immune to the pit fiend's Fear Aura for the next 24 hours."
            },
            {
                name: "Magic Resistance",
                description: "The pit fiend has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Magic Weapons",
                description: "The pit fiend's weapon attacks are magical."
            },
            {
                name: "Innate Spellcasting",
                description: "The pit fiend's spellcasting ability is Charisma (spell save DC 21). The pit fiend can innately cast the following spells, requiring no material components: At will: detect magic, fireball. 3/day each: hold monster, wall of fire."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The pit fiend makes four attacks: one with its bite, one with its claw, one with its mace, and one with its tail."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 22 (4d6 + 8) piercing damage. The target must succeed on a DC 21 Constitution saving throw or become poisoned. While poisoned in this way, the target can't regain hit points, and it takes 21 (6d6) poison damage at the start of each of its turns. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 17 (2d8 + 8) slashing damage."
            },
            {
                name: "Mace",
                description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) bludgeoning damage plus 21 (6d6) fire damage."
            },
            {
                name: "Tail",
                description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 24 (3d10 + 8) bludgeoning damage."
            }
        ]
    },
    "erinyes": {
        name: "Erinyes",
        size: "Medium",
        type: "Fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 18,
        acType: "plate",
        hp: 153,
        hitDice: "18d8+72",
        speed: { walk: 30, fly: 60 },
        abilities: { str: 18, dex: 16, con: 18, int: 14, wis: 14, cha: 18 },
        savingThrows: { dex: 7, con: 8, wis: 6, cha: 8 },
        damageResistances: ["cold", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["truesight 120 ft.", "passive Perception 12"],
        languages: ["Infernal", "telepathy 120 ft."],
        cr: "12",
        xp: 8400,
        traits: [
            {
                name: "Hellish Weapons",
                description: "The erinyes's weapon attacks are magical and deal an extra 13 (3d8) poison damage on a hit (included in the attacks)."
            },
            {
                name: "Magic Resistance",
                description: "The erinyes has advantage on saving throws against spells and other magical effects."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The erinyes makes three attacks."
            },
            {
                name: "Longsword",
                description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands, plus 13 (3d8) poison damage."
            },
            {
                name: "Longbow",
                description: "Ranged Weapon Attack: +7 to hit, range 150/600 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 13 (3d8) poison damage, and the target must succeed on a DC 14 Constitution saving throw or be poisoned. The poison lasts until it is removed by the lesser restoration spell or similar magic."
            }
        ],
        reactions: [
            {
                name: "Parry",
                description: "The erinyes adds 4 to its AC against one melee attack that would hit it. To do so, the erinyes must see the attacker and be wielding a melee weapon."
            }
        ]
    },
    "horned-devil": {
        name: "Horned Devil",
        size: "Large",
        type: "Fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 18,
        acType: "natural armor",
        hp: 178,
        hitDice: "17d10+85",
        speed: { walk: 20, fly: 60 },
        abilities: { str: 22, dex: 17, con: 21, int: 12, wis: 16, cha: 17 },
        savingThrows: { str: 10, dex: 7, wis: 7, cha: 7 },
        damageResistances: ["cold", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft.", "passive Perception 13"],
        languages: ["Infernal", "telepathy 120 ft."],
        cr: "11",
        xp: 7200,
        traits: [
            {
                name: "Devil's Sight",
                description: "Magical darkness doesn't impede the devil's darkvision."
            },
            {
                name: "Magic Resistance",
                description: "The devil has advantage on saving throws against spells and other magical effects."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The devil makes three melee attacks: two with its fork and one with its tail. It can use Hurl Flame in place of any melee attack."
            },
            {
                name: "Fork",
                description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 15 (2d8 + 6) piercing damage."
            },
            {
                name: "Tail",
                description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 10 (1d8 + 6) piercing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 17 Constitution saving throw or lose 10 (3d6) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 10 (3d6). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing."
            },
            {
                name: "Hurl Flame",
                description: "Ranged Spell Attack: +7 to hit, range 150 ft., one target. Hit: 14 (4d6) fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire."
            }
        ]
    },
    "ice-devil": {
        name: "Ice Devil",
        size: "Large",
        type: "Fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 18,
        acType: "natural armor",
        hp: 180,
        hitDice: "19d10+76",
        speed: { walk: 40 },
        abilities: { str: 21, dex: 14, con: 18, int: 18, wis: 15, cha: 18 },
        savingThrows: { dex: 7, con: 9, wis: 7, cha: 9 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["cold", "fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 12"],
        languages: ["Infernal", "telepathy 120 ft."],
        cr: "14",
        xp: 11500,
        traits: [
            {
                name: "Devil's Sight",
                description: "Magical darkness doesn't impede the devil's darkvision."
            },
            {
                name: "Magic Resistance",
                description: "The devil has advantage on saving throws against spells and other magical effects."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The devil makes three attacks: one with its bite, one with its claws, and one with its tail."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) piercing damage plus 10 (3d6) cold damage."
            },
            {
                name: "Claws",
                description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 10 (2d4 + 5) slashing damage plus 10 (3d6) cold damage."
            },
            {
                name: "Tail",
                description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage plus 10 (3d6) cold damage."
            },
            {
                name: "Wall of Ice (Recharge 6)",
                description: "The devil magically forms an opaque wall of ice on a solid surface it can see within 60 feet of it. The wall is 1 foot thick and up to 30 feet long and 10 feet high, or it's a hemispherical dome up to 20 feet in diameter. When the wall appears, each creature in its space is pushed out of it by the shortest route. The creature chooses which side of the wall to end up on, unless the creature is incapacitated. The creature then makes a DC 17 Dexterity saving throw, taking 35 (10d6) cold damage on a failed save, or half as much damage on a successful one. The wall lasts for 1 minute or until the devil is incapacitated or dies. The wall can be damaged and breached; each 10-foot section has AC 5, 30 hit points, vulnerability to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage. If a section is destroyed, it leaves behind a sheet of frigid air in the space the wall occupied. Whenever a creature finishes moving through the frigid air on a turn, willingly or otherwise, the creature must make a DC 17 Constitution saving throw, taking 17 (5d6) cold damage on a failed save, or half as much damage on a successful one. The frigid air dissipates when the rest of the wall vanishes."
            }
        ]
    },
    "bone-devil": {
        name: "Bone Devil",
        size: "Large",
        type: "Fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 19,
        acType: "natural armor",
        hp: 142,
        hitDice: "15d10+60",
        speed: { walk: 40, fly: 40 },
        abilities: { str: 18, dex: 16, con: 18, int: 13, wis: 14, cha: 16 },
        savingThrows: { int: 5, wis: 6, cha: 7 },
        skills: { deception: 7, insight: 6 },
        damageResistances: ["cold", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft.", "passive Perception 12"],
        languages: ["Infernal", "telepathy 120 ft."],
        cr: "9",
        xp: 5000,
        traits: [
            {
                name: "Devil's Sight",
                description: "Magical darkness doesn't impede the devil's darkvision."
            },
            {
                name: "Magic Resistance",
                description: "The devil has advantage on saving throws against spells and other magical effects."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The devil makes three attacks: two with its claws and one with its sting."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 8 (1d8 + 4) slashing damage."
            },
            {
                name: "Sting",
                description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 13 (2d8 + 4) piercing damage plus 17 (5d6) poison damage, and the target must succeed on a DC 14 Constitution saving throw or become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ]
    },
    "chain-devil": {
        name: "Chain Devil",
        size: "Medium",
        type: "Fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 16,
        acType: "natural armor",
        hp: 85,
        hitDice: "10d8+40",
        speed: { walk: 30 },
        abilities: { str: 18, dex: 15, con: 18, int: 11, wis: 12, cha: 14 },
        savingThrows: { con: 7, wis: 4, cha: 5 },
        damageResistances: ["cold", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft.", "passive Perception 11"],
        languages: ["Infernal", "telepathy 120 ft."],
        cr: "8",
        xp: 3900,
        traits: [
            {
                name: "Devil's Sight",
                description: "Magical darkness doesn't impede the devil's darkvision."
            },
            {
                name: "Magic Resistance",
                description: "The devil has advantage on saving throws against spells and other magical effects."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The devil makes two attacks with its chains."
            },
            {
                name: "Chain",
                description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) slashing damage. The target is grappled (escape DC 14) if the devil isn't already grappling a creature. Until this grapple ends, the target is restrained and takes 7 (2d6) piercing damage at the start of each of its turns."
            },
            {
                name: "Animate Chains (Recharges after a Short or Long Rest)",
                description: "Up to four chains the devil can see within 60 feet of it magically sprout razor-edged barbs and animate under the devil's control, provided that the chains aren't being worn or carried. Each animated chain is an object with AC 20, 20 hit points, resistance to piercing damage, and immunity to psychic and thunder damage. When the devil uses Multiattack on its turn, it can use each animated chain to make one additional chain attack. An animated chain can grapple one creature of its own but can't make attacks while grappling. An animated chain reverts to its inanimate state if reduced to 0 hit points or if the devil is incapacitated or dies."
            }
        ],
        reactions: [
            {
                name: "Unnerving Mask",
                description: "When a creature the devil can see starts its turn within 30 feet of the devil, the devil can create the illusion that it looks like one of the creature's departed loved ones or bitter enemies. If the creature can see the devil, it must succeed on a DC 14 Wisdom saving throw or be frightened until the end of its turn."
            }
        ]
    },
    "bearded-devil": {
        name: "Bearded Devil",
        size: "Medium",
        type: "Fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 13,
        acType: "natural armor",
        hp: 52,
        hitDice: "8d8+16",
        speed: { walk: 30 },
        abilities: { str: 16, dex: 15, con: 15, int: 9, wis: 11, cha: 11 },
        savingThrows: { str: 5, con: 4, wis: 2 },
        damageResistances: ["cold", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft.", "passive Perception 10"],
        languages: ["Infernal", "telepathy 120 ft."],
        cr: "3",
        xp: 700,
        traits: [
            {
                name: "Devil's Sight",
                description: "Magical darkness doesn't impede the devil's darkvision."
            },
            {
                name: "Magic Resistance",
                description: "The devil has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Steadfast",
                description: "The devil can't be frightened while it can see an allied creature within 30 feet of it."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The devil makes two attacks: one with its beard and one with its glaive."
            },
            {
                name: "Beard",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. While poisoned in this way, the target can't regain hit points. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            },
            {
                name: "Glaive",
                description: "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 8 (1d10 + 3) slashing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 12 Constitution saving throw or lose 5 (1d10) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 5 (1d10). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing."
            }
        ]
    },
    "lemure": {
        name: "Lemure",
        size: "Medium",
        type: "Fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 7,
        hp: 13,
        hitDice: "3d8",
        speed: { walk: 15 },
        abilities: { str: 10, dex: 5, con: 11, int: 1, wis: 11, cha: 3 },
        damageResistances: ["cold"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["charmed", "frightened", "poisoned"],
        senses: ["darkvision 120 ft.", "passive Perception 10"],
        languages: ["understands Infernal but can't speak"],
        cr: "0",
        xp: 10,
        traits: [
            {
                name: "Devil's Sight",
                description: "Magical darkness doesn't impede the lemure's darkvision."
            },
            {
                name: "Hellish Rejuvenation",
                description: "A lemure that dies in the Nine Hells comes back to life with all its hit points in 1d10 days unless it is killed by a good-aligned creature with a bless spell cast on that creature or its remains are sprinkled with holy water."
            }
        ],
        actions: [
            {
                name: "Fist",
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage."
            }
        ]
    },
    "dretch": {
        name: "Dretch",
        size: "Small",
        type: "Fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 11,
        acType: "natural armor",
        hp: 18,
        hitDice: "4d6+4",
        speed: { walk: 20 },
        abilities: { str: 11, dex: 11, con: 12, int: 5, wis: 8, cha: 3 },
        damageResistances: ["cold", "fire", "lightning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 9"],
        languages: ["Abyssal", "telepathy 60 ft. (works only with creatures that understand Abyssal)"],
        cr: "1/4",
        xp: 50,
        actions: [
            {
                name: "Multiattack",
                description: "The dretch makes two attacks: one with its bite and one with its claws."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage."
            },
            {
                name: "Claws",
                description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (2d4) slashing damage."
            },
            {
                name: "Fetid Cloud (1/Day)",
                description: "A 10-foot radius of disgusting green gas extends out from the dretch. The gas spreads around corners, and its area is lightly obscured. It lasts for 1 minute or until a strong wind disperses it. Any creature that starts its turn in that area must succeed on a DC 11 Constitution saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target can take either an action or a bonus action on its turn, not both, and can't take reactions."
            }
        ]
    },
    "vrock": {
        name: "Vrock",
        size: "Large",
        type: "Fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 104,
        hitDice: "11d10+44",
        speed: { walk: 40, fly: 60 },
        abilities: { str: 17, dex: 15, con: 18, int: 8, wis: 13, cha: 8 },
        savingThrows: { dex: 5, wis: 4, cha: 2 },
        damageResistances: ["cold", "fire", "lightning", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft.", "passive Perception 11"],
        languages: ["Abyssal", "telepathy 120 ft."],
        cr: "6",
        xp: 2300,
        traits: [
            {
                name: "Magic Resistance",
                description: "The vrock has advantage on saving throws against spells and other magical effects."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The vrock makes two attacks: one with its beak and one with its talons."
            },
            {
                name: "Beak",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage."
            },
            {
                name: "Talons",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 14 (2d10 + 3) slashing damage."
            },
            {
                name: "Spores (Recharge 6)",
                description: "A 15-foot-radius cloud of toxic spores extends out from the vrock. The spores spread around corners. Each creature in that area must succeed on a DC 14 Constitution saving throw or become poisoned. While poisoned in this way, a target takes 5 (1d10) poison damage at the start of each of its turns. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Emptying a vial of holy water on the target also ends the effect on it."
            },
            {
                name: "Stunning Screech (1/Day)",
                description: "The vrock emits a horrific screech. Each creature within 20 feet of it that can hear it and that isn't a demon must succeed on a DC 14 Constitution saving throw or be stunned until the end of the vrock's next turn."
            }
        ]
    },
    "hezrou": {
        name: "Hezrou",
        size: "Large",
        type: "Fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 16,
        acType: "natural armor",
        hp: 136,
        hitDice: "13d10+65",
        speed: { walk: 30 },
        abilities: { str: 19, dex: 17, con: 20, int: 5, wis: 12, cha: 13 },
        savingThrows: { str: 7, con: 8, wis: 4 },
        damageResistances: ["cold", "fire", "lightning", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft.", "passive Perception 11"],
        languages: ["Abyssal", "telepathy 120 ft."],
        cr: "8",
        xp: 3900,
        traits: [
            {
                name: "Magic Resistance",
                description: "The hezrou has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Stench",
                description: "Any creature that starts its turn within 10 feet of the hezrou must succeed on a DC 14 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the hezrou's stench for 24 hours."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The hezrou makes three attacks: one with its bite and two with its claws."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) piercing damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
            }
        ]
    },
    "glabrezu": {
        name: "Glabrezu",
        size: "Large",
        type: "Fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 17,
        acType: "natural armor",
        hp: 157,
        hitDice: "15d10+75",
        speed: { walk: 40 },
        abilities: { str: 20, dex: 15, con: 21, int: 19, wis: 17, cha: 16 },
        savingThrows: { str: 9, con: 9, wis: 7, cha: 7 },
        damageResistances: ["cold", "fire", "lightning", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["truesight 120 ft.", "passive Perception 13"],
        languages: ["Abyssal", "telepathy 120 ft."],
        cr: "9",
        xp: 5000,
        traits: [
            {
                name: "Innate Spellcasting",
                description: "The glabrezu's spellcasting ability is Intelligence (spell save DC 16). The glabrezu can innately cast the following spells, requiring no material components: At will: darkness, detect magic, dispel magic. 1/day each: confusion, fly, power word stun."
            },
            {
                name: "Magic Resistance",
                description: "The glabrezu has advantage on saving throws against spells and other magical effects."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The glabrezu makes four attacks: two with its pincers and two with its fists. Alternatively, it makes two attacks with its pincers and casts one spell."
            },
            {
                name: "Pincer",
                description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) bludgeoning damage. If the target is a Medium or smaller creature, it is grappled (escape DC 15). The glabrezu has two pincers, each of which can grapple only one target."
            },
            {
                name: "Fist",
                description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) bludgeoning damage."
            }
        ]
    },
    "marilith": {
        name: "Marilith",
        size: "Large",
        type: "Fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 18,
        acType: "natural armor",
        hp: 189,
        hitDice: "18d10+90",
        speed: { walk: 40 },
        abilities: { str: 18, dex: 20, con: 20, int: 18, wis: 16, cha: 20 },
        savingThrows: { str: 9, con: 10, wis: 8, cha: 10 },
        damageResistances: ["cold", "fire", "lightning", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["truesight 120 ft.", "passive Perception 13"],
        languages: ["Abyssal", "telepathy 120 ft."],
        cr: "16",
        xp: 15000,
        traits: [
            {
                name: "Magic Resistance",
                description: "The marilith has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Magic Weapons",
                description: "The marilith's weapon attacks are magical."
            },
            {
                name: "Reactive",
                description: "The marilith can take one reaction on every turn in a combat."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The marilith makes seven attacks: six with its longswords and one with its tail."
            },
            {
                name: "Longsword",
                description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage."
            },
            {
                name: "Tail",
                description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit: 15 (2d10 + 4) bludgeoning damage. If the target is Medium or smaller, it is grappled (escape DC 19). Until this grapple ends, the target is restrained, the marilith can automatically hit the target with its tail, and the marilith can't make tail attacks against other targets."
            },
            {
                name: "Teleport",
                description: "The marilith magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
            }
        ],
        reactions: [
            {
                name: "Parry",
                description: "The marilith adds 5 to its AC against one melee attack that would hit it. To do so, the marilith must see the attacker and be wielding a melee weapon."
            }
        ]
    },
    "nalfeshnee": {
        name: "Nalfeshnee",
        size: "Large",
        type: "Fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 18,
        acType: "natural armor",
        hp: 184,
        hitDice: "16d10+96",
        speed: { walk: 20, fly: 30 },
        abilities: { str: 21, dex: 10, con: 22, int: 19, wis: 12, cha: 15 },
        savingThrows: { con: 11, int: 9, wis: 6, cha: 7 },
        damageResistances: ["cold", "fire", "lightning", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["truesight 120 ft.", "passive Perception 11"],
        languages: ["Abyssal", "telepathy 120 ft."],
        cr: "13",
        xp: 10000,
        traits: [
            {
                name: "Magic Resistance",
                description: "The nalfeshnee has advantage on saving throws against spells and other magical effects."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The nalfeshnee uses Horror Nimbus if it can. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 32 (5d10 + 5) piercing damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 15 (3d6 + 5) slashing damage."
            },
            {
                name: "Horror Nimbus (Recharge 5-6)",
                description: "The nalfeshnee magically emits scintillating, multicolored light. Each creature within 15 feet of the nalfeshnee that can see the light must succeed on a DC 15 Wisdom saving throw or be frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the nalfeshnee's Horror Nimbus for the next 24 hours."
            },
            {
                name: "Teleport",
                description: "The nalfeshnee magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
            }
        ]
    },
    "succubus-incubus": {
        name: "Succubus/Incubus",
        size: "Medium",
        type: "Fiend",
        subtype: "shapechanger",
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 66,
        hitDice: "12d8+12",
        speed: { walk: 30, fly: 60 },
        abilities: { str: 8, dex: 17, con: 13, int: 15, wis: 12, cha: 20 },
        skills: { deception: 9, insight: 5, perception: 5, persuasion: 9, stealth: 7 },
        damageResistances: ["cold", "fire", "lightning", "poison", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft.", "passive Perception 15"],
        languages: ["Abyssal", "Common", "Infernal", "telepathy 60 ft."],
        cr: "4",
        xp: 1100,
        traits: [
            {
                name: "Telepathic Bond",
                description: "The fiend ignores the range restriction on its telepathy when communicating with a creature it has charmed. The two don't even need to be on the same plane of existence."
            },
            {
                name: "Shapechanger",
                description: "The fiend can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Without wings, the fiend loses its flying speed. Other than its size and speed, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            }
        ],
        actions: [
            {
                name: "Claw (Fiend Form Only)",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage."
            },
            {
                name: "Charm",
                description: "One humanoid the fiend can see within 30 feet of it must succeed on a DC 15 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the fiend's verbal or telepathic commands. If the target suffers any harm or receives a suicidal command, it can repeat the saving throw, ending the effect on a success. If the target successfully saves against the effect, or if the effect on it ends, the target is immune to this fiend's Charm for the next 24 hours. The fiend can have only one target charmed at a time. If it charms another, the effect on the previous target ends."
            },
            {
                name: "Draining Kiss",
                description: "The fiend kisses a creature charmed by it or a willing creature. The target must make a DC 15 Constitution saving throw against this magic, taking 32 (5d10 + 5) psychic damage on a failed save, or half as much damage on a successful one. The target's hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
            },
            {
                name: "Etherealness",
                description: "The fiend magically enters the Ethereal Plane from the Material Plane, or vice versa."
            }
        ]
    },

    // ==========================================
    // ADDITIONAL GIANTS
    // ==========================================

    "hill-giant": {
        name: "Hill Giant",
        size: "Huge",
        type: "Giant",
        alignment: "chaotic evil",
        ac: 13,
        acType: "natural armor",
        hp: 105,
        hitDice: "10d12+40",
        speed: { walk: 40 },
        abilities: { str: 21, dex: 8, con: 19, int: 5, wis: 9, cha: 6 },
        skills: { perception: 2 },
        senses: ["passive Perception 12"],
        languages: ["Giant"],
        cr: "5",
        xp: 1800,
        actions: [
            {
                name: "Multiattack",
                description: "The giant makes two greatclub attacks."
            },
            {
                name: "Greatclub",
                description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 18 (3d8 + 5) bludgeoning damage."
            },
            {
                name: "Rock",
                description: "Ranged Weapon Attack: +8 to hit, range 60/240 ft., one target. Hit: 21 (3d10 + 5) bludgeoning damage."
            }
        ]
    },
    "cloud-giant": {
        name: "Cloud Giant",
        size: "Huge",
        type: "Giant",
        alignment: "neutral good (50%) or neutral evil (50%)",
        ac: 14,
        acType: "natural armor",
        hp: 200,
        hitDice: "16d12+96",
        speed: { walk: 40 },
        abilities: { str: 27, dex: 10, con: 22, int: 12, wis: 16, cha: 16 },
        savingThrows: { con: 10, wis: 7, cha: 7 },
        skills: { insight: 7, perception: 7 },
        senses: ["passive Perception 17"],
        languages: ["Common", "Giant"],
        cr: "9",
        xp: 5000,
        traits: [
            {
                name: "Keen Smell",
                description: "The giant has advantage on Wisdom (Perception) checks that rely on smell."
            },
            {
                name: "Innate Spellcasting",
                description: "The giant's innate spellcasting ability is Charisma. It can innately cast the following spells, requiring no material components: At will: detect magic, fog cloud, light. 3/day each: feather fall, fly, misty step, telekinesis. 1/day each: control weather, gaseous form."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The giant makes two morningstar attacks."
            },
            {
                name: "Morningstar",
                description: "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 21 (3d8 + 8) piercing damage."
            },
            {
                name: "Rock",
                description: "Ranged Weapon Attack: +12 to hit, range 60/240 ft., one target. Hit: 30 (4d10 + 8) bludgeoning damage."
            }
        ]
    },
    "storm-giant": {
        name: "Storm Giant",
        size: "Huge",
        type: "Giant",
        alignment: "chaotic good",
        ac: 16,
        acType: "scale mail",
        hp: 230,
        hitDice: "20d12+100",
        speed: { walk: 50, swim: 50 },
        abilities: { str: 29, dex: 14, con: 20, int: 16, wis: 18, cha: 18 },
        savingThrows: { str: 14, con: 10, wis: 9, cha: 9 },
        skills: { arcana: 8, athletics: 14, history: 8, perception: 9 },
        damageResistances: ["cold"],
        damageImmunities: ["lightning", "thunder"],
        senses: ["passive Perception 19"],
        languages: ["Common", "Giant"],
        cr: "13",
        xp: 10000,
        traits: [
            {
                name: "Amphibious",
                description: "The giant can breathe air and water."
            },
            {
                name: "Innate Spellcasting",
                description: "The giant's innate spellcasting ability is Charisma (spell save DC 17). It can innately cast the following spells, requiring no material components: At will: detect magic, feather fall, levitate, light. 3/day each: control weather, water breathing."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The giant makes two greatsword attacks."
            },
            {
                name: "Greatsword",
                description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 30 (6d6 + 9) slashing damage."
            },
            {
                name: "Rock",
                description: "Ranged Weapon Attack: +14 to hit, range 60/240 ft., one target. Hit: 35 (4d12 + 9) bludgeoning damage."
            },
            {
                name: "Lightning Strike (Recharge 5-6)",
                description: "The giant hurls a magical lightning bolt at a point it can see within 500 feet of it. Each creature within 10 feet of that point must make a DC 17 Dexterity saving throw, taking 54 (12d8) lightning damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    "cyclops": {
        name: "Cyclops",
        size: "Huge",
        type: "Giant",
        alignment: "chaotic neutral",
        ac: 14,
        acType: "natural armor",
        hp: 138,
        hitDice: "12d12+60",
        speed: { walk: 30 },
        abilities: { str: 22, dex: 11, con: 20, int: 8, wis: 6, cha: 10 },
        senses: ["passive Perception 8"],
        languages: ["Giant"],
        cr: "6",
        xp: 2300,
        traits: [
            {
                name: "Poor Depth Perception",
                description: "The cyclops has disadvantage on any attack roll against a target more than 30 feet away."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The cyclops makes two greatclub attacks."
            },
            {
                name: "Greatclub",
                description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 19 (3d8 + 6) bludgeoning damage."
            },
            {
                name: "Rock",
                description: "Ranged Weapon Attack: +9 to hit, range 30/120 ft., one target. Hit: 28 (4d10 + 6) bludgeoning damage."
            }
        ]
    },
    "oni": {
        name: "Oni",
        size: "Large",
        type: "Giant",
        alignment: "lawful evil",
        ac: 16,
        acType: "chain mail",
        hp: 110,
        hitDice: "13d10+39",
        speed: { walk: 30, fly: 30 },
        abilities: { str: 19, dex: 11, con: 16, int: 14, wis: 12, cha: 15 },
        savingThrows: { dex: 3, con: 6, wis: 4, cha: 5 },
        skills: { arcana: 5, deception: 8, perception: 4 },
        senses: ["darkvision 60 ft.", "passive Perception 14"],
        languages: ["Common", "Giant"],
        cr: "7",
        xp: 2900,
        traits: [
            {
                name: "Innate Spellcasting",
                description: "The oni's innate spellcasting ability is Charisma (spell save DC 13). The oni can innately cast the following spells, requiring no material components: At will: darkness, invisibility. 1/day each: charm person, cone of cold, gaseous form, sleep."
            },
            {
                name: "Magic Weapons",
                description: "The oni's weapon attacks are magical."
            },
            {
                name: "Regeneration",
                description: "The oni regains 10 hit points at the start of its turn if it has at least 1 hit point."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The oni makes two attacks, either with its claws or its glaive."
            },
            {
                name: "Claw (Oni Form Only)",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage."
            },
            {
                name: "Glaive",
                description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) slashing damage, or 9 (1d10 + 4) slashing damage in Small or Medium form."
            },
            {
                name: "Change Shape",
                description: "The oni magically polymorphs into a Small or Medium humanoid, into a Large giant, or back into its true form. Other than its size, its statistics are the same in each form. The only equipment that is transformed is its glaive, which shrinks so that it can be wielded in humanoid form. If the oni dies, it reverts to its true form, and its glaive reverts to its normal size."
            }
        ]
    }
};

// Helper to get CR as a numeric value for sorting/filtering
function getCRValue(cr) {
    if (cr === "0") return 0;
    if (cr === "1/8") return 0.125;
    if (cr === "1/4") return 0.25;
    if (cr === "1/2") return 0.5;
    return parseFloat(cr);
}

// Get all unique monster types
function getMonsterTypes() {
    const types = new Set();
    Object.values(MONSTERS).forEach(monster => types.add(monster.type));
    return Array.from(types).sort();
}

// Get all unique sizes
function getMonsterSizes() {
    return ["Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan"];
}

// Get CR display string
function getCRDisplay(cr) {
    return cr;
}
