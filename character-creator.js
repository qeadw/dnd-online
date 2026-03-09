// D&D 5e Character Creator
// Main JavaScript Logic

// HTML escape helper to prevent XSS
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Character State
const character = {
    name: '',
    race: null,
    subrace: null,
    draconicAncestry: null,
    class: null,
    subclass: null,
    background: null,
    level: 1,
    abilities: {
        str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10
    },
    racialBonuses: {
        str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0
    },
    alignment: 'true-neutral',
    age: '',
    height: '',
    weight: '',
    appearance: '',
    personality: '',
    ideals: '',
    bonds: '',
    flaws: '',
    backstory: '',
    feat: null,
    equipment: [],
    proficiencies: {
        armor: [],
        weapons: [],
        tools: [],
        skills: [],
        languages: []
    }
};

// Current Step
let currentStep = 1;
const totalSteps = 7;

// Ability Score Methods
let abilityMethod = 'standard';
const standardArray = [15, 14, 13, 12, 10, 8];
let availableScores = [...standardArray];
let pointBuyPoints = 27;

// Point Buy Costs
const pointBuyCosts = {
    8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 7, 15: 9
};

// Available Languages in D&D 5e
const ALL_LANGUAGES = {
    standard: [
        'Common', 'Dwarvish', 'Elvish', 'Giant', 'Gnomish',
        'Goblin', 'Halfling', 'Orc'
    ],
    exotic: [
        'Abyssal', 'Celestial', 'Draconic', 'Deep Speech',
        'Infernal', 'Primordial', 'Sylvan', 'Undercommon'
    ]
};

// Track selected extra languages
let selectedRaceLanguages = [];
let selectedBackgroundLanguages = [];

// Race Image Mappings
const RACE_IMAGES = {
    // SRD Races
    'dragonborn': 'assets/races/dragonborn.png',
    'dwarf': 'assets/races/dwarf.png',
    'elf': 'assets/races/elf.png',
    'gnome': 'assets/races/gnome.png',
    'halfElf': 'assets/races/half-elf.png',
    'halfling': 'assets/races/halfling.png',
    'halfOrc': 'assets/races/half-orc.png',
    'human': 'assets/races/human.png',
    'tiefling': 'assets/races/tiefling.png',
    // Volo's Guide Races
    'aasimar': 'assets/races/aasimar.jpg',
    'goliath': 'assets/races/goliath.png',
    'firbolg': 'assets/races/firbolg.jpg',
    'tabaxi': 'assets/races/tabaxi.jpg',
    'kenku': 'assets/races/kenku.jpeg',
    'lizardfolk': 'assets/races/lizardfolk.jpg',
    'triton': 'assets/races/triton.jpg',
    'bugbear': 'assets/races/bugbear.jpg',
    'goblin': 'assets/races/goblin.jpg',
    'hobgoblin': 'assets/races/hobgoblin.png',
    'kobold': 'assets/races/kobold.jpg',
    'orc': 'assets/races/orc.jpg',
    'yuantiPureblood': 'assets/races/yuan-ti.png',
    // Eberron Races
    'changeling': 'assets/races/changeling.jpg',
    'warforged': 'assets/races/warforged.jpg',
    'kalashtar': 'assets/races/kalashtar.png',
    'shifter': 'assets/races/shifter.png'
};

// Class Image Mappings
const CLASS_IMAGES = {
    'barbarian': 'assets/classes/barbarian.png',
    'bard': 'assets/classes/bard.png',
    'cleric': 'assets/classes/cleric.png',
    'druid': 'assets/classes/druid.png',
    'fighter': 'assets/classes/fighter.png',
    'monk': 'assets/classes/monk.png',
    'paladin': 'assets/classes/paladin.png',
    'ranger': 'assets/classes/ranger.png',
    'rogue': 'assets/classes/rogue.png',
    'sorcerer': 'assets/classes/sorcerer.png',
    'warlock': 'assets/classes/warlock.png',
    'wizard': 'assets/classes/wizard.png'
};

// Track return intent (set when navigated from session page)
window._creatorReturnTo = null;

// Listen for SPA navigation data (e.g. returnTo from session page)
window.addEventListener('spa-incoming-data', (e) => {
    if (e.detail && e.detail.returnTo) {
        window._creatorReturnTo = e.detail.returnTo;
        // Reset to step 1 for a fresh start
        if (currentStep !== 1) {
            document.getElementById(`step-${currentStep}`).style.display = 'none';
            currentStep = 1;
            document.getElementById('step-1').style.display = 'block';
            updateProgressBar();
            updateNavButtons();
        }
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initRaceSelection();
    initClassSelection();
    initBackgroundSelection();
    initAbilityScores();
    initFeatSelection();
    updateSummary();
});

// ==================== RACE SELECTION ====================

function initRaceSelection() {
    const grid = document.getElementById('race-grid');
    grid.innerHTML = '';

    Object.entries(RACES).forEach(([key, race]) => {
        const card = document.createElement('div');
        card.className = 'selection-card';
        card.dataset.race = key;

        // Get image path or use a default
        const imagePath = RACE_IMAGES[key] || '';
        const imageStyle = imagePath ? `background-image: url('${imagePath}')` : '';

        card.innerHTML = `
            <div class="card-image" style="${imageStyle}"></div>
            <div class="card-content">
                <h4>${race.name}</h4>
                <p>${getAbilityBonusText(race.abilityScoreIncrease)}</p>
            </div>
        `;
        card.addEventListener('click', () => selectRace(key));
        grid.appendChild(card);
    });
}

function getAbilityBonusText(bonuses) {
    if (!bonuses) return '';
    const parts = [];
    const abilityNames = { str: 'STR', dex: 'DEX', con: 'CON', int: 'INT', wis: 'WIS', cha: 'CHA' };

    Object.entries(bonuses).forEach(([ability, value]) => {
        if (ability !== 'choice' && abilityNames[ability]) {
            parts.push(`+${value} ${abilityNames[ability]}`);
        }
    });

    return parts.join(', ') || 'Variable';
}

function selectRace(raceKey) {
    // Update UI
    document.querySelectorAll('#race-grid .selection-card').forEach(card => {
        card.classList.remove('selected');
    });
    const selectedRaceCard = document.querySelector(`#race-grid [data-race="${raceKey}"]`);
    if (selectedRaceCard) selectedRaceCard.classList.add('selected');

    const race = RACES[raceKey];
    character.race = raceKey;
    character.subrace = null;

    // Reset race language selections when race changes
    selectedRaceLanguages = [];
    updateCharacterLanguages();
    character.draconicAncestry = null;

    // Update details panel
    document.getElementById('race-name').textContent = race.name;
    document.getElementById('race-description').textContent = race.description;

    // Display traits
    const traitsContainer = document.getElementById('race-traits');
    traitsContainer.innerHTML = '';

    // Ability Score Increase
    const asiHtml = `
        <div class="trait-item">
            <h5>Ability Score Increase</h5>
            <p>${getAbilityBonusDescription(race.abilityScoreIncrease)}</p>
        </div>
    `;
    traitsContainer.innerHTML += asiHtml;

    // Other stats
    traitsContainer.innerHTML += `
        <div class="trait-item">
            <h5>Size</h5>
            <p>${race.size}</p>
        </div>
        <div class="trait-item">
            <h5>Speed</h5>
            <p>${race.speed} feet</p>
        </div>
    `;

    // Traits
    if (race.traits) {
        race.traits.forEach(trait => {
            traitsContainer.innerHTML += `
                <div class="trait-item">
                    <h5>${trait.name}</h5>
                    <p>${trait.description}</p>
                </div>
            `;
        });
    }

    // Languages
    traitsContainer.innerHTML += `
        <div class="trait-item">
            <h5>Languages</h5>
            <p>${race.languages.join(', ')}${race.extraLanguages ? ` + ${race.extraLanguages} of your choice` : ''}</p>
        </div>
    `;

    // Extra Language Selection
    if (race.extraLanguages && race.extraLanguages > 0) {
        traitsContainer.innerHTML += `
            <div class="trait-item language-selection" id="race-language-selection">
                <h5>Choose Extra Language${race.extraLanguages > 1 ? 's' : ''}</h5>
                <p class="selection-hint">Select ${race.extraLanguages} language${race.extraLanguages > 1 ? 's' : ''}</p>
                <div class="language-picker" id="race-language-picker"></div>
            </div>
        `;
        // Render language picker after DOM update
        setTimeout(() => renderRaceLanguagePicker(race), 0);
    }

    // Handle subraces
    const subraceContainer = document.getElementById('subrace-selection');
    const subraceOptions = document.getElementById('subrace-options');

    if (race.subraces) {
        subraceContainer.style.display = 'block';
        subraceOptions.innerHTML = '';

        Object.entries(race.subraces).forEach(([key, subrace]) => {
            const option = document.createElement('div');
            option.className = 'subrace-option';
            option.dataset.subrace = key;
            option.innerHTML = `
                <strong>${subrace.name}</strong>
                <p>${subrace.description}</p>
            `;
            option.addEventListener('click', () => selectSubrace(key));
            subraceOptions.appendChild(option);
        });
    } else {
        subraceContainer.style.display = 'none';
    }

    // Handle Dragonborn ancestry
    const ancestryContainer = document.getElementById('dragonborn-ancestry');
    if (raceKey === 'dragonborn') {
        ancestryContainer.style.display = 'block';
        const select = document.getElementById('ancestry-select');
        select.innerHTML = '<option value="">-- Select Ancestry --</option>';

        Object.entries(race.draconicAncestry).forEach(([key, ancestry]) => {
            select.innerHTML += `<option value="${ancestry.name}">${ancestry.name} - ${ancestry.damageType}</option>`;
        });

        // Remove old listener to prevent accumulation
        const newSelect = select.cloneNode(true);
        select.parentNode.replaceChild(newSelect, select);
        newSelect.addEventListener('change', (e) => {
            character.draconicAncestry = e.target.value;
            const ancestryKey = e.target.value.toLowerCase();
            const ancestry = race.draconicAncestry[ancestryKey];
            if (ancestry) {
                const breathDesc = ancestry.breathWeapon
                    ? `${ancestry.breathWeapon.size} ${ancestry.breathWeapon.shape} (${ancestry.breathWeapon.savingThrow} save)`
                    : '';
                document.getElementById('ancestry-details').innerHTML = `
                    <strong>Damage Type:</strong> ${ancestry.damageType}<br>
                    <strong>Breath Weapon:</strong> ${breathDesc}
                `;
            }
            updateSummary();
        });
    } else {
        ancestryContainer.style.display = 'none';
    }

    // Update racial bonuses
    updateRacialBonuses();
    updateSummary();
}

function getAbilityBonusDescription(bonuses) {
    if (!bonuses) return 'None';
    const parts = [];
    const abilityNames = {
        str: 'Strength', dex: 'Dexterity', con: 'Constitution',
        int: 'Intelligence', wis: 'Wisdom', cha: 'Charisma'
    };

    Object.entries(bonuses).forEach(([ability, value]) => {
        if (ability === 'choice') {
            parts.push(`+1 to ${value} abilities of your choice`);
        } else if (abilityNames[ability]) {
            parts.push(`+${value} ${abilityNames[ability]}`);
        }
    });

    return parts.join(', ') || 'None';
}

function selectSubrace(subraceKey) {
    document.querySelectorAll('.subrace-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    const selectedSubrace = document.querySelector(`[data-subrace="${subraceKey}"]`);
    if (selectedSubrace) selectedSubrace.classList.add('selected');

    character.subrace = subraceKey;
    updateRacialBonuses();
    updateSummary();
}

// Language Picker Functions
function getAvailableLanguages(excludeLanguages = []) {
    const allLangs = [...ALL_LANGUAGES.standard, ...ALL_LANGUAGES.exotic];
    return allLangs.filter(lang => !excludeLanguages.includes(lang));
}

function renderRaceLanguagePicker(race) {
    const container = document.getElementById('race-language-picker');
    if (!container) return;

    const maxSelections = race.extraLanguages || 0;
    const knownLanguages = [...(race.languages || [])];
    const availableLanguages = getAvailableLanguages(knownLanguages);

    container.innerHTML = `
        <div class="language-options">
            <div class="language-group">
                <label class="language-group-label">Standard Languages</label>
                ${ALL_LANGUAGES.standard
                    .filter(lang => !knownLanguages.includes(lang))
                    .map(lang => `
                        <label class="language-option ${selectedRaceLanguages.includes(lang) ? 'selected' : ''}">
                            <input type="checkbox" value="${lang}"
                                ${selectedRaceLanguages.includes(lang) ? 'checked' : ''}
                                ${selectedRaceLanguages.length >= maxSelections && !selectedRaceLanguages.includes(lang) ? 'disabled' : ''}>
                            <span>${lang}</span>
                        </label>
                    `).join('')}
            </div>
            <div class="language-group">
                <label class="language-group-label">Exotic Languages</label>
                ${ALL_LANGUAGES.exotic
                    .filter(lang => !knownLanguages.includes(lang))
                    .map(lang => `
                        <label class="language-option ${selectedRaceLanguages.includes(lang) ? 'selected' : ''}">
                            <input type="checkbox" value="${lang}"
                                ${selectedRaceLanguages.includes(lang) ? 'checked' : ''}
                                ${selectedRaceLanguages.length >= maxSelections && !selectedRaceLanguages.includes(lang) ? 'disabled' : ''}>
                            <span>${lang}</span>
                        </label>
                    `).join('')}
            </div>
        </div>
        <div class="language-selection-count">
            Selected: ${selectedRaceLanguages.length}/${maxSelections}
        </div>
    `;

    // Add event listeners
    container.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const lang = e.target.value;
            if (e.target.checked) {
                if (selectedRaceLanguages.length < maxSelections) {
                    selectedRaceLanguages.push(lang);
                } else {
                    e.target.checked = false;
                    return;
                }
            } else {
                selectedRaceLanguages = selectedRaceLanguages.filter(l => l !== lang);
            }
            renderRaceLanguagePicker(race);
            updateCharacterLanguages();
            updateSidebarProficiencies();
        });
    });
}

