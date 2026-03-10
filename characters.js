// D&D Character Management
// Handles listing, viewing, importing, exporting, and deleting characters

// HTML escape helper to prevent XSS
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// State
let characters = [];
let currentCharacterIndex = null;
let deleteCharacterIndex = null;
let editMode = false;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadCharacters();
    renderCharacterList();

    // Refresh character list when tab gains focus (new characters may have been created)
    window.addEventListener('focus', () => {
        loadCharacters();
        renderCharacterList();
    });
});

// Load characters from localStorage
function loadCharacters() {
    const saved = localStorage.getItem('dndCharacters');
    if (!saved) {
        characters = [];
        return;
    }
    try {
        characters = JSON.parse(saved);
    } catch (e) {
        console.error('Failed to parse characters data:', e);
        characters = [];
    }
}

// Save characters to localStorage
function saveCharacters() {
    try {
        localStorage.setItem('dndCharacters', JSON.stringify(characters));
    } catch (e) {
        console.error('Failed to save characters:', e);
        alert('Failed to save characters. Storage may be full.');
    }
}

// Render the character list
function renderCharacterList() {
    const grid = document.getElementById('character-grid');
    const noChars = document.getElementById('no-characters');

    if (characters.length === 0) {
        grid.style.display = 'none';
        noChars.style.display = 'block';
        return;
    }

    noChars.style.display = 'none';
    grid.style.display = 'grid';
    grid.innerHTML = '';

    characters.forEach((char, index) => {
        const card = createCharacterCard(char, index);
        grid.appendChild(card);
    });
}

// Create a character card element
function createCharacterCard(char, index) {
    const card = document.createElement('div');
    card.className = 'character-card';

    // Get display names
    const raceName = getDisplayRaceName(char);
    const className = getDisplayClassName(char);
    const backgroundName = char.background && BACKGROUNDS[char.background]
        ? BACKGROUNDS[char.background].name
        : char.backgroundName || '-';

    // Calculate stats
    const abilities = calculateAbilities(char);
    const hp = calculateHP(char, abilities);
    const ac = calculateAC(char, abilities);
    const speed = calculateSpeed(char);

    card.innerHTML = `
        <div class="card-header">
            <h3 class="char-name">${escapeHtml(char.name) || 'Unnamed Character'}</h3>
            <span class="char-level">Lvl ${char.level || 1}</span>
        </div>
        <div class="char-info">
            <div class="char-race-class">${escapeHtml(raceName)} ${escapeHtml(className)}</div>
            <div class="char-background">${escapeHtml(backgroundName)}</div>
        </div>
        <div class="char-stats">
            <div class="stat-mini">
                <span class="stat-label">STR</span>
                <span class="stat-value">${abilities.str.total}</span>
            </div>
            <div class="stat-mini">
                <span class="stat-label">DEX</span>
                <span class="stat-value">${abilities.dex.total}</span>
            </div>
            <div class="stat-mini">
                <span class="stat-label">CON</span>
                <span class="stat-value">${abilities.con.total}</span>
            </div>
            <div class="stat-mini">
                <span class="stat-label">INT</span>
                <span class="stat-value">${abilities.int.total}</span>
            </div>
            <div class="stat-mini">
                <span class="stat-label">WIS</span>
                <span class="stat-value">${abilities.wis.total}</span>
            </div>
            <div class="stat-mini">
                <span class="stat-label">CHA</span>
                <span class="stat-value">${abilities.cha.total}</span>
            </div>
        </div>
        <div class="char-combat">
            <div class="combat-stat">
                <span class="combat-label">HP</span>
                <span class="combat-value">${hp}</span>
            </div>
            <div class="combat-stat">
                <span class="combat-label">AC</span>
                <span class="combat-value">${ac}</span>
            </div>
            <div class="combat-stat">
                <span class="combat-label">Speed</span>
                <span class="combat-value">${speed}ft</span>
            </div>
        </div>
        <div class="card-actions">
            <button class="btn-load" onclick="viewCharacter(${index})">View</button>
            <button class="btn-export" onclick="exportCharacter(${index})">JSON</button>
            <button class="btn-pdf" onclick="exportCharacterPDF(${index})">PDF</button>
            <button class="btn-delete" onclick="showDeleteModal(${index})">Delete</button>
        </div>
    `;

    return card;
}

// Get display race name
function getDisplayRaceName(char) {
    if (!char.race) return char.raceName || 'Unknown';

    const race = RACES[char.race];
    if (!race) return char.raceName || char.race;

    if (char.subrace && race.subraces && race.subraces[char.subrace]) {
        return race.subraces[char.subrace].name;
    }

    return race.name;
}

// Get display class name
function getDisplayClassName(char) {
    if (!char.class) return char.className || 'Unknown';

    const cls = CLASSES[char.class];
    if (!cls) return char.className || char.class;

    let name = cls.name;
    if (char.subclass && cls.subclasses && cls.subclasses[char.subclass]) {
        name += ` (${cls.subclasses[char.subclass].name})`;
    }

    return name;
}

// Calculate abilities with racial bonuses
function calculateAbilities(char) {
    const abilities = {};
    const baseAbilities = char.abilities || { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 };
    const racialBonuses = char.racialBonuses || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };

    ['str', 'dex', 'con', 'int', 'wis', 'cha'].forEach(ability => {
        const base = baseAbilities[ability] || 10;
        const racial = racialBonuses[ability] || 0;
        const total = base + racial;
        const mod = Math.floor((total - 10) / 2);

        abilities[ability] = {
            base,
            racial,
            total,
            mod,
            modStr: mod >= 0 ? `+${mod}` : `${mod}`
        };
    });

    return abilities;
}

// Calculate HP
function calculateHP(char, abilities) {
    if (!char.class || !CLASSES[char.class]) return 10;

    const cls = CLASSES[char.class];
    const level = char.level || 1;
    const conMod = abilities.con.mod;

    // Level 1: Max hit die + CON mod
    // Additional levels: Average + 1 + CON mod per level
    const hitDie = cls.hitDie;
    let hp = hitDie + conMod;

    if (level > 1) {
        const averageRoll = Math.floor(hitDie / 2) + 1;
        hp += (averageRoll + conMod) * (level - 1);
    }

    // Hill Dwarf bonus
    if (char.race === 'dwarf' && char.subrace === 'hill') {
        hp += level;
    }

    // Draconic Sorcerer bonus
    if (char.class === 'sorcerer' && char.subclass === 'draconic') {
        hp += level;
    }

    return Math.max(hp, 1);
}

// Calculate AC
function calculateAC(char, abilities) {
    const dexMod = abilities.dex.mod;
    const conMod = abilities.con.mod;
    const wisMod = abilities.wis.mod;

    // Base AC (no armor)
    let ac = 10 + dexMod;

    // Barbarian Unarmored Defense
    if (char.class === 'barbarian') {
        ac = 10 + dexMod + conMod;
    }

    // Monk Unarmored Defense
    if (char.class === 'monk') {
        ac = 10 + dexMod + wisMod;
    }

    return ac;
}

// Calculate Speed
function calculateSpeed(char) {
    if (!char.race) return 30;

    const race = RACES[char.race];
    if (!race) return 30;

    let speed = race.speed;

    // Wood Elf bonus
    if (char.subrace === 'wood' && race.subraces && race.subraces.wood && race.subraces.wood.speedBonus) {
        speed += race.subraces.wood.speedBonus;
    }

    // Barbarian/Monk speed bonus at level 5+
    if (char.class === 'barbarian' && (char.level || 1) >= 5) {
        speed += 10;
    }
    if (char.class === 'monk') {
        const level = char.level || 1;
        if (level >= 2) speed += 10;
        if (level >= 6) speed += 5;
        if (level >= 10) speed += 5;
        if (level >= 14) speed += 5;
        if (level >= 18) speed += 5;
    }

    return speed;
}

// View full character sheet
function viewCharacter(index) {
    currentCharacterIndex = index;
    const char = characters[index];

    document.getElementById('character-list-view').style.display = 'none';
    document.getElementById('character-sheet-view').style.display = 'block';

    renderCharacterSheet(char);
}

// Render full character sheet
function renderCharacterSheet(char) {
    const content = document.getElementById('character-sheet-content');
    const abilities = calculateAbilities(char);
    const hp = calculateHP(char, abilities);
    const ac = calculateAC(char, abilities);
    const speed = calculateSpeed(char);
    const profBonus = getProficiencyBonus(char.level || 1);

    const raceName = getDisplayRaceName(char);
    const className = getDisplayClassName(char);
    const backgroundName = char.background && BACKGROUNDS[char.background]
        ? BACKGROUNDS[char.background].name
        : char.backgroundName || '-';

    let html = `
        <div class="sheet-top">
            <div class="sheet-identity">
                <h2>${escapeHtml(char.name) || 'Unnamed Character'}</h2>
                <div class="subtitle">${escapeHtml(raceName)} ${escapeHtml(className)} ${char.level || 1}</div>
                <div class="details">
                    <span><strong>Background:</strong> ${escapeHtml(backgroundName)}</span>
                    <span><strong>Alignment:</strong> ${escapeHtml(formatAlignment(char.alignment))}</span>
                    ${char.age ? `<span><strong>Age:</strong> ${escapeHtml(char.age)}</span>` : ''}
                    ${char.height ? `<span><strong>Height:</strong> ${escapeHtml(char.height)}</span>` : ''}
                    ${char.weight ? `<span><strong>Weight:</strong> ${escapeHtml(char.weight)}</span>` : ''}
                </div>
            </div>
            <div class="sheet-combat-box">
                <div class="combat-box hp-box">
                    <div class="label">Current HP</div>
                    <div class="hp-display">
                        <input type="number" id="edit-current-hp" class="hp-input" value="${char.currentHP !== undefined ? char.currentHP : hp}" min="0" onchange="saveCharacterEdits()">
                        <span class="hp-separator">/</span>
                        <span class="hp-max">${hp}</span>
                    </div>
                    <div class="hp-actions">
                        <button class="hp-btn damage" onclick="updateCurrentHP(-1)" title="Take 1 damage">-1</button>
                        <button class="hp-btn damage" onclick="updateCurrentHP(-5)" title="Take 5 damage">-5</button>
                        <button class="hp-btn heal" onclick="updateCurrentHP(1)" title="Heal 1">+1</button>
                        <button class="hp-btn heal" onclick="updateCurrentHP(5)" title="Heal 5">+5</button>
                        <button class="hp-btn reset" onclick="resetHP()" title="Reset to max HP">Max</button>
                    </div>
                </div>
                <div class="combat-box temp-hp-box">
                    <div class="label">Temp HP</div>
                    <input type="number" id="edit-temp-hp" class="hp-input small" value="${char.tempHP || 0}" min="0" onchange="saveCharacterEdits()">
                </div>
                <div class="combat-box">
                    <div class="label">AC</div>
                    <div class="value">${ac}</div>
                </div>
                <div class="combat-box">
                    <div class="label">Speed</div>
                    <div class="value">${speed}</div>
                </div>
                <div class="combat-box">
                    <div class="label">Prof</div>
                    <div class="value">+${profBonus}</div>
                </div>
                <div class="combat-box rest-box">
                    <button class="rest-btn" onclick="longRest()" title="Restore HP and spell slots">Long Rest</button>
                </div>
            </div>
        </div>

        <div class="sheet-abilities">
            ${['str', 'dex', 'con', 'int', 'wis', 'cha'].map(ability => `
                <div class="ability-box">
                    <div class="ability-name">${ability.toUpperCase()}</div>
                    ${editMode ? `
                        <input type="number" id="edit-ability-${ability}" class="ability-input" value="${char.abilities ? char.abilities[ability] : 10}" min="1" max="30" onchange="saveCharacterEdits()">
                    ` : `
                        <div class="ability-score">${abilities[ability].total}</div>
                    `}
                    <div class="ability-mod">${abilities[ability].modStr}</div>
                </div>
            `).join('')}
        </div>

        <div class="sheet-sections">
            ${renderProficiencies(char)}
            ${renderRacialTraits(char)}
            ${renderClassFeatures(char)}
            ${renderBackgroundFeature(char)}
            ${renderEquipment(char)}
            ${renderSpellcasting(char, abilities)}
            ${renderCharacterDetails(char)}
        </div>
    `;

    content.innerHTML = html;
}

