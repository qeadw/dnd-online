// Dice Rolling
let rollHistory = [];
let customMacros = [];
let secretRollMode = false; // DM secret roll toggle

// Multiplayer broadcast helper — sends dice roll data if a session is active
function broadcastDiceRoll(notation, result, rolls, modifier, description) {
    if (window.Multiplayer && window.Multiplayer.getSessionCode()) {
        const isSecret = secretRollMode && window.Multiplayer.isDM();
        window.Multiplayer.broadcast('dice-roll', {
            notation: notation,
            result: result,
            rolls: rolls,
            modifier: modifier,
            description: description,
            secret: isSecret
        });
    }
}

// Toggle secret roll mode (DM only)
function toggleSecretRoll() {
    secretRollMode = !secretRollMode;
    const btn = document.getElementById('secretRollToggle');
    if (btn) {
        btn.classList.toggle('active', secretRollMode);
        btn.textContent = secretRollMode ? 'Secret Roll: ON' : 'Secret Roll: OFF';
    }
}

// Roll a single die with animation
function rollDice(sides) {
    animateDiceRoll(sides, () => {
        const result = Math.floor(Math.random() * sides) + 1;
        const isCritical = sides === 20 && result === 20;
        const isFumble = sides === 20 && result === 1;

        displayResult(result, `1d${sides}`, [result], 0, { isCritical, isFumble });
        addToHistory(`d${sides}: ${result}`, { isCritical, isFumble });
        broadcastDiceRoll(`1d${sides}`, result, [result], 0, `d${sides}`);
    });
}

// Custom roll with multiple dice and modifier
function customRoll() {
    const numDice = parseInt(document.getElementById('numDice').value) || 1;
    const diceType = parseInt(document.getElementById('diceType').value) || 20;
    const modifier = parseInt(document.getElementById('modifier').value) || 0;

    animateDiceRoll(diceType, () => {
        const rolls = [];
        let total = 0;

        for (let i = 0; i < numDice; i++) {
            const roll = Math.floor(Math.random() * diceType) + 1;
            rolls.push(roll);
            total += roll;
        }

        total += modifier;

        // Check for critical/fumble on single d20 rolls
        const isCritical = numDice === 1 && diceType === 20 && rolls[0] === 20;
        const isFumble = numDice === 1 && diceType === 20 && rolls[0] === 1;

        const notation = `${numDice}d${diceType}${modifier !== 0 ? (modifier >= 0 ? '+' : '') + modifier : ''}`;
        displayResult(total, notation, rolls, modifier, { isCritical, isFumble });
        addToHistory(`${notation}: ${total} (${rolls.join(', ')})`, { isCritical, isFumble });
        broadcastDiceRoll(notation, total, rolls, modifier, 'Custom Roll');
    });
}

// Roll with Advantage (2d20, take highest)
function rollWithAdvantage() {
    const modifier = parseInt(document.getElementById('d20Modifier')?.value) || 0;

    animateDiceRoll(20, () => {
        const roll1 = Math.floor(Math.random() * 20) + 1;
        const roll2 = Math.floor(Math.random() * 20) + 1;
        const chosen = Math.max(roll1, roll2);
        const total = chosen + modifier;

        const isCritical = chosen === 20;
        const isFumble = chosen === 1;

        displayAdvantageResult(roll1, roll2, chosen, total, modifier, 'advantage', { isCritical, isFumble });
        addToHistory(`Advantage: ${total} [${roll1}, ${roll2}] -> ${chosen}${modifier !== 0 ? (modifier >= 0 ? '+' : '') + modifier : ''}`, { isCritical, isFumble });
        broadcastDiceRoll('2d20 (Advantage)', total, [roll1, roll2], modifier, 'Advantage Roll');
    });
}

// Roll with Disadvantage (2d20, take lowest)
function rollWithDisadvantage() {
    const modifier = parseInt(document.getElementById('d20Modifier')?.value) || 0;

    animateDiceRoll(20, () => {
        const roll1 = Math.floor(Math.random() * 20) + 1;
        const roll2 = Math.floor(Math.random() * 20) + 1;
        const chosen = Math.min(roll1, roll2);
        const total = chosen + modifier;

        const isCritical = chosen === 20;
        const isFumble = chosen === 1;

        displayAdvantageResult(roll1, roll2, chosen, total, modifier, 'disadvantage', { isCritical, isFumble });
        addToHistory(`Disadvantage: ${total} [${roll1}, ${roll2}] -> ${chosen}${modifier !== 0 ? (modifier >= 0 ? '+' : '') + modifier : ''}`, { isCritical, isFumble });
        broadcastDiceRoll('2d20 (Disadvantage)', total, [roll1, roll2], modifier, 'Disadvantage Roll');
    });
}

