// D&D 5e Random Event Roller
// Handles random events, creature encounters, and custom event pools

// ==========================================
// PRESET EVENT TABLES
// ==========================================

const PRESET_EVENTS = {
    weather: [
        { name: "Clear Skies", description: "Perfect traveling weather. No adverse conditions.", weight: 20 },
        { name: "Light Rain", description: "Visibility slightly reduced. Tracks are easier to follow (+2 to Survival checks for tracking).", weight: 15 },
        { name: "Heavy Rain", description: "Disadvantage on Perception checks that rely on sight or hearing. Extinguishes open flames.", weight: 10 },
        { name: "Thunderstorm", description: "Heavy rain effects plus loud thunder masks sounds. Lightning strikes possible in open areas.", weight: 5 },
        { name: "Fog", description: "Heavily obscured beyond 30 feet. Lightly obscured within 30 feet.", weight: 10 },
        { name: "Light Snow", description: "Tracks visible for 24 hours. Slight cold - no mechanical effect.", weight: 8 },
        { name: "Heavy Snow", description: "Difficult terrain. Tracks fill in after 1 hour. Constitution save DC 10 each hour or gain exhaustion.", weight: 5 },
        { name: "Blizzard", description: "Heavily obscured, difficult terrain, extreme cold (DC 15 Constitution save each hour).", weight: 2 },
        { name: "Extreme Heat", description: "DC 10 Constitution save each hour or gain one level of exhaustion. Disadvantage if wearing medium/heavy armor.", weight: 5 },
        { name: "Strong Winds", description: "Ranged weapon attacks and Perception checks relying on hearing at disadvantage. Flying creatures have disadvantage on attack rolls.", weight: 8 },
        { name: "Hail", description: "1d4 bludgeoning damage per minute without cover. Disadvantage on Perception checks.", weight: 4 },
        { name: "Magical Weather", description: "Strange magical phenomenon - roll on Wild Magic table or describe unusual effect (colored rain, floating bubbles, etc.).", weight: 3 }
    ],
    social: [
        { name: "Traveling Merchant", description: "A friendly merchant with a cart of goods. Has common items and might have one uncommon item for sale.", weight: 15 },
        { name: "Lost Traveler", description: "A commoner who has lost their way. Grateful for directions and may share local rumors.", weight: 12 },
        { name: "Noble Carriage", description: "A wealthy noble traveling with 2d4 guards. May hire adventurers or look down on them.", weight: 8 },
        { name: "Pilgrim Group", description: "2d6 pilgrims traveling to a holy site. May offer a blessing (+1 to next saving throw) in exchange for escort.", weight: 10 },
        { name: "Bandits", description: "1d6+2 bandits demand a toll (10 gp per person) or attack. May negotiate.", weight: 10 },
        { name: "Military Patrol", description: "A patrol of 2d4 guards or soldiers. May ask about suspicious activity or warn of nearby danger.", weight: 12 },
        { name: "Adventuring Party", description: "A rival party of 1d4+1 adventurers. May trade information, compete for bounty, or pick a fight.", weight: 8 },
        { name: "Fleeing Refugees", description: "2d10 commoners fleeing from danger (monster, war, disaster). Warn the party about the threat.", weight: 7 },
        { name: "Mysterious Stranger", description: "A hooded figure offers cryptic advice or a mysterious quest hook. Disappears if followed.", weight: 5 },
        { name: "Festival Procession", description: "Local villagers celebrating a holiday. May invite party to join, offering food and lodging.", weight: 8 },
        { name: "Wanted Criminal", description: "Someone matching a wanted poster. Are they actually guilty?", weight: 5 },
        { name: "Street Performer", description: "A bard or entertainer putting on a show. May have useful information or pick pockets.", weight: 7 }
    ],
    discovery: [
        { name: "Hidden Cache", description: "A buried or hidden stash containing 2d10 gp and a random trinket.", weight: 12 },
        { name: "Ancient Ruins", description: "Remnants of an old structure. Possible dungeon entrance, treasure, or historical clues.", weight: 10 },
        { name: "Natural Spring", description: "Fresh water source. 10% chance of minor healing properties (heals 1 HP if drunk).", weight: 12 },
        { name: "Abandoned Camp", description: "Signs of previous travelers. 1d6 days old. May find clues, supplies, or danger.", weight: 15 },
        { name: "Strange Monument", description: "An ancient standing stone, statue, or shrine. May be magical, historical, or a landmark.", weight: 8 },
        { name: "Cave Entrance", description: "Natural cave opening. Could be empty, inhabited, or lead to a larger complex.", weight: 10 },
        { name: "Crashed Wagon", description: "An overturned wagon. 50% chance of salvageable goods, 25% chance of survivors or corpses.", weight: 10 },
        { name: "Mysterious Tracks", description: "Large or unusual creature tracks. DC 15 Survival to identify, leads to lair or hunting ground.", weight: 8 },
        { name: "Fairy Circle", description: "A ring of mushrooms marking a fey crossing. Stepping inside may have magical effects.", weight: 5 },
        { name: "Old Battlefield", description: "Site of a past conflict. Rusted weapons, bones, and possibly restless spirits.", weight: 7 },
        { name: "Shrine to Unknown God", description: "A small shrine to a deity. Offering something may grant a minor boon or curse.", weight: 6 },
        { name: "Message in a Bottle/Tree", description: "A hidden message from a previous traveler. Could be a map, warning, or cry for help.", weight: 7 }
    ],
    hazard: [
        { name: "Quicksand", description: "DC 15 Dexterity save or begin sinking. DC 15 Strength (Athletics) to escape. Sinks 1d4 feet per round.", weight: 8 },
        { name: "Rockslide", description: "DC 14 Dexterity save or take 4d10 bludgeoning damage (half on save). Area becomes difficult terrain.", weight: 7 },
        { name: "Sinkhole", description: "Ground collapses. DC 15 Dexterity save or fall 2d10 feet, taking falling damage.", weight: 6 },
        { name: "Poison Plants", description: "Touched poisonous plants. DC 13 Constitution save or be poisoned for 1 hour.", weight: 10 },
        { name: "Swarm of Insects", description: "A swarm of insects attacks for 1d4 rounds before dispersing. Use swarm statistics.", weight: 12 },
        { name: "Flash Flood", description: "DC 15 Strength save or be swept 60 feet and take 2d6 bludgeoning damage.", weight: 5 },
        { name: "Unstable Ground", description: "Difficult terrain that may collapse. DC 12 Dexterity save each round or fall prone.", weight: 10 },
        { name: "Magical Dead Zone", description: "Magic doesn't work in a 30-foot radius area. Spells fail, magic items inert.", weight: 4 },
        { name: "Wild Magic Surge", description: "Magical instability in the area. Any spell cast triggers a roll on the Wild Magic table.", weight: 5 },
        { name: "Hallucinogenic Spores", description: "DC 14 Constitution save or be affected as if by the confusion spell for 1 minute.", weight: 6 },
        { name: "Trapped Path", description: "A hunting trap or old dungeon trap. DC 15 Perception to spot, 2d10 damage if triggered.", weight: 12 },
        { name: "Collapsing Structure", description: "Building or cave begins collapsing. DC 15 Dexterity save or take 3d10 bludgeoning damage.", weight: 5 },
        { name: "Extreme Cold Pocket", description: "Supernatural cold in 20-foot area. DC 15 Constitution save or take 2d6 cold damage.", weight: 5 },
        { name: "Fire Hazard", description: "Dry conditions and spark cause fire. Spreads 10 feet per round. 1d10 fire damage per round in flames.", weight: 5 }
    ]
};