function renderBackgroundLanguagePicker(background) {
    const container = document.getElementById('background-language-picker');
    if (!container) return;

    const maxSelections = background.languages || 0;
    const race = character.race ? RACES[character.race] : null;
    const knownLanguages = [
        ...(race ? race.languages : []),
        ...selectedRaceLanguages
    ];
    const availableLanguages = getAvailableLanguages(knownLanguages);

    container.innerHTML = `
        <div class="language-options">
            <div class="language-group">
                <label class="language-group-label">Standard Languages</label>
                ${ALL_LANGUAGES.standard
                    .filter(lang => !knownLanguages.includes(lang))
                    .map(lang => `
                        <label class="language-option ${selectedBackgroundLanguages.includes(lang) ? 'selected' : ''}">
                            <input type="checkbox" value="${lang}"
                                ${selectedBackgroundLanguages.includes(lang) ? 'checked' : ''}
                                ${selectedBackgroundLanguages.length >= maxSelections && !selectedBackgroundLanguages.includes(lang) ? 'disabled' : ''}>
                            <span>${lang}</span>
                        </label>
                    `).join('')}
            </div>
            <div class="language-group">
                <label class="language-group-label">Exotic Languages</label>
                ${ALL_LANGUAGES.exotic
                    .filter(lang => !knownLanguages.includes(lang))
                    .map(lang => `
                        <label class="language-option ${selectedBackgroundLanguages.includes(lang) ? 'selected' : ''}">
                            <input type="checkbox" value="${lang}"
                                ${selectedBackgroundLanguages.includes(lang) ? 'checked' : ''}
                                ${selectedBackgroundLanguages.length >= maxSelections && !selectedBackgroundLanguages.includes(lang) ? 'disabled' : ''}>
                            <span>${lang}</span>
                        </label>
                    `).join('')}
            </div>
        </div>
        <div class="language-selection-count">
            Selected: ${selectedBackgroundLanguages.length}/${maxSelections}
        </div>
    `;

    // Add event listeners
    container.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const lang = e.target.value;
            if (e.target.checked) {
                if (selectedBackgroundLanguages.length < maxSelections) {
                    selectedBackgroundLanguages.push(lang);
                } else {
                    e.target.checked = false;
                    return;
                }
            } else {
                selectedBackgroundLanguages = selectedBackgroundLanguages.filter(l => l !== lang);
            }
            renderBackgroundLanguagePicker(background);
            updateCharacterLanguages();
            updateSidebarProficiencies();
        });
    });
}

function updateCharacterLanguages() {
    const race = character.race ? RACES[character.race] : null;
    const languages = [];

    // Add race languages
    if (race && race.languages) {
        languages.push(...race.languages);
    }

    // Add selected extra race languages
    languages.push(...selectedRaceLanguages);

    // Add selected background languages
    languages.push(...selectedBackgroundLanguages);

    // Store unique languages
    character.proficiencies.languages = [...new Set(languages)];
}

function updateRacialBonuses() {
    // Reset bonuses
    character.racialBonuses = { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };

    if (!character.race) return;

    const race = RACES[character.race];

    // Apply base race bonuses
    if (race.abilityScoreIncrease) {
        Object.entries(race.abilityScoreIncrease).forEach(([ability, value]) => {
            if (ability !== 'choice' && character.racialBonuses.hasOwnProperty(ability)) {
                character.racialBonuses[ability] += value;
            }
        });
    }

    // Apply subrace bonuses
    if (character.subrace && race.subraces && race.subraces[character.subrace]) {
        const subrace = race.subraces[character.subrace];
        if (subrace.abilityScoreIncrease) {
            Object.entries(subrace.abilityScoreIncrease).forEach(([ability, value]) => {
                if (ability !== 'choice' && character.racialBonuses.hasOwnProperty(ability)) {
                    character.racialBonuses[ability] += value;
                }
            });
        }
    }

    // Update UI
    Object.keys(character.racialBonuses).forEach(ability => {
        const bonus = character.racialBonuses[ability];
        const element = document.getElementById(`racial-${ability}`);
        if (element) {
            element.textContent = bonus > 0 ? `+${bonus}` : '+0';
            element.style.color = bonus > 0 ? '#228b22' : '#aaa';
        }
    });

    updateAbilityTotals();
}

// ==================== CLASS SELECTION ====================

function initClassSelection() {
    const grid = document.getElementById('class-grid');
    grid.innerHTML = '';

    Object.entries(CLASSES).forEach(([key, cls]) => {
        const card = document.createElement('div');
        card.className = 'selection-card';
        card.dataset.class = key;

        // Get image path or use a default
        const imagePath = CLASS_IMAGES[key] || '';
        const imageStyle = imagePath ? `background-image: url('${imagePath}')` : '';

        card.innerHTML = `
            <div class="card-image" style="${imageStyle}"></div>
            <div class="card-content">
                <h4>${cls.name}</h4>
                <p>d${cls.hitDie} Hit Die • ${cls.primaryAbility}</p>
            </div>
        `;
        card.addEventListener('click', () => selectClass(key));
        grid.appendChild(card);
    });
}

function selectClass(classKey) {
    // Update UI
    document.querySelectorAll('#class-grid .selection-card').forEach(card => {
        card.classList.remove('selected');
    });
    const selectedClassCard = document.querySelector(`#class-grid [data-class="${classKey}"]`);
    if (selectedClassCard) selectedClassCard.classList.add('selected');

    const cls = CLASSES[classKey];
    character.class = classKey;
    character.subclass = null;
    // Clear class skill selections when switching classes
    character.proficiencies.skills = [];

    // Update details panel
    document.getElementById('class-name').textContent = cls.name;
    document.getElementById('class-description').textContent = cls.description;

    // Display class info
    const infoContainer = document.getElementById('class-info');
    infoContainer.innerHTML = `
        <div class="class-stat"><strong>Hit Die:</strong> d${cls.hitDie}</div>
        <div class="class-stat"><strong>Primary Ability:</strong> ${cls.primaryAbility}</div>
        <div class="class-stat"><strong>Saves:</strong> ${cls.savingThrows.map(s => s.toUpperCase()).join(', ')}</div>
    `;

    // Armor proficiencies
    if (cls.armorProficiencies && cls.armorProficiencies.length > 0) {
        infoContainer.innerHTML += `
            <div class="trait-item">
                <h5>Armor Proficiencies</h5>
                <p>${cls.armorProficiencies.join(', ')}</p>
            </div>
        `;
    }

    // Weapon proficiencies
    if (cls.weaponProficiencies && cls.weaponProficiencies.length > 0) {
        infoContainer.innerHTML += `
            <div class="trait-item">
                <h5>Weapon Proficiencies</h5>
                <p>${cls.weaponProficiencies.join(', ')}</p>
            </div>
        `;
    }

    // Skills - interactive checkboxes
    if (cls.skillChoices) {
        const skillCheckboxes = cls.skillChoices.options.map(skill => {
            const checked = character.proficiencies.skills.includes(skill) ? 'checked' : '';
            return `<label class="skill-choice-label">
                <input type="checkbox" class="skill-choice-checkbox" value="${skill}" ${checked}
                    onchange="handleSkillSelection(this, ${cls.skillChoices.count})">
                <span class="skill-choice-name">${skill}</span>
            </label>`;
        }).join('');

        const selectedCount = character.proficiencies.skills.filter(s => cls.skillChoices.options.includes(s)).length;

        infoContainer.innerHTML += `
            <div class="trait-item skill-choices-container">
                <h5>Skills <span class="skill-count-badge">(${selectedCount}/${cls.skillChoices.count} selected)</span></h5>
                <div class="skill-choices-grid">
                    ${skillCheckboxes}
                </div>
            </div>
        `;
    }

    // Level 1 features
    if (cls.features && cls.features[1]) {
        cls.features[1].forEach(feature => {
            infoContainer.innerHTML += `
                <div class="trait-item">
                    <h5>${feature.name}</h5>
                    <p>${feature.description}</p>
                </div>
            `;
        });
    }

    updateSummary();
}

function handleSkillSelection(checkbox, maxCount) {
    const skill = checkbox.value;
    const cls = CLASSES[character.class];
    if (!cls || !cls.skillChoices) return;

    // Get only class-related skill selections (not from race/background)
    const classSkillOptions = cls.skillChoices.options;
    const currentClassSkills = character.proficiencies.skills.filter(s => classSkillOptions.includes(s));

    if (checkbox.checked) {
        // Enforce max selection
        if (currentClassSkills.length >= maxCount) {
            checkbox.checked = false;
            return;
        }
        if (!character.proficiencies.skills.includes(skill)) {
            character.proficiencies.skills.push(skill);
        }
    } else {
        character.proficiencies.skills = character.proficiencies.skills.filter(s => s !== skill);
    }

    // Update the count badge
    const newCount = character.proficiencies.skills.filter(s => classSkillOptions.includes(s)).length;
    const badge = document.querySelector('.skill-count-badge');
    if (badge) {
        badge.textContent = `(${newCount}/${maxCount} selected)`;
        badge.style.color = newCount === maxCount ? '#4ade80' : '#d4a843';
    }

    // Disable unchecked boxes if max reached
    const allBoxes = document.querySelectorAll('.skill-choice-checkbox');
    allBoxes.forEach(cb => {
        if (!cb.checked) {
            cb.disabled = newCount >= maxCount;
            cb.closest('.skill-choice-label').style.opacity = newCount >= maxCount ? '0.5' : '1';
        }
    });

    updateSummary();
}

