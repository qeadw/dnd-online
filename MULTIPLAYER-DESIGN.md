# Cross-Tab Multiplayer — Design Questions

Answer each question so I know exactly how to build this. Write your answer after each question.

---

## A. Communication Method
Should this work only with tabs on the same computer/browser, or do you want players on different computers to connect too?
- Option 1: Same browser only (BroadcastChannel API — no server needed)
- Option 2: Same network/LAN (simple WebSocket server)
- Option 3: Full online (WebSocket server hosted somewhere)

for now just the same browser on the same computer but eventually i will have Multiplayer, dont worry aobut it for now.

## B. DM vs Player Roles
When someone opens a tab, how do they pick their role?
- Option 1: First tab is automatically the DM, others join as players
- Option 2: Choose DM or Player from a menu when you open the page
- Option 3: DM creates a session code, players enter it to join

3

## C. What Can the DM Do That Players Can't?
Check everything the DM should have exclusive control over:
- [X] See and control all monsters/NPCs (dm can select who can control what)
- [x] Roll dice secretly (hidden from players)
- [x] Push map changes to all players
- [x] Control initiative order
- [ ] Send narration/story text to all players
- [x] View all player character sheets
- [x] Apply damage/healing to player characters
- [x] Control what information players can see
- [ ] Other: _______________

**Answer:**

## D. What Can Players Do?
Check everything players should be able to do:
- [x] See their own character sheet
- [x] Roll dice (visible to everyone)
- [ ] Roll dice privately (only they see)
- [x] Move their token on a shared map
- [x] Send messages/chat to the group
- [x] Track their own HP/spell slots/inventory
- [ ] See other players' character sheets
- [x] Request actions from the DM
- [ ] Other: _______________

**Answer:**

## E. Shared State — What Syncs Across Tabs?
What should automatically update for everyone when it changes?
- [x] Dice rolls and results
- [x] Initiative tracker/turn order
- [x] Map and token positions
- [x] HP/damage changes
- [x] Chat/narration messages
- [x] Combat log
- [x] Conditions/status effects on characters
- [ ] Other: _______________

**Answer:**

## F. Session Persistence
If all tabs close, what happens?
- Option 1: Session is gone, start fresh next time
- Option 2: DM's tab saves the session, can resume later
- Option 3: All state auto-saves, anyone can reopen and continue

2, the dm can resume the session

## G. Character Selection
How do players pick their character when joining?
- Option 1: They select from characters already created in the character creator
- Option 2: They create a new character on join
- Option 3: DM assigns characters to player tabs
- Option 4: Both — pick existing or create new

4

## H. Map/Battle Grid
How should the shared map work?
- Option 1: No shared map — just sync dice/chat/initiative
- Option 2: Simple grid where DM places tokens and players see them
- Option 3: Full battle map with fog of war, token movement for everyone
- Option 4: Start simple (option 2), add more later

2, but when the dm loads a map it should load for everyone

## I. Chat System
Do you want an in-app chat/message system?
- Option 1: No chat — just shared game state (dice, initiative, etc.)
- Option 2: Simple text chat visible to all
- Option 3: Chat with channels (general, whisper to DM, whisper to player)
- Option 4: Chat with character names and role-play formatting

3

## J. How Many Players?
What's the max number of player tabs you want to support?
- Option 1: 1 DM + up to 4 players
- Option 2: 1 DM + up to 6 players
- Option 3: 1 DM + unlimited players
- Option 4: Doesn't matter, just make it work

Let the DM decide when making the session and let them change it later in session settings

## K. UI Layout
Should the DM and player views be totally different pages, or the same page with different permissions?
- Option 1: Same page, DM just sees extra panels/controls
- Option 2: Separate DM page and Player page
- Option 3: DM gets a dashboard that embeds/controls the existing tools

1

## L. Starting Point — What's the MVP?
What's the bare minimum you want working first before adding more?
- Option 1: Just synced dice rolls across tabs
- Option 2: Dice + initiative tracker synced
- Option 3: Dice + initiative + basic chat
- Option 4: Full DM/player split with dice, initiative, chat, and character view
- Option 5: Other: _______________

4

---

## Notes
Write any other thoughts, features, or ideas here:


