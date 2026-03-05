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
