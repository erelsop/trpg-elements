![tRPG Elements Logo](https://raw.githubusercontent.com/erelsop/trpg-elements/adcc51db26bc46ce7d369b7320206673e2ef2f8c/src/lib/assets/splash-logo.svg)

# tRPG Elements

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer).


# Overview

Application for planning, organizing and executing tabletop role-playing game campaigns (emphasis on Pathfinder, but viable for others and even custom TRPG creations). The user can add campaign elements (world locations, NPCs, weapons, spells, encounters, etc) to campaigns and assign them to other elements within the campaign. By assigning, the user creates connections that populate each element’s view with its assigned elements.

From here on, there will be two main application modes mentioned. **The campaign view** which can be either *linear* or *location-based*, and **the builder view** used to create and edit the campaign:

**The campaign mode** holds the currently selected published view of the campaign. Within the campaign view, there are components that help with progressing the campaign sequence. These include: views/menus related to chapters and campaign elements, as well as the dice roller.

**The builder mode** is used to create a new campaign and to edit existing campaigns, their chapters, and their elements. The builder view is the default view when the user selects campaign creation.

The user can freely switch between the two modes by selecting “edit” on any campaign, chapter, or element within the campaign view.

# The Campaign Sequence

**The primary and central part of the application** is allowing the user to create a sequence skeleton of sorts.

**Game elements can be defined as** the aforementioned world locations, player characters, NPCs, available weapons, spells, locations or whatever is relevant to the user’s campaign. 

**Chapters in the campaign are** marked completed by completing specific encounters created by the user.

**Encounters are not just combat!** An encounter can be an epic battle or something as simple as players finding a mundane stone or meeting an alien creature.

**A sequence can be linear or dynamic.** The application allows for different view creations to be displayed within the main dashboard. The user can select between a strict linear view or a more dynamic location based view. In both views, sequence progression is triggered by completing specific encounters.

## The Linear View Dashboard

The linear view dashboard is arranged in such a way that the user only sees game elements that the players can encounter for the chapter of the sequence they are in. This view is best suited for campaigns in which the user wants to give players a ride along various encounters within a predefined story. It is also useful for a series of one-off campaigns in which elements may be reused.

There is flexibility behind the scenes! The user is able to assign campaign elements to multiple chapters of the sequence. If the players miss something important in a certain chapter, it can show up again in a later chapter.

## Relationships

— Campaign has many chapters and chapters have one campaign

— Chapters have many world locations and locations have many chapters

— World locations have many element groups and groups have many locations

— Element groups have many individual elements and elements have many groups

### ************UX flow:************

Main Dashboard View (player character cards, chapter cards, dice roller)

→ Chapter View (player character cards, world locations)

→ World Location View (element group cards, important notes, dice roller)

→ Element Group View (element cards, dice roller)

→ Individual Element View (player character cards, chapter progress bar, element information, dice roller)

## The Location-Based View

The location view dashboard is geared more towards a dynamic and open-ended campaign in which the players are driving the progression of a loosely defined story. In theory, all game elements can be obtained by traveling to whichever locations are accessible, whenever. The user can toggle locations as accessible or inaccessible.

When selecting a location, the planner will see all game element groups tied to this location organized into cards with some quick facts about the elements present in each group. All campaign elements can be toggled as quick facts for each group within a location. A roadmap of player progress within the sequence is shown at the top of the main dashboard in location view.

— Campaign has many chapters and chapters have one campaign

## Relationships

— Campaign has many world locations not tied to chapters and world locations have many campaigns

— World locations have many element groups and elements groups have many world locations

— Element groups have many individual elements and elements have many element groups

### UX flow:

Main Dashboard View (player character cards, chapter progress bar, world locations, dice roller)

→ World Location View (player character cards, element group cards, important notes, dice roller)

→ Element Group View (player character cards, chapter progress bar, element cards, dice roller)

→ Individual Element View (player character cards, chapter progress bar, element information, dice roller)

# Core Features

## Campaign Sequencing (Dashboards)

Overview of this feature can be found above in the Campaign Sequence section.

## Chapter Creation

Chapters are special elements that help organize the progression of the campaign sequence. Within the linear view, they are the central point of the story currently occupied by the players. Within the location-based view, they are used in the background to track the progress that is displayed at the top of the application window.

## Chapter Progression Tracking