// ==========================================
// STATE
// ==========================================

let creaturePool = [];
let customEvents = [];
let eventHistory = [];

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize preset tabs
    initPresetTabs();

    // Load saved data
    loadSavedData();

    // Update matching creatures display
    updateMatchingCreatures();

    // Populate creature select
    populateCreatureSelect();
});

function initPresetTabs() {
    const tabs = document.querySelectorAll('.preset-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active from all tabs and content
            document.querySelectorAll('.preset-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.preset-content').forEach(c => c.classList.remove('active'));

            // Activate clicked tab and its content
            tab.classList.add('active');
            const contentId = 'preset-' + tab.dataset.tab;
            document.getElementById(contentId).classList.add('active');
        });
    });
}

function loadSavedData() {
    try {
        const savedPool = localStorage.getItem('dndCreaturePool');
        if (savedPool) creaturePool = JSON.parse(savedPool);

        const savedEvents = localStorage.getItem('dndCustomEvents');
        if (savedEvents) customEvents = JSON.parse(savedEvents);

        const savedHistory = localStorage.getItem('dndEventHistory');
        if (savedHistory) eventHistory = JSON.parse(savedHistory);

        renderCreaturePool();
        renderCustomEvents();
        renderHistory();
    } catch (e) {
        console.error('Failed to load saved data:', e);
    }
}

// ==========================================
// EVENT TYPE HANDLING
// ==========================================

function updateEventOptions() {
    const eventType = document.getElementById('event-type').value;

    // Show/hide relevant sections
    document.getElementById('encounter-settings').style.display =
        eventType === 'encounter' ? 'block' : 'none';
    document.getElementById('custom-events-section').style.display =
        eventType === 'custom' ? 'block' : 'none';

    // Update matching creatures if encounter type
    if (eventType === 'encounter') {
        updateMatchingCreatures();
    }
}

function updateEncounterMode() {
    const mode = document.getElementById('encounter-mode').value;
    document.getElementById('custom-pool-section').style.display =
        mode === 'pool' ? 'block' : 'none';
}

// ==========================================
// MAIN ROLL FUNCTION
// ==========================================

function rollEvent() {
    const eventType = document.getElementById('event-type').value;
    let result;

    switch (eventType) {
        case 'random':
            result = rollRandomEvent();
            break;
        case 'encounter':
            result = rollEncounter();
            break;
        case 'weather':
            result = rollFromTable(PRESET_EVENTS.weather, 'Weather');
            break;
        case 'social':
            result = rollFromTable(PRESET_EVENTS.social, 'Social Encounter');
            break;
        case 'discovery':
            result = rollFromTable(PRESET_EVENTS.discovery, 'Discovery');
            break;
        case 'hazard':
            result = rollFromTable(PRESET_EVENTS.hazard, 'Environmental Hazard');
            break;
        case 'custom':
            result = rollCustomEvent();
            break;
        default:
            result = { title: 'Unknown', content: 'Unknown event type' };
    }

    displayResult(result);
    addToHistory(eventType, result);
}

function rollRandomEvent() {
    // Pick a random category
    const categories = ['weather', 'social', 'discovery', 'hazard'];
    const category = categories[Math.floor(Math.random() * categories.length)];
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

    return rollFromTable(PRESET_EVENTS[category], categoryName);
}

function rollFromTable(table, categoryName) {
    const totalWeight = table.reduce((sum, item) => sum + item.weight, 0);
    let roll = Math.random() * totalWeight;

    for (const item of table) {
        roll -= item.weight;
        if (roll <= 0) {
            return {
                title: `${categoryName}: ${item.name}`,
                content: `<p>${item.description}</p>`
            };
        }
    }

    // Fallback
    const item = table[table.length - 1];
    return {
        title: `${categoryName}: ${item.name}`,
        content: `<p>${item.description}</p>`
    };
}

// ==========================================
// CREATURE ENCOUNTER
// ==========================================

function rollEncounter() {
    const mode = document.getElementById('encounter-mode').value;
    const countDice = document.getElementById('encounter-count').value;

    let creatures;
    if (mode === 'pool' && creaturePool.length > 0) {
        creatures = rollFromCreaturePool(countDice);
    } else {
        creatures = rollFromFilters(countDice);
    }

    if (!creatures || creatures.length === 0) {
        return {
            title: 'No Encounter',
            content: '<p>No matching creatures found. Try adjusting your filters.</p>'
        };
    }

    return formatEncounterResult(creatures);
}