function selectSubclass(subclassKey) {
    const selectedOption = document.querySelector(`[data-subclass="${subclassKey}"]`);

    // Toggle functionality: if already selected, deselect it
    if (selectedOption && selectedOption.classList.contains('selected')) {
        selectedOption.classList.remove('selected');
        character.subclass = null;
        updateSummary();
        return;
    }

    // Otherwise, select the new subclass
    document.querySelectorAll('.subclass-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    if (selectedOption) {
        selectedOption.classList.add('selected');
    }

    character.subclass = subclassKey;
    updateSummary();
}

// ==================== ABILITY SCORES ====================

function initAbilityScores() {
    // Method selector
    document.querySelectorAll('input[name="ability-method"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            abilityMethod = e.target.value;
            updateAbilityMethod();
        });
    });

    updateAbilityMethod();
}

function updateAbilityMethod() {
    const pointBuyInfo = document.getElementById('point-buy-remaining');
    const arrayPool = document.getElementById('standard-array-pool');
    const rollBtn = document.getElementById('roll-abilities-btn');
    const inputs = document.querySelectorAll('.ability-score-card input');

    // Reset - with null checks
    if (pointBuyInfo) pointBuyInfo.style.display = 'none';
    if (arrayPool) arrayPool.style.display = 'none';
    if (rollBtn) rollBtn.style.display = 'none';

    inputs.forEach(input => {
        input.readOnly = true;
    });

    switch (abilityMethod) {
        case 'standard':
            if (arrayPool) arrayPool.style.display = 'block';
            initStandardArray();
            break;
        case 'pointbuy':
            if (pointBuyInfo) pointBuyInfo.style.display = 'block';
            initPointBuy();
            break;
        case 'roll':
            if (rollBtn) rollBtn.style.display = 'block';
            break;
        case 'manual':
            inputs.forEach(input => {
                input.readOnly = false;
                input.addEventListener('change', updateAbilityTotals);
            });
            break;
    }
}

function initStandardArray() {
    availableScores = [...standardArray];
    character.abilities = { str: 8, dex: 8, con: 8, int: 8, wis: 8, cha: 8 };

    const container = document.getElementById('available-scores');
    if (!container) return;
    container.innerHTML = '';

    availableScores.forEach((score, index) => {
        const chip = document.createElement('div');
        chip.className = 'score-chip';
        chip.textContent = score;
        chip.dataset.index = index;
        chip.draggable = true;
        chip.addEventListener('click', () => assignScore(index));
        container.appendChild(chip);
    });

    updateAbilityInputs();
}

function assignScore(index) {
    const score = availableScores[index];
    if (score === null) return;

    // Find first unassigned ability
    const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
    for (const ability of abilities) {
        if (character.abilities[ability] === 8) {
            character.abilities[ability] = score;
            availableScores[index] = null;

            // Update chip
            const chip = document.querySelector(`.score-chip[data-index="${index}"]`);
            if (chip) chip.classList.add('used');

            updateAbilityInputs();
            updateAbilityTotals();
            return;
        }
    }
}

function initPointBuy() {
    pointBuyPoints = 27;
    character.abilities = { str: 8, dex: 8, con: 8, int: 8, wis: 8, cha: 8 };
    document.getElementById('points-left').textContent = pointBuyPoints;
    updateAbilityInputs();
}

function adjustScore(ability, delta) {
    if (abilityMethod === 'pointbuy') {
        adjustPointBuy(ability, delta);
    } else if (abilityMethod === 'standard') {
        // For standard array, cycle through available scores
        const currentScore = character.abilities[ability];
        const availableForSwap = availableScores.filter(s => s !== null);

        if (currentScore > 8) {
            // Return score to pool
            const emptyIndex = availableScores.indexOf(null);
            if (emptyIndex !== -1) {
                availableScores[emptyIndex] = currentScore;
                character.abilities[ability] = 8;
            }
        }

        updateAbilityInputs();
        updateStandardArrayChips();
    }

    updateAbilityTotals();
}

function adjustPointBuy(ability, delta) {
    const currentScore = character.abilities[ability];
    const newScore = currentScore + delta;

    if (newScore < 8 || newScore > 15) return;

    const currentCost = pointBuyCosts[currentScore];
    const newCost = pointBuyCosts[newScore];
    const costDiff = newCost - currentCost;

    if (pointBuyPoints - costDiff < 0) return;

    character.abilities[ability] = newScore;
    pointBuyPoints -= costDiff;

    document.getElementById('points-left').textContent = pointBuyPoints;
    updateAbilityInputs();
}

function updateStandardArrayChips() {
    const chips = document.querySelectorAll('.score-chip');
    chips.forEach((chip, index) => {
        if (availableScores[index] === null) {
            chip.classList.add('used');
        } else {
            chip.classList.remove('used');
            chip.textContent = availableScores[index];
        }
    });
}

function rollAbilities() {
    const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

    abilities.forEach(ability => {
        // Roll 4d6, drop lowest
        const rolls = [];
        for (let i = 0; i < 4; i++) {
            rolls.push(Math.floor(Math.random() * 6) + 1);
        }
        rolls.sort((a, b) => b - a);
        const total = rolls[0] + rolls[1] + rolls[2];
        character.abilities[ability] = total;
    });

    updateAbilityInputs();
    updateAbilityTotals();
}

function updateAbilityInputs() {
    Object.entries(character.abilities).forEach(([ability, score]) => {
        const input = document.getElementById(`score-${ability}`);
        if (input) input.value = score;
    });
}

function updateAbilityTotals() {
    const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

    abilities.forEach(ability => {
        const base = character.abilities[ability];
        const racial = character.racialBonuses[ability] || 0;
        const total = base + racial;
        const modifier = Math.floor((total - 10) / 2);

        const totalEl = document.getElementById(`total-${ability}`);
        const modEl = document.getElementById(`mod-${ability}`);
        if (totalEl) totalEl.textContent = total;
        if (modEl) modEl.textContent = modifier >= 0 ? `+${modifier}` : modifier;
    });

    updateSummary();
}

// ==================== BACKGROUND SELECTION ====================

function initBackgroundSelection() {
    const grid = document.getElementById('background-grid');
    grid.innerHTML = '';

    // Background icons (using emoji for now, can be replaced with images)
    const BG_ICONS = {
        'acolyte': '🙏',
        'charlatan': '🎭',
        'criminal': '🗡️',
        'entertainer': '🎪',
        'folk-hero': '🦸',
        'guild-artisan': '🔨',
        'hermit': '🏔️',
        'noble': '👑',
        'outlander': '🌲',
        'sage': '📚',
        'sailor': '⚓',
        'soldier': '⚔️',
        'urchin': '🏚️'
    };

    Object.entries(BACKGROUNDS).forEach(([key, bg]) => {
        const card = document.createElement('div');
        card.className = 'selection-card background-card';
        card.dataset.background = key;

        const icon = BG_ICONS[key] || '📜';

        card.innerHTML = `
            <div class="card-icon">${icon}</div>
            <div class="card-content">
                <h4>${bg.name}</h4>
                <p>${bg.skillProficiencies.join(', ')}</p>
            </div>
        `;
        card.addEventListener('click', () => selectBackground(key));
        grid.appendChild(card);
    });
}

function selectBackground(bgKey) {
    // Update UI
    document.querySelectorAll('#background-grid .selection-card').forEach(card => {
        card.classList.remove('selected');
    });
    const selectedBgCard = document.querySelector(`#background-grid [data-background="${bgKey}"]`);
    if (selectedBgCard) selectedBgCard.classList.add('selected');

    const bg = BACKGROUNDS[bgKey];
    character.background = bgKey;

    // Reset background language selections when background changes
    selectedBackgroundLanguages = [];
    updateCharacterLanguages();

    // Update details panel
    document.getElementById('background-name').textContent = bg.name;
    document.getElementById('background-description').textContent = bg.description;

    // Display background info
    const infoContainer = document.getElementById('background-info');
    infoContainer.innerHTML = '';

    // Skill Proficiencies
    infoContainer.innerHTML += `
        <div class="background-info-item">
            <h5>Skill Proficiencies</h5>
            <p>${bg.skillProficiencies.join(', ')}</p>
        </div>
    `;

    // Tool Proficiencies
    if (bg.toolProficiencies) {
        infoContainer.innerHTML += `
            <div class="background-info-item">
                <h5>Tool Proficiencies</h5>
                <p>${bg.toolProficiencies.join(', ')}</p>
            </div>
        `;
    }

    // Languages
    if (bg.languages) {
        infoContainer.innerHTML += `
            <div class="background-info-item">
                <h5>Languages</h5>
                <p>${bg.languages} of your choice</p>
            </div>
            <div class="background-info-item language-selection" id="background-language-selection">
                <h5>Choose Language${bg.languages > 1 ? 's' : ''}</h5>
                <p class="selection-hint">Select ${bg.languages} language${bg.languages > 1 ? 's' : ''}</p>
                <div class="language-picker" id="background-language-picker"></div>
            </div>
        `;
        // Render language picker after DOM update
        setTimeout(() => renderBackgroundLanguagePicker(bg), 0);
    }

    // Equipment
    infoContainer.innerHTML += `
        <div class="background-info-item">
            <h5>Equipment</h5>
            <ul>${bg.equipment.map(e => `<li>${e}</li>`).join('')}</ul>
        </div>
    `;

    // Feature
    infoContainer.innerHTML += `
        <div class="background-info-item">
            <h5>Feature: ${bg.feature.name}</h5>
            <p>${bg.feature.description}</p>
        </div>
    `;

    updateSummary();
}

// ==================== FEAT SELECTION (Variant Human) ====================

function initFeatSelection() {
    const select = document.getElementById('feat-select');
    select.innerHTML = '<option value="">-- Select a Feat --</option>';

    Object.entries(FEATS).forEach(([key, feat]) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = feat.name + (feat.prerequisite ? ` (${feat.prerequisite})` : '');
        select.appendChild(option);
    });

    select.addEventListener('change', (e) => {
        character.feat = e.target.value;

        if (e.target.value && FEATS[e.target.value]) {
            const feat = FEATS[e.target.value];
            let detailsHtml = `<h4>${feat.name}</h4>`;
            if (feat.prerequisite) {
                detailsHtml += `<p><em>Prerequisite: ${feat.prerequisite}</em></p>`;
            }
            detailsHtml += `<p>${feat.description}</p>`;
            if (feat.benefits && feat.benefits.length > 0) {
                detailsHtml += '<ul>' + feat.benefits.map(b => `<li>${b}</li>`).join('') + '</ul>';
            }
            document.getElementById('feat-details').innerHTML = detailsHtml;
        } else {
            document.getElementById('feat-details').innerHTML = '';
        }

        updateSummary();
    });
}

// ==================== NAVIGATION ====================

// ========== EQUIPMENT SELECTION (Step 6) ==========

// Starting gold ranges by class
const STARTING_GOLD = {
    barbarian: '2d4 x 10',
    bard: '5d4 x 10',
    cleric: '5d4 x 10',
    druid: '2d4 x 10',
    fighter: '5d4 x 10',
    monk: '5d4',
    paladin: '5d4 x 10',
    ranger: '5d4 x 10',
    rogue: '4d4 x 10',
    sorcerer: '3d4 x 10',
    warlock: '4d4 x 10',
    wizard: '4d4 x 10'
};

