// D&D 5e SRD Equipment Data
// Source: https://www.5esrd.com/equipment/

const EQUIPMENT = {
    // ==========================================
    // WEAPONS
    // ==========================================
    weapons: {
        // Simple Melee Weapons
        club: {
            name: "Club",
            category: "Simple Melee",
            cost: { amount: 1, unit: "sp" },
            damage: "1d4",
            damageType: "bludgeoning",
            weight: 2,
            properties: ["light"],
            description: "A simple wooden club, one of the most basic weapons available."
        },
        dagger: {
            name: "Dagger",
            category: "Simple Melee",
            cost: { amount: 2, unit: "gp" },
            damage: "1d4",
            damageType: "piercing",
            weight: 1,
            properties: ["finesse", "light", "thrown"],
            range: { normal: 20, long: 60 },
            description: "A short blade used for stabbing. Popular as a backup weapon or for those who prefer stealth."
        },
        greatclub: {
            name: "Greatclub",
            category: "Simple Melee",
            cost: { amount: 2, unit: "sp" },
            damage: "1d8",
            damageType: "bludgeoning",
            weight: 10,
            properties: ["two-handed"],
            description: "A large, heavy club requiring two hands to wield effectively."
        },
        handaxe: {
            name: "Handaxe",
            category: "Simple Melee",
            cost: { amount: 5, unit: "gp" },
            damage: "1d6",
            damageType: "slashing",
            weight: 2,
            properties: ["light", "thrown"],
            range: { normal: 20, long: 60 },
            description: "A small axe designed for one-handed use, equally effective when thrown."
        },
        javelin: {
            name: "Javelin",
            category: "Simple Melee",
            cost: { amount: 5, unit: "sp" },
            damage: "1d6",
            damageType: "piercing",
            weight: 2,
            properties: ["thrown"],
            range: { normal: 30, long: 120 },
            description: "A light spear designed primarily for throwing."
        },
        lightHammer: {
            name: "Light Hammer",
            category: "Simple Melee",
            cost: { amount: 2, unit: "gp" },
            damage: "1d4",
            damageType: "bludgeoning",
            weight: 2,
            properties: ["light", "thrown"],
            range: { normal: 20, long: 60 },
            description: "A small hammer that can be used in melee or thrown."
        },
        mace: {
            name: "Mace",
            category: "Simple Melee",
            cost: { amount: 5, unit: "gp" },
            damage: "1d6",
            damageType: "bludgeoning",
            weight: 4,
            properties: [],
            description: "A heavy club with a metal head, favored by clerics and warriors alike."
        },
        quarterstaff: {
            name: "Quarterstaff",
            category: "Simple Melee",
            cost: { amount: 2, unit: "sp" },
            damage: "1d6",
            damageType: "bludgeoning",
            weight: 4,
            properties: ["versatile"],
            versatileDamage: "1d8",
            description: "A wooden staff about 6 feet long, useful as both a walking stick and weapon."
        },
        sickle: {
            name: "Sickle",
            category: "Simple Melee",
            cost: { amount: 1, unit: "gp" },
            damage: "1d4",
            damageType: "slashing",
            weight: 2,
            properties: ["light"],
            description: "A curved blade attached to a short handle, originally a farming tool."
        },
        spear: {
            name: "Spear",
            category: "Simple Melee",
            cost: { amount: 1, unit: "gp" },
            damage: "1d6",
            damageType: "piercing",
            weight: 3,
            properties: ["thrown", "versatile"],
            range: { normal: 20, long: 60 },
            versatileDamage: "1d8",
            description: "A pole weapon with a pointed tip, one of the oldest and most common weapons."
        },

        // Simple Ranged Weapons
        lightCrossbow: {
            name: "Light Crossbow",
            category: "Simple Ranged",
            cost: { amount: 25, unit: "gp" },
            damage: "1d8",
            damageType: "piercing",
            weight: 5,
            properties: ["ammunition", "loading", "two-handed"],
            range: { normal: 80, long: 320 },
            ammunition: "Crossbow bolts",
            description: "A mechanical bow that fires bolts. Easy to use but slow to reload."
        },
        dart: {
            name: "Dart",
            category: "Simple Ranged",
            cost: { amount: 5, unit: "cp" },
            damage: "1d4",
            damageType: "piercing",
            weight: 0.25,
            properties: ["finesse", "thrown"],
            range: { normal: 20, long: 60 },
            description: "A small, pointed missile designed to be thrown."
        },
        shortbow: {
            name: "Shortbow",
            category: "Simple Ranged",
            cost: { amount: 25, unit: "gp" },
            damage: "1d6",
            damageType: "piercing",
            weight: 2,
            properties: ["ammunition", "two-handed"],
            range: { normal: 80, long: 320 },
            ammunition: "Arrows",
            description: "A smaller bow with less range than a longbow but easier to use in tight spaces."
        },
        sling: {
            name: "Sling",
            category: "Simple Ranged",
            cost: { amount: 1, unit: "sp" },
            damage: "1d4",
            damageType: "bludgeoning",
            weight: 0,
            properties: ["ammunition"],
            range: { normal: 30, long: 120 },
            ammunition: "Sling bullets",
            description: "A simple weapon that hurls stones or bullets with surprising force."
        },

        // Martial Melee Weapons
        battleaxe: {
            name: "Battleaxe",
            category: "Martial Melee",
            cost: { amount: 10, unit: "gp" },
            damage: "1d8",
            damageType: "slashing",
            weight: 4,
            properties: ["versatile"],
            versatileDamage: "1d10",
            description: "A heavy axe with a broad blade, designed for combat."
        },
        flail: {
            name: "Flail",
            category: "Martial Melee",
            cost: { amount: 10, unit: "gp" },
            damage: "1d8",
            damageType: "bludgeoning",
            weight: 2,
            properties: [],
            description: "A spiked ball attached to a handle by a chain or strap."
        },
        glaive: {
            name: "Glaive",
            category: "Martial Melee",
            cost: { amount: 20, unit: "gp" },
            damage: "1d10",
            damageType: "slashing",
            weight: 6,
            properties: ["heavy", "reach", "two-handed"],
            description: "A pole weapon with a single-edged blade on the end."
        },
        greataxe: {
            name: "Greataxe",
            category: "Martial Melee",
            cost: { amount: 30, unit: "gp" },
            damage: "1d12",
            damageType: "slashing",
            weight: 7,
            properties: ["heavy", "two-handed"],
            description: "A massive axe requiring two hands, favored by barbarians."
        },
        greatsword: {
            name: "Greatsword",
            category: "Martial Melee",
            cost: { amount: 50, unit: "gp" },
            damage: "2d6",
            damageType: "slashing",
            weight: 6,
            properties: ["heavy", "two-handed"],
            description: "A large sword with a long blade, requiring two hands to wield."
        },
        halberd: {
            name: "Halberd",
            category: "Martial Melee",
            cost: { amount: 20, unit: "gp" },
            damage: "1d10",
            damageType: "slashing",
            weight: 6,
            properties: ["heavy", "reach", "two-handed"],
            description: "A pole weapon with an axe blade topped with a spike."
        },
        lance: {
            name: "Lance",
            category: "Martial Melee",
            cost: { amount: 10, unit: "gp" },
            damage: "1d12",
            damageType: "piercing",
            weight: 6,
            properties: ["reach", "special"],
            special: "You have disadvantage when you use a lance to attack a target within 5 feet of you. Also, a lance requires two hands to wield when you aren't mounted.",
            description: "A long weapon designed for mounted combat."
        },
        longsword: {
            name: "Longsword",
            category: "Martial Melee",
            cost: { amount: 15, unit: "gp" },
            damage: "1d8",
            damageType: "slashing",
            weight: 3,
            properties: ["versatile"],
            versatileDamage: "1d10",
            description: "A versatile sword that can be wielded with one or two hands."
        },
        maul: {
            name: "Maul",
            category: "Martial Melee",
            cost: { amount: 10, unit: "gp" },
            damage: "2d6",
            damageType: "bludgeoning",
            weight: 10,
            properties: ["heavy", "two-handed"],
            description: "A massive hammer designed for crushing blows."
        },
        morningstar: {
            name: "Morningstar",
            category: "Martial Melee",
            cost: { amount: 15, unit: "gp" },
            damage: "1d8",
            damageType: "piercing",
            weight: 4,
            properties: [],
            description: "A spiked club that deals piercing damage."
        },
        pike: {
            name: "Pike",
            category: "Martial Melee",
            cost: { amount: 5, unit: "gp" },
            damage: "1d10",
            damageType: "piercing",
            weight: 18,
            properties: ["heavy", "reach", "two-handed"],
            description: "An extremely long spear used by infantry formations."
        },
        rapier: {
            name: "Rapier",
            category: "Martial Melee",
            cost: { amount: 25, unit: "gp" },
            damage: "1d8",
            damageType: "piercing",
            weight: 2,
            properties: ["finesse"],
            description: "A thin, pointed sword designed for thrusting attacks."
        },
        scimitar: {
            name: "Scimitar",
            category: "Martial Melee",
            cost: { amount: 25, unit: "gp" },
            damage: "1d6",
            damageType: "slashing",
            weight: 3,
            properties: ["finesse", "light"],
            description: "A curved blade favored for its slashing power and agility."
        },
        shortsword: {
            name: "Shortsword",
            category: "Martial Melee",
            cost: { amount: 10, unit: "gp" },
            damage: "1d6",
            damageType: "piercing",
            weight: 2,
            properties: ["finesse", "light"],
            description: "A short blade ideal for quick strikes and dual-wielding."
        },
        trident: {
            name: "Trident",
            category: "Martial Melee",
            cost: { amount: 5, unit: "gp" },
            damage: "1d6",
            damageType: "piercing",
            weight: 4,
            properties: ["thrown", "versatile"],
            range: { normal: 20, long: 60 },
            versatileDamage: "1d8",
            description: "A three-pronged spear associated with sea deities."
        },
        warPick: {
            name: "War Pick",
            category: "Martial Melee",
            cost: { amount: 5, unit: "gp" },
            damage: "1d8",
            damageType: "piercing",
            weight: 2,
            properties: [],
            description: "A military pick designed to pierce armor."
        },
        warhammer: {
            name: "Warhammer",
            category: "Martial Melee",
            cost: { amount: 15, unit: "gp" },
            damage: "1d8",
            damageType: "bludgeoning",
            weight: 2,
            properties: ["versatile"],
            versatileDamage: "1d10",
            description: "A hammer designed for combat, favored by dwarves."
        },
        whip: {
            name: "Whip",
            category: "Martial Melee",
            cost: { amount: 2, unit: "gp" },
            damage: "1d4",
            damageType: "slashing",
            weight: 3,
            properties: ["finesse", "reach"],
            description: "A flexible weapon that can strike from a distance."
        },

        // Martial Ranged Weapons
        blowgun: {
            name: "Blowgun",
            category: "Martial Ranged",
            cost: { amount: 10, unit: "gp" },
            damage: "1",
            damageType: "piercing",
            weight: 1,
            properties: ["ammunition", "loading"],
            range: { normal: 25, long: 100 },
            ammunition: "Blowgun needles",
            description: "A narrow tube through which darts or needles are blown."
        },
        handCrossbow: {
            name: "Hand Crossbow",
            category: "Martial Ranged",
            cost: { amount: 75, unit: "gp" },
            damage: "1d6",
            damageType: "piercing",
            weight: 3,
            properties: ["ammunition", "light", "loading"],
            range: { normal: 30, long: 120 },
            ammunition: "Crossbow bolts",
            description: "A small crossbow designed for one-handed use."
        },
        heavyCrossbow: {
            name: "Heavy Crossbow",
            category: "Martial Ranged",
            cost: { amount: 50, unit: "gp" },
            damage: "1d10",
            damageType: "piercing",
            weight: 18,
            properties: ["ammunition", "heavy", "loading", "two-handed"],
            range: { normal: 100, long: 400 },
            ammunition: "Crossbow bolts",
            description: "A large, powerful crossbow with exceptional range and damage."
        },
        longbow: {
            name: "Longbow",
            category: "Martial Ranged",
            cost: { amount: 50, unit: "gp" },
            damage: "1d8",
            damageType: "piercing",
            weight: 2,
            properties: ["ammunition", "heavy", "two-handed"],
            range: { normal: 150, long: 600 },
            ammunition: "Arrows",
            description: "A tall bow with exceptional range, favored by elves and rangers."
        },
        net: {
            name: "Net",
            category: "Martial Ranged",
            cost: { amount: 1, unit: "gp" },
            damage: "0",
            damageType: "none",
            weight: 3,
            properties: ["special", "thrown"],
            range: { normal: 5, long: 15 },
            special: "A Large or smaller creature hit by a net is restrained until it is freed. A net has no effect on creatures that are formless, or creatures that are Huge or larger. A creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the net (AC 10) also frees the creature without harming it, ending the effect and destroying the net.",
            description: "A mesh of rope used to entangle enemies."
        }
    },

    // ==========================================
    // AMMUNITION
    // ==========================================
    ammunition: {
        arrows: {
            name: "Arrows",
            cost: { amount: 1, unit: "gp" },
            weight: 1,
            quantity: 20,
            description: "A quiver of 20 arrows for use with bows."
        },
        blowgunNeedles: {
            name: "Blowgun Needles",
            cost: { amount: 1, unit: "gp" },
            weight: 1,
            quantity: 50,
            description: "A case of 50 needles for use with a blowgun."
        },
        crossbowBolts: {
            name: "Crossbow Bolts",
            cost: { amount: 1, unit: "gp" },
            weight: 1.5,
            quantity: 20,
            description: "A case of 20 bolts for use with crossbows."
        },
        slingBullets: {
            name: "Sling Bullets",
            cost: { amount: 4, unit: "cp" },
            weight: 1.5,
            quantity: 20,
            description: "A pouch of 20 sling bullets."
        }
    },

    // ==========================================
    // ARMOR
    // ==========================================
    armor: {
        // Light Armor
        padded: {
            name: "Padded Armor",
            category: "Light",
            cost: { amount: 5, unit: "gp" },
            ac: 11,
            acBonus: "Dex",
            maxDexBonus: null,
            minStrength: null,
            stealthDisadvantage: true,
            weight: 8,
            description: "Quilted layers of cloth and batting provide modest protection."
        },
        leather: {
            name: "Leather Armor",
            category: "Light",
            cost: { amount: 10, unit: "gp" },
            ac: 11,
            acBonus: "Dex",
            maxDexBonus: null,
            minStrength: null,
            stealthDisadvantage: false,
            weight: 10,
            description: "The breastplate and shoulder protectors are made of leather that has been stiffened by boiling in oil."
        },
        studdedLeather: {
            name: "Studded Leather Armor",
            category: "Light",
            cost: { amount: 45, unit: "gp" },
            ac: 12,
            acBonus: "Dex",
            maxDexBonus: null,
            minStrength: null,
            stealthDisadvantage: false,
            weight: 13,
            description: "Made from tough but flexible leather, studded leather is reinforced with close-set rivets or spikes."
        },

        // Medium Armor
        hide: {
            name: "Hide Armor",
            category: "Medium",
            cost: { amount: 10, unit: "gp" },
            ac: 12,
            acBonus: "Dex",
            maxDexBonus: 2,
            minStrength: null,
            stealthDisadvantage: false,
            weight: 12,
            description: "This crude armor consists of thick furs and pelts."
        },
        chainShirt: {
            name: "Chain Shirt",
            category: "Medium",
            cost: { amount: 50, unit: "gp" },
            ac: 13,
            acBonus: "Dex",
            maxDexBonus: 2,
            minStrength: null,
            stealthDisadvantage: false,
            weight: 20,
            description: "Made of interlocking metal rings, a chain shirt is worn between layers of clothing or leather."
        },
        scaleMail: {
            name: "Scale Mail",
            category: "Medium",
            cost: { amount: 50, unit: "gp" },
            ac: 14,
            acBonus: "Dex",
            maxDexBonus: 2,
            minStrength: null,
            stealthDisadvantage: true,
            weight: 45,
            description: "This armor consists of a coat and leggings of leather covered with overlapping pieces of metal."
        },
        breastplate: {
            name: "Breastplate",
            category: "Medium",
            cost: { amount: 400, unit: "gp" },
            ac: 14,
            acBonus: "Dex",
            maxDexBonus: 2,
            minStrength: null,
            stealthDisadvantage: false,
            weight: 20,
            description: "This armor consists of a fitted metal chest piece worn with supple leather."
        },
        halfPlate: {
            name: "Half Plate Armor",
            category: "Medium",
            cost: { amount: 750, unit: "gp" },
            ac: 15,
            acBonus: "Dex",
            maxDexBonus: 2,
            minStrength: null,
            stealthDisadvantage: true,
            weight: 40,
            description: "Half plate consists of shaped metal plates that cover most of the wearer's body."
        },

        // Heavy Armor
        ringMail: {
            name: "Ring Mail",
            category: "Heavy",
            cost: { amount: 30, unit: "gp" },
            ac: 14,
            acBonus: null,
            maxDexBonus: 0,
            minStrength: null,
            stealthDisadvantage: true,
            weight: 40,
            description: "This armor is leather armor with heavy rings sewn into it."
        },
        chainMail: {
            name: "Chain Mail",
            category: "Heavy",
            cost: { amount: 75, unit: "gp" },
            ac: 16,
            acBonus: null,
            maxDexBonus: 0,
            minStrength: 13,
            stealthDisadvantage: true,
            weight: 55,
            description: "Made of interlocking metal rings, chain mail includes a layer of quilted fabric worn underneath."
        },
        splint: {
            name: "Splint Armor",
            category: "Heavy",
            cost: { amount: 200, unit: "gp" },
            ac: 17,
            acBonus: null,
            maxDexBonus: 0,
            minStrength: 15,
            stealthDisadvantage: true,
            weight: 60,
            description: "This armor is made of narrow vertical strips of metal riveted to a backing of leather."
        },
        plate: {
            name: "Plate Armor",
            category: "Heavy",
            cost: { amount: 1500, unit: "gp" },
            ac: 18,
            acBonus: null,
            maxDexBonus: 0,
            minStrength: 15,
            stealthDisadvantage: true,
            weight: 65,
            description: "Plate consists of shaped, interlocking metal plates to cover the entire body."
        },

        // Shields
        shield: {
            name: "Shield",
            category: "Shield",
            cost: { amount: 10, unit: "gp" },
            ac: 2,
            acBonus: "shield",
            maxDexBonus: null,
            minStrength: null,
            stealthDisadvantage: false,
            weight: 6,
            description: "A shield is made from wood or metal and is carried in one hand. Wielding a shield increases your AC by 2."
        }
    },

    // ==========================================
    // ADVENTURING GEAR
    // ==========================================
    adventuringGear: {
        abacus: {
            name: "Abacus",
            cost: { amount: 2, unit: "gp" },
            weight: 2,
            description: "A calculating frame used for arithmetic."
        },
        acidVial: {
            name: "Acid (vial)",
            cost: { amount: 25, unit: "gp" },
            weight: 1,
            description: "As an action, you can splash the contents of this vial onto a creature within 5 feet of you or throw the vial up to 20 feet, shattering it on impact. In either case, make a ranged attack against a creature or object, treating the acid as an improvised weapon. On a hit, the target takes 2d6 acid damage."
        },
        alchemistsFire: {
            name: "Alchemist's Fire (flask)",
            cost: { amount: 50, unit: "gp" },
            weight: 1,
            description: "This sticky, adhesive fluid ignites when exposed to air. As an action, you can throw this flask up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the alchemist's fire as an improvised weapon. On a hit, the target takes 1d4 fire damage at the start of each of its turns. A creature can end this damage by using its action to make a DC 10 Dexterity check to extinguish the flames."
        },
        antitoxin: {
            name: "Antitoxin (vial)",
            cost: { amount: 50, unit: "gp" },
            weight: 0,
            description: "A creature that drinks this vial of liquid gains advantage on saving throws against poison for 1 hour. It confers no benefit to undead or constructs."
        },
        arcaneFont: {
            name: "Arcane Focus",
            cost: { amount: 10, unit: "gp" },
            weight: 1,
            description: "An arcane focus is a special item designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus."
        },
        arcaneFocusCrystal: {
            name: "Arcane Focus - Crystal",
            cost: { amount: 10, unit: "gp" },
            weight: 1,
            description: "A crystal arcane focus used for channeling arcane spells."
        },
        arcaneFocusOrb: {
            name: "Arcane Focus - Orb",
            cost: { amount: 20, unit: "gp" },
            weight: 3,
            description: "An orb arcane focus used for channeling arcane spells."
        },
        arcaneFocusRod: {
            name: "Arcane Focus - Rod",
            cost: { amount: 10, unit: "gp" },
            weight: 2,
            description: "A rod arcane focus used for channeling arcane spells."
        },
        arcaneFocusStaff: {
            name: "Arcane Focus - Staff",
            cost: { amount: 5, unit: "gp" },
            weight: 4,
            description: "A staff arcane focus used for channeling arcane spells."
        },
        arcaneFocusWand: {
            name: "Arcane Focus - Wand",
            cost: { amount: 10, unit: "gp" },
            weight: 1,
            description: "A wand arcane focus used for channeling arcane spells."
        },
        backpack: {
            name: "Backpack",
            cost: { amount: 2, unit: "gp" },
            weight: 5,
            capacity: "1 cubic foot/30 pounds of gear",
            description: "A leather pack carried on the back, fitted with straps."
        },
        ballBearings: {
            name: "Ball Bearings (bag of 1,000)",
            cost: { amount: 1, unit: "gp" },
            weight: 2,
            description: "As an action, you can spill these tiny metal balls from their pouch to cover a level, square area that is 10 feet on a side. A creature moving across the covered area must succeed on a DC 10 Dexterity saving throw or fall prone."
        },
        barrel: {
            name: "Barrel",
            cost: { amount: 2, unit: "gp" },
            weight: 70,
            capacity: "40 gallons liquid, 4 cubic feet solid",
            description: "A cylindrical container made of wooden staves."
        },
        basket: {
            name: "Basket",
            cost: { amount: 4, unit: "sp" },
            weight: 2,
            capacity: "2 cubic feet/40 pounds of gear",
            description: "A woven container for carrying goods."
        },
        bedroll: {
            name: "Bedroll",
            cost: { amount: 1, unit: "gp" },
            weight: 7,
            description: "A portable sleeping bag that can be rolled up for travel."
        },
        bell: {
            name: "Bell",
            cost: { amount: 1, unit: "gp" },
            weight: 0,
            description: "A small metal bell that rings when shaken."
        },
        blanket: {
            name: "Blanket",
            cost: { amount: 5, unit: "sp" },
            weight: 3,
            description: "A heavy cloth covering for warmth."
        },
        blockAndTackle: {
            name: "Block and Tackle",
            cost: { amount: 1, unit: "gp" },
            weight: 5,
            description: "A set of pulleys with a cable threaded through them and a hook to attach to objects. A block and tackle allows you to hoist up to four times the weight you can normally lift."
        },
        book: {
            name: "Book",
            cost: { amount: 25, unit: "gp" },
            weight: 5,
            description: "A book might contain poetry, historical accounts, information pertaining to a particular field of lore, diagrams and notes on gnomish contraptions, or just about anything else that can be represented using text or pictures."
        },
        bottleGlass: {
            name: "Bottle, glass",
            cost: { amount: 2, unit: "gp" },
            weight: 2,
            capacity: "1.5 pints",
            description: "A glass container for holding liquids."
        },
        bucket: {
            name: "Bucket",
            cost: { amount: 5, unit: "cp" },
            weight: 2,
            capacity: "3 gallons liquid, 1/2 cubic foot solid",
            description: "A cylindrical container with an open top and a handle."
        },
        caltrops: {
            name: "Caltrops (bag of 20)",
            cost: { amount: 1, unit: "gp" },
            weight: 2,
            description: "As an action, you can spread a bag of caltrops to cover a square area that is 5 feet on a side. Any creature that enters the area must succeed on a DC 15 Dexterity saving throw or stop moving this turn and take 1 piercing damage. Taking this damage reduces the creature's walking speed by 10 feet until the creature regains at least 1 hit point."
        },
        candle: {
            name: "Candle",
            cost: { amount: 1, unit: "cp" },
            weight: 0,
            description: "For 1 hour, a candle sheds bright light in a 5-foot radius and dim light for an additional 5 feet."
        },
        caseCrossbowBolt: {
            name: "Case, crossbow bolt",
            cost: { amount: 1, unit: "gp" },
            weight: 1,
            capacity: "20 bolts",
            description: "This wooden case can hold up to twenty crossbow bolts."
        },
        caseMapOrScroll: {
            name: "Case, map or scroll",
            cost: { amount: 1, unit: "gp" },
            weight: 1,
            capacity: "10 rolled-up sheets of paper or 5 rolled-up sheets of parchment",
            description: "This cylindrical leather case can hold up to ten rolled-up sheets of paper or five rolled-up sheets of parchment."
        },
        chain: {
            name: "Chain (10 feet)",
            cost: { amount: 5, unit: "gp" },
            weight: 10,
            description: "A chain has 10 hit points. It can be burst with a successful DC 20 Strength check."
        },
        chalk: {
            name: "Chalk (1 piece)",
            cost: { amount: 1, unit: "cp" },
            weight: 0,
            description: "A piece of chalk for marking surfaces."
        },
        chest: {
            name: "Chest",
            cost: { amount: 5, unit: "gp" },
            weight: 25,
            capacity: "12 cubic feet/300 pounds of gear",
            description: "A wooden box with a hinged lid for storing items."
        },
        climbersKit: {
            name: "Climber's Kit",
            cost: { amount: 25, unit: "gp" },
            weight: 12,
            description: "A climber's kit includes special pitons, boot tips, gloves, and a harness. You can use the climber's kit as an action to anchor yourself; when you do, you can't fall more than 25 feet from the point where you anchored yourself, and you can't climb more than 25 feet away from that point without undoing the anchor."
        },
        clothesCommon: {
            name: "Clothes, common",
            cost: { amount: 5, unit: "sp" },
            weight: 3,
            description: "Simple, practical clothing worn by commoners."
        },
        clothesCostume: {
            name: "Clothes, costume",
            cost: { amount: 5, unit: "gp" },
            weight: 4,
            description: "Clothing designed for theatrical performances or disguises."
        },
        clothesFine: {
            name: "Clothes, fine",
            cost: { amount: 15, unit: "gp" },
            weight: 6,
            description: "Elegant clothing suitable for nobility and formal occasions."
        },
        clothesTravelers: {
            name: "Clothes, traveler's",
            cost: { amount: 2, unit: "gp" },
            weight: 4,
            description: "Durable clothing designed for long journeys."
        },
        componentPouch: {
            name: "Component Pouch",
            cost: { amount: 25, unit: "gp" },
            weight: 2,
            description: "A component pouch is a small, watertight leather belt pouch that has compartments to hold all the material components and other special items you need to cast your spells, except for those components that have a specific cost."
        },
        crowbar: {
            name: "Crowbar",
            cost: { amount: 2, unit: "gp" },
            weight: 5,
            description: "Using a crowbar grants advantage to Strength checks where the crowbar's leverage can be applied."
        },
        druidicFocusSprigOfMistletoe: {
            name: "Druidic Focus - Sprig of Mistletoe",
            cost: { amount: 1, unit: "gp" },
            weight: 0,
            description: "A sprig of mistletoe used as a druidic focus for spellcasting."
        },
        druidicFocusTotem: {
            name: "Druidic Focus - Totem",
            cost: { amount: 1, unit: "gp" },
            weight: 0,
            description: "A totem used as a druidic focus for spellcasting."
        },
        druidicFocusWoodenStaff: {
            name: "Druidic Focus - Wooden Staff",
            cost: { amount: 5, unit: "gp" },
            weight: 4,
            description: "A wooden staff used as a druidic focus for spellcasting."
        },
        druidicFocusYewWand: {
            name: "Druidic Focus - Yew Wand",
            cost: { amount: 10, unit: "gp" },
            weight: 1,
            description: "A yew wand used as a druidic focus for spellcasting."
        },
        fishingTackle: {
            name: "Fishing Tackle",
            cost: { amount: 1, unit: "gp" },
            weight: 4,
            description: "This kit includes a wooden rod, silken line, corkwood bobbers, steel hooks, lead sinkers, velvet lures, and narrow netting."
        },
        flask: {
            name: "Flask or Tankard",
            cost: { amount: 2, unit: "cp" },
            weight: 1,
            capacity: "1 pint",
            description: "A container for holding drinks."
        },
        grapplingHook: {
            name: "Grappling Hook",
            cost: { amount: 2, unit: "gp" },
            weight: 4,
            description: "A metal hook with multiple prongs, designed to be thrown and hooked onto objects."
        },
        hammer: {
            name: "Hammer",
            cost: { amount: 1, unit: "gp" },
            weight: 3,
            description: "A tool for driving nails or breaking objects."
        },
        hammerSledge: {
            name: "Hammer, sledge",
            cost: { amount: 2, unit: "gp" },
            weight: 10,
            description: "A large, heavy hammer for breaking rocks or driving stakes."
        },
        healersKit: {
            name: "Healer's Kit",
            cost: { amount: 5, unit: "gp" },
            weight: 3,
            uses: 10,
            description: "This kit is a leather pouch containing bandages, salves, and splints. The kit has ten uses. As an action, you can expend one use of the kit to stabilize a creature that has 0 hit points, without needing to make a Wisdom (Medicine) check."
        },
        holySymbolAmulet: {
            name: "Holy Symbol - Amulet",
            cost: { amount: 5, unit: "gp" },
            weight: 1,
            description: "An amulet holy symbol used as a spellcasting focus for divine casters."
        },
        holySymbolEmblem: {
            name: "Holy Symbol - Emblem",
            cost: { amount: 5, unit: "gp" },
            weight: 0,
            description: "An emblem holy symbol that can be worn or attached to a shield."
        },
        holySymbolReliquary: {
            name: "Holy Symbol - Reliquary",
            cost: { amount: 5, unit: "gp" },
            weight: 2,
            description: "A reliquary holy symbol containing sacred relics."
        },
        holyWater: {
            name: "Holy Water (flask)",
            cost: { amount: 25, unit: "gp" },
            weight: 1,
            description: "As an action, you can splash the contents of this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. In either case, make a ranged attack against a target creature, treating the holy water as an improvised weapon. If the target is a fiend or undead, it takes 2d6 radiant damage."
        },
        hourglass: {
            name: "Hourglass",
            cost: { amount: 25, unit: "gp" },
            weight: 1,
            description: "A device for measuring time using flowing sand."
        },
        huntingTrap: {
            name: "Hunting Trap",
            cost: { amount: 5, unit: "gp" },
            weight: 25,
            description: "When you use your action to set it, this trap forms a saw-toothed steel ring that snaps shut when a creature steps on a pressure plate in the center. The trap is affixed by a heavy chain to an immobile object. A creature that steps on the plate must succeed on a DC 13 Dexterity saving throw or take 1d4 piercing damage and stop moving. The creature is restrained until freed."
        },
        ink: {
            name: "Ink (1 ounce bottle)",
            cost: { amount: 10, unit: "gp" },
            weight: 0,
            description: "A bottle of black ink for writing."
        },
        inkPen: {
            name: "Ink Pen",
            cost: { amount: 2, unit: "cp" },
            weight: 0,
            description: "A pen for writing with ink."
        },
        jug: {
            name: "Jug or Pitcher",
            cost: { amount: 2, unit: "cp" },
            weight: 4,
            capacity: "1 gallon",
            description: "A container for holding liquids."
        },
        ladder: {
            name: "Ladder (10-foot)",
            cost: { amount: 1, unit: "sp" },
            weight: 25,
            description: "A wooden ladder for climbing."
        },
        lamp: {
            name: "Lamp",
            cost: { amount: 5, unit: "sp" },
            weight: 1,
            description: "A lamp casts bright light in a 15-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil."
        },
        lanternBullseye: {
            name: "Lantern, bullseye",
            cost: { amount: 10, unit: "gp" },
            weight: 2,
            description: "A bullseye lantern casts bright light in a 60-foot cone and dim light for an additional 60 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil."
        },
        lanternHooded: {
            name: "Lantern, hooded",
            cost: { amount: 5, unit: "gp" },
            weight: 2,
            description: "A hooded lantern casts bright light in a 30-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil. As an action, you can lower the hood, reducing the light to dim light in a 5-foot radius."
        },
        lock: {
            name: "Lock",
            cost: { amount: 10, unit: "gp" },
            weight: 1,
            description: "A key is provided with the lock. Without the key, a creature proficient with thieves' tools can pick this lock with a successful DC 15 Dexterity check. Your DM may decide that better locks are available for higher prices."
        },
        magnifyingGlass: {
            name: "Magnifying Glass",
            cost: { amount: 100, unit: "gp" },
            weight: 0,
            description: "This lens allows a closer look at small objects. It is also useful as a substitute for flint and steel when starting fires. Lighting a fire with a magnifying glass requires light as bright as sunlight to focus, tinder to ignite, and about 5 minutes for the fire to ignite."
        },
        manacles: {
            name: "Manacles",
            cost: { amount: 2, unit: "gp" },
            weight: 6,
            description: "These metal restraints can bind a Small or Medium creature. Escaping the manacles requires a successful DC 20 Dexterity check. Breaking them requires a successful DC 20 Strength check. Each set of manacles comes with one key. Without the key, a creature proficient with thieves' tools can pick the manacles' lock with a successful DC 15 Dexterity check."
        },
        messKit: {
            name: "Mess Kit",
            cost: { amount: 2, unit: "sp" },
            weight: 1,
            description: "This tin box contains a cup and simple cutlery. The box clamps together, and one side can be used as a cooking pan and the other as a plate or shallow bowl."
        },
        mirror: {
            name: "Mirror, steel",
            cost: { amount: 5, unit: "gp" },
            weight: 0.5,
            description: "A polished steel mirror for viewing reflections."
        },
        oil: {
            name: "Oil (flask)",
            cost: { amount: 1, unit: "sp" },
            weight: 1,
            description: "Oil usually comes in a clay flask that holds 1 pint. As an action, you can splash the oil in this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. Make a ranged attack against a target creature or object, treating the oil as an improvised weapon. On a hit, the target is covered in oil. If the target takes any fire damage before the oil dries (after 1 minute), the target takes an additional 5 fire damage from the burning oil. You can also pour a flask of oil on the ground to cover a 5-foot-square area, provided that the surface is level. If lit, the oil burns for 2 rounds and deals 5 fire damage to any creature that enters the area or ends its turn in the area."
        },
        paper: {
            name: "Paper (one sheet)",
            cost: { amount: 2, unit: "sp" },
            weight: 0,
            description: "A single sheet of paper for writing."
        },
        parchment: {
            name: "Parchment (one sheet)",
            cost: { amount: 1, unit: "sp" },
            weight: 0,
            description: "A single sheet of parchment made from animal skin."
        },
        perfume: {
            name: "Perfume (vial)",
            cost: { amount: 5, unit: "gp" },
            weight: 0,
            description: "A small vial of fragrant perfume."
        },
        pickMiners: {
            name: "Pick, miner's",
            cost: { amount: 2, unit: "gp" },
            weight: 10,
            description: "A tool for mining stone and ore."
        },
        piton: {
            name: "Piton",
            cost: { amount: 5, unit: "cp" },
            weight: 0.25,
            description: "A metal spike for securing ropes to surfaces."
        },
        poison: {
            name: "Poison, basic (vial)",
            cost: { amount: 100, unit: "gp" },
            weight: 0,
            description: "You can use the poison in this vial to coat one slashing or piercing weapon or up to three pieces of ammunition. Applying the poison takes an action. A creature hit by the poisoned weapon or ammunition must make a DC 10 Constitution saving throw or take 1d4 poison damage. Once applied, the poison retains potency for 1 minute before drying."
        },
        pole: {
            name: "Pole (10-foot)",
            cost: { amount: 5, unit: "cp" },
            weight: 7,
            description: "A wooden pole useful for testing the ground ahead or pushing objects."
        },
        potIron: {
            name: "Pot, iron",
            cost: { amount: 2, unit: "gp" },
            weight: 10,
            capacity: "1 gallon",
            description: "An iron cooking pot."
        },
        potionOfHealing: {
            name: "Potion of Healing",
            cost: { amount: 50, unit: "gp" },
            weight: 0.5,
            description: "You regain 2d4 + 2 hit points when you drink this potion. The potion's red liquid glimmers when agitated."
        },
        pouch: {
            name: "Pouch",
            cost: { amount: 5, unit: "sp" },
            weight: 1,
            capacity: "1/5 cubic foot/6 pounds of gear",
            description: "A cloth or leather pouch can hold up to 20 sling bullets or 50 blowgun needles, among other things."
        },
        quiver: {
            name: "Quiver",
            cost: { amount: 1, unit: "gp" },
            weight: 1,
            capacity: "20 arrows",
            description: "A quiver can hold up to 20 arrows."
        },
        ramPortable: {
            name: "Ram, portable",
            cost: { amount: 4, unit: "gp" },
            weight: 35,
            description: "You can use a portable ram to break down doors. When doing so, you gain a +4 bonus on the Strength check. One other character can help you use the ram, giving you advantage on this check."
        },
        rationsTrail: {
            name: "Rations (1 day)",
            cost: { amount: 5, unit: "sp" },
            weight: 2,
            description: "Rations consist of dry foods suitable for extended travel, including jerky, dried fruit, hardtack, and nuts."
        },
        robes: {
            name: "Robes",
            cost: { amount: 1, unit: "gp" },
            weight: 4,
            description: "A set of robes, often worn by clergy or spellcasters."
        },
        ropeHempen: {
            name: "Rope, hempen (50 feet)",
            cost: { amount: 1, unit: "gp" },
            weight: 10,
            description: "Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check."
        },
        ropeSilk: {
            name: "Rope, silk (50 feet)",
            cost: { amount: 10, unit: "gp" },
            weight: 5,
            description: "Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check."
        },
        sack: {
            name: "Sack",
            cost: { amount: 1, unit: "cp" },
            weight: 0.5,
            capacity: "1 cubic foot/30 pounds of gear",
            description: "A cloth or burlap sack for carrying items."
        },
        scaleMerchants: {
            name: "Scale, merchant's",
            cost: { amount: 5, unit: "gp" },
            weight: 3,
            description: "A scale includes a small balance, pans, and a suitable assortment of weights up to 2 pounds. With it, you can measure the exact weight of small objects, such as raw precious metals or trade goods, to help determine their worth."
        },
        sealingWax: {
            name: "Sealing Wax",
            cost: { amount: 5, unit: "sp" },
            weight: 0,
            description: "Wax used to seal letters and documents."
        },
        shovel: {
            name: "Shovel",
            cost: { amount: 2, unit: "gp" },
            weight: 5,
            description: "A tool for digging."
        },
        signalWhistle: {
            name: "Signal Whistle",
            cost: { amount: 5, unit: "cp" },
            weight: 0,
            description: "A small whistle that produces a loud, piercing sound."
        },
        signetRing: {
            name: "Signet Ring",
            cost: { amount: 5, unit: "gp" },
            weight: 0,
            description: "A ring bearing a personal seal or family crest."
        },
        soap: {
            name: "Soap",
            cost: { amount: 2, unit: "cp" },
            weight: 0,
            description: "A bar of soap for cleaning."
        },
        spellbook: {
            name: "Spellbook",
            cost: { amount: 50, unit: "gp" },
            weight: 3,
            pages: 100,
            description: "Essential for wizards, this leather-bound book has 100 blank vellum pages suitable for recording spells."
        },
        spikesIron: {
            name: "Spikes, iron (10)",
            cost: { amount: 1, unit: "gp" },
            weight: 5,
            description: "A set of 10 iron spikes for various uses."
        },
        spyglass: {
            name: "Spyglass",
            cost: { amount: 1000, unit: "gp" },
            weight: 1,
            description: "Objects viewed through a spyglass are magnified to twice their size."
        },
        tent: {
            name: "Tent, two-person",
            cost: { amount: 2, unit: "gp" },
            weight: 20,
            description: "A simple and portable canvas shelter, a tent sleeps two."
        },
        tinderbox: {
            name: "Tinderbox",
            cost: { amount: 5, unit: "sp" },
            weight: 1,
            description: "This small container holds flint, fire steel, and tinder (usually dry cloth soaked in light oil) used to kindle a fire. Using it to light a torch—or anything else with abundant, exposed fuel—takes an action. Lighting any other fire takes 1 minute."
        },
        torch: {
            name: "Torch",
            cost: { amount: 1, unit: "cp" },
            weight: 1,
            description: "A torch burns for 1 hour, providing bright light in a 20-foot radius and dim light for an additional 20 feet. If you make a melee attack with a burning torch and hit, it deals 1 fire damage."
        },
        vial: {
            name: "Vial",
            cost: { amount: 1, unit: "gp" },
            weight: 0,
            capacity: "4 ounces liquid",
            description: "A small glass container for holding liquids."
        },
        waterskin: {
            name: "Waterskin",
            cost: { amount: 2, unit: "sp" },
            weight: 5,
            capacity: "4 pints",
            description: "A leather container for carrying water. When full, it weighs 5 pounds."
        },
        whetstone: {
            name: "Whetstone",
            cost: { amount: 1, unit: "cp" },
            weight: 1,
            description: "A stone used for sharpening bladed weapons."
        }
    },

    // ==========================================
    // EQUIPMENT PACKS
    // ==========================================
    equipmentPacks: {
        burglarsPack: {
            name: "Burglar's Pack",
            cost: { amount: 16, unit: "gp" },
            weight: 44.5,
            contents: [
                "Backpack",
                "Bag of 1,000 ball bearings",
                "10 feet of string",
                "Bell",
                "5 candles",
                "Crowbar",
                "Hammer",
                "10 pitons",
                "Hooded lantern",
                "2 flasks of oil",
                "5 days rations",
                "Tinderbox",
                "Waterskin",
                "50 feet of hempen rope"
            ],
            description: "Includes a backpack, a bag of 1,000 ball bearings, 10 feet of string, a bell, 5 candles, a crowbar, a hammer, 10 pitons, a hooded lantern, 2 flasks of oil, 5 days rations, a tinderbox, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it."
        },
        diplomatsPack: {
            name: "Diplomat's Pack",
            cost: { amount: 39, unit: "gp" },
            weight: 36,
            contents: [
                "Chest",
                "2 cases for maps and scrolls",
                "Fine clothes",
                "Bottle of ink",
                "Ink pen",
                "Lamp",
                "2 flasks of oil",
                "5 sheets of paper",
                "Vial of perfume",
                "Sealing wax",
                "Soap"
            ],
            description: "Includes a chest, 2 cases for maps and scrolls, a set of fine clothes, a bottle of ink, an ink pen, a lamp, 2 flasks of oil, 5 sheets of paper, a vial of perfume, sealing wax, and soap."
        },
        dungeoneersPack: {
            name: "Dungeoneer's Pack",
            cost: { amount: 12, unit: "gp" },
            weight: 61.5,
            contents: [
                "Backpack",
                "Crowbar",
                "Hammer",
                "10 pitons",
                "10 torches",
                "Tinderbox",
                "10 days of rations",
                "Waterskin",
                "50 feet of hempen rope"
            ],
            description: "Includes a backpack, a crowbar, a hammer, 10 pitons, 10 torches, a tinderbox, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it."
        },
        entertainersPack: {
            name: "Entertainer's Pack",
            cost: { amount: 40, unit: "gp" },
            weight: 38,
            contents: [
                "Backpack",
                "Bedroll",
                "2 costumes",
                "5 candles",
                "5 days of rations",
                "Waterskin",
                "Disguise kit"
            ],
            description: "Includes a backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, a waterskin, and a disguise kit."
        },
        explorersPack: {
            name: "Explorer's Pack",
            cost: { amount: 10, unit: "gp" },
            weight: 59,
            contents: [
                "Backpack",
                "Bedroll",
                "Mess kit",
                "Tinderbox",
                "10 torches",
                "10 days of rations",
                "Waterskin",
                "50 feet of hempen rope"
            ],
            description: "Includes a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it."
        },
        priestsPack: {
            name: "Priest's Pack",
            cost: { amount: 19, unit: "gp" },
            weight: 24,
            contents: [
                "Backpack",
                "Blanket",
                "10 candles",
                "Tinderbox",
                "Alms box",
                "2 blocks of incense",
                "Censer",
                "Vestments",
                "2 days of rations",
                "Waterskin"
            ],
            description: "Includes a backpack, a blanket, 10 candles, a tinderbox, an alms box, 2 blocks of incense, a censer, vestments, 2 days of rations, and a waterskin."
        },
        scholarsPack: {
            name: "Scholar's Pack",
            cost: { amount: 40, unit: "gp" },
            weight: 10,
            contents: [
                "Backpack",
                "Book of lore",
                "Bottle of ink",
                "Ink pen",
                "10 sheets of parchment",
                "Little bag of sand",
                "Small knife"
            ],
            description: "Includes a backpack, a book of lore, a bottle of ink, an ink pen, 10 sheets of parchment, a little bag of sand, and a small knife."
        }
    },

    // ==========================================
    // TOOLS
    // ==========================================
    tools: {
        // Artisan's Tools
        alchemistsSupplies: {
            name: "Alchemist's Supplies",
            category: "Artisan's Tools",
            cost: { amount: 50, unit: "gp" },
            weight: 8,
            description: "These special tools include the items needed to pursue a craft or trade. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft."
        },
        brewersSupplies: {
            name: "Brewer's Supplies",
            category: "Artisan's Tools",
            cost: { amount: 20, unit: "gp" },
            weight: 9,
            description: "Tools for brewing beer, ale, and other fermented beverages."
        },
        calligraphersSupplies: {
            name: "Calligrapher's Supplies",
            category: "Artisan's Tools",
            cost: { amount: 10, unit: "gp" },
            weight: 5,
            description: "Tools for the art of beautiful handwriting and lettering."
        },
        carpentersTools: {
            name: "Carpenter's Tools",
            category: "Artisan's Tools",
            cost: { amount: 8, unit: "gp" },
            weight: 6,
            description: "Tools for woodworking and construction."
        },
        cartographersTools: {
            name: "Cartographer's Tools",
            category: "Artisan's Tools",
            cost: { amount: 15, unit: "gp" },
            weight: 6,
            description: "Tools for creating maps and charts."
        },
        cobblersTools: {
            name: "Cobbler's Tools",
            category: "Artisan's Tools",
            cost: { amount: 5, unit: "gp" },
            weight: 5,
            description: "Tools for making and repairing shoes and boots."
        },
        cooksUtensils: {
            name: "Cook's Utensils",
            category: "Artisan's Tools",
            cost: { amount: 1, unit: "gp" },
            weight: 8,
            description: "Tools for preparing food and cooking."
        },
        glassblowersTools: {
            name: "Glassblower's Tools",
            category: "Artisan's Tools",
            cost: { amount: 30, unit: "gp" },
            weight: 5,
            description: "Tools for shaping glass into various forms."
        },
        jewelersTools: {
            name: "Jeweler's Tools",
            category: "Artisan's Tools",
            cost: { amount: 25, unit: "gp" },
            weight: 2,
            description: "Tools for crafting and appraising jewelry and gems."
        },
        leatherworkersTools: {
            name: "Leatherworker's Tools",
            category: "Artisan's Tools",
            cost: { amount: 5, unit: "gp" },
            weight: 5,
            description: "Tools for working with leather and hides."
        },
        masonsTools: {
            name: "Mason's Tools",
            category: "Artisan's Tools",
            cost: { amount: 10, unit: "gp" },
            weight: 8,
            description: "Tools for working with stone and brick."
        },
        paintersSupplies: {
            name: "Painter's Supplies",
            category: "Artisan's Tools",
            cost: { amount: 10, unit: "gp" },
            weight: 5,
            description: "Tools for creating paintings and artwork."
        },
        pottersTools: {
            name: "Potter's Tools",
            category: "Artisan's Tools",
            cost: { amount: 10, unit: "gp" },
            weight: 3,
            description: "Tools for creating pottery and ceramics."
        },
        smithsTools: {
            name: "Smith's Tools",
            category: "Artisan's Tools",
            cost: { amount: 20, unit: "gp" },
            weight: 8,
            description: "Tools for working metal at a forge."
        },
        tinkersTools: {
            name: "Tinker's Tools",
            category: "Artisan's Tools",
            cost: { amount: 50, unit: "gp" },
            weight: 10,
            description: "Tools for repairing and creating small mechanical devices."
        },
        weaversTools: {
            name: "Weaver's Tools",
            category: "Artisan's Tools",
            cost: { amount: 1, unit: "gp" },
            weight: 5,
            description: "Tools for weaving cloth and textiles."
        },
        woodcarversTools: {
            name: "Woodcarver's Tools",
            category: "Artisan's Tools",
            cost: { amount: 1, unit: "gp" },
            weight: 5,
            description: "Tools for carving and shaping wood."
        },

        // Gaming Sets
        diceSet: {
            name: "Dice Set",
            category: "Gaming Set",
            cost: { amount: 1, unit: "sp" },
            weight: 0,
            description: "A set of gaming dice for various games of chance."
        },
        dragonchessSet: {
            name: "Dragonchess Set",
            category: "Gaming Set",
            cost: { amount: 1, unit: "gp" },
            weight: 0.5,
            description: "A three-dimensional chess variant popular throughout the realms."
        },
        playingCardSet: {
            name: "Playing Card Set",
            category: "Gaming Set",
            cost: { amount: 5, unit: "sp" },
            weight: 0,
            description: "A deck of cards for various games."
        },
        threedragonAnteSet: {
            name: "Three-Dragon Ante Set",
            category: "Gaming Set",
            cost: { amount: 1, unit: "gp" },
            weight: 0,
            description: "A popular card game involving betting and bluffing."
        },

        // Musical Instruments
        bagpipes: {
            name: "Bagpipes",
            category: "Musical Instrument",
            cost: { amount: 30, unit: "gp" },
            weight: 6,
            description: "A wind instrument using enclosed reeds fed from a constant reservoir of air."
        },
        drum: {
            name: "Drum",
            category: "Musical Instrument",
            cost: { amount: 6, unit: "gp" },
            weight: 3,
            description: "A percussion instrument played by striking a membrane."
        },
        dulcimer: {
            name: "Dulcimer",
            category: "Musical Instrument",
            cost: { amount: 25, unit: "gp" },
            weight: 10,
            description: "A stringed instrument played by striking the strings with hammers."
        },
        flute: {
            name: "Flute",
            category: "Musical Instrument",
            cost: { amount: 2, unit: "gp" },
            weight: 1,
            description: "A wind instrument that produces sound from the flow of air across an opening."
        },
        lute: {
            name: "Lute",
            category: "Musical Instrument",
            cost: { amount: 35, unit: "gp" },
            weight: 2,
            description: "A plucked stringed instrument popular among bards."
        },
        lyre: {
            name: "Lyre",
            category: "Musical Instrument",
            cost: { amount: 30, unit: "gp" },
            weight: 2,
            description: "A stringed instrument related to the harp."
        },
        horn: {
            name: "Horn",
            category: "Musical Instrument",
            cost: { amount: 3, unit: "gp" },
            weight: 2,
            description: "A brass wind instrument."
        },
        panFlute: {
            name: "Pan Flute",
            category: "Musical Instrument",
            cost: { amount: 12, unit: "gp" },
            weight: 2,
            description: "A wind instrument consisting of multiple pipes of gradually increasing length."
        },
        shawm: {
            name: "Shawm",
            category: "Musical Instrument",
            cost: { amount: 2, unit: "gp" },
            weight: 1,
            description: "A double-reed wind instrument, ancestor of the oboe."
        },
        viol: {
            name: "Viol",
            category: "Musical Instrument",
            cost: { amount: 30, unit: "gp" },
            weight: 1,
            description: "A bowed stringed instrument similar to a violin."
        },

        // Other Tools
        disguiseKit: {
            name: "Disguise Kit",
            category: "Tool",
            cost: { amount: 25, unit: "gp" },
            weight: 3,
            description: "This pouch of cosmetics, hair dye, and small props lets you create disguises that change your physical appearance. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a visual disguise."
        },
        forgeryKit: {
            name: "Forgery Kit",
            category: "Tool",
            cost: { amount: 15, unit: "gp" },
            weight: 5,
            description: "This small box contains a variety of papers and parchments, pens and inks, seals and sealing wax, gold and silver leaf, and other supplies necessary to create convincing forgeries of physical documents. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a physical forgery of a document."
        },
        herbalismKit: {
            name: "Herbalism Kit",
            category: "Tool",
            cost: { amount: 5, unit: "gp" },
            weight: 3,
            description: "This kit contains a variety of instruments such as clippers, mortar and pestle, and pouches and vials used by herbalists to create remedies and potions. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to identify or apply herbs. Also, proficiency with this kit is required to create antitoxin and potions of healing."
        },
        navigatorsTools: {
            name: "Navigator's Tools",
            category: "Tool",
            cost: { amount: 25, unit: "gp" },
            weight: 2,
            description: "This set of instruments is used for navigation at sea. Proficiency with navigator's tools lets you chart a ship's course and follow navigation charts. In addition, these tools allow you to add your proficiency bonus to any ability check you make to avoid getting lost at sea."
        },
        poisonersKit: {
            name: "Poisoner's Kit",
            category: "Tool",
            cost: { amount: 50, unit: "gp" },
            weight: 2,
            description: "A poisoner's kit includes the vials, chemicals, and other equipment necessary for the creation of poisons. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to craft or use poisons."
        },
        thievesTools: {
            name: "Thieves' Tools",
            category: "Tool",
            cost: { amount: 25, unit: "gp" },
            weight: 1,
            description: "This set of tools includes a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers. Proficiency with these tools lets you add your proficiency bonus to any ability checks you make to disarm traps or open locks."
        }
    },

    // ==========================================
    // MOUNTS AND VEHICLES
    // ==========================================
    mountsAndVehicles: {
        // Mounts
        camel: {
            name: "Camel",
            category: "Mount",
            cost: { amount: 50, unit: "gp" },
            speed: 50,
            carryingCapacity: 480,
            description: "A hardy desert mount capable of traveling long distances with minimal water."
        },
        donkey: {
            name: "Donkey",
            category: "Mount",
            cost: { amount: 8, unit: "gp" },
            speed: 40,
            carryingCapacity: 420,
            description: "A sturdy pack animal, also called a mule when crossbred with a horse."
        },
        mule: {
            name: "Mule",
            category: "Mount",
            cost: { amount: 8, unit: "gp" },
            speed: 40,
            carryingCapacity: 420,
            description: "The offspring of a donkey and a horse, known for its endurance."
        },
        elephant: {
            name: "Elephant",
            category: "Mount",
            cost: { amount: 200, unit: "gp" },
            speed: 40,
            carryingCapacity: 1320,
            description: "A massive beast used as a mount and beast of burden in some lands."
        },
        draftHorse: {
            name: "Horse, draft",
            category: "Mount",
            cost: { amount: 50, unit: "gp" },
            speed: 40,
            carryingCapacity: 540,
            description: "A large horse bred for heavy labor and pulling loads."
        },
        ridingHorse: {
            name: "Horse, riding",
            category: "Mount",
            cost: { amount: 75, unit: "gp" },
            speed: 60,
            carryingCapacity: 480,
            description: "A horse bred and trained for riding."
        },
        mastiff: {
            name: "Mastiff",
            category: "Mount",
            cost: { amount: 25, unit: "gp" },
            speed: 40,
            carryingCapacity: 195,
            description: "A large dog that can serve as a mount for Small creatures."
        },
        pony: {
            name: "Pony",
            category: "Mount",
            cost: { amount: 30, unit: "gp" },
            speed: 40,
            carryingCapacity: 225,
            description: "A smaller horse, suitable as a mount for smaller humanoids."
        },
        warhorse: {
            name: "Warhorse",
            category: "Mount",
            cost: { amount: 400, unit: "gp" },
            speed: 60,
            carryingCapacity: 540,
            description: "A horse trained for combat, able to wear barding."
        },

        // Tack, Harness, and Drawn Vehicles
        barding: {
            name: "Barding",
            category: "Tack and Harness",
            cost: { amount: 4, unit: "x armor cost" },
            weight: "2x armor weight",
            description: "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor can be made as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much."
        },
        bitAndBridle: {
            name: "Bit and Bridle",
            category: "Tack and Harness",
            cost: { amount: 2, unit: "gp" },
            weight: 1,
            description: "Equipment used to control and direct a mount."
        },
        carriage: {
            name: "Carriage",
            category: "Drawn Vehicle",
            cost: { amount: 100, unit: "gp" },
            weight: 600,
            description: "An enclosed, four-wheeled vehicle for passengers."
        },
        cart: {
            name: "Cart",
            category: "Drawn Vehicle",
            cost: { amount: 15, unit: "gp" },
            weight: 200,
            description: "A simple two-wheeled vehicle for transporting goods."
        },
        chariot: {
            name: "Chariot",
            category: "Drawn Vehicle",
            cost: { amount: 250, unit: "gp" },
            weight: 100,
            description: "A two-wheeled vehicle used in warfare and racing."
        },
        feed: {
            name: "Feed (per day)",
            category: "Tack and Harness",
            cost: { amount: 5, unit: "cp" },
            weight: 10,
            description: "A day's worth of food for a mount."
        },
        saddleExotic: {
            name: "Saddle, Exotic",
            category: "Tack and Harness",
            cost: { amount: 60, unit: "gp" },
            weight: 40,
            description: "An exotic saddle is required for riding any aquatic or flying mount."
        },
        saddleMilitary: {
            name: "Saddle, Military",
            category: "Tack and Harness",
            cost: { amount: 20, unit: "gp" },
            weight: 30,
            description: "A military saddle braces the rider, helping you keep your seat on an active mount in battle. It gives you advantage on any check you make to remain mounted."
        },
        saddlePack: {
            name: "Saddle, Pack",
            category: "Tack and Harness",
            cost: { amount: 5, unit: "gp" },
            weight: 15,
            description: "A pack saddle holds gear and supplies, but not a rider."
        },
        saddleRiding: {
            name: "Saddle, Riding",
            category: "Tack and Harness",
            cost: { amount: 10, unit: "gp" },
            weight: 25,
            description: "A standard saddle for riding a mount."
        },
        saddlebags: {
            name: "Saddlebags",
            category: "Tack and Harness",
            cost: { amount: 4, unit: "gp" },
            weight: 8,
            description: "Bags that hang from a saddle for storing supplies."
        },
        sled: {
            name: "Sled",
            category: "Drawn Vehicle",
            cost: { amount: 20, unit: "gp" },
            weight: 300,
            description: "A vehicle on runners for traveling over snow or ice."
        },
        stabling: {
            name: "Stabling (per day)",
            category: "Tack and Harness",
            cost: { amount: 5, unit: "sp" },
            weight: 0,
            description: "A day's worth of stable care for a mount, including food and shelter."
        },
        wagon: {
            name: "Wagon",
            category: "Drawn Vehicle",
            cost: { amount: 35, unit: "gp" },
            weight: 400,
            description: "A four-wheeled vehicle for transporting heavy loads."
        },

        // Waterborne Vehicles
        galley: {
            name: "Galley",
            category: "Waterborne Vehicle",
            cost: { amount: 30000, unit: "gp" },
            speed: 4,
            speedUnit: "mph",
            crew: 80,
            passengers: 0,
            cargo: 150,
            cargoUnit: "tons",
            description: "A large ship propelled by oars and sails, used for warfare and trade."
        },
        keelboat: {
            name: "Keelboat",
            category: "Waterborne Vehicle",
            cost: { amount: 3000, unit: "gp" },
            speed: 1,
            speedUnit: "mph",
            crew: 1,
            passengers: 6,
            cargo: 0.5,
            cargoUnit: "tons",
            description: "A riverboat propelled by oars or poles, used for river travel and fishing."
        },
        longship: {
            name: "Longship",
            category: "Waterborne Vehicle",
            cost: { amount: 10000, unit: "gp" },
            speed: 3,
            speedUnit: "mph",
            crew: 40,
            passengers: 150,
            cargo: 10,
            cargoUnit: "tons",
            description: "A narrow, long ship used by raiders and explorers."
        },
        rowboat: {
            name: "Rowboat",
            category: "Waterborne Vehicle",
            cost: { amount: 50, unit: "gp" },
            speed: 1.5,
            speedUnit: "mph",
            crew: 1,
            passengers: 3,
            cargo: 0,
            cargoUnit: "tons",
            description: "A small boat propelled by oars."
        },
        sailingShip: {
            name: "Sailing Ship",
            category: "Waterborne Vehicle",
            cost: { amount: 10000, unit: "gp" },
            speed: 2,
            speedUnit: "mph",
            crew: 20,
            passengers: 20,
            cargo: 100,
            cargoUnit: "tons",
            description: "A large ship propelled by sails, used for long voyages and trade."
        },
        warship: {
            name: "Warship",
            category: "Waterborne Vehicle",
            cost: { amount: 25000, unit: "gp" },
            speed: 2.5,
            speedUnit: "mph",
            crew: 60,
            passengers: 60,
            cargo: 200,
            cargoUnit: "tons",
            description: "A heavily armed ship designed for naval combat."
        }
    },

    // ==========================================
    // TRADE GOODS
    // ==========================================
    tradeGoods: {
        wheat: {
            name: "Wheat (1 lb.)",
            cost: { amount: 1, unit: "cp" },
            weight: 1,
            description: "A staple grain used for making bread and other foods."
        },
        flour: {
            name: "Flour (1 lb.)",
            cost: { amount: 2, unit: "cp" },
            weight: 1,
            description: "Ground wheat used for baking."
        },
        salt: {
            name: "Salt (1 lb.)",
            cost: { amount: 5, unit: "cp" },
            weight: 1,
            description: "An essential seasoning and preservative."
        },
        iron: {
            name: "Iron (1 lb.)",
            cost: { amount: 1, unit: "sp" },
            weight: 1,
            description: "A common metal used for tools and weapons."
        },
        canvas: {
            name: "Canvas (1 sq. yd.)",
            cost: { amount: 1, unit: "sp" },
            weight: 1,
            description: "Heavy cloth used for sails and tents."
        },
        copper: {
            name: "Copper (1 lb.)",
            cost: { amount: 5, unit: "sp" },
            weight: 1,
            description: "A reddish metal used for coins and household items."
        },
        cotton: {
            name: "Cotton Cloth (1 sq. yd.)",
            cost: { amount: 5, unit: "sp" },
            weight: 0.5,
            description: "Light cloth used for clothing."
        },
        ginger: {
            name: "Ginger (1 lb.)",
            cost: { amount: 1, unit: "gp" },
            weight: 1,
            description: "A spicy root used in cooking and medicine."
        },
        goat: {
            name: "Goat",
            cost: { amount: 1, unit: "gp" },
            weight: 0,
            description: "A small livestock animal raised for milk, meat, and hide."
        },
        cinnamon: {
            name: "Cinnamon (1 lb.)",
            cost: { amount: 2, unit: "gp" },
            weight: 1,
            description: "A sweet, aromatic spice used in cooking and baking."
        },
        pepper: {
            name: "Pepper (1 lb.)",
            cost: { amount: 2, unit: "gp" },
            weight: 1,
            description: "A common spice used to add heat to dishes."
        },
        sheep: {
            name: "Sheep",
            cost: { amount: 2, unit: "gp" },
            weight: 0,
            description: "A livestock animal raised for wool and meat."
        },
        cloves: {
            name: "Cloves (1 lb.)",
            cost: { amount: 3, unit: "gp" },
            weight: 1,
            description: "An aromatic spice used in cooking and medicine."
        },
        pig: {
            name: "Pig",
            cost: { amount: 3, unit: "gp" },
            weight: 0,
            description: "A livestock animal raised for meat."
        },
        linen: {
            name: "Linen (1 sq. yd.)",
            cost: { amount: 5, unit: "gp" },
            weight: 0.5,
            description: "Fine cloth made from flax fibers."
        },
        silk: {
            name: "Silk (1 sq. yd.)",
            cost: { amount: 10, unit: "gp" },
            weight: 0.25,
            description: "A luxurious fabric prized for its softness and sheen."
        },
        cow: {
            name: "Cow",
            cost: { amount: 10, unit: "gp" },
            weight: 0,
            description: "A large livestock animal raised for milk, meat, and leather."
        },
        saffron: {
            name: "Saffron (1 lb.)",
            cost: { amount: 15, unit: "gp" },
            weight: 1,
            description: "A rare and expensive spice with a distinctive flavor and color."
        },
        ox: {
            name: "Ox",
            cost: { amount: 15, unit: "gp" },
            weight: 0,
            description: "A castrated bull used as a draft animal."
        },
        silver: {
            name: "Silver (1 lb.)",
            cost: { amount: 5, unit: "gp" },
            weight: 1,
            description: "A precious metal used for coins, jewelry, and silverware."
        },
        gold: {
            name: "Gold (1 lb.)",
            cost: { amount: 50, unit: "gp" },
            weight: 1,
            description: "A precious metal used for coins and jewelry."
        },
        platinum: {
            name: "Platinum (1 lb.)",
            cost: { amount: 500, unit: "gp" },
            weight: 1,
            description: "A rare and valuable metal used for the finest jewelry and coins."
        }
    },

    // ==========================================
    // SERVICES
    // ==========================================
    services: {
        coachCabBetweenTowns: {
            name: "Coach cab (between towns)",
            cost: { amount: 3, unit: "cp per mile" },
            description: "Hired transportation between towns via coach."
        },
        coachCabWithinCity: {
            name: "Coach cab (within a city)",
            cost: { amount: 1, unit: "cp" },
            description: "Hired transportation within a city."
        },
        hirelingSkilled: {
            name: "Hireling, skilled",
            cost: { amount: 2, unit: "gp per day" },
            description: "A skilled laborer such as a carpenter, blacksmith, or scribe."
        },
        hirelingUnskilled: {
            name: "Hireling, unskilled",
            cost: { amount: 2, unit: "sp per day" },
            description: "An unskilled laborer for simple tasks."
        },
        messenger: {
            name: "Messenger",
            cost: { amount: 2, unit: "cp per mile" },
            description: "A courier to deliver messages or small packages."
        },
        roadOrGateToll: {
            name: "Road or gate toll",
            cost: { amount: 1, unit: "cp" },
            description: "Fee for using a road or passing through a gate."
        },
        shipPassage: {
            name: "Ship's passage",
            cost: { amount: 1, unit: "sp per mile" },
            description: "Passage on a ship traveling to a destination."
        },

        // Spellcasting Services
        spellcasting: {
            name: "Spellcasting",
            description: "The cost of hiring a spellcaster to cast a spell varies based on the spell level and availability.",
            costs: {
                cantrip: { amount: 10, unit: "gp" },
                level1: { amount: 10, unit: "gp" },
                level2: { amount: 50, unit: "gp" },
                level3: { amount: 100, unit: "gp" },
                level4: { amount: 200, unit: "gp" },
                level5: { amount: 500, unit: "gp" },
                level6: { amount: 1000, unit: "gp" },
                level7: { amount: 2500, unit: "gp" },
                level8: { amount: 5000, unit: "gp" },
                level9: { amount: 10000, unit: "gp" }
            }
        }
    },

    // ==========================================
    // FOOD, DRINK, AND LODGING
    // ==========================================
    foodDrinkLodging: {
        // Ale
        aleGallon: {
            name: "Ale (gallon)",
            cost: { amount: 2, unit: "sp" },
            description: "A gallon of common ale."
        },
        aleMug: {
            name: "Ale (mug)",
            cost: { amount: 4, unit: "cp" },
            description: "A mug of common ale."
        },
        banquet: {
            name: "Banquet (per person)",
            cost: { amount: 10, unit: "gp" },
            description: "An extravagant feast with multiple courses."
        },
        bread: {
            name: "Bread, loaf",
            cost: { amount: 2, unit: "cp" },
            description: "A loaf of fresh bread."
        },
        cheese: {
            name: "Cheese, hunk",
            cost: { amount: 1, unit: "sp" },
            description: "A hunk of aged cheese."
        },

        // Inn Stay
        innStaySqualid: {
            name: "Inn stay (squalid)",
            cost: { amount: 7, unit: "cp per day" },
            description: "A squalid room in a run-down inn."
        },
        innStayPoor: {
            name: "Inn stay (poor)",
            cost: { amount: 1, unit: "sp per day" },
            description: "A poor room with basic amenities."
        },
        innStayModest: {
            name: "Inn stay (modest)",
            cost: { amount: 5, unit: "sp per day" },
            description: "A modest room with decent amenities."
        },
        innStayComfortable: {
            name: "Inn stay (comfortable)",
            cost: { amount: 8, unit: "sp per day" },
            description: "A comfortable room with good amenities."
        },
        innStayWealthy: {
            name: "Inn stay (wealthy)",
            cost: { amount: 2, unit: "gp per day" },
            description: "A wealthy room with fine amenities."
        },
        innStayAristocratic: {
            name: "Inn stay (aristocratic)",
            cost: { amount: 4, unit: "gp per day" },
            description: "An aristocratic suite with the finest amenities."
        },

        // Meals
        mealsSqualid: {
            name: "Meals (squalid)",
            cost: { amount: 3, unit: "cp per day" },
            description: "Barely edible food in meager portions."
        },
        mealsPoor: {
            name: "Meals (poor)",
            cost: { amount: 6, unit: "cp per day" },
            description: "Simple, filling but unappetizing food."
        },
        mealsModest: {
            name: "Meals (modest)",
            cost: { amount: 3, unit: "sp per day" },
            description: "Decent food in adequate portions."
        },
        mealsComfortable: {
            name: "Meals (comfortable)",
            cost: { amount: 5, unit: "sp per day" },
            description: "Good food with some variety."
        },
        mealsWealthy: {
            name: "Meals (wealthy)",
            cost: { amount: 8, unit: "sp per day" },
            description: "Fine food with excellent variety."
        },
        mealsAristocratic: {
            name: "Meals (aristocratic)",
            cost: { amount: 2, unit: "gp per day" },
            description: "Exquisite food prepared by skilled chefs."
        },

        meat: {
            name: "Meat, chunk",
            cost: { amount: 3, unit: "sp" },
            description: "A chunk of cooked meat."
        },
        wineCommon: {
            name: "Wine, common (pitcher)",
            cost: { amount: 2, unit: "sp" },
            description: "A pitcher of common wine."
        },
        wineFine: {
            name: "Wine, fine (bottle)",
            cost: { amount: 10, unit: "gp" },
            description: "A bottle of fine vintage wine."
        }
    },

    // ==========================================
    // LIFESTYLE EXPENSES
    // ==========================================
    lifestyleExpenses: {
        wretched: {
            name: "Wretched",
            cost: { amount: 0, unit: "gp per day" },
            description: "You live in inhumane conditions. With no place to call home, you shelter wherever you can, sneaking into barns, huddling in old crates, and relying on the good graces of people better off than you."
        },
        squalid: {
            name: "Squalid",
            cost: { amount: 1, unit: "sp per day" },
            description: "You live in a leaky stable, a mud-floored hut just outside town, or a vermin-infested boarding house in the worst part of town. You have shelter from the elements, but you live in a desperate and often violent environment."
        },
        poor: {
            name: "Poor",
            cost: { amount: 2, unit: "sp per day" },
            description: "A poor lifestyle means going without the comforts available to most. Simple food and lodgings, threadbare clothing, and unpredictable conditions."
        },
        modest: {
            name: "Modest",
            cost: { amount: 1, unit: "gp per day" },
            description: "A modest lifestyle keeps you out of the slums and ensures you can maintain your equipment. You live in an older part of town, renting a room in a boarding house, inn, or temple."
        },
        comfortable: {
            name: "Comfortable",
            cost: { amount: 2, unit: "gp per day" },
            description: "Choosing a comfortable lifestyle means that you can afford nicer clothing and can easily maintain your equipment. You live in a small cottage in a middle-class neighborhood or in a private room at a fine inn."
        },
        wealthy: {
            name: "Wealthy",
            cost: { amount: 4, unit: "gp per day" },
            description: "Choosing a wealthy lifestyle means living a life of luxury, though you might not have achieved the social status associated with the old money of nobility or royalty."
        },
        aristocratic: {
            name: "Aristocratic",
            cost: { amount: 10, unit: "gp per day minimum" },
            description: "You live a life of plenty and comfort. You move in circles populated by the most powerful people in the community. You have excellent lodgings, perhaps a townhouse or a suite at the finest inn."
        }
    }
};