// Get proficiency bonus by level
function getProficiencyBonus(level) {
    if (level <= 4) return 2;
    if (level <= 8) return 3;
    if (level <= 12) return 4;
    if (level <= 16) return 5;
    return 6;
}

// Format alignment
function formatAlignment(alignment) {
    const alignments = {
        'lawful-good': 'Lawful Good',
        'neutral-good': 'Neutral Good',
        'chaotic-good': 'Chaotic Good',
        'lawful-neutral': 'Lawful Neutral',
        'true-neutral': 'True Neutral',
        'chaotic-neutral': 'Chaotic Neutral',
        'lawful-evil': 'Lawful Evil',
        'neutral-evil': 'Neutral Evil',
        'chaotic-evil': 'Chaotic Evil'
    };
    return alignments[alignment] || alignment || 'Unknown';
}

// Render proficiencies section
function renderProficiencies(char) {
    const cls = char.class ? CLASSES[char.class] : null;
    const bg = char.background ? BACKGROUNDS[char.background] : null;
    const race = char.race ? RACES[char.race] : null;

    let armor = [];
    let weapons = [];
    let tools = [];
    let languages = [];
    let skills = [];

    // Class proficiencies
    if (cls) {
        armor = [...(cls.armorProficiencies || [])];
        weapons = [...(cls.weaponProficiencies || [])];
        if (cls.toolProficiencies) {
            tools.push(cls.toolProficiencies);
        }

        // Saving throws
        const saves = cls.savingThrows ? cls.savingThrows.map(s => s.toUpperCase()).join(', ') : '-';

        // Skills from class
        if (cls.skillChoices) {
            skills.push(`Choose ${cls.skillChoices.count} from: ${cls.skillChoices.options.join(', ')}`);
        }
    }

    // Background proficiencies
    if (bg) {
        skills = skills.concat(bg.skillProficiencies || []);
        if (bg.toolProficiencies) {
            tools = tools.concat(bg.toolProficiencies);
        }
        if (bg.languages) {
            languages.push(`${bg.languages} of your choice`);
        }
    }

    // Race proficiencies
    if (race) {
        languages = languages.concat(race.languages || []);
        if (race.extraLanguages) {
            languages.push(`+${race.extraLanguages} of your choice`);
        }

        // Dwarven Combat Training
        if (char.race === 'dwarf') {
            weapons.push('Battleaxe', 'Handaxe', 'Light hammer', 'Warhammer');
        }

        // Elf Weapon Training
        if (char.race === 'elf' && (char.subrace === 'high' || char.subrace === 'wood')) {
            weapons.push('Longsword', 'Shortsword', 'Shortbow', 'Longbow');
        }
    }

    return `
        <div class="sheet-section">
            <h3>Proficiencies</h3>
            <ul>
                <li><strong>Saving Throws:</strong> ${cls && cls.savingThrows ? cls.savingThrows.map(s => s.toUpperCase()).join(', ') : '-'}</li>
                <li><strong>Armor:</strong> ${armor.length ? armor.join(', ') : 'None'}</li>
                <li><strong>Weapons:</strong> ${weapons.length ? [...new Set(weapons)].join(', ') : 'None'}</li>
                <li><strong>Tools:</strong> ${tools.length ? tools.join(', ') : 'None'}</li>
                <li><strong>Skills:</strong> ${skills.length ? skills.join(', ') : '-'}</li>
                <li><strong>Languages:</strong> ${languages.length ? [...new Set(languages)].join(', ') : 'Common'}</li>
            </ul>
        </div>
    `;
}