// Detect equipment options that need a sub-picker (weapon lists, arcane focus, etc.)
function getEquipmentSubOptions(optionText) {
    const lower = optionText.toLowerCase().trim();
    if (lower.includes('any simple weapon') && !lower.includes('melee')) {
        return (typeof EQUIPMENT !== 'undefined' && EQUIPMENT.getSimpleWeapons)
            ? EQUIPMENT.getSimpleWeapons().map(w => w.name) : null;
    }
    if (lower.includes('any simple melee weapon')) {
        return (typeof EQUIPMENT !== 'undefined' && EQUIPMENT.weapons)
            ? Object.values(EQUIPMENT.weapons).filter(w => w.category === 'Simple Melee').map(w => w.name) : null;
    }
    if (lower.includes('any martial melee weapon')) {
        return (typeof EQUIPMENT !== 'undefined' && EQUIPMENT.weapons)
            ? Object.values(EQUIPMENT.weapons).filter(w => w.category === 'Martial Melee').map(w => w.name) : null;
    }
    if (lower.includes('any martial weapon') && !lower.includes('melee')) {
        return (typeof EQUIPMENT !== 'undefined' && EQUIPMENT.getMartialWeapons)
            ? EQUIPMENT.getMartialWeapons().map(w => w.name) : null;
    }
    if (lower === 'an arcane focus' || lower === 'arcane focus') {
        return (typeof EQUIPMENT !== 'undefined' && EQUIPMENT.adventuringGear)
            ? Object.values(EQUIPMENT.adventuringGear)
                .filter(g => g.name && g.name.startsWith('Arcane Focus'))
                .map(g => g.name) : null;
    }
    if (lower.includes('druidic focus')) {
        return (typeof EQUIPMENT !== 'undefined' && EQUIPMENT.adventuringGear)
            ? Object.values(EQUIPMENT.adventuringGear)
                .filter(g => g.name && g.name.includes('Druidic Focus'))
                .map(g => g.name) : null;
    }
    if (lower.includes('holy symbol')) {
        return (typeof EQUIPMENT !== 'undefined' && EQUIPMENT.adventuringGear)
            ? Object.values(EQUIPMENT.adventuringGear)
                .filter(g => g.name && g.name.includes('Holy Symbol'))
                .map(g => g.name) : null;
    }
    return null;
}

// Build the HTML for an equipment option (radio + optional sub-select dropdown)
function buildEquipmentOptionHTML(option, index, optIdx, isFirst) {
    const subOptions = getEquipmentSubOptions(option);
    const radioName = `equip-choice-${index}`;
    const selectId = `equip-sub-${index}-${optIdx}`;

    if (subOptions && subOptions.length > 0) {
        const selectOptions = subOptions.map(name =>
            `<option value="${name}">${name}</option>`
        ).join('');
        return `
            <input type="radio" name="${radioName}" value="${subOptions[0]}"
                   ${isFirst ? 'checked' : ''}
                   onchange="updateEquipmentList()" data-has-sub="${selectId}">
            <span class="option-text">${option.trim()}</span>
            <select class="equip-sub-select" id="${selectId}"
                    onchange="handleEquipSubSelect(this, '${radioName}')"
                    ${!isFirst ? 'disabled' : ''}>
                ${selectOptions}
            </select>
        `;
    }

    return `
        <input type="radio" name="${radioName}" value="${option.trim()}"
               ${isFirst ? 'checked' : ''}
               onchange="updateEquipmentList()">
        <span class="option-text">${option.trim()}</span>
    `;
}

// When a sub-select dropdown changes, update the parent radio's value
function handleEquipSubSelect(selectEl, radioName) {
    const radios = document.querySelectorAll(`[name="${radioName}"]`);
    radios.forEach(r => {
        if (r.dataset.hasSub === selectEl.id) {
            r.value = selectEl.value;
        }
    });
    updateEquipmentList();
}

// When a fixed-line sub-select changes, update the hidden input value
function handleFixedEquipSubSelect(selectEl, index, originalLine) {
    const hidden = document.querySelector(`[name="equip-choice-${index}"]`);
    if (hidden) {
        // Replace the generic term with the specific selection in the original line
        hidden.value = originalLine.replace(
            /any simple weapon|any simple melee weapon|any martial melee weapon|any martial weapon|an arcane focus|arcane focus/i,
            selectEl.value
        );
    }
    updateEquipmentList();
}

function initEquipmentSelection() {
    const container = document.getElementById('equipment-choices');
    const cls = CLASSES[character.class];
    if (!container || !cls) return;

    container.innerHTML = '';

    const equipmentLines = cls.startingEquipment || [];
    if (equipmentLines.length === 0) {
        container.innerHTML = '<p class="no-equipment">No equipment choices defined for this class.</p>';
        return;
    }

    // Parse each equipment line into choices
    equipmentLines.forEach((line, index) => {
        const choiceDiv = document.createElement('div');
        choiceDiv.className = 'equipment-choice';

        if (line.toUpperCase().includes(' OR ')) {
            // This is a choice line - split on " OR " (case insensitive)
            const options = line.split(/\s+OR\s+/i);
            choiceDiv.innerHTML = `<h4 class="equipment-choice-title">Choice ${index + 1}</h4>`;

            options.forEach((option, optIdx) => {
                const label = document.createElement('label');
                label.className = 'equipment-option';
                label.innerHTML = buildEquipmentOptionHTML(option.trim(), index, optIdx, optIdx === 0);
                choiceDiv.appendChild(label);
            });

            // Enable/disable sub-selects based on which radio is checked
            choiceDiv.addEventListener('change', (e) => {
                if (e.target.type === 'radio') {
                    const allSelects = choiceDiv.querySelectorAll('.equip-sub-select');
                    allSelects.forEach(sel => sel.disabled = true);
                    if (e.target.dataset.hasSub) {
                        const activeSel = document.getElementById(e.target.dataset.hasSub);
                        if (activeSel) {
                            activeSel.disabled = false;
                            e.target.value = activeSel.value;
                        }
                    }
                    updateEquipmentList();
                }
            });
        } else {
            // Check if fixed equipment has a sub-picker (e.g. "Leather armor, any simple weapon, and two daggers")
            const subOptions = getEquipmentSubOptions(line);
            if (subOptions && subOptions.length > 0) {
                const selectId = `equip-sub-fixed-${index}`;
                const selectOptions = subOptions.map(name =>
                    `<option value="${name}">${name}</option>`
                ).join('');
                choiceDiv.innerHTML = `
                    <h4 class="equipment-choice-title">Included</h4>
                    <div class="equipment-fixed">
                        <span class="option-text">${line}</span>
                        <select class="equip-sub-select" id="${selectId}"
                                onchange="handleFixedEquipSubSelect(this, ${index}, '${line.replace(/'/g, "\\'")}')">
                            ${selectOptions}
                        </select>
                        <input type="hidden" name="equip-choice-${index}" value="${line.replace(/any simple weapon|any simple melee weapon|any martial melee weapon|any martial weapon|an arcane focus|arcane focus/gi, subOptions[0])}">
                    </div>
                `;
            } else {
                choiceDiv.innerHTML = `
                    <h4 class="equipment-choice-title">Included</h4>
                    <div class="equipment-fixed">
                        <span class="option-text">${line}</span>
                        <input type="hidden" name="equip-choice-${index}" value="${line}">
                    </div>
                `;
            }
        }

        container.appendChild(choiceDiv);
    });

    // Add background equipment
    if (character.background && BACKGROUNDS[character.background]) {
        const bg = BACKGROUNDS[character.background];
        if (bg.equipment && bg.equipment.length > 0) {
            const bgDiv = document.createElement('div');
            bgDiv.className = 'equipment-choice';
            bgDiv.innerHTML = `
                <h4 class="equipment-choice-title">From Background: ${bg.name}</h4>
                <div class="equipment-fixed">
                    <span class="option-text">${bg.equipment.join(', ')}</span>
                </div>
            `;
            container.appendChild(bgDiv);
        }
    }

    // Setup gold toggle
    const useGoldCheckbox = document.getElementById('use-gold');
    const goldDisplay = document.getElementById('starting-gold');
    const goldAmount = document.getElementById('gold-amount');

    if (useGoldCheckbox) {
        useGoldCheckbox.checked = false;
        useGoldCheckbox.onchange = () => {
            if (useGoldCheckbox.checked) {
                container.style.opacity = '0.3';
                container.style.pointerEvents = 'none';
                goldDisplay.style.display = 'flex';
                goldAmount.textContent = STARTING_GOLD[character.class] || '5d4 x 10';
                character.equipment = [`Starting gold: ${STARTING_GOLD[character.class] || '5d4 x 10'} gp`];
            } else {
                container.style.opacity = '1';
                container.style.pointerEvents = 'auto';
                goldDisplay.style.display = 'none';
                updateEquipmentList();
            }
        };
    }

    updateEquipmentList();
}

function updateEquipmentList() {
    const finalList = document.getElementById('final-equipment');
    if (!finalList) return;

    const equipment = [];
    const cls = CLASSES[character.class];
    if (!cls) return;

    const equipmentLines = cls.startingEquipment || [];

    // Gather selected equipment
    equipmentLines.forEach((line, index) => {
        const inputs = document.querySelectorAll(`[name="equip-choice-${index}"]`);
        inputs.forEach(input => {
            if (input.type === 'hidden' || input.checked) {
                equipment.push(input.value);
            }
        });
    });

    // Add background equipment
    if (character.background && BACKGROUNDS[character.background]) {
        const bg = BACKGROUNDS[character.background];
        if (bg.equipment) {
            bg.equipment.forEach(item => equipment.push(item));
        }
    }

    // Update display
    finalList.innerHTML = equipment.map(item => `<li>${item}</li>`).join('');

    // Store on character
    character.equipment = equipment;
}

// ========== END EQUIPMENT SELECTION ==========

function nextStep() {
    if (!validateStep(currentStep)) return;

    if (currentStep < totalSteps) {
        document.getElementById(`step-${currentStep}`).style.display = 'none';
        currentStep++;
        document.getElementById(`step-${currentStep}`).style.display = 'block';
        updateProgressBar();
        updateNavButtons();

        if (currentStep === 6) {
            initEquipmentSelection();
        }

        if (currentStep === 7) {
            generateCharacterPreview();
        }

        // Check for variant human feat and subclass selection
        if (currentStep === 5) {
            const featSection = document.getElementById('variant-human-feat');
            if (character.race === 'human' && RACES.human.variant) {
                featSection.style.display = 'block';
            } else {
                featSection.style.display = 'none';
            }

            // Update subclass visibility based on current level
            updateSubclassVisibility();
        }
    }
}

function prevStep() {
    if (currentStep > 1) {
        document.getElementById(`step-${currentStep}`).style.display = 'none';
        currentStep--;
        document.getElementById(`step-${currentStep}`).style.display = 'block';
        updateProgressBar();
        updateNavButtons();
    }
}

function validateStep(step) {
    switch (step) {
        case 1:
            if (!character.race) {
                alert('Please select a race.');
                return false;
            }
            const selectedRace = RACES[character.race];
            if (selectedRace && selectedRace.subraces && !character.subrace) {
                alert('Please select a subrace.');
                return false;
            }
            if (character.race === 'dragonborn' && !character.draconicAncestry) {
                alert('Please select a draconic ancestry.');
                return false;
            }
            return true;
        case 2:
            if (!character.class) {
                alert('Please select a class.');
                return false;
            }
            return true;
        case 3:
            return true;
        case 4:
            if (!character.background) {
                alert('Please select a background.');
                return false;
            }
            return true;
        default:
            return true;
    }
}