// Helper functions for equipment lookups
const EquipmentUtils = {
    // Get all weapons by category
    getWeaponsByCategory: function(category) {
        return Object.values(EQUIPMENT.weapons).filter(w => w.category === category);
    },

    // Get all armor by category
    getArmorByCategory: function(category) {
        return Object.values(EQUIPMENT.armor).filter(a => a.category === category);
    },

    // Get all tools by category
    getToolsByCategory: function(category) {
        return Object.values(EQUIPMENT.tools).filter(t => t.category === category);
    },

    // Get weapons with a specific property
    getWeaponsWithProperty: function(property) {
        return Object.values(EQUIPMENT.weapons).filter(w => w.properties && w.properties.includes(property));
    },

    // Calculate armor class for a given armor and dexterity modifier
    calculateAC: function(armorId, dexMod) {
        const armor = EQUIPMENT.armor[armorId];
        if (!armor) return 10 + dexMod; // No armor

        let ac = armor.ac;
        if (armor.acBonus === "Dex") {
            const maxDex = armor.maxDexBonus !== null ? armor.maxDexBonus : dexMod;
            ac += Math.min(dexMod, maxDex);
        } else if (armor.acBonus === "shield") {
            // Shield provides a flat AC bonus (typically +2) to be added to existing AC
            ac = armor.ac;
        }
        return ac;
    },

    // Format cost as string
    formatCost: function(cost) {
        if (!cost) return "Free";
        if (typeof cost.unit === "string" && cost.unit.includes("per")) {
            return `${cost.amount} ${cost.unit}`;
        }
        return `${cost.amount} ${cost.unit}`;
    },

    // Get all simple weapons
    getSimpleWeapons: function() {
        return Object.values(EQUIPMENT.weapons).filter(w =>
            w.category === "Simple Melee" || w.category === "Simple Ranged"
        );
    },

    // Get all martial weapons
    getMartialWeapons: function() {
        return Object.values(EQUIPMENT.weapons).filter(w =>
            w.category === "Martial Melee" || w.category === "Martial Ranged"
        );
    },

    // Get all finesse weapons
    getFinesseWeapons: function() {
        return this.getWeaponsWithProperty("finesse");
    },

    // Get all ranged weapons
    getRangedWeapons: function() {
        return Object.values(EQUIPMENT.weapons).filter(w =>
            w.category.includes("Ranged") || (w.properties && w.properties.includes("thrown"))
        );
    },

    // Search equipment by name
    searchByName: function(searchTerm) {
        const results = [];
        const term = searchTerm.toLowerCase();

        const searchCategory = (category, categoryName) => {
            Object.entries(category).forEach(([id, item]) => {
                if (item.name && item.name.toLowerCase().includes(term)) {
                    results.push({ ...item, id, category: categoryName });
                }
            });
        };

        searchCategory(EQUIPMENT.weapons, "weapons");
        searchCategory(EQUIPMENT.armor, "armor");
        searchCategory(EQUIPMENT.adventuringGear, "adventuringGear");
        searchCategory(EQUIPMENT.tools, "tools");
        searchCategory(EQUIPMENT.mountsAndVehicles, "mountsAndVehicles");
        searchCategory(EQUIPMENT.tradeGoods, "tradeGoods");

        return results;
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EQUIPMENT, EquipmentUtils };
}