function rollFromCreaturePool(countDice) {
    const count = rollDice(countDice);
    const creatures = [];

    const totalWeight = creaturePool.reduce((sum, item) => sum + item.weight, 0);

    for (let i = 0; i < count; i++) {
        let roll = Math.random() * totalWeight;
        for (const item of creaturePool) {
            roll -= item.weight;
            if (roll <= 0) {
                creatures.push(item.creatureId);
                break;
            }
        }
    }

    return creatures;
}

function rollFromFilters(countDice) {
    const crMin = parseFloat(document.getElementById('cr-min').value);
    const crMax = parseFloat(document.getElementById('cr-max').value);
    const creatureType = document.getElementById('creature-type').value;

    const matching = getMatchingCreatures(crMin, crMax, creatureType);
    if (matching.length === 0) return [];

    const count = rollDice(countDice);
    const creatures = [];

    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * matching.length);
        creatures.push(matching[randomIndex].id);
    }

    return creatures;
}

function getMatchingCreatures(crMin, crMax, creatureType) {
    if (typeof MONSTERS === 'undefined') return [];

    const matching = [];

    for (const [id, monster] of Object.entries(MONSTERS)) {
        const cr = parseCR(monster.cr);

        if (cr >= crMin && cr <= crMax) {
            if (creatureType === 'any' || monster.type === creatureType) {
                matching.push({ id, ...monster });
            }
        }
    }

    return matching;
}

function parseCR(cr) {
    if (typeof cr === 'number') return cr;
    if (cr === '1/8') return 0.125;
    if (cr === '1/4') return 0.25;
    if (cr === '1/2') return 0.5;
    return parseFloat(cr) || 0;
}

function formatEncounterResult(creatureIds) {
    // Count duplicates
    const counts = {};
    creatureIds.forEach(id => {
        counts[id] = (counts[id] || 0) + 1;
    });

    let content = '<div class="encounter-creatures">';

    for (const [id, count] of Object.entries(counts)) {
        const monster = MONSTERS[id];
        if (!monster) continue;

        const countText = count > 1 ? `${count}x ` : '';

        content += `
            <div class="creature-card">
                <h4>${countText}${monster.name}</h4>
                <div class="creature-stats">
                    <div class="stat-item">
                        <span class="stat-label">CR</span>
                        <span class="stat-value">${monster.cr}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Type</span>
                        <span class="stat-value">${monster.size} ${monster.type}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">AC</span>
                        <span class="stat-value">${monster.ac}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">HP</span>
                        <span class="stat-value">${monster.hp} (${monster.hitDice})</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">XP</span>
                        <span class="stat-value">${(monster.xp * count).toLocaleString()}</span>
                    </div>
                </div>
            </div>
        `;
    }

    content += '</div>';

    const totalXP = creatureIds.reduce((sum, id) => {
        return sum + (MONSTERS[id]?.xp || 0);
    }, 0);

    return {
        title: `Creature Encounter (${creatureIds.length} creature${creatureIds.length > 1 ? 's' : ''})`,
        content: content + `<p><strong>Total XP:</strong> ${totalXP.toLocaleString()}</p>`
    };
}

function rollDice(diceStr) {
    if (!diceStr.includes('d')) {
        return parseInt(diceStr) || 1;
    }

    const parts = diceStr.split('d');
    // Handle "d6" as "1d6", and validate numbers
    const numDice = parseInt(parts[0]) || 1;
    const sides = parseInt(parts[1]) || 6;

    // Validate to prevent infinite loops or invalid results
    if (numDice <= 0 || sides <= 0 || isNaN(numDice) || isNaN(sides)) {
        return 1;
    }

    let total = 0;
    for (let i = 0; i < numDice; i++) {
        total += Math.floor(Math.random() * sides) + 1;
    }
    return total;
}

// ==========================================
// CUSTOM EVENTS
// ==========================================