// Dice Expression Parser (e.g., "2d6+3+1d4")
function parseDiceExpression() {
    const expression = document.getElementById('diceExpression').value.trim().toLowerCase();

    if (!expression) {
        alert('Please enter a dice expression (e.g., 2d6+3+1d4)');
        return;
    }

    try {
        const result = evaluateDiceExpression(expression);
        animateDiceRoll(20, () => {
            displayResult(result.total, expression, result.allRolls, result.staticModifier, result.flags);
            addToHistory(`${expression}: ${result.total} (${result.breakdown})`, result.flags);
            broadcastDiceRoll(expression, result.total, result.allRolls, result.staticModifier, 'Dice Expression');
        });
    } catch (e) {
        alert('Invalid dice expression. Use format like: 2d6+3+1d4-2');
    }
}

// Evaluate a dice expression
function evaluateDiceExpression(expression) {
    // Normalize expression: handle spaces and ensure we have signs
    let expr = expression.replace(/\s+/g, '').replace(/-/g, '+-');
    if (expr.startsWith('+')) expr = expr.substring(1);

    const parts = expr.split('+').filter(p => p !== '');
    let total = 0;
    let allRolls = [];
    let breakdown = [];
    let staticModifier = 0;
    let hasD20 = false;
    let d20Rolls = [];

    for (const part of parts) {
        if (part.includes('d')) {
            // It's a dice roll (e.g., "2d6" or "-1d4")
            let negative = part.startsWith('-');
            let cleanPart = negative ? part.substring(1) : part;
            const [numStr, sidesStr] = cleanPart.split('d');
            const num = parseInt(numStr) || 1;
            const sides = parseInt(sidesStr);

            if (isNaN(sides) || sides < 1) throw new Error('Invalid dice');

            const rolls = [];
            for (let i = 0; i < num; i++) {
                const roll = Math.floor(Math.random() * sides) + 1;
                rolls.push(roll);
                total += negative ? -roll : roll;
            }

            allRolls.push(...rolls);
            breakdown.push(`${negative ? '-' : ''}[${rolls.join(',')}]`);

            // Track d20 rolls for critical detection
            if (sides === 20 && num === 1) {
                hasD20 = true;
                d20Rolls.push(rolls[0]);
            }
        } else {
            // It's a static modifier
            const mod = parseInt(part);
            if (!isNaN(mod)) {
                total += mod;
                staticModifier += mod;
                breakdown.push(mod >= 0 ? `+${mod}` : `${mod}`);
            }
        }
    }

    // Check for critical/fumble on d20 rolls
    const isCritical = hasD20 && d20Rolls.some(r => r === 20);
    const isFumble = hasD20 && d20Rolls.some(r => r === 1);

    return {
        total,
        allRolls,
        breakdown: breakdown.join(' '),
        staticModifier,
        flags: { isCritical, isFumble }
    };
}

// Roll Macros
function rollMacro(type) {
    const modifier = parseInt(document.getElementById('d20Modifier').value) || 0;
    const labels = {
        'attack': 'Attack Roll',
        'ability': 'Ability Check',
        'save': 'Saving Throw'
    };

    animateDiceRoll(20, () => {
        const roll = Math.floor(Math.random() * 20) + 1;
        const total = roll + modifier;
        const isCritical = roll === 20;
        const isFumble = roll === 1;

        displayResult(total, `${labels[type]} (1d20${modifier >= 0 ? '+' : ''}${modifier})`, [roll], modifier, { isCritical, isFumble, rollType: type });
        addToHistory(`${labels[type]}: ${total} (${roll}${modifier !== 0 ? (modifier >= 0 ? '+' : '') + modifier : ''})`, { isCritical, isFumble });
        broadcastDiceRoll(`1d20${modifier >= 0 ? '+' : ''}${modifier}`, total, [roll], modifier, labels[type]);
    });
}