function updateProgressBar() {
    document.querySelectorAll('.progress-step').forEach((step, index) => {
        step.classList.remove('active', 'completed');
        if (index + 1 === currentStep) {
            step.classList.add('active');
        } else if (index + 1 < currentStep) {
            step.classList.add('completed');
        }
    });
}

function updateNavButtons() {
    document.getElementById('prev-btn').disabled = currentStep === 1;
    document.getElementById('next-btn').textContent = currentStep === totalSteps ? 'Finish' : 'Next';
}

// ==================== CHARACTER PORTRAIT ====================

function updateCharacterPortrait() {
    const portraitContainer = document.getElementById('character-portrait');
    const portraitImage = document.getElementById('portrait-image');
    const portraitPlaceholder = document.getElementById('portrait-placeholder');
    const portraitLabel = document.getElementById('portrait-label');

    if (character.race && RACE_IMAGES[character.race]) {
        // Show the race image
        portraitImage.src = RACE_IMAGES[character.race];
        portraitImage.style.display = 'block';
        portraitPlaceholder.style.display = 'none';
        portraitContainer.classList.add('has-image');

        // Update label with race/class info
        const raceData = RACES[character.race];
        let labelText = raceData ? raceData.name : character.race;
        if (character.subrace && raceData && raceData.subraces && raceData.subraces[character.subrace]) {
            labelText = raceData.subraces[character.subrace].name;
        }
        const classData = character.class ? CLASSES[character.class] : null;
        if (classData) {
            labelText += ' ' + classData.name;
        }
        portraitLabel.textContent = labelText;
    } else {
        // Show placeholder
        portraitImage.style.display = 'none';
        portraitPlaceholder.style.display = 'block';
        portraitContainer.classList.remove('has-image');
        portraitLabel.textContent = 'Select a race';
    }
}

// ==================== SUMMARY ====================

function updateSummary() {
    // Name
    document.getElementById('sum-name').textContent = character.name || '-';

    // Update character portrait
    updateCharacterPortrait();

    // Race
    let raceText = '-';
    if (character.race) {
        const raceData = RACES[character.race];
        raceText = raceData ? raceData.name : character.race;
        if (character.subrace && raceData && raceData.subraces && raceData.subraces[character.subrace]) {
            raceText = raceData.subraces[character.subrace].name;
        }
    }
    document.getElementById('sum-race').textContent = raceText;

    // Class
    let classText = '-';
    if (character.class) {
        const classData = CLASSES[character.class];
        classText = classData ? classData.name : character.class;
        if (character.subclass && classData && classData.subclasses && classData.subclasses[character.subclass]) {
            classText += ` (${classData.subclasses[character.subclass].name})`;
        }
    }
    document.getElementById('sum-class').textContent = classText;

    // Background
    document.getElementById('sum-background').textContent = character.background ? BACKGROUNDS[character.background].name : '-';

    // Level
    document.getElementById('sum-level').textContent = character.level;

    // Abilities
    const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
    abilities.forEach(ability => {
        const total = character.abilities[ability] + (character.racialBonuses[ability] || 0);
        document.getElementById(`sum-${ability}`).textContent = total;
    });

    // HP
    if (character.class) {
        const cls = CLASSES[character.class];
        const conMod = Math.floor((character.abilities.con + character.racialBonuses.con - 10) / 2);
        const hp = cls.hitDie + conMod;
        document.getElementById('sum-hp').textContent = hp;
    }

    // AC (base 10 + DEX mod)
    const dexMod = Math.floor((character.abilities.dex + character.racialBonuses.dex - 10) / 2);
    document.getElementById('sum-ac').textContent = 10 + dexMod;

    // Speed
    let speed = 30;
    if (character.race) {
        const raceSpeedData = RACES[character.race];
        if (raceSpeedData) {
            speed = raceSpeedData.speed || 30;
            if (character.subrace && raceSpeedData.subraces && raceSpeedData.subraces[character.subrace] &&
                raceSpeedData.subraces[character.subrace].speedBonus) {
                speed += raceSpeedData.subraces[character.subrace].speedBonus;
            }
        }
    }
    document.getElementById('sum-speed').textContent = speed + ' ft';

    // Update all sidebar sections (features, traits, proficiencies, etc.)
    updateAllSidebarSections();
}

// Listen for name changes
document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('char-name');
    if (nameInput) {
        nameInput.addEventListener('input', (e) => {
            character.name = e.target.value;
            updateSummary();
        });
    }

    const levelInput = document.getElementById('char-level');
    if (levelInput) {
        levelInput.addEventListener('change', (e) => {
            character.level = parseInt(e.target.value, 10) || 1;
            updateSummary();
            updateSubclassVisibility();
        });
        // Also listen for input event for immediate feedback
        levelInput.addEventListener('input', (e) => {
            character.level = parseInt(e.target.value, 10) || 1;
            updateSummary();
            updateSubclassVisibility();
        });
    }

    const alignmentSelect = document.getElementById('char-alignment');
    if (alignmentSelect) {
        alignmentSelect.addEventListener('change', (e) => {
            character.alignment = e.target.value;
            updateSummary();
        });
    }
});

// ==================== SUBCLASS SELECTION (Step 5) ====================

function updateSubclassVisibility() {
    const subclassContainer = document.getElementById('details-subclass-selection');
    if (!subclassContainer) return;

    const level = character.level || 1;
    const cls = character.class ? CLASSES[character.class] : null;

    // Show subclass options only if level >= 3 and class has subclasses
    if (level >= 3 && cls && cls.subclasses) {
        subclassContainer.style.display = 'block';
        populateSubclassOptions();
    } else {
        subclassContainer.style.display = 'none';
        // Clear subclass if level drops below 3
        if (level < 3 && character.subclass) {
            character.subclass = null;
            updateSummary();
        }
    }
}

function populateSubclassOptions() {
    const subclassOptions = document.getElementById('details-subclass-options');
    if (!subclassOptions) return;

    const cls = character.class ? CLASSES[character.class] : null;
    if (!cls || !cls.subclasses) {
        subclassOptions.innerHTML = '';
        return;
    }

    subclassOptions.innerHTML = '';

    Object.entries(cls.subclasses).forEach(([key, subclass]) => {
        const option = document.createElement('div');
        option.className = 'subclass-option';
        option.dataset.subclass = key;

        // Check if this subclass is already selected
        if (character.subclass === key) {
            option.classList.add('selected');
        }

        option.innerHTML = `
            <strong>${subclass.name}</strong>
            <p>${subclass.description}</p>
        `;
        option.addEventListener('click', () => selectSubclass(key));
        subclassOptions.appendChild(option);
    });
}

// ==================== CHARACTER PREVIEW ====================

function generateCharacterPreview() {
    const preview = document.getElementById('character-preview');

    const race = character.race ? RACES[character.race] : null;
    const cls = character.class ? CLASSES[character.class] : null;
    const bg = character.background ? BACKGROUNDS[character.background] : null;

    let raceDisplay = race ? race.name : 'Unknown';
    if (character.subrace && race && race.subraces) {
        raceDisplay = race.subraces[character.subrace].name;
    }

    let classDisplay = cls ? cls.name : 'Unknown';
    if (character.subclass && cls && cls.subclasses) {
        classDisplay += ` (${cls.subclasses[character.subclass].name})`;
    }

    // Calculate final stats
    const abilities = {};
    ['str', 'dex', 'con', 'int', 'wis', 'cha'].forEach(ability => {
        abilities[ability] = {
            total: character.abilities[ability] + (character.racialBonuses[ability] || 0),
            mod: Math.floor((character.abilities[ability] + (character.racialBonuses[ability] || 0) - 10) / 2)
        };
    });

    // Calculate HP with proper level scaling
    // Level 1: max hit die + CON mod
    // Levels 2+: average hit die (rounded up) + CON mod per level
    const level = character.level || 1;
    let hp = 0;
    if (cls) {
        const hitDie = cls.hitDie;
        const avgHitDie = Math.ceil(hitDie / 2) + 1; // Average rounded up (d6=4, d8=5, d10=6, d12=7)
        hp = hitDie + abilities.con.mod; // Level 1
        if (level > 1) {
            hp += (avgHitDie + abilities.con.mod) * (level - 1); // Additional levels
        }
        hp = Math.max(hp, 1); // Minimum 1 HP
    }
    const ac = 10 + abilities.dex.mod;
    const speed = race ? race.speed : 30;
    // Proficiency bonus scales with level: +2 at 1-4, +3 at 5-8, +4 at 9-12, +5 at 13-16, +6 at 17-20
    const proficiencyBonus = Math.floor((level - 1) / 4) + 2;

    preview.innerHTML = `
        <div class="preview-header">
            <div>
                <h2 class="preview-name">${escapeHtml(character.name) || 'Unnamed Character'}</h2>
                <p class="preview-subtitle">${escapeHtml(raceDisplay)} ${escapeHtml(classDisplay)} ${character.level}</p>
            </div>
            <div>
                <p><strong>Background:</strong> ${bg ? escapeHtml(bg.name) : 'Unknown'}</p>
                <p><strong>Alignment:</strong> ${escapeHtml(formatAlignment(character.alignment))}</p>
            </div>
        </div>

        <div class="preview-stats">
            ${['str', 'dex', 'con', 'int', 'wis', 'cha'].map(ability => `
                <div class="preview-stat">
                    <label>${ability.toUpperCase()}</label>
                    <div class="value">${abilities[ability].total}</div>
                    <div class="mod">${abilities[ability].mod >= 0 ? '+' : ''}${abilities[ability].mod}</div>
                </div>
            `).join('')}
        </div>

        <div style="display: flex; gap: 20px; margin-bottom: 20px;">
            <div class="preview-stat" style="flex: 1;">
                <label>Hit Points</label>
                <div class="value">${hp}</div>
            </div>
            <div class="preview-stat" style="flex: 1;">
                <label>Armor Class</label>
                <div class="value">${ac}</div>
            </div>
            <div class="preview-stat" style="flex: 1;">
                <label>Speed</label>
                <div class="value">${speed} ft</div>
            </div>
            <div class="preview-stat" style="flex: 1;">
                <label>Proficiency</label>
                <div class="value">+${proficiencyBonus}</div>
            </div>
        </div>

        <div class="preview-section">
            <h4>Racial Traits</h4>
            ${race && race.traits ? race.traits.map(t => `<p><strong>${t.name}:</strong> ${t.description}</p>`).join('') : '<p>None</p>'}
        </div>

        <div class="preview-section">
            <h4>Class Features (Level ${level})</h4>
            ${cls && cls.features ? (() => {
                const allFeatures = [];
                for (let lvl = 1; lvl <= level; lvl++) {
                    if (cls.features[lvl]) {
                        allFeatures.push(...cls.features[lvl]);
                    }
                }
                return allFeatures.length > 0
                    ? allFeatures.map(f => `<p><strong>${f.name}:</strong> ${f.description}</p>`).join('')
                    : '<p>None</p>';
            })() : '<p>None</p>'}
        </div>

        <div class="preview-section">
            <h4>Background Feature</h4>
            ${bg ? `<p><strong>${bg.feature.name}:</strong> ${bg.feature.description}</p>` : '<p>None</p>'}
        </div>

        ${character.feat && FEATS[character.feat] ? `
            <div class="preview-section">
                <h4>Feat: ${FEATS[character.feat].name}</h4>
                <p>${FEATS[character.feat].description}</p>
            </div>
        ` : ''}

        <div class="preview-section">
            <h4>Proficiencies</h4>
            <p><strong>Armor:</strong> ${cls ? cls.armorProficiencies.join(', ') || 'None' : 'None'}</p>
            <p><strong>Weapons:</strong> ${cls ? cls.weaponProficiencies.join(', ') || 'None' : 'None'}</p>
            <p><strong>Languages:</strong> ${race ? race.languages.join(', ') : 'Common'}</p>
        </div>
    `;
}

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
    return alignments[alignment] || alignment;
}

// ==================== SAVE/EXPORT ====================

function saveCharacter() {
    // Gather all character data
    const charData = {
        ...character,
        name: document.getElementById('char-name').value,
        raceName: character.race ? RACES[character.race].name : '',
        className: character.class ? CLASSES[character.class].name : '',
        alignment: document.getElementById('char-alignment').value,
        level: parseInt(document.getElementById('char-level').value, 10) || 1,
        age: document.getElementById('char-age').value,
        height: document.getElementById('char-height').value,
        weight: document.getElementById('char-weight').value,
        appearance: document.getElementById('char-appearance').value,
        personality: document.getElementById('char-personality').value,
        ideals: document.getElementById('char-ideals').value,
        bonds: document.getElementById('char-bonds').value,
        flaws: document.getElementById('char-flaws').value,
        backstory: document.getElementById('char-backstory').value,
        savedAt: new Date().toISOString()
    };

    // Get existing characters
    let savedCharacters;
    try {
        savedCharacters = JSON.parse(localStorage.getItem('dndCharacters') || '[]');
    } catch (e) {
        console.error('Failed to parse characters data:', e);
        savedCharacters = [];
    }

    // Add new character
    savedCharacters.push(charData);

    // Save to localStorage
    localStorage.setItem('dndCharacters', JSON.stringify(savedCharacters));

    alert('Character saved successfully!');

    // Navigate based on context
    if (window._creatorReturnTo === 'session' && window.spaNavigate) {
        // Came from session page - go back with the new character selected
        window.spaNavigate('session.html', { action: 'select-new-character' });
    } else if (window.spaNavigate) {
        // Normal creator - go to My Characters
        window.spaNavigate('characters.html');
    }
}