// Render racial traits
function renderRacialTraits(char) {
    if (!char.race || !RACES[char.race]) return '';

    const race = RACES[char.race];
    let traits = [...(race.traits || [])];

    // Add subrace traits
    if (char.subrace && race.subraces && race.subraces[char.subrace]) {
        const subrace = race.subraces[char.subrace];
        if (subrace.traits) {
            traits = traits.concat(subrace.traits);
        }
    }

    // Dragonborn ancestry
    let ancestryInfo = '';
    if (char.race === 'dragonborn' && char.draconicAncestry) {
        const ancestry = race.draconicAncestry[char.draconicAncestry.toLowerCase()];
        if (ancestry) {
            ancestryInfo = `
                <div class="feature-item">
                    <h4>Draconic Ancestry: ${ancestry.name}</h4>
                    <p>Damage Type: ${ancestry.damageType}<br>Breath Weapon: ${ancestry.breathWeapon && typeof ancestry.breathWeapon === 'object' ? `${ancestry.breathWeapon.size} ${ancestry.breathWeapon.shape} (${ancestry.breathWeapon.savingThrow} save)` : ancestry.breathWeapon}</p>
                </div>
            `;
        }
    }

    if (traits.length === 0 && !ancestryInfo) return '';

    return `
        <div class="sheet-section">
            <h3>Racial Traits (${getDisplayRaceName(char)})</h3>
            ${ancestryInfo}
            ${traits.map(trait => `
                <div class="feature-item">
                    <h4>${trait.name}</h4>
                    <p>${trait.description}</p>
                </div>
            `).join('')}
        </div>
    `;
}

// Render class features for current level
function renderClassFeatures(char) {
    if (!char.class || !CLASSES[char.class]) return '';

    const cls = CLASSES[char.class];
    const level = char.level || 1;
    let features = [];

    // Gather features up to current level
    for (let lvl = 1; lvl <= level; lvl++) {
        if (cls.features && cls.features[lvl]) {
            cls.features[lvl].forEach(feature => {
                features.push({ ...feature, level: lvl });
            });
        }
    }

    // Add subclass features
    if (char.subclass && cls.subclasses && cls.subclasses[char.subclass]) {
        const subclass = cls.subclasses[char.subclass];
        for (let lvl = 1; lvl <= level; lvl++) {
            if (subclass.features && subclass.features[lvl]) {
                subclass.features[lvl].forEach(feature => {
                    features.push({ ...feature, level: lvl, subclass: true });
                });
            }
        }
    }

    if (features.length === 0) return '';

    return `
        <div class="sheet-section">
            <h3>Class Features (${cls.name} ${level})</h3>
            ${features.map(feature => `
                <div class="feature-item">
                    <h4>${feature.name} ${feature.subclass ? '(Subclass)' : ''} <small style="color:#888;">(Lvl ${feature.level})</small></h4>
                    <p>${feature.description}</p>
                </div>
            `).join('')}
        </div>
    `;
}

// Render background feature
function renderBackgroundFeature(char) {
    if (!char.background || !BACKGROUNDS[char.background]) return '';

    const bg = BACKGROUNDS[char.background];
    if (!bg.feature) return '';

    return `
        <div class="sheet-section">
            <h3>Background Feature (${bg.name})</h3>
            <div class="feature-item">
                <h4>${bg.feature.name}</h4>
                <p>${bg.feature.description}</p>
            </div>
        </div>
    `;
}