// Roll Damage
function rollDamage(numDice, sides) {
    const modifier = parseInt(document.getElementById('damageModifier').value) || 0;

    animateDiceRoll(sides, () => {
        const rolls = [];
        let total = 0;

        for (let i = 0; i < numDice; i++) {
            const roll = Math.floor(Math.random() * sides) + 1;
            rolls.push(roll);
            total += roll;
        }

        total += modifier;

        const notation = `${numDice}d${sides} Damage`;
        displayResult(total, notation, rolls, modifier, { isDamage: true });
        addToHistory(`Damage ${numDice}d${sides}${modifier !== 0 ? (modifier >= 0 ? '+' : '') + modifier : ''}: ${total} (${rolls.join(', ')})`, { isDamage: true });
        broadcastDiceRoll(`${numDice}d${sides}`, total, rolls, modifier, 'Damage Roll');
    });
}

// Custom Macros
function saveCustomMacro() {
    const name = document.getElementById('macroName').value.trim();
    const expression = document.getElementById('macroExpression').value.trim();

    if (!name || !expression) {
        alert('Please enter both a name and an expression');
        return;
    }

    // Validate expression
    try {
        evaluateDiceExpression(expression);
    } catch (e) {
        alert('Invalid dice expression');
        return;
    }

    customMacros.push({ name, expression, id: Date.now() });
    renderCustomMacros();

    document.getElementById('macroName').value = '';
    document.getElementById('macroExpression').value = '';

    saveData();
}

function rollCustomMacro(id) {
    const macro = customMacros.find(m => m.id === id);
    if (!macro) return;

    try {
        const result = evaluateDiceExpression(macro.expression);
        animateDiceRoll(20, () => {
            displayResult(result.total, `${macro.name} (${macro.expression})`, result.allRolls, result.staticModifier, result.flags);
            addToHistory(`${macro.name}: ${result.total} (${result.breakdown})`, result.flags);
            broadcastDiceRoll(macro.expression, result.total, result.allRolls, result.staticModifier, macro.name);
        });
    } catch (e) {
        alert('Error executing macro');
    }
}

function deleteCustomMacro(id) {
    customMacros = customMacros.filter(m => m.id !== id);
    renderCustomMacros();
    saveData();
}

function renderCustomMacros() {
    const container = document.getElementById('customMacrosList');
    if (!container) return;

    container.innerHTML = customMacros.map(macro => `
        <div class="custom-macro-item">
            <button onclick="rollCustomMacro(${macro.id})" class="macro-btn custom">${macro.name}</button>
            <span class="macro-expr">${macro.expression}</span>
            <button onclick="deleteCustomMacro(${macro.id})" class="delete-macro-btn">X</button>
        </div>
    `).join('');
}

// Dice Animation
function animateDiceRoll(sides, callback) {
    const container = document.getElementById('diceAnimationContainer');
    const rollingDice = document.getElementById('rollingDice');

    if (!container || !rollingDice) {
        callback();
        return;
    }

    container.classList.add('active');
    rollingDice.classList.add('rolling');

    // Show random numbers during animation
    let animationCount = 0;
    const animationInterval = setInterval(() => {
        rollingDice.textContent = Math.floor(Math.random() * sides) + 1;
        animationCount++;

        if (animationCount >= 10) {
            clearInterval(animationInterval);
            rollingDice.classList.remove('rolling');
            container.classList.remove('active');
            callback();
        }
    }, 50);
}