function rollCustomEvent() {
    if (customEvents.length === 0) {
        return {
            title: 'No Custom Events',
            content: '<p>Add some custom events first!</p>'
        };
    }

    const totalWeight = customEvents.reduce((sum, e) => sum + e.weight, 0);
    let roll = Math.random() * totalWeight;

    for (const event of customEvents) {
        roll -= event.weight;
        if (roll <= 0) {
            return {
                title: `Custom Event: ${event.name}`,
                content: `<p>${event.description}</p>`
            };
        }
    }

    const event = customEvents[customEvents.length - 1];
    return {
        title: `Custom Event: ${event.name}`,
        content: `<p>${event.description}</p>`
    };
}

function addCustomEvent() {
    const name = document.getElementById('custom-event-name').value.trim();
    const description = document.getElementById('custom-event-desc').value.trim();
    const weight = parseInt(document.getElementById('custom-event-weight').value) || 1;

    if (!name) {
        alert('Please enter an event name');
        return;
    }

    customEvents.push({ name, description, weight });

    // Clear inputs
    document.getElementById('custom-event-name').value = '';
    document.getElementById('custom-event-desc').value = '';
    document.getElementById('custom-event-weight').value = '1';

    renderCustomEvents();
    saveCustomEvents();
}

function removeCustomEvent(index) {
    customEvents.splice(index, 1);
    renderCustomEvents();
    saveCustomEvents();
}

function renderCustomEvents() {
    const container = document.getElementById('custom-events-list');

    if (customEvents.length === 0) {
        container.innerHTML = '<p class="empty-history">No custom events added</p>';
        return;
    }

    container.innerHTML = customEvents.map((event, index) => `
        <div class="custom-event-item">
            <div class="custom-event-info">
                <h4>${escapeHtml(event.name)}</h4>
                <p>${escapeHtml(event.description)}</p>
            </div>
            <span class="custom-event-weight">Weight: ${event.weight}</span>
            <button class="custom-event-remove" onclick="removeCustomEvent(${index})">×</button>
        </div>
    `).join('');
}

function clearCustomEvents() {
    if (confirm('Clear all custom events?')) {
        customEvents = [];
        renderCustomEvents();
        saveCustomEvents();
    }
}

function saveCustomEvents() {
    try {
        localStorage.setItem('dndCustomEvents', JSON.stringify(customEvents));
    } catch (e) {
        console.error('Failed to save custom events:', e);
    }
}

function loadCustomEvents() {
    try {
        const saved = localStorage.getItem('dndCustomEvents');
        if (saved) {
            customEvents = JSON.parse(saved);
            renderCustomEvents();
        }
    } catch (e) {
        console.error('Failed to load custom events:', e);
    }
}

// ==========================================
// CREATURE POOL
// ==========================================

function populateCreatureSelect() {
    const select = document.getElementById('pool-creature-select');
    if (!select || typeof MONSTERS === 'undefined') return;

    const sortedMonsters = Object.entries(MONSTERS)
        .map(([id, m]) => ({ id, name: m.name, cr: m.cr }))
        .sort((a, b) => a.name.localeCompare(b.name));

    select.innerHTML = '<option value="">-- Select Creature --</option>' +
        sortedMonsters.map(m =>
            `<option value="${m.id}">${m.name} (CR ${m.cr})</option>`
        ).join('');
}

function addToPool() {
    const select = document.getElementById('pool-creature-select');
    const creatureId = select.value;
    const weight = parseInt(document.getElementById('pool-weight').value) || 1;

    if (!creatureId) {
        alert('Please select a creature');
        return;
    }

    // Check if already in pool
    const existing = creaturePool.find(p => p.creatureId === creatureId);
    if (existing) {
        existing.weight = weight;
    } else {
        creaturePool.push({ creatureId, weight });
    }

    select.value = '';
    document.getElementById('pool-weight').value = '1';

    renderCreaturePool();
    savePool();
}

function removeFromPool(index) {
    creaturePool.splice(index, 1);
    renderCreaturePool();
    savePool();
}