function exportCharacter() {
    // Generate a JSON export
    const charData = {
        ...character,
        name: document.getElementById('char-name').value,
        raceName: character.race ? RACES[character.race].name : '',
        className: character.class ? CLASSES[character.class].name : '',
        backgroundName: character.background ? BACKGROUNDS[character.background].name : ''
    };

    const dataStr = JSON.stringify(charData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `${charData.name || 'character'}.json`;
    link.click();

    URL.revokeObjectURL(url);
}

function printCharacter() {
    window.print();
}

// ==================== SIDEBAR FEATURES & TRAITS ====================

// Track feature uses (for abilities like Breath Weapon, Relentless Endurance)
const featureUses = {};

// Initialize sidebar section toggles and tooltips
function initSidebarInteractions() {
    // Section toggle functionality
    document.querySelectorAll('.features-section-header').forEach(header => {
        header.addEventListener('click', () => {
            const section = header.dataset.section;
            const content = document.getElementById(`${section}-content`);

            header.classList.toggle('collapsed');
            if (content) {
                content.classList.toggle('collapsed');
            }
        });
    });

    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.className = 'feature-tooltip';
    tooltip.id = 'feature-tooltip';
    document.body.appendChild(tooltip);
}

// Update the racial traits section in sidebar
function updateSidebarRacialTraits() {
    const container = document.getElementById('racial-traits-content');
    if (!container) return;

    if (!character.race) {
        container.innerHTML = '<div class="no-features-msg">Select a race to see traits</div>';
        return;
    }

    const race = RACES[character.race];
    if (!race) return;

    let traitsHtml = '';
    const allTraits = [];

    // Collect base race traits
    if (race.traits) {
        race.traits.forEach(trait => {
            allTraits.push({ ...trait, source: race.name });
        });
    }

    // Collect subrace traits
    if (character.subrace && race.subraces && race.subraces[character.subrace]) {
        const subrace = race.subraces[character.subrace];
        if (subrace.traits) {
            subrace.traits.forEach(trait => {
                allTraits.push({ ...trait, source: subrace.name });
            });
        }
    }

    allTraits.forEach((trait, index) => {
        const isPassive = !isActiveTrait(trait);
        const featureClass = isPassive ? 'passive-ability' : 'active-ability';
        const icon = getTraitIcon(trait.name);

        traitsHtml += `
            <div class="feature-item ${featureClass}" data-feature-id="racial-${index}">
                <div class="feature-header" onclick="toggleFeatureExpand(this)">
                    <div class="feature-name">
                        <span class="feature-icon">${icon}</span>
                        <span>${trait.name}</span>
                    </div>
                    <span class="feature-expand">&#9660;</span>
                </div>
                <div class="feature-description">
                    <p>${trait.description}</p>
                </div>
            </div>
        `;
    });

    container.innerHTML = traitsHtml || '<div class="no-features-msg">No racial traits</div>';
}

// Update the class features section in sidebar
function updateSidebarClassFeatures() {
    const container = document.getElementById('class-features-content');
    if (!container) return;

    if (!character.class) {
        container.innerHTML = '<div class="no-features-msg">Select a class to see features</div>';
        return;
    }

    const cls = CLASSES[character.class];
    if (!cls) return;

    let featuresHtml = '';
    const level = character.level || 1;

    // Collect features up to current level
    for (let i = 1; i <= level; i++) {
        if (cls.features && cls.features[i]) {
            cls.features[i].forEach((feature, index) => {
                const icon = getClassFeatureIcon(feature.name);

                featuresHtml += `
                    <div class="feature-item passive-ability" data-feature-id="class-${i}-${index}">
                        <div class="feature-header" onclick="toggleFeatureExpand(this)">
                            <div class="feature-name">
                                <span class="feature-icon">${icon}</span>
                                <span>${feature.name}</span>
                            </div>
                            <span class="feature-expand">&#9660;</span>
                        </div>
                        <div class="feature-description">
                            <p>${feature.description}</p>
                        </div>
                    </div>
                `;
            });
        }
    }

    container.innerHTML = featuresHtml || '<div class="no-features-msg">No class features at this level</div>';
}

// Update the active abilities section in sidebar (abilities with limited uses)
function updateSidebarActiveAbilities() {
    const container = document.getElementById('active-abilities-content');
    if (!container) return;

    const activeAbilities = [];

    // Check for racial active abilities
    if (character.race) {
        const race = RACES[character.race];

        // Dragonborn Breath Weapon
        if (character.race === 'dragonborn' && character.draconicAncestry) {
            const ancestryKey = character.draconicAncestry.toLowerCase();
            const ancestry = race.draconicAncestry ? race.draconicAncestry[ancestryKey] : null;
            const ancestryLegacy = race.draconicAncestryList ?
                race.draconicAncestryList.find(a => a.dragon.toLowerCase() === ancestryKey) : null;

            const damageType = ancestry ? ancestry.damageType : (ancestryLegacy ? ancestryLegacy.damageType : 'Unknown');
            const breathDesc = ancestry && ancestry.breathWeapon ?
                `${ancestry.breathWeapon.size} ${ancestry.breathWeapon.shape} (${ancestry.breathWeapon.savingThrow} save)` :
                (ancestryLegacy ? ancestryLegacy.breathWeapon : '');

            activeAbilities.push({
                id: 'breath-weapon',
                name: 'Breath Weapon',
                description: `You exhale destructive ${damageType.toLowerCase()} energy. ${breathDesc}. DC = 8 + CON mod + proficiency. Damage: 2d6 (scales at higher levels).`,
                icon: '&#128293;',
                uses: 1,
                maxUses: 1,
                recharge: 'Short Rest',
                type: 'active'
            });
        }

        // Half-Orc Relentless Endurance
        if (character.race === 'halfOrc') {
            activeAbilities.push({
                id: 'relentless-endurance',
                name: 'Relentless Endurance',
                description: 'When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead.',
                icon: '&#128170;',
                uses: 1,
                maxUses: 1,
                recharge: 'Long Rest',
                type: 'active'
            });
        }

        // Tiefling Infernal Legacy spells (at higher levels)
        if (character.race === 'tiefling') {
            const level = character.level || 1;
            if (level >= 3) {
                activeAbilities.push({
                    id: 'hellish-rebuke',
                    name: 'Hellish Rebuke',
                    description: 'Cast Hellish Rebuke as a 2nd-level spell. The creature that damaged you takes 3d10 fire damage on a failed Dex save.',
                    icon: '&#128165;',
                    uses: 1,
                    maxUses: 1,
                    recharge: 'Long Rest',
                    type: 'spell'
                });
            }
            if (level >= 5) {
                activeAbilities.push({
                    id: 'darkness-spell',
                    name: 'Darkness',
                    description: 'Cast Darkness spell. Magical darkness fills a 15-foot-radius sphere.',
                    icon: '&#127761;',
                    uses: 1,
                    maxUses: 1,
                    recharge: 'Long Rest',
                    type: 'spell'
                });
            }
        }

        // Drow Magic
        if (character.subrace === 'dark') {
            const level = character.level || 1;
            if (level >= 3) {
                activeAbilities.push({
                    id: 'faerie-fire',
                    name: 'Faerie Fire',
                    description: 'Cast Faerie Fire once per day. Objects and creatures in a 20-foot cube are outlined in light.',
                    icon: '&#10024;',
                    uses: 1,
                    maxUses: 1,
                    recharge: 'Long Rest',
                    type: 'spell'
                });
            }
            if (level >= 5) {
                activeAbilities.push({
                    id: 'drow-darkness',
                    name: 'Darkness (Drow)',
                    description: 'Cast Darkness spell once per day.',
                    icon: '&#127761;',
                    uses: 1,
                    maxUses: 1,
                    recharge: 'Long Rest',
                    type: 'spell'
                });
            }
        }
    }

    // Check for class active abilities
    if (character.class) {
        const cls = CLASSES[character.class];
        const level = character.level || 1;

        // Barbarian Rage
        if (character.class === 'barbarian') {
            let rageUses = 2;
            if (level >= 3) rageUses = 3;
            if (level >= 6) rageUses = 4;
            if (level >= 12) rageUses = 5;
            if (level >= 17) rageUses = 6;
            if (level >= 20) rageUses = 999; // Unlimited

            activeAbilities.push({
                id: 'rage',
                name: 'Rage',
                description: 'Enter a battle rage as a bonus action. Gain advantage on STR checks/saves, bonus damage, and resistance to physical damage for 1 minute.',
                icon: '&#128544;',
                uses: rageUses,
                maxUses: rageUses,
                recharge: level >= 20 ? 'Unlimited' : 'Long Rest',
                type: 'active'
            });
        }

        // Fighter Second Wind
        if (character.class === 'fighter') {
            activeAbilities.push({
                id: 'second-wind',
                name: 'Second Wind',
                description: 'Use a bonus action to regain hit points equal to 1d10 + your fighter level.',
                icon: '&#128154;',
                uses: 1,
                maxUses: 1,
                recharge: 'Short Rest',
                type: 'active'
            });

            // Action Surge at level 2
            if (level >= 2) {
                activeAbilities.push({
                    id: 'action-surge',
                    name: 'Action Surge',
                    description: 'Take one additional action on your turn.',
                    icon: '&#9889;',
                    uses: level >= 17 ? 2 : 1,
                    maxUses: level >= 17 ? 2 : 1,
                    recharge: 'Short Rest',
                    type: 'active'
                });
            }
        }

        // Monk Ki Points
        if (character.class === 'monk' && level >= 2) {
            activeAbilities.push({
                id: 'ki-points',
                name: 'Ki Points',
                description: 'Use ki to fuel various monk abilities like Flurry of Blows, Patient Defense, and Step of the Wind.',
                icon: '&#9775;',
                uses: level,
                maxUses: level,
                recharge: 'Short Rest',
                type: 'resource'
            });
        }

        // Paladin Divine Sense
        if (character.class === 'paladin') {
            const chaMod = Math.floor((character.abilities.cha + character.racialBonuses.cha - 10) / 2);
            const divineSenseUses = Math.max(1, 1 + chaMod);

            activeAbilities.push({
                id: 'divine-sense',
                name: 'Divine Sense',
                description: 'Detect celestials, fiends, and undead within 60 feet.',
                icon: '&#128302;',
                uses: divineSenseUses,
                maxUses: divineSenseUses,
                recharge: 'Long Rest',
                type: 'active'
            });

            activeAbilities.push({
                id: 'lay-on-hands',
                name: 'Lay on Hands',
                description: `Heal creatures by touch. You have a pool of ${level * 5} hit points.`,
                icon: '&#10084;',
                uses: level * 5,
                maxUses: level * 5,
                recharge: 'Long Rest',
                type: 'resource'
            });
        }

        // Sorcerer Sorcery Points
        if (character.class === 'sorcerer' && level >= 2) {
            activeAbilities.push({
                id: 'sorcery-points',
                name: 'Sorcery Points',
                description: 'Use sorcery points to create spell slots or fuel Metamagic.',
                icon: '&#10031;',
                uses: level,
                maxUses: level,
                recharge: 'Long Rest',
                type: 'resource'
            });
        }

        // Warlock spell slots
        if (character.class === 'warlock') {
            let slotLevel = 1;
            let numSlots = 1;
            if (level >= 2) numSlots = 2;
            if (level >= 3) slotLevel = 2;
            if (level >= 5) slotLevel = 3;
            if (level >= 7) slotLevel = 4;
            if (level >= 9) slotLevel = 5;
            if (level >= 11) numSlots = 3;
            if (level >= 17) numSlots = 4;

            activeAbilities.push({
                id: 'pact-magic',
                name: 'Pact Magic',
                description: `${numSlots} spell slot(s) at level ${slotLevel}. All slots are the same level.`,
                icon: '&#128156;',
                uses: numSlots,
                maxUses: numSlots,
                recharge: 'Short Rest',
                type: 'resource'
            });
        }

        // Cleric Channel Divinity
        if (character.class === 'cleric' && level >= 2) {
            let channelUses = 1;
            if (level >= 6) channelUses = 2;
            if (level >= 18) channelUses = 3;

            activeAbilities.push({
                id: 'channel-divinity',
                name: 'Channel Divinity',
                description: 'Channel divine energy for special effects like Turn Undead.',
                icon: '&#9764;',
                uses: channelUses,
                maxUses: channelUses,
                recharge: 'Short Rest',
                type: 'active'
            });
        }

        // Bard Bardic Inspiration
        if (character.class === 'bard') {
            const chaMod = Math.max(1, Math.floor((character.abilities.cha + character.racialBonuses.cha - 10) / 2));

            activeAbilities.push({
                id: 'bardic-inspiration',
                name: 'Bardic Inspiration',
                description: 'Grant an ally a d6 to add to one ability check, attack roll, or saving throw.',
                icon: '&#127926;',
                uses: chaMod,
                maxUses: chaMod,
                recharge: level >= 5 ? 'Short Rest' : 'Long Rest',
                type: 'active'
            });
        }

        // Druid Wild Shape
        if (character.class === 'druid' && level >= 2) {
            activeAbilities.push({
                id: 'wild-shape',
                name: 'Wild Shape',
                description: 'Transform into a beast you have seen before.',
                icon: '&#128058;',
                uses: 2,
                maxUses: 2,
                recharge: 'Short Rest',
                type: 'active'
            });
        }

        // Rogue Cunning Action is a bonus action feature, no uses to track
    }

    // Initialize feature uses if not already set
    activeAbilities.forEach(ability => {
        if (featureUses[ability.id] === undefined) {
            featureUses[ability.id] = 0;
        }
    });

    // Render active abilities
    if (activeAbilities.length === 0) {
        container.innerHTML = '<div class="no-features-msg">Select a race and class to see abilities</div>';
        return;
    }

    let html = '';
    activeAbilities.forEach(ability => {
        const usesRemaining = ability.maxUses - (featureUses[ability.id] || 0);
        const isUnlimited = ability.recharge === 'Unlimited';

        html += `
            <div class="feature-item has-uses" data-feature-id="${ability.id}">
                <div class="feature-header" onclick="toggleFeatureExpand(this)">
                    <div class="feature-name">
                        <span class="feature-icon">${ability.icon}</span>
                        <span>${ability.name}</span>
                    </div>
                    <span class="feature-expand">&#9660;</span>
                </div>
                <div class="feature-description">
                    <p>${ability.description}</p>
                </div>
                ${!isUnlimited ? `
                <div class="feature-uses">
                    <span class="uses-label">Uses</span>
                    <div class="uses-tracker">
                        ${generateUsesTracker(ability.id, ability.maxUses, featureUses[ability.id] || 0)}
                    </div>
                    <span class="recharge-info">${ability.recharge}</span>
                </div>
                ` : ''}
                <div class="feature-actions">
                    <button class="action-btn use-ability"
                            onclick="useAbility('${ability.id}')"
                            ${usesRemaining <= 0 && !isUnlimited ? 'disabled' : ''}>
                        ${isUnlimited ? 'Use' : `Use (${usesRemaining}/${ability.maxUses})`}
                    </button>
                    ${!isUnlimited ? `
                    <button class="action-btn reset-uses" onclick="resetAbilityUses('${ability.id}')">
                        Reset
                    </button>
                    ` : ''}
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Generate uses tracker checkboxes
function generateUsesTracker(abilityId, maxUses, usedCount) {
    let html = '';
    const displayMax = Math.min(maxUses, 10); // Cap display at 10 for UI reasons

    for (let i = 0; i < displayMax; i++) {
        const isUsed = i < usedCount;
        html += `<button class="use-slot ${isUsed ? 'used' : ''}"
                         onclick="toggleUseSlot('${abilityId}', ${i})"
                         aria-label="${isUsed ? 'Used' : 'Available'}"></button>`;
    }

    if (maxUses > 10) {
        html += `<span class="recharge-info">(${usedCount}/${maxUses})</span>`;
    }

    return html;
}

// Toggle a use slot
function toggleUseSlot(abilityId, slotIndex) {
    const currentUsed = featureUses[abilityId] || 0;

    if (slotIndex < currentUsed) {
        // Clicking on a used slot - unuse it and all after
        featureUses[abilityId] = slotIndex;
    } else {
        // Clicking on an unused slot - use up to and including this slot
        featureUses[abilityId] = slotIndex + 1;
    }

    updateSidebarActiveAbilities();
}

// Use an ability
function useAbility(abilityId) {
    const abilities = getActiveAbilitiesData();
    const ability = abilities.find(a => a.id === abilityId);

    if (!ability) return;

    const currentUsed = featureUses[abilityId] || 0;

    if (ability.recharge !== 'Unlimited' && currentUsed >= ability.maxUses) {
        return; // No uses remaining
    }

    if (ability.recharge !== 'Unlimited') {
        featureUses[abilityId] = currentUsed + 1;
    }

    updateSidebarActiveAbilities();

    // Optional: Show a brief notification
    showAbilityNotification(ability.name, ability.icon);
}

// Reset ability uses
function resetAbilityUses(abilityId) {
    featureUses[abilityId] = 0;
    updateSidebarActiveAbilities();
}

// Get active abilities data (helper for useAbility)
function getActiveAbilitiesData() {
    const abilities = [];

    // This would be the same logic as in updateSidebarActiveAbilities
    // For brevity, we'll get max uses from the DOM or recalculate
    if (character.race === 'dragonborn') {
        abilities.push({ id: 'breath-weapon', maxUses: 1, recharge: 'Short Rest' });
    }
    if (character.race === 'halfOrc') {
        abilities.push({ id: 'relentless-endurance', maxUses: 1, recharge: 'Long Rest' });
    }
    if (character.class === 'barbarian') {
        const level = character.level || 1;
        let rageUses = 2;
        if (level >= 3) rageUses = 3;
        if (level >= 6) rageUses = 4;
        if (level >= 12) rageUses = 5;
        if (level >= 17) rageUses = 6;
        if (level >= 20) rageUses = 999;
        abilities.push({ id: 'rage', maxUses: rageUses, recharge: level >= 20 ? 'Unlimited' : 'Long Rest' });
    }
    // Add other abilities as needed...

    return abilities;
}

// Show ability notification
function showAbilityNotification(name, icon) {
    // Create a brief notification
    const notification = document.createElement('div');
    notification.className = 'ability-notification';
    notification.innerHTML = `<span>${icon}</span> ${name} used!`;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 12px 20px;
        background: linear-gradient(135deg, rgba(201, 162, 39, 0.95), rgba(240, 208, 80, 0.95));
        color: #1a1a2e;
        border-radius: 8px;
        font-weight: 600;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease, fadeOut 0.3s ease 1.5s forwards;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Update proficiencies section in sidebar
function updateSidebarProficiencies() {
    const skillsContainer = document.querySelector('#prof-skills .proficiency-value');
    const weaponsContainer = document.querySelector('#prof-weapons .proficiency-value');
    const armorContainer = document.querySelector('#prof-armor .proficiency-value');
    const toolsContainer = document.querySelector('#prof-tools .proficiency-value');
    const languagesContainer = document.querySelector('#prof-languages .proficiency-value');

    // Collect proficiencies
    const skills = [];
    const weapons = [];
    const armor = [];
    const tools = [];
    const languages = [];

    // Race proficiencies
    if (character.race) {
        const race = RACES[character.race];

        // Racial skill proficiencies
        if (race.skillProficiencies) {
            skills.push(...race.skillProficiencies);
        }

        // Racial weapon proficiencies
        if (race.weaponProficiencies) {
            weapons.push(...race.weaponProficiencies);
        }

        // Languages
        if (race.languages) {
            languages.push(...race.languages);
        }

        // Extra languages - show selected or prompt
        if (race.extraLanguages) {
            if (selectedRaceLanguages.length > 0) {
                languages.push(...selectedRaceLanguages);
            } else {
                languages.push(`+${race.extraLanguages} choice`);
            }
        }

        // Tool proficiency choices
        if (race.toolProficiencyChoices) {
            tools.push(`Choice: ${race.toolProficiencyChoices.join(' / ')}`);
        }

        // Subrace proficiencies
        if (character.subrace && race.subraces && race.subraces[character.subrace]) {
            const subrace = race.subraces[character.subrace];
            if (subrace.weaponProficiencies) {
                weapons.push(...subrace.weaponProficiencies);
            }
            if (subrace.armorProficiencies) {
                armor.push(...subrace.armorProficiencies);
            }
            if (subrace.toolProficiencies) {
                tools.push(...subrace.toolProficiencies);
            }
            if (subrace.extraLanguages) {
                // Subrace extra languages are included in race selection
                // Only show prompt if not already selected via race picker
            }
        }
    }

    // Class proficiencies
    if (character.class) {
        const cls = CLASSES[character.class];

        if (cls.armorProficiencies) {
            armor.push(...cls.armorProficiencies);
        }
        if (cls.weaponProficiencies) {
            weapons.push(...cls.weaponProficiencies);
        }
        if (cls.skillChoices) {
            const classSkills = character.proficiencies.skills.filter(s => cls.skillChoices.options.includes(s));
            if (classSkills.length > 0) {
                skills.push(...classSkills);
            } else {
                skills.push(`Choose ${cls.skillChoices.count} skills`);
            }
        }
    }

    // Background proficiencies
    if (character.background) {
        const bg = BACKGROUNDS[character.background];

        if (bg.skillProficiencies) {
            skills.push(...bg.skillProficiencies);
        }
        if (bg.toolProficiencies) {
            tools.push(...bg.toolProficiencies);
        }
        if (bg.languages) {
            if (selectedBackgroundLanguages.length > 0) {
                languages.push(...selectedBackgroundLanguages);
            } else {
                languages.push(`+${bg.languages} choice`);
            }
        }
    }

    // Remove duplicates
    const uniqueSkills = [...new Set(skills)];
    const uniqueWeapons = [...new Set(weapons)];
    const uniqueArmor = [...new Set(armor)];
    const uniqueTools = [...new Set(tools)];
    const uniqueLanguages = [...new Set(languages)];

    // Update DOM
    if (skillsContainer) {
        skillsContainer.innerHTML = uniqueSkills.length > 0 ?
            createProficiencyTags(uniqueSkills, 'skill') :
            '<span class="empty">-</span>';
    }
    if (weaponsContainer) {
        weaponsContainer.innerHTML = uniqueWeapons.length > 0 ?
            createProficiencyTags(uniqueWeapons, '') :
            '<span class="empty">-</span>';
    }
    if (armorContainer) {
        armorContainer.innerHTML = uniqueArmor.length > 0 ?
            createProficiencyTags(uniqueArmor, '') :
            '<span class="empty">-</span>';
    }
    if (toolsContainer) {
        toolsContainer.innerHTML = uniqueTools.length > 0 ?
            createProficiencyTags(uniqueTools, 'tool') :
            '<span class="empty">-</span>';
    }
    if (languagesContainer) {
        languagesContainer.innerHTML = uniqueLanguages.length > 0 ?
            createProficiencyTags(uniqueLanguages, 'language') :
            '<span class="empty">-</span>';
    }
}

// Create proficiency tags HTML
function createProficiencyTags(items, type) {
    return `<div class="proficiency-tags">${items.map(item =>
        `<span class="prof-tag ${type}">${item}</span>`
    ).join('')}</div>`;
}

// Update defenses section in sidebar
function updateSidebarDefenses() {
    const resistancesContainer = document.querySelector('#def-resistances .defense-value');
    const immunitiesContainer = document.querySelector('#def-immunities .defense-value');
    const advantagesContainer = document.querySelector('#def-advantages .defense-value');

    const resistances = [];
    const immunities = [];
    const advantages = [];

    // Race defenses
    if (character.race) {
        const race = RACES[character.race];

        if (race.resistances) {
            resistances.push(...race.resistances);
        }
        if (race.immunities) {
            immunities.push(...race.immunities);
        }
        if (race.savingThrowAdvantages) {
            advantages.push(...race.savingThrowAdvantages);
        }

        // Subrace defenses
        if (character.subrace && race.subraces && race.subraces[character.subrace]) {
            const subrace = race.subraces[character.subrace];
            if (subrace.resistances) {
                resistances.push(...subrace.resistances);
            }
            if (subrace.immunities) {
                immunities.push(...subrace.immunities);
            }
            if (subrace.savingThrowAdvantages) {
                advantages.push(...subrace.savingThrowAdvantages);
            }
        }

        // Dragonborn damage resistance based on ancestry
        if (character.race === 'dragonborn' && character.draconicAncestry) {
            const ancestryKey = character.draconicAncestry.toLowerCase();
            const ancestry = race.draconicAncestry ? race.draconicAncestry[ancestryKey] : null;
            if (ancestry && ancestry.resistance) {
                resistances.push(ancestry.resistance);
            }
        }
    }

    // Class defenses (Barbarian rage resistance, etc.)
    if (character.class === 'barbarian') {
        resistances.push('Bludgeoning (while raging)');
        resistances.push('Piercing (while raging)');
        resistances.push('Slashing (while raging)');
    }

    // Remove duplicates
    const uniqueResistances = [...new Set(resistances)];
    const uniqueImmunities = [...new Set(immunities)];
    const uniqueAdvantages = [...new Set(advantages)];

    // Update DOM
    if (resistancesContainer) {
        resistancesContainer.innerHTML = uniqueResistances.length > 0 ?
            createDefenseTags(uniqueResistances, 'resistance') :
            '<span class="empty">-</span>';
    }
    if (immunitiesContainer) {
        immunitiesContainer.innerHTML = uniqueImmunities.length > 0 ?
            createDefenseTags(uniqueImmunities, 'immunity') :
            '<span class="empty">-</span>';
    }
    if (advantagesContainer) {
        advantagesContainer.innerHTML = uniqueAdvantages.length > 0 ?
            createDefenseTags(uniqueAdvantages, 'advantage') :
            '<span class="empty">-</span>';
    }
}

// Create defense tags HTML
function createDefenseTags(items, type) {
    return `<div class="defense-tags">${items.map(item =>
        `<span class="defense-tag ${type}">${item}</span>`
    ).join('')}</div>`;
}

// Toggle feature expand/collapse
function toggleFeatureExpand(headerElement) {
    const featureItem = headerElement.closest('.feature-item');
    if (featureItem) {
        featureItem.classList.toggle('expanded');
    }
}

// Helper function to check if a trait is active (has uses or is usable)
function isActiveTrait(trait) {
    const activeKeywords = ['breath weapon', 'once per', 'uses per', 'can use', 'action to'];
    const nameLower = trait.name.toLowerCase();
    const descLower = trait.description.toLowerCase();

    return activeKeywords.some(keyword =>
        nameLower.includes(keyword) || descLower.includes(keyword)
    );
}

// Get icon for racial trait
function getTraitIcon(traitName) {
    const iconMap = {
        'darkvision': '&#128065;',
        'superior darkvision': '&#128065;',
        'dwarven resilience': '&#128170;',
        'dwarven combat training': '&#9876;',
        'tool proficiency': '&#128295;',
        'stonecunning': '&#128204;',
        'dwarven toughness': '&#10084;',
        'dwarven armor training': '&#128737;',
        'keen senses': '&#128066;',
        'fey ancestry': '&#10024;',
        'trance': '&#128164;',
        'elf weapon training': '&#127993;',
        'cantrip': '&#10024;',
        'extra language': '&#128172;',
        'fleet of foot': '&#128099;',
        'mask of the wild': '&#127795;',
        'drow magic': '&#10024;',
        'drow weapon training': '&#128481;',
        'sunlight sensitivity': '&#9728;',
        'lucky': '&#127808;',
        'brave': '&#129409;',
        'halfling nimbleness': '&#128099;',
        'naturally stealthy': '&#128065;',
        'stout resilience': '&#128170;',
        'draconic ancestry': '&#128009;',
        'breath weapon': '&#128293;',
        'damage resistance': '&#128737;',
        'gnome cunning': '&#129504;',
        'natural illusionist': '&#10024;',
        'speak with small beasts': '&#128054;',
        'artificer\'s lore': '&#128214;',
        'tinker': '&#128295;',
        'skill versatility': '&#10024;',
        'menacing': '&#128544;',
        'relentless endurance': '&#128170;',
        'savage attacks': '&#9876;',
        'hellish resistance': '&#128293;',
        'infernal legacy': '&#128520;'
    };

    const nameLower = traitName.toLowerCase();
    return iconMap[nameLower] || '&#10038;';
}

// Get icon for class feature
function getClassFeatureIcon(featureName) {
    const iconMap = {
        'rage': '&#128544;',
        'unarmored defense': '&#128737;',
        'reckless attack': '&#9876;',
        'danger sense': '&#128680;',
        'extra attack': '&#9876;',
        'fast movement': '&#128099;',
        'feral instinct': '&#128058;',
        'brutal critical': '&#128165;',
        'relentless rage': '&#128170;',
        'persistent rage': '&#128293;',
        'indomitable might': '&#128170;',
        'primal champion': '&#129409;',
        'bardic inspiration': '&#127926;',
        'jack of all trades': '&#10024;',
        'song of rest': '&#127925;',
        'expertise': '&#128218;',
        'font of inspiration': '&#127926;',
        'countercharm': '&#127925;',
        'magical secrets': '&#10024;',
        'superior inspiration': '&#127926;',
        'spellcasting': '&#10024;',
        'divine domain': '&#9764;',
        'channel divinity': '&#9764;',
        'destroy undead': '&#128128;',
        'divine intervention': '&#128591;',
        'druidic': '&#127795;',
        'wild shape': '&#128058;',
        'wild shape improvement': '&#128058;',
        'timeless body': '&#128337;',
        'beast spells': '&#128058;',
        'archdruid': '&#127795;',
        'fighting style': '&#9876;',
        'second wind': '&#128154;',
        'action surge': '&#9889;',
        'martial archetype': '&#9876;',
        'indomitable': '&#128170;',
        'unarmored movement': '&#128099;',
        'ki': '&#9775;',
        'deflect missiles': '&#127993;',
        'slow fall': '&#128099;',
        'stunning strike': '&#128165;',
        'ki-empowered strikes': '&#10038;',
        'evasion': '&#128099;',
        'stillness of mind': '&#128591;',
        'purity of body': '&#10084;',
        'tongue of the sun and moon': '&#128172;',
        'diamond soul': '&#128142;',
        'empty body': '&#128112;',
        'perfect self': '&#10024;',
        'divine sense': '&#128302;',
        'lay on hands': '&#10084;',
        'divine smite': '&#9876;',
        'divine health': '&#10084;',
        'sacred oath': '&#9764;',
        'aura of protection': '&#128737;',
        'aura of courage': '&#129409;',
        'improved divine smite': '&#9876;',
        'cleansing touch': '&#10084;',
        'favored enemy': '&#128065;',
        'natural explorer': '&#127795;',
        'primeval awareness': '&#128065;',
        'ranger archetype': '&#127993;',
        'land\'s stride': '&#128099;',
        'hide in plain sight': '&#128065;',
        'vanish': '&#128065;',
        'feral senses': '&#128066;',
        'foe slayer': '&#9876;',
        'sneak attack': '&#128481;',
        'thieves\' cant': '&#128172;',
        'cunning action': '&#128099;',
        'roguish archetype': '&#128481;',
        'uncanny dodge': '&#128099;',
        'reliable talent': '&#10024;',
        'blindsense': '&#128065;',
        'slippery mind': '&#129504;',
        'elusive': '&#128099;',
        'stroke of luck': '&#127808;',
        'sorcerous origin': '&#10024;',
        'font of magic': '&#10024;',
        'metamagic': '&#10024;',
        'sorcerous restoration': '&#10024;',
        'otherworldly patron': '&#128156;',
        'pact magic': '&#128156;',
        'eldritch invocations': '&#10024;',
        'pact boon': '&#128156;',
        'mystic arcanum': '&#10024;',
        'eldritch master': '&#10024;',
        'arcane recovery': '&#10024;',
        'arcane tradition': '&#10024;',
        'spell mastery': '&#10024;',
        'signature spells': '&#10024;'
    };

    const nameLower = featureName.toLowerCase();

    // Check for exact matches first
    if (iconMap[nameLower]) {
        return iconMap[nameLower];
    }

    // Check for partial matches
    for (const [key, icon] of Object.entries(iconMap)) {
        if (nameLower.includes(key)) {
            return icon;
        }
    }

    return '&#10038;'; // Default star icon
}

// Update all sidebar sections
function updateAllSidebarSections() {
    updateSidebarRacialTraits();
    updateSidebarClassFeatures();
    updateSidebarActiveAbilities();
    updateSidebarProficiencies();
    updateSidebarDefenses();
}

// Add CSS animation for notification
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
@keyframes slideIn {
    from {
        transform: translateX(100px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
`;
document.head.appendChild(notificationStyles);

// Initialize sidebar interactions when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initSidebarInteractions();
});
