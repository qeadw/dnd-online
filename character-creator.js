// D&D 5e Character Creator
// Main JavaScript Logic

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
        card.innerHTML = `
            <h4>${race.name}</h4>
            <p>${getAbilityBonusText(race.abilityScoreIncrease)}</p>
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
    document.querySelector(`#race-grid [data-race="${raceKey}"]`).classList.add('selected');

    const race = RACES[raceKey];
    character.race = raceKey;
    character.subrace = null;
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

        race.draconicAncestry.forEach(ancestry => {
            select.innerHTML += `<option value="${ancestry.dragon}">${ancestry.dragon} - ${ancestry.damageType}</option>`;
        });

        select.addEventListener('change', (e) => {
            character.draconicAncestry = e.target.value;
            const ancestry = race.draconicAncestry.find(a => a.dragon === e.target.value);
            if (ancestry) {
                document.getElementById('ancestry-details').innerHTML = `
                    <strong>Damage Type:</strong> ${ancestry.damageType}<br>
                    <strong>Breath Weapon:</strong> ${ancestry.breathWeapon}
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
    document.querySelector(`[data-subrace="${subraceKey}"]`).classList.add('selected');

    character.subrace = subraceKey;
    updateRacialBonuses();
    updateSummary();
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
        card.innerHTML = `
            <h4>${cls.name}</h4>
            <p>d${cls.hitDie} HD</p>
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
    document.querySelector(`#class-grid [data-class="${classKey}"]`).classList.add('selected');

    const cls = CLASSES[classKey];
    character.class = classKey;
    character.subclass = null;

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

    // Skills
    if (cls.skillChoices) {
        infoContainer.innerHTML += `
            <div class="trait-item">
                <h5>Skills</h5>
                <p>Choose ${cls.skillChoices.count} from: ${cls.skillChoices.options.join(', ')}</p>
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

    // Subclass selection
    const subclassContainer = document.getElementById('subclass-selection');
    const subclassOptions = document.getElementById('subclass-options');

    if (cls.subclasses) {
        subclassContainer.style.display = 'block';
        subclassOptions.innerHTML = '';

        Object.entries(cls.subclasses).forEach(([key, subclass]) => {
            const option = document.createElement('div');
            option.className = 'subclass-option';
            option.dataset.subclass = key;
            option.innerHTML = `
                <strong>${subclass.name}</strong>
                <p>${subclass.description}</p>
            `;
            option.addEventListener('click', () => selectSubclass(key));
            subclassOptions.appendChild(option);
        });
    } else {
        subclassContainer.style.display = 'none';
    }

    updateSummary();
}

function selectSubclass(subclassKey) {
    document.querySelectorAll('.subclass-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    document.querySelector(`[data-subclass="${subclassKey}"]`).classList.add('selected');

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

    // Reset
    pointBuyInfo.style.display = 'none';
    arrayPool.style.display = 'none';
    rollBtn.style.display = 'none';

    inputs.forEach(input => {
        input.readOnly = true;
    });

    switch (abilityMethod) {
        case 'standard':
            arrayPool.style.display = 'block';
            initStandardArray();
            break;
        case 'pointbuy':
            pointBuyInfo.style.display = 'block';
            initPointBuy();
            break;
        case 'roll':
            rollBtn.style.display = 'block';
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

        document.getElementById(`total-${ability}`).textContent = total;
        document.getElementById(`mod-${ability}`).textContent = modifier >= 0 ? `+${modifier}` : modifier;
    });

    updateSummary();
}

// ==================== BACKGROUND SELECTION ====================

function initBackgroundSelection() {
    const grid = document.getElementById('background-grid');
    grid.innerHTML = '';

    Object.entries(BACKGROUNDS).forEach(([key, bg]) => {
        const card = document.createElement('div');
        card.className = 'selection-card';
        card.dataset.background = key;
        card.innerHTML = `
            <h4>${bg.name}</h4>
            <p>${bg.skillProficiencies.join(', ')}</p>
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
    document.querySelector(`#background-grid [data-background="${bgKey}"]`).classList.add('selected');

    const bg = BACKGROUNDS[bgKey];
    character.background = bgKey;

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
        `;
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

function nextStep() {
    if (!validateStep(currentStep)) return;

    if (currentStep < totalSteps) {
        document.getElementById(`step-${currentStep}`).style.display = 'none';
        currentStep++;
        document.getElementById(`step-${currentStep}`).style.display = 'block';
        updateProgressBar();
        updateNavButtons();

        if (currentStep === 7) {
            generateCharacterPreview();
        }

        // Check for variant human feat
        if (currentStep === 5) {
            const featSection = document.getElementById('variant-human-feat');
            if (character.race === 'human' && RACES.human.variant) {
                featSection.style.display = 'block';
            } else {
                featSection.style.display = 'none';
            }
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
            if (RACES[character.race].subraces && !character.subrace) {
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

// ==================== SUMMARY ====================

function updateSummary() {
    // Name
    document.getElementById('sum-name').textContent = character.name || '-';

    // Race
    let raceText = '-';
    if (character.race) {
        raceText = RACES[character.race].name;
        if (character.subrace && RACES[character.race].subraces) {
            raceText = RACES[character.race].subraces[character.subrace].name;
        }
    }
    document.getElementById('sum-race').textContent = raceText;

    // Class
    let classText = '-';
    if (character.class) {
        classText = CLASSES[character.class].name;
        if (character.subclass && CLASSES[character.class].subclasses) {
            classText += ` (${CLASSES[character.class].subclasses[character.subclass].name})`;
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
        speed = RACES[character.race].speed;
        if (character.subrace && RACES[character.race].subraces &&
            RACES[character.race].subraces[character.subrace].speedBonus) {
            speed += RACES[character.race].subraces[character.subrace].speedBonus;
        }
    }
    document.getElementById('sum-speed').textContent = speed;
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
            character.level = parseInt(e.target.value) || 1;
            updateSummary();
        });
    }
});

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

    const hp = cls ? cls.hitDie + abilities.con.mod : 0;
    const ac = 10 + abilities.dex.mod;
    const speed = race ? race.speed : 30;

    preview.innerHTML = `
        <div class="preview-header">
            <div>
                <h2 class="preview-name">${character.name || 'Unnamed Character'}</h2>
                <p class="preview-subtitle">${raceDisplay} ${classDisplay} ${character.level}</p>
            </div>
            <div>
                <p><strong>Background:</strong> ${bg ? bg.name : 'Unknown'}</p>
                <p><strong>Alignment:</strong> ${formatAlignment(character.alignment)}</p>
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
                <div class="value">+2</div>
            </div>
        </div>

        <div class="preview-section">
            <h4>Racial Traits</h4>
            ${race && race.traits ? race.traits.map(t => `<p><strong>${t.name}:</strong> ${t.description}</p>`).join('') : '<p>None</p>'}
        </div>

        <div class="preview-section">
            <h4>Class Features (Level 1)</h4>
            ${cls && cls.features && cls.features[1] ? cls.features[1].map(f => `<p><strong>${f.name}:</strong> ${f.description}</p>`).join('') : '<p>None</p>'}
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
        alignment: document.getElementById('char-alignment').value,
        level: parseInt(document.getElementById('char-level').value) || 1,
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
    const savedCharacters = JSON.parse(localStorage.getItem('dndCharacters') || '[]');

    // Add new character
    savedCharacters.push(charData);

    // Save to localStorage
    localStorage.setItem('dndCharacters', JSON.stringify(savedCharacters));

    alert('Character saved successfully!');
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
