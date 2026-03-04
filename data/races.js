// D&D 5e SRD Races Data
// Source: https://www.5esrd.com/races/

const RACES = {
    dwarf: {
        name: "Dwarf",
        description: "Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.",
        abilityScoreIncrease: { con: 2 },
        age: "Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.",
        size: "Medium",
        speed: 25,
        traits: [
            {
                name: "Darkvision",
                description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
            },
            {
                name: "Dwarven Resilience",
                description: "You have advantage on saving throws against poison, and you have resistance against poison damage."
            },
            {
                name: "Dwarven Combat Training",
                description: "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer."
            },
            {
                name: "Tool Proficiency",
                description: "You gain proficiency with the artisan's tools of your choice: smith's tools, brewer's supplies, or mason's tools."
            },
            {
                name: "Stonecunning",
                description: "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check."
            }
        ],
        languages: ["Common", "Dwarvish"],
        subraces: {
            hill: {
                name: "Hill Dwarf",
                description: "As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.",
                abilityScoreIncrease: { wis: 1 },
                traits: [
                    {
                        name: "Dwarven Toughness",
                        description: "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level."
                    }
                ]
            },
            mountain: {
                name: "Mountain Dwarf",
                description: "As a mountain dwarf, you're strong and hardy, accustomed to a difficult life in rugged terrain.",
                abilityScoreIncrease: { str: 2 },
                traits: [
                    {
                        name: "Dwarven Armor Training",
                        description: "You have proficiency with light and medium armor."
                    }
                ]
            }
        }
    },
    elf: {
        name: "Elf",
        description: "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.",
        abilityScoreIncrease: { dex: 2 },
        age: "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood around the age of 100 and can live to be 750 years old.",
        size: "Medium",
        speed: 30,
        traits: [
            {
                name: "Darkvision",
                description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
            },
            {
                name: "Keen Senses",
                description: "You have proficiency in the Perception skill."
            },
            {
                name: "Fey Ancestry",
                description: "You have advantage on saving throws against being charmed, and magic can't put you to sleep."
            },
            {
                name: "Trance",
                description: "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep."
            }
        ],
        languages: ["Common", "Elvish"],
        subraces: {
            high: {
                name: "High Elf",
                description: "As a high elf, you have a keen mind and a mastery of at least the basics of magic.",
                abilityScoreIncrease: { int: 1 },
                traits: [
                    {
                        name: "Elf Weapon Training",
                        description: "You have proficiency with the longsword, shortsword, shortbow, and longbow."
                    },
                    {
                        name: "Cantrip",
                        description: "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it."
                    },
                    {
                        name: "Extra Language",
                        description: "You can speak, read, and write one extra language of your choice."
                    }
                ]
            },
            wood: {
                name: "Wood Elf",
                description: "As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly and stealthily through your native forests.",
                abilityScoreIncrease: { wis: 1 },
                speedBonus: 5,
                traits: [
                    {
                        name: "Elf Weapon Training",
                        description: "You have proficiency with the longsword, shortsword, shortbow, and longbow."
                    },
                    {
                        name: "Fleet of Foot",
                        description: "Your base walking speed increases to 35 feet."
                    },
                    {
                        name: "Mask of the Wild",
                        description: "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
                    }
                ]
            },
            dark: {
                name: "Dark Elf (Drow)",
                description: "Descended from an earlier subrace of dark-skinned elves, the drow were banished from the surface world for following the goddess Lolth down the path of evil.",
                abilityScoreIncrease: { cha: 1 },
                traits: [
                    {
                        name: "Superior Darkvision",
                        description: "Your darkvision has a radius of 120 feet."
                    },
                    {
                        name: "Sunlight Sensitivity",
                        description: "You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight."
                    },
                    {
                        name: "Drow Magic",
                        description: "You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once per day. When you reach 5th level, you can also cast the darkness spell once per day. Charisma is your spellcasting ability for these spells."
                    },
                    {
                        name: "Drow Weapon Training",
                        description: "You have proficiency with rapiers, shortswords, and hand crossbows."
                    }
                ]
            }
        }
    },
    halfling: {
        name: "Halfling",
        description: "The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense.",
        abilityScoreIncrease: { dex: 2 },
        age: "A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.",
        size: "Small",
        speed: 25,
        traits: [
            {
                name: "Lucky",
                description: "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll."
            },
            {
                name: "Brave",
                description: "You have advantage on saving throws against being frightened."
            },
            {
                name: "Halfling Nimbleness",
                description: "You can move through the space of any creature that is of a size larger than yours."
            }
        ],
        languages: ["Common", "Halfling"],
        subraces: {
            lightfoot: {
                name: "Lightfoot",
                description: "As a lightfoot halfling, you can easily hide from notice, even using other people as cover.",
                abilityScoreIncrease: { cha: 1 },
                traits: [
                    {
                        name: "Naturally Stealthy",
                        description: "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you."
                    }
                ]
            },
            stout: {
                name: "Stout",
                description: "As a stout halfling, you're hardier than average and have some resistance to poison.",
                abilityScoreIncrease: { con: 1 },
                traits: [
                    {
                        name: "Stout Resilience",
                        description: "You have advantage on saving throws against poison, and you have resistance against poison damage."
                    }
                ]
            }
        }
    },
    human: {
        name: "Human",
        description: "Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.",
        abilityScoreIncrease: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 },
        age: "Humans reach adulthood in their late teens and live less than a century.",
        size: "Medium",
        speed: 30,
        traits: [],
        languages: ["Common"],
        extraLanguages: 1,
        variant: {
            name: "Variant Human",
            description: "If your campaign uses the optional feat rules, your Dungeon Master might allow these variant traits.",
            abilityScoreIncrease: { choice: 2 }, // Choose 2 different abilities to increase by 1
            traits: [
                {
                    name: "Skills",
                    description: "You gain proficiency in one skill of your choice."
                },
                {
                    name: "Feat",
                    description: "You gain one feat of your choice."
                }
            ]
        }
    },
    dragonborn: {
        name: "Dragonborn",
        description: "Born of dragons, as their name proclaims, the dragonborn walk proudly through a world that greets them with fearful incomprehension.",
        abilityScoreIncrease: { str: 2, cha: 1 },
        age: "Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.",
        size: "Medium",
        speed: 30,
        traits: [
            {
                name: "Draconic Ancestry",
                description: "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type."
            },
            {
                name: "Breath Weapon",
                description: "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw. The DC equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can't use it again until you complete a short or long rest."
            },
            {
                name: "Damage Resistance",
                description: "You have resistance to the damage type associated with your draconic ancestry."
            }
        ],
        languages: ["Common", "Draconic"],
        draconicAncestry: [
            { dragon: "Black", damageType: "Acid", breathWeapon: "5 by 30 ft. line (Dex. save)" },
            { dragon: "Blue", damageType: "Lightning", breathWeapon: "5 by 30 ft. line (Dex. save)" },
            { dragon: "Brass", damageType: "Fire", breathWeapon: "5 by 30 ft. line (Dex. save)" },
            { dragon: "Bronze", damageType: "Lightning", breathWeapon: "5 by 30 ft. line (Dex. save)" },
            { dragon: "Copper", damageType: "Acid", breathWeapon: "5 by 30 ft. line (Dex. save)" },
            { dragon: "Gold", damageType: "Fire", breathWeapon: "15 ft. cone (Dex. save)" },
            { dragon: "Green", damageType: "Poison", breathWeapon: "15 ft. cone (Con. save)" },
            { dragon: "Red", damageType: "Fire", breathWeapon: "15 ft. cone (Dex. save)" },
            { dragon: "Silver", damageType: "Cold", breathWeapon: "15 ft. cone (Con. save)" },
            { dragon: "White", damageType: "Cold", breathWeapon: "15 ft. cone (Con. save)" }
        ]
    },
    gnome: {
        name: "Gnome",
        description: "A gnome's energy and enthusiasm for living shines through every inch of his or her tiny body.",
        abilityScoreIncrease: { int: 2 },
        age: "Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.",
        size: "Small",
        speed: 25,
        traits: [
            {
                name: "Darkvision",
                description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
            },
            {
                name: "Gnome Cunning",
                description: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."
            }
        ],
        languages: ["Common", "Gnomish"],
        subraces: {
            forest: {
                name: "Forest Gnome",
                description: "As a forest gnome, you have a natural knack for illusion and inherent quickness and stealth.",
                abilityScoreIncrease: { dex: 1 },
                traits: [
                    {
                        name: "Natural Illusionist",
                        description: "You know the minor illusion cantrip. Intelligence is your spellcasting ability for it."
                    },
                    {
                        name: "Speak with Small Beasts",
                        description: "Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts."
                    }
                ]
            },
            rock: {
                name: "Rock Gnome",
                description: "As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes.",
                abilityScoreIncrease: { con: 1 },
                traits: [
                    {
                        name: "Artificer's Lore",
                        description: "Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply."
                    },
                    {
                        name: "Tinker",
                        description: "You have proficiency with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device."
                    }
                ]
            }
        }
    },
    halfElf: {
        name: "Half-Elf",
        description: "Half-elves combine what some say are the best qualities of their elf and human parents.",
        abilityScoreIncrease: { cha: 2, choice: 2 }, // +2 CHA, +1 to two other abilities of choice
        age: "Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.",
        size: "Medium",
        speed: 30,
        traits: [
            {
                name: "Darkvision",
                description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
            },
            {
                name: "Fey Ancestry",
                description: "You have advantage on saving throws against being charmed, and magic can't put you to sleep."
            },
            {
                name: "Skill Versatility",
                description: "You gain proficiency in two skills of your choice."
            }
        ],
        languages: ["Common", "Elvish"],
        extraLanguages: 1
    },
    halfOrc: {
        name: "Half-Orc",
        description: "Half-orcs' grayish pigmentation, sloping foreheads, jutting jaws, prominent teeth, and towering builds make their orcish heritage plain for all to see.",
        abilityScoreIncrease: { str: 2, con: 1 },
        age: "Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.",
        size: "Medium",
        speed: 30,
        traits: [
            {
                name: "Darkvision",
                description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
            },
            {
                name: "Menacing",
                description: "You gain proficiency in the Intimidation skill."
            },
            {
                name: "Relentless Endurance",
                description: "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest."
            },
            {
                name: "Savage Attacks",
                description: "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."
            }
        ],
        languages: ["Common", "Orc"]
    },
    tiefling: {
        name: "Tiefling",
        description: "To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling.",
        abilityScoreIncrease: { int: 1, cha: 2 },
        age: "Tieflings mature at the same rate as humans but live a few years longer.",
        size: "Medium",
        speed: 30,
        traits: [
            {
                name: "Darkvision",
                description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
            },
            {
                name: "Hellish Resistance",
                description: "You have resistance to fire damage."
            },
            {
                name: "Infernal Legacy",
                description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells."
            }
        ],
        languages: ["Common", "Infernal"]
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RACES;
}
