// D&D 5e PHB Backgrounds Data
// Source: https://www.dndbeyond.com/backgrounds, https://5e.tools/backgrounds.html

const BACKGROUNDS = {
    acolyte: {
        name: "Acolyte",
        description: "You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world.",
        skillProficiencies: ["Insight", "Religion"],
        languages: 2,
        equipment: [
            "A holy symbol (a gift to you when you entered the priesthood)",
            "A prayer book or prayer wheel",
            "5 sticks of incense",
            "Vestments",
            "A set of common clothes",
            "A pouch containing 15 gp"
        ],
        feature: {
            name: "Shelter of the Faithful",
            description: "As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith."
        }
    },
    charlatan: {
        name: "Charlatan",
        description: "You have always had a way with people. You know what makes them tick, you can tease out their hearts' desires after a few minutes of conversation, and with a few leading questions you can read them like they were children's books.",
        skillProficiencies: ["Deception", "Sleight of Hand"],
        toolProficiencies: ["Disguise kit", "Forgery kit"],
        equipment: [
            "A set of fine clothes",
            "A disguise kit",
            "Tools of the con of your choice (ten stoppered bottles filled with colored liquid, a set of weighted dice, a deck of marked cards, or a signet ring of an imaginary duke)",
            "A pouch containing 15 gp"
        ],
        feature: {
            name: "False Identity",
            description: "You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy."
        }
    },
    criminal: {
        name: "Criminal",
        description: "You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld.",
        skillProficiencies: ["Deception", "Stealth"],
        toolProficiencies: ["One type of gaming set", "Thieves' tools"],
        equipment: [
            "A crowbar",
            "A set of dark common clothes including a hood",
            "A pouch containing 15 gp"
        ],
        feature: {
            name: "Criminal Contact",
            description: "You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you."
        },
        variant: {
            name: "Spy",
            description: "Although your capabilities are not much different from those of a burglar or smuggler, you learned and practiced them in a very different context: as an espionage agent."
        }
    },
    entertainer: {
        name: "Entertainer",
        description: "You thrive in front of an audience. You know how to entrance them, entertain them, and even inspire them. Your poetics can stir the hearts of those who hear you, awakening grief or joy, laughter or anger.",
        skillProficiencies: ["Acrobatics", "Performance"],
        toolProficiencies: ["Disguise kit", "One type of musical instrument"],
        equipment: [
            "A musical instrument (one of your choice)",
            "The favor of an admirer (love letter, lock of hair, or trinket)",
            "A costume",
            "A pouch containing 15 gp"
        ],
        feature: {
            name: "By Popular Demand",
            description: "You can always find a place to perform, usually in an inn or tavern but possibly with a circus, at a theater, or even in a noble's court. At such a place, you receive free lodging and food of a modest or comfortable standard, as long as you perform each night."
        },
        variant: {
            name: "Gladiator",
            description: "A gladiator is as much an entertainer as any minstrel or circus performer, trained to make the arts of combat into a spectacle the crowd can enjoy."
        }
    },
    folkHero: {
        name: "Folk Hero",
        description: "You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion, and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.",
        skillProficiencies: ["Animal Handling", "Survival"],
        toolProficiencies: ["One type of artisan's tools", "Vehicles (land)"],
        equipment: [
            "A set of artisan's tools (one of your choice)",
            "A shovel",
            "An iron pot",
            "A set of common clothes",
            "A pouch containing 10 gp"
        ],
        feature: {
            name: "Rustic Hospitality",
            description: "Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you."
        }
    },
    guildArtisan: {
        name: "Guild Artisan",
        description: "You are a member of an artisan's guild, skilled in a particular field and closely associated with other artisans. You are a well-established part of the mercantile world, freed by talent and wealth from the constraints of a feudal social order.",
        skillProficiencies: ["Insight", "Persuasion"],
        toolProficiencies: ["One type of artisan's tools"],
        languages: 1,
        equipment: [
            "A set of artisan's tools (one of your choice)",
            "A letter of introduction from your guild",
            "A set of traveler's clothes",
            "A pouch containing 15 gp"
        ],
        feature: {
            name: "Guild Membership",
            description: "As an established and respected member of a guild, you can rely on certain benefits that membership provides. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed. In some cities and towns, a guildhall offers a central place to meet other members of your profession."
        },
        variant: {
            name: "Guild Merchant",
            description: "Instead of an artisan's guild, you might belong to a guild of traders, caravan masters, or shopkeepers."
        }
    },
    hermit: {
        name: "Hermit",
        description: "You lived in seclusion – either in a sheltered community such as a monastery, or entirely alone – for a formative part of your life. In your time apart from the clamor of society, you found quiet, solitude, and perhaps some of the answers you were looking for.",
        skillProficiencies: ["Medicine", "Religion"],
        toolProficiencies: ["Herbalism kit"],
        languages: 1,
        equipment: [
            "A scroll case stuffed full of notes from your studies or prayers",
            "A winter blanket",
            "A set of common clothes",
            "An herbalism kit",
            "5 gp"
        ],
        feature: {
            name: "Discovery",
            description: "The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. The exact nature of this revelation depends on the nature of your seclusion. It might be a great truth about the cosmos, the deities, the powerful beings of the outer planes, or the forces of nature."
        }
    },
    noble: {
        name: "Noble",
        description: "You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence. You might be a pampered aristocrat unfamiliar with work or discomfort, a former merchant just elevated to the nobility, or a disinherited scoundrel with a disproportionate sense of entitlement.",
        skillProficiencies: ["History", "Persuasion"],
        toolProficiencies: ["One type of gaming set"],
        languages: 1,
        equipment: [
            "A set of fine clothes",
            "A signet ring",
            "A scroll of pedigree",
            "A purse containing 25 gp"
        ],
        feature: {
            name: "Position of Privilege",
            description: "Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and people assume you have the right to be wherever you are. The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere."
        },
        variant: {
            name: "Knight",
            description: "A knighthood is among the lowest noble titles in most societies, but it can be a path to higher status."
        }
    },
    outlander: {
        name: "Outlander",
        description: "You grew up in the wilds, far from civilization and the comforts of town and technology. You've witnessed the migration of herds larger than forests, survived weather more extreme than any city-dweller could comprehend, and enjoyed the solitude of being the only thinking creature for miles in any direction.",
        skillProficiencies: ["Athletics", "Survival"],
        toolProficiencies: ["One type of musical instrument"],
        languages: 1,
        equipment: [
            "A staff",
            "A hunting trap",
            "A trophy from an animal you killed",
            "A set of traveler's clothes",
            "A pouch containing 10 gp"
        ],
        feature: {
            name: "Wanderer",
            description: "You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth."
        }
    },
    sage: {
        name: "Sage",
        description: "You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you. Your efforts have made you a master in your fields of study.",
        skillProficiencies: ["Arcana", "History"],
        languages: 2,
        equipment: [
            "A bottle of black ink",
            "A quill",
            "A small knife",
            "A letter from a dead colleague posing a question you have not yet been able to answer",
            "A set of common clothes",
            "A pouch containing 10 gp"
        ],
        feature: {
            name: "Researcher",
            description: "When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature."
        }
    },
    sailor: {
        name: "Sailor",
        description: "You sailed on a seagoing vessel for years. In that time, you faced down mighty storms, monsters of the deep, and those who wanted to sink your craft to the bottomless depths. Your first love is the distant line of the horizon, but the time has come to try your hand at something new.",
        skillProficiencies: ["Athletics", "Perception"],
        toolProficiencies: ["Navigator's tools", "Vehicles (water)"],
        equipment: [
            "A belaying pin (club)",
            "50 feet of silk rope",
            "A lucky charm such as a rabbit foot or a small stone with a hole in the center",
            "A set of common clothes",
            "A pouch containing 10 gp"
        ],
        feature: {
            name: "Ship's Passage",
            description: "When you need to, you can secure free passage on a sailing ship for yourself and your adventuring companions. You might sail on the ship you served on, or another ship you have good relations with. Because you're calling in a favor, you can't be certain of a schedule or route that will meet your every need."
        },
        variant: {
            name: "Pirate",
            description: "You spent your youth under the sway of a dread pirate, a ruthless cutthroat who taught you how to survive in a world of sharks and savages."
        }
    },
    soldier: {
        name: "Soldier",
        description: "War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield. You might have been part of a standing national army or a mercenary company, or perhaps a member of a local militia who rose to prominence during a recent war.",
        skillProficiencies: ["Athletics", "Intimidation"],
        toolProficiencies: ["One type of gaming set", "Vehicles (land)"],
        equipment: [
            "An insignia of rank",
            "A trophy taken from a fallen enemy (a dagger, broken blade, or piece of a banner)",
            "A set of bone dice or deck of cards",
            "A set of common clothes",
            "A pouch containing 10 gp"
        ],
        feature: {
            name: "Military Rank",
            description: "You have a military rank from your career as a soldier. Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use."
        }
    },
    urchin: {
        name: "Urchin",
        description: "You grew up on the streets alone, orphaned, and poor. You had no one to watch over you or to provide for you, so you learned to provide for yourself. You fought fiercely over food and kept a constant watch out for other desperate souls who might steal from you.",
        skillProficiencies: ["Sleight of Hand", "Stealth"],
        toolProficiencies: ["Disguise kit", "Thieves' tools"],
        equipment: [
            "A small knife",
            "A map of the city you grew up in",
            "A pet mouse",
            "A token to remember your parents by",
            "A set of common clothes",
            "A pouch containing 10 gp"
        ],
        feature: {
            name: "City Secrets",
            description: "You know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When you are not in combat, you (and companions you lead) can travel between any two locations in the city twice as fast as your speed would normally allow."
        }
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BACKGROUNDS;
}