function renderCreaturePool() {
    const container = document.getElementById('creature-pool');
    if (!container) return;

    if (creaturePool.length === 0) {
        container.innerHTML = '<p style="color: #666; padding: 10px;">No creatures in pool</p>';
        return;
    }

    container.innerHTML = creaturePool.map((item, index) => {
        const monster = MONSTERS[item.creatureId];
        const name = monster ? monster.name : item.creatureId;
        return `
            <div class="pool-item">
                <span class="pool-item-name">${escapeHtml(name)}</span>
                <span class="pool-item-weight">×${item.weight}</span>
                <button class="pool-item-remove" onclick="removeFromPool(${index})">×</button>
            </div>
        `;
    }).join('');
}

function clearPool() {
    if (confirm('Clear creature pool?')) {
        creaturePool = [];
        renderCreaturePool();
        savePool();
    }
}

function savePool() {
    try {
        localStorage.setItem('dndCreaturePool', JSON.stringify(creaturePool));
    } catch (e) {
        console.error('Failed to save creature pool:', e);
    }
}

function loadPool() {
    try {
        const saved = localStorage.getItem('dndCreaturePool');
        if (saved) {
            creaturePool = JSON.parse(saved);
            renderCreaturePool();
        }
    } catch (e) {
        console.error('Failed to load creature pool:', e);
    }
}

// ==========================================
// MATCHING CREATURES DISPLAY
// ==========================================

function updateMatchingCreatures() {
    const crMin = parseFloat(document.getElementById('cr-min')?.value || 0);
    const crMax = parseFloat(document.getElementById('cr-max')?.value || 5);
    const creatureType = document.getElementById('creature-type')?.value || 'any';

    const matching = getMatchingCreatures(crMin, crMax, creatureType);

    const countEl = document.getElementById('matching-count');
    const listEl = document.getElementById('matching-list');

    if (countEl) countEl.textContent = matching.length;

    if (listEl) {
        if (matching.length === 0) {
            listEl.innerHTML = '<p style="color: #666;">No matching creatures</p>';
        } else {
            listEl.innerHTML = matching.slice(0, 50).map(m => `
                <span class="matching-creature">${escapeHtml(m.name)}<span class="cr">CR ${m.cr}</span></span>
            `).join('') + (matching.length > 50 ? `<span class="matching-creature">...and ${matching.length - 50} more</span>` : '');
        }
    }
}

// Add event listeners for filter changes
document.addEventListener('DOMContentLoaded', function() {
    ['cr-min', 'cr-max', 'creature-type'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('change', updateMatchingCreatures);
        }
    });
});

// ==========================================
// RESULT DISPLAY
// ==========================================

function displayResult(result) {
    const container = document.getElementById('event-result');
    const titleEl = document.getElementById('event-result-title');
    const contentEl = document.getElementById('event-result-content');

    titleEl.textContent = result.title;
    contentEl.innerHTML = result.content;
    container.style.display = 'block';

    // Scroll to result
    container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ==========================================
// HISTORY
// ==========================================

function addToHistory(type, result) {
    const entry = {
        time: new Date().toLocaleTimeString(),
        type: type,
        title: result.title,
        content: result.content.replace(/<[^>]*>/g, ' ').trim().substring(0, 100)
    };

    eventHistory.unshift(entry);

    // Keep only last 50 entries
    if (eventHistory.length > 50) {
        eventHistory = eventHistory.slice(0, 50);
    }

    renderHistory();
    saveHistory();
}

function renderHistory() {
    const container = document.getElementById('event-history');
    if (!container) return;

    if (eventHistory.length === 0) {
        container.innerHTML = '<p class="empty-history">No events rolled yet</p>';
        return;
    }

    container.innerHTML = eventHistory.map(entry => `
        <div class="history-item">
            <span class="history-time">${entry.time}</span>
            <span class="history-type">${entry.type}</span>
            <div class="history-content">${escapeHtml(entry.title)}</div>
        </div>
    `).join('');
}

function clearHistory() {
    if (confirm('Clear event history?')) {
        eventHistory = [];
        renderHistory();
        saveHistory();
    }
}

function saveHistory() {
    try {
        localStorage.setItem('dndEventHistory', JSON.stringify(eventHistory));
    } catch (e) {
        console.error('Failed to save history:', e);
    }
}

// ==========================================
// UTILITIES
// ==========================================

function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
