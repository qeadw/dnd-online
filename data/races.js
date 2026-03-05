// D&D 5e SRD Races Data
// Source: https://www.5esrd.com/races/
// Complete implementation with all SRD races and subraces

const RACES = {
    dwarf: {
        name: "Dwarf",
        description: "Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. They are a stoic but stern race, ensconced in cities carved from the hearts of mountains and fiercely determined to repel the depredations of savage races like orcs and goblins.",
        abilityScoreIncrease: { con: 2 },
        age: "Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.",
        alignment: "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",
        size: "Medium",
        sizeDescription: "Dwarves stand between 4 and 5 feet tall and average about 150 pounds.",
        speed: 25,
        speedDescription: "Your speed is not reduced by wearing heavy armor.",
        traits: [
            {
                name: "Darkvision",
                description: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
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
                description: "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."
            }
        ],
        weaponProficiencies: ["battleaxe", "handaxe", "light hammer", "warhammer"],
        toolProficiencyChoices: ["smith's tools", "brewer's supplies", "mason's tools"],
        resistances: ["poison"],
        savingThrowAdvantages: ["poison"],
        languages: ["Common", "Dwarvish"],
        subraces: {
            hill: {
                name: "Hill Dwarf",
                description: "As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience. The gold dwarves of Faerun in their mighty southern kingdom are hill dwarves, as are the exiled Neidar and the debased Klar of Krynn in the Dragonlance setting.",
                abilityScoreIncrease: { wis: 1 },
                traits: [
                    {
                        name: "Dwarven Toughness",
                        description: "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level."
                    }
                ],
                hitPointBonus: 1,
                hitPointBonusPerLevel: true
            },
            mountain: {
                name: "Mountain Dwarf",
                description: "As a mountain dwarf, you're strong and hardy, accustomed to a difficult life in rugged terrain. You're probably on the tall side (for a dwarf), and tend toward lighter coloration. The shield dwarves of northern Faerun, as well as the ruling Hylar clan and the noble Daewar clan of Dragonlance, are mountain dwarves.",
                abilityScoreIncrease: { str: 2 },
                traits: [
                    {
                        name: "Dwarven Armor Training",
                        description: "You have proficiency with light and medium armor."
                    }
                ],
                armorProficiencies: ["light", "medium"]
            }
        }
    },
    elf: {
        name: "Elf",
        description: "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze.",
        abilityScoreIncrease: { dex: 2 },
        age: "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
        alignment: "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not.",
        size: "Medium",
        sizeDescription: "Elves range from under 5 to over 6 feet tall and have slender builds.",
        speed: 30,
        traits: [
            {
                name: "Darkvision",
                description: "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
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
                description: "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is \"trance.\") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep."
            }
        ],
        skillProficiencies: ["Perception"],
        savingThrowAdvantages: ["charmed"],
        immunities: ["magical sleep"],
        languages: ["Common", "Elvish"],
        subraces: {
            high: {
                name: "High Elf",
                description: "As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many of the worlds of D&D, there are two kinds of high elves. One type is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type is more common and more friendly, and often encountered among humans and other races.",
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
                ],
                weaponProficiencies: ["longsword", "shortsword", "shortbow", "longbow"],
                spellcasting: {
                    ability: "int",
                    cantrips: {
                        count: 1,
                        list: "wizard"
                    }
                },
                extraLanguages: 1
            },
            wood: {
                name: "Wood Elf",
                description: "As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly and stealthily through your native forests. This category includes the wild elves (grugach) of Greyhawk and the Kagonesti of Dragonlance, as well as the races called wood elves in Greyhawk and the Forgotten Realms.",
                abilityScoreIncrease: { wis: 1 },
                speed: 35,
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
                ],
                weaponProficiencies: ["longsword", "shortsword", "shortbow", "longbow"]
            },
            dark: {
                name: "Dark Elf (Drow)",
                description: "Descended from an earlier subrace of dark-skinned elves, the drow were banished from the surface world for following the goddess Lolth down the path of evil and corruption. Now they have built their own civilization in the depths of the Underdark, patterned after the Way of Lolth. Also called dark elves, the drow have black skin that resembles polished obsidian and stark white or pale yellow hair. They commonly have very pale eyes in shades of lilac, silver, pink, red, and blue.",
                abilityScoreIncrease: { cha: 1 },
                darkvision: 120,
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
                ],
                weaponProficiencies: ["rapier", "shortsword", "hand crossbow"],
                spellcasting: {
                    ability: "cha",
                    innate: true,
                    spells: [
                        { name: "dancing lights", type: "cantrip", level: 1 },
                        { name: "faerie fire", type: "spell", level: 3, uses: 1, recharge: "long rest" },
                        { name: "darkness", type: "spell", level: 5, uses: 1, recharge: "long rest" }
                    ]
                },
                sunlightSensitivity: true
            }
        }
    },
    halfling: {
        name: "Halfling",
        description: "The comforts of home are the goals of most halflings' lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies; a blazing fire and a generous meal; fine drink and fine conversation. Though some halflings live out their days in remote agricultural communities, others form nomadic bands that travel constantly, lured by the open road and the wide horizon to discover the wonders of new lands and peoples.",
        abilityScoreIncrease: { dex: 2 },
        age: "A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.",
        alignment: "Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.",
        size: "Small",
        sizeDescription: "Halflings average about 3 feet tall and weigh about 40 pounds.",
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
        savingThrowAdvantages: ["frightened"],
        languages: ["Common", "Halfling"],
        subraces: {
            lightfoot: {
                name: "Lightfoot",
                description: "As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You're inclined to be affable and get along well with others. In the Forgotten Realms, lightfoot halflings have spread the farthest and thus are the most common variety. Lightfoots are more prone to wanderlust than other halflings, and often dwell alongside other races or take up a nomadic life.",
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
                description: "As a stout halfling, you're hardier than average and have some resistance to poison. Some say that stouts have dwarven blood. In the Forgotten Realms, these halflings are called stronghearts, and they're most common in the south.",
                abilityScoreIncrease: { con: 1 },
                traits: [
                    {
                        name: "Stout Resilience",
                        description: "You have advantage on saving throws against poison, and you have resistance against poison damage."
                    }
                ],
                resistances: ["poison"],
                savingThrowAdvantages: ["poison"]
            }
        }
    },
    human: {
        name: "Human",
        description: "In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that's why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.",
        abilityScoreIncrease: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 },
        age: "Humans reach adulthood in their late teens and live less than a century.",
        alignment: "Humans tend toward no particular alignment. The best and the worst are found among them.",
        size: "Medium",
        sizeDescription: "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall.",
        speed: 30,
        traits: [],
        languages: ["Common"],
        extraLanguages: 1,
        extraLanguagesDescription: "You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects.",
        variant: {
            name: "Variant Human",
            description: "If your campaign uses the optional feat rules from the Player's Handbook, your Dungeon Master might allow these variant traits, which replace the human's Ability Score Increase trait.",
            abilityScoreIncrease: { choice: 2 },
            abilityScoreIncreaseDescription: "Two different ability scores of your choice increase by 1.",
            traits: [
                {
                    name: "Skills",
                    description: "You gain proficiency in one skill of your choice."
                },
                {
                    name: "Feat",
                    description: "You gain one feat of your choice."
                }
            ],
            skillProficiencyChoices: 1,
            featChoice: true,
            availableFeats: [
                "Alert",
                "Athlete",
                "Actor",
                "Charger",
                "Crossbow Expert",
                "Defensive Duelist",
                "Dual Wielder",
                "Dungeon Delver",
                "Durable",
                "Elemental Adept",
                "Grappler",
                "Great Weapon Master",
                "Healer",
                "Heavily Armored",
                "Heavy Armor Master",
                "Inspiring Leader",
                "Keen Mind",
                "Lightly Armored",
                "Linguist",
                "Lucky",
                "Mage Slayer",
                "Magic Initiate",
                "Martial Adept",
                "Medium Armor Master",
                "Mobile",
                "Moderately Armored",
                "Mounted Combatant",
                "Observant",
                "Polearm Master",
                "Resilient",
                "Ritual Caster",
                "Savage Attacker",
                "Sentinel",
                "Sharpshooter",
                "Shield Master",
                "Skilled",
                "Skulker",
                "Spell Sniper",
                "Tavern Brawler",
                "Tough",
                "War Caster",
                "Weapon Master"
            ]
        }
    },
    dragonborn: {
        name: "Dragonborn",
        description: "Born of dragons, as their name proclaims, the dragonborn walk proudly through a world that greets them with fearful incomprehension. Shaped by draconic gods or the dragons themselves, dragonborn originally hatched from dragon eggs as a unique race, combining the best attributes of dragons and humanoids. Some dragonborn are faithful servants to true dragons, others form the ranks of soldiers in great wars, and still others find themselves adrift, with no clear calling in life.",
        abilityScoreIncrease: { str: 2, cha: 1 },
        age: "Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.",
        alignment: "Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.",
        size: "Medium",
        sizeDescription: "Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds.",
        speed: 30,
        traits: [
            {
                name: "Draconic Ancestry",
                description: "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table."
            },
            {
                name: "Breath Weapon",
                description: "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can't use it again until you complete a short or long rest."
            },
            {
                name: "Damage Resistance",
                description: "You have resistance to the damage type associated with your draconic ancestry."
            }
        ],
        breathWeapon: {
            usesPerRest: 1,
            restType: "short",
            baseDamage: "2d6",
            damageScaling: [
                { level: 1, damage: "2d6" },
                { level: 6, damage: "3d6" },
                { level: 11, damage: "4d6" },
                { level: 16, damage: "5d6" }
            ],
            dcCalculation: "8 + Constitution modifier + proficiency bonus"
        },
        languages: ["Common", "Draconic"],
        draconicAncestry: {
            black: {
                name: "Black",
                damageType: "Acid",
                breathWeapon: {
                    shape: "line",
                    size: "5 by 30 ft.",
                    savingThrow: "Dexterity"
                },
                resistance: "acid"
            },
            blue: {
                name: "Blue",
                damageType: "Lightning",
                breathWeapon: {
                    shape: "line",
                    size: "5 by 30 ft.",
                    savingThrow: "Dexterity"
                },
                resistance: "lightning"
            },
            brass: {
                name: "Brass",
                damageType: "Fire",
                breathWeapon: {
                    shape: "line",
                    size: "5 by 30 ft.",
                    savingThrow: "Dexterity"
                },
                resistance: "fire"
            },
            bronze: {
                name: "Bronze",
                damageType: "Lightning",
                breathWeapon: {
                    shape: "line",
                    size: "5 by 30 ft.",
                    savingThrow: "Dexterity"
                },
                resistance: "lightning"
            },
            copper: {
                name: "Copper",
                damageType: "Acid",
                breathWeapon: {
                    shape: "line",
                    size: "5 by 30 ft.",
                    savingThrow: "Dexterity"
                },
                resistance: "acid"
            },
            gold: {
                name: "Gold",
                damageType: "Fire",
                breathWeapon: {
                    shape: "cone",
                    size: "15 ft.",
                    savingThrow: "Dexterity"
                },
                resistance: "fire"
            },
            green: {
                name: "Green",
                damageType: "Poison",
                breathWeapon: {
                    shape: "cone",
                    size: "15 ft.",
                    savingThrow: "Constitution"
                },
                resistance: "poison"
            },
            red: {
                name: "Red",
                damageType: "Fire",
                breathWeapon: {
                    shape: "cone",
                    size: "15 ft.",
                    savingThrow: "Dexterity"
                },
                resistance: "fire"
            },
            silver: {
                name: "Silver",
                damageType: "Cold",
                breathWeapon: {
                    shape: "cone",
                    size: "15 ft.",
                    savingThrow: "Constitution"
                },
                resistance: "cold"
            },
            white: {
                name: "White",
                damageType: "Cold",
                breathWeapon: {
                    shape: "cone",
                    size: "15 ft.",
                    savingThrow: "Constitution"
                },
                resistance: "cold"
            }
        },
        // Legacy array format for backward compatibility
        draconicAncestryList: [
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
        description: "A gnome's energy and enthusiasm for living shines through every inch of his or her tiny body. Gnomes average slightly over 3 feet tall and weigh 40 to 45 pounds. Their tan or brown faces are usually adorned with broad smiles (beneath their prodigious noses), and their bright eyes shine with excitement. Their fair hair has a tendency to stick out in every direction, as if expressing the gnome's insatiable interest in everything around.",
        abilityScoreIncrease: { int: 2 },
        age: "Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.",
        alignment: "Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.",
        size: "Small",
        sizeDescription: "Gnomes are between 3 and 4 feet tall and average about 40 pounds.",
        speed: 25,
        traits: [
            {
                name: "Darkvision",
                description: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
            },
            {
                name: "Gnome Cunning",
                description: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."
            }
        ],
        savingThrowAdvantages: ["magic (Intelligence)", "magic (Wisdom)", "magic (Charisma)"],
        languages: ["Common", "Gnomish"],
        subraces: {
            forest: {
                name: "Forest Gnome",
                description: "As a forest gnome, you have a natural knack for illusion and inherent quickness and stealth. In the worlds of D&D, forest gnomes are rare and secretive. They gather in hidden communities in sylvan forests, using illusions and trickery to conceal themselves from threats or to mask their escape should they be detected.",
                abilityScoreIncrease: { dex: 1 },
                traits: [
                    {
                        name: "Natural Illusionist",
                        description: "You know the minor illusion cantrip. Intelligence is your spellcasting ability for it."
                    },
                    {
                        name: "Speak with Small Beasts",
                        description: "Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Forest gnomes love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets."
                    }
                ],
                spellcasting: {
                    ability: "int",
                    innate: true,
                    cantrips: ["minor illusion"]
                }
            },
            rock: {
                name: "Rock Gnome",
                description: "As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes. Most gnomes in the worlds of D&D are rock gnomes, including the tinker gnomes of the Dragonlance setting.",
                abilityScoreIncrease: { con: 1 },
                traits: [
                    {
                        name: "Artificer's Lore",
                        description: "Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply."
                    },
                    {
                        name: "Tinker",
                        description: "You have proficiency with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. When you create a device, choose one of the following options: Clockwork Toy, Fire Starter, or Music Box."
                    }
                ],
                toolProficiencies: ["tinker's tools"],
                tinkerDevices: [
                    {
                        name: "Clockwork Toy",
                        description: "This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents."
                    },
                    {
                        name: "Fire Starter",
                        description: "The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action."
                    },
                    {
                        name: "Music Box",
                        description: "When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed."
                    }
                ]
            }
        }
    },
    halfElf: {
        name: "Half-Elf",
        description: "Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities of their elf and human parents: human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves. Some half-elves live among humans, set apart by their emotional and physical differences, watching friends and loved ones age while time barely touches them. Others live with the elves, growing restless as they reach adulthood in the timeless elven realms, while their peers continue to live as children.",
        abilityScoreIncrease: { cha: 2 },
        abilityScoreIncreaseChoice: {
            count: 2,
            amount: 1,
            exclude: ["cha"],
            description: "Two other ability scores of your choice increase by 1."
        },
        age: "Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.",
        alignment: "Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others' demands, and sometimes prove unreliable, or at least unpredictable.",
        size: "Medium",
        sizeDescription: "Half-elves are about the same size as humans, ranging from 5 to 6 feet tall.",
        speed: 30,
        traits: [
            {
                name: "Darkvision",
                description: "Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
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
        savingThrowAdvantages: ["charmed"],
        immunities: ["magical sleep"],
        skillProficiencyChoices: {
            count: 2,
            from: "any",
            description: "You gain proficiency in two skills of your choice."
        },
        availableSkills: [
            "Acrobatics",
            "Animal Handling",
            "Arcana",
            "Athletics",
            "Deception",
            "History",
            "Insight",
            "Intimidation",
            "Investigation",
            "Medicine",
            "Nature",
            "Perception",
            "Performance",
            "Persuasion",
            "Religion",
            "Sleight of Hand",
            "Stealth",
            "Survival"
        ],
        languages: ["Common", "Elvish"],
        extraLanguages: 1,
        extraLanguagesDescription: "You can speak, read, and write Common, Elvish, and one extra language of your choice."
    },
    halfOrc: {
        name: "Half-Orc",
        description: "Whether united under the leadership of a mighty warlock or having fought to a standstill after years of conflict, orc and human tribes sometimes form alliances, joining forces into a larger horde to the terror of civilized lands nearby. When these alliances are sealed by marriages, half-orcs are born. Some half-orcs rise to become proud chiefs of orc tribes, their human blood giving them an edge over their full-blooded orc rivals. Some venture into the world to prove their worth among humans and other more civilized races. Many of these become adventurers, achieving greatness for their mighty deeds and notoriety for their barbaric customs and savage fury.",
        abilityScoreIncrease: { str: 2, con: 1 },
        age: "Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.",
        alignment: "Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live out their lives among them are usually evil.",
        size: "Medium",
        sizeDescription: "Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall.",
        speed: 30,
        traits: [
            {
                name: "Darkvision",
                description: "Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
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
        skillProficiencies: ["Intimidation"],
        specialAbilities: {
            relentlessEndurance: {
                name: "Relentless Endurance",
                usesPerRest: 1,
                restType: "long",
                trigger: "reduced to 0 hp but not killed outright",
                effect: "drop to 1 hp instead"
            },
            savageAttacks: {
                name: "Savage Attacks",
                trigger: "critical hit with melee weapon",
                effect: "roll one additional weapon damage die"
            }
        },
        languages: ["Common", "Orc"]
    },
    tiefling: {
        name: "Tiefling",
        description: "To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling. And to twist the knife, tieflings know that this is because a pact struck generations ago infused the essence of Asmodeus - overlord of the Nine Hells - into their bloodline. Their appearance and their nature are not their fault but the result of an ancient sin, for which they and their children and their children's children will always be held accountable.",
        abilityScoreIncrease: { int: 1, cha: 2 },
        age: "Tieflings mature at the same rate as humans but live a few years longer.",
        alignment: "Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment.",
        size: "Medium",
        sizeDescription: "Tieflings are about the same size and build as humans.",
        speed: 30,
        traits: [
            {
                name: "Darkvision",
                description: "Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
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
        resistances: ["fire"],
        spellcasting: {
            ability: "cha",
            innate: true,
            spells: [
                {
                    name: "thaumaturgy",
                    type: "cantrip",
                    level: 1,
                    description: "You manifest a minor wonder, a sign of supernatural power."
                },
                {
                    name: "hellish rebuke",
                    type: "spell",
                    spellLevel: 2,
                    characterLevel: 3,
                    uses: 1,
                    recharge: "long rest",
                    description: "You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a Dexterity saving throw. It takes 3d10 fire damage on a failed save, or half as much damage on a successful one."
                },
                {
                    name: "darkness",
                    type: "spell",
                    spellLevel: 2,
                    characterLevel: 5,
                    uses: 1,
                    recharge: "long rest",
                    description: "Magical darkness spreads from a point you choose within range to fill a 15-foot-radius sphere for the duration. The darkness spreads around corners. A creature with darkvision can't see through this darkness, and nonmagical light can't illuminate it."
                }
            ]
        },
        languages: ["Common", "Infernal"]
    }
};

// Helper function to get all races as an array
function getAllRaces() {
    return Object.values(RACES);
}

// Helper function to get race by key
function getRace(raceKey) {
    return RACES[raceKey] || null;
}

// Helper function to get subrace
function getSubrace(raceKey, subraceKey) {
    const race = RACES[raceKey];
    if (race && race.subraces && race.subraces[subraceKey]) {
        return race.subraces[subraceKey];
    }
    return null;
}

// Helper function to calculate combined ability score increases
function getCombinedAbilityScores(raceKey, subraceKey) {
    const race = RACES[raceKey];
    if (!race) return null;

    const combined = { ...race.abilityScoreIncrease };

    if (subraceKey && race.subraces && race.subraces[subraceKey]) {
        const subrace = race.subraces[subraceKey];
        if (subrace.abilityScoreIncrease) {
            for (const [ability, value] of Object.entries(subrace.abilityScoreIncrease)) {
                combined[ability] = (combined[ability] || 0) + value;
            }
        }
    }

    return combined;
}

// Helper function to get all traits (race + subrace)
function getAllTraits(raceKey, subraceKey) {
    const race = RACES[raceKey];
    if (!race) return [];

    const traits = [...race.traits];

    if (subraceKey && race.subraces && race.subraces[subraceKey]) {
        const subrace = race.subraces[subraceKey];
        if (subrace.traits) {
            traits.push(...subrace.traits);
        }
    }

    return traits;
}

// Helper function to get final speed (considering subrace bonuses)
function getFinalSpeed(raceKey, subraceKey) {
    const race = RACES[raceKey];
    if (!race) return 30;

    let speed = race.speed;

    if (subraceKey && race.subraces && race.subraces[subraceKey]) {
        const subrace = race.subraces[subraceKey];
        if (subrace.speed) {
            speed = subrace.speed;
        } else if (subrace.speedBonus) {
            speed += subrace.speedBonus;
        }
    }

    return speed;
}

// Helper function to get dragonborn breath weapon details
function getDragonbornBreathWeapon(ancestryKey) {
    const dragonborn = RACES.dragonborn;
    if (!dragonborn || !dragonborn.draconicAncestry) return null;

    const ancestry = dragonborn.draconicAncestry[ancestryKey.toLowerCase()];
    if (!ancestry) return null;

    return {
        ...ancestry.breathWeapon,
        damageType: ancestry.damageType,
        resistance: ancestry.resistance,
        ...dragonborn.breathWeapon
    };
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        RACES,
        getAllRaces,
        getRace,
        getSubrace,
        getCombinedAbilityScores,
        getAllTraits,
        getFinalSpeed,
        getDragonbornBreathWeapon
    };
}