There is a chapter progression tracker bar at the top of the window when using the location-based campaign sequence. This can be toggled on or off within the campaign settings view.

## Top Menu Bar (desktop & tablet only)

The top menu bar holds links for quick access to all elements within the campaign as well as a link to application and campaign settings.

## Player Character Tracking

The player character cards can be viewed at the top of each window (below the chapter progress bar in location-based campaigns). These are collapsible and therefore do not take up much room within the window. The user can toggle whether to display these in the campaign settings. A simplified character sheet can be viewed for all players when selected. It holds information relevant to encounters and lets the user keep track of player XP, work equipment, and important notes about the player.

## Dice Rolling

There is a dice roller dropdown within the top toolbar on desktop and tablet views, or as a button centered in the bottom bar for mobile devices. Dice rolling is central to TRPGs, so the user can appreciate always having access to any dice roll they may need when looking over a specific encounter or player interaction. Even better? The user can enter the number of rolls they desire for each die. The results are arranged in a list view when selecting multiple dice.

## Element Creation

Ever aspect of campaign sequences are defined as elements within the campaign builder. The user selects “create a new element” (+ Element) within the top (desktop & tablet) or bottom (mobile) toolbars. This brings them to a view where they select what type of element they would like added to the campaign. The available elements are:

### Chapters

As mentioned previously, these are used to organize the progression of the campaign sequence. They hold assigned world locations.

### Player Characters

Player characters are any characters that have been created by the campaign players. Player stats can be entered and elements such as items, buildings, mounts/vehicles can be assigned to the characters.

### World Locations

World locations are broad and can be assigned any number of any elements within the campaign. They are central to the location-based sequence campaign type.

### NPCs

Non-playable characters are fully customizable. The user can enter relevant combat stats, worn/lootable equipment, available spells/abilities, and important notes related to the NPC. The NPCs can be assigned to specific location, including buildings.

### Encounters

Encounters can be defined as any event that happens within the campaign. They can be marked as triggers for campaign chapter progression. When creating a new encounter the user will be prompted to choose a combat or non-combat encounter.

**********************************Combat Encounters**********************************

Combat encounters all the user to assign enemies, XP gain, and shows a quick view of lootable equipment for the encounter based on what is assigned for each enemy and what is set as encounter specific (think rare items for key story encounters). Important notes created for the encounter can also be created. When selecting the encounter in the campaign view, the user is prompted to role d20s for each enemy to determine the order in which the enemies will attack. Once the players roll their own d20, the user can input their rolls in the interface to insert them into the combat flow.

******************************************Non-Combat Encounters******************************************

Non-combat encounters allow the user to assign any relevant campaign elements to the encounter. Some examples would be a key item, a new NPC, a building, or even a separate combat encounter if the user desires a certain element to trigger combat under specific conditions. The user can also write up important notes specific to the encounter and assign XP gain if desired.

### Buildings

Buildings are a special type of location. They feature all of the same functionality as a world location, but they are assigned to a specific world location. The user can assign NPCs, equipment, and other elements to a building. The user can also toggle whether the building is a shop or storage location. 

If it is a shop, the user can assign shopkeeper NPCs and the user can assign elements available for purchase (or theft) within the shop. The user is allowed much creativity here. For example, a building can be a shop, but also have an encounter assigned to it in the event that players decide to rob the shop or are caught trying to pocket and item for sale. Within the campaign view, this is all visible and the user can select the encounter to view the details view for that encounter.

If the building is a storage location (think bank, dock, player housing), the user can assign NPCs that manage the storage location and assign elements that are stored within the location. The user can also assign elements that are available for theft within the storage location. Much like shop, the user can assign encounters to the storage location in the event that players decide to rob the location or are caught trying to steal an item from the storage location (banks docks, air docks, etc).

### Items

Items can be defined as any campaign elements that can be assigned to a player character that can also be stored within inventory or a storage location. These can be as large as a ship or as small as a single coin. When selecting to create a new item element, the user will be prompted to select the type of item they would like to create. The available item types are: weapons, armor/clothing, consumables, mounts/vehicles, spell/ability books/scrolls/manuals, and custom items. All items can be marked as key items during creation. Key items are items that are important to the overall campaign sequence progression.

# Technologies

## Frontend: [SvelteKit](https://kit.svelte.dev/)

## Backend: [Tauri](https://tauri.app/)

## Database & Auth: [Supabase](https://supabase.com/) (PostgreSQL)
