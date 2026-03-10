// D&D 5e Character Sheet PDF Export
// Uses pdf-lib to generate a standard-layout character sheet PDF

// Helper functions for PDF export (duplicated from characters.js for standalone use)
function calculateAbilities(char) {
    const abilities = {};
    const abilityNames = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
    abilityNames.forEach(ab => {
        const base = char.abilities ? (char.abilities[ab] || 10) : 10;
        const racial = char.racialBonuses ? (char.racialBonuses[ab] || 0) : 0;
        const total = base + racial;
        abilities[ab] = {
            base: base,
            racial: racial,
            total: total,
            mod: Math.floor((total - 10) / 2)
        };
    });
    return abilities;
}

function calculateHP(char, abilities) {
    const cls = char.class ? CLASSES[char.class] : null;
    const hitDie = cls ? cls.hitDie : 8;
    const conMod = abilities.con ? abilities.con.mod : 0;
    const level = char.level || 1;
    // Level 1: max hit die + CON mod (minimum 1), subsequent levels: average + CON mod (minimum 1 per level)
    const level1HP = Math.max(1, hitDie + conMod);
    const hpPerLevel = Math.max(1, Math.floor(hitDie / 2) + 1 + conMod);
    return level1HP + (level - 1) * hpPerLevel;
}

function calculateAC(char, abilities) {
    const dexMod = abilities.dex ? abilities.dex.mod : 0;
    const conMod = abilities.con ? abilities.con.mod : 0;
    const wisMod = abilities.wis ? abilities.wis.mod : 0;

    // Get equipment for armor detection
    let equipment = [];
    const cls = char.class ? CLASSES[char.class] : null;
    const bg = char.background ? BACKGROUNDS[char.background] : null;
    if (cls && cls.startingEquipment) equipment = equipment.concat(cls.startingEquipment);
    if (bg && bg.equipment) equipment = equipment.concat(bg.equipment);
    if (char.equipment) equipment = equipment.concat(char.equipment);
    const equipmentLower = equipment.map(e => (e || '').toLowerCase());

    let armorAC = null;
    let maxDexBonus = null;
    let hasShield = equipmentLower.some(e => e.includes('shield'));

    // Check armor types
    if (equipmentLower.some(e => e.includes('plate') && !e.includes('half') && !e.includes('breast'))) {
        armorAC = 18; maxDexBonus = 0;
    } else if (equipmentLower.some(e => e.includes('splint'))) {
        armorAC = 17; maxDexBonus = 0;
    } else if (equipmentLower.some(e => e.includes('chain mail'))) {
        armorAC = 16; maxDexBonus = 0;
    } else if (equipmentLower.some(e => e.includes('half plate'))) {
        armorAC = 15; maxDexBonus = 2;
    } else if (equipmentLower.some(e => e.includes('breastplate'))) {
        armorAC = 14; maxDexBonus = 2;
    } else if (equipmentLower.some(e => e.includes('scale mail'))) {
        armorAC = 14; maxDexBonus = 2;
    } else if (equipmentLower.some(e => e.includes('chain shirt'))) {
        armorAC = 13; maxDexBonus = 2;
    } else if (equipmentLower.some(e => e.includes('studded leather'))) {
        armorAC = 12; maxDexBonus = null;
    } else if (equipmentLower.some(e => e.includes('leather'))) {
        armorAC = 11; maxDexBonus = null;
    }

    let ac;
    if (armorAC !== null) {
        const effectiveDex = maxDexBonus !== null ? Math.min(dexMod, maxDexBonus) : dexMod;
        ac = armorAC + effectiveDex;
    } else {
        ac = 10 + dexMod;
        if (char.class === 'barbarian') ac = Math.max(ac, 10 + dexMod + conMod);
        if (char.class === 'monk') ac = Math.max(ac, 10 + dexMod + wisMod);
    }

    if (hasShield) ac += 2;
    return ac;
}

function calculateSpeed(char) {
    const race = char.race ? RACES[char.race] : null;
    return race ? (race.speed || 30) : 30;
}

function getProficiencyBonus(level) {
    // Proficiency bonus: +2 at 1-4, +3 at 5-8, +4 at 9-12, +5 at 13-16, +6 at 17-20
    return Math.floor((level - 1) / 4) + 2;
}

function getDisplayRaceName(char) {
    if (!char.race) return 'Unknown';
    const race = RACES[char.race];
    if (!race) return char.race;
    let name = race.name;
    if (char.subrace && race.subraces && race.subraces[char.subrace]) {
        name = race.subraces[char.subrace].name;
    }
    return name;
}

function getDisplayClassName(char) {
    if (!char.class) return 'Unknown';
    const cls = CLASSES[char.class];
    return cls ? cls.name : char.class;
}

function formatAlignment(alignment) {
    if (!alignment) return 'Unknown';
    const alignments = {
        'lg': 'Lawful Good', 'ng': 'Neutral Good', 'cg': 'Chaotic Good',
        'ln': 'Lawful Neutral', 'tn': 'True Neutral', 'cn': 'Chaotic Neutral',
        'le': 'Lawful Evil', 'ne': 'Neutral Evil', 'ce': 'Chaotic Evil'
    };
    return alignments[alignment.toLowerCase()] || alignment;
}

async function exportCharacterPDF(index) {
    try {
        const char = characters[index];
        if (!char) return;

        // Check if PDFLib is loaded
        if (typeof PDFLib === 'undefined') {
            alert('PDF library failed to load. Please refresh the page and try again.');
            return;
        }

        const { PDFDocument, rgb, StandardFonts } = PDFLib;

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([612, 792]); // US Letter

    const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const fontItalic = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

    // Colors
    const black = rgb(0, 0, 0);
    const darkGray = rgb(0.25, 0.25, 0.25);
    const medGray = rgb(0.5, 0.5, 0.5);
    const lightGray = rgb(0.85, 0.85, 0.85);
    const white = rgb(1, 1, 1);
    const gold = rgb(0.55, 0.42, 0.12);

    // Calculate all character stats
    const abilities = calculateAbilities(char);
    const hp = calculateHP(char, abilities);
    const ac = calculateAC(char, abilities);
    const speed = calculateSpeed(char);
    const level = char.level || 1;
    const profBonus = getProficiencyBonus(level);
    const raceName = getDisplayRaceName(char);
    const className = getDisplayClassName(char);
    const cls = char.class ? CLASSES[char.class] : null;
    const bg = char.background ? BACKGROUNDS[char.background] : null;
    const backgroundName = bg ? bg.name : (char.backgroundName || '');

    // Saving throw proficiencies
    const savingThrowProfs = cls ? (cls.savingThrows || []) : [];

    // Skill proficiencies
    const skillProfs = new Set();
    if (char.proficiencies && char.proficiencies.skills) {
        char.proficiencies.skills.forEach(s => skillProfs.add(s));
    }
    if (bg && bg.skillProficiencies) {
        bg.skillProficiencies.forEach(s => skillProfs.add(s));
    }

    // All 18 skills with their ability
    const allSkills = [
        { name: 'Acrobatics', ability: 'dex' },
        { name: 'Animal Handling', ability: 'wis' },
        { name: 'Arcana', ability: 'int' },
        { name: 'Athletics', ability: 'str' },
        { name: 'Deception', ability: 'cha' },
        { name: 'History', ability: 'int' },
        { name: 'Insight', ability: 'wis' },
        { name: 'Intimidation', ability: 'cha' },
        { name: 'Investigation', ability: 'int' },
        { name: 'Medicine', ability: 'wis' },
        { name: 'Nature', ability: 'int' },
        { name: 'Perception', ability: 'wis' },
        { name: 'Performance', ability: 'cha' },
        { name: 'Persuasion', ability: 'cha' },
        { name: 'Religion', ability: 'int' },
        { name: 'Sleight of Hand', ability: 'dex' },
        { name: 'Stealth', ability: 'dex' },
        { name: 'Survival', ability: 'wis' }
    ];

    // Helper functions
    function drawText(text, x, y, size, font, color) {
        page.drawText(String(text), { x, y, size, font: font || fontRegular, color: color || black });
    }

    function drawCenteredText(text, cx, y, size, font, color) {
        const w = (font || fontRegular).widthOfTextAtSize(String(text), size);
        drawText(text, cx - w / 2, y, size, font, color);
    }

    function drawBox(x, y, w, h, borderWidth) {
        page.drawRectangle({ x, y, width: w, height: h, borderColor: black, borderWidth: borderWidth || 1, color: white });
    }

    function drawFilledBox(x, y, w, h, fillColor, borderWidth) {
        page.drawRectangle({ x, y, width: w, height: h, borderColor: black, borderWidth: borderWidth || 1, color: fillColor });
    }

    function drawRoundedBox(x, y, w, h, borderWidth) {
        // Approximate with rectangle
        page.drawRectangle({ x, y, width: w, height: h, borderColor: darkGray, borderWidth: borderWidth || 0.75, color: white });
    }

    function modStr(mod) {
        return mod >= 0 ? `+${mod}` : `${mod}`;
    }

    // ==================== HEADER ====================
    // Dark header bar
    drawFilledBox(20, 738, 572, 42, rgb(0.12, 0.12, 0.15), 1.5);

    // Character name
    drawText(char.name || 'Unnamed Character', 30, 750, 16, fontBold, white);

    // Class & Level | Race | Background
    drawText(`${className} ${level}`, 30, 740, 8, fontRegular, rgb(0.75, 0.65, 0.35));
    drawText(`${raceName}  |  ${backgroundName}  |  ${formatAlignment(char.alignment)}`, 200, 750, 9, fontRegular, rgb(0.8, 0.8, 0.8));

    // Field labels row below header
    const headerY = 718;
    const fieldW = 90;
    const fields = [
        { label: 'CLASS & LEVEL', value: `${className} ${level}` },
        { label: 'BACKGROUND', value: backgroundName },
        { label: 'PLAYER NAME', value: '' },
        { label: 'RACE', value: raceName },
        { label: 'ALIGNMENT', value: formatAlignment(char.alignment) },
        { label: 'EXPERIENCE', value: '' }
    ];

    fields.forEach((f, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const fx = 200 + col * (fieldW + 10);
        const fy = headerY - row * 28;
        drawRoundedBox(fx, fy, fieldW, 24);
        drawText(f.value, fx + 4, fy + 8, 8, fontRegular, darkGray);
        drawText(f.label, fx + 4, fy - 8, 5.5, fontBold, medGray);
    });

    // ==================== LEFT COLUMN: ABILITY SCORES ====================
    const abilityNames = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
    const abilityLabels = ['STRENGTH', 'DEXTERITY', 'CONSTITUTION', 'INTELLIGENCE', 'WISDOM', 'CHARISMA'];
    const abX = 28;
    const abStartY = 640;
    const abSpacing = 90;
    const abW = 68;
    const abH = 82;

    abilityNames.forEach((ab, i) => {
        const ay = abStartY - i * abSpacing;
        const data = abilities[ab];

        // Outer box
        drawFilledBox(abX, ay, abW, abH, rgb(0.96, 0.96, 0.96), 1.5);

        // Label
        drawCenteredText(abilityLabels[i], abX + abW / 2, ay + abH - 14, 6, fontBold, gold);

        // Modifier (large, centered)
        drawCenteredText(modStr(data.mod), abX + abW / 2, ay + 30, 22, fontBold, black);

        // Score (small box at bottom)
        const scoreBoxW = 28;
        const scoreBoxH = 18;
        const scoreBoxX = abX + (abW - scoreBoxW) / 2;
        const scoreBoxY = ay + 4;
        page.drawEllipse({
            x: scoreBoxX + scoreBoxW / 2,
            y: scoreBoxY + scoreBoxH / 2,
            xScale: scoreBoxW / 2,
            yScale: scoreBoxH / 2,
            borderColor: darkGray,
            borderWidth: 1,
            color: white
        });
        drawCenteredText(String(data.total), abX + abW / 2, scoreBoxY + 5, 10, fontRegular, darkGray);
    });

    // ==================== CENTER COLUMN: SAVES, SKILLS ====================
    const centerX = 108;

    // Inspiration
    drawRoundedBox(centerX, 670, 100, 18);
    drawText('INSPIRATION', centerX + 22, 674, 7, fontBold, darkGray);
    page.drawCircle({ x: centerX + 10, y: 679, size: 6, borderColor: darkGray, borderWidth: 1, color: white });

    // Proficiency Bonus
    drawRoundedBox(centerX, 648, 100, 18);
    drawCenteredText(`+${profBonus}`, centerX + 10, 652, 10, fontBold, black);
    drawText('PROFICIENCY BONUS', centerX + 22, 652, 7, fontBold, darkGray);

    // Saving Throws
    const savesY = 622;
    drawRoundedBox(centerX, savesY - 6 * 16 - 10, 155, 6 * 16 + 22, 1);
    drawCenteredText('SAVING THROWS', centerX + 77, savesY - 6 * 16 - 6, 6, fontBold, medGray);

    abilityNames.forEach((ab, i) => {
        const sy = savesY - i * 16;
        const isProf = savingThrowProfs.includes(ab);
        const mod = abilities[ab].mod + (isProf ? profBonus : 0);

        // Proficiency dot
        if (isProf) {
            page.drawCircle({ x: centerX + 10, y: sy + 4, size: 4, color: black });
        } else {
            page.drawCircle({ x: centerX + 10, y: sy + 4, size: 4, borderColor: darkGray, borderWidth: 0.75, color: white });
        }

        drawText(modStr(mod), centerX + 18, sy, 8, fontRegular, black);
        drawText(ab.charAt(0).toUpperCase() + ab.slice(1), centerX + 38, sy, 8, fontRegular, darkGray);
    });

    // Skills
    const skillStartY = savesY - 6 * 16 - 30;
    const skillH = 18 * 14.5 + 22;
    drawRoundedBox(centerX, skillStartY - skillH, 155, skillH, 1);
    drawCenteredText('SKILLS', centerX + 77, skillStartY - skillH + 4, 6, fontBold, medGray);

    allSkills.forEach((skill, i) => {
        const sy = skillStartY - 4 - i * 14.5;
        const isProf = skillProfs.has(skill.name);
        const abilityData = abilities[skill.ability] || { mod: 0 };
        const mod = abilityData.mod + (isProf ? profBonus : 0);

        // Proficiency dot
        if (isProf) {
            page.drawCircle({ x: centerX + 10, y: sy + 3, size: 3.5, color: black });
        } else {
            page.drawCircle({ x: centerX + 10, y: sy + 3, size: 3.5, borderColor: darkGray, borderWidth: 0.5, color: white });
        }

        drawText(modStr(mod), centerX + 18, sy, 7.5, fontRegular, black);
        drawText(`${skill.name} (${skill.ability.toUpperCase()})`, centerX + 36, sy, 7, fontRegular, darkGray);
    });

    // Passive Perception
    const ppY = skillStartY - skillH - 16;
    const passivePerception = 10 + abilities.wis.mod + (skillProfs.has('Perception') ? profBonus : 0);
    drawRoundedBox(centerX, ppY, 155, 16);
    drawCenteredText(String(passivePerception), centerX + 12, ppY + 4, 9, fontBold, black);
    drawText('PASSIVE WISDOM (PERCEPTION)', centerX + 26, ppY + 4, 6, fontBold, medGray);

    // ==================== RIGHT COLUMN ====================
    const rightX = 278;

    // AC / Initiative / Speed - three boxes
    const combatY = 670;
    const combatBoxW = 58;
    const combatBoxH = 48;
    const combatGap = 8;

    // AC (shield shape approximated)
    drawFilledBox(rightX, combatY, combatBoxW, combatBoxH, rgb(0.95, 0.95, 0.95), 1.5);
    drawCenteredText(String(ac), rightX + combatBoxW / 2, combatY + 18, 20, fontBold, black);
    drawCenteredText('ARMOR CLASS', rightX + combatBoxW / 2, combatY + 4, 5.5, fontBold, medGray);

    // Initiative
    const initX = rightX + combatBoxW + combatGap;
    const initMod = abilities.dex.mod;
    drawFilledBox(initX, combatY, combatBoxW, combatBoxH, rgb(0.95, 0.95, 0.95), 1.5);
    drawCenteredText(modStr(initMod), initX + combatBoxW / 2, combatY + 18, 20, fontBold, black);
    drawCenteredText('INITIATIVE', initX + combatBoxW / 2, combatY + 4, 5.5, fontBold, medGray);

    // Speed
    const spdX = initX + combatBoxW + combatGap;
    drawFilledBox(spdX, combatY, combatBoxW, combatBoxH, rgb(0.95, 0.95, 0.95), 1.5);
    drawCenteredText(`${speed} ft`, spdX + combatBoxW / 2, combatY + 18, 16, fontBold, black);
    drawCenteredText('SPEED', spdX + combatBoxW / 2, combatY + 4, 5.5, fontBold, medGray);

    // Hit Points
    const hpY = combatY - 10 - 80;
    const hpW = combatBoxW * 3 + combatGap * 2;
    drawRoundedBox(rightX, hpY, hpW, 80, 1.5);
    drawText(`Hit Point Maximum: ${hp}`, rightX + 6, hpY + 64, 7, fontItalic, medGray);
    drawCenteredText(String(hp), rightX + hpW / 2, hpY + 28, 28, fontBold, black);
    drawCenteredText('CURRENT HIT POINTS', rightX + hpW / 2, hpY + 4, 6, fontBold, medGray);

    // Temp HP
    const tmpY = hpY - 36;
    drawRoundedBox(rightX, tmpY, hpW, 32);
    drawCenteredText('TEMPORARY HIT POINTS', rightX + hpW / 2, tmpY + 4, 6, fontBold, medGray);

    // Hit Dice & Death Saves
    const hdY = tmpY - 44;
    const halfW = hpW / 2 - 3;

    // Hit Dice
    drawRoundedBox(rightX, hdY, halfW, 40);
    const hitDie = cls ? `d${cls.hitDie}` : 'd8';
    drawText(`Total: ${level}${hitDie}`, rightX + 6, hdY + 24, 7, fontItalic, medGray);
    drawCenteredText(`${level}${hitDie}`, rightX + halfW / 2, hdY + 10, 12, fontBold, black);
    drawCenteredText('HIT DICE', rightX + halfW / 2, hdY + 2, 5.5, fontBold, medGray);

    // Death Saves
    const dsX = rightX + halfW + 6;
    drawRoundedBox(dsX, hdY, halfW, 40);
    drawText('Successes', dsX + 6, hdY + 24, 6.5, fontRegular, darkGray);
    drawText('Failures', dsX + 6, hdY + 14, 6.5, fontRegular, darkGray);
    // Draw circles for death saves
    for (let i = 0; i < 3; i++) {
        page.drawCircle({ x: dsX + halfW - 30 + i * 12, y: hdY + 28, size: 4, borderColor: darkGray, borderWidth: 0.75, color: white });
        page.drawCircle({ x: dsX + halfW - 30 + i * 12, y: hdY + 18, size: 4, borderColor: darkGray, borderWidth: 0.75, color: white });
    }
    drawCenteredText('DEATH SAVES', dsX + halfW / 2, hdY + 2, 5.5, fontBold, medGray);

    // ==================== ATTACKS & SPELLCASTING ====================
    const atkY = hdY - 14 - 150;
    drawRoundedBox(rightX, atkY, hpW, 150, 1);
    drawCenteredText('ATTACKS & SPELLCASTING', rightX + hpW / 2, atkY + 4, 6, fontBold, medGray);

    // Table header
    drawText('Name', rightX + 8, atkY + 130, 7, fontBold, darkGray);
    drawText('Atk Bonus', rightX + 80, atkY + 130, 7, fontBold, darkGray);
    drawText('Damage/Type', rightX + 130, atkY + 130, 7, fontBold, darkGray);
    page.drawLine({ start: { x: rightX + 6, y: atkY + 127 }, end: { x: rightX + hpW - 6, y: atkY + 127 }, thickness: 0.5, color: lightGray });

    // Equipment section (if char has equipment)
    const equipment = char.equipment || [];
    if (equipment.length > 0) {
        equipment.slice(0, 3).forEach((item, i) => {
            const itemName = typeof item === 'string' ? item : (item.name || item);
            drawText(String(itemName).substring(0, 18), rightX + 8, atkY + 112 - i * 15, 7.5, fontRegular, black);
        });
    }

    // ==================== BOTTOM SECTION ====================
    // Equipment box (left bottom)
    const botY = 20;
    const botH = atkY - 14 - botY;
    const eqW = hpW / 2 - 3;

    drawRoundedBox(rightX, botY, eqW, botH, 1);
    drawCenteredText('EQUIPMENT', rightX + eqW / 2, botY + 4, 6, fontBold, medGray);

    // Coin slots
    const coins = ['CP', 'SP', 'EP', 'GP', 'PP'];
    coins.forEach((coin, i) => {
        const cy = botY + botH - 24 - i * 16;
        drawRoundedBox(rightX + 6, cy, 24, 14);
        drawText(coin, rightX + 8, cy + 3, 6.5, fontBold, medGray);
    });

    // Equipment list
    if (equipment.length > 0) {
        equipment.slice(0, 12).forEach((item, i) => {
            const itemName = typeof item === 'string' ? item : (item.name || String(item));
            drawText(String(itemName).substring(0, 20), rightX + 36, botY + botH - 24 - i * 11, 6.5, fontRegular, darkGray);
        });
    }

    // Personality section (right bottom)
    const persX = rightX + eqW + 6;
    const persW = eqW;
    const traitH = Math.floor(botH / 4) - 3;

    const traits = [
        { label: 'PERSONALITY TRAITS', value: char.personalityTraits || '' },
        { label: 'IDEALS', value: char.ideals || '' },
        { label: 'BONDS', value: char.bonds || '' },
        { label: 'FLAWS', value: char.flaws || '' }
    ];

    traits.forEach((t, i) => {
        const ty = botY + botH - (i + 1) * (traitH + 3) + traitH;
        drawRoundedBox(persX, ty, persW, traitH, 1);
        drawCenteredText(t.label, persX + persW / 2, ty + 4, 5.5, fontBold, medGray);
        // Wrap text in the box
        const lines = wrapText(t.value, persW - 12, 7, fontRegular);
        lines.slice(0, 3).forEach((line, li) => {
            drawText(line, persX + 6, ty + traitH - 14 - li * 10, 7, fontRegular, darkGray);
        });
    });

    // ==================== FEATURES & TRAITS (far right) ====================
    // Use remaining space on far right for features
    const featX = persX + persW + 6;
    const featW = 592 - featX;
    if (featW > 30) {
        drawRoundedBox(featX, botY, featW, botH, 1);
        drawCenteredText('FEATURES & TRAITS', featX + featW / 2, botY + 4, 5.5, fontBold, medGray);

        // Collect features
        const features = [];
        // Race traits
        const race = char.race ? RACES[char.race] : null;
        if (race && race.traits) {
            race.traits.forEach(t => features.push(typeof t === 'string' ? t : t.name));
        }
        // Class features level 1
        if (cls && cls.features && cls.features[1]) {
            cls.features[1].forEach(f => features.push(f.name));
        }

        features.slice(0, 18).forEach((f, i) => {
            drawText(String(f).substring(0, 22), featX + 6, botY + botH - 18 - i * 11, 6.5, fontRegular, darkGray);
        });
    }

    // ==================== PROFICIENCIES & LANGUAGES (below ability scores) ====================
    const profX = 20;
    const profY = abStartY - 6 * abSpacing - 20;
    const profH = profY - 20;
    if (profH > 20) {
        drawRoundedBox(profX, 20, 80, profH, 1);
        drawCenteredText('PROFICIENCIES & LANGUAGES', profX + 40, 24, 4.5, fontBold, medGray);

        const profLines = [];
        // Languages
        const langs = [];
        if (race && race.languages) langs.push(...race.languages);
        if (bg && bg.languages) langs.push(`+${bg.languages} choice`);
        if (langs.length) profLines.push('Lang: ' + langs.join(', '));

        // Armor
        if (cls && cls.armorProficiencies && cls.armorProficiencies.length) {
            profLines.push('Armor: ' + cls.armorProficiencies.join(', '));
        }
        // Weapons
        if (cls && cls.weaponProficiencies && cls.weaponProficiencies.length) {
            profLines.push('Wpn: ' + cls.weaponProficiencies.join(', '));
        }

        profLines.slice(0, Math.floor(profH / 10)).forEach((line, i) => {
            drawText(String(line).substring(0, 18), profX + 4, 20 + profH - 14 - i * 10, 5.5, fontRegular, darkGray);
        });
    }

    // ==================== SAVE PDF ====================
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${char.name || 'character'}_sheet.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Failed to export PDF:', error);
        alert('Failed to export character sheet. Please try again.');
    }
}

// Helper: wrap text to fit width
function wrapText(text, maxWidth, fontSize, font) {
    if (!text) return [];
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    words.forEach(word => {
        const testLine = currentLine ? currentLine + ' ' + word : word;
        const width = font.widthOfTextAtSize(testLine, fontSize);
        if (width > maxWidth && currentLine) {
            lines.push(currentLine);
            currentLine = word;
        } else {
            currentLine = testLine;
        }
    });
    if (currentLine) lines.push(currentLine);
    return lines;
}