// Display result for advantage/disadvantage rolls
function displayAdvantageResult(roll1, roll2, chosen, total, modifier, type, flags = {}) {
    const resultDiv = document.getElementById('rollResult');
    const isAdvantage = type === 'advantage';

    let criticalHtml = '';
    if (flags.isCritical) {
        criticalHtml = '<div class="critical-hit">CRITICAL!</div>';
    } else if (flags.isFumble) {
        criticalHtml = '<div class="fumble">FUMBLE!</div>';
    }

    const roll1Class = roll1 === chosen ? 'chosen-roll' : 'discarded-roll';
    const roll2Class = roll2 === chosen ? 'chosen-roll' : 'discarded-roll';

    let modifierText = '';
    if (modifier !== 0) {
        modifierText = ` ${modifier >= 0 ? '+' : ''}${modifier}`;
    }

    resultDiv.innerHTML = `
        ${criticalHtml}
        <div class="big-number ${flags.isCritical ? 'critical' : ''} ${flags.isFumble ? 'fumble-num' : ''}">${total}</div>
        <div class="roll-details">
            ${isAdvantage ? 'Advantage' : 'Disadvantage'}:
            <span class="${roll1Class}">${roll1}</span> |
            <span class="${roll2Class}">${roll2}</span>
            ${modifierText ? `<span class="modifier-display">${modifierText}</span>` : ''}
        </div>
        <div class="chosen-info">Using: ${chosen}${modifierText}</div>
    `;

    // Add animation
    resultDiv.classList.add('roll-animate');
    setTimeout(() => resultDiv.classList.remove('roll-animate'), 300);
}

// Display result with critical hit/fumble detection
function displayResult(total, notation, rolls, modifier = 0, flags = {}) {
    const resultDiv = document.getElementById('rollResult');
    let modifierText = '';
    if (modifier !== 0) {
        modifierText = ` ${modifier >= 0 ? '+' : ''}${modifier}`;
    }

    let criticalHtml = '';
    if (flags.isCritical) {
        criticalHtml = '<div class="critical-hit">CRITICAL!</div>';
    } else if (flags.isFumble) {
        criticalHtml = '<div class="fumble">FUMBLE!</div>';
    }

    let extraClass = '';
    if (flags.isCritical) extraClass = 'critical';
    if (flags.isFumble) extraClass = 'fumble-num';
    if (flags.isDamage) extraClass = 'damage';

    resultDiv.innerHTML = `
        ${criticalHtml}
        <div class="big-number ${extraClass}">${total}</div>
        <div class="roll-details">${notation} = [${rolls.join(', ')}]${modifierText}</div>
    `;

    // Add animation
    resultDiv.classList.add('roll-animate');
    setTimeout(() => resultDiv.classList.remove('roll-animate'), 300);
}

// Get formatted timestamp
function getTimestamp() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

// Add to history with timestamp
function addToHistory(text, flags = {}) {
    const timestamp = getTimestamp();
    let flagClass = '';
    if (flags.isCritical) flagClass = 'history-critical';
    if (flags.isFumble) flagClass = 'history-fumble';
    if (flags.isDamage) flagClass = 'history-damage';

    rollHistory.unshift({ text, timestamp, flagClass });
    if (rollHistory.length > 50) rollHistory.pop();

    renderRollHistory();
}

function renderRollHistory() {
    const historyDiv = document.getElementById('rollHistory');
    historyDiv.innerHTML = rollHistory.map(r => `
        <p class="${r.flagClass || ''}">
            <span class="history-time">${r.timestamp}</span>
            <span class="history-text">${r.text}</span>
        </p>
    `).join('');
}

function clearRollHistory() {
    rollHistory = [];
    renderRollHistory();
    saveData();
}

// Initiative Tracker
let initiative = [];
let currentTurn = 0;
let roundNumber = 1;

// Broadcast the full initiative state (DM only)
function broadcastInitiativeState() {
    if (window.Multiplayer && window.Multiplayer.getSessionCode() && window.Multiplayer.isDM()) {
        window.Multiplayer.broadcast('initiative-update', {
            initiative: initiative,
            currentTurn: currentTurn,
            roundNumber: roundNumber
        });
    }
}

function addToInitiative() {
    const name = document.getElementById('charName').value.trim();
    const init = parseInt(document.getElementById('charInit').value);

    if (!name || isNaN(init)) {
        alert('Please enter both name and initiative!');
        return;
    }

    initiative.push({ name, init, id: Date.now() });
    initiative.sort((a, b) => b.init - a.init);
    currentTurn = 0;
    renderInitiative();
    broadcastInitiativeState();

    document.getElementById('charName').value = '';
    document.getElementById('charInit').value = '';
}

function removeFromInitiative(id) {
    // Players can only remove if not in a multiplayer session, or if DM
    if (window.Multiplayer && window.Multiplayer.getSessionCode() && !window.Multiplayer.isDM()) {
        return; // players cannot remove entries
    }
    initiative = initiative.filter(c => c.id !== id);
    if (currentTurn >= initiative.length) currentTurn = 0;
    renderInitiative();
    broadcastInitiativeState();
}