// Render equipment
function renderEquipment(char) {
    let equipment = [];

    // Class starting equipment
    if (char.class && CLASSES[char.class] && CLASSES[char.class].startingEquipment) {
        equipment = equipment.concat(CLASSES[char.class].startingEquipment);
    }

    // Background equipment
    if (char.background && BACKGROUNDS[char.background] && BACKGROUNDS[char.background].equipment) {
        equipment = equipment.concat(BACKGROUNDS[char.background].equipment);
    }

    // Character's selected equipment
    if (char.equipment && char.equipment.length > 0) {
        equipment = equipment.concat(char.equipment);
    }

    if (equipment.length === 0) return '';

    return `
        <div class="sheet-section">
            <h3>Equipment</h3>
            <ul class="equipment-list">
                ${equipment.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `;
}

// Render spellcasting section
function renderSpellcasting(char, abilities) {
    if (!char.class || !CLASSES[char.class]) return '';

    const cls = CLASSES[char.class];
    if (!cls.spellcasting) return '';

    const level = char.level || 1;
    const spellcasting = cls.spellcasting;

    // Check if class has spellcasting at this level
    if (spellcasting.startLevel && level < spellcasting.startLevel) return '';

    // Get spellcasting ability
    const abilityName = {
        'cha': 'Charisma',
        'wis': 'Wisdom',
        'int': 'Intelligence'
    }[spellcasting.ability] || spellcasting.ability;

    const abilityData = abilities[spellcasting.ability] || { mod: 0 };
    const abilityMod = abilityData.mod;
    const profBonus = getProficiencyBonus(level);
    const spellSaveDC = 8 + profBonus + abilityMod;
    const spellAttack = profBonus + abilityMod;

    // Get spell slots
    let slotType = 'full';
    if (char.class === 'paladin' || char.class === 'ranger') {
        slotType = 'half';
    } else if (char.class === 'warlock') {
        slotType = 'warlock';
    }

    const slots = (SPELL_SLOTS[slotType] || {})[level] || [0,0,0,0,0,0,0,0,0];

    // Get cantrips known
    let cantrips = 0;
    if (spellcasting.cantripsKnown) {
        cantrips = spellcasting.cantripsKnown[level - 1] || 0;
    }

    return `
        <div class="sheet-section full-width">
            <h3>Spellcasting</h3>
            <div class="details-grid" style="margin-bottom: 15px;">
                <div class="detail-item">
                    <label>Spellcasting Ability</label>
                    <p>${abilityName}</p>
                </div>
                <div class="detail-item">
                    <label>Spell Save DC</label>
                    <p>${spellSaveDC}</p>
                </div>
                <div class="detail-item">
                    <label>Spell Attack Bonus</label>
                    <p>+${spellAttack}</p>
                </div>
                <div class="detail-item">
                    <label>Cantrips Known</label>
                    <p>${cantrips}</p>
                </div>
            </div>
            <h4 style="color:#c9a227; margin-bottom: 10px;">Spell Slots</h4>
            <div class="spell-slots-grid">
                ${slots.map((count, idx) => {
                    if (count <= 0) return '';
                    const level = idx + 1;
                    const used = (char.spellSlotsUsed && char.spellSlotsUsed[level]) || 0;
                    const available = Math.max(0, count - used);
                    const levelLabel = idx === 0 ? '1st' : idx === 1 ? '2nd' : idx === 2 ? '3rd' : level + 'th';
                    return `
                        <div class="spell-slot">
                            <div class="slot-level">${levelLabel}</div>
                            <div class="slot-count">
                                <span class="slots-available">${available}</span>
                                <span class="slots-used">/ ${count}</span>
                            </div>
                            <div class="spell-slot-tracker">
                                <button class="slot-btn use" onclick="useSpellSlot(${level})" title="Use slot" ${available <= 0 ? 'disabled' : ''}>-</button>
                                <button class="slot-btn recover" onclick="recoverSpellSlot(${level})" title="Recover slot" ${used <= 0 ? 'disabled' : ''}>+</button>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

// Render character details (personality, backstory, etc.)
function renderCharacterDetails(char) {
    const details = [];

    if (char.appearance) {
        details.push({ label: 'Appearance', value: char.appearance });
    }
    if (char.personality) {
        details.push({ label: 'Personality Traits', value: char.personality });
    }
    if (char.ideals) {
        details.push({ label: 'Ideals', value: char.ideals });
    }
    if (char.bonds) {
        details.push({ label: 'Bonds', value: char.bonds });
    }
    if (char.flaws) {
        details.push({ label: 'Flaws', value: char.flaws });
    }

    let html = '';

    if (details.length > 0) {
        html += `
            <div class="sheet-section character-details-section">
                <h3>Character Details</h3>
                <div class="details-grid">
                    ${details.map(d => `
                        <div class="detail-item">
                            <label>${escapeHtml(d.label)}</label>
                            <p>${escapeHtml(d.value)}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    if (char.backstory) {
        html += `
            <div class="sheet-section full-width">
                <h3>Backstory</h3>
                <p class="backstory-text">${escapeHtml(char.backstory)}</p>
            </div>
        `;
    }

    return html;
}

// Show character list
function showCharacterList() {
    document.getElementById('character-sheet-view').style.display = 'none';
    document.getElementById('character-list-view').style.display = 'block';
    currentCharacterIndex = null;
    editMode = false;
    updateEditButton();
}

// Toggle edit mode for character sheet
function toggleEditMode() {
    editMode = !editMode;
    updateEditButton();
    if (currentCharacterIndex !== null) {
        renderCharacterSheet(characters[currentCharacterIndex]);
    }
}

// Update the edit button text based on mode
function updateEditButton() {
    const btn = document.getElementById('edit-mode-btn');
    if (btn) {
        if (editMode) {
            btn.innerHTML = '<span class="btn-icon" aria-hidden="true">&#10003;</span> Save';
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-success');
        } else {
            btn.innerHTML = '<span class="btn-icon" aria-hidden="true">&#9998;</span> Edit';
            btn.classList.remove('btn-success');
            btn.classList.add('btn-primary');
        }
    }
}

// Save character edits from edit mode
function saveCharacterEdits() {
    if (currentCharacterIndex === null) return;

    const char = characters[currentCharacterIndex];

    // Get runtime values from edit fields
    const currentHpEl = document.getElementById('edit-current-hp');
    const tempHpEl = document.getElementById('edit-temp-hp');
    const notesEl = document.getElementById('edit-char-notes');

    if (currentHpEl) char.currentHP = parseInt(currentHpEl.value, 10) || 0;
    if (tempHpEl) char.tempHP = parseInt(tempHpEl.value, 10) || 0;
    if (notesEl) char.notes = notesEl.value;

    // Get edited ability scores
    ['str', 'dex', 'con', 'int', 'wis', 'cha'].forEach(ability => {
        const el = document.getElementById(`edit-ability-${ability}`);
        if (el && char.abilities) {
            char.abilities[ability] = parseInt(el.value, 10) || 10;
        }
    });

    // Get spell slot usage
    for (let level = 1; level <= 9; level++) {
        const el = document.getElementById(`edit-slots-used-${level}`);
        if (el) {
            if (!char.spellSlotsUsed) char.spellSlotsUsed = {};
            char.spellSlotsUsed[level] = parseInt(el.value, 10) || 0;
        }
    }

    // Update save timestamp
    char.lastEditedAt = new Date().toISOString();

    saveCharacters();
}

// Update HP (quick actions)
function updateCurrentHP(delta) {
    if (currentCharacterIndex === null) return;
    const char = characters[currentCharacterIndex];

    if (char.currentHP === undefined) {
        const abilities = calculateAbilities(char);
        char.currentHP = calculateHP(char, abilities);
    }

    char.currentHP = Math.max(0, char.currentHP + delta);
    saveCharacters();
    renderCharacterSheet(char);
}

// Reset HP to max
function resetHP() {
    if (currentCharacterIndex === null) return;
    const char = characters[currentCharacterIndex];
    const abilities = calculateAbilities(char);
    char.currentHP = calculateHP(char, abilities);
    char.tempHP = 0;
    saveCharacters();
    renderCharacterSheet(char);
}

// Use a spell slot
function useSpellSlot(level) {
    if (currentCharacterIndex === null) return;
    const char = characters[currentCharacterIndex];

    if (!char.spellSlotsUsed) char.spellSlotsUsed = {};
    char.spellSlotsUsed[level] = (char.spellSlotsUsed[level] || 0) + 1;

    saveCharacters();
    renderCharacterSheet(char);
}

// Recover a spell slot
function recoverSpellSlot(level) {
    if (currentCharacterIndex === null) return;
    const char = characters[currentCharacterIndex];

    if (!char.spellSlotsUsed) char.spellSlotsUsed = {};
    char.spellSlotsUsed[level] = Math.max(0, (char.spellSlotsUsed[level] || 0) - 1);

    saveCharacters();
    renderCharacterSheet(char);
}

// Long rest - recover all spell slots and HP
function longRest() {
    if (currentCharacterIndex === null) return;
    const char = characters[currentCharacterIndex];

    // Reset HP
    const abilities = calculateAbilities(char);
    char.currentHP = calculateHP(char, abilities);
    char.tempHP = 0;

    // Reset spell slots
    char.spellSlotsUsed = {};

    saveCharacters();
    renderCharacterSheet(char);
    alert('Long rest complete! HP and spell slots restored.');
}

// Export a character
function exportCharacter(index) {
    const char = characters[index];
    const dataStr = JSON.stringify(char, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `${char.name || 'character'}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Export current character (from sheet view)
function exportCurrentCharacter() {
    if (currentCharacterIndex !== null) {
        exportCharacter(currentCharacterIndex);
    }
}

// Import character
function importCharacter() {
    document.getElementById('import-file').click();
}

// Handle file import
function handleImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const charData = JSON.parse(e.target.result);

            // Validate basic structure
            if (typeof charData !== 'object') {
                throw new Error('Invalid character data');
            }

            // Add import timestamp
            charData.importedAt = new Date().toISOString();

            // Add to characters array
            characters.push(charData);
            saveCharacters();
            renderCharacterList();

            alert(`Character "${charData.name || 'Unnamed'}" imported successfully!`);
        } catch (error) {
            alert('Error importing character: Invalid JSON file');
            console.error('Import error:', error);
        }
    };
    reader.readAsText(file);

    // Reset file input
    event.target.value = '';
}

// Show delete confirmation modal
function showDeleteModal(index) {
    deleteCharacterIndex = index;
    const char = characters[index];
    document.getElementById('delete-char-name').textContent = char.name || 'Unnamed Character';
    document.getElementById('delete-modal').style.display = 'flex';
}

// Close delete modal
function closeDeleteModal() {
    document.getElementById('delete-modal').style.display = 'none';
    deleteCharacterIndex = null;
}

// Confirm delete
function confirmDelete() {
    if (deleteCharacterIndex !== null) {
        characters.splice(deleteCharacterIndex, 1);
        saveCharacters();
        renderCharacterList();
        closeDeleteModal();
    }
}

// Print character sheet
function printCharacterSheet() {
    window.print();
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('delete-modal');
    if (event.target === modal) {
        closeDeleteModal();
    }
});
