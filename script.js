// Dice Rolling
let rollHistory = [];

function rollDice(sides) {
    const result = Math.floor(Math.random() * sides) + 1;
    displayResult(result, `1d${sides}`, [result]);
    addToHistory(`d${sides}: ${result}`);
}

function customRoll() {
    const numDice = parseInt(document.getElementById('numDice').value) || 1;
    const diceType = parseInt(document.getElementById('diceType').value) || 20;
    const modifier = parseInt(document.getElementById('modifier').value) || 0;

    const rolls = [];
    let total = 0;

    for (let i = 0; i < numDice; i++) {
        const roll = Math.floor(Math.random() * diceType) + 1;
        rolls.push(roll);
        total += roll;
    }

    total += modifier;

    const notation = `${numDice}d${diceType}${modifier >= 0 ? '+' : ''}${modifier}`;
    displayResult(total, notation, rolls, modifier);
    addToHistory(`${notation}: ${total} (${rolls.join(', ')})`);
}

function displayResult(total, notation, rolls, modifier = 0) {
    const resultDiv = document.getElementById('rollResult');
    let modifierText = '';
    if (modifier !== 0) {
        modifierText = ` ${modifier >= 0 ? '+' : ''}${modifier}`;
    }

    resultDiv.innerHTML = `
        <div class="big-number">${total}</div>
        <div class="roll-details">${notation} = [${rolls.join(', ')}]${modifierText}</div>
    `;

    // Add animation
    resultDiv.style.transform = 'scale(1.1)';
    setTimeout(() => {
        resultDiv.style.transform = 'scale(1)';
    }, 150);
}

function addToHistory(text) {
    rollHistory.unshift(text);
    if (rollHistory.length > 20) rollHistory.pop();

    const historyDiv = document.getElementById('rollHistory');
    historyDiv.innerHTML = rollHistory.map(r => `<p>${r}</p>`).join('');
}

// Initiative Tracker
let initiative = [];
let currentTurn = 0;

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

    document.getElementById('charName').value = '';
    document.getElementById('charInit').value = '';
}

function removeFromInitiative(id) {
    initiative = initiative.filter(c => c.id !== id);
    if (currentTurn >= initiative.length) currentTurn = 0;
    renderInitiative();
}

function renderInitiative() {
    const list = document.getElementById('initiativeList');
    list.innerHTML = initiative.map((char, index) => `
        <li class="${index === currentTurn ? 'active' : ''}">
            <span><strong>${char.init}</strong> - ${char.name}</span>
            <button onclick="removeFromInitiative(${char.id})">X</button>
        </li>
    `).join('');
}

function clearInitiative() {
    initiative = [];
    currentTurn = 0;
    renderInitiative();
}

function nextTurn() {
    if (initiative.length === 0) return;
    currentTurn = (currentTurn + 1) % initiative.length;
    renderInitiative();
}

// Character Stats
const stats = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

stats.forEach(stat => {
    const input = document.getElementById(stat);
    input.addEventListener('input', () => updateModifier(stat));
});

function updateModifier(stat) {
    const value = parseInt(document.getElementById(stat).value) || 10;
    const modifier = Math.floor((value - 10) / 2);
    const modSpan = document.getElementById(stat + 'Mod');
    modSpan.textContent = modifier >= 0 ? `+${modifier}` : modifier;
}

// Initialize all modifiers
stats.forEach(stat => updateModifier(stat));

// Save data to localStorage
function saveData() {
    const data = {
        stats: {},
        hp: {
            current: document.getElementById('currentHp').value,
            max: document.getElementById('maxHp').value
        },
        notes: document.getElementById('sessionNotes').value,
        initiative: initiative,
        rollHistory: rollHistory
    };

    stats.forEach(stat => {
        data.stats[stat] = document.getElementById(stat).value;
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
                document.getElementById(stat).value = data.stats[stat];
                updateModifier(stat);
            }
        });
    }

    if (data.hp) {
        document.getElementById('currentHp').value = data.hp.current || 10;
        document.getElementById('maxHp').value = data.hp.max || 10;
    }

    if (data.notes) {
        document.getElementById('sessionNotes').value = data.notes;
    }

    if (data.initiative) {
        initiative = data.initiative;
        renderInitiative();
    }

    if (data.rollHistory) {
        rollHistory = data.rollHistory;
        document.getElementById('rollHistory').innerHTML =
            rollHistory.map(r => `<p>${r}</p>`).join('');
    }
}

// Auto-save every 5 seconds
setInterval(saveData, 5000);

// Load data on page load
window.addEventListener('load', loadData);

// Save before closing
window.addEventListener('beforeunload', saveData);