function renderInitiative() {
    const list = document.getElementById('initiativeList');
    const isMultiplayerPlayer = window.Multiplayer && window.Multiplayer.getSessionCode() && !window.Multiplayer.isDM();

    list.innerHTML = initiative.map((char, index) => `
        <li class="${index === currentTurn ? 'active' : ''}">
            <span><strong>${char.init}</strong> - ${char.name}</span>
            ${isMultiplayerPlayer ? '' : `<button onclick="removeFromInitiative(${char.id})">X</button>`}
        </li>
    `).join('');

    // Hide DM-only initiative buttons for players in multiplayer
    const nextTurnBtn = document.getElementById('nextTurnBtn');
    const clearInitBtn = document.getElementById('clearInitBtn');
    if (nextTurnBtn) nextTurnBtn.style.display = isMultiplayerPlayer ? 'none' : '';
    if (clearInitBtn) clearInitBtn.style.display = isMultiplayerPlayer ? 'none' : '';
}

function clearInitiative() {
    if (window.Multiplayer && window.Multiplayer.getSessionCode() && !window.Multiplayer.isDM()) {
        return; // players cannot clear
    }
    initiative = [];
    currentTurn = 0;
    roundNumber = 1;
    renderInitiative();
    broadcastInitiativeState();
}

function nextTurn() {
    if (initiative.length === 0) return;
    if (window.Multiplayer && window.Multiplayer.getSessionCode() && !window.Multiplayer.isDM()) {
        return; // players cannot advance turn
    }
    currentTurn = (currentTurn + 1) % initiative.length;
    if (currentTurn === 0) roundNumber++;
    renderInitiative();
    broadcastInitiativeState();
}

// Character Stats
const stats = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

stats.forEach(stat => {
    const input = document.getElementById(stat);
    if (input) {
        input.addEventListener('input', () => updateModifier(stat));
    }
});

function updateModifier(stat) {
    const input = document.getElementById(stat);
    if (!input) return;

    const value = parseInt(input.value) || 10;
    const modifier = Math.floor((value - 10) / 2);
    const modSpan = document.getElementById(stat + 'Mod');
    if (modSpan) {
        modSpan.textContent = modifier >= 0 ? `+${modifier}` : modifier;
    }
}

// Initialize all modifiers
stats.forEach(stat => updateModifier(stat));

// Save data to localStorage
function saveData() {
    const data = {
        stats: {},
        hp: {
            current: document.getElementById('currentHp')?.value,
            max: document.getElementById('maxHp')?.value
        },
        notes: document.getElementById('sessionNotes')?.value,
        initiative: initiative,
        rollHistory: rollHistory,
        customMacros: customMacros
    };

    stats.forEach(stat => {
        const input = document.getElementById(stat);
        if (input) {
            data.stats[stat] = input.value;
        }
    });

    localStorage.setItem('dndOnlineData', JSON.stringify(data));
}

function loadData() {
    const saved = localStorage.getItem('dndOnlineData');
    if (!saved) return;

    const data = JSON.parse(saved);

    if (data.stats) {
        stats.forEach(stat => {
            if (data.stats[stat]) {
                const input = document.getElementById(stat);
                if (input) {
                    input.value = data.stats[stat];
                    updateModifier(stat);
                }
            }
        });
    }

    if (data.hp) {
        const currentHp = document.getElementById('currentHp');
        const maxHp = document.getElementById('maxHp');
        if (currentHp) currentHp.value = data.hp.current || 10;
        if (maxHp) maxHp.value = data.hp.max || 10;
    }

    if (data.notes) {
        const notes = document.getElementById('sessionNotes');
        if (notes) notes.value = data.notes;
    }

    if (data.initiative) {
        initiative = data.initiative;
        renderInitiative();
    }

    if (data.rollHistory) {
        rollHistory = data.rollHistory;
        renderRollHistory();
    }

    if (data.customMacros) {
        customMacros = data.customMacros;
        renderCustomMacros();
    }
}

// Auto-save every 5 seconds
setInterval(saveData, 5000);

// Load data on page load
window.addEventListener('load', loadData);

// Save before closing
window.addEventListener('beforeunload', saveData);

// Allow Enter key to roll dice expression
document.addEventListener('DOMContentLoaded', () => {
    const diceExprInput = document.getElementById('diceExpression');
    if (diceExprInput) {
        diceExprInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                parseDiceExpression();
            }
        });
    }

    // Initialize Conditions Reference
    initConditionsReference();
});

// Conditions Reference
function initConditionsReference() {
    const conditionsList = document.getElementById('conditionsList');
    if (!conditionsList || typeof CONDITIONS === 'undefined') return;

    // Sort conditions alphabetically
    const sortedConditions = Object.keys(CONDITIONS).sort();

    conditionsList.innerHTML = sortedConditions.map(conditionKey => {
        const condition = CONDITIONS[conditionKey];
        return createConditionItem(conditionKey, condition);
    }).join('');

    // Add click listeners for expanding/collapsing
    conditionsList.querySelectorAll('.condition-header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.closest('.condition-item');
            item.classList.toggle('expanded');
        });
    });
}

function createConditionItem(conditionKey, condition) {
    const effectsList = condition.effects.map(effect => {
        // Special handling for exhaustion levels
        if (conditionKey === 'exhaustion' && effect.startsWith('Level')) {
            const levelMatch = effect.match(/Level (\d)/);
            const levelNum = levelMatch ? levelMatch[1] : '';
            const levelClass = levelNum === '6' ? 'exhaustion-level exhaustion-level-6' : 'exhaustion-level';
            const effectText = effect.replace(/Level \d: /, '');
            return `<li><span class="${levelClass}">Level ${levelNum}</span>${effectText}</li>`;
        }
        return `<li>${effect}</li>`;
    }).join('');

    const additionalInfo = condition.additionalInfo
        ? `<div class="condition-additional"><strong>Note:</strong> ${condition.additionalInfo}</div>`
        : '';

    return `
        <div class="condition-item" data-condition="${conditionKey}">
            <div class="condition-header">
                <span class="condition-name">${condition.name}</span>
                <span class="condition-toggle">▼</span>
            </div>
            <div class="condition-content">
                <p class="condition-description">${condition.description}</p>
                <ul class="condition-effects">
                    ${effectsList}
                </ul>
                ${additionalInfo}
            </div>
        </div>
    `;
}

// Toggle a specific condition
function toggleCondition(conditionKey) {
    const item = document.querySelector(`.condition-item[data-condition="${conditionKey}"]`);
    if (item) {
        item.classList.toggle('expanded');
    }
}

// Expand all conditions
function expandAllConditions() {
    document.querySelectorAll('.condition-item').forEach(item => {
        item.classList.add('expanded');
    });
}

// Collapse all conditions
function collapseAllConditions() {
    document.querySelectorAll('.condition-item').forEach(item => {
        item.classList.remove('expanded');
    });
}

// =============================================
// Multiplayer Integration
// =============================================

// Listen for remote dice rolls and initiative updates
function initMultiplayerListeners() {
    if (!window.Multiplayer) return;

    // Receive remote dice rolls
    window.Multiplayer.on('dice-roll', (msg) => {
        // Skip our own broadcasts
        if (msg.senderId === window.Multiplayer.getMyTabId()) return;

        // If it's a secret roll, only show to DM tabs
        if (msg.payload.secret) {
            if (!window.Multiplayer.isDM()) return;
            addToHistory(`[SECRET] ${msg.senderName} rolled ${msg.payload.notation}: ${msg.payload.result}`, { isRemote: true });
        } else {
            addToHistory(`${msg.senderName} rolled ${msg.payload.notation}: ${msg.payload.result}`, { isRemote: true });
        }
    });

    // Receive initiative updates (players update their local state from DM)
    window.Multiplayer.on('initiative-update', (msg) => {
        if (msg.senderId === window.Multiplayer.getMyTabId()) return;

        // Players accept initiative state from DM
        if (!window.Multiplayer.isDM()) {
            initiative = msg.payload.initiative || [];
            currentTurn = msg.payload.currentTurn || 0;
            roundNumber = msg.payload.roundNumber || 1;
            renderInitiative();
        }
    });
}

// Initialize multiplayer listeners when the page loads
// Use a short delay to ensure Multiplayer module has loaded
window.addEventListener('load', () => {
    setTimeout(initMultiplayerListeners, 500);
});
