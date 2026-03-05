// D&D 5e Conditions Reference
// Source: D&D 5e SRD

const CONDITIONS = {
    "blinded": {
        name: "Blinded",
        description: "A blinded creature can't see and automatically fails any ability check that requires sight.",
        effects: [
            "Can't see and automatically fails any ability check that requires sight",
            "Attack rolls against the creature have advantage",
            "The creature's attack rolls have disadvantage"
        ]
    },
    "charmed": {
        name: "Charmed",
        description: "A charmed creature can't attack the charmer or target the charmer with harmful abilities or magical effects.",
        effects: [
            "Can't attack the charmer or target the charmer with harmful abilities or magical effects",
            "The charmer has advantage on any ability check to interact socially with the creature"
        ]
    },
    "deafened": {
        name: "Deafened",
        description: "A deafened creature can't hear and automatically fails any ability check that requires hearing.",
        effects: [
            "Can't hear",
            "Automatically fails any ability check that requires hearing"
        ]
    },
    "exhaustion": {
        name: "Exhaustion",
        description: "Exhaustion is measured in six levels. An effect can give a creature one or more levels of exhaustion. If an already exhausted creature suffers another effect that causes exhaustion, its current level of exhaustion increases by the amount specified in the effect's description.",
        effects: [
            "Level 1: Disadvantage on ability checks",
            "Level 2: Speed halved",
            "Level 3: Disadvantage on attack rolls and saving throws",
            "Level 4: Hit point maximum halved",
            "Level 5: Speed reduced to 0",
            "Level 6: Death"
        ],
        additionalInfo: "A creature suffers the effect of its current level of exhaustion as well as all lower levels. Finishing a long rest reduces a creature's exhaustion level by 1, provided that the creature has also ingested some food and drink. Also, being raised from the dead reduces a creature's exhaustion level by 1."
    },
    "frightened": {
        name: "Frightened",
        description: "A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is within line of sight.",
        effects: [
            "Disadvantage on ability checks and attack rolls while the source of fear is within line of sight",
            "The creature can't willingly move closer to the source of its fear"
        ]
    },
    "grappled": {
        name: "Grappled",
        description: "A grappled creature's speed becomes 0, and it can't benefit from any bonus to its speed.",
        effects: [
            "Speed becomes 0 and can't benefit from any bonus to speed",
            "The condition ends if the grappler is incapacitated",
            "The condition also ends if an effect removes the grappled creature from the reach of the grappler or grappling effect (such as when a creature is hurled away by the thunderwave spell)"
        ]
    },
    "incapacitated": {
        name: "Incapacitated",
        description: "An incapacitated creature can't take actions or reactions.",
        effects: [
            "Can't take actions",
            "Can't take reactions"
        ]
    },
    "invisible": {
        name: "Invisible",
        description: "An invisible creature is impossible to see without the aid of magic or a special sense. For the purpose of hiding, the creature is heavily obscured. The creature's location can be detected by any noise it makes or any tracks it leaves.",
        effects: [
            "Impossible to see without the aid of magic or a special sense",
            "For the purpose of hiding, the creature is heavily obscured",
            "The creature's location can be detected by any noise it makes or any tracks it leaves",
            "Attack rolls against the creature have disadvantage",
            "The creature's attack rolls have advantage"
        ]
    },
    "paralyzed": {
        name: "Paralyzed",
        description: "A paralyzed creature is incapacitated and can't move or speak.",
        effects: [
            "Incapacitated (can't take actions or reactions)",
            "Can't move or speak",
            "Automatically fails Strength and Dexterity saving throws",
            "Attack rolls against the creature have advantage",
            "Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature"
        ]
    },
    "petrified": {
        name: "Petrified",
        description: "A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging.",
        effects: [
            "Transformed into a solid inanimate substance (usually stone)",
            "Weight increases by a factor of ten, and it ceases aging",
            "Incapacitated (can't take actions or reactions)",
            "Can't move or speak, and is unaware of its surroundings",
            "Attack rolls against the creature have advantage",
            "Automatically fails Strength and Dexterity saving throws",
            "Resistance to all damage",
            "Immune to poison and disease (existing poison or disease is suspended, not neutralized)"
        ]
    },
    "poisoned": {
        name: "Poisoned",
        description: "A poisoned creature has disadvantage on attack rolls and ability checks.",
        effects: [
            "Disadvantage on attack rolls",
            "Disadvantage on ability checks"
        ]
    },
    "prone": {
        name: "Prone",
        description: "A prone creature's only movement option is to crawl, unless it stands up and thereby ends the condition.",
        effects: [
            "Only movement option is to crawl, unless it stands up",
            "Disadvantage on attack rolls",
            "An attack roll against the creature has advantage if the attacker is within 5 feet of the creature",
            "Otherwise, the attack roll has disadvantage"
        ],
        additionalInfo: "Standing up costs an amount of movement equal to half your speed. You can't stand up if you don't have enough movement left or if your speed is 0."
    },
    "restrained": {
        name: "Restrained",
        description: "A restrained creature's speed becomes 0, and it can't benefit from any bonus to its speed.",
        effects: [
            "Speed becomes 0 and can't benefit from any bonus to speed",
            "Attack rolls against the creature have advantage",
            "The creature's attack rolls have disadvantage",
            "Disadvantage on Dexterity saving throws"
        ]
    },
    "stunned": {
        name: "Stunned",
        description: "A stunned creature is incapacitated, can't move, and can speak only falteringly.",
        effects: [
            "Incapacitated (can't take actions or reactions)",
            "Can't move",
            "Can speak only falteringly",
            "Automatically fails Strength and Dexterity saving throws",
            "Attack rolls against the creature have advantage"
        ]
    },
    "unconscious": {
        name: "Unconscious",
        description: "An unconscious creature is incapacitated, can't move or speak, and is unaware of its surroundings.",
        effects: [
            "Incapacitated (can't take actions or reactions)",
            "Can't move or speak",
            "Unaware of its surroundings",
            "Drops whatever it's holding and falls prone",
            "Automatically fails Strength and Dexterity saving throws",
            "Attack rolls against the creature have advantage",
            "Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature"
        ]
    }
};

// Condition categories for organization
const CONDITION_CATEGORIES = {
    "movement": ["grappled", "prone", "restrained"],
    "mental": ["charmed", "frightened"],
    "senses": ["blinded", "deafened"],
    "incapacitation": ["incapacitated", "paralyzed", "petrified", "stunned", "unconscious"],
    "other": ["exhaustion", "invisible", "poisoned"]
};

// Conditions that include incapacitated
const INCLUDES_INCAPACITATED = ["paralyzed", "petrified", "stunned", "unconscious"];

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONDITIONS, CONDITION_CATEGORIES, INCLUDES_INCAPACITATED };
}
