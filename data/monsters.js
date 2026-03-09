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
    "air-elemental": {
        name: "Air Elemental",
        size: "Large",
        type: "Elemental",
        alignment: "neutral",
        ac: 15,
        hp: 90,
        hitDice: "12d10+24",
        speed: { fly: 90 },
        abilities: { str: 14, dex: 20, con: 14, int: 6, wis: 10, cha: 6 },
        damageResistances: ["lightning", "thunder", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: ["Auran"],
        cr: "5",
        xp: 1800,
        traits: [
            {
                name: "Air Form",
                description: "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The elemental makes two slam attacks."
            },
            {
                name: "Slam",
                description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage."
            },
            {
                name: "Whirlwind (Recharge 4-6)",
                description: "Each creature in the elemental's space must make a DC 13 Strength saving throw. On a failure, a target takes 15 (3d8 + 2) bludgeoning damage and is flung up 20 feet away from the elemental in a random direction and knocked prone. If a thrown target strikes an object, such as a wall or floor, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 13 Dexterity saving throw or take the same damage and be knocked prone. If the saving throw is successful, the target takes half the bludgeoning damage and isn't flung away or knocked prone."
            }
        ]
    },
    "water-elemental": {
        name: "Water Elemental",
        size: "Large",
        type: "Elemental",
        alignment: "neutral",
        ac: 14,
        acType: "natural armor",
        hp: 114,
        hitDice: "12d10+48",
        speed: { walk: 30, swim: 90 },
        abilities: { str: 18, dex: 14, con: 18, int: 5, wis: 10, cha: 8 },
        damageResistances: ["acid", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: ["Aquan"],
        cr: "5",
        xp: 1800,
        traits: [
            {
                name: "Water Form",
                description: "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
            },
            {
                name: "Freeze",
                description: "If the elemental takes cold damage, it partially freezes; its speed is reduced by 20 feet until the end of its next turn."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The elemental makes two slam attacks."
            },
            {
                name: "Slam",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage."
            },
            {
                name: "Whelm (Recharge 4-6)",
                description: "Each creature in the elemental's space must make a DC 15 Strength saving throw. On a failure, a target takes 13 (2d8 + 4) bludgeoning damage. If it is Large or smaller, it is also grappled (escape DC 14). Until this grapple ends, the target is restrained and unable to breathe unless it can breathe water. If the saving throw is successful, the target is pushed out of the elemental's space. The elemental can grapple one Large creature or up to two Medium or smaller creatures at one time. At the start of each of the elemental's turns, each target grappled by it takes 13 (2d8 + 4) bludgeoning damage. A creature within 5 feet of the elemental can pull a creature or object out of it by taking an action to make a DC 14 Strength check and succeeding."
            }
        ]
    },
    "djinni": {
        name: "Djinni",
        size: "Large",
        type: "Elemental",
        alignment: "chaotic good",
        ac: 17,
        acType: "natural armor",
        hp: 161,
        hitDice: "14d10+84",
        speed: { walk: 30, fly: 90 },
        abilities: { str: 21, dex: 15, con: 22, int: 15, wis: 16, cha: 20 },
        savingThrows: { dex: 6, wis: 7, cha: 9 },
        damageImmunities: ["lightning", "thunder"],
        senses: ["darkvision 120 ft.", "passive Perception 13"],
        languages: ["Auran"],
        cr: "11",
        xp: 7200,
        traits: [
            {
                name: "Elemental Demise",
                description: "If the djinni dies, its body disintegrates into a warm breeze, leaving behind only equipment the djinni was wearing or carrying."
            },
            {
                name: "Innate Spellcasting",
                description: "The djinni's innate spellcasting ability is Charisma (spell save DC 17). It can innately cast the following spells, requiring no material components:\n\nAt will: detect evil and good, detect magic, thunderwave\n3/day each: create food and water, tongues, wind walk\n1/day each: conjure elemental (air elemental only), creation, gaseous form, invisibility, major image, plane shift"
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The djinni makes three scimitar attacks."
            },
            {
                name: "Scimitar",
                description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage plus 3 (1d6) lightning damage."
            },
            {
                name: "Create Whirlwind",
                description: "A 5-foot-radius, 30-foot-tall cylinder of swirling air magically forms on a point the djinni can see within 120 feet of it. The whirlwind lasts as long as the djinni maintains concentration (as if concentrating on a spell). Any creature but the djinni that enters the whirlwind must succeed on a DC 18 Strength saving throw or be restrained by it. The djinni can move the whirlwind up to 60 feet as an action, and creatures restrained by the whirlwind move with it. The whirlwind ends if the djinni loses sight of it. A creature can use its action to free a creature restrained by the whirlwind, including itself, by succeeding on a DC 18 Strength check. If the check succeeds, the creature is no longer restrained and moves to the nearest space outside the whirlwind."
            }
        ]
    },
    "efreeti": {
        name: "Efreeti",
        size: "Large",
        type: "Elemental",
        alignment: "lawful evil",
        ac: 17,
        acType: "natural armor",
        hp: 200,
        hitDice: "16d10+112",
        speed: { walk: 40, fly: 60 },
        abilities: { str: 22, dex: 12, con: 24, int: 16, wis: 15, cha: 16 },
        savingThrows: { int: 7, wis: 6, cha: 7 },
        damageImmunities: ["fire"],
        senses: ["darkvision 120 ft.", "passive Perception 12"],
        languages: ["Ignan"],
        cr: "11",
        xp: 7200,
        traits: [
            {
                name: "Elemental Demise",
                description: "If the efreeti dies, its body disintegrates in a flash of fire and puff of smoke, leaving behind only equipment the efreeti was wearing or carrying."
            },
            {
                name: "Innate Spellcasting",
                description: "The efreeti's innate spellcasting ability is Charisma (spell save DC 15). It can innately cast the following spells, requiring no material components:\n\nAt will: detect magic\n3/day each: enlarge/reduce, tongues\n1/day each: conjure elemental (fire elemental only), gaseous form, invisibility, major image, plane shift, wall of fire"
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The efreeti makes two scimitar attacks or uses its Hurl Flame twice."
            },
            {
                name: "Scimitar",
                description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage plus 7 (2d6) fire damage."
            },
            {
                name: "Hurl Flame",
                description: "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 17 (5d6) fire damage."
            }
        ]
    },
    "dao": {
        name: "Dao",
        size: "Large",
        type: "Elemental",
        alignment: "neutral evil",
        ac: 18,
        acType: "natural armor",
        hp: 187,
        hitDice: "15d10+105",
        speed: { walk: 30, burrow: 30, fly: 30 },
        abilities: { str: 23, dex: 12, con: 24, int: 12, wis: 13, cha: 14 },
        savingThrows: { int: 5, wis: 5, cha: 6 },
        conditionImmunities: ["petrified"],
        senses: ["darkvision 120 ft.", "passive Perception 11"],
        languages: ["Terran"],
        cr: "11",
        xp: 7200,
        traits: [
            {
                name: "Earth Glide",
                description: "The dao can burrow through nonmagical, unworked earth and stone. While doing so, the dao doesn't disturb the material it moves through."
            },
            {
                name: "Elemental Demise",
                description: "If the dao dies, its body disintegrates into crystalline powder, leaving behind only equipment the dao was wearing or carrying."
            },
            {
                name: "Sure-Footed",
                description: "The dao has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
            },
            {
                name: "Innate Spellcasting",
                description: "The dao's innate spellcasting ability is Charisma (spell save DC 14). It can innately cast the following spells, requiring no material components:\n\nAt will: detect evil and good, detect magic, stone shape\n3/day each: passwall, move earth, tongues\n1/day each: conjure elemental (earth elemental only), gaseous form, invisibility, phantasmal killer, plane shift, wall of stone"
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The dao makes two fist attacks or two maul attacks."
            },
            {
                name: "Fist",
                description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage."
            },
            {
                name: "Maul",
                description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 20 (4d6 + 6) bludgeoning damage. If the target is a Huge or smaller creature, it must succeed on a DC 18 Strength check or be knocked prone."
            }
        ]
    },
    "marid": {
        name: "Marid",
        size: "Large",
        type: "Elemental",
        alignment: "chaotic neutral",
        ac: 17,
        acType: "natural armor",
        hp: 229,
        hitDice: "17d10+136",
        speed: { walk: 30, fly: 60, swim: 90 },
        abilities: { str: 22, dex: 12, con: 26, int: 18, wis: 17, cha: 18 },
        savingThrows: { dex: 5, wis: 7, cha: 8 },
        damageResistances: ["acid", "cold", "lightning"],
        senses: ["blindsight 30 ft.", "darkvision 120 ft.", "passive Perception 13"],
        languages: ["Aquan"],
        cr: "11",
        xp: 7200,
        traits: [
            {
                name: "Amphibious",
                description: "The marid can breathe air and water."
            },
            {
                name: "Elemental Demise",
                description: "If the marid dies, its body disintegrates into a burst of water and foam, leaving behind only equipment the marid was wearing or carrying."
            },
            {
                name: "Innate Spellcasting",
                description: "The marid's innate spellcasting ability is Charisma (spell save DC 16). It can innately cast the following spells, requiring no material components:\n\nAt will: create or destroy water, detect evil and good, detect magic, fog cloud, purify food and drink\n3/day each: tongues, water breathing, water walk\n1/day each: conjure elemental (water elemental only), control water, gaseous form, invisibility, plane shift"
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The marid makes two trident attacks."
            },
            {
                name: "Trident",
                description: "Melee or Ranged Weapon Attack: +10 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 13 (2d6 + 6) piercing damage, or 15 (2d8 + 6) piercing damage if used with two hands to make a melee attack."
            },
            {
                name: "Water Jet",
                description: "The marid magically shoots water in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw. On a failure, a target takes 21 (6d6) bludgeoning damage and, if it is Huge or smaller, is pushed up to 20 feet away from the marid and knocked prone. On a success, a target takes half the bludgeoning damage, but is neither pushed nor knocked prone."
            }
        ]
    },

    // Mephits and Other Elementals
    "dust-mephit": {
        name: "Dust Mephit",
        size: "Small",
        type: "Elemental",
        alignment: "neutral evil",
        ac: 12,
        hp: 17,
        hitDice: "5d6",
        speed: { walk: 30, fly: 30 },
        abilities: { str: 5, dex: 14, con: 10, int: 9, wis: 11, cha: 10 },
        skills: { perception: 2, stealth: 4 },
        damageVulnerabilities: ["fire"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 12"],
        languages: ["Auran", "Terran"],
        cr: "1/2",
        xp: 100,
        traits: [
            {
                name: "Death Burst",
                description: "When the mephit dies, it explodes in a burst of dust. Each creature within 5 feet of it must then succeed on a DC 10 Constitution saving throw or be blinded for 1 minute. A blinded creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            },
            {
                name: "Innate Spellcasting (1/Day)",
                description: "The mephit can innately cast sleep, requiring no material components. Its innate spellcasting ability is Charisma."
            }
        ],
        actions: [
            {
                name: "Claws",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) slashing damage."
            },
            {
                name: "Blinding Breath (Recharge 6)",
                description: "The mephit exhales a 15-foot cone of blinding dust. Each creature in that area must succeed on a DC 10 Dexterity saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ]
    },
    "ice-mephit": {
        name: "Ice Mephit",
        size: "Small",
        type: "Elemental",
        alignment: "neutral evil",
        ac: 11,
        hp: 21,
        hitDice: "6d6",
        speed: { walk: 30, fly: 30 },
        abilities: { str: 7, dex: 13, con: 10, int: 9, wis: 11, cha: 12 },
        skills: { perception: 2, stealth: 3 },
        damageVulnerabilities: ["bludgeoning", "fire"],
        damageImmunities: ["cold", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 12"],
        languages: ["Aquan", "Auran"],
        cr: "1/2",
        xp: 100,
        traits: [
            {
                name: "Death Burst",
                description: "When the mephit dies, it explodes in a burst of jagged ice. Each creature within 5 feet of it must make a DC 10 Dexterity saving throw, taking 4 (1d8) slashing damage on a failed save, or half as much damage on a successful one."
            },
            {
                name: "False Appearance",
                description: "While the mephit remains motionless, it is indistinguishable from an ordinary shard of ice."
            },
            {
                name: "Innate Spellcasting (1/Day)",
                description: "The mephit can innately cast fog cloud, requiring no material components. Its innate spellcasting ability is Charisma."
            }
        ],
        actions: [
            {
                name: "Claws",
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) slashing damage plus 2 (1d4) cold damage."
            },
            {
                name: "Frost Breath (Recharge 6)",
                description: "The mephit exhales a 15-foot cone of cold air. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 5 (2d4) cold damage on a failed save, or half as much damage on a successful one. A creature that fails the save also has its speed reduced by 10 feet until the end of its next turn."
            }
        ]
    },
    "magma-mephit": {
        name: "Magma Mephit",
        size: "Small",
        type: "Elemental",
        alignment: "neutral evil",
        ac: 11,
        hp: 22,
        hitDice: "5d6+5",
        speed: { walk: 30, fly: 30 },
        abilities: { str: 8, dex: 12, con: 12, int: 7, wis: 10, cha: 10 },
        skills: { stealth: 3 },
        damageVulnerabilities: ["cold"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: ["Ignan", "Terran"],
        cr: "1/2",
        xp: 100,
        traits: [
            {
                name: "Death Burst",
                description: "When the mephit dies, it explodes in a burst of lava. Each creature within 5 feet of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one."
            },
            {
                name: "False Appearance",
                description: "While the mephit remains motionless, it is indistinguishable from an ordinary mound of magma."
            },
            {
                name: "Innate Spellcasting (1/Day)",
                description: "The mephit can innately cast heat metal (spell save DC 10), requiring no material components. Its innate spellcasting ability is Charisma."
            }
        ],
        actions: [
            {
                name: "Claws",
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) slashing damage plus 2 (1d4) fire damage."
            },
            {
                name: "Fire Breath (Recharge 6)",
                description: "The mephit exhales a 15-foot cone of fire. Each creature in that area must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    "mud-mephit": {
        name: "Mud Mephit",
        size: "Small",
        type: "Elemental",
        alignment: "neutral evil",
        ac: 11,
        hp: 27,
        hitDice: "6d6+6",
        speed: { walk: 20, fly: 20, swim: 20 },
        abilities: { str: 8, dex: 12, con: 12, int: 9, wis: 11, cha: 7 },
        skills: { stealth: 3 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: ["Aquan", "Terran"],
        cr: "1/4",
        xp: 50,
        traits: [
            {
                name: "Death Burst",
                description: "When the mephit dies, it explodes in a burst of sticky mud. Each Small or smaller creature within 5 feet of it must succeed on a DC 11 Dexterity saving throw or be restrained until the end of the creature's next turn."
            },
            {
                name: "False Appearance",
                description: "While the mephit remains motionless, it is indistinguishable from an ordinary mound of mud."
            }
        ],
        actions: [
            {
                name: "Fists",
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) bludgeoning damage."
            },
            {
                name: "Mud Breath (Recharge 6)",
                description: "The mephit belches viscid mud at one creature within 5 feet of it. If the target is Medium or smaller, it must succeed on a DC 11 Dexterity saving throw or be restrained for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ]
    },
    "smoke-mephit": {
        name: "Smoke Mephit",
        size: "Small",
        type: "Elemental",
        alignment: "neutral evil",
        ac: 12,
        hp: 22,
        hitDice: "5d6+5",
        speed: { walk: 30, fly: 30 },
        abilities: { str: 6, dex: 14, con: 12, int: 10, wis: 10, cha: 11 },
        skills: { perception: 2, stealth: 4 },
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 12"],
        languages: ["Auran", "Ignan"],
        cr: "1/4",
        xp: 50,
        traits: [
            {
                name: "Death Burst",
                description: "When the mephit dies, it leaves behind a cloud of smoke that fills a 5-foot-radius sphere centered on its space. The sphere is heavily obscured. Wind disperses the cloud, which otherwise lasts for 1 minute."
            },
            {
                name: "Innate Spellcasting (1/Day)",
                description: "The mephit can innately cast dancing lights, requiring no material components. Its innate spellcasting ability is Charisma."
            }
        ],
        actions: [
            {
                name: "Claws",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) slashing damage."
            },
            {
                name: "Cinder Breath (Recharge 6)",
                description: "The mephit exhales a 15-foot cone of smoldering ash. Each creature in that area must succeed on a DC 10 Dexterity saving throw or be blinded until the end of the mephit's next turn."
            }
        ]
    },
    "steam-mephit": {
        name: "Steam Mephit",
        size: "Small",
        type: "Elemental",
        alignment: "neutral evil",
        ac: 10,
        hp: 21,
        hitDice: "6d6",
        speed: { walk: 30, fly: 30 },
        abilities: { str: 5, dex: 11, con: 10, int: 11, wis: 10, cha: 12 },
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: ["Aquan", "Ignan"],
        cr: "1/4",
        xp: 50,
        traits: [
            {
                name: "Death Burst",
                description: "When the mephit dies, it explodes in a cloud of steam. Each creature within 5 feet of the mephit must succeed on a DC 10 Dexterity saving throw or take 4 (1d8) fire damage."
            },
            {
                name: "Innate Spellcasting (1/Day)",
                description: "The mephit can innately cast blur, requiring no material components. Its innate spellcasting ability is Charisma."
            }
        ],
        actions: [
            {
                name: "Claws",
                description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 2 (1d4) slashing damage plus 2 (1d4) fire damage."
            },
            {
                name: "Steam Breath (Recharge 6)",
                description: "The mephit exhales a 15-foot cone of scalding steam. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 4 (1d8) fire damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    "azer": {
        name: "Azer",
        size: "Medium",
        type: "Elemental",
        alignment: "lawful neutral",
        ac: 17,
        acType: "natural armor, shield",
        hp: 39,
        hitDice: "6d8+12",
        speed: { walk: 30 },
        abilities: { str: 17, dex: 12, con: 15, int: 12, wis: 13, cha: 10 },
        savingThrows: { con: 4 },
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["passive Perception 11"],
        languages: ["Ignan"],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Heated Body",
                description: "A creature that touches the azer or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage."
            },
            {
                name: "Heated Weapons",
                description: "When the azer hits with a metal melee weapon, it deals an extra 3 (1d6) fire damage (included in the attack)."
            },
            {
                name: "Illumination",
                description: "The azer sheds bright light in a 10-foot radius and dim light for an additional 10 feet."
            }
        ],
        actions: [
            {
                name: "Warhammer",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage, or 8 (1d10 + 3) bludgeoning damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage."
            }
        ]
    },
    "gargoyle": {
        name: "Gargoyle",
        size: "Medium",
        type: "Elemental",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 52,
        hitDice: "7d8+21",
        speed: { walk: 30, fly: 60 },
        abilities: { str: 15, dex: 11, con: 16, int: 6, wis: 11, cha: 7 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "petrified", "poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: ["Terran"],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "False Appearance",
                description: "While the gargoyle remains motionless, it is indistinguishable from an inanimate statue."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The gargoyle makes two attacks: one with its bite and one with its claws."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
            },
            {
                name: "Claws",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage."
            }
        ]
    },
    "magmin": {
        name: "Magmin",
        size: "Small",
        type: "Elemental",
        alignment: "chaotic neutral",
        ac: 14,
        acType: "natural armor",
        hp: 9,
        hitDice: "2d6+2",
        speed: { walk: 30 },
        abilities: { str: 7, dex: 15, con: 12, int: 8, wis: 11, cha: 10 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["fire"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: ["Ignan"],
        cr: "1/2",
        xp: 100,
        traits: [
            {
                name: "Death Burst",
                description: "When the magmin dies, it explodes in a burst of fire and magma. Each creature within 10 feet of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one. Flammable objects that aren't being worn or carried in that area are ignited."
            },
            {
                name: "Ignited Illumination",
                description: "As a bonus action, the magmin can set itself ablaze or extinguish its flames. While ablaze, the magmin sheds bright light in a 10-foot radius and dim light for an additional 10 feet."
            }
        ],
        actions: [
            {
                name: "Touch",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d6) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 3 (1d6) fire damage at the end of each of its turns."
            }
        ]
    },
    "water-weird": {
        name: "Water Weird",
        size: "Large",
        type: "Elemental",
        alignment: "neutral",
        ac: 13,
        hp: 58,
        hitDice: "9d10+9",
        speed: { walk: 0, swim: 60 },
        abilities: { str: 17, dex: 16, con: 13, int: 11, wis: 10, cha: 10 },
        damageResistances: ["fire", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "poisoned", "restrained", "prone", "unconscious"],
        senses: ["blindsight 30 ft.", "passive Perception 10"],
        languages: ["understands Aquan but doesn't speak"],
        cr: "3",
        xp: 700,
        traits: [
            {
                name: "Invisible in Water",
                description: "The water weird is invisible while fully immersed in water."
            },
            {
                name: "Water Bound",
                description: "The water weird dies if it leaves the water to which it is bound or if that water is destroyed."
            }
        ],
        actions: [
            {
                name: "Constrict",
                description: "Melee Weapon Attack: +5 to hit, reach 10 ft., one creature. Hit: 13 (3d6 + 3) bludgeoning damage. If the target is Medium or smaller, it is grappled (escape DC 13) and pulled 5 feet toward the water weird. Until this grapple ends, the target is restrained, the water weird tries to drown it, and the water weird can't constrict another target."
            }
        ]
    },
    "salamander": {
        name: "Salamander",
        size: "Large",
        type: "Elemental",
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 90,
        hitDice: "12d10+24",
        speed: { walk: 30 },
        abilities: { str: 18, dex: 14, con: 15, int: 11, wis: 10, cha: 12 },
        damageVulnerabilities: ["cold"],
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["fire"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: ["Ignan"],
        cr: "5",
        xp: 1800,
        traits: [
            {
                name: "Heated Body",
                description: "A creature that touches the salamander or hits it with a melee attack while within 5 feet of it takes 7 (2d6) fire damage."
            },
            {
                name: "Heated Weapons",
                description: "Any metal melee weapon the salamander wields deals an extra 3 (1d6) fire damage on a hit (included in the attack)."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The salamander makes two attacks: one with its spear and one with its tail."
            },
            {
                name: "Spear",
                description: "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage."
            },
            {
                name: "Tail",
                description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage plus 7 (2d6) fire damage, and the target is grappled (escape DC 14). Until this grapple ends, the target is restrained, the salamander can automatically hit the target with its tail, and the salamander can't make tail attacks against other targets."
            }
        ]
    },
    "xorn": {
        name: "Xorn",
        size: "Medium",
        type: "Elemental",
        alignment: "neutral",
        ac: 19,
        acType: "natural armor",
        hp: 73,
        hitDice: "7d8+42",
        speed: { walk: 20, burrow: 20 },
        abilities: { str: 17, dex: 10, con: 22, int: 11, wis: 10, cha: 11 },
        skills: { perception: 6, stealth: 3 },
        damageResistances: ["piercing and slashing from nonmagical attacks that aren't adamantine"],
        senses: ["darkvision 60 ft.", "tremorsense 60 ft.", "passive Perception 16"],
        languages: ["Terran"],
        cr: "5",
        xp: 1800,
        traits: [
            {
                name: "Earth Glide",
                description: "The xorn can burrow through nonmagical, unworked earth and stone. While doing so, the xorn doesn't disturb the material it moves through."
            },
            {
                name: "Stone Camouflage",
                description: "The xorn has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
            },
            {
                name: "Treasure Sense",
                description: "The xorn can pinpoint, by scent, the location of precious metals and stones, such as coins and gems, within 60 feet of it."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The xorn makes three claw attacks and one bite attack."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (3d6 + 3) piercing damage."
            }
        ]
    },
    "invisible-stalker": {
        name: "Invisible Stalker",
        size: "Medium",
        type: "Elemental",
        alignment: "neutral",
        ac: 14,
        hp: 104,
        hitDice: "16d8+32",
        speed: { walk: 50, fly: 50, hover: true },
        abilities: { str: 16, dex: 19, con: 14, int: 10, wis: 15, cha: 11 },
        skills: { perception: 8, stealth: 10 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
        senses: ["darkvision 60 ft.", "passive Perception 18"],
        languages: ["Auran", "understands Common but doesn't speak it"],
        cr: "6",
        xp: 2300,
        traits: [
            {
                name: "Invisibility",
                description: "The stalker is invisible."
            },
            {
                name: "Faultless Tracker",
                description: "The stalker is given a quarry by its summoner. The stalker knows the direction and distance to its quarry as long as the two of them are on the same plane of existence. The stalker also knows the location of its summoner."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The stalker makes two slam attacks."
            },
            {
                name: "Slam",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage."
            }
        ]
    },
    "galeb-duhr": {
        name: "Galeb Duhr",
        size: "Medium",
        type: "Elemental",
        alignment: "neutral",
        ac: 16,
        acType: "natural armor",
        hp: 85,
        hitDice: "9d8+45",
        speed: { walk: 15, burrow: 15 },
        abilities: { str: 20, dex: 14, con: 20, int: 11, wis: 12, cha: 11 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "paralyzed", "poisoned", "petrified"],
        senses: ["darkvision 60 ft.", "tremorsense 60 ft.", "passive Perception 11"],
        languages: ["Terran"],
        cr: "6",
        xp: 2300,
        traits: [
            {
                name: "False Appearance",
                description: "While the galeb duhr remains motionless, it is indistinguishable from a normal boulder."
            },
            {
                name: "Rolling Charge",
                description: "If the galeb duhr rolls at least 20 feet straight toward a target and then hits it with a slam attack on the same turn, the target takes an extra 7 (2d6) bludgeoning damage. If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked prone."
            }
        ],
        actions: [
            {
                name: "Slam",
                description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage."
            },
            {
                name: "Animate Boulders (1/Day)",
                description: "The galeb duhr magically animates up to two boulders it can see within 60 feet of it. A boulder has statistics like those of a galeb duhr, except it has Intelligence 1 and Charisma 1, it can't be charmed or frightened, and it lacks this action option. A boulder remains animated as long as the galeb duhr maintains concentration, up to 1 minute (as if concentrating on a spell)."
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
    // RED DRAGONS (Complete Set)
    // ==========================================

    "red-dragon-wyrmling": {
        name: "Red Dragon Wyrmling",
        size: "Medium",
        type: "Dragon",
        alignment: "chaotic evil",
        ac: 17,
        acType: "natural armor",
        hp: 75,
        hitDice: "10d8+30",
        speed: { walk: 30, climb: 30, fly: 60 },
        abilities: { str: 19, dex: 10, con: 17, int: 12, wis: 11, cha: 15 },
        savingThrows: { dex: 2, con: 5, wis: 2, cha: 4 },
        skills: { perception: 4, stealth: 2 },
        damageImmunities: ["fire"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft.", "passive Perception 14"],
        languages: ["Draconic"],
        cr: "4",
        xp: 1100,
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) piercing damage plus 3 (1d6) fire damage."
            },
            {
                name: "Fire Breath (Recharge 5-6)",
                description: "The dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 24 (7d6) fire damage on a failed save, or half as much damage on a successful one."
            }
        ],
        lairActions: "Red dragon wyrmlings do not typically have lairs with lair actions.",
        regionalEffects: "Red dragon wyrmlings do not typically cause regional effects."
    },
    "adult-red-dragon": {
        name: "Adult Red Dragon",
        size: "Huge",
        type: "Dragon",
        alignment: "chaotic evil",
        ac: 19,
        acType: "natural armor",
        hp: 256,
        hitDice: "19d12+133",
        speed: { walk: 40, climb: 40, fly: 80 },
        abilities: { str: 27, dex: 10, con: 25, int: 16, wis: 13, cha: 21 },
        savingThrows: { dex: 6, con: 13, wis: 7, cha: 11 },
        skills: { perception: 13, stealth: 6 },
        damageImmunities: ["fire"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 23"],
        languages: ["Common", "Draconic"],
        cr: "17",
        xp: 18000,
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
                description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 7 (2d6) fire damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
            },
            {
                name: "Tail",
                description: "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
            },
            {
                name: "Frightful Presence",
                description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                name: "Fire Breath (Recharge 5-6)",
                description: "The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 63 (18d6) fire damage on a failed save, or half as much damage on a successful one."
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
                description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        lairActions: "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row: (1) Magma erupts from a point on the ground the dragon can see within 120 feet of it, creating a 20-foot-high, 5-foot-radius geyser. Each creature in the geyser's area must make a DC 15 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one. (2) A tremor shakes the lair in a 60-foot radius around the dragon. Each creature other than the dragon on the ground in that area must succeed on a DC 15 Dexterity saving throw or be knocked prone. (3) Volcanic gases form a cloud in a 20-foot-radius sphere centered on a point the dragon can see within 120 feet of it. The sphere spreads around corners, and its area is lightly obscured. It lasts until initiative count 20 on the next round. Each creature that starts its turn in the cloud must succeed on a DC 13 Constitution saving throw or be poisoned until the end of its turn.",
        regionalEffects: "The region containing a legendary red dragon's lair is warped by the dragon's magic, creating one or more of the following effects: (1) Small earthquakes are common within 6 miles of the dragon's lair. (2) Water sources within 1 mile of the lair are supernaturally warm and tainted by sulfur. (3) Rocky fissures within 1 mile of the dragon's lair form portals to the Elemental Plane of Fire, allowing creatures of elemental fire into the world to dwell nearby."
    },
    "ancient-red-dragon": {
        name: "Ancient Red Dragon",
        size: "Gargantuan",
        type: "Dragon",
        alignment: "chaotic evil",
        ac: 22,
        acType: "natural armor",
        hp: 546,
        hitDice: "28d20+252",
        speed: { walk: 40, climb: 40, fly: 80 },
        abilities: { str: 30, dex: 10, con: 29, int: 18, wis: 15, cha: 23 },
        savingThrows: { dex: 7, con: 16, wis: 9, cha: 13 },
        skills: { perception: 16, stealth: 7 },
        damageImmunities: ["fire"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 26"],
        languages: ["Common", "Draconic"],
        cr: "24",
        xp: 62000,
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
                description: "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage plus 14 (4d6) fire damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage."
            },
            {
                name: "Tail",
                description: "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage."
            },
            {
                name: "Frightful Presence",
                description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                name: "Fire Breath (Recharge 5-6)",
                description: "The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 91 (26d6) fire damage on a failed save, or half as much damage on a successful one."
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
                description: "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        lairActions: "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row: (1) Magma erupts from a point on the ground the dragon can see within 120 feet of it, creating a 20-foot-high, 5-foot-radius geyser. Each creature in the geyser's area must make a DC 15 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one. (2) A tremor shakes the lair in a 60-foot radius around the dragon. Each creature other than the dragon on the ground in that area must succeed on a DC 15 Dexterity saving throw or be knocked prone. (3) Volcanic gases form a cloud in a 20-foot-radius sphere centered on a point the dragon can see within 120 feet of it. The sphere spreads around corners, and its area is lightly obscured. It lasts until initiative count 20 on the next round. Each creature that starts its turn in the cloud must succeed on a DC 13 Constitution saving throw or be poisoned until the end of its turn.",
        regionalEffects: "The region containing a legendary ancient red dragon's lair is warped by the dragon's magic, creating one or more of the following effects: (1) Small earthquakes are common within 6 miles of the dragon's lair. (2) Water sources within 1 mile of the lair are supernaturally warm and tainted by sulfur. (3) Rocky fissures within 1 mile of the dragon's lair form portals to the Elemental Plane of Fire, allowing creatures of elemental fire into the world to dwell nearby."
    },

    // ==========================================
    // METALLIC DRAGONS - BRASS
    // ==========================================

    "brass-dragon-wyrmling": {
        name: "Brass Dragon Wyrmling",
        size: "Medium",
        type: "Dragon",
        alignment: "chaotic good",
        ac: 16,
        acType: "natural armor",
        hp: 16,
        hitDice: "3d8+3",
        speed: { walk: 30, burrow: 15, fly: 60 },
        abilities: { str: 15, dex: 10, con: 13, int: 10, wis: 11, cha: 13 },
        savingThrows: { dex: 2, con: 3, wis: 2, cha: 3 },
        skills: { perception: 4, stealth: 2 },
        damageImmunities: ["fire"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft.", "passive Perception 14"],
        languages: ["Draconic"],
        cr: "1",
        xp: 200,
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage."
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                description: "The dragon uses one of the following breath weapons: Fire Breath. The dragon exhales fire in a 20-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 14 (4d6) fire damage on a failed save, or half as much damage on a successful one. Sleep Breath. The dragon exhales sleep gas in a 15-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw or fall unconscious for 1 minute. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
            }
        ],
        lairActions: "Brass dragon wyrmlings do not typically have lairs with lair actions.",
        regionalEffects: "Brass dragon wyrmlings do not typically cause regional effects."
    },
    "young-brass-dragon": {
        name: "Young Brass Dragon",
        size: "Large",
        type: "Dragon",
        alignment: "chaotic good",
        ac: 17,
        acType: "natural armor",
        hp: 110,
        hitDice: "13d10+39",
        speed: { walk: 40, burrow: 20, fly: 80 },
        abilities: { str: 19, dex: 10, con: 17, int: 12, wis: 11, cha: 15 },
        savingThrows: { dex: 3, con: 6, wis: 3, cha: 5 },
        skills: { perception: 6, persuasion: 5, stealth: 3 },
        damageImmunities: ["fire"],
        senses: ["blindsight 30 ft.", "darkvision 120 ft.", "passive Perception 16"],
        languages: ["Common", "Draconic"],
        cr: "6",
        xp: 2300,
        actions: [
            {
                name: "Multiattack",
                description: "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                description: "The dragon uses one of the following breath weapons: Fire Breath. The dragon exhales fire in a 40-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 42 (12d6) fire damage on a failed save, or half as much damage on a successful one. Sleep Breath. The dragon exhales sleep gas in a 30-foot cone. Each creature in that area must succeed on a DC 14 Constitution saving throw or fall unconscious for 5 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
            }
        ],
        lairActions: "Young brass dragons do not typically have lairs with lair actions.",
        regionalEffects: "Young brass dragons do not typically cause regional effects."
    },
    "adult-brass-dragon": {
        name: "Adult Brass Dragon",
        size: "Huge",
        type: "Dragon",
        alignment: "chaotic good",
        ac: 18,
        acType: "natural armor",
        hp: 172,
        hitDice: "15d12+75",
        speed: { walk: 40, burrow: 30, fly: 80 },
        abilities: { str: 23, dex: 10, con: 21, int: 14, wis: 13, cha: 17 },
        savingThrows: { dex: 5, con: 10, wis: 6, cha: 8 },
        skills: { history: 7, perception: 11, persuasion: 8, stealth: 5 },
        damageImmunities: ["fire"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 21"],
        languages: ["Common", "Draconic"],
        cr: "13",
        xp: 10000,
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
                description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage."
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
                name: "Breath Weapons (Recharge 5-6)",
                description: "The dragon uses one of the following breath weapons: Fire Breath. The dragon exhales fire in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 45 (13d6) fire damage on a failed save, or half as much damage on a successful one. Sleep Breath. The dragon exhales sleep gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
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
        lairActions: "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row: (1) A strong wind blows around the dragon. Each creature within 60 feet of the dragon must succeed on a DC 15 Strength saving throw or be pushed 15 feet away from the dragon and knocked prone. Gases and vapors are dispersed by the wind, and unprotected flames are extinguished. Protected flames, such as lanterns, have a 50 percent chance of being extinguished. (2) A cloud of sand swirls about in a 20-foot-radius sphere centered on a point the dragon can see within 120 feet of it. The cloud spreads around corners. Each creature in the cloud must succeed on a DC 15 Constitution saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        regionalEffects: "The region containing a legendary brass dragon's lair is warped by the dragon's magic, creating one or more of the following effects: (1) Tracks appear in the sand within 6 miles of the dragon's lair. The tracks lead to safe shelters and hidden water sources, while also leading away from areas the dragon prefers to remain undisturbed. (2) Images of Large or smaller monsters haunt the desert sands within 1 mile of the dragon's lair. These illusions move and appear real, although they can do no harm. A creature that examines an image from a distance can tell it is an illusion with a successful DC 20 Intelligence (Investigation) check. Any physical interaction with an image reveals it to be an illusion, because objects pass through it. (3) Whenever a creature with an Intelligence of 3 or higher comes within 30 feet of a water source within 1 mile of the dragon's lair, the dragon becomes aware of the creature's presence and location."
    },
    "ancient-brass-dragon": {
        name: "Ancient Brass Dragon",
        size: "Gargantuan",
        type: "Dragon",
        alignment: "chaotic good",
        ac: 20,
        acType: "natural armor",
        hp: 297,
        hitDice: "17d20+119",
        speed: { walk: 40, burrow: 40, fly: 80 },
        abilities: { str: 27, dex: 10, con: 25, int: 16, wis: 15, cha: 19 },
        savingThrows: { dex: 6, con: 13, wis: 8, cha: 10 },
        skills: { history: 9, perception: 14, persuasion: 10, stealth: 6 },
        damageImmunities: ["fire"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 24"],
        languages: ["Common", "Draconic"],
        cr: "20",
        xp: 25000,
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
                description: "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage."
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
                description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                description: "The dragon uses one of the following breath weapons: Fire Breath. The dragon exhales fire in a 90-foot line that is 10 feet wide. Each creature in that line must make a DC 21 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one. Sleep Breath. The dragon exhales sleep gas in a 90-foot cone. Each creature in that area must succeed on a DC 21 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
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
        lairActions: "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row: (1) A strong wind blows around the dragon. Each creature within 60 feet of the dragon must succeed on a DC 15 Strength saving throw or be pushed 15 feet away from the dragon and knocked prone. Gases and vapors are dispersed by the wind, and unprotected flames are extinguished. Protected flames, such as lanterns, have a 50 percent chance of being extinguished. (2) A cloud of sand swirls about in a 20-foot-radius sphere centered on a point the dragon can see within 120 feet of it. The cloud spreads around corners. Each creature in the cloud must succeed on a DC 15 Constitution saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        regionalEffects: "The region containing a legendary ancient brass dragon's lair is warped by the dragon's magic, creating one or more of the following effects: (1) Tracks appear in the sand within 6 miles of the dragon's lair. The tracks lead to safe shelters and hidden water sources, while also leading away from areas the dragon prefers to remain undisturbed. (2) Images of Large or smaller monsters haunt the desert sands within 1 mile of the dragon's lair. These illusions move and appear real, although they can do no harm. A creature that examines an image from a distance can tell it is an illusion with a successful DC 20 Intelligence (Investigation) check. Any physical interaction with an image reveals it to be an illusion, because objects pass through it. (3) Whenever a creature with an Intelligence of 3 or higher comes within 30 feet of a water source within 1 mile of the dragon's lair, the dragon becomes aware of the creature's presence and location."
    },

    // ==========================================
    // METALLIC DRAGONS - BRONZE
    // ==========================================

    "bronze-dragon-wyrmling": {
        name: "Bronze Dragon Wyrmling",
        size: "Medium",
        type: "Dragon",
        alignment: "lawful good",
        ac: 17,
        acType: "natural armor",
        hp: 32,
        hitDice: "5d8+10",
        speed: { walk: 30, fly: 60, swim: 30 },
        abilities: { str: 17, dex: 10, con: 15, int: 12, wis: 11, cha: 15 },
        savingThrows: { dex: 2, con: 4, wis: 2, cha: 4 },
        skills: { perception: 4, stealth: 2 },
        damageImmunities: ["lightning"],
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
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage."
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                description: "The dragon uses one of the following breath weapons: Lightning Breath. The dragon exhales lightning in a 40-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 16 (3d10) lightning damage on a failed save, or half as much damage on a successful one. Repulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 12 Strength saving throw. On a failed save, the creature is pushed 30 feet away from the dragon."
            }
        ],
        lairActions: "Bronze dragon wyrmlings do not typically have lairs with lair actions.",
        regionalEffects: "Bronze dragon wyrmlings do not typically cause regional effects."
    },
    "young-bronze-dragon": {
        name: "Young Bronze Dragon",
        size: "Large",
        type: "Dragon",
        alignment: "lawful good",
        ac: 18,
        acType: "natural armor",
        hp: 142,
        hitDice: "15d10+60",
        speed: { walk: 40, fly: 80, swim: 40 },
        abilities: { str: 21, dex: 10, con: 19, int: 14, wis: 13, cha: 17 },
        savingThrows: { dex: 3, con: 7, wis: 4, cha: 6 },
        skills: { insight: 4, perception: 7, stealth: 3 },
        damageImmunities: ["lightning"],
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
                description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) piercing damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage."
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                description: "The dragon uses one of the following breath weapons: Lightning Breath. The dragon exhales lightning in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 15 Dexterity saving throw, taking 55 (10d10) lightning damage on a failed save, or half as much damage on a successful one. Repulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 15 Strength saving throw. On a failed save, the creature is pushed 40 feet away from the dragon."
            }
        ],
        lairActions: "Young bronze dragons do not typically have lairs with lair actions.",
        regionalEffects: "Young bronze dragons do not typically cause regional effects."
    },
    "adult-bronze-dragon": {
        name: "Adult Bronze Dragon",
        size: "Huge",
        type: "Dragon",
        alignment: "lawful good",
        ac: 19,
        acType: "natural armor",
        hp: 212,
        hitDice: "17d12+102",
        speed: { walk: 40, fly: 80, swim: 40 },
        abilities: { str: 25, dex: 10, con: 23, int: 16, wis: 15, cha: 19 },
        savingThrows: { dex: 5, con: 11, wis: 7, cha: 9 },
        skills: { insight: 7, perception: 12, stealth: 5 },
        damageImmunities: ["lightning"],
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
                description: "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) piercing damage."
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
                name: "Breath Weapons (Recharge 5-6)",
                description: "The dragon uses one of the following breath weapons: Lightning Breath. The dragon exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one. Repulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 19 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon."
            },
            {
                name: "Change Shape",
                description: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice). In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
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
        lairActions: "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects: (1) The dragon creates fog as though it had cast the fog cloud spell. The fog lasts until initiative count 20 on the next round. (2) A thunderclap originates at a point the dragon can see within 120 feet of it. Each creature within a 20-foot radius centered on that point must make a DC 15 Constitution saving throw or take 5 (1d10) thunder damage and be deafened until the end of its next turn.",
        regionalEffects: "The region containing a legendary bronze dragon's lair is warped by the dragon's magic, creating one or more of the following effects: (1) Once per day, the dragon can alter the weather in a 6-mile radius centered on its lair. The dragon doesn't need to be outdoors; otherwise the effect is identical to the control weather spell. (2) Underwater plants within 6 miles of the dragon's lair take on dazzlingly brilliant hues. (3) Within its lair, the dragon can set illusory sounds, such as soft music and strange echoes, so that they can be heard in various parts of the lair."
    },
    "ancient-bronze-dragon": {
        name: "Ancient Bronze Dragon",
        size: "Gargantuan",
        type: "Dragon",
        alignment: "lawful good",
        ac: 22,
        acType: "natural armor",
        hp: 444,
        hitDice: "24d20+192",
        speed: { walk: 40, fly: 80, swim: 40 },
        abilities: { str: 29, dex: 10, con: 27, int: 18, wis: 17, cha: 21 },
        savingThrows: { dex: 7, con: 15, wis: 10, cha: 12 },
        skills: { insight: 10, perception: 17, stealth: 7 },
        damageImmunities: ["lightning"],
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
                description: "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 20 (2d10 + 9) piercing damage."
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
                name: "Breath Weapons (Recharge 5-6)",
                description: "The dragon uses one of the following breath weapons: Lightning Breath. The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one. Repulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 23 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon."
            },
            {
                name: "Change Shape",
                description: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice). In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
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
        lairActions: "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects: (1) The dragon creates fog as though it had cast the fog cloud spell. The fog lasts until initiative count 20 on the next round. (2) A thunderclap originates at a point the dragon can see within 120 feet of it. Each creature within a 20-foot radius centered on that point must make a DC 15 Constitution saving throw or take 5 (1d10) thunder damage and be deafened until the end of its next turn.",
        regionalEffects: "The region containing a legendary ancient bronze dragon's lair is warped by the dragon's magic, creating one or more of the following effects: (1) Once per day, the dragon can alter the weather in a 6-mile radius centered on its lair. The dragon doesn't need to be outdoors; otherwise the effect is identical to the control weather spell. (2) Underwater plants within 6 miles of the dragon's lair take on dazzlingly brilliant hues. (3) Within its lair, the dragon can set illusory sounds, such as soft music and strange echoes, so that they can be heard in various parts of the lair."
    },

    // ==========================================
    // METALLIC DRAGONS - COPPER
    // ==========================================

    "copper-dragon-wyrmling": {
        name: "Copper Dragon Wyrmling",
        size: "Medium",
        type: "Dragon",
        alignment: "chaotic good",
        ac: 16,
        acType: "natural armor",
        hp: 22,
        hitDice: "4d8+4",
        speed: { walk: 30, climb: 30, fly: 60 },
        abilities: { str: 15, dex: 12, con: 13, int: 14, wis: 11, cha: 13 },
        savingThrows: { dex: 3, con: 3, wis: 2, cha: 3 },
        skills: { perception: 4, stealth: 3 },
        damageImmunities: ["acid"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft.", "passive Perception 14"],
        languages: ["Draconic"],
        cr: "1",
        xp: 200,
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage."
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                description: "The dragon uses one of the following breath weapons: Acid Breath. The dragon exhales acid in a 20-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 18 (4d8) acid damage on a failed save, or half as much damage on a successful one. Slowing Breath. The dragon exhales gas in a 15-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save."
            }
        ],
        lairActions: "Copper dragon wyrmlings do not typically have lairs with lair actions.",
        regionalEffects: "Copper dragon wyrmlings do not typically cause regional effects."
    },
    "young-copper-dragon": {
        name: "Young Copper Dragon",
        size: "Large",
        type: "Dragon",
        alignment: "chaotic good",
        ac: 17,
        acType: "natural armor",
        hp: 119,
        hitDice: "14d10+42",
        speed: { walk: 40, climb: 40, fly: 80 },
        abilities: { str: 19, dex: 12, con: 17, int: 16, wis: 13, cha: 15 },
        savingThrows: { dex: 4, con: 6, wis: 4, cha: 5 },
        skills: { deception: 5, perception: 7, stealth: 4 },
        damageImmunities: ["acid"],
        senses: ["blindsight 30 ft.", "darkvision 120 ft.", "passive Perception 17"],
        languages: ["Common", "Draconic"],
        cr: "7",
        xp: 2900,
        actions: [
            {
                name: "Multiattack",
                description: "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                description: "The dragon uses one of the following breath weapons: Acid Breath. The dragon exhales acid in a 40-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 40 (9d8) acid damage on a failed save, or half as much damage on a successful one. Slowing Breath. The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a DC 14 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save."
            }
        ],
        lairActions: "Young copper dragons do not typically have lairs with lair actions.",
        regionalEffects: "Young copper dragons do not typically cause regional effects."
    },
    "adult-copper-dragon": {
        name: "Adult Copper Dragon",
        size: "Huge",
        type: "Dragon",
        alignment: "chaotic good",
        ac: 18,
        acType: "natural armor",
        hp: 184,
        hitDice: "16d12+80",
        speed: { walk: 40, climb: 40, fly: 80 },
        abilities: { str: 23, dex: 12, con: 21, int: 18, wis: 15, cha: 17 },
        savingThrows: { dex: 6, con: 10, wis: 7, cha: 8 },
        skills: { deception: 8, perception: 12, stealth: 6 },
        damageImmunities: ["acid"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 22"],
        languages: ["Common", "Draconic"],
        cr: "14",
        xp: 11500,
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
                description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage."
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
                name: "Breath Weapons (Recharge 5-6)",
                description: "The dragon uses one of the following breath weapons: Acid Breath. The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one. Slowing Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save."
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
        lairActions: "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects: (1) The dragon chooses a point on the ground that it can see within 120 feet of it. Stone spikes sprout from the ground in a 20-foot radius centered on that point. The effect is otherwise identical to the spike growth spell and lasts until the dragon uses this lair action again or until the dragon dies. (2) The dragon chooses a 10-foot-square area on the ground that it can see within 120 feet of it. The ground in that area turns into 3-foot-deep mud. Each creature on the ground in that area when the mud appears must succeed on a DC 15 Dexterity saving throw or sink into the mud and become restrained. A creature can take an action to attempt a DC 15 Strength check, freeing itself or another creature within its reach and ending the restrained condition on a success. Moving 1 foot in the mud costs 2 feet of movement. On initiative count 20 on the next round, the mud hardens, and the Strength DC to work free increases to 20.",
        regionalEffects: "The region containing a legendary copper dragon's lair is warped by the dragon's magic, creating one or more of the following effects: (1) Magic carvings of the dragon's smiling visage can be found in rock formations and cliff faces within 6 miles of the dragon's lair. (2) Tiny beasts such as rodents and birds that are normally combative become docile within 6 miles of the dragon's lair. They will not attack other creatures unless provoked. (3) Intelligent creatures within 6 miles of the dragon's lair are prone to fits of giggling. Even serious matters suddenly seem funny."
    },
    "ancient-copper-dragon": {
        name: "Ancient Copper Dragon",
        size: "Gargantuan",
        type: "Dragon",
        alignment: "chaotic good",
        ac: 21,
        acType: "natural armor",
        hp: 350,
        hitDice: "20d20+140",
        speed: { walk: 40, climb: 40, fly: 80 },
        abilities: { str: 27, dex: 12, con: 25, int: 20, wis: 17, cha: 19 },
        savingThrows: { dex: 8, con: 14, wis: 10, cha: 11 },
        skills: { deception: 11, perception: 17, stealth: 8 },
        damageImmunities: ["acid"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 27"],
        languages: ["Common", "Draconic"],
        cr: "21",
        xp: 33000,
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
                description: "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage."
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
                name: "Breath Weapons (Recharge 5-6)",
                description: "The dragon uses one of the following breath weapons: Acid Breath. The dragon exhales acid in a 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 63 (14d8) acid damage on a failed save, or half as much damage on a successful one. Slowing Breath. The dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 22 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save."
            },
            {
                name: "Change Shape",
                description: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice). In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
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
        lairActions: "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects: (1) The dragon chooses a point on the ground that it can see within 120 feet of it. Stone spikes sprout from the ground in a 20-foot radius centered on that point. The effect is otherwise identical to the spike growth spell and lasts until the dragon uses this lair action again or until the dragon dies. (2) The dragon chooses a 10-foot-square area on the ground that it can see within 120 feet of it. The ground in that area turns into 3-foot-deep mud. Each creature on the ground in that area when the mud appears must succeed on a DC 15 Dexterity saving throw or sink into the mud and become restrained. A creature can take an action to attempt a DC 15 Strength check, freeing itself or another creature within its reach and ending the restrained condition on a success. Moving 1 foot in the mud costs 2 feet of movement. On initiative count 20 on the next round, the mud hardens, and the Strength DC to work free increases to 20.",
        regionalEffects: "The region containing a legendary ancient copper dragon's lair is warped by the dragon's magic, creating one or more of the following effects: (1) Magic carvings of the dragon's smiling visage can be found in rock formations and cliff faces within 6 miles of the dragon's lair. (2) Tiny beasts such as rodents and birds that are normally combative become docile within 6 miles of the dragon's lair. They will not attack other creatures unless provoked. (3) Intelligent creatures within 6 miles of the dragon's lair are prone to fits of giggling. Even serious matters suddenly seem funny."
    },

    // ==========================================
    // METALLIC DRAGONS - GOLD
    // ==========================================

    "gold-dragon-wyrmling": {
        name: "Gold Dragon Wyrmling",
        size: "Medium",
        type: "Dragon",
        alignment: "lawful good",
        ac: 17,
        acType: "natural armor",
        hp: 60,
        hitDice: "8d8+24",
        speed: { walk: 30, fly: 60, swim: 30 },
        abilities: { str: 19, dex: 14, con: 17, int: 14, wis: 11, cha: 16 },
        savingThrows: { dex: 4, con: 5, wis: 2, cha: 5 },
        skills: { perception: 4, stealth: 4 },
        damageImmunities: ["fire"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft.", "passive Perception 14"],
        languages: ["Draconic"],
        cr: "3",
        xp: 700,
        traits: [
            {
                name: "Amphibious",
                description: "The dragon can breathe air and water."
            }
        ],
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) piercing damage."
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                description: "The dragon uses one of the following breath weapons: Fire Breath. The dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 22 (4d10) fire damage on a failed save, or half as much damage on a successful one. Weakening Breath. The dragon exhales gas in a 15-foot cone. Each creature in that area must succeed on a DC 13 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ],
        lairActions: "Gold dragon wyrmlings do not typically have lairs with lair actions.",
        regionalEffects: "Gold dragon wyrmlings do not typically cause regional effects."
    },
    "young-gold-dragon": {
        name: "Young Gold Dragon",
        size: "Large",
        type: "Dragon",
        alignment: "lawful good",
        ac: 18,
        acType: "natural armor",
        hp: 178,
        hitDice: "17d10+85",
        speed: { walk: 40, fly: 80, swim: 40 },
        abilities: { str: 23, dex: 14, con: 21, int: 16, wis: 13, cha: 20 },
        savingThrows: { dex: 6, con: 9, wis: 5, cha: 9 },
        skills: { insight: 5, perception: 9, persuasion: 9, stealth: 6 },
        damageImmunities: ["fire"],
        senses: ["blindsight 30 ft.", "darkvision 120 ft.", "passive Perception 19"],
        languages: ["Common", "Draconic"],
        cr: "10",
        xp: 5900,
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
                description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                description: "The dragon uses one of the following breath weapons: Fire Breath. The dragon exhales fire in a 30-foot cone. Each creature in that area must make a DC 17 Dexterity saving throw, taking 55 (10d10) fire damage on a failed save, or half as much damage on a successful one. Weakening Breath. The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a DC 17 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ],
        lairActions: "Young gold dragons do not typically have lairs with lair actions.",
        regionalEffects: "Young gold dragons do not typically cause regional effects."
    },
    "adult-gold-dragon": {
        name: "Adult Gold Dragon",
        size: "Huge",
        type: "Dragon",
        alignment: "lawful good",
        ac: 19,
        acType: "natural armor",
        hp: 256,
        hitDice: "19d12+133",
        speed: { walk: 40, fly: 80, swim: 40 },
        abilities: { str: 27, dex: 14, con: 25, int: 16, wis: 15, cha: 24 },
        savingThrows: { dex: 8, con: 13, wis: 8, cha: 13 },
        skills: { insight: 8, perception: 14, persuasion: 13, stealth: 8 },
        damageImmunities: ["fire"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 24"],
        languages: ["Common", "Draconic"],
        cr: "17",
        xp: 18000,
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
                description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
            },
            {
                name: "Tail",
                description: "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
            },
            {
                name: "Frightful Presence",
                description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                description: "The dragon uses one of the following breath weapons: Fire Breath. The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 66 (12d10) fire damage on a failed save, or half as much damage on a successful one. Weakening Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 21 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            },
            {
                name: "Change Shape",
                description: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice). In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
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
                description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        lairActions: "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row: (1) The dragon glimpses the future, so it has advantage on attack rolls, ability checks, and saving throws until initiative count 20 on the next round. (2) One creature the dragon can see within 120 feet of it must succeed on a DC 15 Charisma saving throw or be banished to a dream plane, a different plane of existence the dragon has imagined into being. To escape, the creature must use its action to make a Charisma check contested by the dragon's. If the creature wins, it escapes the dream plane. Otherwise, the effect ends on initiative count 20 on the next round. When the effect ends, the creature reappears in the space it left or in the nearest unoccupied space if that one is occupied.",
        regionalEffects: "The region containing a legendary gold dragon's lair is warped by the dragon's magic, creating one or more of the following effects: (1) Whenever a creature that can understand a language sleeps or enters a state of trance or reverie within 6 miles of the dragon's lair, the dragon can establish telepathic contact with that creature and converse with it in its dreams. The creature remembers its conversation with the dragon upon waking. (2) Banks of beautiful, googley golden clouds drift through the sky within 6 miles of the dragon's lair. (3) Gems and pearls within 1 mile of the dragon's lair sparkle and gleam, shedding dim light in a 5-foot radius."
    },
    "ancient-gold-dragon": {
        name: "Ancient Gold Dragon",
        size: "Gargantuan",
        type: "Dragon",
        alignment: "lawful good",
        ac: 22,
        acType: "natural armor",
        hp: 546,
        hitDice: "28d20+252",
        speed: { walk: 40, fly: 80, swim: 40 },
        abilities: { str: 30, dex: 14, con: 29, int: 18, wis: 17, cha: 28 },
        savingThrows: { dex: 9, con: 16, wis: 10, cha: 16 },
        skills: { insight: 10, perception: 17, persuasion: 16, stealth: 9 },
        damageImmunities: ["fire"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 27"],
        languages: ["Common", "Draconic"],
        cr: "24",
        xp: 62000,
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
                description: "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage."
            },
            {
                name: "Tail",
                description: "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage."
            },
            {
                name: "Frightful Presence",
                description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 24 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                description: "The dragon uses one of the following breath weapons: Fire Breath. The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 71 (13d10) fire damage on a failed save, or half as much damage on a successful one. Weakening Breath. The dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 24 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            },
            {
                name: "Change Shape",
                description: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice). In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
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
                description: "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        lairActions: "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row: (1) The dragon glimpses the future, so it has advantage on attack rolls, ability checks, and saving throws until initiative count 20 on the next round. (2) One creature the dragon can see within 120 feet of it must succeed on a DC 15 Charisma saving throw or be banished to a dream plane, a different plane of existence the dragon has imagined into being. To escape, the creature must use its action to make a Charisma check contested by the dragon's. If the creature wins, it escapes the dream plane. Otherwise, the effect ends on initiative count 20 on the next round. When the effect ends, the creature reappears in the space it left or in the nearest unoccupied space if that one is occupied.",
        regionalEffects: "The region containing a legendary ancient gold dragon's lair is warped by the dragon's magic, creating one or more of the following effects: (1) Whenever a creature that can understand a language sleeps or enters a state of trance or reverie within 6 miles of the dragon's lair, the dragon can establish telepathic contact with that creature and converse with it in its dreams. The creature remembers its conversation with the dragon upon waking. (2) Banks of beautiful, googley golden clouds drift through the sky within 6 miles of the dragon's lair. (3) Gems and pearls within 1 mile of the dragon's lair sparkle and gleam, shedding dim light in a 5-foot radius."
    },

    // ==========================================
    // METALLIC DRAGONS - SILVER
    // ==========================================

    "silver-dragon-wyrmling": {
        name: "Silver Dragon Wyrmling",
        size: "Medium",
        type: "Dragon",
        alignment: "lawful good",
        ac: 17,
        acType: "natural armor",
        hp: 45,
        hitDice: "6d8+18",
        speed: { walk: 30, fly: 60 },
        abilities: { str: 19, dex: 10, con: 17, int: 12, wis: 11, cha: 15 },
        savingThrows: { dex: 2, con: 5, wis: 2, cha: 4 },
        skills: { perception: 4, stealth: 2 },
        damageImmunities: ["cold"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft.", "passive Perception 14"],
        languages: ["Draconic"],
        cr: "2",
        xp: 450,
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) piercing damage."
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                description: "The dragon uses one of the following breath weapons: Cold Breath. The dragon exhales an icy blast in a 15-foot cone. Each creature in that area must make a DC 13 Constitution saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one. Paralyzing Breath. The dragon exhales paralyzing gas in a 15-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ],
        lairActions: "Silver dragon wyrmlings do not typically have lairs with lair actions.",
        regionalEffects: "Silver dragon wyrmlings do not typically cause regional effects."
    },
    "young-silver-dragon": {
        name: "Young Silver Dragon",
        size: "Large",
        type: "Dragon",
        alignment: "lawful good",
        ac: 18,
        acType: "natural armor",
        hp: 168,
        hitDice: "16d10+80",
        speed: { walk: 40, fly: 80 },
        abilities: { str: 23, dex: 10, con: 21, int: 14, wis: 11, cha: 19 },
        savingThrows: { dex: 4, con: 9, wis: 4, cha: 8 },
        skills: { arcana: 6, history: 6, perception: 8, stealth: 4 },
        damageImmunities: ["cold"],
        senses: ["blindsight 30 ft.", "darkvision 120 ft.", "passive Perception 18"],
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
                description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                description: "The dragon uses one of the following breath weapons: Cold Breath. The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a DC 17 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one. Paralyzing Breath. The dragon exhales paralyzing gas in a 30-foot cone. Each creature in that area must succeed on a DC 17 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ],
        lairActions: "Young silver dragons do not typically have lairs with lair actions.",
        regionalEffects: "Young silver dragons do not typically cause regional effects."
    },
    "adult-silver-dragon": {
        name: "Adult Silver Dragon",
        size: "Huge",
        type: "Dragon",
        alignment: "lawful good",
        ac: 19,
        acType: "natural armor",
        hp: 243,
        hitDice: "18d12+126",
        speed: { walk: 40, fly: 80 },
        abilities: { str: 27, dex: 10, con: 25, int: 16, wis: 13, cha: 21 },
        savingThrows: { dex: 5, con: 12, wis: 6, cha: 10 },
        skills: { arcana: 8, history: 8, perception: 11, stealth: 5 },
        damageImmunities: ["cold"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 21"],
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
                description: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
            },
            {
                name: "Tail",
                description: "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
            },
            {
                name: "Frightful Presence",
                description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                description: "The dragon uses one of the following breath weapons: Cold Breath. The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 20 Constitution saving throw, taking 58 (13d8) cold damage on a failed save, or half as much damage on a successful one. Paralyzing Breath. The dragon exhales paralyzing gas in a 60-foot cone. Each creature in that area must succeed on a DC 20 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            },
            {
                name: "Change Shape",
                description: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice). In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
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
                description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 21 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        lairActions: "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects: (1) The dragon creates fog as if it had cast the fog cloud spell. The fog lasts until initiative count 20 on the next round. (2) A blisteringly cold wind blows through the lair near the dragon. Each creature within 120 feet of the dragon must succeed on a DC 15 Constitution saving throw or take 5 (1d10) cold damage. Gases and vapors are dispersed by the wind, and unprotected flames are extinguished. Protected flames, such as lanterns, have a 50 percent chance of being extinguished.",
        regionalEffects: "The region containing a legendary silver dragon's lair is warped by the dragon's magic, creating one or more of the following effects: (1) Once per day, the dragon can alter the weather in a 6-mile radius centered on its lair. The dragon doesn't need to be outdoors; otherwise the effect is identical to the control weather spell. (2) Within 1 mile of the lair, winds buoy non-evil creatures that fall due to no act of the dragon's or its allies. Such creatures descend at a rate of 60 feet per round and take no falling damage. (3) Given days or longer to work, the dragon can make clouds and fog within its lair as solid as stone, forming structures and other objects as it wishes."
    },
    "ancient-silver-dragon": {
        name: "Ancient Silver Dragon",
        size: "Gargantuan",
        type: "Dragon",
        alignment: "lawful good",
        ac: 22,
        acType: "natural armor",
        hp: 487,
        hitDice: "25d20+225",
        speed: { walk: 40, fly: 80 },
        abilities: { str: 30, dex: 10, con: 29, int: 18, wis: 15, cha: 23 },
        savingThrows: { dex: 7, con: 16, wis: 9, cha: 13 },
        skills: { arcana: 11, history: 11, perception: 16, stealth: 7 },
        damageImmunities: ["cold"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 26"],
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
                description: "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage."
            },
            {
                name: "Tail",
                description: "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage."
            },
            {
                name: "Frightful Presence",
                description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                description: "The dragon uses one of the following breath weapons: Cold Breath. The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 24 Constitution saving throw, taking 67 (15d8) cold damage on a failed save, or half as much damage on a successful one. Paralyzing Breath. The dragon exhales paralyzing gas in a 90-foot cone. Each creature in that area must succeed on a DC 24 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            },
            {
                name: "Change Shape",
                description: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice). In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
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
                description: "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        lairActions: "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects: (1) The dragon creates fog as if it had cast the fog cloud spell. The fog lasts until initiative count 20 on the next round. (2) A blisteringly cold wind blows through the lair near the dragon. Each creature within 120 feet of the dragon must succeed on a DC 15 Constitution saving throw or take 5 (1d10) cold damage. Gases and vapors are dispersed by the wind, and unprotected flames are extinguished. Protected flames, such as lanterns, have a 50 percent chance of being extinguished.",
        regionalEffects: "The region containing a legendary ancient silver dragon's lair is warped by the dragon's magic, creating one or more of the following effects: (1) Once per day, the dragon can alter the weather in a 6-mile radius centered on its lair. The dragon doesn't need to be outdoors; otherwise the effect is identical to the control weather spell. (2) Within 1 mile of the lair, winds buoy non-evil creatures that fall due to no act of the dragon's or its allies. Such creatures descend at a rate of 60 feet per round and take no falling damage. (3) Given days or longer to work, the dragon can make clouds and fog within its lair as solid as stone, forming structures and other objects as it wishes."
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
    "demilich": {
        name: "Demilich",
        size: "Tiny",
        type: "Undead",
        alignment: "neutral evil",
        ac: 20,
        acType: "natural armor",
        hp: 80,
        hitDice: "32d4",
        speed: { walk: 0, fly: 30, hover: true },
        abilities: { str: 1, dex: 20, con: 10, int: 20, wis: 17, cha: 20 },
        savingThrows: { con: 6, int: 11, wis: 9, cha: 11 },
        damageResistances: ["bludgeoning, piercing, and slashing from magic weapons"],
        damageImmunities: ["necrotic", "poison", "psychic", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "deafened", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned", "prone", "stunned"],
        senses: ["truesight 120 ft.", "passive Perception 13"],
        languages: [],
        cr: "18",
        xp: 20000,
        traits: [
            {
                name: "Avoidance",
                description: "If the demilich is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
            },
            {
                name: "Legendary Resistance (3/Day)",
                description: "If the demilich fails a saving throw, it can choose to succeed instead."
            },
            {
                name: "Turn Immunity",
                description: "The demilich is immune to effects that turn undead."
            }
        ],
        actions: [
            {
                name: "Howl (Recharge 5-6)",
                description: "The demilich emits a bloodcurdling howl. Each creature within 30 feet of the demilich that can hear the howl must succeed on a DC 15 Constitution saving throw or drop to 0 hit points. On a successful save, the creature is frightened until the end of its next turn."
            },
            {
                name: "Life Drain",
                description: "The demilich targets up to three creatures that it can see within 10 feet of it. Each target must succeed on a DC 19 Constitution saving throw or take 21 (6d6) necrotic damage, and the demilich regains hit points equal to the total damage dealt to all targets."
            }
        ],
        legendaryActions: [
            {
                name: "Flight",
                description: "The demilich flies up to half its flying speed."
            },
            {
                name: "Cloud of Dust",
                description: "The demilich magically swirls its dusty remains. Each creature within 10 feet of the demilich, including around corners, must succeed on a DC 15 Constitution saving throw or be blinded until the end of the demilich's next turn. A creature that succeeds on the saving throw is immune to this effect until the end of the demilich's next turn."
            },
            {
                name: "Energy Drain (Costs 2 Actions)",
                description: "Each creature within 30 feet of the demilich must make a DC 15 Constitution saving throw. On a failed save, the creature's hit point maximum is magically reduced by 10 (3d6). If a creature's hit point maximum is reduced to 0 by this effect, the creature dies. A creature's hit point maximum can be restored with the greater restoration spell or similar magic."
            },
            {
                name: "Vile Curse (Costs 3 Actions)",
                description: "The demilich targets one creature it can see within 30 feet of it. The target must succeed on a DC 15 Wisdom saving throw or be magically cursed. Until the curse is ended, the target has disadvantage on attack rolls and saving throws. The target can repeat the saving throw at the end of each of its turns, ending the curse on a success."
            }
        ],
        lairActions: [
            {
                name: "Lair Actions",
                description: "On initiative count 20 (losing initiative ties), the demilich can take a lair action to cause one of the following effects; the demilich can't use the same effect two rounds in a row:"
            },
            {
                name: "Tremor",
                description: "The tomb trembles violently. Each creature on the floor of the tomb must succeed on a DC 19 Dexterity saving throw or be knocked prone."
            },
            {
                name: "Antimagic Field",
                description: "The demilich targets one creature it can see within 60 feet of it. An antimagic field fills the space of the target, moving with it until initiative count 20 on the next round."
            },
            {
                name: "Prevent Healing",
                description: "The demilich targets any number of creatures it can see within 30 feet of it. No target can regain hit points until initiative count 20 on the next round."
            }
        ]
    },
    "flameskull": {
        name: "Flameskull",
        size: "Tiny",
        type: "Undead",
        alignment: "neutral evil",
        ac: 13,
        hp: 40,
        hitDice: "9d4+18",
        speed: { walk: 0, fly: 40, hover: true },
        abilities: { str: 1, dex: 17, con: 14, int: 16, wis: 10, cha: 11 },
        skills: { arcana: 5, perception: 2 },
        damageResistances: ["lightning", "necrotic", "piercing"],
        damageImmunities: ["cold", "fire", "poison"],
        conditionImmunities: ["charmed", "frightened", "paralyzed", "poisoned", "prone"],
        senses: ["darkvision 60 ft.", "passive Perception 12"],
        languages: ["Common"],
        cr: "4",
        xp: 1100,
        traits: [
            {
                name: "Illumination",
                description: "The flameskull sheds either dim light in a 15-foot radius, or bright light in a 15-foot radius and dim light for an additional 15 feet. It can switch between the options as an action."
            },
            {
                name: "Magic Resistance",
                description: "The flameskull has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Rejuvenation",
                description: "If the flameskull is destroyed, it regains all its hit points in 1 hour unless holy water is sprinkled on its remains or a dispel magic or remove curse spell is cast on them."
            },
            {
                name: "Spellcasting",
                description: "The flameskull is a 5th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 13, +5 to hit with spell attacks). It requires no somatic or material components to cast its spells. The flameskull has the following wizard spells prepared: Cantrip (at will): mage hand. 1st level (3 slots): magic missile, shield. 2nd level (2 slots): blur, flaming sphere. 3rd level (1 slot): fireball."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The flameskull uses Fire Ray twice."
            },
            {
                name: "Fire Ray",
                description: "Ranged Spell Attack: +5 to hit, range 30 ft., one target. Hit: 10 (3d6) fire damage."
            }
        ]
    },
    "ghost": {
        name: "Ghost",
        size: "Medium",
        type: "Undead",
        alignment: "any alignment",
        ac: 11,
        hp: 45,
        hitDice: "10d8",
        speed: { walk: 0, fly: 40, hover: true },
        abilities: { str: 7, dex: 13, con: 10, int: 10, wis: 12, cha: 17 },
        damageResistances: ["acid", "fire", "lightning", "thunder", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["cold", "necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained"],
        senses: ["darkvision 60 ft.", "passive Perception 11"],
        languages: ["any languages it knew in life"],
        cr: "4",
        xp: 1100,
        traits: [
            {
                name: "Ethereal Sight",
                description: "The ghost can see 60 feet into the Ethereal Plane when it is on the Material Plane, and vice versa."
            },
            {
                name: "Incorporeal Movement",
                description: "The ghost can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
            }
        ],
        actions: [
            {
                name: "Withering Touch",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 17 (4d6 + 3) necrotic damage."
            },
            {
                name: "Etherealness",
                description: "The ghost enters the Ethereal Plane from the Material Plane, or vice versa. It is visible on the Material Plane while it is in the Border Ethereal, and vice versa, yet it can't affect or be affected by anything on the other plane."
            },
            {
                name: "Horrifying Visage",
                description: "Each non-undead creature within 60 feet of the ghost that can see it must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. If the save fails by 5 or more, the target also ages 1d4 x 10 years. A frightened target can repeat the saving throw at the end of each of its turns, ending the frightened condition on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to this ghost's Horrifying Visage for the next 24 hours. The aging effect can be reversed with a greater restoration spell, but only within 24 hours of it occurring."
            },
            {
                name: "Possession (Recharge 6)",
                description: "One humanoid that the ghost can see within 5 feet of it must succeed on a DC 13 Charisma saving throw or be possessed by the ghost; the ghost then disappears, and the target is incapacitated and loses control of its body. The ghost now controls the body but doesn't deprive the target of awareness. The ghost can't be targeted by any attack, spell, or other effect, except ones that turn undead, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity to being charmed and frightened. It otherwise uses the possessed target's statistics, but doesn't gain access to the target's knowledge, class features, or proficiencies. The possession lasts until the body drops to 0 hit points, the ghost ends it as a bonus action, or the ghost is turned or forced out by an effect like the dispel evil and good spell. When the possession ends, the ghost reappears in an unoccupied space within 5 feet of the body. The target is immune to this ghost's Possession for 24 hours after succeeding on the saving throw or after the possession ends."
            }
        ]
    },
    "lich": {
        name: "Lich",
        size: "Medium",
        type: "Undead",
        alignment: "any evil alignment",
        ac: 17,
        acType: "natural armor",
        hp: 135,
        hitDice: "18d8+54",
        speed: { walk: 30 },
        abilities: { str: 11, dex: 16, con: 16, int: 20, wis: 14, cha: 16 },
        savingThrows: { con: 10, int: 12, wis: 9 },
        skills: { arcana: 18, history: 12, insight: 9, perception: 9 },
        damageResistances: ["cold", "lightning", "necrotic"],
        damageImmunities: ["poison", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned"],
        senses: ["truesight 120 ft.", "passive Perception 19"],
        languages: ["Common plus up to five other languages"],
        cr: "21",
        xp: 33000,
        traits: [
            {
                name: "Legendary Resistance (3/Day)",
                description: "If the lich fails a saving throw, it can choose to succeed instead."
            },
            {
                name: "Rejuvenation",
                description: "If it has a phylactery, a destroyed lich gains a new body in 1d10 days, regaining all its hit points and becoming active again. The new body appears within 5 feet of the phylactery."
            },
            {
                name: "Spellcasting",
                description: "The lich is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 20, +12 to hit with spell attacks). The lich has the following wizard spells prepared: Cantrips (at will): mage hand, prestidigitation, ray of frost. 1st level (4 slots): detect magic, magic missile, shield, thunderwave. 2nd level (3 slots): detect thoughts, invisibility, Melf's acid arrow, mirror image. 3rd level (3 slots): animate dead, counterspell, dispel magic, fireball. 4th level (3 slots): blight, dimension door. 5th level (3 slots): cloudkill, scrying. 6th level (1 slot): disintegrate, globe of invulnerability. 7th level (1 slot): finger of death, plane shift. 8th level (1 slot): dominate monster, power word stun. 9th level (1 slot): power word kill."
            },
            {
                name: "Turn Resistance",
                description: "The lich has advantage on saving throws against any effect that turns undead."
            }
        ],
        actions: [
            {
                name: "Paralyzing Touch",
                description: "Melee Spell Attack: +12 to hit, reach 5 ft., one creature. Hit: 10 (3d6) cold damage. The target must succeed on a DC 18 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ],
        legendaryActions: [
            {
                name: "Cantrip",
                description: "The lich casts a cantrip."
            },
            {
                name: "Paralyzing Touch (Costs 2 Actions)",
                description: "The lich uses its Paralyzing Touch."
            },
            {
                name: "Frightening Gaze (Costs 2 Actions)",
                description: "The lich fixes its gaze on one creature it can see within 10 feet of it. The target must succeed on a DC 18 Wisdom saving throw against this magic or become frightened for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the lich's gaze for the next 24 hours."
            },
            {
                name: "Disrupt Life (Costs 3 Actions)",
                description: "Each non-undead creature within 20 feet of the lich must make a DC 18 Constitution saving throw against this magic, taking 21 (6d6) necrotic damage on a failed save, or half as much damage on a successful one."
            }
        ],
        lairActions: [
            {
                name: "Lair Actions",
                description: "On initiative count 20 (losing initiative ties), the lich can take a lair action to cause one of the following effects; the lich can't use the same effect two rounds in a row:"
            },
            {
                name: "Regain Spell Slot",
                description: "The lich rolls a d8 and regains a spell slot of that level or lower. If it has no spent spell slots of that level or lower, nothing happens."
            },
            {
                name: "Tether Soul",
                description: "The lich targets one creature it can see within 30 feet of it. A crackling cord of negative energy tethers the lich to the target. Whenever the lich takes damage, the target must make a DC 18 Constitution saving throw. On a failed save, the lich takes half the damage (rounded down), and the target takes the remaining damage. This tether lasts until initiative count 20 on the next round or until the lich or the target is no longer in the lich's lair."
            },
            {
                name: "Summon Spirits",
                description: "The lich calls forth the spirits of creatures that died in its lair. These apparitions materialize and attack one creature that the lich can see within 60 feet of it. The target must succeed on a DC 18 Constitution saving throw, taking 52 (15d6) necrotic damage on a failed save, or half as much damage on a success. The apparitions then disappear."
            }
        ]
    },
    "ogre-zombie": {
        name: "Ogre Zombie",
        size: "Large",
        type: "Undead",
        alignment: "neutral evil",
        ac: 8,
        hp: 85,
        hitDice: "9d10+36",
        speed: { walk: 30 },
        abilities: { str: 19, dex: 6, con: 18, int: 3, wis: 6, cha: 5 },
        savingThrows: { wis: 0 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 8"],
        languages: ["understands Common and Giant but can't speak"],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Undead Fortitude",
                description: "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead."
            }
        ],
        actions: [
            {
                name: "Morningstar",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage."
            }
        ]
    },
    "revenant": {
        name: "Revenant",
        size: "Medium",
        type: "Undead",
        alignment: "neutral",
        ac: 13,
        acType: "leather armor",
        hp: 136,
        hitDice: "16d8+64",
        speed: { walk: 30 },
        abilities: { str: 18, dex: 14, con: 18, int: 13, wis: 16, cha: 18 },
        savingThrows: { str: 7, con: 7, wis: 6, cha: 7 },
        damageResistances: ["necrotic", "psychic"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned", "stunned"],
        senses: ["darkvision 60 ft.", "passive Perception 13"],
        languages: ["the languages it knew in life"],
        cr: "5",
        xp: 1800,
        traits: [
            {
                name: "Regeneration",
                description: "The revenant regains 10 hit points at the start of its turn. If the revenant takes fire or radiant damage, this trait doesn't function at the start of the revenant's next turn. The revenant's body is destroyed only if it starts its turn with 0 hit points and doesn't regenerate."
            },
            {
                name: "Rejuvenation",
                description: "When the revenant's body is destroyed, its soul lingers. After 24 hours, the soul inhabits and animates another humanoid corpse on the same plane of existence and regains all its hit points. While the soul is bodiless, a wish spell can be used to force the soul to go to the afterlife and not return."
            },
            {
                name: "Turn Immunity",
                description: "The revenant is immune to effects that turn undead."
            },
            {
                name: "Vengeful Tracker",
                description: "The revenant knows the distance to and direction of any creature against which it seeks revenge, even if the creature and the revenant are on different planes of existence. If the creature being tracked by the revenant dies, the revenant knows."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The revenant makes two fist attacks."
            },
            {
                name: "Fist",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage. If the target is a creature against which the revenant has sworn vengeance, the target takes an extra 14 (4d6) bludgeoning damage. Instead of dealing damage, the revenant can grapple the target (escape DC 14) provided the target is Large or smaller."
            },
            {
                name: "Vengeful Glare",
                description: "The revenant targets one creature it can see within 30 feet of it and against which it has sworn vengeance. The target must make a DC 15 Wisdom saving throw. On a failure, the target is paralyzed until the revenant deals damage to it, or until the end of the revenant's next turn. When the paralysis ends, the target is frightened of the revenant for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, with disadvantage if it can see the revenant, ending the frightened condition on itself on a success."
            }
        ]
    },
    "shadow": {
        name: "Shadow",
        size: "Medium",
        type: "Undead",
        alignment: "chaotic evil",
        ac: 12,
        hp: 16,
        hitDice: "3d8+3",
        speed: { walk: 40 },
        abilities: { str: 6, dex: 14, con: 13, int: 6, wis: 10, cha: 8 },
        skills: { stealth: 4 },
        damageVulnerabilities: ["radiant"],
        damageResistances: ["acid", "cold", "fire", "lightning", "thunder", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["necrotic", "poison"],
        conditionImmunities: ["exhaustion", "frightened", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: [],
        cr: "1/2",
        xp: 100,
        traits: [
            {
                name: "Amorphous",
                description: "The shadow can move through a space as narrow as 1 inch wide without squeezing."
            },
            {
                name: "Shadow Stealth",
                description: "While in dim light or darkness, the shadow can take the Hide action as a bonus action."
            },
            {
                name: "Sunlight Weakness",
                description: "While in sunlight, the shadow has disadvantage on attack rolls, ability checks, and saving throws."
            }
        ],
        actions: [
            {
                name: "Strength Drain",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) necrotic damage, and the target's Strength score is reduced by 1d4. The target dies if this reduces its Strength to 0. Otherwise, the reduction lasts until the target finishes a short or long rest. If a non-evil humanoid dies from this attack, a new shadow rises from the corpse 1d4 hours later."
            }
        ]
    },
    "vampire": {
        name: "Vampire",
        size: "Medium",
        type: "Undead",
        subtype: "shapechanger",
        alignment: "lawful evil",
        ac: 16,
        acType: "natural armor",
        hp: 144,
        hitDice: "17d8+68",
        speed: { walk: 30 },
        abilities: { str: 18, dex: 18, con: 18, int: 17, wis: 15, cha: 18 },
        savingThrows: { dex: 9, wis: 7, cha: 9 },
        skills: { perception: 7, stealth: 9 },
        damageResistances: ["necrotic", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 120 ft.", "passive Perception 17"],
        languages: ["the languages it knew in life"],
        cr: "13",
        xp: 10000,
        traits: [
            {
                name: "Shapechanger",
                description: "If the vampire isn't in sunlight or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form. While in bat form, the vampire can't speak, its walking speed is 5 feet, and it has a flying speed of 30 feet. Its statistics, other than its size and speed, are unchanged. Anything it is wearing transforms with it, but nothing it is carrying does. It reverts to its true form if it dies. While in mist form, the vampire can't take any actions, speak, or manipulate objects. It is weightless, has a flying speed of 20 feet, can hover, and can enter a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and it can't pass through water. It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to all nonmagical damage, except the damage it takes from sunlight."
            },
            {
                name: "Legendary Resistance (3/Day)",
                description: "If the vampire fails a saving throw, it can choose to succeed instead."
            },
            {
                name: "Misty Escape",
                description: "When it drops to 0 hit points outside its resting place, the vampire transforms into a cloud of mist (as in the Shapechanger trait) instead of falling unconscious, provided that it isn't in sunlight or running water. If it can't transform, it is destroyed. While it has 0 hit points in mist form, it can't revert to its vampire form, and it must reach its resting place within 2 hours or be destroyed. Once in its resting place, it reverts to its vampire form. It is then paralyzed until it regains at least 1 hit point. After spending 1 hour in its resting place with 0 hit points, it regains 1 hit point."
            },
            {
                name: "Regeneration",
                description: "The vampire regains 20 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn."
            },
            {
                name: "Spider Climb",
                description: "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            },
            {
                name: "Vampire Weaknesses",
                description: "The vampire has the following flaws: Forbiddance (The vampire can't enter a residence without an invitation from one of the occupants), Harmed by Running Water (The vampire takes 20 acid damage if it ends its turn in running water), Stake to the Heart (If a piercing weapon made of wood is driven into the vampire's heart while the vampire is incapacitated in its resting place, the vampire is paralyzed until the stake is removed), Sunlight Hypersensitivity (The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks)."
            }
        ],
        actions: [
            {
                name: "Multiattack (Vampire Form Only)",
                description: "The vampire makes two attacks, only one of which can be a bite attack."
            },
            {
                name: "Unarmed Strike (Vampire Form Only)",
                description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 8 (1d8 + 4) bludgeoning damage. Instead of dealing damage, the vampire can grapple the target (escape DC 18)."
            },
            {
                name: "Bite (Bat or Vampire Form Only)",
                description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit: 7 (1d6 + 4) piercing damage plus 10 (3d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under the vampire's control."
            },
            {
                name: "Charm",
                description: "The vampire targets one humanoid it can see within 30 feet of it. If the target can see the vampire, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed by the vampire. The charmed target regards the vampire as a trusted friend to be heeded and protected. Although the target isn't under the vampire's control, it takes the vampire's requests or actions in the most favorable way it can, and it is a willing target for the vampire's bite attack. Each time the vampire or the vampire's companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the vampire is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect."
            },
            {
                name: "Children of the Night (1/Day)",
                description: "The vampire magically calls 2d4 swarms of bats or rats, provided that the sun isn't up. While outdoors, the vampire can call 3d6 wolves instead. The called creatures arrive in 1d4 rounds, acting as allies of the vampire and obeying its spoken commands. The beasts remain for 1 hour, until the vampire dies, or until the vampire dismisses them as a bonus action."
            }
        ],
        legendaryActions: [
            {
                name: "Move",
                description: "The vampire moves up to its speed without provoking opportunity attacks."
            },
            {
                name: "Unarmed Strike",
                description: "The vampire makes one unarmed strike."
            },
            {
                name: "Bite (Costs 2 Actions)",
                description: "The vampire makes one bite attack."
            }
        ]
    },
    "will-o-wisp": {
        name: "Will-o'-Wisp",
        size: "Tiny",
        type: "Undead",
        alignment: "chaotic evil",
        ac: 19,
        hp: 22,
        hitDice: "9d4",
        speed: { walk: 0, fly: 50, hover: true },
        abilities: { str: 1, dex: 28, con: 10, int: 13, wis: 14, cha: 11 },
        damageResistances: ["acid", "cold", "fire", "necrotic", "thunder", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["lightning", "poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "poisoned", "prone", "restrained", "unconscious"],
        senses: ["darkvision 120 ft.", "passive Perception 12"],
        languages: ["the languages it knew in life"],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Consume Life",
                description: "As a bonus action, the will-o'-wisp can target one creature it can see within 5 feet of it that has 0 hit points and is still alive. The target must succeed on a DC 10 Constitution saving throw against this magic or die. If the target dies, the will-o'-wisp regains 10 (3d6) hit points."
            },
            {
                name: "Ephemeral",
                description: "The will-o'-wisp can't wear or carry anything."
            },
            {
                name: "Incorporeal Movement",
                description: "The will-o'-wisp can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
            },
            {
                name: "Variable Illumination",
                description: "The will-o'-wisp sheds bright light in a 5- to 20-foot radius and dim light for an additional number of feet equal to the chosen radius. The will-o'-wisp can alter the radius as a bonus action."
            }
        ],
        actions: [
            {
                name: "Shock",
                description: "Melee Spell Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d8) lightning damage."
            },
            {
                name: "Invisibility",
                description: "The will-o'-wisp and its light magically become invisible until it attacks or uses its Consume Life, or until its concentration ends (as if concentrating on a spell)."
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
    "succubus": {
        name: "Succubus",
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
    "incubus": {
        name: "Incubus",
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
    // ADDITIONAL FIENDS (DEMONS)
    // ==========================================

    "barlgura": {
        name: "Barlgura",
        size: "Large",
        type: "Fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 68,
        hitDice: "8d10+24",
        speed: { walk: 40, climb: 40 },
        abilities: { str: 18, dex: 15, con: 16, int: 7, wis: 14, cha: 9 },
        savingThrows: { dex: 5, con: 6 },
        skills: { perception: 5, stealth: 5 },
        damageResistances: ["cold", "fire", "lightning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 30 ft.", "darkvision 120 ft.", "passive Perception 15"],
        languages: ["Abyssal", "telepathy 120 ft."],
        cr: "5",
        xp: 1800,
        traits: [
            {
                name: "Innate Spellcasting",
                description: "The barlgura's spellcasting ability is Wisdom (spell save DC 13). The barlgura can innately cast the following spells, requiring no material components: 1/day each: entangle, phantasmal force. 2/day each: disguise self, invisibility (self only)."
            },
            {
                name: "Reckless",
                description: "At the start of its turn, the barlgura can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn."
            },
            {
                name: "Running Leap",
                description: "The barlgura's long jump is up to 40 feet and its high jump is up to 20 feet when it has a running start."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The barlgura makes three attacks: one with its bite and two with its fists."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) piercing damage."
            },
            {
                name: "Fist",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) bludgeoning damage."
            }
        ]
    },
    "chasme": {
        name: "Chasme",
        size: "Large",
        type: "Fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 84,
        hitDice: "13d10+13",
        speed: { walk: 20, fly: 60 },
        abilities: { str: 15, dex: 15, con: 12, int: 11, wis: 14, cha: 10 },
        savingThrows: { dex: 5, wis: 5 },
        skills: { perception: 5 },
        damageResistances: ["cold", "fire", "lightning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 10 ft.", "darkvision 120 ft.", "passive Perception 15"],
        languages: ["Abyssal", "telepathy 120 ft."],
        cr: "6",
        xp: 2300,
        traits: [
            {
                name: "Drone",
                description: "The chasme produces a horrid droning sound to which demons are immune. Any other creature that starts its turn within 30 feet of the chasme must succeed on a DC 12 Constitution saving throw or fall unconscious for 10 minutes. A creature that can't hear the drone automatically succeeds on the save. The effect on the creature ends if it takes damage or if another creature takes an action to splash it with holy water. If a creature's saving throw is successful or the effect ends for it, it is immune to the drone for the next 24 hours."
            },
            {
                name: "Magic Resistance",
                description: "The chasme has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Spider Climb",
                description: "The chasme can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            }
        ],
        actions: [
            {
                name: "Proboscis",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 16 (4d6 + 2) piercing damage plus 24 (7d6) necrotic damage, and the target's hit point maximum is reduced by an amount equal to the necrotic damage taken. If this effect reduces a creature's hit point maximum to 0, the creature dies. This reduction to a creature's hit point maximum lasts until the creature finishes a long rest or until it is affected by a spell like greater restoration."
            }
        ]
    },
    "goristro": {
        name: "Goristro",
        size: "Huge",
        type: "Fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 19,
        acType: "natural armor",
        hp: 310,
        hitDice: "23d12+161",
        speed: { walk: 40 },
        abilities: { str: 25, dex: 11, con: 25, int: 6, wis: 13, cha: 14 },
        savingThrows: { str: 13, dex: 6, con: 13, wis: 7 },
        skills: { perception: 7 },
        damageResistances: ["cold", "fire", "lightning", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft.", "passive Perception 17"],
        languages: ["Abyssal"],
        cr: "17",
        xp: 18000,
        traits: [
            {
                name: "Charge",
                description: "If the goristro moves at least 15 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 38 (7d10) piercing damage. If the target is a creature, it must succeed on a DC 21 Strength saving throw or be pushed up to 20 feet away and knocked prone."
            },
            {
                name: "Labyrinthine Recall",
                description: "The goristro can perfectly recall any path it has traveled."
            },
            {
                name: "Magic Resistance",
                description: "The goristro has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Siege Monster",
                description: "The goristro deals double damage to objects and structures."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The goristro makes three attacks: two with its fists and one with its hoof."
            },
            {
                name: "Fist",
                description: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 20 (3d8 + 7) bludgeoning damage."
            },
            {
                name: "Hoof",
                description: "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 23 (3d10 + 7) bludgeoning damage. If the target is a creature, it must succeed on a DC 21 Strength saving throw or be knocked prone."
            },
            {
                name: "Gore",
                description: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 45 (7d10 + 7) piercing damage."
            }
        ]
    },
    "manes": {
        name: "Manes",
        size: "Small",
        type: "Fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 9,
        hp: 9,
        hitDice: "2d6+2",
        speed: { walk: 20 },
        abilities: { str: 10, dex: 9, con: 13, int: 3, wis: 8, cha: 4 },
        damageResistances: ["cold", "fire", "lightning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "frightened", "poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 9"],
        languages: ["understands Abyssal but can't speak"],
        cr: "1/8",
        xp: 25,
        traits: [],
        actions: [
            {
                name: "Claws",
                description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (2d4) slashing damage."
            }
        ]
    },
    "shadow-demon": {
        name: "Shadow Demon",
        size: "Medium",
        type: "Fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 13,
        hp: 66,
        hitDice: "12d8+12",
        speed: { walk: 30, fly: 30 },
        abilities: { str: 1, dex: 17, con: 12, int: 14, wis: 13, cha: 14 },
        savingThrows: { dex: 5, cha: 4 },
        skills: { stealth: 7 },
        damageVulnerabilities: ["radiant"],
        damageResistances: ["acid", "fire", "necrotic", "thunder", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["cold", "lightning", "poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained"],
        senses: ["darkvision 120 ft.", "passive Perception 11"],
        languages: ["Abyssal", "telepathy 120 ft."],
        cr: "4",
        xp: 1100,
        traits: [
            {
                name: "Incorporeal Movement",
                description: "The demon can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
            },
            {
                name: "Light Sensitivity",
                description: "While in bright light, the demon has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            },
            {
                name: "Shadow Stealth",
                description: "While in dim light or darkness, the demon can take the Hide action as a bonus action."
            }
        ],
        actions: [
            {
                name: "Claws",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 10 (2d6 + 3) psychic damage or, if the demon had advantage on the attack roll, 17 (4d6 + 3) psychic damage."
            }
        ]
    },
    "yochlol": {
        name: "Yochlol",
        size: "Medium",
        type: "Fiend",
        subtype: "demon, shapechanger",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 136,
        hitDice: "16d8+64",
        speed: { walk: 30, climb: 30 },
        abilities: { str: 15, dex: 14, con: 18, int: 13, wis: 15, cha: 15 },
        savingThrows: { dex: 6, int: 5, wis: 6, cha: 6 },
        skills: { deception: 10, insight: 6 },
        damageResistances: ["cold", "fire", "lightning", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft.", "passive Perception 12"],
        languages: ["Abyssal", "Elvish", "Undercommon"],
        cr: "10",
        xp: 5900,
        traits: [
            {
                name: "Shapechanger",
                description: "The yochlol can use its action to polymorph into a form that resembles a female drow or giant spider, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                name: "Magic Resistance",
                description: "The yochlol has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Spider Climb",
                description: "The yochlol can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            },
            {
                name: "Innate Spellcasting",
                description: "The yochlol's spellcasting ability is Charisma (spell save DC 14). The yochlol can innately cast the following spells, requiring no material components: At will: detect thoughts, web. 1/day: dominate person."
            },
            {
                name: "Web Walker",
                description: "The yochlol ignores movement restrictions caused by webbing."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The yochlol makes two melee attacks."
            },
            {
                name: "Slam (Bite in Spider Form)",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft. (10 ft. in demon form), one target. Hit: 5 (1d6 + 2) bludgeoning damage plus 21 (6d6) poison damage."
            },
            {
                name: "Mist Form",
                description: "The yochlol transforms into toxic mist or reverts to its true form. Any equipment it is wearing or carrying is also transformed. It reverts to its true form if it dies. While in mist form, the yochlol is incapacitated and can't speak. It has a flying speed of 30 feet, can hover, and can pass through any space that isn't airtight. It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to nonmagical damage. While in mist form, the yochlol can enter a creature's space and stop there. Each time that creature starts its turn with the yochlol in its space, the creature must succeed on a DC 14 Constitution saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target is incapacitated."
            }
        ]
    },

    // ==========================================
    // ADDITIONAL FIENDS (DEVILS)
    // ==========================================

    "spined-devil": {
        name: "Spined Devil",
        size: "Small",
        type: "Fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 13,
        acType: "natural armor",
        hp: 22,
        hitDice: "5d6+5",
        speed: { walk: 20, fly: 40 },
        abilities: { str: 10, dex: 15, con: 12, int: 11, wis: 14, cha: 8 },
        damageResistances: ["cold", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft.", "passive Perception 12"],
        languages: ["Infernal", "telepathy 120 ft."],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Devil's Sight",
                description: "Magical darkness doesn't impede the devil's darkvision."
            },
            {
                name: "Flyby",
                description: "The devil doesn't provoke an opportunity attack when it flies out of an enemy's reach."
            },
            {
                name: "Limited Spines",
                description: "The devil has twelve tail spines. Used spines regrow by the time the devil finishes a long rest."
            },
            {
                name: "Magic Resistance",
                description: "The devil has advantage on saving throws against spells and other magical effects."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The devil makes two attacks: one with its bite and one with its fork or two with its tail spines."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (2d4) slashing damage."
            },
            {
                name: "Fork",
                description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage."
            },
            {
                name: "Tail Spine",
                description: "Ranged Weapon Attack: +4 to hit, range 20/80 ft., one target. Hit: 4 (1d4 + 2) piercing damage plus 3 (1d6) fire damage."
            }
        ]
    },

    // ==========================================
    // OTHER FIENDS
    // ==========================================

    "cambion": {
        name: "Cambion",
        size: "Medium",
        type: "Fiend",
        alignment: "any evil alignment",
        ac: 19,
        acType: "scale mail",
        hp: 82,
        hitDice: "11d8+33",
        speed: { walk: 30, fly: 60 },
        abilities: { str: 18, dex: 18, con: 16, int: 14, wis: 12, cha: 16 },
        savingThrows: { str: 7, con: 6, int: 5, cha: 6 },
        skills: { deception: 6, intimidation: 6, perception: 4, stealth: 7 },
        damageResistances: ["cold", "fire", "lightning", "poison", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft.", "passive Perception 14"],
        languages: ["Abyssal", "Common", "Infernal"],
        cr: "5",
        xp: 1800,
        traits: [
            {
                name: "Fiendish Blessing",
                description: "The AC of the cambion includes its Charisma bonus."
            },
            {
                name: "Innate Spellcasting",
                description: "The cambion's spellcasting ability is Charisma (spell save DC 14). The cambion can innately cast the following spells, requiring no material components: 3/day each: alter self, command, detect magic. 1/day: plane shift (self only)."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The cambion makes two melee attacks or uses its Fire Ray twice."
            },
            {
                name: "Spear",
                description: "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage."
            },
            {
                name: "Fire Ray",
                description: "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 10 (3d6) fire damage."
            },
            {
                name: "Fiendish Charm",
                description: "One humanoid the cambion can see within 30 feet of it must succeed on a DC 14 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the cambion's spoken commands. If the target suffers any harm from the cambion or another creature or receives a suicidal command from the cambion, the target can repeat the saving throw, ending the effect on itself on a success. If a target's saving throw is successful, or if the effect ends for it, the creature is immune to the cambion's Fiendish Charm for the next 24 hours."
            }
        ]
    },
    "nightmare": {
        name: "Nightmare",
        size: "Large",
        type: "Fiend",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor",
        hp: 68,
        hitDice: "8d10+24",
        speed: { walk: 60, fly: 90 },
        abilities: { str: 18, dex: 15, con: 16, int: 10, wis: 13, cha: 15 },
        damageImmunities: ["fire"],
        senses: ["passive Perception 11"],
        languages: ["understands Abyssal, Common, and Infernal but can't speak"],
        cr: "3",
        xp: 700,
        traits: [
            {
                name: "Confer Fire Resistance",
                description: "The nightmare can grant resistance to fire damage to anyone riding it."
            },
            {
                name: "Illumination",
                description: "The nightmare sheds bright light in a 10-foot radius and dim light for an additional 10 feet."
            }
        ],
        actions: [
            {
                name: "Hooves",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage plus 7 (2d6) fire damage."
            },
            {
                name: "Ethereal Stride",
                description: "The nightmare and up to three willing creatures within 5 feet of it magically enter the Ethereal Plane from the Material Plane, or vice versa."
            }
        ]
    },
    "rakshasa": {
        name: "Rakshasa",
        size: "Medium",
        type: "Fiend",
        alignment: "lawful evil",
        ac: 16,
        acType: "natural armor",
        hp: 110,
        hitDice: "13d8+52",
        speed: { walk: 40 },
        abilities: { str: 14, dex: 17, con: 18, int: 13, wis: 16, cha: 20 },
        skills: { deception: 10, insight: 8 },
        damageVulnerabilities: ["piercing from magic weapons wielded by good creatures"],
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft.", "passive Perception 13"],
        languages: ["Common", "Infernal"],
        cr: "13",
        xp: 10000,
        traits: [
            {
                name: "Limited Magic Immunity",
                description: "The rakshasa can't be affected or detected by spells of 6th level or lower unless it wishes to be. It has advantage on saving throws against all other spells and magical effects."
            },
            {
                name: "Innate Spellcasting",
                description: "The rakshasa's innate spellcasting ability is Charisma (spell save DC 18, +10 to hit with spell attacks). The rakshasa can innately cast the following spells, requiring no material components: At will: detect thoughts, disguise self, mage hand, minor illusion. 3/day each: charm person, detect magic, invisibility, major image, suggestion. 1/day each: dominate person, fly, plane shift, true seeing."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The rakshasa makes two claw attacks."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage, and the target is cursed if it is a creature. The magical curse takes effect whenever the target takes a short or long rest, filling the target's thoughts with horrible images and dreams. The cursed target gains no benefit from finishing a short or long rest. The curse lasts until it is lifted by a remove curse spell or similar magic."
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
    },
    "aboleth": {
        name: "Aboleth",
        size: "Large",
        type: "Aberration",
        alignment: "lawful evil",
        ac: 17,
        acType: "natural armor",
        hp: 135,
        hitDice: "18d10+36",
        speed: { walk: 10, swim: 40 },
        abilities: { str: 21, dex: 9, con: 15, int: 18, wis: 15, cha: 18 },
        savingThrows: { con: 6, int: 8, wis: 6 },
        skills: { history: 12, perception: 10 },
        senses: ["darkvision 120 ft.", "passive Perception 20"],
        languages: ["Deep Speech", "telepathy 120 ft."],
        cr: "10",
        xp: 5900,
        traits: [
            {
                name: "Amphibious",
                description: "The aboleth can breathe air and water."
            },
            {
                name: "Mucous Cloud",
                description: "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 feet of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater."
            },
            {
                name: "Probing Telepathy",
                description: "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The aboleth makes three tentacle attacks."
            },
            {
                name: "Tentacle",
                description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed."
            },
            {
                name: "Tail",
                description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 15 (3d6 + 5) bludgeoning damage."
            },
            {
                name: "Enslave (3/Day)",
                description: "The aboleth targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance. Whenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth."
            }
        ],
        legendaryActions: [
            {
                name: "Detect",
                description: "The aboleth makes a Wisdom (Perception) check."
            },
            {
                name: "Tail Swipe",
                description: "The aboleth makes one tail attack."
            },
            {
                name: "Psychic Drain (Costs 2 Actions)",
                description: "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes."
            }
        ]
    },
    "beholder-zombie": {
        name: "Beholder Zombie",
        size: "Large",
        type: "Undead",
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 93,
        hitDice: "11d10+33",
        speed: { walk: 0, fly: 20, hover: true },
        abilities: { str: 10, dex: 8, con: 16, int: 3, wis: 8, cha: 5 },
        savingThrows: { wis: 2 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned", "prone"],
        senses: ["darkvision 60 ft.", "passive Perception 9"],
        languages: ["understands Deep Speech and Undercommon but can't speak"],
        cr: "5",
        xp: 1800,
        traits: [
            {
                name: "Undead Fortitude",
                description: "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead."
            }
        ],
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 14 (4d6) piercing damage."
            },
            {
                name: "Eye Ray",
                description: "The zombie uses a random magical eye ray, choosing a target that it can see within 60 feet of it. 1. Paralyzing Ray. The targeted creature must succeed on a DC 14 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. 2. Fear Ray. The targeted creature must succeed on a DC 14 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. 3. Enervation Ray. The targeted creature must make a DC 14 Constitution saving throw, taking 36 (8d8) necrotic damage on a failed save, or half as much damage on a successful one. 4. Disintegration Ray. If the target is a creature, it must succeed on a DC 14 Dexterity saving throw or take 45 (10d8) force damage. If this damage reduces the creature to 0 hit points, its body becomes a pile of fine gray dust. If the target is a Large or smaller nonmagical object or creation of magical force, it is disintegrated without a saving throw. If the target is a Huge or larger nonmagical object or creation of magical force, this ray disintegrates a 10-foot cube of it."
            }
        ]
    },
    "chuul": {
        name: "Chuul",
        size: "Large",
        type: "Aberration",
        alignment: "chaotic evil",
        ac: 16,
        acType: "natural armor",
        hp: 93,
        hitDice: "11d10+33",
        speed: { walk: 30, swim: 30 },
        abilities: { str: 19, dex: 10, con: 16, int: 5, wis: 11, cha: 5 },
        skills: { perception: 4 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 14"],
        languages: ["understands Deep Speech but can't speak"],
        cr: "4",
        xp: 1100,
        traits: [
            {
                name: "Amphibious",
                description: "The chuul can breathe air and water."
            },
            {
                name: "Sense Magic",
                description: "The chuul senses magic within 120 feet of it at will. This trait otherwise works like the detect magic spell but isn't itself magical."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The chuul makes two pincer attacks. If the chuul is grappling a creature, the chuul can also use its tentacles once."
            },
            {
                name: "Pincer",
                description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage. The target is grappled (escape DC 14) if it is a Large or smaller creature and the chuul doesn't have two other creatures grappled."
            },
            {
                name: "Tentacles",
                description: "One creature grappled by the chuul must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ]
    },
    "cloaker": {
        name: "Cloaker",
        size: "Large",
        type: "Aberration",
        alignment: "chaotic neutral",
        ac: 14,
        acType: "natural armor",
        hp: 78,
        hitDice: "12d10+12",
        speed: { walk: 10, fly: 40 },
        abilities: { str: 17, dex: 15, con: 12, int: 13, wis: 12, cha: 14 },
        skills: { stealth: 5 },
        senses: ["darkvision 60 ft.", "passive Perception 11"],
        languages: ["Deep Speech", "Undercommon"],
        cr: "8",
        xp: 3900,
        traits: [
            {
                name: "Damage Transfer",
                description: "While attached to a creature, the cloaker takes only half the damage dealt to it (rounded down), and that creature takes the other half."
            },
            {
                name: "False Appearance",
                description: "While the cloaker remains motionless without its underside exposed, it is indistinguishable from a dark leather cloak."
            },
            {
                name: "Light Sensitivity",
                description: "While in bright light, the cloaker has disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The cloaker makes two attacks: one with its bite and one with its tail."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 10 (2d6 + 3) piercing damage, and if the target is Large or smaller, the cloaker attaches to it. If the cloaker has advantage against the target, the cloaker attaches to the target's head, and the target is blinded and unable to breathe while the cloaker is attached. While attached, the cloaker can make this attack only against the target and has advantage on the attack roll. The cloaker can detach itself by spending 5 feet of its movement. A creature, including the target, can take its action to detach the cloaker by succeeding on a DC 16 Strength check."
            },
            {
                name: "Tail",
                description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 7 (1d8 + 3) slashing damage."
            },
            {
                name: "Moan",
                description: "Each creature within 60 feet of the cloaker that can hear its moan and that isn't an aberration must succeed on a DC 13 Wisdom saving throw or become frightened until the end of the cloaker's next turn. If a creature's saving throw is successful, the creature is immune to the cloaker's moan for the next 24 hours."
            },
            {
                name: "Phantasms (Recharges after a Short or Long Rest)",
                description: "The cloaker magically creates three illusory duplicates of itself if it isn't in bright light. The duplicates move with it and mimic its actions, shifting position so as to make it impossible to track which cloaker is the real one. If the cloaker is ever in an area of bright light, the duplicates disappear. Whenever any creature targets the cloaker with an attack or a harmful spell while a duplicate remains, that creature rolls randomly to determine whether it targets the cloaker or one of the duplicates. A creature is unaffected by this magical effect if it can't see or if it relies on senses other than sight. A duplicate has the cloaker's AC and uses its saving throws. If an attack hits a duplicate, or if a duplicate fails a saving throw against an effect that deals damage, the duplicate disappears."
            }
        ]
    },
    "death-tyrant": {
        name: "Death Tyrant",
        size: "Large",
        type: "Undead",
        alignment: "lawful evil",
        ac: 19,
        acType: "natural armor",
        hp: 187,
        hitDice: "25d10+50",
        speed: { walk: 0, fly: 20, hover: true },
        abilities: { str: 10, dex: 14, con: 14, int: 19, wis: 15, cha: 19 },
        savingThrows: { str: 5, con: 7, int: 9, wis: 7, cha: 9 },
        skills: { perception: 12 },
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "paralyzed", "petrified", "poisoned", "prone"],
        senses: ["darkvision 120 ft.", "passive Perception 22"],
        languages: ["Deep Speech", "Undercommon"],
        cr: "14",
        xp: 11500,
        traits: [
            {
                name: "Negative Energy Cone",
                description: "The death tyrant's central eye emits an invisible, magical 150-foot cone of negative energy. At the start of each of its turns, the tyrant decides which way the cone faces and whether the cone is active. Any creature in that area can't regain hit points. Any humanoid that dies there becomes a zombie under the tyrant's command. The dead humanoid retains its place in the initiative order and animates at the start of its next turn, provided that its body hasn't been completely destroyed."
            }
        ],
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (4d6) piercing damage."
            },
            {
                name: "Eye Rays",
                description: "The death tyrant shoots three of the following magical eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 feet of it: 1. Charm Ray. The targeted creature must succeed on a DC 17 Wisdom saving throw or be charmed by the death tyrant for 1 hour, or until the death tyrant harms the creature. 2. Paralyzing Ray. The targeted creature must succeed on a DC 17 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. 3. Fear Ray. The targeted creature must succeed on a DC 17 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. 4. Slowing Ray. The targeted creature must succeed on a DC 17 Dexterity saving throw. On a failed save, the target's speed is halved for 1 minute. In addition, the creature can't take reactions, and it can take either an action or a bonus action on its turn, not both. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. 5. Enervation Ray. The targeted creature must make a DC 17 Constitution saving throw, taking 36 (8d8) necrotic damage on a failed save, or half as much damage on a successful one. 6. Telekinetic Ray. If the target is a creature, it must succeed on a DC 17 Strength saving throw or the death tyrant moves it up to 30 feet in any direction. It is restrained by the ray's telekinetic grip until the start of the death tyrant's next turn or until the death tyrant is incapacitated. If the target is an object weighing 300 pounds or less that isn't being worn or carried, it is moved up to 30 feet in any direction. The death tyrant can also exert fine control on objects with this ray, such as manipulating a simple tool or opening a door or a container. 7. Sleep Ray. The targeted creature must succeed on a DC 17 Wisdom saving throw or fall asleep and remain unconscious for 1 minute. The target awakens if it takes damage or another creature takes an action to wake it. This ray has no effect on constructs and undead. 8. Petrification Ray. The targeted creature must make a DC 17 Dexterity saving throw. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic. 9. Disintegration Ray. If the target is a creature, it must succeed on a DC 17 Dexterity saving throw or take 45 (10d8) force damage. If this damage reduces the creature to 0 hit points, its body becomes a pile of fine gray dust. If the target is a Large or smaller nonmagical object or creation of magical force, it is disintegrated without a saving throw. If the target is a Huge or larger object or creation of magical force, this ray disintegrates a 10-foot cube of it. 10. Death Ray. The targeted creature must succeed on a DC 17 Dexterity saving throw or take 55 (10d10) necrotic damage. The target dies if the ray reduces it to 0 hit points."
            }
        ],
        legendaryActions: [
            {
                name: "Eye Ray",
                description: "The death tyrant uses one random eye ray."
            }
        ]
    },
    "gibbering-mouther": {
        name: "Gibbering Mouther",
        size: "Medium",
        type: "Aberration",
        alignment: "neutral",
        ac: 9,
        hp: 67,
        hitDice: "9d8+27",
        speed: { walk: 10, swim: 10 },
        abilities: { str: 10, dex: 8, con: 16, int: 3, wis: 10, cha: 6 },
        conditionImmunities: ["prone"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: [],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Aberrant Ground",
                description: "The ground in a 10-foot radius around the mouther is doughlike difficult terrain. Each creature that starts its turn in that area must succeed on a DC 10 Strength saving throw or have its speed reduced to 0 until the start of its next turn."
            },
            {
                name: "Gibbering",
                description: "The mouther babbles incoherently while it can see any creature and isn't incapacitated. Each creature that starts its turn within 20 feet of the mouther and can hear the gibbering must succeed on a DC 10 Wisdom saving throw. On a failure, the creature can't take reactions until the start of its next turn and rolls a d8 to determine what it does during its turn. On a 1 to 4, the creature does nothing. On a 5 or 6, the creature takes no action or bonus action and uses all its movement to move in a randomly determined direction. On a 7 or 8, the creature makes a melee attack against a randomly determined creature within its reach or does nothing if it can't make such an attack."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The gibbering mouther makes one bite attack and, if it can, uses its Blinding Spittle."
            },
            {
                name: "Bites",
                description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 17 (5d6) piercing damage. If the target is Medium or smaller, it must succeed on a DC 10 Strength saving throw or be knocked prone. If the target is killed by this damage, it is absorbed into the mouther."
            },
            {
                name: "Blinding Spittle (Recharge 5-6)",
                description: "The mouther spits a chemical glob at a point it can see within 15 feet of it. The glob explodes in a blinding flash of light on impact. Each creature within 5 feet of the flash must succeed on a DC 13 Dexterity saving throw or be blinded until the end of the mouther's next turn."
            }
        ]
    },
    "intellect-devourer": {
        name: "Intellect Devourer",
        size: "Tiny",
        type: "Aberration",
        alignment: "lawful evil",
        ac: 12,
        hp: 21,
        hitDice: "6d4+6",
        speed: { walk: 40 },
        abilities: { str: 6, dex: 14, con: 13, int: 12, wis: 11, cha: 10 },
        skills: { perception: 2, stealth: 4 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["blinded"],
        senses: ["blindsight 60 ft. (blind beyond this radius)", "passive Perception 12"],
        languages: ["understands Deep Speech but can't speak", "telepathy 60 ft."],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Detect Sentience",
                description: "The intellect devourer can sense the presence and location of any creature within 300 feet of it that has an Intelligence of 3 or higher, regardless of interposing barriers, unless the creature is protected by a mind blank spell."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The intellect devourer makes one attack with its claws and uses Devour Intellect."
            },
            {
                name: "Claws",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage."
            },
            {
                name: "Devour Intellect",
                description: "The intellect devourer targets one creature it can see within 10 feet of it that has a brain. The target must succeed on a DC 12 Intelligence saving throw against this magic or take 11 (2d10) psychic damage. Also on a failure, roll 3d6: If the total equals or exceeds the target's Intelligence score, that score is reduced to 0. The target is stunned until it regains at least one point of Intelligence."
            },
            {
                name: "Body Thief",
                description: "The intellect devourer initiates an Intelligence contest with an incapacitated humanoid within 5 feet of it that isn't protected by protection from evil and good. If it wins the contest, the intellect devourer magically consumes the target's brain, teleports into the target's skull, and takes control of the target's body. While inside a creature, the intellect devourer has total cover against attacks and other effects originating outside its host. The intellect devourer retains its Intelligence, Wisdom, and Charisma scores, as well as its understanding of Deep Speech, its telepathy, and its traits. It otherwise adopts the target's statistics. It knows everything the creature knew, including spells and languages. If the host body dies, the intellect devourer must leave it. A protection from evil and good spell cast on the body drives the intellect devourer out. The intellect devourer is also forced out if the target regains its devoured brain by means of a wish. By spending 5 feet of its movement, the intellect devourer can voluntarily leave the body, teleporting to the nearest unoccupied space within 5 feet of it. The body then dies, unless its brain is restored within 1 round."
            }
        ]
    },
    "nothic": {
        name: "Nothic",
        size: "Medium",
        type: "Aberration",
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 45,
        hitDice: "6d8+18",
        speed: { walk: 30 },
        abilities: { str: 14, dex: 16, con: 16, int: 13, wis: 10, cha: 8 },
        skills: { arcana: 3, insight: 4, perception: 2, stealth: 5 },
        senses: ["truesight 120 ft.", "passive Perception 12"],
        languages: ["Undercommon"],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Keen Sight",
                description: "The nothic has advantage on Wisdom (Perception) checks that rely on sight."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The nothic makes two claw attacks."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage."
            },
            {
                name: "Rotting Gaze",
                description: "The nothic targets one creature it can see within 30 feet of it. The target must succeed on a DC 12 Constitution saving throw against this magic or take 10 (3d6) necrotic damage."
            },
            {
                name: "Weird Insight",
                description: "The nothic targets one creature it can see within 30 feet of it. The target must contest its Charisma (Deception) check against the nothic's Wisdom (Insight) check. If the nothic wins, it magically learns one fact or secret about the target. The target automatically wins if it is immune to being charmed."
            }
        ]
    },
    "otyugh": {
        name: "Otyugh",
        size: "Large",
        type: "Aberration",
        alignment: "neutral",
        ac: 14,
        acType: "natural armor",
        hp: 114,
        hitDice: "12d10+48",
        speed: { walk: 30 },
        abilities: { str: 16, dex: 11, con: 19, int: 6, wis: 13, cha: 6 },
        savingThrows: { con: 7 },
        senses: ["darkvision 120 ft.", "passive Perception 11"],
        languages: ["Otyugh"],
        cr: "5",
        xp: 1800,
        traits: [
            {
                name: "Limited Telepathy",
                description: "The otyugh can magically transmit simple messages and images to any creature within 120 feet of it that can understand a language. This form of telepathy doesn't allow the receiving creature to telepathically respond."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The otyugh makes three attacks: one with its bite and two with its tentacles."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d8 + 3) piercing damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the target must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. The disease is cured on a success. The target dies if the disease reduces its hit point maximum to 0. This reduction to the target's hit point maximum lasts until the disease is cured."
            },
            {
                name: "Tentacle",
                description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage plus 4 (1d8) piercing damage. If the target is Medium or smaller, it is grappled (escape DC 13) and restrained until the grapple ends. The otyugh has two tentacles, each of which can grapple one target."
            },
            {
                name: "Tentacle Slam",
                description: "The otyugh slams creatures grappled by it into each other or a solid surface. Each creature must succeed on a DC 14 Constitution saving throw or take 10 (2d6 + 3) bludgeoning damage and be stunned until the end of the otyugh's next turn. On a successful save, the target takes half the bludgeoning damage and isn't stunned."
            }
        ]
    },
    "spectator": {
        name: "Spectator",
        size: "Medium",
        type: "Aberration",
        alignment: "lawful neutral",
        ac: 14,
        acType: "natural armor",
        hp: 39,
        hitDice: "6d8+12",
        speed: { walk: 0, fly: 30, hover: true },
        abilities: { str: 8, dex: 14, con: 14, int: 13, wis: 14, cha: 11 },
        skills: { perception: 6 },
        conditionImmunities: ["prone"],
        senses: ["darkvision 120 ft.", "passive Perception 16"],
        languages: ["Deep Speech", "Undercommon", "telepathy 120 ft."],
        cr: "3",
        xp: 700,
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6 - 1) piercing damage."
            },
            {
                name: "Eye Rays",
                description: "The spectator shoots up to two of the following magical eye rays at one or two creatures it can see within 90 feet of it. It can use each ray only once on a turn. 1. Confusion Ray. The target must succeed on a DC 13 Wisdom saving throw, or it can't take reactions until the end of its next turn. On its turn, the target can't move, and it uses its action to make a melee or ranged attack against a randomly determined creature within range. If the target can't attack, it does nothing on its turn. 2. Paralyzing Ray. The target must succeed on a DC 13 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. 3. Fear Ray. The target must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the spectator is visible to the target, ending the effect on itself on a success. 4. Wounding Ray. The target must make a DC 13 Constitution saving throw, taking 16 (3d10) necrotic damage on a failed save, or half as much damage on a successful one."
            },
            {
                name: "Create Food and Water",
                description: "The spectator magically creates enough food and water to sustain itself for 24 hours."
            }
        ],
        reactions: [
            {
                name: "Spell Reflection",
                description: "If the spectator makes a successful saving throw against a spell, or a spell attack misses it, the spectator can choose another creature (including the spellcaster) it can see within 30 feet of it. The spell targets the chosen creature instead of the spectator. If the spell forced a saving throw, the chosen creature makes its own save. If the spell was an attack, the attack roll is rerolled against the chosen creature."
            }
        ]
    },
    // Additional Beasts
    "ape": {
        name: "Ape",
        size: "Medium",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        hp: 19,
        hitDice: "3d8+6",
        speed: { walk: 30, climb: 30 },
        abilities: { str: 16, dex: 14, con: 14, int: 6, wis: 12, cha: 7 },
        skills: { athletics: 5, perception: 3 },
        senses: ["passive Perception 13"],
        languages: [],
        cr: "1/2",
        xp: 100,
        traits: [],
        actions: [
            { name: "Multiattack", description: "The ape makes two fist attacks." },
            { name: "Fist", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +5 to hit, range 25/50 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage." }
        ]
    },
    "baboon": {
        name: "Baboon",
        size: "Small",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        hp: 3,
        hitDice: "1d6",
        speed: { walk: 30, climb: 30 },
        abilities: { str: 8, dex: 14, con: 11, int: 4, wis: 12, cha: 6 },
        senses: ["passive Perception 11"],
        languages: [],
        cr: "0",
        xp: 10,
        traits: [
            { name: "Pack Tactics", description: "The baboon has advantage on an attack roll against a creature if at least one of the baboon's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 - 1) piercing damage." }
        ]
    },
    "badger": {
        name: "Badger",
        size: "Tiny",
        type: "Beast",
        alignment: "unaligned",
        ac: 10,
        hp: 3,
        hitDice: "1d4+1",
        speed: { walk: 20, burrow: 5 },
        abilities: { str: 4, dex: 11, con: 12, int: 2, wis: 12, cha: 5 },
        senses: ["darkvision 30 ft.", "passive Perception 11"],
        languages: [],
        cr: "0",
        xp: 10,
        traits: [
            { name: "Keen Smell", description: "The badger has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 piercing damage." }
        ]
    },
    "bat": {
        name: "Bat",
        size: "Tiny",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: 5, fly: 30 },
        abilities: { str: 2, dex: 15, con: 8, int: 2, wis: 12, cha: 4 },
        senses: ["blindsight 60 ft.", "passive Perception 11"],
        languages: [],
        cr: "0",
        xp: 10,
        traits: [
            { name: "Echolocation", description: "The bat can't use its blindsight while deafened." },
            { name: "Keen Hearing", description: "The bat has advantage on Wisdom (Perception) checks that rely on hearing." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +0 to hit, reach 5 ft., one creature. Hit: 1 piercing damage." }
        ]
    },
    "black-bear": {
        name: "Black Bear",
        size: "Medium",
        type: "Beast",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 19,
        hitDice: "3d8+6",
        speed: { walk: 40, climb: 30 },
        abilities: { str: 15, dex: 10, con: 14, int: 2, wis: 12, cha: 7 },
        skills: { perception: 3 },
        senses: ["passive Perception 13"],
        languages: [],
        cr: "1/2",
        xp: 100,
        traits: [
            { name: "Keen Smell", description: "The bear has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The bear makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage." }
        ]
    },
    "blood-hawk": {
        name: "Blood Hawk",
        size: "Small",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        hp: 7,
        hitDice: "2d6",
        speed: { walk: 10, fly: 60 },
        abilities: { str: 6, dex: 14, con: 10, int: 3, wis: 14, cha: 5 },
        skills: { perception: 4 },
        senses: ["passive Perception 14"],
        languages: [],
        cr: "1/8",
        xp: 25,
        traits: [
            { name: "Keen Sight", description: "The hawk has advantage on Wisdom (Perception) checks that rely on sight." },
            { name: "Pack Tactics", description: "The hawk has advantage on an attack roll against a creature if at least one of the hawk's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Beak", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage." }
        ]
    },
    "boar": {
        name: "Boar",
        size: "Medium",
        type: "Beast",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 40 },
        abilities: { str: 13, dex: 11, con: 12, int: 2, wis: 9, cha: 5 },
        senses: ["passive Perception 9"],
        languages: [],
        cr: "1/4",
        xp: 50,
        traits: [
            { name: "Charge", description: "If the boar moves at least 20 feet straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 3 (1d6) slashing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone." },
            { name: "Relentless (Recharges after a Short or Long Rest)", description: "If the boar takes 7 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead." }
        ],
        actions: [
            { name: "Tusk", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage." }
        ]
    },
    "camel": {
        name: "Camel",
        size: "Large",
        type: "Beast",
        alignment: "unaligned",
        ac: 9,
        hp: 15,
        hitDice: "2d10+4",
        speed: { walk: 50 },
        abilities: { str: 16, dex: 8, con: 14, int: 2, wis: 8, cha: 5 },
        senses: ["passive Perception 9"],
        languages: [],
        cr: "1/8",
        xp: 25,
        traits: [],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage." }
        ]
    },
    "cat": {
        name: "Cat",
        size: "Tiny",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        hp: 2,
        hitDice: "1d4",
        speed: { walk: 40, climb: 30 },
        abilities: { str: 3, dex: 15, con: 10, int: 3, wis: 12, cha: 7 },
        skills: { perception: 3, stealth: 4 },
        senses: ["passive Perception 13"],
        languages: [],
        cr: "0",
        xp: 10,
        traits: [
            { name: "Keen Smell", description: "The cat has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 slashing damage." }
        ]
    },
    "constrictor-snake": {
        name: "Constrictor Snake",
        size: "Large",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        hp: 13,
        hitDice: "2d10+2",
        speed: { walk: 30, swim: 30 },
        abilities: { str: 15, dex: 14, con: 12, int: 1, wis: 10, cha: 3 },
        senses: ["blindsight 10 ft.", "passive Perception 10"],
        languages: [],
        cr: "1/4",
        xp: 50,
        traits: [],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage." },
            { name: "Constrict", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 14). Until this grapple ends, the creature is restrained, and the snake can't constrict another target." }
        ]
    },
    "crab": {
        name: "Crab",
        size: "Tiny",
        type: "Beast",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 2,
        hitDice: "1d4",
        speed: { walk: 20, swim: 20 },
        abilities: { str: 2, dex: 11, con: 10, int: 1, wis: 8, cha: 2 },
        skills: { stealth: 2 },
        senses: ["blindsight 30 ft.", "passive Perception 9"],
        languages: [],
        cr: "0",
        xp: 10,
        traits: [
            { name: "Amphibious", description: "The crab can breathe air and water." }
        ],
        actions: [
            { name: "Claw", description: "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 bludgeoning damage." }
        ]
    },
    "crocodile": {
        name: "Crocodile",
        size: "Large",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 19,
        hitDice: "3d10+3",
        speed: { walk: 20, swim: 30 },
        abilities: { str: 15, dex: 10, con: 13, int: 2, wis: 10, cha: 5 },
        skills: { stealth: 2 },
        senses: ["passive Perception 10"],
        languages: [],
        cr: "1/2",
        xp: 100,
        traits: [
            { name: "Hold Breath", description: "The crocodile can hold its breath for 15 minutes." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the crocodile can't bite another target." }
        ]
    },
    "deer": {
        name: "Deer",
        size: "Medium",
        type: "Beast",
        alignment: "unaligned",
        ac: 13,
        hp: 4,
        hitDice: "1d8",
        speed: { walk: 50 },
        abilities: { str: 11, dex: 16, con: 11, int: 2, wis: 14, cha: 5 },
        senses: ["passive Perception 12"],
        languages: [],
        cr: "0",
        xp: 10,
        traits: [],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) piercing damage." }
        ]
    },
    "draft-horse": {
        name: "Draft Horse",
        size: "Large",
        type: "Beast",
        alignment: "unaligned",
        ac: 10,
        hp: 19,
        hitDice: "3d10+3",
        speed: { walk: 40 },
        abilities: { str: 18, dex: 10, con: 12, int: 2, wis: 11, cha: 7 },
        senses: ["passive Perception 10"],
        languages: [],
        cr: "1/4",
        xp: 50,
        traits: [],
        actions: [
            { name: "Hooves", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) bludgeoning damage." }
        ]
    },
    "eagle": {
        name: "Eagle",
        size: "Small",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        hp: 3,
        hitDice: "1d6",
        speed: { walk: 10, fly: 60 },
        abilities: { str: 6, dex: 15, con: 10, int: 2, wis: 14, cha: 7 },
        skills: { perception: 4 },
        senses: ["passive Perception 14"],
        languages: [],
        cr: "0",
        xp: 10,
        traits: [
            { name: "Keen Sight", description: "The eagle has advantage on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Talons", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage." }
        ]
    },
    "elephant": {
        name: "Elephant",
        size: "Huge",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 76,
        hitDice: "8d12+24",
        speed: { walk: 40 },
        abilities: { str: 22, dex: 9, con: 17, int: 3, wis: 11, cha: 6 },
        senses: ["passive Perception 10"],
        languages: [],
        cr: "4",
        xp: 1100,
        traits: [
            { name: "Trampling Charge", description: "If the elephant moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the elephant can make one stomp attack against it as a bonus action." }
        ],
        actions: [
            { name: "Gore", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 19 (3d8 + 6) piercing damage." },
            { name: "Stomp", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one prone creature. Hit: 22 (3d10 + 6) bludgeoning damage." }
        ]
    },
    "elk": {
        name: "Elk",
        size: "Large",
        type: "Beast",
        alignment: "unaligned",
        ac: 10,
        hp: 13,
        hitDice: "2d10+2",
        speed: { walk: 50 },
        abilities: { str: 16, dex: 10, con: 12, int: 2, wis: 10, cha: 6 },
        senses: ["passive Perception 10"],
        languages: [],
        cr: "1/4",
        xp: 50,
        traits: [
            { name: "Charge", description: "If the elk moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone." }
        ],
        actions: [
            { name: "Ram", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage." },
            { name: "Hooves", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one prone creature. Hit: 8 (2d4 + 3) bludgeoning damage." }
        ]
    },
    "frog": {
        name: "Frog",
        size: "Tiny",
        type: "Beast",
        alignment: "unaligned",
        ac: 11,
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: 20, swim: 20 },
        abilities: { str: 1, dex: 13, con: 8, int: 1, wis: 8, cha: 3 },
        skills: { perception: 1, stealth: 3 },
        senses: ["darkvision 30 ft.", "passive Perception 11"],
        languages: [],
        cr: "0",
        xp: 0,
        traits: [
            { name: "Amphibious", description: "The frog can breathe air and water." },
            { name: "Standing Leap", description: "The frog's long jump is up to 10 feet and its high jump is up to 5 feet, with or without a running start." }
        ],
        actions: []
    },
    "giant-ape": {
        name: "Giant Ape",
        size: "Huge",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        hp: 157,
        hitDice: "15d12+60",
        speed: { walk: 40, climb: 40 },
        abilities: { str: 23, dex: 14, con: 18, int: 7, wis: 12, cha: 7 },
        skills: { athletics: 9, perception: 4 },
        senses: ["passive Perception 14"],
        languages: [],
        cr: "7",
        xp: 2900,
        traits: [],
        actions: [
            { name: "Multiattack", description: "The ape makes two fist attacks." },
            { name: "Fist", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22 (3d10 + 6) bludgeoning damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +9 to hit, range 50/100 ft., one target. Hit: 30 (7d6 + 6) bludgeoning damage." }
        ]
    },
    "giant-badger": {
        name: "Giant Badger",
        size: "Medium",
        type: "Beast",
        alignment: "unaligned",
        ac: 10,
        hp: 13,
        hitDice: "2d8+4",
        speed: { walk: 30, burrow: 10 },
        abilities: { str: 13, dex: 10, con: 15, int: 2, wis: 12, cha: 5 },
        senses: ["darkvision 30 ft.", "passive Perception 11"],
        languages: [],
        cr: "1/4",
        xp: 50,
        traits: [
            { name: "Keen Smell", description: "The badger has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The badger makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) slashing damage." }
        ]
    },
    "giant-bat": {
        name: "Giant Bat",
        size: "Large",
        type: "Beast",
        alignment: "unaligned",
        ac: 13,
        hp: 22,
        hitDice: "4d10",
        speed: { walk: 10, fly: 60 },
        abilities: { str: 15, dex: 16, con: 11, int: 2, wis: 12, cha: 6 },
        senses: ["blindsight 60 ft.", "passive Perception 11"],
        languages: [],
        cr: "1/4",
        xp: 50,
        traits: [
            { name: "Echolocation", description: "The bat can't use its blindsight while deafened." },
            { name: "Keen Hearing", description: "The bat has advantage on Wisdom (Perception) checks that rely on hearing." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage." }
        ]
    },
    "giant-boar": {
        name: "Giant Boar",
        size: "Large",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 42,
        hitDice: "5d10+15",
        speed: { walk: 40 },
        abilities: { str: 17, dex: 10, con: 16, int: 2, wis: 7, cha: 5 },
        senses: ["passive Perception 8"],
        languages: [],
        cr: "2",
        xp: 450,
        traits: [
            { name: "Charge", description: "If the boar moves at least 20 feet straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 7 (2d6) slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone." },
            { name: "Relentless (Recharges after a Short or Long Rest)", description: "If the boar takes 10 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead." }
        ],
        actions: [
            { name: "Tusk", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage." }
        ]
    },
    "giant-centipede": {
        name: "Giant Centipede",
        size: "Small",
        type: "Beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 4,
        hitDice: "1d6+1",
        speed: { walk: 30, climb: 30 },
        abilities: { str: 5, dex: 14, con: 12, int: 1, wis: 7, cha: 3 },
        senses: ["blindsight 30 ft.", "passive Perception 8"],
        languages: [],
        cr: "1/4",
        xp: 50,
        traits: [],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or take 10 (3d6) poison damage. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way." }
        ]
    },
    "giant-constrictor-snake": {
        name: "Giant Constrictor Snake",
        size: "Huge",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        hp: 60,
        hitDice: "8d12+8",
        speed: { walk: 30, swim: 30 },
        abilities: { str: 19, dex: 14, con: 12, int: 1, wis: 10, cha: 3 },
        skills: { perception: 2 },
        senses: ["blindsight 10 ft.", "passive Perception 12"],
        languages: [],
        cr: "2",
        xp: 450,
        traits: [],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 11 (2d6 + 4) piercing damage." },
            { name: "Constrict", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 13 (2d8 + 4) bludgeoning damage, and the target is grappled (escape DC 16). Until this grapple ends, the creature is restrained, and the snake can't constrict another target." }
        ]
    },
    "giant-crab": {
        name: "Giant Crab",
        size: "Medium",
        type: "Beast",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 13,
        hitDice: "3d8",
        speed: { walk: 30, swim: 30 },
        abilities: { str: 13, dex: 15, con: 11, int: 1, wis: 9, cha: 3 },
        skills: { stealth: 4 },
        senses: ["blindsight 30 ft.", "passive Perception 9"],
        languages: [],
        cr: "1/8",
        xp: 25,
        traits: [
            { name: "Amphibious", description: "The crab can breathe air and water." }
        ],
        actions: [
            { name: "Claw", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage, and the target is grappled (escape DC 11). The crab has two claws, each of which can grapple only one target." }
        ]
    },
    "giant-crocodile": {
        name: "Giant Crocodile",
        size: "Huge",
        type: "Beast",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 85,
        hitDice: "9d12+27",
        speed: { walk: 30, swim: 50 },
        abilities: { str: 21, dex: 9, con: 17, int: 2, wis: 10, cha: 7 },
        skills: { stealth: 5 },
        senses: ["passive Perception 10"],
        languages: [],
        cr: "5",
        xp: 1800,
        traits: [
            { name: "Hold Breath", description: "The crocodile can hold its breath for 30 minutes." }
        ],
        actions: [
            { name: "Multiattack", description: "The crocodile makes two attacks: one with its bite and one with its tail." },
            { name: "Bite", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 21 (3d10 + 5) piercing damage, and the target is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the crocodile can't bite another target." },
            { name: "Tail", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target not grappled by the crocodile. Hit: 14 (2d8 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked prone." }
        ]
    },
    "giant-eagle": {
        name: "Giant Eagle",
        size: "Large",
        type: "Beast",
        alignment: "neutral good",
        ac: 13,
        hp: 26,
        hitDice: "4d10+4",
        speed: { walk: 10, fly: 80 },
        abilities: { str: 16, dex: 17, con: 13, int: 8, wis: 14, cha: 10 },
        skills: { perception: 4 },
        senses: ["passive Perception 14"],
        languages: ["Giant Eagle", "understands Common and Auran but can't speak them"],
        cr: "1",
        xp: 200,
        traits: [
            { name: "Keen Sight", description: "The eagle has advantage on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The eagle makes two attacks: one with its beak and one with its talons." },
            { name: "Beak", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage." },
            { name: "Talons", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage." }
        ]
    },
    "giant-elk": {
        name: "Giant Elk",
        size: "Huge",
        type: "Beast",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 42,
        hitDice: "5d12+10",
        speed: { walk: 60 },
        abilities: { str: 19, dex: 16, con: 14, int: 7, wis: 14, cha: 10 },
        skills: { perception: 4 },
        senses: ["passive Perception 14"],
        languages: ["Giant Elk", "understands Common, Elvish, and Sylvan but can't speak them"],
        cr: "2",
        xp: 450,
        traits: [
            { name: "Charge", description: "If the elk moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone." }
        ],
        actions: [
            { name: "Ram", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage." },
            { name: "Hooves", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one prone creature. Hit: 22 (4d8 + 4) bludgeoning damage." }
        ]
    },
    "giant-fire-beetle": {
        name: "Giant Fire Beetle",
        size: "Small",
        type: "Beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 4,
        hitDice: "1d6+1",
        speed: { walk: 30 },
        abilities: { str: 8, dex: 10, con: 12, int: 1, wis: 7, cha: 3 },
        senses: ["blindsight 30 ft.", "passive Perception 8"],
        languages: [],
        cr: "0",
        xp: 10,
        traits: [
            { name: "Illumination", description: "The beetle sheds bright light in a 10-foot radius and dim light for an additional 10 feet." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6 - 1) slashing damage." }
        ]
    },
    "giant-frog": {
        name: "Giant Frog",
        size: "Medium",
        type: "Beast",
        alignment: "unaligned",
        ac: 11,
        hp: 18,
        hitDice: "4d8",
        speed: { walk: 30, swim: 30 },
        abilities: { str: 12, dex: 13, con: 11, int: 2, wis: 10, cha: 3 },
        skills: { perception: 2, stealth: 3 },
        senses: ["darkvision 30 ft.", "passive Perception 12"],
        languages: [],
        cr: "1/4",
        xp: 50,
        traits: [
            { name: "Amphibious", description: "The frog can breathe air and water." },
            { name: "Standing Leap", description: "The frog's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage, and the target is grappled (escape DC 11). Until this grapple ends, the target is restrained, and the frog can't bite another target." },
            { name: "Swallow", description: "The frog makes one bite attack against a Small or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the frog, and it takes 5 (2d4) acid damage at the start of each of the frog's turns. The frog can have only one target swallowed at a time. If the frog dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone." }
        ]
    },
    "giant-goat": {
        name: "Giant Goat",
        size: "Large",
        type: "Beast",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 19,
        hitDice: "3d10+3",
        speed: { walk: 40 },
        abilities: { str: 17, dex: 11, con: 12, int: 3, wis: 12, cha: 6 },
        senses: ["passive Perception 11"],
        languages: [],
        cr: "1/2",
        xp: 100,
        traits: [
            { name: "Charge", description: "If the goat moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 5 (2d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone." },
            { name: "Sure-Footed", description: "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone." }
        ],
        actions: [
            { name: "Ram", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) bludgeoning damage." }
        ]
    },
    "giant-hyena": {
        name: "Giant Hyena",
        size: "Large",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        hp: 45,
        hitDice: "6d10+12",
        speed: { walk: 50 },
        abilities: { str: 16, dex: 14, con: 14, int: 2, wis: 12, cha: 7 },
        skills: { perception: 3 },
        senses: ["passive Perception 13"],
        languages: [],
        cr: "1",
        xp: 200,
        traits: [
            { name: "Rampage", description: "When the hyena reduces a creature to 0 hit points with a melee attack on its turn, the hyena can take a bonus action to move up to half its speed and make a bite attack." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage." }
        ]
    },
    "giant-lizard": {
        name: "Giant Lizard",
        size: "Large",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 19,
        hitDice: "3d10+3",
        speed: { walk: 30, climb: 30 },
        abilities: { str: 15, dex: 12, con: 13, int: 2, wis: 10, cha: 5 },
        senses: ["darkvision 30 ft.", "passive Perception 10"],
        languages: [],
        cr: "1/4",
        xp: 50,
        traits: [],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage." }
        ]
    },
    "giant-octopus": {
        name: "Giant Octopus",
        size: "Large",
        type: "Beast",
        alignment: "unaligned",
        ac: 11,
        hp: 52,
        hitDice: "8d10+8",
        speed: { walk: 10, swim: 60 },
        abilities: { str: 17, dex: 13, con: 13, int: 4, wis: 10, cha: 4 },
        skills: { perception: 4, stealth: 5 },
        senses: ["darkvision 60 ft.", "passive Perception 14"],
        languages: [],
        cr: "1",
        xp: 200,
        traits: [
            { name: "Hold Breath", description: "While out of water, the octopus can hold its breath for 1 hour." },
            { name: "Underwater Camouflage", description: "The octopus has advantage on Dexterity (Stealth) checks made while underwater." },
            { name: "Water Breathing", description: "The octopus can breathe only underwater." }
        ],
        actions: [
            { name: "Tentacles", description: "Melee Weapon Attack: +5 to hit, reach 15 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage. If the target is a creature, it is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the octopus can't use its tentacles on another target." },
            { name: "Ink Cloud (Recharges after a Short or Long Rest)", description: "A 20-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action." }
        ]
    },
    "giant-owl": {
        name: "Giant Owl",
        size: "Large",
        type: "Beast",
        alignment: "neutral",
        ac: 12,
        hp: 19,
        hitDice: "3d10+3",
        speed: { walk: 5, fly: 60 },
        abilities: { str: 13, dex: 15, con: 12, int: 8, wis: 13, cha: 10 },
        skills: { perception: 5, stealth: 4 },
        senses: ["darkvision 120 ft.", "passive Perception 15"],
        languages: ["Giant Owl", "understands Common, Elvish, and Sylvan but can't speak them"],
        cr: "1/4",
        xp: 50,
        traits: [
            { name: "Flyby", description: "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach." },
            { name: "Keen Hearing and Sight", description: "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight." }
        ],
        actions: [
            { name: "Talons", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (2d6 + 1) slashing damage." }
        ]
    },
    "giant-poisonous-snake": {
        name: "Giant Poisonous Snake",
        size: "Medium",
        type: "Beast",
        alignment: "unaligned",
        ac: 14,
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 30, swim: 30 },
        abilities: { str: 10, dex: 18, con: 13, int: 2, wis: 10, cha: 3 },
        skills: { perception: 2 },
        senses: ["blindsight 10 ft.", "passive Perception 12"],
        languages: [],
        cr: "1/4",
        xp: 50,
        traits: [],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 6 (1d4 + 4) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "giant-scorpion": {
        name: "Giant Scorpion",
        size: "Large",
        type: "Beast",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 52,
        hitDice: "7d10+14",
        speed: { walk: 40 },
        abilities: { str: 15, dex: 13, con: 15, int: 1, wis: 9, cha: 3 },
        senses: ["blindsight 60 ft.", "passive Perception 9"],
        languages: [],
        cr: "3",
        xp: 700,
        traits: [],
        actions: [
            { name: "Multiattack", description: "The scorpion makes three attacks: two with its claws and one with its sting." },
            { name: "Claw", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 12). The scorpion has two claws, each of which can grapple only one target." },
            { name: "Sting", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target must make a DC 12 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "giant-sea-horse": {
        name: "Giant Sea Horse",
        size: "Large",
        type: "Beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 16,
        hitDice: "3d10",
        speed: { walk: 0, swim: 40 },
        abilities: { str: 12, dex: 15, con: 11, int: 2, wis: 12, cha: 5 },
        senses: ["passive Perception 11"],
        languages: [],
        cr: "1/2",
        xp: 100,
        traits: [
            { name: "Charge", description: "If the sea horse moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) bludgeoning damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone." },
            { name: "Water Breathing", description: "The sea horse can breathe only underwater." }
        ],
        actions: [
            { name: "Ram", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage." }
        ]
    },
    "giant-shark": {
        name: "Giant Shark",
        size: "Huge",
        type: "Beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 126,
        hitDice: "11d12+55",
        speed: { walk: 0, swim: 50 },
        abilities: { str: 23, dex: 11, con: 21, int: 1, wis: 10, cha: 5 },
        skills: { perception: 3 },
        senses: ["blindsight 60 ft.", "passive Perception 13"],
        languages: [],
        cr: "5",
        xp: 1800,
        traits: [
            { name: "Blood Frenzy", description: "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points." },
            { name: "Water Breathing", description: "The shark can breathe only underwater." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 22 (3d10 + 6) piercing damage." }
        ]
    },
    "giant-toad": {
        name: "Giant Toad",
        size: "Large",
        type: "Beast",
        alignment: "unaligned",
        ac: 11,
        hp: 39,
        hitDice: "6d10+6",
        speed: { walk: 20, swim: 40 },
        abilities: { str: 15, dex: 13, con: 13, int: 2, wis: 10, cha: 3 },
        senses: ["darkvision 30 ft.", "passive Perception 10"],
        languages: [],
        cr: "1",
        xp: 200,
        traits: [
            { name: "Amphibious", description: "The toad can breathe air and water." },
            { name: "Standing Leap", description: "The toad's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 5 (1d10) poison damage, and the target is grappled (escape DC 13). Until this grapple ends, the target is restrained, and the toad can't bite another target." },
            { name: "Swallow", description: "The toad makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the toad, and it takes 10 (3d6) acid damage at the start of each of the toad's turns. The toad can have only one target swallowed at a time. If the toad dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone." }
        ]
    },
    "giant-vulture": {
        name: "Giant Vulture",
        size: "Large",
        type: "Beast",
        alignment: "neutral evil",
        ac: 10,
        hp: 22,
        hitDice: "3d10+6",
        speed: { walk: 10, fly: 60 },
        abilities: { str: 15, dex: 10, con: 15, int: 6, wis: 12, cha: 7 },
        skills: { perception: 3 },
        senses: ["passive Perception 13"],
        languages: ["understands Common but can't speak"],
        cr: "1",
        xp: 200,
        traits: [
            { name: "Keen Sight and Smell", description: "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell." },
            { name: "Pack Tactics", description: "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Multiattack", description: "The vulture makes two attacks: one with its beak and one with its talons." },
            { name: "Beak", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage." },
            { name: "Talons", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage." }
        ]
    },
    "giant-wasp": {
        name: "Giant Wasp",
        size: "Medium",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        hp: 13,
        hitDice: "3d8",
        speed: { walk: 10, fly: 50 },
        abilities: { str: 10, dex: 14, con: 10, int: 1, wis: 10, cha: 3 },
        senses: ["passive Perception 10"],
        languages: [],
        cr: "1/2",
        xp: 100,
        traits: [],
        actions: [
            { name: "Sting", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way." }
        ]
    },
    "giant-weasel": {
        name: "Giant Weasel",
        size: "Medium",
        type: "Beast",
        alignment: "unaligned",
        ac: 13,
        hp: 9,
        hitDice: "2d8",
        speed: { walk: 40 },
        abilities: { str: 11, dex: 16, con: 10, int: 4, wis: 12, cha: 5 },
        skills: { perception: 3, stealth: 5 },
        senses: ["darkvision 60 ft.", "passive Perception 13"],
        languages: [],
        cr: "1/8",
        xp: 25,
        traits: [
            { name: "Keen Hearing and Smell", description: "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage." }
        ]
    },
    "goat": {
        name: "Goat",
        size: "Medium",
        type: "Beast",
        alignment: "unaligned",
        ac: 10,
        hp: 4,
        hitDice: "1d8",
        speed: { walk: 40 },
        abilities: { str: 12, dex: 10, con: 11, int: 2, wis: 10, cha: 5 },
        senses: ["passive Perception 10"],
        languages: [],
        cr: "0",
        xp: 10,
        traits: [
            { name: "Charge", description: "If the goat moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 2 (1d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 10 Strength saving throw or be knocked prone." },
            { name: "Sure-Footed", description: "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone." }
        ],
        actions: [
            { name: "Ram", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning damage." }
        ]
    },
    "hawk": {
        name: "Hawk",
        size: "Tiny",
        type: "Beast",
        alignment: "unaligned",
        ac: 13,
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: 10, fly: 60 },
        abilities: { str: 5, dex: 16, con: 8, int: 2, wis: 14, cha: 6 },
        skills: { perception: 4 },
        senses: ["passive Perception 14"],
        languages: [],
        cr: "0",
        xp: 10,
        traits: [
            { name: "Keen Sight", description: "The hawk has advantage on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Talons", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 slashing damage." }
        ]
    },
    "hunter-shark": {
        name: "Hunter Shark",
        size: "Large",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 45,
        hitDice: "6d10+12",
        speed: { walk: 0, swim: 40 },
        abilities: { str: 18, dex: 13, con: 15, int: 1, wis: 10, cha: 4 },
        skills: { perception: 2 },
        senses: ["blindsight 30 ft.", "passive Perception 12"],
        languages: [],
        cr: "2",
        xp: 450,
        traits: [
            { name: "Blood Frenzy", description: "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points." },
            { name: "Water Breathing", description: "The shark can breathe only underwater." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage." }
        ]
    },
    "hyena": {
        name: "Hyena",
        size: "Medium",
        type: "Beast",
        alignment: "unaligned",
        ac: 11,
        hp: 5,
        hitDice: "1d8+1",
        speed: { walk: 50 },
        abilities: { str: 11, dex: 13, con: 12, int: 2, wis: 12, cha: 5 },
        skills: { perception: 3 },
        senses: ["passive Perception 13"],
        languages: [],
        cr: "0",
        xp: 10,
        traits: [
            { name: "Pack Tactics", description: "The hyena has advantage on an attack roll against a creature if at least one of the hyena's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage." }
        ]
    },
    "jackal": {
        name: "Jackal",
        size: "Small",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        hp: 3,
        hitDice: "1d6",
        speed: { walk: 40 },
        abilities: { str: 8, dex: 15, con: 11, int: 3, wis: 12, cha: 6 },
        skills: { perception: 3 },
        senses: ["passive Perception 13"],
        languages: [],
        cr: "0",
        xp: 10,
        traits: [
            { name: "Keen Hearing and Smell", description: "The jackal has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Pack Tactics", description: "The jackal has advantage on an attack roll against a creature if at least one of the jackal's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 - 1) piercing damage." }
        ]
    },
    "killer-whale": {
        name: "Killer Whale",
        size: "Huge",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 90,
        hitDice: "12d12+12",
        speed: { walk: 0, swim: 60 },
        abilities: { str: 19, dex: 10, con: 13, int: 3, wis: 12, cha: 7 },
        skills: { perception: 3 },
        senses: ["blindsight 120 ft.", "passive Perception 13"],
        languages: [],
        cr: "3",
        xp: 700,
        traits: [
            { name: "Echolocation", description: "The whale can't use its blindsight while deafened." },
            { name: "Hold Breath", description: "The whale can hold its breath for 30 minutes." },
            { name: "Keen Hearing", description: "The whale has advantage on Wisdom (Perception) checks that rely on hearing." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 21 (5d6 + 4) piercing damage." }
        ]
    },
    "lion": {
        name: "Lion",
        size: "Large",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        hp: 26,
        hitDice: "4d10+4",
        speed: { walk: 50 },
        abilities: { str: 17, dex: 15, con: 13, int: 3, wis: 12, cha: 8 },
        skills: { perception: 3, stealth: 6 },
        senses: ["passive Perception 13"],
        languages: [],
        cr: "1",
        xp: 200,
        traits: [
            { name: "Keen Smell", description: "The lion has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Pack Tactics", description: "The lion has advantage on an attack roll against a creature if at least one of the lion's allies is within 5 feet of the creature and the ally isn't incapacitated." },
            { name: "Pounce", description: "If the lion moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the lion can make one bite attack against it as a bonus action." },
            { name: "Running Leap", description: "With a 10-foot running start, the lion can long jump up to 25 feet." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage." }
        ]
    },
    "lizard": {
        name: "Lizard",
        size: "Tiny",
        type: "Beast",
        alignment: "unaligned",
        ac: 10,
        hp: 2,
        hitDice: "1d4",
        speed: { walk: 20, climb: 20 },
        abilities: { str: 2, dex: 11, con: 10, int: 1, wis: 8, cha: 3 },
        senses: ["darkvision 30 ft.", "passive Perception 9"],
        languages: [],
        cr: "0",
        xp: 10,
        traits: [],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage." }
        ]
    },
    "mammoth": {
        name: "Mammoth",
        size: "Huge",
        type: "Beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 126,
        hitDice: "11d12+55",
        speed: { walk: 40 },
        abilities: { str: 24, dex: 9, con: 21, int: 3, wis: 11, cha: 6 },
        senses: ["passive Perception 10"],
        languages: [],
        cr: "6",
        xp: 2300,
        traits: [
            { name: "Trampling Charge", description: "If the mammoth moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 18 Strength saving throw or be knocked prone. If the target is prone, the mammoth can make one stomp attack against it as a bonus action." }
        ],
        actions: [
            { name: "Gore", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 25 (4d8 + 7) piercing damage." },
            { name: "Stomp", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one prone creature. Hit: 29 (4d10 + 7) bludgeoning damage." }
        ]
    },
    "mastiff": {
        name: "Mastiff",
        size: "Medium",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        hp: 5,
        hitDice: "1d8+1",
        speed: { walk: 40 },
        abilities: { str: 13, dex: 14, con: 12, int: 3, wis: 12, cha: 7 },
        skills: { perception: 3 },
        senses: ["passive Perception 13"],
        languages: [],
        cr: "1/8",
        xp: 25,
        traits: [
            { name: "Keen Hearing and Smell", description: "The mastiff has advantage on Wisdom (Perception) checks that rely on hearing or smell." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone." }
        ]
    },
    "mule": {
        name: "Mule",
        size: "Medium",
        type: "Beast",
        alignment: "unaligned",
        ac: 10,
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 40 },
        abilities: { str: 14, dex: 10, con: 13, int: 2, wis: 10, cha: 5 },
        senses: ["passive Perception 10"],
        languages: [],
        cr: "1/8",
        xp: 25,
        traits: [
            { name: "Beast of Burden", description: "The mule is considered to be a Large animal for the purpose of determining its carrying capacity." },
            { name: "Sure-Footed", description: "The mule has advantage on Strength and Dexterity saving throws made against effects that would knock it prone." }
        ],
        actions: [
            { name: "Hooves", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage." }
        ]
    },
    "octopus": {
        name: "Octopus",
        size: "Small",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        hp: 3,
        hitDice: "1d6",
        speed: { walk: 5, swim: 30 },
        abilities: { str: 4, dex: 15, con: 11, int: 3, wis: 10, cha: 4 },
        skills: { perception: 2, stealth: 4 },
        senses: ["darkvision 30 ft.", "passive Perception 12"],
        languages: [],
        cr: "0",
        xp: 10,
        traits: [
            { name: "Hold Breath", description: "While out of water, the octopus can hold its breath for 30 minutes." },
            { name: "Underwater Camouflage", description: "The octopus has advantage on Dexterity (Stealth) checks made while underwater." },
            { name: "Water Breathing", description: "The octopus can breathe only underwater." }
        ],
        actions: [
            { name: "Tentacles", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 bludgeoning damage, and the target is grappled (escape DC 10). Until this grapple ends, the octopus can't use its tentacles on another target." },
            { name: "Ink Cloud (Recharges after a Short or Long Rest)", description: "A 5-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action." }
        ]
    },
    "owl": {
        name: "Owl",
        size: "Tiny",
        type: "Beast",
        alignment: "unaligned",
        ac: 11,
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: 5, fly: 60 },
        abilities: { str: 3, dex: 13, con: 8, int: 2, wis: 12, cha: 7 },
        skills: { perception: 3, stealth: 3 },
        senses: ["darkvision 120 ft.", "passive Perception 13"],
        languages: [],
        cr: "0",
        xp: 10,
        traits: [
            { name: "Flyby", description: "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach." },
            { name: "Keen Hearing and Sight", description: "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight." }
        ],
        actions: [
            { name: "Talons", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 1 slashing damage." }
        ]
    },
    "panther": {
        name: "Panther",
        size: "Medium",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        hp: 13,
        hitDice: "3d8",
        speed: { walk: 50, climb: 40 },
        abilities: { str: 14, dex: 15, con: 10, int: 3, wis: 14, cha: 7 },
        skills: { perception: 4, stealth: 6 },
        senses: ["passive Perception 14"],
        languages: [],
        cr: "1/4",
        xp: 50,
        traits: [
            { name: "Keen Smell", description: "The panther has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Pounce", description: "If the panther moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the panther can make one bite attack against it as a bonus action." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage." }
        ]
    },
    "pony": {
        name: "Pony",
        size: "Medium",
        type: "Beast",
        alignment: "unaligned",
        ac: 10,
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 40 },
        abilities: { str: 15, dex: 10, con: 13, int: 2, wis: 11, cha: 7 },
        senses: ["passive Perception 10"],
        languages: [],
        cr: "1/8",
        xp: 25,
        traits: [],
        actions: [
            { name: "Hooves", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) bludgeoning damage." }
        ]
    },
    "poisonous-snake": {
        name: "Poisonous Snake",
        size: "Tiny",
        type: "Beast",
        alignment: "unaligned",
        ac: 13,
        hp: 2,
        hitDice: "1d4",
        speed: { walk: 30, swim: 30 },
        abilities: { str: 2, dex: 16, con: 11, int: 1, wis: 10, cha: 3 },
        senses: ["blindsight 10 ft.", "passive Perception 10"],
        languages: [],
        cr: "1/8",
        xp: 25,
        traits: [],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage, and the target must make a DC 10 Constitution saving throw, taking 5 (2d4) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "polar-bear": {
        name: "Polar Bear",
        size: "Large",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 42,
        hitDice: "5d10+15",
        speed: { walk: 40, swim: 30 },
        abilities: { str: 20, dex: 10, con: 16, int: 2, wis: 13, cha: 7 },
        skills: { perception: 3 },
        senses: ["passive Perception 13"],
        languages: [],
        cr: "2",
        xp: 450,
        traits: [
            { name: "Keen Smell", description: "The bear has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The bear makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage." }
        ]
    },
    "quipper": {
        name: "Quipper",
        size: "Tiny",
        type: "Beast",
        alignment: "unaligned",
        ac: 13,
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: 0, swim: 40 },
        abilities: { str: 2, dex: 16, con: 9, int: 1, wis: 7, cha: 2 },
        senses: ["darkvision 60 ft.", "passive Perception 8"],
        languages: [],
        cr: "0",
        xp: 10,
        traits: [
            { name: "Blood Frenzy", description: "The quipper has advantage on melee attack rolls against any creature that doesn't have all its hit points." },
            { name: "Water Breathing", description: "The quipper can breathe only underwater." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage." }
        ]
    },
    "rat": {
        name: "Rat",
        size: "Tiny",
        type: "Beast",
        alignment: "unaligned",
        ac: 10,
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: 20 },
        abilities: { str: 2, dex: 11, con: 9, int: 2, wis: 10, cha: 4 },
        senses: ["darkvision 30 ft.", "passive Perception 10"],
        languages: [],
        cr: "0",
        xp: 10,
        traits: [
            { name: "Keen Smell", description: "The rat has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage." }
        ]
    },
    "raven": {
        name: "Raven",
        size: "Tiny",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: 10, fly: 50 },
        abilities: { str: 2, dex: 14, con: 8, int: 2, wis: 12, cha: 6 },
        skills: { perception: 3 },
        senses: ["passive Perception 13"],
        languages: [],
        cr: "0",
        xp: 10,
        traits: [
            { name: "Mimicry", description: "The raven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check." }
        ],
        actions: [
            { name: "Beak", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 piercing damage." }
        ]
    },
    "reef-shark": {
        name: "Reef Shark",
        size: "Medium",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 22,
        hitDice: "4d8+4",
        speed: { walk: 0, swim: 40 },
        abilities: { str: 14, dex: 13, con: 13, int: 1, wis: 10, cha: 4 },
        skills: { perception: 2 },
        senses: ["blindsight 30 ft.", "passive Perception 12"],
        languages: [],
        cr: "1/2",
        xp: 100,
        traits: [
            { name: "Pack Tactics", description: "The shark has advantage on an attack roll against a creature if at least one of the shark's allies is within 5 feet of the creature and the ally isn't incapacitated." },
            { name: "Water Breathing", description: "The shark can breathe only underwater." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage." }
        ]
    },
    "rhinoceros": {
        name: "Rhinoceros",
        size: "Large",
        type: "Beast",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 45,
        hitDice: "6d10+12",
        speed: { walk: 40 },
        abilities: { str: 21, dex: 8, con: 15, int: 2, wis: 12, cha: 6 },
        senses: ["passive Perception 11"],
        languages: [],
        cr: "2",
        xp: 450,
        traits: [
            { name: "Charge", description: "If the rhinoceros moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone." }
        ],
        actions: [
            { name: "Gore", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage." }
        ]
    },
    "riding-horse": {
        name: "Riding Horse",
        size: "Large",
        type: "Beast",
        alignment: "unaligned",
        ac: 10,
        hp: 13,
        hitDice: "2d10+2",
        speed: { walk: 60 },
        abilities: { str: 16, dex: 10, con: 12, int: 2, wis: 11, cha: 7 },
        senses: ["passive Perception 10"],
        languages: [],
        cr: "1/4",
        xp: 50,
        traits: [],
        actions: [
            { name: "Hooves", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) bludgeoning damage." }
        ]
    },
    "saber-toothed-tiger": {
        name: "Saber-Toothed Tiger",
        size: "Large",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        hp: 52,
        hitDice: "7d10+14",
        speed: { walk: 40 },
        abilities: { str: 18, dex: 14, con: 15, int: 3, wis: 12, cha: 8 },
        skills: { perception: 3, stealth: 6 },
        senses: ["passive Perception 13"],
        languages: [],
        cr: "2",
        xp: 450,
        traits: [
            { name: "Keen Smell", description: "The tiger has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Pounce", description: "If the tiger moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (1d10 + 5) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage." }
        ]
    },
    "scorpion": {
        name: "Scorpion",
        size: "Tiny",
        type: "Beast",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: 10 },
        abilities: { str: 2, dex: 11, con: 8, int: 1, wis: 8, cha: 2 },
        senses: ["blindsight 10 ft.", "passive Perception 9"],
        languages: [],
        cr: "0",
        xp: 10,
        traits: [],
        actions: [
            { name: "Sting", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must make a DC 9 Constitution saving throw, taking 4 (1d8) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "sea-horse": {
        name: "Sea Horse",
        size: "Tiny",
        type: "Beast",
        alignment: "unaligned",
        ac: 11,
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: 0, swim: 20 },
        abilities: { str: 1, dex: 12, con: 8, int: 1, wis: 10, cha: 2 },
        senses: ["passive Perception 10"],
        languages: [],
        cr: "0",
        xp: 0,
        traits: [
            { name: "Water Breathing", description: "The sea horse can breathe only underwater." }
        ],
        actions: []
    },
    "spider": {
        name: "Spider",
        size: "Tiny",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: 20, climb: 20 },
        abilities: { str: 2, dex: 14, con: 8, int: 1, wis: 10, cha: 2 },
        skills: { stealth: 4 },
        senses: ["darkvision 30 ft.", "passive Perception 10"],
        languages: [],
        cr: "0",
        xp: 10,
        traits: [
            { name: "Spider Climb", description: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Web Sense", description: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web." },
            { name: "Web Walker", description: "The spider ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must succeed on a DC 9 Constitution saving throw or take 2 (1d4) poison damage." }
        ]
    },
    "stirge": {
        name: "Stirge",
        size: "Tiny",
        type: "Beast",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 2,
        hitDice: "1d4",
        speed: { walk: 10, fly: 40 },
        abilities: { str: 4, dex: 16, con: 11, int: 2, wis: 8, cha: 6 },
        senses: ["darkvision 60 ft.", "passive Perception 9"],
        languages: [],
        cr: "1/8",
        xp: 25,
        traits: [],
        actions: [
            { name: "Blood Drain", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4 + 3) piercing damage, and the stirge attaches to the target. While attached, the stirge doesn't attack. Instead, at the start of each of the stirge's turns, the target loses 5 (1d4 + 3) hit points due to blood loss. The stirge can detach itself by spending 5 feet of its movement. It does so after it drains 10 hit points of blood from the target or the target dies. A creature, including the target, can use its action to detach the stirge." }
        ]
    },
    "swarm-of-bats": {
        name: "Swarm of Bats",
        size: "Medium",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 0, fly: 30 },
        abilities: { str: 5, dex: 15, con: 10, int: 2, wis: 12, cha: 4 },
        damageResistances: ["bludgeoning", "piercing", "slashing"],
        conditionImmunities: ["charmed", "frightened", "grappled", "paralyzed", "petrified", "prone", "restrained", "stunned"],
        senses: ["blindsight 60 ft.", "passive Perception 11"],
        languages: [],
        cr: "1/4",
        xp: 50,
        traits: [
            { name: "Echolocation", description: "The swarm can't use its blindsight while deafened." },
            { name: "Keen Hearing", description: "The swarm has advantage on Wisdom (Perception) checks that rely on hearing." },
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny bat. The swarm can't regain hit points or gain temporary hit points." }
        ],
        actions: [
            { name: "Bites", description: "Melee Weapon Attack: +4 to hit, reach 0 ft., one creature in the swarm's space. Hit: 5 (2d4) piercing damage, or 2 (1d4) piercing damage if the swarm has half of its hit points or fewer." }
        ]
    },
    "swarm-of-insects": {
        name: "Swarm of Insects",
        size: "Medium",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 20, climb: 20 },
        abilities: { str: 3, dex: 13, con: 10, int: 1, wis: 7, cha: 1 },
        damageResistances: ["bludgeoning", "piercing", "slashing"],
        conditionImmunities: ["charmed", "frightened", "grappled", "paralyzed", "petrified", "prone", "restrained", "stunned"],
        senses: ["blindsight 10 ft.", "passive Perception 8"],
        languages: [],
        cr: "1/2",
        xp: 100,
        traits: [
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points." }
        ],
        actions: [
            { name: "Bites", description: "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer." }
        ]
    },
    "swarm-of-poisonous-snakes": {
        name: "Swarm of Poisonous Snakes",
        size: "Medium",
        type: "Beast",
        alignment: "unaligned",
        ac: 14,
        hp: 36,
        hitDice: "8d8",
        speed: { walk: 30, swim: 30 },
        abilities: { str: 8, dex: 18, con: 11, int: 1, wis: 10, cha: 3 },
        damageResistances: ["bludgeoning", "piercing", "slashing"],
        conditionImmunities: ["charmed", "frightened", "grappled", "paralyzed", "petrified", "prone", "restrained", "stunned"],
        senses: ["blindsight 10 ft.", "passive Perception 10"],
        languages: [],
        cr: "2",
        xp: 450,
        traits: [
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny snake. The swarm can't regain hit points or gain temporary hit points." }
        ],
        actions: [
            { name: "Bites", description: "Melee Weapon Attack: +6 to hit, reach 0 ft., one creature in the swarm's space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer. The target must make a DC 10 Constitution saving throw, taking 14 (4d6) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "swarm-of-quippers": {
        name: "Swarm of Quippers",
        size: "Medium",
        type: "Beast",
        alignment: "unaligned",
        ac: 13,
        hp: 28,
        hitDice: "8d8-8",
        speed: { walk: 0, swim: 40 },
        abilities: { str: 13, dex: 16, con: 9, int: 1, wis: 7, cha: 2 },
        damageResistances: ["bludgeoning", "piercing", "slashing"],
        conditionImmunities: ["charmed", "frightened", "grappled", "paralyzed", "petrified", "prone", "restrained", "stunned"],
        senses: ["darkvision 60 ft.", "passive Perception 8"],
        languages: [],
        cr: "1",
        xp: 200,
        traits: [
            { name: "Blood Frenzy", description: "The swarm has advantage on melee attack rolls against any creature that doesn't have all its hit points." },
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny quipper. The swarm can't regain hit points or gain temporary hit points." },
            { name: "Water Breathing", description: "The swarm can breathe only underwater." }
        ],
        actions: [
            { name: "Bites", description: "Melee Weapon Attack: +5 to hit, reach 0 ft., one creature in the swarm's space. Hit: 14 (4d6) piercing damage, or 7 (2d6) piercing damage if the swarm has half of its hit points or fewer." }
        ]
    },
    "swarm-of-rats": {
        name: "Swarm of Rats",
        size: "Medium",
        type: "Beast",
        alignment: "unaligned",
        ac: 10,
        hp: 24,
        hitDice: "7d8-7",
        speed: { walk: 30 },
        abilities: { str: 9, dex: 11, con: 9, int: 2, wis: 10, cha: 3 },
        damageResistances: ["bludgeoning", "piercing", "slashing"],
        conditionImmunities: ["charmed", "frightened", "grappled", "paralyzed", "petrified", "prone", "restrained", "stunned"],
        senses: ["darkvision 30 ft.", "passive Perception 10"],
        languages: [],
        cr: "1/4",
        xp: 50,
        traits: [
            { name: "Keen Smell", description: "The swarm has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny rat. The swarm can't regain hit points or gain temporary hit points." }
        ],
        actions: [
            { name: "Bites", description: "Melee Weapon Attack: +2 to hit, reach 0 ft., one target in the swarm's space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer." }
        ]
    },
    "swarm-of-ravens": {
        name: "Swarm of Ravens",
        size: "Medium",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        hp: 24,
        hitDice: "7d8-7",
        speed: { walk: 10, fly: 50 },
        abilities: { str: 6, dex: 14, con: 8, int: 3, wis: 12, cha: 6 },
        skills: { perception: 5 },
        damageResistances: ["bludgeoning", "piercing", "slashing"],
        conditionImmunities: ["charmed", "frightened", "grappled", "paralyzed", "petrified", "prone", "restrained", "stunned"],
        senses: ["passive Perception 15"],
        languages: [],
        cr: "1/4",
        xp: 50,
        traits: [
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny raven. The swarm can't regain hit points or gain temporary hit points." }
        ],
        actions: [
            { name: "Beaks", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target in the swarm's space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer." }
        ]
    },
    "tiger": {
        name: "Tiger",
        size: "Large",
        type: "Beast",
        alignment: "unaligned",
        ac: 12,
        hp: 37,
        hitDice: "5d10+10",
        speed: { walk: 40 },
        abilities: { str: 17, dex: 15, con: 14, int: 3, wis: 12, cha: 8 },
        skills: { perception: 3, stealth: 6 },
        senses: ["darkvision 60 ft.", "passive Perception 13"],
        languages: [],
        cr: "1",
        xp: 200,
        traits: [
            { name: "Keen Smell", description: "The tiger has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Pounce", description: "If the tiger moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage." }
        ]
    },
    "vulture": {
        name: "Vulture",
        size: "Medium",
        type: "Beast",
        alignment: "unaligned",
        ac: 10,
        hp: 5,
        hitDice: "1d8+1",
        speed: { walk: 10, fly: 50 },
        abilities: { str: 7, dex: 10, con: 13, int: 2, wis: 12, cha: 4 },
        skills: { perception: 3 },
        senses: ["passive Perception 13"],
        languages: [],
        cr: "0",
        xp: 10,
        traits: [
            { name: "Keen Sight and Smell", description: "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell." },
            { name: "Pack Tactics", description: "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Beak", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) piercing damage." }
        ]
    },
    "warhorse": {
        name: "Warhorse",
        size: "Large",
        type: "Beast",
        alignment: "unaligned",
        ac: 11,
        hp: 19,
        hitDice: "3d10+3",
        speed: { walk: 60 },
        abilities: { str: 18, dex: 12, con: 13, int: 2, wis: 12, cha: 7 },
        senses: ["passive Perception 11"],
        languages: [],
        cr: "1/2",
        xp: 100,
        traits: [
            { name: "Trampling Charge", description: "If the horse moves at least 20 feet straight toward a creature and then hits it with a hooves attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the horse can make another attack with its hooves against it as a bonus action." }
        ],
        actions: [
            { name: "Hooves", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage." }
        ]
    },
    "weasel": {
        name: "Weasel",
        size: "Tiny",
        type: "Beast",
        alignment: "unaligned",
        ac: 13,
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: 30 },
        abilities: { str: 3, dex: 16, con: 8, int: 2, wis: 12, cha: 3 },
        skills: { perception: 3, stealth: 5 },
        senses: ["passive Perception 13"],
        languages: [],
        cr: "0",
        xp: 10,
        traits: [
            { name: "Keen Hearing and Smell", description: "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage." }
        ]
    },

    // Additional Giants
    "ettin": {
        name: "Ettin",
        size: "Large",
        type: "Giant",
        alignment: "chaotic evil",
        ac: 12,
        acType: "natural armor",
        hp: 85,
        hitDice: "10d10+30",
        speed: { walk: 40 },
        abilities: { str: 21, dex: 8, con: 17, int: 6, wis: 10, cha: 8 },
        skills: { perception: 4 },
        senses: ["darkvision 60 ft.", "passive Perception 14"],
        languages: ["Giant", "Orc"],
        cr: "4",
        xp: 1100,
        traits: [
            {
                name: "Two Heads",
                description: "The ettin has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious."
            },
            {
                name: "Wakeful",
                description: "When one of the ettin's heads is asleep, its other head is awake."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The ettin makes two attacks: one with its battleaxe and one with its morningstar."
            },
            {
                name: "Battleaxe",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage."
            },
            {
                name: "Morningstar",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) piercing damage."
            }
        ]
    },
    "fire-giant": {
        name: "Fire Giant",
        size: "Huge",
        type: "Giant",
        alignment: "lawful evil",
        ac: 18,
        acType: "plate",
        hp: 162,
        hitDice: "13d12+78",
        speed: { walk: 30 },
        abilities: { str: 25, dex: 9, con: 23, int: 10, wis: 14, cha: 13 },
        savingThrows: { dex: 3, con: 10, cha: 5 },
        skills: { athletics: 11, perception: 6 },
        damageImmunities: ["fire"],
        senses: ["passive Perception 16"],
        languages: ["Giant"],
        cr: "9",
        xp: 5000,
        actions: [
            {
                name: "Multiattack",
                description: "The giant makes two greatsword attacks."
            },
            {
                name: "Greatsword",
                description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 28 (6d6 + 7) slashing damage."
            },
            {
                name: "Rock",
                description: "Ranged Weapon Attack: +11 to hit, range 60/240 ft., one target. Hit: 29 (4d10 + 7) bludgeoning damage."
            }
        ]
    },
    "frost-giant": {
        name: "Frost Giant",
        size: "Huge",
        type: "Giant",
        alignment: "neutral evil",
        ac: 15,
        acType: "patchwork armor",
        hp: 138,
        hitDice: "12d12+60",
        speed: { walk: 40 },
        abilities: { str: 23, dex: 9, con: 21, int: 9, wis: 10, cha: 12 },
        savingThrows: { con: 8, wis: 3, cha: 4 },
        skills: { athletics: 9, perception: 3 },
        damageImmunities: ["cold"],
        senses: ["passive Perception 13"],
        languages: ["Giant"],
        cr: "8",
        xp: 3900,
        actions: [
            {
                name: "Multiattack",
                description: "The giant makes two greataxe attacks."
            },
            {
                name: "Greataxe",
                description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 25 (3d12 + 6) slashing damage."
            },
            {
                name: "Rock",
                description: "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 28 (4d10 + 6) bludgeoning damage."
            }
        ]
    },
    "stone-giant": {
        name: "Stone Giant",
        size: "Huge",
        type: "Giant",
        alignment: "neutral",
        ac: 17,
        acType: "natural armor",
        hp: 126,
        hitDice: "11d12+55",
        speed: { walk: 40 },
        abilities: { str: 23, dex: 15, con: 20, int: 10, wis: 12, cha: 9 },
        savingThrows: { dex: 5, con: 8, wis: 4 },
        skills: { athletics: 12, perception: 4 },
        senses: ["darkvision 60 ft.", "passive Perception 14"],
        languages: ["Giant"],
        cr: "7",
        xp: 2900,
        traits: [
            {
                name: "Stone Camouflage",
                description: "The giant has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The giant makes two greatclub attacks."
            },
            {
                name: "Greatclub",
                description: "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 19 (3d8 + 6) bludgeoning damage."
            },
            {
                name: "Rock",
                description: "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 28 (4d10 + 6) bludgeoning damage. If the target is a creature, it must succeed on a DC 17 Strength saving throw or be knocked prone."
            }
        ],
        reactions: [
            {
                name: "Rock Catching",
                description: "If a rock or similar object is hurled at the giant, the giant can, with a successful DC 10 Dexterity saving throw, catch the missile and take no bludgeoning damage from it."
            }
        ]
    },

    // Additional Monstrosities
    "darkmantle": {
        name: "Darkmantle",
        size: "Small",
        type: "Monstrosity",
        alignment: "unaligned",
        ac: 11,
        hp: 22,
        hitDice: "5d6+5",
        speed: { walk: 10, fly: 30 },
        abilities: { str: 16, dex: 12, con: 13, int: 2, wis: 10, cha: 5 },
        skills: { stealth: 3 },
        senses: ["blindsight 60 ft.", "passive Perception 10"],
        languages: [],
        cr: "1/2",
        xp: 100,
        traits: [
            {
                name: "Echolocation",
                description: "The darkmantle can't use its blindsight while deafened."
            },
            {
                name: "False Appearance",
                description: "While the darkmantle remains motionless, it is indistinguishable from a cave formation such as a stalactite or stalagmite."
            }
        ],
        actions: [
            {
                name: "Crush",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d6 + 3) bludgeoning damage, and the darkmantle attaches to the target. If the target is Medium or smaller and the darkmantle has advantage on the attack roll, it attaches by engulfing the target's head, and the target is also blinded and unable to breathe while the darkmantle is attached in this way. While attached to the target, the darkmantle can attack no other creature except the target but has advantage on its attack rolls. The darkmantle's speed also becomes 0, it can't benefit from any bonus to its speed, and it moves with the target. A creature can detach the darkmantle by making a successful DC 13 Strength check as an action. On its turn, the darkmantle can detach itself from the target by using 5 feet of movement."
            },
            {
                name: "Darkness Aura (1/Day)",
                description: "A 15-foot radius of magical darkness extends out from the darkmantle, moves with it, and spreads around corners. The darkness lasts as long as the darkmantle maintains concentration, up to 10 minutes (as if concentrating on a spell). Darkvision can't penetrate this darkness, and no natural light can illuminate it. If any of the darkness overlaps with an area of light created by a spell of 2nd level or lower, the spell creating the light is dispelled."
            }
        ]
    },
    "death-dog": {
        name: "Death Dog",
        size: "Medium",
        type: "Monstrosity",
        alignment: "neutral evil",
        ac: 12,
        hp: 39,
        hitDice: "6d8+12",
        speed: { walk: 40 },
        abilities: { str: 15, dex: 14, con: 14, int: 3, wis: 13, cha: 6 },
        skills: { perception: 5, stealth: 4 },
        senses: ["darkvision 120 ft.", "passive Perception 15"],
        languages: [],
        cr: "1",
        xp: 200,
        traits: [
            {
                name: "Two-Headed",
                description: "The dog has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The dog makes two bite attacks."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the creature must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. This reduction lasts until the disease is cured. The creature dies if the disease reduces its hit point maximum to 0."
            }
        ]
    },
    "drider": {
        name: "Drider",
        size: "Large",
        type: "Monstrosity",
        alignment: "chaotic evil",
        ac: 19,
        acType: "natural armor",
        hp: 123,
        hitDice: "13d10+52",
        speed: { walk: 30, climb: 30 },
        abilities: { str: 16, dex: 16, con: 18, int: 13, wis: 14, cha: 12 },
        skills: { perception: 5, stealth: 9 },
        senses: ["darkvision 120 ft.", "passive Perception 15"],
        languages: ["Elvish", "Undercommon"],
        cr: "6",
        xp: 2300,
        traits: [
            {
                name: "Fey Ancestry",
                description: "The drider has advantage on saving throws against being charmed, and magic can't put the drider to sleep."
            },
            {
                name: "Innate Spellcasting",
                description: "The drider's innate spellcasting ability is Wisdom (spell save DC 13). The drider can innately cast the following spells, requiring no material components: At will: dancing lights. 1/day each: darkness, faerie fire."
            },
            {
                name: "Spider Climb",
                description: "The drider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            },
            {
                name: "Sunlight Sensitivity",
                description: "While in sunlight, the drider has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            },
            {
                name: "Web Walker",
                description: "The drider ignores movement restrictions caused by webbing."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The drider makes three attacks, either with its longsword or its longbow. It can replace one of those attacks with a bite attack."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 2 (1d4) piercing damage plus 9 (2d8) poison damage."
            },
            {
                name: "Longsword",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
            },
            {
                name: "Longbow",
                description: "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 4 (1d8) poison damage."
            }
        ]
    },
    "ettercap": {
        name: "Ettercap",
        size: "Medium",
        type: "Monstrosity",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor",
        hp: 44,
        hitDice: "8d8+8",
        speed: { walk: 30, climb: 30 },
        abilities: { str: 14, dex: 15, con: 13, int: 7, wis: 12, cha: 8 },
        skills: { perception: 3, stealth: 4, survival: 3 },
        senses: ["darkvision 60 ft.", "passive Perception 13"],
        languages: [],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Spider Climb",
                description: "The ettercap can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            },
            {
                name: "Web Sense",
                description: "While in contact with a web, the ettercap knows the exact location of any other creature in contact with the same web."
            },
            {
                name: "Web Walker",
                description: "The ettercap ignores movement restrictions caused by webbing."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The ettercap makes two attacks: one with its bite and one with its claws."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) piercing damage plus 4 (1d8) poison damage. The target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            },
            {
                name: "Claws",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage."
            },
            {
                name: "Web (Recharge 5-6)",
                description: "Ranged Weapon Attack: +4 to hit, range 30/60 ft., one Large or smaller creature. Hit: The creature is restrained by webbing. As an action, the restrained creature can make a DC 11 Strength check, escaping from the webbing on a success. The effect also ends if the webbing is destroyed. The webbing has AC 10, 5 hit points, vulnerability to fire damage, and immunity to bludgeoning, poison, and psychic damage."
            }
        ]
    },
    "grick-alpha": {
        name: "Grick Alpha",
        size: "Large",
        type: "Monstrosity",
        alignment: "neutral",
        ac: 18,
        acType: "natural armor",
        hp: 75,
        hitDice: "10d10+20",
        speed: { walk: 30, climb: 30 },
        abilities: { str: 18, dex: 16, con: 15, int: 4, wis: 14, cha: 9 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft.", "passive Perception 12"],
        languages: [],
        cr: "7",
        xp: 2900,
        traits: [
            {
                name: "Stone Camouflage",
                description: "The grick has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The grick makes two attacks: one with its tail and one with its tentacles. If it hits with its tentacles, the grick can make one beak attack against the same target."
            },
            {
                name: "Tail",
                description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage."
            },
            {
                name: "Tentacles",
                description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 22 (4d8 + 4) slashing damage."
            },
            {
                name: "Beak",
                description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 13 (2d8 + 4) piercing damage."
            }
        ]
    },
    "hook-horror": {
        name: "Hook Horror",
        size: "Large",
        type: "Monstrosity",
        alignment: "neutral",
        ac: 15,
        acType: "natural armor",
        hp: 75,
        hitDice: "10d10+20",
        speed: { walk: 30, climb: 30 },
        abilities: { str: 18, dex: 10, con: 15, int: 6, wis: 12, cha: 7 },
        skills: { perception: 3 },
        senses: ["blindsight 60 ft.", "darkvision 10 ft.", "passive Perception 13"],
        languages: ["Hook Horror"],
        cr: "3",
        xp: 700,
        traits: [
            {
                name: "Echolocation",
                description: "The hook horror can't use its blindsight while deafened."
            },
            {
                name: "Keen Hearing",
                description: "The hook horror has advantage on Wisdom (Perception) checks that rely on hearing."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The hook horror makes two hook attacks."
            },
            {
                name: "Hook",
                description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) piercing damage."
            }
        ]
    },
    "merrow": {
        name: "Merrow",
        size: "Large",
        type: "Monstrosity",
        alignment: "chaotic evil",
        ac: 13,
        acType: "natural armor",
        hp: 45,
        hitDice: "6d10+12",
        speed: { walk: 10, swim: 40 },
        abilities: { str: 18, dex: 10, con: 15, int: 8, wis: 10, cha: 9 },
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: ["Abyssal", "Aquan"],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Amphibious",
                description: "The merrow can breathe air and water."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The merrow makes two attacks: one with its bite and one with its claws or harpoon."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage."
            },
            {
                name: "Claws",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) slashing damage."
            },
            {
                name: "Harpoon",
                description: "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 11 (2d6 + 4) piercing damage. If the target is a Huge or smaller creature, it must succeed on a Strength contest against the merrow or be pulled up to 20 feet toward the merrow."
            }
        ]
    },
    "wyvern": {
        name: "Wyvern",
        size: "Large",
        type: "Monstrosity",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 110,
        hitDice: "13d10+39",
        speed: { walk: 20, fly: 80 },
        abilities: { str: 19, dex: 10, con: 16, int: 5, wis: 12, cha: 6 },
        skills: { perception: 4 },
        senses: ["darkvision 60 ft.", "passive Perception 14"],
        languages: [],
        cr: "6",
        xp: 2300,
        actions: [
            {
                name: "Multiattack",
                description: "The wyvern makes two attacks: one with its bite and one with its stinger. While flying, it can use its claws in place of one other attack."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 11 (2d6 + 4) piercing damage."
            },
            {
                name: "Claws",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage."
            },
            {
                name: "Stinger",
                description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 11 (2d6 + 4) piercing damage. The target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    "abominable-yeti": {
        name: "Abominable Yeti",
        size: "Huge",
        type: "Monstrosity",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 137,
        hitDice: "11d12+66",
        speed: { walk: 40, climb: 40 },
        abilities: { str: 24, dex: 10, con: 22, int: 9, wis: 13, cha: 9 },
        skills: { perception: 5, stealth: 4 },
        damageImmunities: ["cold"],
        senses: ["darkvision 60 ft.", "passive Perception 15"],
        languages: ["Yeti"],
        cr: "9",
        xp: 5000,
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
                description: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage plus 7 (2d6) cold damage."
            },
            {
                name: "Chilling Gaze",
                description: "The yeti targets one creature it can see within 30 feet of it. If the target can see the yeti, the target must succeed on a DC 18 Constitution saving throw against this magic or take 21 (6d6) cold damage and then be paralyzed for 1 minute, unless it is immune to cold damage. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If the target's saving throw is successful, or if the effect ends on it, the target is immune to the Chilling Gaze of all yetis (but not abominable yetis) for 1 hour."
            },
            {
                name: "Cold Breath (Recharge 6)",
                description: "The yeti exhales a 30-foot cone of frigid air. Each creature in that area must make a DC 18 Constitution saving throw, taking 45 (10d8) cold damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },

    // ==========================================
    // HUMANOID NPCs
    // ==========================================

    "acolyte": {
        name: "Acolyte",
        size: "Medium",
        type: "Humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 10,
        hp: 9,
        hitDice: "2d8",
        speed: { walk: 30 },
        abilities: { str: 10, dex: 10, con: 10, int: 10, wis: 14, cha: 11 },
        skills: { medicine: 4, religion: 2 },
        senses: ["passive Perception 12"],
        languages: ["any one language (usually Common)"],
        cr: "1/4",
        xp: 50,
        traits: [
            {
                name: "Spellcasting",
                description: "The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The acolyte has the following cleric spells prepared:\n\nCantrips (at will): light, sacred flame, thaumaturgy\n1st level (3 slots): bless, cure wounds, sanctuary"
            }
        ],
        actions: [
            {
                name: "Club",
                description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage."
            }
        ]
    },
    "archmage": {
        name: "Archmage",
        size: "Medium",
        type: "Humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 12,
        acType: "15 with mage armor",
        hp: 99,
        hitDice: "18d8+18",
        speed: { walk: 30 },
        abilities: { str: 10, dex: 14, con: 12, int: 20, wis: 15, cha: 16 },
        savingThrows: { int: 9, wis: 6 },
        skills: { arcana: 13, history: 13 },
        damageResistances: ["damage from spells; nonmagical bludgeoning, piercing, and slashing (from stoneskin)"],
        senses: ["passive Perception 12"],
        languages: ["any six languages"],
        cr: "12",
        xp: 8400,
        traits: [
            {
                name: "Magic Resistance",
                description: "The archmage has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Spellcasting",
                description: "The archmage is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). The archmage can cast disguise self and invisibility at will and has the following wizard spells prepared:\n\nCantrips (at will): fire bolt, light, mage hand, prestidigitation, shocking grasp\n1st level (4 slots): detect magic, identify, mage armor*, magic missile\n2nd level (3 slots): detect thoughts, mirror image, misty step\n3rd level (3 slots): counterspell, fly, lightning bolt\n4th level (3 slots): banishment, fire shield, stoneskin*\n5th level (3 slots): cone of cold, scrying, wall of force\n6th level (1 slot): globe of invulnerability\n7th level (1 slot): teleport\n8th level (1 slot): mind blank*\n9th level (1 slot): time stop\n\n*The archmage casts these spells on itself before combat."
            }
        ],
        actions: [
            {
                name: "Dagger",
                description: "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4 + 2) piercing damage."
            }
        ]
    },
    "assassin": {
        name: "Assassin",
        size: "Medium",
        type: "Humanoid",
        subtype: "any race",
        alignment: "any non-good alignment",
        ac: 15,
        acType: "studded leather",
        hp: 78,
        hitDice: "12d8+24",
        speed: { walk: 30 },
        abilities: { str: 11, dex: 16, con: 14, int: 13, wis: 11, cha: 10 },
        savingThrows: { dex: 6, int: 4 },
        skills: { acrobatics: 6, deception: 3, perception: 3, stealth: 9 },
        damageResistances: ["poison"],
        senses: ["passive Perception 13"],
        languages: ["Thieves' cant plus any two languages"],
        cr: "8",
        xp: 3900,
        traits: [
            {
                name: "Assassinate",
                description: "During its first turn, the assassin has advantage on attack rolls against any creature that hasn't taken a turn. Any hit the assassin scores against a surprised creature is a critical hit."
            },
            {
                name: "Evasion",
                description: "If the assassin is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the assassin instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
            },
            {
                name: "Sneak Attack (1/Turn)",
                description: "The assassin deals an extra 14 (4d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the assassin that isn't incapacitated and the assassin doesn't have disadvantage on the attack roll."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The assassin makes two shortsword attacks."
            },
            {
                name: "Shortsword",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one."
            },
            {
                name: "Light Crossbow",
                description: "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 7 (1d8 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    "berserker": {
        name: "Berserker",
        size: "Medium",
        type: "Humanoid",
        subtype: "any race",
        alignment: "any chaotic alignment",
        ac: 13,
        acType: "hide armor",
        hp: 67,
        hitDice: "9d8+27",
        speed: { walk: 30 },
        abilities: { str: 16, dex: 12, con: 17, int: 9, wis: 11, cha: 9 },
        senses: ["passive Perception 10"],
        languages: ["any one language (usually Common)"],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Reckless",
                description: "At the start of its turn, the berserker can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn."
            }
        ],
        actions: [
            {
                name: "Greataxe",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12 + 3) slashing damage."
            }
        ]
    },
    "commoner": {
        name: "Commoner",
        size: "Medium",
        type: "Humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 10,
        hp: 4,
        hitDice: "1d8",
        speed: { walk: 30 },
        abilities: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 },
        senses: ["passive Perception 10"],
        languages: ["any one language (usually Common)"],
        cr: "0",
        xp: 10,
        traits: [],
        actions: [
            {
                name: "Club",
                description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage."
            }
        ]
    },
    "cult-fanatic": {
        name: "Cult Fanatic",
        size: "Medium",
        type: "Humanoid",
        subtype: "any race",
        alignment: "any non-good alignment",
        ac: 13,
        acType: "leather armor",
        hp: 33,
        hitDice: "6d8+6",
        speed: { walk: 30 },
        abilities: { str: 11, dex: 14, con: 12, int: 10, wis: 13, cha: 14 },
        skills: { deception: 4, persuasion: 4, religion: 2 },
        senses: ["passive Perception 11"],
        languages: ["any one language (usually Common)"],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Dark Devotion",
                description: "The fanatic has advantage on saving throws against being charmed or frightened."
            },
            {
                name: "Spellcasting",
                description: "The fanatic is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 11, +3 to hit with spell attacks). The fanatic has the following cleric spells prepared:\n\nCantrips (at will): light, sacred flame, thaumaturgy\n1st level (4 slots): command, inflict wounds, shield of faith\n2nd level (3 slots): hold person, spiritual weapon"
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The fanatic makes two melee attacks."
            },
            {
                name: "Dagger",
                description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one creature. Hit: 4 (1d4 + 2) piercing damage."
            }
        ]
    },
    "cultist": {
        name: "Cultist",
        size: "Medium",
        type: "Humanoid",
        subtype: "any race",
        alignment: "any non-good alignment",
        ac: 12,
        acType: "leather armor",
        hp: 9,
        hitDice: "2d8",
        speed: { walk: 30 },
        abilities: { str: 11, dex: 12, con: 10, int: 10, wis: 11, cha: 10 },
        skills: { deception: 2, religion: 2 },
        senses: ["passive Perception 10"],
        languages: ["any one language (usually Common)"],
        cr: "1/8",
        xp: 25,
        traits: [
            {
                name: "Dark Devotion",
                description: "The cultist has advantage on saving throws against being charmed or frightened."
            }
        ],
        actions: [
            {
                name: "Scimitar",
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) slashing damage."
            }
        ]
    },
    "druid-npc": {
        name: "Druid",
        size: "Medium",
        type: "Humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 11,
        acType: "16 with barkskin",
        hp: 27,
        hitDice: "5d8+5",
        speed: { walk: 30 },
        abilities: { str: 10, dex: 12, con: 13, int: 12, wis: 15, cha: 11 },
        skills: { medicine: 4, nature: 3, perception: 4 },
        senses: ["passive Perception 14"],
        languages: ["Druidic plus any two languages"],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Spellcasting",
                description: "The druid is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). It has the following druid spells prepared:\n\nCantrips (at will): druidcraft, produce flame, shillelagh\n1st level (4 slots): entangle, longstrider, speak with animals, thunderwave\n2nd level (3 slots): animal messenger, barkskin"
            }
        ],
        actions: [
            {
                name: "Quarterstaff",
                description: "Melee Weapon Attack: +2 to hit (+4 to hit with shillelagh), reach 5 ft., one target. Hit: 3 (1d6) bludgeoning damage, 4 (1d8) bludgeoning damage if wielded with two hands, or 6 (1d8 + 2) bludgeoning damage with shillelagh."
            }
        ]
    },
    "gladiator": {
        name: "Gladiator",
        size: "Medium",
        type: "Humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 16,
        acType: "studded leather, shield",
        hp: 112,
        hitDice: "15d8+45",
        speed: { walk: 30 },
        abilities: { str: 18, dex: 15, con: 16, int: 10, wis: 12, cha: 15 },
        savingThrows: { str: 7, dex: 5, con: 6 },
        skills: { athletics: 10, intimidation: 5 },
        senses: ["passive Perception 11"],
        languages: ["any one language (usually Common)"],
        cr: "5",
        xp: 1800,
        traits: [
            {
                name: "Brave",
                description: "The gladiator has advantage on saving throws against being frightened."
            },
            {
                name: "Brute",
                description: "A melee weapon deals one extra die of its damage when the gladiator hits with it (included in the attack)."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The gladiator makes three melee attacks or two ranged attacks."
            },
            {
                name: "Spear",
                description: "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. and range 20/60 ft., one target. Hit: 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack."
            },
            {
                name: "Shield Bash",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 9 (2d4 + 4) bludgeoning damage. If the target is a Medium or smaller creature, it must succeed on a DC 15 Strength saving throw or be knocked prone."
            }
        ],
        reactions: [
            {
                name: "Parry",
                description: "The gladiator adds 3 to its AC against one melee attack that would hit it. To do so, the gladiator must see the attacker and be wielding a melee weapon."
            }
        ]
    },
    "guard": {
        name: "Guard",
        size: "Medium",
        type: "Humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 16,
        acType: "chain shirt, shield",
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 30 },
        abilities: { str: 13, dex: 12, con: 12, int: 10, wis: 11, cha: 10 },
        skills: { perception: 2 },
        senses: ["passive Perception 12"],
        languages: ["any one language (usually Common)"],
        cr: "1/8",
        xp: 25,
        traits: [],
        actions: [
            {
                name: "Spear",
                description: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack."
            }
        ]
    },
    "knight": {
        name: "Knight",
        size: "Medium",
        type: "Humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 18,
        acType: "plate",
        hp: 52,
        hitDice: "8d8+16",
        speed: { walk: 30 },
        abilities: { str: 16, dex: 11, con: 14, int: 11, wis: 11, cha: 15 },
        savingThrows: { con: 4, wis: 2 },
        senses: ["passive Perception 10"],
        languages: ["any one language (usually Common)"],
        cr: "3",
        xp: 700,
        traits: [
            {
                name: "Brave",
                description: "The knight has advantage on saving throws against being frightened."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The knight makes two melee attacks."
            },
            {
                name: "Greatsword",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage."
            },
            {
                name: "Heavy Crossbow",
                description: "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit: 5 (1d10) piercing damage."
            },
            {
                name: "Leadership (Recharges after a Short or Long Rest)",
                description: "For 1 minute, the knight can utter a special command or warning whenever a nonhostile creature that it can see within 30 feet of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the knight. A creature can benefit from only one Leadership die at a time. This effect ends if the knight is incapacitated."
            }
        ],
        reactions: [
            {
                name: "Parry",
                description: "The knight adds 2 to its AC against one melee attack that would hit it. To do so, the knight must see the attacker and be wielding a melee weapon."
            }
        ]
    },
    "mage": {
        name: "Mage",
        size: "Medium",
        type: "Humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 12,
        acType: "15 with mage armor",
        hp: 40,
        hitDice: "9d8",
        speed: { walk: 30 },
        abilities: { str: 9, dex: 14, con: 11, int: 17, wis: 12, cha: 11 },
        savingThrows: { int: 6, wis: 4 },
        skills: { arcana: 6, history: 6 },
        senses: ["passive Perception 11"],
        languages: ["any four languages"],
        cr: "6",
        xp: 2300,
        traits: [
            {
                name: "Spellcasting",
                description: "The mage is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The mage has the following wizard spells prepared:\n\nCantrips (at will): fire bolt, light, mage hand, prestidigitation\n1st level (4 slots): detect magic, mage armor, magic missile, shield\n2nd level (3 slots): misty step, suggestion\n3rd level (3 slots): counterspell, fireball, fly\n4th level (3 slots): greater invisibility, ice storm\n5th level (1 slot): cone of cold"
            }
        ],
        actions: [
            {
                name: "Dagger",
                description: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4 + 2) piercing damage."
            }
        ]
    },
    "noble": {
        name: "Noble",
        size: "Medium",
        type: "Humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 15,
        acType: "breastplate",
        hp: 9,
        hitDice: "2d8",
        speed: { walk: 30 },
        abilities: { str: 11, dex: 12, con: 11, int: 12, wis: 14, cha: 16 },
        skills: { deception: 5, insight: 4, persuasion: 5 },
        senses: ["passive Perception 12"],
        languages: ["any two languages"],
        cr: "1/8",
        xp: 25,
        traits: [],
        actions: [
            {
                name: "Rapier",
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) piercing damage."
            }
        ],
        reactions: [
            {
                name: "Parry",
                description: "The noble adds 2 to its AC against one melee attack that would hit it. To do so, the noble must see the attacker and be wielding a melee weapon."
            }
        ]
    },
    "priest": {
        name: "Priest",
        size: "Medium",
        type: "Humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 13,
        acType: "chain shirt",
        hp: 27,
        hitDice: "5d8+5",
        speed: { walk: 30 },
        abilities: { str: 10, dex: 10, con: 12, int: 13, wis: 16, cha: 13 },
        skills: { medicine: 7, persuasion: 3, religion: 5 },
        senses: ["passive Perception 13"],
        languages: ["any two languages"],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Divine Eminence",
                description: "As a bonus action, the priest can expend a spell slot to cause its melee weapon attacks to magically deal an extra 10 (3d6) radiant damage to a target on a hit. This benefit lasts until the end of the turn. If the priest expends a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each level above 1st."
            },
            {
                name: "Spellcasting",
                description: "The priest is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 13, +5 to hit with spell attacks). The priest has the following cleric spells prepared:\n\nCantrips (at will): light, sacred flame, thaumaturgy\n1st level (4 slots): cure wounds, guiding bolt, sanctuary\n2nd level (3 slots): lesser restoration, spiritual weapon\n3rd level (2 slots): dispel magic, spirit guardians"
            }
        ],
        actions: [
            {
                name: "Mace",
                description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) bludgeoning damage."
            }
        ]
    },
    "scout": {
        name: "Scout",
        size: "Medium",
        type: "Humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 13,
        acType: "leather armor",
        hp: 16,
        hitDice: "3d8+3",
        speed: { walk: 30 },
        abilities: { str: 11, dex: 14, con: 12, int: 11, wis: 13, cha: 11 },
        skills: { nature: 4, perception: 5, stealth: 6, survival: 5 },
        senses: ["passive Perception 15"],
        languages: ["any one language (usually Common)"],
        cr: "1/2",
        xp: 100,
        traits: [
            {
                name: "Keen Hearing and Sight",
                description: "The scout has advantage on Wisdom (Perception) checks that rely on hearing or sight."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The scout makes two melee attacks or two ranged attacks."
            },
            {
                name: "Shortsword",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
            },
            {
                name: "Longbow",
                description: "Ranged Weapon Attack: +4 to hit, ranged 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage."
            }
        ]
    },
    "spy": {
        name: "Spy",
        size: "Medium",
        type: "Humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 12,
        hp: 27,
        hitDice: "6d8",
        speed: { walk: 30 },
        abilities: { str: 10, dex: 15, con: 10, int: 12, wis: 14, cha: 16 },
        skills: { deception: 5, insight: 4, investigation: 5, perception: 6, persuasion: 5, sleightOfHand: 4, stealth: 4 },
        senses: ["passive Perception 16"],
        languages: ["any two languages"],
        cr: "1",
        xp: 200,
        traits: [
            {
                name: "Cunning Action",
                description: "On each of its turns, the spy can use a bonus action to take the Dash, Disengage, or Hide action."
            },
            {
                name: "Sneak Attack (1/Turn)",
                description: "The spy deals an extra 7 (2d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the spy that isn't incapacitated and the spy doesn't have disadvantage on the attack roll."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The spy makes two melee attacks."
            },
            {
                name: "Shortsword",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
            },
            {
                name: "Hand Crossbow",
                description: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
            }
        ]
    },
    "thug": {
        name: "Thug",
        size: "Medium",
        type: "Humanoid",
        subtype: "any race",
        alignment: "any non-good alignment",
        ac: 11,
        acType: "leather armor",
        hp: 32,
        hitDice: "5d8+10",
        speed: { walk: 30 },
        abilities: { str: 15, dex: 11, con: 14, int: 10, wis: 10, cha: 11 },
        skills: { intimidation: 2 },
        senses: ["passive Perception 10"],
        languages: ["any one language (usually Common)"],
        cr: "1/2",
        xp: 100,
        traits: [
            {
                name: "Pack Tactics",
                description: "The thug has advantage on an attack roll against a creature if at least one of the thug's allies is within 5 feet of the creature and the ally isn't incapacitated."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The thug makes two melee attacks."
            },
            {
                name: "Mace",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) bludgeoning damage."
            },
            {
                name: "Heavy Crossbow",
                description: "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit: 5 (1d10) piercing damage."
            }
        ]
    },
    "tribal-warrior": {
        name: "Tribal Warrior",
        size: "Medium",
        type: "Humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 12,
        acType: "hide armor",
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 30 },
        abilities: { str: 13, dex: 11, con: 12, int: 8, wis: 11, cha: 8 },
        senses: ["passive Perception 10"],
        languages: ["any one language"],
        cr: "1/8",
        xp: 25,
        traits: [
            {
                name: "Pack Tactics",
                description: "The warrior has advantage on an attack roll against a creature if at least one of the warrior's allies is within 5 feet of the creature and the ally isn't incapacitated."
            }
        ],
        actions: [
            {
                name: "Spear",
                description: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack."
            }
        ]
    },
    "veteran": {
        name: "Veteran",
        size: "Medium",
        type: "Humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 17,
        acType: "splint",
        hp: 58,
        hitDice: "9d8+18",
        speed: { walk: 30 },
        abilities: { str: 16, dex: 13, con: 14, int: 10, wis: 11, cha: 10 },
        skills: { athletics: 5, perception: 2 },
        senses: ["passive Perception 12"],
        languages: ["any one language (usually Common)"],
        cr: "3",
        xp: 700,
        traits: [],
        actions: [
            {
                name: "Multiattack",
                description: "The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack."
            },
            {
                name: "Longsword",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
            },
            {
                name: "Shortsword",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage."
            },
            {
                name: "Heavy Crossbow",
                description: "Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit: 6 (1d10 + 1) piercing damage."
            }
        ]
    },

    // ==========================================
    // ABERRATIONS (Additional)
    // ==========================================

    "grell": {
        name: "Grell",
        size: "Medium",
        type: "Aberration",
        alignment: "neutral evil",
        ac: 12,
        hp: 55,
        hitDice: "10d8+10",
        speed: { walk: 0, fly: 30 },
        abilities: { str: 15, dex: 14, con: 13, int: 12, wis: 11, cha: 9 },
        skills: { perception: 4, stealth: 6 },
        damageImmunities: ["lightning"],
        conditionImmunities: ["blinded", "prone"],
        senses: ["blindsight 60 ft. (blind beyond this radius)", "passive Perception 14"],
        languages: ["Grell"],
        cr: "3",
        xp: 700,
        traits: [],
        actions: [
            {
                name: "Multiattack",
                description: "The grell makes two attacks: one with its tentacles and one with its beak."
            },
            {
                name: "Tentacles",
                description: "Melee Weapon Attack: +4 to hit, reach 10 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. The poisoned target is paralyzed, and it can repeat the saving throw at the end of each of its turns, ending the effect on a success. The target is also grappled (escape DC 15). If the target is Medium or smaller, it is also restrained until this grapple ends. While grappling the target, the grell has advantage on attack rolls against it and can't use this attack against other targets. When the grell moves, any Medium or smaller target it is grappling moves with it."
            },
            {
                name: "Beak",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage."
            }
        ]
    },

    // ==========================================
    // CELESTIALS
    // ==========================================

    "couatl": {
        name: "Couatl",
        size: "Medium",
        type: "Celestial",
        alignment: "lawful good",
        ac: 19,
        acType: "natural armor",
        hp: 97,
        hitDice: "13d8+39",
        speed: { walk: 30, fly: 90 },
        abilities: { str: 16, dex: 20, con: 17, int: 18, wis: 20, cha: 18 },
        savingThrows: { con: 5, wis: 7, cha: 6 },
        damageResistances: ["radiant"],
        damageImmunities: ["psychic; bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["truesight 120 ft.", "passive Perception 15"],
        languages: ["all", "telepathy 120 ft."],
        cr: "4",
        xp: 1100,
        traits: [
            {
                name: "Innate Spellcasting",
                description: "The couatl's spellcasting ability is Charisma (spell save DC 14). It can innately cast the following spells, requiring only verbal components:\n\nAt will: detect evil and good, detect magic, detect thoughts\n3/day each: bless, create food and water, cure wounds, lesser restoration, protection from poison, sanctuary, shield\n1/day each: dream, greater restoration, scrying"
            },
            {
                name: "Magic Weapons",
                description: "The couatl's weapon attacks are magical."
            },
            {
                name: "Shielded Mind",
                description: "The couatl is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location."
            }
        ],
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 8 (1d6 + 5) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 24 hours. Until this poison ends, the target is unconscious. Another creature can use an action to shake the target awake."
            },
            {
                name: "Constrict",
                description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one Medium or smaller creature. Hit: 10 (2d6 + 3) bludgeoning damage, and the target is grappled (escape DC 15). Until this grapple ends, the target is restrained, and the couatl can't constrict another target."
            },
            {
                name: "Change Shape",
                description: "The couatl magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the couatl's choice). In a new form, the couatl retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and other actions are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks. If the new form has a bite attack, the couatl can use its bite in that form."
            }
        ]
    },
    "empyrean": {
        name: "Empyrean",
        size: "Huge",
        type: "Celestial",
        subtype: "titan",
        alignment: "chaotic good (75%) or neutral evil (25%)",
        ac: 22,
        acType: "natural armor",
        hp: 313,
        hitDice: "19d12+190",
        speed: { walk: 50, fly: 50, swim: 50 },
        abilities: { str: 30, dex: 21, con: 30, int: 21, wis: 22, cha: 27 },
        savingThrows: { str: 17, int: 12, wis: 13, cha: 15 },
        skills: { insight: 13, persuasion: 15 },
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["truesight 120 ft.", "passive Perception 16"],
        languages: ["all"],
        cr: "23",
        xp: 50000,
        traits: [
            {
                name: "Innate Spellcasting",
                description: "The empyrean's innate spellcasting ability is Charisma (spell save DC 23, +15 to hit with spell attacks). It can innately cast the following spells, requiring no material components:\n\nAt will: greater restoration, pass without trace, water breathing, water walk\n1/day each: commune, dispel evil and good, earthquake, fire storm, plane shift (self only)"
            },
            {
                name: "Legendary Resistance (3/Day)",
                description: "If the empyrean fails a saving throw, it can choose to succeed instead."
            },
            {
                name: "Magic Resistance",
                description: "The empyrean has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Magic Weapons",
                description: "The empyrean's weapon attacks are magical."
            }
        ],
        actions: [
            {
                name: "Maul",
                description: "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 31 (6d6 + 10) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw or be stunned until the end of the empyrean's next turn."
            },
            {
                name: "Bolt",
                description: "Ranged Spell Attack: +15 to hit, range 600 ft., one target. Hit: 24 (7d6) damage of one of the following types (empyrean's choice): acid, cold, fire, force, lightning, radiant, or thunder."
            }
        ],
        legendaryActions: [
            {
                name: "Attack",
                description: "The empyrean makes one attack."
            },
            {
                name: "Bolster",
                description: "The empyrean bolsters all nonhostile creatures within 120 feet of it until the end of its next turn. Bolstered creatures can't be charmed or frightened, and they gain advantage on ability checks and saving throws until the end of the empyrean's next turn."
            },
            {
                name: "Trembling Strike (Costs 2 Actions)",
                description: "The empyrean strikes the ground with its maul, triggering an earth tremor. All other creatures on the ground within 60 feet of the empyrean must succeed on a DC 25 Strength saving throw or be knocked prone."
            }
        ]
    },
    "pegasus": {
        name: "Pegasus",
        size: "Large",
        type: "Celestial",
        alignment: "chaotic good",
        ac: 12,
        hp: 59,
        hitDice: "7d10+21",
        speed: { walk: 60, fly: 90 },
        abilities: { str: 18, dex: 15, con: 16, int: 10, wis: 15, cha: 13 },
        savingThrows: { dex: 4, wis: 4, cha: 3 },
        skills: { perception: 6 },
        senses: ["passive Perception 16"],
        languages: ["understands Celestial, Common, Elvish, and Sylvan but can't speak"],
        cr: "2",
        xp: 450,
        traits: [],
        actions: [
            {
                name: "Hooves",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage."
            }
        ]
    },
    "planetar": {
        name: "Planetar",
        size: "Large",
        type: "Celestial",
        alignment: "lawful good",
        ac: 19,
        acType: "natural armor",
        hp: 200,
        hitDice: "16d10+112",
        speed: { walk: 40, fly: 120 },
        abilities: { str: 24, dex: 20, con: 24, int: 19, wis: 22, cha: 25 },
        savingThrows: { con: 12, wis: 11, cha: 12 },
        skills: { perception: 11 },
        damageResistances: ["radiant; bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "exhaustion", "frightened"],
        senses: ["truesight 120 ft.", "passive Perception 21"],
        languages: ["all", "telepathy 120 ft."],
        cr: "16",
        xp: 15000,
        traits: [
            {
                name: "Angelic Weapons",
                description: "The planetar's weapon attacks are magical. When the planetar hits with any weapon, the weapon deals an extra 5d8 radiant damage (included in the attack)."
            },
            {
                name: "Divine Awareness",
                description: "The planetar knows if it hears a lie."
            },
            {
                name: "Innate Spellcasting",
                description: "The planetar's spellcasting ability is Charisma (spell save DC 20). The planetar can innately cast the following spells, requiring no material components:\n\nAt will: detect evil and good, invisibility (self only)\n3/day each: blade barrier, dispel evil and good, flame strike, raise dead\n1/day each: commune, control weather, insect plague"
            },
            {
                name: "Magic Resistance",
                description: "The planetar has advantage on saving throws against spells and other magical effects."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The planetar makes two melee attacks."
            },
            {
                name: "Greatsword",
                description: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 21 (4d6 + 7) slashing damage plus 22 (5d8) radiant damage."
            },
            {
                name: "Healing Touch (4/Day)",
                description: "The planetar touches another creature. The target magically regains 30 (6d8 + 3) hit points and is freed from any curse, disease, poison, blindness, or deafness."
            }
        ]
    },
    "solar": {
        name: "Solar",
        size: "Large",
        type: "Celestial",
        alignment: "lawful good",
        ac: 21,
        acType: "natural armor",
        hp: 243,
        hitDice: "18d10+144",
        speed: { walk: 50, fly: 150 },
        abilities: { str: 26, dex: 22, con: 26, int: 25, wis: 25, cha: 30 },
        savingThrows: { int: 14, wis: 14, cha: 17 },
        skills: { perception: 14 },
        damageResistances: ["radiant; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "poisoned"],
        senses: ["truesight 120 ft.", "passive Perception 24"],
        languages: ["all", "telepathy 120 ft."],
        cr: "21",
        xp: 33000,
        traits: [
            {
                name: "Angelic Weapons",
                description: "The solar's weapon attacks are magical. When the solar hits with any weapon, the weapon deals an extra 6d8 radiant damage (included in the attack)."
            },
            {
                name: "Divine Awareness",
                description: "The solar knows if it hears a lie."
            },
            {
                name: "Innate Spellcasting",
                description: "The solar's spellcasting ability is Charisma (spell save DC 25). It can innately cast the following spells, requiring no material components:\n\nAt will: detect evil and good, invisibility (self only)\n3/day each: blade barrier, dispel evil and good, resurrection\n1/day each: commune, control weather"
            },
            {
                name: "Magic Resistance",
                description: "The solar has advantage on saving throws against spells and other magical effects."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The solar makes two greatsword attacks."
            },
            {
                name: "Greatsword",
                description: "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 22 (4d6 + 8) slashing damage plus 27 (6d8) radiant damage."
            },
            {
                name: "Slaying Longbow",
                description: "Ranged Weapon Attack: +13 to hit, range 150/600 ft., one target. Hit: 15 (2d8 + 6) piercing damage plus 27 (6d8) radiant damage. If the target is a creature that has 100 hit points or fewer, it must succeed on a DC 15 Constitution saving throw or die."
            },
            {
                name: "Flying Sword",
                description: "The solar releases its greatsword to hover magically in an unoccupied space within 5 feet of it. If the solar can see the sword, the solar can mentally command it as a bonus action to fly up to 50 feet and either make one attack against a target or return to the solar's hands. If the hovering sword is targeted by any effect, the solar is considered to be holding it. The hovering sword falls if the solar dies."
            },
            {
                name: "Healing Touch (4/Day)",
                description: "The solar touches another creature. The target magically regains 40 (8d8 + 4) hit points and is freed from any curse, disease, poison, blindness, or deafness."
            }
        ],
        legendaryActions: [
            {
                name: "Teleport",
                description: "The solar magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
            },
            {
                name: "Searing Burst (Costs 2 Actions)",
                description: "The solar emits magical, divine energy. Each creature of its choice in a 10-foot radius must make a DC 23 Dexterity saving throw, taking 14 (4d6) fire damage plus 14 (4d6) radiant damage on a failed save, or half as much damage on a successful one."
            },
            {
                name: "Blinding Gaze (Costs 3 Actions)",
                description: "The solar targets one creature it can see within 30 feet of it. If the target can see it, the target must succeed on a DC 15 Constitution saving throw or be blinded until magic such as the lesser restoration spell removes the blindness."
            }
        ]
    },
    "unicorn": {
        name: "Unicorn",
        size: "Large",
        type: "Celestial",
        alignment: "lawful good",
        ac: 12,
        hp: 67,
        hitDice: "9d10+18",
        speed: { walk: 50 },
        abilities: { str: 18, dex: 14, con: 15, int: 11, wis: 17, cha: 16 },
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "paralyzed", "poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 13"],
        languages: ["Celestial", "Elvish", "Sylvan", "telepathy 60 ft."],
        cr: "5",
        xp: 1800,
        traits: [
            {
                name: "Charge",
                description: "If the unicorn moves at least 20 feet straight toward a target and then hits it with a horn attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone."
            },
            {
                name: "Innate Spellcasting",
                description: "The unicorn's innate spellcasting ability is Charisma (spell save DC 14). The unicorn can innately cast the following spells, requiring no components:\n\nAt will: detect evil and good, druidcraft, pass without trace\n1/day each: calm emotions, dispel evil and good, entangle"
            },
            {
                name: "Magic Resistance",
                description: "The unicorn has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Magic Weapons",
                description: "The unicorn's weapon attacks are magical."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The unicorn makes two attacks: one with its hooves and one with its horn."
            },
            {
                name: "Hooves",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage."
            },
            {
                name: "Horn",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage."
            },
            {
                name: "Healing Touch (3/Day)",
                description: "The unicorn touches another creature with its horn. The target magically regains 11 (2d8 + 2) hit points. In addition, the touch removes all diseases and neutralizes all poisons afflicting the target."
            },
            {
                name: "Teleport (1/Day)",
                description: "The unicorn magically teleports itself and up to three willing creatures it can see within 5 feet of it, along with any equipment they are wearing or carrying, to a location the unicorn is familiar with, up to 1 mile away."
            }
        ],
        legendaryActions: [
            {
                name: "Hooves",
                description: "The unicorn makes one attack with its hooves."
            },
            {
                name: "Shimmering Shield (Costs 2 Actions)",
                description: "The unicorn creates a shimmering, magical field around itself or another creature it can see within 60 feet of it. The target gains a +2 bonus to AC until the end of the unicorn's next turn."
            },
            {
                name: "Heal Self (Costs 3 Actions)",
                description: "The unicorn magically regains 11 (2d8 + 2) hit points."
            }
        ]
    },

    // ==========================================
    // CONSTRUCTS (Additional)
    // ==========================================

    "clay-golem": {
        name: "Clay Golem",
        size: "Large",
        type: "Construct",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 133,
        hitDice: "14d10+56",
        speed: { walk: 20 },
        abilities: { str: 20, dex: 9, con: 18, int: 3, wis: 8, cha: 1 },
        damageImmunities: ["acid", "poison", "psychic; bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 9"],
        languages: ["understands the languages of its creator but can't speak"],
        cr: "9",
        xp: 5000,
        traits: [
            {
                name: "Acid Absorption",
                description: "Whenever the golem is subjected to acid damage, it takes no damage and instead regains a number of hit points equal to the acid damage dealt."
            },
            {
                name: "Berserk",
                description: "Whenever the golem starts its turn with 60 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points."
            },
            {
                name: "Immutable Form",
                description: "The golem is immune to any spell or effect that would alter its form."
            },
            {
                name: "Magic Resistance",
                description: "The golem has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Magic Weapons",
                description: "The golem's weapon attacks are magical."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The golem makes two slam attacks."
            },
            {
                name: "Slam",
                description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw or have its hit point maximum reduced by an amount equal to the damage taken. The target dies if this attack reduces its hit point maximum to 0. The reduction lasts until removed by the greater restoration spell or other magic."
            },
            {
                name: "Haste (Recharge 5-6)",
                description: "Until the end of its next turn, the golem magically gains a +2 bonus to its AC, has advantage on Dexterity saving throws, and can use its slam attack as a bonus action."
            }
        ]
    },
    "flesh-golem": {
        name: "Flesh Golem",
        size: "Medium",
        type: "Construct",
        alignment: "neutral",
        ac: 9,
        hp: 93,
        hitDice: "11d8+44",
        speed: { walk: 30 },
        abilities: { str: 19, dex: 9, con: 18, int: 6, wis: 10, cha: 5 },
        damageImmunities: ["lightning", "poison; bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: ["understands the languages of its creator but can't speak"],
        cr: "5",
        xp: 1800,
        traits: [
            {
                name: "Berserk",
                description: "Whenever the golem starts its turn with 40 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points. The golem's creator, if within 60 feet of the berserk golem, can try to calm it by speaking firmly and persuasively. The golem must be able to hear its creator, who must take an action to make a DC 15 Charisma (Persuasion) check. If the check succeeds, the golem ceases being berserk. If it takes damage while still at 40 hit points or fewer, the golem might go berserk again."
            },
            {
                name: "Aversion of Fire",
                description: "If the golem takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn."
            },
            {
                name: "Immutable Form",
                description: "The golem is immune to any spell or effect that would alter its form."
            },
            {
                name: "Lightning Absorption",
                description: "Whenever the golem is subjected to lightning damage, it takes no damage and instead regains a number of hit points equal to the lightning damage dealt."
            },
            {
                name: "Magic Resistance",
                description: "The golem has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Magic Weapons",
                description: "The golem's weapon attacks are magical."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The golem makes two slam attacks."
            },
            {
                name: "Slam",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage."
            }
        ]
    },
    "flying-sword": {
        name: "Flying Sword",
        size: "Small",
        type: "Construct",
        alignment: "unaligned",
        ac: 17,
        acType: "natural armor",
        hp: 17,
        hitDice: "5d6",
        speed: { walk: 0, fly: 50 },
        abilities: { str: 12, dex: 15, con: 11, int: 1, wis: 5, cha: 1 },
        savingThrows: { dex: 4 },
        damageImmunities: ["poison", "psychic"],
        conditionImmunities: ["blinded", "charmed", "deafened", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["blindsight 60 ft. (blind beyond this radius)", "passive Perception 7"],
        languages: [],
        cr: "1/4",
        xp: 50,
        traits: [
            {
                name: "Antimagic Susceptibility",
                description: "The sword is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the sword must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
            },
            {
                name: "False Appearance",
                description: "While the sword remains motionless and isn't flying, it is indistinguishable from a normal sword."
            }
        ],
        actions: [
            {
                name: "Longsword",
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) slashing damage."
            }
        ]
    },
    "helmed-horror": {
        name: "Helmed Horror",
        size: "Medium",
        type: "Construct",
        alignment: "unaligned",
        ac: 20,
        acType: "plate, shield",
        hp: 60,
        hitDice: "8d8+24",
        speed: { walk: 30, fly: 30 },
        abilities: { str: 18, dex: 13, con: 16, int: 10, wis: 10, cha: 10 },
        skills: { perception: 4 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        damageImmunities: ["force", "necrotic", "poison"],
        conditionImmunities: ["blinded", "charmed", "deafened", "frightened", "paralyzed", "petrified", "poisoned", "stunned"],
        senses: ["blindsight 60 ft. (blind beyond this radius)", "passive Perception 14"],
        languages: ["understands the languages of its creator but can't speak"],
        cr: "4",
        xp: 1100,
        traits: [
            {
                name: "Magic Resistance",
                description: "The helmed horror has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Spell Immunity",
                description: "The helmed horror is immune to three spells chosen by its creator. Typical immunities include fireball, heat metal, and lightning bolt."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The helmed horror makes two longsword attacks."
            },
            {
                name: "Longsword",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands."
            }
        ]
    },
    "homunculus": {
        name: "Homunculus",
        size: "Tiny",
        type: "Construct",
        alignment: "neutral",
        ac: 13,
        acType: "natural armor",
        hp: 5,
        hitDice: "2d4",
        speed: { walk: 20, fly: 40 },
        abilities: { str: 4, dex: 15, con: 11, int: 10, wis: 10, cha: 7 },
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: ["understands the languages of its creator but can't speak"],
        cr: "0",
        xp: 10,
        traits: [
            {
                name: "Telepathic Bond",
                description: "While the homunculus is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically."
            }
        ],
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or be poisoned for 1 minute. If the saving throw fails by 5 or more, the target is instead poisoned for 5 (1d10) minutes and unconscious while poisoned in this way."
            }
        ]
    },
    "iron-golem": {
        name: "Iron Golem",
        size: "Large",
        type: "Construct",
        alignment: "unaligned",
        ac: 20,
        acType: "natural armor",
        hp: 210,
        hitDice: "20d10+100",
        speed: { walk: 30 },
        abilities: { str: 24, dex: 9, con: 20, int: 3, wis: 11, cha: 1 },
        damageImmunities: ["fire", "poison", "psychic; bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["darkvision 120 ft.", "passive Perception 10"],
        languages: ["understands the languages of its creator but can't speak"],
        cr: "16",
        xp: 15000,
        traits: [
            {
                name: "Fire Absorption",
                description: "Whenever the golem is subjected to fire damage, it takes no damage and instead regains a number of hit points equal to the fire damage dealt."
            },
            {
                name: "Immutable Form",
                description: "The golem is immune to any spell or effect that would alter its form."
            },
            {
                name: "Magic Resistance",
                description: "The golem has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Magic Weapons",
                description: "The golem's weapon attacks are magical."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The golem makes two melee attacks."
            },
            {
                name: "Slam",
                description: "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 20 (3d8 + 7) bludgeoning damage."
            },
            {
                name: "Sword",
                description: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 23 (3d10 + 7) slashing damage."
            },
            {
                name: "Poison Breath (Recharge 6)",
                description: "The golem exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    "rug-of-smothering": {
        name: "Rug of Smothering",
        size: "Large",
        type: "Construct",
        alignment: "unaligned",
        ac: 12,
        hp: 33,
        hitDice: "6d10",
        speed: { walk: 10 },
        abilities: { str: 17, dex: 14, con: 10, int: 1, wis: 3, cha: 1 },
        damageImmunities: ["poison", "psychic"],
        conditionImmunities: ["blinded", "charmed", "deafened", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["blindsight 60 ft. (blind beyond this radius)", "passive Perception 6"],
        languages: [],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Antimagic Susceptibility",
                description: "The rug is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the rug must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
            },
            {
                name: "Damage Transfer",
                description: "While it is grappling a creature, the rug takes only half the damage dealt to it, and the creature grappled by the rug takes the other half."
            },
            {
                name: "False Appearance",
                description: "While the rug remains motionless, it is indistinguishable from a normal rug."
            }
        ],
        actions: [
            {
                name: "Smother",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one Medium or smaller creature. Hit: The creature is grappled (escape DC 13). Until this grapple ends, the target is restrained, blinded, and at risk of suffocating, and the rug can't smother another target. In addition, at the start of each of the target's turns, the target takes 10 (2d6 + 3) bludgeoning damage."
            }
        ]
    },
    "scarecrow": {
        name: "Scarecrow",
        size: "Medium",
        type: "Construct",
        alignment: "chaotic evil",
        ac: 11,
        hp: 36,
        hitDice: "8d8",
        speed: { walk: 30 },
        abilities: { str: 11, dex: 13, con: 11, int: 10, wis: 10, cha: 13 },
        damageVulnerabilities: ["fire"],
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned", "unconscious"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: ["understands the languages of its creator but can't speak"],
        cr: "1",
        xp: 200,
        traits: [
            {
                name: "False Appearance",
                description: "While the scarecrow remains motionless, it is indistinguishable from an ordinary, inanimate scarecrow."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The scarecrow makes two claw attacks."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) slashing damage. If the target is a creature, it must succeed on a DC 11 Wisdom saving throw or be frightened until the end of the scarecrow's next turn."
            },
            {
                name: "Terrifying Glare",
                description: "The scarecrow targets one creature it can see within 30 feet of it. If the target can see the scarecrow, the target must succeed on a DC 11 Wisdom saving throw or be magically frightened until the end of the scarecrow's next turn. The frightened target is paralyzed."
            }
        ]
    },
    "stone-golem": {
        name: "Stone Golem",
        size: "Large",
        type: "Construct",
        alignment: "unaligned",
        ac: 17,
        acType: "natural armor",
        hp: 178,
        hitDice: "17d10+85",
        speed: { walk: 30 },
        abilities: { str: 22, dex: 9, con: 20, int: 3, wis: 11, cha: 1 },
        damageImmunities: ["poison", "psychic; bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["darkvision 120 ft.", "passive Perception 10"],
        languages: ["understands the languages of its creator but can't speak"],
        cr: "10",
        xp: 5900,
        traits: [
            {
                name: "Immutable Form",
                description: "The golem is immune to any spell or effect that would alter its form."
            },
            {
                name: "Magic Resistance",
                description: "The golem has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Magic Weapons",
                description: "The golem's weapon attacks are magical."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The golem makes two slam attacks."
            },
            {
                name: "Slam",
                description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 19 (3d8 + 6) bludgeoning damage."
            },
            {
                name: "Slow (Recharge 5-6)",
                description: "The golem targets one or more creatures it can see within 10 feet of it. Each target must make a DC 17 Wisdom saving throw against this magic. On a failed save, a target can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the target can take either an action or a bonus action on its turn, not both. These effects last for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ]
    },

    // ==========================================
    // FEY (Additional)
    // ==========================================

    "blink-dog": {
        name: "Blink Dog",
        size: "Medium",
        type: "Fey",
        alignment: "lawful good",
        ac: 13,
        hp: 22,
        hitDice: "4d8+4",
        speed: { walk: 40 },
        abilities: { str: 12, dex: 17, con: 12, int: 10, wis: 13, cha: 11 },
        skills: { perception: 3, stealth: 5 },
        senses: ["passive Perception 13"],
        languages: ["Blink Dog", "understands Sylvan but can't speak it"],
        cr: "1/4",
        xp: 50,
        traits: [
            {
                name: "Keen Hearing and Smell",
                description: "The dog has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            }
        ],
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage."
            },
            {
                name: "Teleport (Recharge 4-6)",
                description: "The dog magically teleports, along with any equipment it is wearing or carrying, up to 40 feet to an unoccupied space it can see. Before or after teleporting, the dog can make one bite attack."
            }
        ]
    },
    "dryad": {
        name: "Dryad",
        size: "Medium",
        type: "Fey",
        alignment: "neutral",
        ac: 11,
        acType: "16 with barkskin",
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 30 },
        abilities: { str: 10, dex: 12, con: 11, int: 14, wis: 15, cha: 18 },
        skills: { perception: 4, stealth: 5 },
        senses: ["darkvision 60 ft.", "passive Perception 14"],
        languages: ["Elvish", "Sylvan"],
        cr: "1",
        xp: 200,
        traits: [
            {
                name: "Innate Spellcasting",
                description: "The dryad's innate spellcasting ability is Charisma (spell save DC 14). The dryad can innately cast the following spells, requiring no material components:\n\nAt will: druidcraft\n3/day each: entangle, goodberry\n1/day each: barkskin, pass without trace, shillelagh"
            },
            {
                name: "Magic Resistance",
                description: "The dryad has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Speak with Beasts and Plants",
                description: "The dryad can communicate with beasts and plants as if they shared a language."
            },
            {
                name: "Tree Stride",
                description: "Once on her turn, the dryad can use 10 feet of her movement to step magically into one living tree within her reach and emerge from a second living tree within 60 feet of the first tree, appearing in an unoccupied space within 5 feet of the second tree. Both trees must be Large or bigger."
            }
        ],
        actions: [
            {
                name: "Club",
                description: "Melee Weapon Attack: +2 to hit (+6 to hit with shillelagh), reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage, or 8 (1d8 + 4) bludgeoning damage with shillelagh."
            },
            {
                name: "Fey Charm",
                description: "The dryad targets one humanoid or beast that she can see within 30 feet of her. If the target can see the dryad, it must succeed on a DC 14 Wisdom saving throw or be magically charmed. The charmed creature regards the dryad as a trusted friend to be heeded and protected. Although the target isn't under the dryad's control, it takes the dryad's requests or actions in the most favorable way it can. Each time the dryad or its allies do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the dryad dies, is on a different plane of existence from the target, or ends the effect as a bonus action. If a target's saving throw is successful, the target is immune to the dryad's Fey Charm for the next 24 hours. The dryad can have no more than one humanoid and up to three beasts charmed at a time."
            }
        ]
    },
    "night-hag": {
        name: "Night Hag",
        size: "Medium",
        type: "Fiend",
        alignment: "neutral evil",
        ac: 17,
        acType: "natural armor",
        hp: 112,
        hitDice: "15d8+45",
        speed: { walk: 30 },
        abilities: { str: 18, dex: 15, con: 16, int: 16, wis: 14, cha: 16 },
        skills: { deception: 7, insight: 6, perception: 6, stealth: 6 },
        damageResistances: ["cold", "fire; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        conditionImmunities: ["charmed"],
        senses: ["darkvision 120 ft.", "passive Perception 16"],
        languages: ["Abyssal", "Common", "Infernal", "Primordial"],
        cr: "5",
        xp: 1800,
        traits: [
            {
                name: "Innate Spellcasting",
                description: "The hag's innate spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). She can innately cast the following spells, requiring no material components:\n\nAt will: detect magic, magic missile\n2/day each: plane shift (self only), ray of enfeeblement, sleep"
            },
            {
                name: "Magic Resistance",
                description: "The hag has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Night Hag Items",
                description: "A night hag carries two very rare magic items that she must craft for herself. If either object is lost, the night hag will go to great lengths to retrieve it, as creating a new tool takes time and effort.\n\nHeartstone. This lustrous black gem allows a night hag to become ethereal while it is in her possession. The touch of a heartstone also cures any disease. Crafting a heartstone takes 30 days.\n\nSoul Bag. When an evil humanoid dies as a result of a night hag's Nightmare Haunting, the hag catches the soul in this black sack made of stitched flesh. A soul bag can hold only one evil soul at a time, and only the night hag who crafted the bag can catch a soul with it. Crafting a soul bag takes 7 days and a humanoid sacrifice (whose flesh is used to make the bag)."
            }
        ],
        actions: [
            {
                name: "Claws (Hag Form Only)",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage."
            },
            {
                name: "Change Shape",
                description: "The hag magically polymorphs into a Small or Medium female humanoid, or back into her true form. Her statistics are the same in each form. Any equipment she is wearing or carrying isn't transformed. She reverts to her true form if she dies."
            },
            {
                name: "Etherealness",
                description: "The hag magically enters the Ethereal Plane from the Material Plane, or vice versa. To do so, the hag must have a heartstone in her possession."
            },
            {
                name: "Nightmare Haunting (1/Day)",
                description: "While on the Ethereal Plane, the hag magically touches a sleeping humanoid on the Material Plane. A protection from evil and good spell cast on the target prevents this contact, as does a magic circle. As long as the contact persists, the target has dreadful visions. If these visions last for at least 1 hour, the target gains no benefit from its rest, and its hit point maximum is reduced by 5 (1d10). If this effect reduces the target's hit point maximum to 0, the target dies, and if the target was evil, its soul is trapped in the hag's soul bag. The reduction to the target's hit point maximum lasts until removed by the greater restoration spell or similar magic."
            }
        ]
    },
    "sea-hag": {
        name: "Sea Hag",
        size: "Medium",
        type: "Fey",
        alignment: "chaotic evil",
        ac: 14,
        acType: "natural armor",
        hp: 52,
        hitDice: "7d8+21",
        speed: { walk: 30, swim: 40 },
        abilities: { str: 16, dex: 13, con: 16, int: 12, wis: 12, cha: 13 },
        senses: ["darkvision 60 ft.", "passive Perception 11"],
        languages: ["Aquan", "Common", "Giant"],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Amphibious",
                description: "The hag can breathe air and water."
            },
            {
                name: "Horrific Appearance",
                description: "Any humanoid that starts its turn within 30 feet of the hag and can see the hag's true form must make a DC 11 Wisdom saving throw. On a failed save, the creature is frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the hag is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the hag's Horrific Appearance for the next 24 hours. Unless the target is surprised or the revelation of the hag's true form is sudden, the target can avert its eyes and avoid making the initial saving throw. Until the start of its next turn, a creature that averts its eyes has disadvantage on attack rolls against the hag."
            }
        ],
        actions: [
            {
                name: "Claws",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage."
            },
            {
                name: "Death Glare",
                description: "The hag targets one frightened creature she can see within 30 feet of her. If the target can see the hag, it must succeed on a DC 11 Wisdom saving throw against this magic or drop to 0 hit points."
            },
            {
                name: "Illusory Appearance",
                description: "The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like an ugly creature of her general size and humanoid shape. The effect ends if the hag takes a bonus action to end it or if she dies. The changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have no claws, but someone touching her hand might feel the claws. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 16 Intelligence (Investigation) check to discern that the hag is disguised."
            }
        ]
    },
    "pixie": {
        name: "Pixie",
        size: "Tiny",
        type: "Fey",
        alignment: "neutral good",
        ac: 15,
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: 10, fly: 30 },
        abilities: { str: 2, dex: 20, con: 8, int: 10, wis: 14, cha: 15 },
        skills: { perception: 4, stealth: 7 },
        senses: ["passive Perception 14"],
        languages: ["Sylvan"],
        cr: "1/4",
        xp: 50,
        traits: [
            {
                name: "Magic Resistance",
                description: "The pixie has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Innate Spellcasting",
                description: "The pixie's innate spellcasting ability is Charisma (spell save DC 12). It can innately cast the following spells, requiring only its pixie dust as a component:\n\nAt will: druidcraft\n1/day each: confusion, dancing lights, detect evil and good, detect thoughts, dispel magic, entangle, fly, phantasmal force, polymorph, sleep"
            }
        ],
        actions: [
            {
                name: "Superior Invisibility",
                description: "The pixie magically turns invisible until its concentration ends (as if concentrating on a spell). Any equipment the pixie wears or carries is invisible with it."
            }
        ]
    },
    "satyr": {
        name: "Satyr",
        size: "Medium",
        type: "Fey",
        alignment: "chaotic neutral",
        ac: 14,
        acType: "leather armor",
        hp: 31,
        hitDice: "7d8",
        speed: { walk: 40 },
        abilities: { str: 12, dex: 16, con: 11, int: 12, wis: 10, cha: 14 },
        skills: { perception: 2, performance: 6, stealth: 5 },
        senses: ["passive Perception 12"],
        languages: ["Common", "Elvish", "Sylvan"],
        cr: "1/2",
        xp: 100,
        traits: [
            {
                name: "Magic Resistance",
                description: "The satyr has advantage on saving throws against spells and other magical effects."
            }
        ],
        actions: [
            {
                name: "Ram",
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) bludgeoning damage."
            },
            {
                name: "Shortsword",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage."
            },
            {
                name: "Shortbow",
                description: "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit: 6 (1d6 + 3) piercing damage."
            }
        ]
    },

    // ==========================================
    // OOZES (Additional)
    // ==========================================

    "black-pudding": {
        name: "Black Pudding",
        size: "Large",
        type: "Ooze",
        alignment: "unaligned",
        ac: 7,
        hp: 85,
        hitDice: "10d10+30",
        speed: { walk: 20, climb: 20 },
        abilities: { str: 16, dex: 5, con: 16, int: 1, wis: 6, cha: 1 },
        damageImmunities: ["acid", "cold", "lightning", "slashing"],
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "prone"],
        senses: ["blindsight 60 ft. (blind beyond this radius)", "passive Perception 8"],
        languages: [],
        cr: "4",
        xp: 1100,
        traits: [
            {
                name: "Amorphous",
                description: "The pudding can move through a space as narrow as 1 inch wide without squeezing."
            },
            {
                name: "Corrosive Form",
                description: "A creature that touches the pudding or hits it with a melee attack while within 5 feet of it takes 4 (1d8) acid damage. Any nonmagical weapon made of metal or wood that hits the pudding corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal or wood that hits the pudding is destroyed after dealing damage. The pudding can eat through 2-inch-thick, nonmagical wood or metal in 1 round."
            },
            {
                name: "Spider Climb",
                description: "The pudding can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            }
        ],
        actions: [
            {
                name: "Pseudopod",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage plus 18 (4d8) acid damage. In addition, nonmagical armor worn by the target is partly dissolved and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10."
            }
        ],
        reactions: [
            {
                name: "Split",
                description: "When a pudding that is Medium or larger is subjected to lightning or slashing damage, it splits into two new puddings if it has at least 10 hit points. Each new pudding has hit points equal to half the original pudding's, rounded down. New puddings are one size smaller than the original pudding."
            }
        ]
    },
    "gray-ooze": {
        name: "Gray Ooze",
        size: "Medium",
        type: "Ooze",
        alignment: "unaligned",
        ac: 8,
        hp: 22,
        hitDice: "3d8+9",
        speed: { walk: 10, climb: 10 },
        abilities: { str: 12, dex: 6, con: 16, int: 1, wis: 6, cha: 2 },
        skills: { stealth: 2 },
        damageResistances: ["acid", "cold", "fire"],
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "prone"],
        senses: ["blindsight 60 ft. (blind beyond this radius)", "passive Perception 8"],
        languages: [],
        cr: "1/2",
        xp: 100,
        traits: [
            {
                name: "Amorphous",
                description: "The ooze can move through a space as narrow as 1 inch wide without squeezing."
            },
            {
                name: "Corrode Metal",
                description: "Any nonmagical weapon made of metal that hits the ooze corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal that hits the ooze is destroyed after dealing damage. The ooze can eat through 2-inch-thick, nonmagical metal in 1 round."
            },
            {
                name: "False Appearance",
                description: "While the ooze remains motionless, it is indistinguishable from an oily pool or wet rock."
            }
        ],
        actions: [
            {
                name: "Pseudopod",
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage plus 7 (2d6) acid damage, and if the target is wearing nonmagical metal armor, its armor is partly corroded and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10."
            }
        ]
    },
    "ochre-jelly": {
        name: "Ochre Jelly",
        size: "Large",
        type: "Ooze",
        alignment: "unaligned",
        ac: 8,
        hp: 45,
        hitDice: "6d10+12",
        speed: { walk: 10, climb: 10 },
        abilities: { str: 15, dex: 6, con: 14, int: 2, wis: 6, cha: 1 },
        damageResistances: ["acid"],
        damageImmunities: ["lightning", "slashing"],
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "prone"],
        senses: ["blindsight 60 ft. (blind beyond this radius)", "passive Perception 8"],
        languages: [],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Amorphous",
                description: "The jelly can move through a space as narrow as 1 inch wide without squeezing."
            },
            {
                name: "Spider Climb",
                description: "The jelly can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            }
        ],
        actions: [
            {
                name: "Pseudopod",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) bludgeoning damage plus 3 (1d6) acid damage."
            }
        ],
        reactions: [
            {
                name: "Split",
                description: "When a jelly that is Medium or larger is subjected to lightning or slashing damage, it splits into two new jellies if it has at least 10 hit points. Each new jelly has hit points equal to half the original jelly's, rounded down. New jellies are one size smaller than the original jelly."
            }
        ]
    },

    // ==========================================
    // PLANTS (Additional)
    // ==========================================

    "awakened-shrub": {
        name: "Awakened Shrub",
        size: "Small",
        type: "Plant",
        alignment: "unaligned",
        ac: 9,
        hp: 10,
        hitDice: "3d6",
        speed: { walk: 20 },
        abilities: { str: 3, dex: 8, con: 11, int: 10, wis: 10, cha: 6 },
        damageVulnerabilities: ["fire"],
        damageResistances: ["piercing"],
        senses: ["passive Perception 10"],
        languages: ["one language known by its creator"],
        cr: "0",
        xp: 10,
        traits: [
            {
                name: "False Appearance",
                description: "While the shrub remains motionless, it is indistinguishable from a normal shrub."
            }
        ],
        actions: [
            {
                name: "Rake",
                description: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 - 1) slashing damage."
            }
        ]
    },
    "awakened-tree": {
        name: "Awakened Tree",
        size: "Huge",
        type: "Plant",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 59,
        hitDice: "7d12+14",
        speed: { walk: 20 },
        abilities: { str: 19, dex: 6, con: 15, int: 10, wis: 10, cha: 7 },
        damageVulnerabilities: ["fire"],
        damageResistances: ["bludgeoning", "piercing"],
        senses: ["passive Perception 10"],
        languages: ["one language known by its creator"],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "False Appearance",
                description: "While the tree remains motionless, it is indistinguishable from a normal tree."
            }
        ],
        actions: [
            {
                name: "Slam",
                description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6 + 4) bludgeoning damage."
            }
        ]
    },
    "shambling-mound": {
        name: "Shambling Mound",
        size: "Large",
        type: "Plant",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 136,
        hitDice: "16d10+48",
        speed: { walk: 20, swim: 20 },
        abilities: { str: 18, dex: 8, con: 16, int: 5, wis: 10, cha: 5 },
        skills: { stealth: 2 },
        damageResistances: ["cold", "fire"],
        damageImmunities: ["lightning"],
        conditionImmunities: ["blinded", "deafened", "exhaustion"],
        senses: ["blindsight 60 ft. (blind beyond this radius)", "passive Perception 10"],
        languages: [],
        cr: "5",
        xp: 1800,
        traits: [
            {
                name: "Lightning Absorption",
                description: "Whenever the shambling mound is subjected to lightning damage, it takes no damage and regains a number of hit points equal to the lightning damage dealt."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The shambling mound makes two slam attacks. If both attacks hit a Medium or smaller target, the target is grappled (escape DC 14), and the shambling mound uses its Engulf on it."
            },
            {
                name: "Slam",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage."
            },
            {
                name: "Engulf",
                description: "The shambling mound engulfs a Medium or smaller creature grappled by it. The engulfed target is blinded, restrained, and unable to breathe, and it must succeed on a DC 14 Constitution saving throw at the start of each of the mound's turns or take 13 (2d8 + 4) bludgeoning damage. If the mound moves, the engulfed target moves with it. The mound can have only one creature engulfed at a time."
            }
        ]
    },
    "violet-fungus": {
        name: "Violet Fungus",
        size: "Medium",
        type: "Plant",
        alignment: "unaligned",
        ac: 5,
        hp: 18,
        hitDice: "4d8",
        speed: { walk: 5 },
        abilities: { str: 3, dex: 1, con: 10, int: 1, wis: 3, cha: 1 },
        conditionImmunities: ["blinded", "deafened", "frightened"],
        senses: ["blindsight 30 ft. (blind beyond this radius)", "passive Perception 6"],
        languages: [],
        cr: "1/4",
        xp: 50,
        traits: [
            {
                name: "False Appearance",
                description: "While the violet fungus remains motionless, it is indistinguishable from an ordinary fungus."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The fungus makes 1d4 Rotting Touch attacks."
            },
            {
                name: "Rotting Touch",
                description: "Melee Weapon Attack: +2 to hit, reach 10 ft., one creature. Hit: 4 (1d8) necrotic damage."
            }
        ]
    },

    // ===== ABERRATIONS =====
    "death-slaad": {
        name: "Death Slaad",
        size: "Medium",
        type: "Aberration",
        subtype: "shapechanger",
        alignment: "chaotic evil",
        ac: 18,
        acType: "natural armor",
        hp: 170,
        hitDice: "20d8+80",
        speed: { walk: 30 },
        abilities: { str: 20, dex: 15, con: 19, int: 15, wis: 10, cha: 16 },
        savingThrows: { con: 8, cha: 7 },
        skills: { arcana: 6, perception: 8 },
        damageResistances: ["acid", "cold", "fire", "lightning", "thunder"],
        senses: ["blindsight 60 ft.", "darkvision 60 ft.", "passive Perception 18"],
        languages: ["Slaad", "telepathy 60 ft."],
        cr: "10",
        xp: 5900,
        traits: [
            {
                name: "Shapechanger",
                description: "The slaad can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                name: "Innate Spellcasting",
                description: "The slaad's innate spellcasting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). The slaad can innately cast the following spells, requiring no material components: At will: detect magic, detect thoughts, invisibility (self only), mage hand, major image; 2/day each: fireball, tongues; 1/day each: cloudkill, plane shift"
            },
            {
                name: "Magic Resistance",
                description: "The slaad has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Magic Weapons",
                description: "The slaad's weapon attacks are magical."
            },
            {
                name: "Regeneration",
                description: "The slaad regains 10 hit points at the start of its turn if it has at least 1 hit point."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The slaad makes three attacks: one with its bite and two with its claws or greatsword."
            },
            {
                name: "Bite (Slaad Form Only)",
                description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) piercing damage plus 7 (2d6) necrotic damage."
            },
            {
                name: "Claws (Slaad Form Only)",
                description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 10 (1d10 + 5) slashing damage plus 7 (2d6) necrotic damage."
            },
            {
                name: "Greatsword",
                description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage plus 7 (2d6) necrotic damage."
            }
        ]
    },
    "star-spawn-mangler": {
        name: "Star Spawn Mangler",
        size: "Medium",
        type: "Aberration",
        alignment: "chaotic evil",
        ac: 14,
        hp: 71,
        hitDice: "13d8+13",
        speed: { walk: 40, climb: 40 },
        abilities: { str: 8, dex: 18, con: 12, int: 11, wis: 12, cha: 7 },
        savingThrows: { dex: 7, con: 4 },
        skills: { stealth: 7 },
        damageResistances: ["cold"],
        damageImmunities: ["psychic"],
        conditionImmunities: ["charmed", "frightened"],
        senses: ["darkvision 60 ft.", "passive Perception 11"],
        languages: ["Deep Speech"],
        cr: "5",
        xp: 1800,
        traits: [
            {
                name: "Ambush",
                description: "On the first round of each combat, the mangler has advantage on attack rolls against any creature that hasn't taken a turn yet."
            },
            {
                name: "Shadow Stealth",
                description: "While in dim light or darkness, the mangler can take the Hide action as a bonus action."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The mangler makes two Claw attacks."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage. If the attack roll has advantage, the target also takes 7 (2d6) psychic damage."
            },
            {
                name: "Flurry of Claws (Recharge 5-6)",
                description: "The mangler makes six Claw attacks against one target. Either before or after these attacks, it can move up to its speed without provoking opportunity attacks."
            }
        ]
    },
    "star-spawn-hulk": {
        name: "Star Spawn Hulk",
        size: "Large",
        type: "Aberration",
        alignment: "chaotic evil",
        ac: 16,
        acType: "natural armor",
        hp: 136,
        hitDice: "13d10+65",
        speed: { walk: 30 },
        abilities: { str: 20, dex: 8, con: 21, int: 7, wis: 12, cha: 9 },
        savingThrows: { dex: 3, wis: 5 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "frightened"],
        senses: ["darkvision 60 ft.", "passive Perception 11"],
        languages: ["Deep Speech"],
        cr: "10",
        xp: 5900,
        traits: [
            {
                name: "Psychic Mirror",
                description: "If the hulk takes psychic damage, each creature within 10 feet of the hulk takes that damage instead; the hulk takes none. In addition, the hulk's thoughts can't be read, and divination spells targeting the hulk automatically fail."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The hulk makes two Slam attacks. If both attacks hit the same target, the target also takes 9 (2d8) psychic damage and must succeed on a DC 17 Constitution saving throw or be stunned until the end of the target's next turn."
            },
            {
                name: "Slam",
                description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage."
            },
            {
                name: "Reaping Arms (Recharge 5-6)",
                description: "The hulk makes a separate Slam attack against each creature within 10 feet of it. Each creature that is hit must also succeed on a DC 17 Dexterity saving throw or be knocked prone."
            }
        ]
    },

    // ===== BEASTS =====
    "axe-beak": {
        name: "Axe Beak",
        size: "Large",
        type: "Beast",
        alignment: "unaligned",
        ac: 11,
        hp: 19,
        hitDice: "3d10+3",
        speed: { walk: 50 },
        abilities: { str: 14, dex: 12, con: 12, int: 2, wis: 10, cha: 5 },
        senses: ["passive Perception 10"],
        languages: [],
        cr: "1/4",
        xp: 50,
        traits: [],
        actions: [
            {
                name: "Beak",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) slashing damage."
            }
        ]
    },
    "flying-snake": {
        name: "Flying Snake",
        size: "Tiny",
        type: "Beast",
        alignment: "unaligned",
        ac: 14,
        hp: 5,
        hitDice: "2d4",
        speed: { walk: 30, fly: 60, swim: 30 },
        abilities: { str: 4, dex: 18, con: 11, int: 2, wis: 12, cha: 5 },
        senses: ["blindsight 10 ft.", "passive Perception 11"],
        languages: [],
        cr: "1/8",
        xp: 25,
        traits: [
            {
                name: "Flyby",
                description: "The snake doesn't provoke opportunity attacks when it flies out of an enemy's reach."
            }
        ],
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 1 piercing damage plus 7 (3d4) poison damage."
            }
        ]
    },
    "giant-wolf-spider": {
        name: "Giant Wolf Spider",
        size: "Medium",
        type: "Beast",
        alignment: "unaligned",
        ac: 13,
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 40, climb: 40 },
        abilities: { str: 12, dex: 16, con: 13, int: 3, wis: 12, cha: 4 },
        skills: { perception: 3, stealth: 7 },
        senses: ["blindsight 10 ft.", "darkvision 60 ft.", "passive Perception 13"],
        languages: [],
        cr: "1/4",
        xp: 50,
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
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 7 (2d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
            }
        ]
    },
    "winter-wolf": {
        name: "Winter Wolf",
        size: "Large",
        type: "Monstrosity",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor",
        hp: 75,
        hitDice: "10d10+20",
        speed: { walk: 50 },
        abilities: { str: 18, dex: 13, con: 14, int: 7, wis: 12, cha: 8 },
        skills: { perception: 5, stealth: 3 },
        damageImmunities: ["cold"],
        senses: ["passive Perception 15"],
        languages: ["Common", "Giant", "Winter Wolf"],
        cr: "3",
        xp: 700,
        traits: [
            {
                name: "Keen Hearing and Smell",
                description: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            },
            {
                name: "Pack Tactics",
                description: "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated."
            },
            {
                name: "Snow Camouflage",
                description: "The wolf has advantage on Dexterity (Stealth) checks made to hide in snowy terrain."
            }
        ],
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone."
            },
            {
                name: "Cold Breath (Recharge 5-6)",
                description: "The wolf exhales a blast of freezing wind in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one."
            }
        ]
    },
    "worg": {
        name: "Worg",
        size: "Large",
        type: "Monstrosity",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor",
        hp: 26,
        hitDice: "4d10+4",
        speed: { walk: 50 },
        abilities: { str: 16, dex: 13, con: 13, int: 7, wis: 11, cha: 8 },
        skills: { perception: 4 },
        senses: ["darkvision 60 ft.", "passive Perception 14"],
        languages: ["Goblin", "Worg"],
        cr: "1/2",
        xp: 100,
        traits: [
            {
                name: "Keen Hearing and Smell",
                description: "The worg has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            }
        ],
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
            }
        ]
    },

    // ===== HUMANOIDS =====
    "bugbear-chief": {
        name: "Bugbear Chief",
        size: "Medium",
        type: "Humanoid",
        subtype: "goblinoid",
        alignment: "chaotic evil",
        ac: 17,
        acType: "chain shirt, shield",
        hp: 65,
        hitDice: "10d8+20",
        speed: { walk: 30 },
        abilities: { str: 17, dex: 14, con: 14, int: 11, wis: 12, cha: 11 },
        skills: { intimidation: 2, stealth: 6, survival: 3 },
        senses: ["darkvision 60 ft.", "passive Perception 11"],
        languages: ["Common", "Goblin"],
        cr: "3",
        xp: 700,
        traits: [
            {
                name: "Brute",
                description: "A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack)."
            },
            {
                name: "Surprise Attack",
                description: "If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage from the attack."
            },
            {
                name: "Heart of Hruggek",
                description: "The bugbear has advantage on saving throws against being charmed, frightened, paralyzed, poisoned, stunned, or put to sleep."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The bugbear makes two melee attacks."
            },
            {
                name: "Morningstar",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 11 (2d8 + 3) piercing damage."
            },
            {
                name: "Javelin",
                description: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 10 (2d6 + 3) piercing damage in melee or 5 (1d6 + 3) piercing damage at range."
            }
        ]
    },
    "drow": {
        name: "Drow",
        size: "Medium",
        type: "Humanoid",
        subtype: "elf",
        alignment: "neutral evil",
        ac: 15,
        acType: "chain shirt",
        hp: 13,
        hitDice: "3d8",
        speed: { walk: 30 },
        abilities: { str: 10, dex: 14, con: 10, int: 11, wis: 11, cha: 12 },
        skills: { perception: 2, stealth: 4 },
        senses: ["darkvision 120 ft.", "passive Perception 12"],
        languages: ["Elvish", "Undercommon"],
        cr: "1/4",
        xp: 50,
        traits: [
            {
                name: "Fey Ancestry",
                description: "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
            },
            {
                name: "Innate Spellcasting",
                description: "The drow's spellcasting ability is Charisma (spell save DC 11). It can innately cast the following spells, requiring no material components: At will: dancing lights; 1/day each: darkness, faerie fire"
            },
            {
                name: "Sunlight Sensitivity",
                description: "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            }
        ],
        actions: [
            {
                name: "Shortsword",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
            },
            {
                name: "Hand Crossbow",
                description: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake."
            }
        ]
    },
    "drow-elite-warrior": {
        name: "Drow Elite Warrior",
        size: "Medium",
        type: "Humanoid",
        subtype: "elf",
        alignment: "neutral evil",
        ac: 18,
        acType: "studded leather, shield",
        hp: 71,
        hitDice: "11d8+22",
        speed: { walk: 30 },
        abilities: { str: 13, dex: 18, con: 14, int: 11, wis: 13, cha: 12 },
        savingThrows: { dex: 7, con: 5, wis: 4 },
        skills: { perception: 4, stealth: 7 },
        senses: ["darkvision 120 ft.", "passive Perception 14"],
        languages: ["Elvish", "Undercommon"],
        cr: "5",
        xp: 1800,
        traits: [
            {
                name: "Fey Ancestry",
                description: "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
            },
            {
                name: "Innate Spellcasting",
                description: "The drow's spellcasting ability is Charisma (spell save DC 12). It can innately cast the following spells, requiring no material components: At will: dancing lights; 1/day each: darkness, faerie fire, levitate (self only)"
            },
            {
                name: "Sunlight Sensitivity",
                description: "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The drow makes two shortsword attacks."
            },
            {
                name: "Shortsword",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) piercing damage plus 10 (3d6) poison damage."
            },
            {
                name: "Hand Crossbow",
                description: "Ranged Weapon Attack: +7 to hit, range 30/120 ft., one target. Hit: 7 (1d6 + 4) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way."
            }
        ],
        reactions: [
            {
                name: "Parry",
                description: "The drow adds 3 to its AC against one melee attack that would hit it. To do so, the drow must see the attacker and be wielding a melee weapon."
            }
        ]
    },
    "drow-mage": {
        name: "Drow Mage",
        size: "Medium",
        type: "Humanoid",
        subtype: "elf",
        alignment: "neutral evil",
        ac: 12,
        acType: "15 with mage armor",
        hp: 45,
        hitDice: "10d8",
        speed: { walk: 30 },
        abilities: { str: 9, dex: 14, con: 10, int: 17, wis: 13, cha: 12 },
        skills: { arcana: 6, deception: 4, perception: 4, stealth: 5 },
        senses: ["darkvision 120 ft.", "passive Perception 14"],
        languages: ["Elvish", "Undercommon"],
        cr: "7",
        xp: 2900,
        traits: [
            {
                name: "Fey Ancestry",
                description: "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
            },
            {
                name: "Innate Spellcasting",
                description: "The drow's innate spellcasting ability is Charisma (spell save DC 12). It can innately cast the following spells, requiring no material components: At will: dancing lights; 1/day each: darkness, faerie fire, levitate (self only)"
            },
            {
                name: "Spellcasting",
                description: "The drow is a 10th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The drow has the following wizard spells prepared: Cantrips (at will): mage hand, minor illusion, poison spray, ray of frost; 1st level (4 slots): mage armor, magic missile, shield, witch bolt; 2nd level (3 slots): alter self, misty step, web; 3rd level (3 slots): fly, lightning bolt; 4th level (3 slots): Evard's black tentacles, greater invisibility; 5th level (2 slots): cloudkill"
            },
            {
                name: "Sunlight Sensitivity",
                description: "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            }
        ],
        actions: [
            {
                name: "Staff",
                description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d6 - 1) bludgeoning damage, or 3 (1d8 - 1) bludgeoning damage if used with two hands, plus 3 (1d6) poison damage."
            },
            {
                name: "Summon Demon (1/Day)",
                description: "The drow magically summons a quasit, or attempts to summon a shadow demon with a 50 percent chance of success. A summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 10 minutes, until it or its summoner dies, or until its summoner dismisses it as an action."
            }
        ]
    },
    "drow-priestess-of-lolth": {
        name: "Drow Priestess of Lolth",
        size: "Medium",
        type: "Humanoid",
        subtype: "elf",
        alignment: "neutral evil",
        ac: 16,
        acType: "scale mail",
        hp: 71,
        hitDice: "13d8+13",
        speed: { walk: 30 },
        abilities: { str: 10, dex: 14, con: 12, int: 13, wis: 17, cha: 18 },
        savingThrows: { con: 4, wis: 6, cha: 7 },
        skills: { insight: 6, perception: 6, religion: 4, stealth: 5 },
        senses: ["darkvision 120 ft.", "passive Perception 16"],
        languages: ["Elvish", "Undercommon"],
        cr: "8",
        xp: 3900,
        traits: [
            {
                name: "Fey Ancestry",
                description: "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
            },
            {
                name: "Innate Spellcasting",
                description: "The drow's innate spellcasting ability is Charisma (spell save DC 15). She can innately cast the following spells, requiring no material components: At will: dancing lights; 1/day each: darkness, faerie fire, levitate (self only)"
            },
            {
                name: "Spellcasting",
                description: "The drow is a 10th-level spellcaster. Her spellcasting ability is Wisdom (spell save DC 14, +6 to hit with spell attacks). The drow has the following cleric spells prepared: Cantrips (at will): guidance, poison spray, resistance, spare the dying, thaumaturgy; 1st level (4 slots): animal friendship, cure wounds, detect poison and disease, ray of sickness; 2nd level (3 slots): lesser restoration, protection from poison, web; 3rd level (3 slots): conjure animals (2 giant spiders), dispel magic; 4th level (3 slots): divination, freedom of movement; 5th level (2 slots): insect plague, mass cure wounds"
            },
            {
                name: "Sunlight Sensitivity",
                description: "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The drow makes two scourge attacks."
            },
            {
                name: "Scourge",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage plus 17 (5d6) poison damage."
            },
            {
                name: "Summon Demon (1/Day)",
                description: "The drow attempts to magically summon a yochlol with a 30 percent chance of success. If the attempt fails, the drow takes 5 (1d10) psychic damage. Otherwise, the summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 10 minutes, until it or its summoner dies, or until its summoner dismisses it as an action."
            }
        ]
    },
    "duergar": {
        name: "Duergar",
        size: "Medium",
        type: "Humanoid",
        subtype: "dwarf",
        alignment: "lawful evil",
        ac: 16,
        acType: "scale mail, shield",
        hp: 26,
        hitDice: "4d8+8",
        speed: { walk: 25 },
        abilities: { str: 14, dex: 11, con: 14, int: 11, wis: 10, cha: 9 },
        damageResistances: ["poison"],
        senses: ["darkvision 120 ft.", "passive Perception 10"],
        languages: ["Dwarvish", "Undercommon"],
        cr: "1",
        xp: 200,
        traits: [
            {
                name: "Duergar Resilience",
                description: "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed."
            },
            {
                name: "Sunlight Sensitivity",
                description: "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            }
        ],
        actions: [
            {
                name: "Enlarge (Recharges after a Short or Long Rest)",
                description: "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
            },
            {
                name: "War Pick",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage, or 11 (2d8 + 2) piercing damage while enlarged."
            },
            {
                name: "Javelin",
                description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 9 (2d6 + 2) piercing damage while enlarged."
            },
            {
                name: "Invisibility (Recharges after a Short or Long Rest)",
                description: "The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it."
            }
        ]
    },
    "gnoll": {
        name: "Gnoll",
        size: "Medium",
        type: "Humanoid",
        subtype: "gnoll",
        alignment: "chaotic evil",
        ac: 15,
        acType: "hide armor, shield",
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 30 },
        abilities: { str: 14, dex: 12, con: 11, int: 6, wis: 10, cha: 7 },
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: ["Gnoll"],
        cr: "1/2",
        xp: 100,
        traits: [
            {
                name: "Rampage",
                description: "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack."
            }
        ],
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage."
            },
            {
                name: "Spear",
                description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage if used with two hands to make a melee attack."
            },
            {
                name: "Longbow",
                description: "Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit: 5 (1d8 + 1) piercing damage."
            }
        ]
    },
    "gnoll-fang-of-yeenoghu": {
        name: "Gnoll Fang of Yeenoghu",
        size: "Medium",
        type: "Fiend",
        subtype: "gnoll",
        alignment: "chaotic evil",
        ac: 14,
        acType: "hide armor",
        hp: 65,
        hitDice: "10d8+20",
        speed: { walk: 30 },
        abilities: { str: 17, dex: 15, con: 15, int: 10, wis: 11, cha: 13 },
        savingThrows: { con: 4, wis: 2, cha: 3 },
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: ["Abyssal", "Gnoll"],
        cr: "4",
        xp: 1100,
        traits: [
            {
                name: "Rampage",
                description: "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The gnoll makes three attacks: one with its bite and two with its claws."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d6 + 3) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or take 7 (2d6) poison damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage."
            }
        ]
    },
    "gnoll-pack-lord": {
        name: "Gnoll Pack Lord",
        size: "Medium",
        type: "Humanoid",
        subtype: "gnoll",
        alignment: "chaotic evil",
        ac: 15,
        acType: "chain shirt",
        hp: 49,
        hitDice: "9d8+9",
        speed: { walk: 30 },
        abilities: { str: 16, dex: 14, con: 13, int: 8, wis: 11, cha: 9 },
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: ["Gnoll"],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Rampage",
                description: "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The gnoll makes two attacks, either with its glaive or its longbow, and uses its Incite Rampage if it can."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4 + 3) piercing damage."
            },
            {
                name: "Glaive",
                description: "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 8 (1d10 + 3) slashing damage."
            },
            {
                name: "Longbow",
                description: "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage."
            },
            {
                name: "Incite Rampage (Recharge 5-6)",
                description: "One creature the gnoll can see within 30 feet of it can use its reaction to make a melee attack if it can hear the gnoll and has the Rampage trait."
            }
        ]
    },
    "goblin-boss": {
        name: "Goblin Boss",
        size: "Small",
        type: "Humanoid",
        subtype: "goblinoid",
        alignment: "neutral evil",
        ac: 17,
        acType: "chain shirt, shield",
        hp: 21,
        hitDice: "6d6",
        speed: { walk: 30 },
        abilities: { str: 10, dex: 14, con: 10, int: 10, wis: 8, cha: 10 },
        skills: { stealth: 6 },
        senses: ["darkvision 60 ft.", "passive Perception 9"],
        languages: ["Common", "Goblin"],
        cr: "1",
        xp: 200,
        traits: [
            {
                name: "Nimble Escape",
                description: "The goblin can take the Disengage or Hide action as a bonus action on each of its turns."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The goblin makes two attacks with its scimitar. The second attack has disadvantage."
            },
            {
                name: "Scimitar",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage."
            },
            {
                name: "Javelin",
                description: "Melee or Ranged Weapon Attack: +2 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 3 (1d6) piercing damage."
            }
        ],
        reactions: [
            {
                name: "Redirect Attack",
                description: "When a creature the goblin can see targets it with an attack, the goblin chooses another goblin within 5 feet of it. The two goblins swap places, and the chosen goblin becomes the target instead."
            }
        ]
    },
    "half-ogre": {
        name: "Half-Ogre",
        size: "Large",
        type: "Giant",
        alignment: "any chaotic alignment",
        ac: 12,
        acType: "hide armor",
        hp: 30,
        hitDice: "4d10+8",
        speed: { walk: 30 },
        abilities: { str: 17, dex: 10, con: 14, int: 7, wis: 9, cha: 10 },
        senses: ["darkvision 60 ft.", "passive Perception 9"],
        languages: ["Common", "Giant"],
        cr: "1",
        xp: 200,
        traits: [],
        actions: [
            {
                name: "Battleaxe",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 12 (2d8 + 3) slashing damage, or 14 (2d10 + 3) slashing damage if used with two hands."
            },
            {
                name: "Javelin",
                description: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 10 (2d6 + 3) piercing damage."
            }
        ]
    },
    "hobgoblin": {
        name: "Hobgoblin",
        size: "Medium",
        type: "Humanoid",
        subtype: "goblinoid",
        alignment: "lawful evil",
        ac: 18,
        acType: "chain mail, shield",
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 30 },
        abilities: { str: 13, dex: 12, con: 12, int: 10, wis: 10, cha: 9 },
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: ["Common", "Goblin"],
        cr: "1/2",
        xp: 100,
        traits: [
            {
                name: "Martial Advantage",
                description: "Once per turn, the hobgoblin can deal an extra 7 (2d6) damage to a creature it hits with a weapon attack if that creature is within 5 feet of an ally of the hobgoblin that isn't incapacitated."
            }
        ],
        actions: [
            {
                name: "Longsword",
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) slashing damage, or 6 (1d10 + 1) slashing damage if used with two hands."
            },
            {
                name: "Longbow",
                description: "Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit: 5 (1d8 + 1) piercing damage."
            }
        ]
    },
    "hobgoblin-captain": {
        name: "Hobgoblin Captain",
        size: "Medium",
        type: "Humanoid",
        subtype: "goblinoid",
        alignment: "lawful evil",
        ac: 17,
        acType: "half plate",
        hp: 39,
        hitDice: "6d8+12",
        speed: { walk: 30 },
        abilities: { str: 15, dex: 14, con: 14, int: 12, wis: 10, cha: 13 },
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: ["Common", "Goblin"],
        cr: "3",
        xp: 700,
        traits: [
            {
                name: "Martial Advantage",
                description: "Once per turn, the hobgoblin can deal an extra 10 (3d6) damage to a creature it hits with a weapon attack if that creature is within 5 feet of an ally of the hobgoblin that isn't incapacitated."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The hobgoblin makes two greatsword attacks."
            },
            {
                name: "Greatsword",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage."
            },
            {
                name: "Javelin",
                description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
            },
            {
                name: "Leadership (Recharges after a Short or Long Rest)",
                description: "For 1 minute, the hobgoblin can utter a special command or warning whenever a nonhostile creature that it can see within 30 feet of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the hobgoblin. A creature can benefit from only one Leadership die at a time. This effect ends if the hobgoblin is incapacitated."
            }
        ]
    },
    "hobgoblin-warlord": {
        name: "Hobgoblin Warlord",
        size: "Medium",
        type: "Humanoid",
        subtype: "goblinoid",
        alignment: "lawful evil",
        ac: 20,
        acType: "plate, shield",
        hp: 97,
        hitDice: "13d8+39",
        speed: { walk: 30 },
        abilities: { str: 16, dex: 14, con: 16, int: 14, wis: 11, cha: 15 },
        savingThrows: { int: 5, wis: 3, cha: 5 },
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: ["Common", "Goblin"],
        cr: "6",
        xp: 2300,
        traits: [
            {
                name: "Martial Advantage",
                description: "Once per turn, the hobgoblin can deal an extra 14 (4d6) damage to a creature it hits with a weapon attack if that creature is within 5 feet of an ally of the hobgoblin that isn't incapacitated."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The hobgoblin makes three melee attacks. Alternatively, it can make two ranged attacks with its javelins."
            },
            {
                name: "Longsword",
                description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
            },
            {
                name: "Shield Bash",
                description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 5 (1d4 + 3) bludgeoning damage. If the target is Large or smaller, it must succeed on a DC 14 Strength saving throw or be knocked prone."
            },
            {
                name: "Javelin",
                description: "Melee or Ranged Weapon Attack: +9 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 6 (1d6 + 3) piercing damage."
            },
            {
                name: "Leadership (Recharges after a Short or Long Rest)",
                description: "For 1 minute, the hobgoblin can utter a special command or warning whenever a nonhostile creature that it can see within 30 feet of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the hobgoblin. A creature can benefit from only one Leadership die at a time. This effect ends if the hobgoblin is incapacitated."
            }
        ],
        reactions: [
            {
                name: "Parry",
                description: "The hobgoblin adds 3 to its AC against one melee attack that would hit it. To do so, the hobgoblin must see the attacker and be wielding a melee weapon."
            }
        ]
    },
    "jackalwere": {
        name: "Jackalwere",
        size: "Medium",
        type: "Humanoid",
        subtype: "shapechanger",
        alignment: "chaotic evil",
        ac: 12,
        hp: 18,
        hitDice: "4d8",
        speed: { walk: 40 },
        abilities: { str: 11, dex: 15, con: 11, int: 13, wis: 11, cha: 10 },
        skills: { deception: 4, perception: 2, stealth: 4 },
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        senses: ["passive Perception 12"],
        languages: ["Common (can't speak in jackal form)"],
        cr: "1/2",
        xp: 100,
        traits: [
            {
                name: "Shapechanger",
                description: "The jackalwere can use its action to polymorph into a specific Medium human or a jackal-humanoid hybrid, or back into its true form (that of a Small jackal). Other than its size, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                name: "Keen Hearing and Smell",
                description: "The jackalwere has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            },
            {
                name: "Pack Tactics",
                description: "The jackalwere has advantage on an attack roll against a creature if at least one of the jackalwere's allies is within 5 feet of the creature and the ally isn't incapacitated."
            }
        ],
        actions: [
            {
                name: "Bite (Jackal or Hybrid Form Only)",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage."
            },
            {
                name: "Scimitar (Human or Hybrid Form Only)",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage."
            },
            {
                name: "Sleep Gaze",
                description: "The jackalwere gazes at one creature it can see within 30 feet of it. The target must make a DC 10 Wisdom saving throw. On a failed save, the target succumbs to a magical slumber, falling unconscious for 10 minutes or until someone uses an action to shake the target awake. A creature that successfully saves against the effect is immune to this jackalwere's gaze for the next 24 hours. Undead and creatures immune to being charmed aren't affected by it."
            }
        ]
    },
    "kobold": {
        name: "Kobold",
        size: "Small",
        type: "Humanoid",
        subtype: "kobold",
        alignment: "lawful evil",
        ac: 12,
        hp: 5,
        hitDice: "2d6-2",
        speed: { walk: 30 },
        abilities: { str: 7, dex: 15, con: 9, int: 8, wis: 7, cha: 8 },
        senses: ["darkvision 60 ft.", "passive Perception 8"],
        languages: ["Common", "Draconic"],
        cr: "1/8",
        xp: 25,
        traits: [
            {
                name: "Sunlight Sensitivity",
                description: "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            },
            {
                name: "Pack Tactics",
                description: "The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't incapacitated."
            }
        ],
        actions: [
            {
                name: "Dagger",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage."
            },
            {
                name: "Sling",
                description: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage."
            }
        ]
    },
    "kuo-toa": {
        name: "Kuo-Toa",
        size: "Medium",
        type: "Humanoid",
        subtype: "kuo-toa",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor, shield",
        hp: 18,
        hitDice: "4d8",
        speed: { walk: 30, swim: 30 },
        abilities: { str: 13, dex: 10, con: 11, int: 11, wis: 10, cha: 8 },
        skills: { perception: 4 },
        senses: ["darkvision 120 ft.", "passive Perception 14"],
        languages: ["Undercommon"],
        cr: "1/4",
        xp: 50,
        traits: [
            {
                name: "Amphibious",
                description: "The kuo-toa can breathe air and water."
            },
            {
                name: "Otherworldly Perception",
                description: "The kuo-toa can sense the presence of any creature within 30 feet of it that is invisible or on the Ethereal Plane. It can pinpoint such a creature that is moving."
            },
            {
                name: "Slippery",
                description: "The kuo-toa has advantage on ability checks and saving throws made to escape a grapple."
            },
            {
                name: "Sunlight Sensitivity",
                description: "While in sunlight, the kuo-toa has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            }
        ],
        actions: [
            {
                name: "Bite",
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) piercing damage."
            },
            {
                name: "Spear",
                description: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack."
            },
            {
                name: "Net",
                description: "Ranged Weapon Attack: +3 to hit, range 5/15 ft., one Large or smaller creature. Hit: The target is restrained. A creature can use its action to make a DC 10 Strength check to free itself or another creature in a net, ending the effect on a success. Dealing 5 slashing damage to the net (AC 10) frees the target without harming it and destroys the net."
            }
        ],
        reactions: [
            {
                name: "Sticky Shield",
                description: "When a creature misses the kuo-toa with a melee weapon attack, the kuo-toa uses its sticky shield to catch the weapon. The attacker must succeed on a DC 11 Strength saving throw, or the weapon becomes stuck to the kuo-toa's shield. If the weapon's wielder can't or won't let go of the weapon, the wielder is grappled while the weapon is stuck. While stuck, the weapon can't be used. A creature can pull the weapon free by taking an action to make a DC 11 Strength check and succeeding."
            }
        ]
    },
    "kuo-toa-archpriest": {
        name: "Kuo-Toa Archpriest",
        size: "Medium",
        type: "Humanoid",
        subtype: "kuo-toa",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor",
        hp: 97,
        hitDice: "13d8+39",
        speed: { walk: 30, swim: 30 },
        abilities: { str: 16, dex: 14, con: 16, int: 13, wis: 16, cha: 14 },
        skills: { perception: 9, religion: 7 },
        senses: ["darkvision 120 ft.", "passive Perception 19"],
        languages: ["Undercommon"],
        cr: "6",
        xp: 2300,
        traits: [
            {
                name: "Amphibious",
                description: "The kuo-toa can breathe air and water."
            },
            {
                name: "Otherworldly Perception",
                description: "The kuo-toa can sense the presence of any creature within 30 feet of it that is invisible or on the Ethereal Plane. It can pinpoint such a creature that is moving."
            },
            {
                name: "Slippery",
                description: "The kuo-toa has advantage on ability checks and saving throws made to escape a grapple."
            },
            {
                name: "Sunlight Sensitivity",
                description: "While in sunlight, the kuo-toa has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            },
            {
                name: "Spellcasting",
                description: "The kuo-toa is a 10th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 14, +6 to hit with spell attacks). The kuo-toa has the following cleric spells prepared: Cantrips (at will): guidance, sacred flame, thaumaturgy; 1st level (4 slots): detect magic, sanctuary, shield of faith; 2nd level (3 slots): hold person, spiritual weapon; 3rd level (3 slots): mass healing word, spirit guardians; 4th level (3 slots): banishment, control water; 5th level (2 slots): mass cure wounds, scrying"
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The kuo-toa makes two melee attacks."
            },
            {
                name: "Scepter",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage plus 14 (4d6) lightning damage."
            },
            {
                name: "Unarmed Strike",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 3) bludgeoning damage."
            }
        ]
    },
    "kuo-toa-whip": {
        name: "Kuo-Toa Whip",
        size: "Medium",
        type: "Humanoid",
        subtype: "kuo-toa",
        alignment: "neutral evil",
        ac: 11,
        acType: "natural armor",
        hp: 65,
        hitDice: "10d8+20",
        speed: { walk: 30, swim: 30 },
        abilities: { str: 14, dex: 10, con: 14, int: 12, wis: 14, cha: 11 },
        skills: { perception: 6, religion: 5 },
        senses: ["darkvision 120 ft.", "passive Perception 16"],
        languages: ["Undercommon"],
        cr: "1",
        xp: 200,
        traits: [
            {
                name: "Amphibious",
                description: "The kuo-toa can breathe air and water."
            },
            {
                name: "Otherworldly Perception",
                description: "The kuo-toa can sense the presence of any creature within 30 feet of it that is invisible or on the Ethereal Plane. It can pinpoint such a creature that is moving."
            },
            {
                name: "Slippery",
                description: "The kuo-toa has advantage on ability checks and saving throws made to escape a grapple."
            },
            {
                name: "Sunlight Sensitivity",
                description: "While in sunlight, the kuo-toa has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            },
            {
                name: "Spellcasting",
                description: "The kuo-toa is a 2nd-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The kuo-toa has the following cleric spells prepared: Cantrips (at will): sacred flame, thaumaturgy; 1st level (3 slots): bane, shield of faith"
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The kuo-toa makes two attacks: one with its bite and one with its pincer staff."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage."
            },
            {
                name: "Pincer Staff",
                description: "Melee Weapon Attack: +4 to hit, reach 10 ft., one target. Hit: 5 (1d6 + 2) piercing damage. If the target is a Medium or smaller creature, it is grappled (escape DC 14). Until this grapple ends, the kuo-toa can't use its pincer staff on another target."
            }
        ]
    },
    "lizardfolk": {
        name: "Lizardfolk",
        size: "Medium",
        type: "Humanoid",
        subtype: "lizardfolk",
        alignment: "neutral",
        ac: 15,
        acType: "natural armor, shield",
        hp: 22,
        hitDice: "4d8+4",
        speed: { walk: 30, swim: 30 },
        abilities: { str: 15, dex: 10, con: 13, int: 7, wis: 12, cha: 7 },
        skills: { perception: 3, stealth: 4, survival: 5 },
        senses: ["passive Perception 13"],
        languages: ["Draconic"],
        cr: "1/2",
        xp: 100,
        traits: [
            {
                name: "Hold Breath",
                description: "The lizardfolk can hold its breath for 15 minutes."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The lizardfolk makes two melee attacks, each one with a different weapon."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
            },
            {
                name: "Heavy Club",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage."
            },
            {
                name: "Javelin",
                description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
            },
            {
                name: "Spiked Shield",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
            }
        ]
    },
    "lizardfolk-king-queen": {
        name: "Lizardfolk King/Queen",
        size: "Medium",
        type: "Humanoid",
        subtype: "lizardfolk",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 78,
        hitDice: "12d8+24",
        speed: { walk: 30, swim: 30 },
        abilities: { str: 17, dex: 12, con: 15, int: 11, wis: 11, cha: 15 },
        savingThrows: { con: 4, wis: 2 },
        skills: { perception: 4, stealth: 5, survival: 4 },
        conditionImmunities: ["frightened"],
        senses: ["darkvision 60 ft.", "passive Perception 14"],
        languages: ["Abyssal", "Draconic"],
        cr: "4",
        xp: 1100,
        traits: [
            {
                name: "Hold Breath",
                description: "The lizardfolk can hold its breath for 15 minutes."
            },
            {
                name: "Skewer",
                description: "Once per turn, when the lizardfolk makes a melee attack with its trident and hits, the target takes an extra 10 (3d6) damage, and the lizardfolk gains temporary hit points equal to the extra damage dealt."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The lizardfolk makes two attacks: one with its bite and one with its claws or trident."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage."
            },
            {
                name: "Claws",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) slashing damage."
            },
            {
                name: "Trident",
                description: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 6 (1d6 + 3) piercing damage, or 7 (1d8 + 3) piercing damage if used with two hands to make a melee attack."
            }
        ]
    },
    "lizardfolk-shaman": {
        name: "Lizardfolk Shaman",
        size: "Medium",
        type: "Humanoid",
        subtype: "lizardfolk",
        alignment: "neutral",
        ac: 13,
        acType: "natural armor",
        hp: 27,
        hitDice: "5d8+5",
        speed: { walk: 30, swim: 30 },
        abilities: { str: 15, dex: 10, con: 13, int: 10, wis: 15, cha: 8 },
        skills: { perception: 4, stealth: 4, survival: 6 },
        senses: ["passive Perception 14"],
        languages: ["Draconic"],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Hold Breath",
                description: "The lizardfolk can hold its breath for 15 minutes."
            },
            {
                name: "Spellcasting (Lizardfolk Form Only)",
                description: "The lizardfolk is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The lizardfolk has the following druid spells prepared: Cantrips (at will): druidcraft, produce flame, thorn whip; 1st level (4 slots): entangle, fog cloud; 2nd level (3 slots): heat metal, spike growth; 3rd level (2 slots): conjure animals (reptiles only), plant growth"
            }
        ],
        actions: [
            {
                name: "Multiattack (Lizardfolk Form Only)",
                description: "The lizardfolk makes two attacks: one with its bite and one with its claws."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
            },
            {
                name: "Claws (Lizardfolk Form Only)",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage."
            },
            {
                name: "Change Shape (Recharges after a Short or Long Rest)",
                description: "The lizardfolk magically polymorphs into a crocodile, remaining in that form for up to 1 hour. It can revert to its true form as a bonus action. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            }
        ]
    },
    "merfolk": {
        name: "Merfolk",
        size: "Medium",
        type: "Humanoid",
        subtype: "merfolk",
        alignment: "neutral",
        ac: 11,
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 10, swim: 40 },
        abilities: { str: 10, dex: 13, con: 12, int: 11, wis: 11, cha: 12 },
        skills: { perception: 2 },
        senses: ["passive Perception 12"],
        languages: ["Aquan", "Common"],
        cr: "1/8",
        xp: 25,
        traits: [
            {
                name: "Amphibious",
                description: "The merfolk can breathe air and water."
            }
        ],
        actions: [
            {
                name: "Spear",
                description: "Melee or Ranged Weapon Attack: +2 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 3 (1d6) piercing damage, or 4 (1d8) piercing damage if used with two hands to make a melee attack."
            }
        ]
    },
    "orc-eye-of-gruumsh": {
        name: "Orc Eye of Gruumsh",
        size: "Medium",
        type: "Humanoid",
        subtype: "orc",
        alignment: "chaotic evil",
        ac: 16,
        acType: "ring mail, shield",
        hp: 45,
        hitDice: "6d8+18",
        speed: { walk: 30 },
        abilities: { str: 16, dex: 12, con: 16, int: 9, wis: 13, cha: 12 },
        skills: { intimidation: 3, religion: 1 },
        senses: ["darkvision 60 ft.", "passive Perception 11"],
        languages: ["Common", "Orc"],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Aggressive",
                description: "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see."
            },
            {
                name: "Gruumsh's Fury",
                description: "The orc deals an extra 4 (1d8) damage when it hits with a weapon attack (included in the attack)."
            },
            {
                name: "Spellcasting",
                description: "The orc is a 3rd-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 11, +3 to hit with spell attacks). The orc has the following cleric spells prepared: Cantrips (at will): guidance, resistance, thaumaturgy; 1st level (4 slots): bless, command; 2nd level (2 slots): augury, spiritual weapon (spear)"
            }
        ],
        actions: [
            {
                name: "Spear",
                description: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 11 (1d6 + 3 plus 1d8) piercing damage, or 12 (1d8 + 3 plus 1d8) piercing damage if used with two hands to make a melee attack."
            }
        ]
    },
    "orc-war-chief": {
        name: "Orc War Chief",
        size: "Medium",
        type: "Humanoid",
        subtype: "orc",
        alignment: "chaotic evil",
        ac: 16,
        acType: "chain mail",
        hp: 93,
        hitDice: "11d8+44",
        speed: { walk: 30 },
        abilities: { str: 18, dex: 12, con: 18, int: 11, wis: 11, cha: 16 },
        savingThrows: { str: 6, con: 6, wis: 2 },
        skills: { intimidation: 5 },
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: ["Common", "Orc"],
        cr: "4",
        xp: 1100,
        traits: [
            {
                name: "Aggressive",
                description: "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see."
            },
            {
                name: "Gruumsh's Fury",
                description: "The orc deals an extra 4 (1d8) damage when it hits with a weapon attack (included in the attacks)."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The orc makes two attacks with its greataxe or its spear."
            },
            {
                name: "Greataxe",
                description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 15 (1d12 + 4 plus 1d8) slashing damage."
            },
            {
                name: "Spear",
                description: "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 12 (1d6 + 4 plus 1d8) piercing damage, or 13 (1d8 + 4 plus 1d8) piercing damage if used with two hands to make a melee attack."
            },
            {
                name: "Battle Cry (1/Day)",
                description: "Each creature of the war chief's choice that is within 30 feet of it, can hear it, and is not already affected by Battle Cry gains advantage on attack rolls until the start of the war chief's next turn. The war chief can then make one attack as a bonus action."
            }
        ]
    },
    "sahuagin": {
        name: "Sahuagin",
        size: "Medium",
        type: "Humanoid",
        subtype: "sahuagin",
        alignment: "lawful evil",
        ac: 12,
        acType: "natural armor",
        hp: 22,
        hitDice: "4d8+4",
        speed: { walk: 30, swim: 40 },
        abilities: { str: 13, dex: 11, con: 12, int: 12, wis: 13, cha: 9 },
        skills: { perception: 5 },
        senses: ["darkvision 120 ft.", "passive Perception 15"],
        languages: ["Sahuagin"],
        cr: "1/2",
        xp: 100,
        traits: [
            {
                name: "Blood Frenzy",
                description: "The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points."
            },
            {
                name: "Limited Amphibiousness",
                description: "The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating."
            },
            {
                name: "Shark Telepathy",
                description: "The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The sahuagin makes two melee attacks: one with its bite and one with its claws or spear."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) piercing damage."
            },
            {
                name: "Claws",
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) slashing damage."
            },
            {
                name: "Spear",
                description: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack."
            }
        ]
    },
    "sahuagin-baron": {
        name: "Sahuagin Baron",
        size: "Large",
        type: "Humanoid",
        subtype: "sahuagin",
        alignment: "lawful evil",
        ac: 16,
        acType: "breastplate",
        hp: 76,
        hitDice: "9d10+27",
        speed: { walk: 30, swim: 50 },
        abilities: { str: 19, dex: 15, con: 16, int: 14, wis: 13, cha: 17 },
        savingThrows: { dex: 5, con: 6, int: 5, wis: 4 },
        skills: { perception: 7 },
        senses: ["darkvision 120 ft.", "passive Perception 17"],
        languages: ["Sahuagin"],
        cr: "5",
        xp: 1800,
        traits: [
            {
                name: "Blood Frenzy",
                description: "The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points."
            },
            {
                name: "Limited Amphibiousness",
                description: "The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating."
            },
            {
                name: "Shark Telepathy",
                description: "The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The sahuagin makes three attacks: one with its bite and two with its claws or trident."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) piercing damage."
            },
            {
                name: "Claws",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
            },
            {
                name: "Trident",
                description: "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack."
            }
        ]
    },
    "sahuagin-priestess": {
        name: "Sahuagin Priestess",
        size: "Medium",
        type: "Humanoid",
        subtype: "sahuagin",
        alignment: "lawful evil",
        ac: 12,
        acType: "natural armor",
        hp: 33,
        hitDice: "6d8+6",
        speed: { walk: 30, swim: 40 },
        abilities: { str: 13, dex: 11, con: 12, int: 12, wis: 14, cha: 13 },
        skills: { perception: 6, religion: 3 },
        senses: ["darkvision 120 ft.", "passive Perception 16"],
        languages: ["Sahuagin"],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Blood Frenzy",
                description: "The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points."
            },
            {
                name: "Limited Amphibiousness",
                description: "The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating."
            },
            {
                name: "Shark Telepathy",
                description: "The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy."
            },
            {
                name: "Spellcasting",
                description: "The sahuagin is a 6th-level spellcaster. Her spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). She has the following cleric spells prepared: Cantrips (at will): guidance, thaumaturgy; 1st level (4 slots): bless, detect magic, guiding bolt; 2nd level (3 slots): hold person, spiritual weapon (trident); 3rd level (3 slots): mass healing word, tongues"
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The sahuagin makes two attacks: one with her bite and one with her claws."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) piercing damage."
            },
            {
                name: "Claws",
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) slashing damage."
            }
        ]
    },
    "troglodyte": {
        name: "Troglodyte",
        size: "Medium",
        type: "Humanoid",
        subtype: "troglodyte",
        alignment: "chaotic evil",
        ac: 11,
        acType: "natural armor",
        hp: 13,
        hitDice: "2d8+4",
        speed: { walk: 30 },
        abilities: { str: 14, dex: 10, con: 14, int: 6, wis: 10, cha: 6 },
        skills: { stealth: 2 },
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: ["Troglodyte"],
        cr: "1/4",
        xp: 50,
        traits: [
            {
                name: "Chameleon Skin",
                description: "The troglodyte has advantage on Dexterity (Stealth) checks made to hide."
            },
            {
                name: "Stench",
                description: "Any creature other than a troglodyte that starts its turn within 5 feet of the troglodyte must succeed on a DC 12 Constitution saving throw or be poisoned until the start of the creature's next turn. On a successful saving throw, the creature is immune to the stench of all troglodytes for 1 hour."
            },
            {
                name: "Sunlight Sensitivity",
                description: "While in sunlight, the troglodyte has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The troglodyte makes three attacks: one with its bite and two with its claws."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage."
            }
        ]
    },
    "werebear": {
        name: "Werebear",
        size: "Medium",
        type: "Humanoid",
        subtype: "human, shapechanger",
        alignment: "neutral good",
        ac: 10,
        acType: "11 in bear or hybrid form, natural armor",
        hp: 135,
        hitDice: "18d8+54",
        speed: { walk: 30 },
        abilities: { str: 19, dex: 10, con: 17, int: 11, wis: 12, cha: 12 },
        skills: { perception: 7 },
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        senses: ["passive Perception 17"],
        languages: ["Common (can't speak in bear form)"],
        cr: "5",
        xp: 1800,
        traits: [
            {
                name: "Shapechanger",
                description: "The werebear can use its action to polymorph into a Large bear-humanoid hybrid or into a Large bear, or back into its true form, which is humanoid. Its statistics, other than its size and AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                name: "Keen Smell",
                description: "The werebear has advantage on Wisdom (Perception) checks that rely on smell."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "In bear form, the werebear makes two claw attacks. In humanoid form, it makes two greataxe attacks. In hybrid form, it can attack like a bear or a humanoid."
            },
            {
                name: "Bite (Bear or Hybrid Form Only)",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) piercing damage. If the target is a humanoid, it must succeed on a DC 14 Constitution saving throw or be cursed with werebear lycanthropy."
            },
            {
                name: "Claw (Bear or Hybrid Form Only)",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage."
            },
            {
                name: "Greataxe (Humanoid or Hybrid Form Only)",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12 + 4) slashing damage."
            }
        ]
    },
    "wereboar": {
        name: "Wereboar",
        size: "Medium",
        type: "Humanoid",
        subtype: "human, shapechanger",
        alignment: "neutral evil",
        ac: 10,
        acType: "11 in boar or hybrid form, natural armor",
        hp: 78,
        hitDice: "12d8+24",
        speed: { walk: 30 },
        abilities: { str: 17, dex: 10, con: 15, int: 10, wis: 11, cha: 8 },
        skills: { perception: 2 },
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        senses: ["passive Perception 12"],
        languages: ["Common (can't speak in boar form)"],
        cr: "4",
        xp: 1100,
        traits: [
            {
                name: "Shapechanger",
                description: "The wereboar can use its action to polymorph into a boar-humanoid hybrid or into a boar, or back into its true form, which is humanoid. Its statistics, other than its size and AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                name: "Charge (Boar or Hybrid Form Only)",
                description: "If the wereboar moves at least 15 feet straight toward a target and then hits it with its tusks on the same turn, the target takes an extra 7 (2d6) slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
            },
            {
                name: "Relentless (Recharges after a Short or Long Rest)",
                description: "If the wereboar takes 14 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."
            }
        ],
        actions: [
            {
                name: "Multiattack (Humanoid or Hybrid Form Only)",
                description: "The wereboar makes two attacks, only one of which can be with its tusks."
            },
            {
                name: "Maul (Humanoid or Hybrid Form Only)",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage."
            },
            {
                name: "Tusks (Boar or Hybrid Form Only)",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with wereboar lycanthropy."
            }
        ]
    },
    "wererat": {
        name: "Wererat",
        size: "Medium",
        type: "Humanoid",
        subtype: "human, shapechanger",
        alignment: "lawful evil",
        ac: 12,
        hp: 33,
        hitDice: "6d8+6",
        speed: { walk: 30 },
        abilities: { str: 10, dex: 15, con: 12, int: 11, wis: 10, cha: 8 },
        skills: { perception: 2, stealth: 4 },
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        senses: ["darkvision 60 ft. (rat form only)", "passive Perception 12"],
        languages: ["Common (can't speak in rat form)"],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Shapechanger",
                description: "The wererat can use its action to polymorph into a rat-humanoid hybrid or into a giant rat, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                name: "Keen Smell",
                description: "The wererat has advantage on Wisdom (Perception) checks that rely on smell."
            }
        ],
        actions: [
            {
                name: "Multiattack (Humanoid or Hybrid Form Only)",
                description: "The wererat makes two attacks, only one of which can be a bite."
            },
            {
                name: "Bite (Rat or Hybrid Form Only)",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage. If the target is a humanoid, it must succeed on a DC 11 Constitution saving throw or be cursed with wererat lycanthropy."
            },
            {
                name: "Shortsword (Humanoid or Hybrid Form Only)",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
            },
            {
                name: "Hand Crossbow (Humanoid or Hybrid Form Only)",
                description: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
            }
        ]
    },
    "weretiger": {
        name: "Weretiger",
        size: "Medium",
        type: "Humanoid",
        subtype: "human, shapechanger",
        alignment: "neutral",
        ac: 12,
        hp: 120,
        hitDice: "16d8+48",
        speed: { walk: 30 },
        abilities: { str: 17, dex: 15, con: 16, int: 10, wis: 13, cha: 11 },
        skills: { perception: 5, stealth: 4 },
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        senses: ["darkvision 60 ft.", "passive Perception 15"],
        languages: ["Common (can't speak in tiger form)"],
        cr: "4",
        xp: 1100,
        traits: [
            {
                name: "Shapechanger",
                description: "The weretiger can use its action to polymorph into a tiger-humanoid hybrid or into a tiger, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                name: "Keen Hearing and Smell",
                description: "The weretiger has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            },
            {
                name: "Pounce (Tiger or Hybrid Form Only)",
                description: "If the weretiger moves at least 15 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the weretiger can make one bite attack against it as a bonus action."
            }
        ],
        actions: [
            {
                name: "Multiattack (Humanoid or Hybrid Form Only)",
                description: "In humanoid form, the weretiger makes two scimitar attacks or two longbow attacks. In hybrid form, it can attack like a humanoid or make two claw attacks."
            },
            {
                name: "Bite (Tiger or Hybrid Form Only)",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage. If the target is a humanoid, it must succeed on a DC 13 Constitution saving throw or be cursed with weretiger lycanthropy."
            },
            {
                name: "Claw (Tiger or Hybrid Form Only)",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage."
            },
            {
                name: "Scimitar (Humanoid or Hybrid Form Only)",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage."
            },
            {
                name: "Longbow (Humanoid or Hybrid Form Only)",
                description: "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage."
            }
        ]
    },
    "werewolf": {
        name: "Werewolf",
        size: "Medium",
        type: "Humanoid",
        subtype: "human, shapechanger",
        alignment: "chaotic evil",
        ac: 11,
        acType: "12 in wolf or hybrid form, natural armor",
        hp: 58,
        hitDice: "9d8+18",
        speed: { walk: 30 },
        abilities: { str: 15, dex: 13, con: 14, int: 10, wis: 11, cha: 10 },
        skills: { perception: 4, stealth: 3 },
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        senses: ["passive Perception 14"],
        languages: ["Common (can't speak in wolf form)"],
        cr: "3",
        xp: 700,
        traits: [
            {
                name: "Shapechanger",
                description: "The werewolf can use its action to polymorph into a wolf-humanoid hybrid or into a wolf, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                name: "Keen Hearing and Smell",
                description: "The werewolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
            }
        ],
        actions: [
            {
                name: "Multiattack (Humanoid or Hybrid Form Only)",
                description: "The werewolf makes two attacks: one with its bite and one with its claws or spear."
            },
            {
                name: "Bite (Wolf or Hybrid Form Only)",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with werewolf lycanthropy."
            },
            {
                name: "Claws (Hybrid Form Only)",
                description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (2d4 + 2) slashing damage."
            },
            {
                name: "Spear (Humanoid Form Only)",
                description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one creature. Hit: 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage if used with two hands to make a melee attack."
            }
        ]
    },
    "yuan-ti-abomination": {
        name: "Yuan-Ti Abomination",
        size: "Large",
        type: "Monstrosity",
        subtype: "shapechanger, yuan-ti",
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 127,
        hitDice: "15d10+45",
        speed: { walk: 40 },
        abilities: { str: 19, dex: 16, con: 17, int: 17, wis: 15, cha: 18 },
        skills: { perception: 5, stealth: 6 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 15"],
        languages: ["Abyssal", "Common", "Draconic"],
        cr: "7",
        xp: 2900,
        traits: [
            {
                name: "Shapechanger",
                description: "The yuan-ti can use its action to polymorph into a Large snake, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It doesn't change form if it dies."
            },
            {
                name: "Innate Spellcasting (Abomination Form Only)",
                description: "The yuan-ti's innate spellcasting ability is Charisma (spell save DC 15). The yuan-ti can innately cast the following spells, requiring no material components: At will: animal friendship (snakes only); 3/day: suggestion; 1/day: fear"
            },
            {
                name: "Magic Resistance",
                description: "The yuan-ti has advantage on saving throws against spells and other magical effects."
            }
        ],
        actions: [
            {
                name: "Multiattack (Abomination Form Only)",
                description: "The yuan-ti makes two ranged attacks or three melee attacks, but can use its bite and constrict attacks only once each."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 7 (1d6 + 4) piercing damage plus 10 (3d6) poison damage."
            },
            {
                name: "Constrict",
                description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage, and the target is grappled (escape DC 14). Until this grapple ends, the target is restrained, and the yuan-ti can't constrict another target."
            },
            {
                name: "Scimitar (Abomination Form Only)",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
            },
            {
                name: "Longbow (Abomination Form Only)",
                description: "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit: 12 (2d8 + 3) piercing damage plus 10 (3d6) poison damage."
            }
        ]
    },
    "yuan-ti-malison": {
        name: "Yuan-Ti Malison",
        size: "Medium",
        type: "Monstrosity",
        subtype: "shapechanger, yuan-ti",
        alignment: "neutral evil",
        ac: 12,
        hp: 66,
        hitDice: "12d8+12",
        speed: { walk: 30 },
        abilities: { str: 16, dex: 14, con: 13, int: 14, wis: 12, cha: 16 },
        skills: { deception: 5, stealth: 4 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 11"],
        languages: ["Abyssal", "Common", "Draconic"],
        cr: "3",
        xp: 700,
        traits: [
            {
                name: "Shapechanger",
                description: "The yuan-ti can use its action to polymorph into a Medium snake, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It doesn't change form if it dies."
            },
            {
                name: "Innate Spellcasting (Yuan-ti Form Only)",
                description: "The yuan-ti's innate spellcasting ability is Charisma (spell save DC 13). The yuan-ti can innately cast the following spells, requiring no material components: At will: animal friendship (snakes only); 3/day: suggestion"
            },
            {
                name: "Magic Resistance",
                description: "The yuan-ti has advantage on saving throws against spells and other magical effects."
            }
        ],
        actions: [
            {
                name: "Multiattack (Yuan-ti Form Only)",
                description: "The yuan-ti makes two ranged attacks or two melee attacks, but can constrict only once."
            },
            {
                name: "Bite",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4 + 3) piercing damage plus 7 (2d6) poison damage."
            },
            {
                name: "Constrict",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage, and the target is grappled (escape DC 13). Until this grapple ends, the target is restrained, and the yuan-ti can't constrict another target."
            },
            {
                name: "Scimitar (Yuan-ti Form Only)",
                description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage."
            },
            {
                name: "Longbow (Yuan-ti Form Only)",
                description: "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage plus 7 (2d6) poison damage."
            }
        ]
    },
    "yuan-ti-pureblood": {
        name: "Yuan-Ti Pureblood",
        size: "Medium",
        type: "Humanoid",
        subtype: "yuan-ti",
        alignment: "neutral evil",
        ac: 11,
        hp: 40,
        hitDice: "9d8",
        speed: { walk: 30 },
        abilities: { str: 11, dex: 12, con: 11, int: 13, wis: 12, cha: 14 },
        skills: { deception: 6, perception: 3, stealth: 3 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 13"],
        languages: ["Abyssal", "Common", "Draconic"],
        cr: "1",
        xp: 200,
        traits: [
            {
                name: "Innate Spellcasting",
                description: "The yuan-ti's spellcasting ability is Charisma (spell save DC 12). The yuan-ti can innately cast the following spells, requiring no material components: At will: animal friendship (snakes only), poison spray; 3/day: suggestion"
            },
            {
                name: "Magic Resistance",
                description: "The yuan-ti has advantage on saving throws against spells and other magical effects."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The yuan-ti makes two melee attacks."
            },
            {
                name: "Scimitar",
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage."
            },
            {
                name: "Shortbow",
                description: "Ranged Weapon Attack: +3 to hit, range 80/320 ft., one target. Hit: 4 (1d6 + 1) piercing damage plus 7 (2d6) poison damage."
            }
        ]
    },

    // ===== MONSTROSITIES =====
    "yuan-ti-anathema": {
        name: "Yuan-Ti Anathema",
        size: "Huge",
        type: "Monstrosity",
        subtype: "shapechanger, yuan-ti",
        alignment: "neutral evil",
        ac: 16,
        acType: "natural armor",
        hp: 189,
        hitDice: "18d12+72",
        speed: { walk: 40, climb: 30, swim: 30 },
        abilities: { str: 23, dex: 13, con: 19, int: 19, wis: 17, cha: 20 },
        savingThrows: { dex: 5, con: 8, wis: 7 },
        skills: { perception: 11, stealth: 5 },
        damageResistances: ["acid", "fire", "lightning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 30 ft.", "darkvision 60 ft.", "passive Perception 21"],
        languages: ["Abyssal", "Common", "Draconic"],
        cr: "12",
        xp: 8400,
        traits: [
            {
                name: "Shapechanger",
                description: "The anathema can use its action to polymorph into a Huge giant constrictor snake, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed."
            },
            {
                name: "Innate Spellcasting (Anathema Form Only)",
                description: "The anathema's innate spellcasting ability is Charisma (spell save DC 17). It can innately cast the following spells, requiring no material components: At will: animal friendship (snakes only); 3/day each: darkness, entangle, fear, haste, suggestion, polymorph; 1/day: divine word"
            },
            {
                name: "Magic Resistance",
                description: "The anathema has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Ophidiophobia Aura",
                description: "Any creature of the anathema's choice, other than a snake or a yuan-ti, that starts its turn within 30 feet of the anathema must succeed on a DC 17 Wisdom saving throw or become frightened of snakes and yuan-ti. A frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to this aura for the next 24 hours."
            },
            {
                name: "Six Heads",
                description: "The anathema has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious."
            }
        ],
        actions: [
            {
                name: "Multiattack (Anathema Form Only)",
                description: "The anathema makes two claw attacks and one constrict attack, or it makes three attacks with its flurry of bites."
            },
            {
                name: "Claw (Anathema Form Only)",
                description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
            },
            {
                name: "Constrict",
                description: "Melee Weapon Attack: +10 to hit, reach 15 ft., one Large or smaller creature. Hit: 16 (3d6 + 6) bludgeoning damage plus 7 (2d6) acid damage, and the target is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the anathema can't constrict another target."
            },
            {
                name: "Flurry of Bites",
                description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one creature. Hit: 15 (2d8 + 6) piercing damage plus 10 (3d6) poison damage."
            }
        ]
    },

    // ===== PLANTS =====
    "needle-blight": {
        name: "Needle Blight",
        size: "Medium",
        type: "Plant",
        alignment: "neutral evil",
        ac: 12,
        acType: "natural armor",
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 30 },
        abilities: { str: 12, dex: 12, con: 13, int: 4, wis: 8, cha: 3 },
        conditionImmunities: ["blinded", "deafened"],
        senses: ["blindsight 60 ft. (blind beyond this radius)", "passive Perception 9"],
        languages: ["understands Common but can't speak"],
        cr: "1/4",
        xp: 50,
        traits: [],
        actions: [
            {
                name: "Claws",
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) piercing damage."
            },
            {
                name: "Needles",
                description: "Ranged Weapon Attack: +3 to hit, range 30/60 ft., one target. Hit: 8 (2d6 + 1) piercing damage."
            }
        ]
    },
    "twig-blight": {
        name: "Twig Blight",
        size: "Small",
        type: "Plant",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor",
        hp: 4,
        hitDice: "1d6+1",
        speed: { walk: 20 },
        abilities: { str: 6, dex: 13, con: 12, int: 4, wis: 8, cha: 3 },
        skills: { stealth: 3 },
        damageVulnerabilities: ["fire"],
        conditionImmunities: ["blinded", "deafened"],
        senses: ["blindsight 60 ft. (blind beyond this radius)", "passive Perception 9"],
        languages: ["understands Common but can't speak"],
        cr: "1/8",
        xp: 25,
        traits: [
            {
                name: "False Appearance",
                description: "While the blight remains motionless, it is indistinguishable from a dead shrub."
            }
        ],
        actions: [
            {
                name: "Claws",
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) piercing damage."
            }
        ]
    },
    "vine-blight": {
        name: "Vine Blight",
        size: "Medium",
        type: "Plant",
        alignment: "neutral evil",
        ac: 12,
        acType: "natural armor",
        hp: 26,
        hitDice: "4d8+8",
        speed: { walk: 10 },
        abilities: { str: 15, dex: 8, con: 14, int: 5, wis: 10, cha: 3 },
        skills: { stealth: 1 },
        conditionImmunities: ["blinded", "deafened"],
        senses: ["blindsight 60 ft. (blind beyond this radius)", "passive Perception 10"],
        languages: ["understands Common but can't speak"],
        cr: "1/2",
        xp: 100,
        traits: [
            {
                name: "False Appearance",
                description: "While the blight remains motionless, it is indistinguishable from a tangle of vines."
            }
        ],
        actions: [
            {
                name: "Constrict",
                description: "Melee Weapon Attack: +4 to hit, reach 10 ft., one target. Hit: 9 (2d6 + 2) bludgeoning damage, and a Large or smaller target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the blight can't constrict another target."
            },
            {
                name: "Entangling Plants (Recharge 5-6)",
                description: "Grasping roots and vines sprout in a 15-foot radius centered on the blight, withering away after 1 minute. For the duration, that area is difficult terrain for nonplant creatures. In addition, each creature of the blight's choice in that area when the plants appear must succeed on a DC 12 Strength saving throw or become restrained. A creature can use its action to make a DC 12 Strength check, freeing itself or another entangled creature within reach on a success."
            }
        ]
    },
    "myconid-adult": {
        name: "Myconid Adult",
        size: "Medium",
        type: "Plant",
        alignment: "lawful neutral",
        ac: 12,
        acType: "natural armor",
        hp: 22,
        hitDice: "4d8+4",
        speed: { walk: 20 },
        abilities: { str: 10, dex: 10, con: 12, int: 10, wis: 13, cha: 7 },
        senses: ["darkvision 120 ft.", "passive Perception 11"],
        languages: [],
        cr: "1/2",
        xp: 100,
        traits: [
            {
                name: "Distress Spores",
                description: "When the myconid takes damage, all other myconids within 240 feet of it can sense its pain."
            },
            {
                name: "Sun Sickness",
                description: "While in sunlight, the myconid has disadvantage on ability checks, attack rolls, and saving throws. The myconid dies if it spends more than 1 hour in direct sunlight."
            }
        ],
        actions: [
            {
                name: "Fist",
                description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (2d4) bludgeoning damage plus 5 (2d4) poison damage."
            },
            {
                name: "Pacifying Spores (3/Day)",
                description: "The myconid ejects spores at one creature it can see within 5 feet of it. The target must succeed on a DC 11 Constitution saving throw or be stunned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            },
            {
                name: "Rapport Spores",
                description: "A 20-foot radius of spores extends from the myconid. These spores can go around corners and affect only creatures with an Intelligence of 2 or higher that aren't undead, constructs, or elementals. Affected creatures can communicate telepathically with one another while they are within 30 feet of each other. The effect lasts for 1 hour."
            }
        ]
    },
    "myconid-sovereign": {
        name: "Myconid Sovereign",
        size: "Large",
        type: "Plant",
        alignment: "lawful neutral",
        ac: 13,
        acType: "natural armor",
        hp: 60,
        hitDice: "8d10+16",
        speed: { walk: 30 },
        abilities: { str: 12, dex: 10, con: 14, int: 13, wis: 15, cha: 10 },
        senses: ["darkvision 120 ft.", "passive Perception 12"],
        languages: [],
        cr: "2",
        xp: 450,
        traits: [
            {
                name: "Distress Spores",
                description: "When the myconid takes damage, all other myconids within 240 feet of it can sense its pain."
            },
            {
                name: "Sun Sickness",
                description: "While in sunlight, the myconid has disadvantage on ability checks, attack rolls, and saving throws. The myconid dies if it spends more than 1 hour in direct sunlight."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The myconid uses either its Hallucination Spores or its Pacifying Spores, then makes a fist attack."
            },
            {
                name: "Fist",
                description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (3d4 + 1) bludgeoning damage plus 7 (3d4) poison damage."
            },
            {
                name: "Animating Spores (3/Day)",
                description: "The myconid targets one corpse of a humanoid or a Large or smaller beast within 5 feet of it and releases spores at the corpse. In 24 hours, the corpse rises as a spore servant. The corpse stays animated for 1d4 + 1 weeks or until destroyed, and it can't be animated again in this way."
            },
            {
                name: "Hallucination Spores",
                description: "The myconid ejects spores at one creature it can see within 5 feet of it. The target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. The poisoned target is incapacitated while it hallucinates. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            },
            {
                name: "Pacifying Spores (3/Day)",
                description: "The myconid ejects spores at one creature it can see within 5 feet of it. The target must succeed on a DC 12 Constitution saving throw or be stunned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            },
            {
                name: "Rapport Spores",
                description: "A 30-foot radius of spores extends from the myconid. These spores can go around corners and affect only creatures with an Intelligence of 2 or higher that aren't undead, constructs, or elementals. Affected creatures can communicate telepathically with one another while they are within 30 feet of each other. The effect lasts for 1 hour."
            }
        ]
    },
    "myconid-sprout": {
        name: "Myconid Sprout",
        size: "Small",
        type: "Plant",
        alignment: "lawful neutral",
        ac: 10,
        hp: 7,
        hitDice: "2d6",
        speed: { walk: 10 },
        abilities: { str: 8, dex: 10, con: 10, int: 8, wis: 11, cha: 5 },
        senses: ["darkvision 120 ft.", "passive Perception 10"],
        languages: [],
        cr: "0",
        xp: 10,
        traits: [
            {
                name: "Distress Spores",
                description: "When the myconid takes damage, all other myconids within 240 feet of it can sense its pain."
            },
            {
                name: "Sun Sickness",
                description: "While in sunlight, the myconid has disadvantage on ability checks, attack rolls, and saving throws. The myconid dies if it spends more than 1 hour in direct sunlight."
            }
        ],
        actions: [
            {
                name: "Fist",
                description: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 - 1) bludgeoning damage plus 2 (1d4) poison damage."
            },
            {
                name: "Rapport Spores",
                description: "A 10-foot radius of spores extends from the myconid. These spores can go around corners and affect only creatures with an Intelligence of 2 or higher that aren't undead, constructs, or elementals. Affected creatures can communicate telepathically with one another while they are within 30 feet of each other. The effect lasts for 1 hour."
            }
        ]
    },
    "shrieker": {
        name: "Shrieker",
        size: "Medium",
        type: "Plant",
        alignment: "unaligned",
        ac: 5,
        hp: 13,
        hitDice: "3d8",
        speed: { walk: 0 },
        abilities: { str: 1, dex: 1, con: 10, int: 1, wis: 3, cha: 1 },
        conditionImmunities: ["blinded", "deafened", "frightened"],
        senses: ["blindsight 30 ft. (blind beyond this radius)", "passive Perception 6"],
        languages: [],
        cr: "0",
        xp: 10,
        traits: [
            {
                name: "False Appearance",
                description: "While the shrieker remains motionless, it is indistinguishable from an ordinary fungus."
            }
        ],
        actions: [],
        reactions: [
            {
                name: "Shriek",
                description: "When bright light or a creature is within 30 feet of the shrieker, it emits a shriek audible within 300 feet of it. The shrieker continues to shriek until the disturbance moves out of range and for 1d4 of the shrieker's turns afterward."
            }
        ]
    },

    // ===== FIENDS =====
    "mezzoloth": {
        name: "Mezzoloth",
        size: "Medium",
        type: "Fiend",
        subtype: "yugoloth",
        alignment: "neutral evil",
        ac: 18,
        acType: "natural armor",
        hp: 75,
        hitDice: "10d8+30",
        speed: { walk: 40 },
        abilities: { str: 18, dex: 11, con: 16, int: 7, wis: 10, cha: 11 },
        skills: { perception: 3 },
        damageResistances: ["cold", "fire", "lightning", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["acid", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 60 ft.", "darkvision 60 ft.", "passive Perception 13"],
        languages: ["Abyssal", "Infernal", "telepathy 60 ft."],
        cr: "5",
        xp: 1800,
        traits: [
            {
                name: "Innate Spellcasting",
                description: "The mezzoloth's innate spellcasting ability is Charisma (spell save DC 11). The mezzoloth can innately cast the following spells, requiring no material components: 2/day each: darkness, dispel magic; 1/day: cloudkill"
            },
            {
                name: "Magic Resistance",
                description: "The mezzoloth has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Magic Weapons",
                description: "The mezzoloth's weapon attacks are magical."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The mezzoloth makes two attacks: one with its claws and one with its trident."
            },
            {
                name: "Claws",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) slashing damage."
            },
            {
                name: "Trident",
                description: "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing damage when used with two hands to make a melee attack."
            },
            {
                name: "Teleport",
                description: "The mezzoloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
            }
        ]
    },
    "nycaloth": {
        name: "Nycaloth",
        size: "Large",
        type: "Fiend",
        subtype: "yugoloth",
        alignment: "neutral evil",
        ac: 18,
        acType: "natural armor",
        hp: 123,
        hitDice: "13d10+52",
        speed: { walk: 40, fly: 60 },
        abilities: { str: 20, dex: 11, con: 19, int: 12, wis: 10, cha: 15 },
        skills: { intimidation: 6, perception: 4, stealth: 4 },
        damageResistances: ["cold", "fire", "lightning", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["acid", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 60 ft.", "darkvision 60 ft.", "passive Perception 14"],
        languages: ["Abyssal", "Infernal", "telepathy 60 ft."],
        cr: "9",
        xp: 5000,
        traits: [
            {
                name: "Innate Spellcasting",
                description: "The nycaloth's innate spellcasting ability is Charisma (spell save DC 14). The nycaloth can innately cast the following spells, requiring no material components: At will: darkness, detect magic, dispel magic, invisibility (self only), mirror image"
            },
            {
                name: "Magic Resistance",
                description: "The nycaloth has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Magic Weapons",
                description: "The nycaloth's weapon attacks are magical."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The nycaloth makes two melee attacks, or it makes one melee attack and teleports before or after the attack."
            },
            {
                name: "Claw",
                description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage. If the target is a creature, it must succeed on a DC 16 Constitution saving throw or take 5 (2d4) slashing damage at the start of each of its turns due to a fiendish wound. Each time the nycaloth hits the wounded target with this attack, the damage dealt by the wound increases by 5 (2d4). Any creature can take an action to stanch the wound with a successful DC 13 Wisdom (Medicine) check. The wound also closes if the target receives magical healing."
            },
            {
                name: "Greataxe",
                description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 18 (2d12 + 5) slashing damage."
            },
            {
                name: "Teleport",
                description: "The nycaloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
            }
        ]
    },
    "ultroloth": {
        name: "Ultroloth",
        size: "Medium",
        type: "Fiend",
        subtype: "yugoloth",
        alignment: "neutral evil",
        ac: 19,
        acType: "natural armor",
        hp: 153,
        hitDice: "18d8+72",
        speed: { walk: 30, fly: 60 },
        abilities: { str: 16, dex: 16, con: 18, int: 18, wis: 15, cha: 19 },
        savingThrows: { int: 9, wis: 7, cha: 9 },
        skills: { intimidation: 9, perception: 7, stealth: 8 },
        damageResistances: ["cold", "fire", "lightning", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["acid", "poison"],
        conditionImmunities: ["charmed", "frightened", "poisoned"],
        senses: ["truesight 120 ft.", "passive Perception 17"],
        languages: ["Abyssal", "Infernal", "telepathy 120 ft."],
        cr: "13",
        xp: 10000,
        traits: [
            {
                name: "Innate Spellcasting",
                description: "The ultroloth's innate spellcasting ability is Charisma (spell save DC 17). The ultroloth can innately cast the following spells, requiring no material components: At will: alter self, clairvoyance, darkness, detect magic, detect thoughts, dispel magic, invisibility (self only), suggestion; 3/day each: dimension door, fear, wall of fire; 1/day each: fire storm, mass suggestion"
            },
            {
                name: "Magic Resistance",
                description: "The ultroloth has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Magic Weapons",
                description: "The ultroloth's weapon attacks are magical."
            }
        ],
        actions: [
            {
                name: "Multiattack",
                description: "The ultroloth can use its Hypnotic Gaze and makes three melee attacks."
            },
            {
                name: "Longsword",
                description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
            },
            {
                name: "Hypnotic Gaze",
                description: "The ultroloth's eyes sparkle with opalescent light as it targets one creature it can see within 30 feet of it. If the target can see the ultroloth, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed until the end of the ultroloth's next turn. The charmed target is stunned. If the target's saving throw is successful, the target is immune to the ultroloth's gaze for the next 24 hours."
            },
            {
                name: "Teleport",
                description: "The ultroloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
            }
        ]
    },
    "arcanaloth": {
        name: "Arcanaloth",
        size: "Medium",
        type: "Fiend",
        subtype: "yugoloth",
        alignment: "neutral evil",
        ac: 17,
        acType: "natural armor",
        hp: 104,
        hitDice: "16d8+32",
        speed: { walk: 30, fly: 30 },
        abilities: { str: 17, dex: 12, con: 14, int: 20, wis: 16, cha: 17 },
        savingThrows: { dex: 5, int: 9, wis: 7, cha: 7 },
        skills: { arcana: 13, deception: 9, insight: 9, perception: 7 },
        damageResistances: ["cold", "fire", "lightning", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["acid", "poison"],
        conditionImmunities: ["charmed", "poisoned"],
        senses: ["truesight 120 ft.", "passive Perception 17"],
        languages: ["all", "telepathy 120 ft."],
        cr: "12",
        xp: 8400,
        traits: [
            {
                name: "Innate Spellcasting",
                description: "The arcanaloth's innate spellcasting ability is Charisma (spell save DC 15). The arcanaloth can innately cast the following spells, requiring no material components: At will: alter self, darkness, heat metal, invisibility (self only), magic missile"
            },
            {
                name: "Magic Resistance",
                description: "The arcanaloth has advantage on saving throws against spells and other magical effects."
            },
            {
                name: "Magic Weapons",
                description: "The arcanaloth's weapon attacks are magical."
            },
            {
                name: "Spellcasting",
                description: "The arcanaloth is a 16th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). The arcanaloth has the following wizard spells prepared: Cantrips (at will): fire bolt, mage hand, minor illusion, prestidigitation; 1st level (4 slots): detect magic, identify, shield, Tenser's floating disk; 2nd level (3 slots): detect thoughts, mirror image, phantasmal force, suggestion; 3rd level (3 slots): counterspell, fear, fireball; 4th level (3 slots): banishment, dimension door; 5th level (2 slots): contact other plane, hold monster; 6th level (1 slot): chain lightning; 7th level (1 slot): finger of death; 8th level (1 slot): mind blank"
            }
        ],
        actions: [
            {
                name: "Claws",
                description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) slashing damage. The target must make a DC 14 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one."
            },
            {
                name: "Teleport",
                description: "The arcanaloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
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
