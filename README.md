# Dungeons & Dragons 5th Edition Character Sheet
### A New and Modern Character Sheet for 5th edition Dungeons & Dragons.
#### About:
The main idea behind this sheet is easy access to common character information and auto calculation & population of fields. To see a demo, [click here](https://lckynmbrsvn.github.io/DnD-5e-Character-Sheet/) 

Currently, this is meant to be an offline character sheet for the game of Dungeons and Dragons. It has been rewritten to have a modern responsive layout in w3's lightweight css.

The only part that relies on connecting online is the use of FontAwesome, which is only used in the drop down menu. It utilizes jQuery to load a character from a JSON file and automatically fill out most of the sheet based on your attributes. 

A default Character Sheet has been made to show how this form is meant to be used.  This includes a 'saveSheet.json', 'character.jpeg', and 'symbol.jpeg'. 

#### Credits:
This project was forked from [here](https://github.com/Chee32/5e-Character-Sheet). Credit goes to Chee32 for the JQuery which remains largely unchanged.

## Things to know when using this sheet.
### How to:
#### Make your own character sheet: 
1. Download or clone the repository.
2. Fill out all the fields staring with Proficeincy Bonus and Attribute Scores.
3. Save your sheet (in the menu).

#### Save the sheet:
1. Click the 'hamburger' bars to open the menu.
2. In the 'Options' drop-down menu, click 'Save'.
3. A JSON sheet will be download.
4. Copy the new sheet into the 'sheet' folder of the project.
5. You can now refresh the page or click the 'Load' button in the 'Options' drop-down menu.

#### Change Character & Alliance images:
1. Upload your images into the 'imgs' folder
2. For the Character Appearance name the file 'character.jpeg'.
3. For the Alliance Symbol, name the file 'symbol.jpeg'.
4. Currently, if you want to change the name or file type of these images you will have to go into the 'app.css' and change the values.

#### To 'Lock' the sheet:
Locking stops the scripts from running on the sheet if you want to calculate all of your information yourself.
To turn on the lock:
1. Click the 'hamburger' bars to open the menu.
2. In the 'Options' drop-down menu, click 'Lock'.
    - Currently this has to be set every time you load up the sheet.

### Fields that don't populate.
Some fields do not auto-populate based off of the attributes. 
#### Some of the less obvious ones are:
- AC: The reason for this is that your armor and class features mainly determine your AC. I felt it was better to just leave it to you to set it.
- Initiative Bonus: Again, a lot of things can change this other than attributes.
- Proficiency Bonus: This mainly changes with level so I felt it was easy enough to set.
- Current Hit Dice: Again, mainly based on level and not attributes.
- Max Health: This is mainly based off of class and level. It can also be rolled if you chose to so I didn't want this to change if someone added more hit dice.

---

## Changes & Planned Updates.
### Changes:
##### Hotfix -v2.1.3
- Hotfix for broken navigation
##### Better JQuery & More -v2.1.2
- Updated JQuery for expanding and collapsing panels
- Added a 'Scroll To Top' button
##### Hotfixes -v2.1.1:
- Fixed an issue where data from the .json character sheet were not loading.
- Input Boxes that are auto filled or adjusted are now highlighted in a different color.
- Menu now has a 'Help' section (to explain color highlight for example).
##### Fixes & Formatting -v2.1:
- Fixed the 'Attack' section not displaying.
- Formatted HTML, CSS, JS files to be easier to read and have a consistent spacing & tabbing.
- Tweaked the layout of the 'Attributes' page.
- Added an additional 'Mount/Pet' section to allow for easier management of multiple pets/mounts.
- Fixed some spelling errors.
- Tweaked design of the Inventory & Mount page.
##### Initial Commit -v2.0:
- HTML and CSS re-worked to use w3's responsive layout.
- The sheet should now be usuable 95% of the time on any screen size.
- Re-structered the layout of fields to hopefully provide easier access to most used stats & information.
- Re-wrote 90% of the CSS to have a more modern design theory.
- Re-made menu to be easier to use + use as navigation.
- Broke down major elements to be on seperate 'pages' instead of everything being on one long page.
- Updated existing Jquery to work with changes.
- Added additional JS to add features:
    - New Menu design.
    - Section cards can be collapsed.
    - Switching between 'pages' (displaying/hiding \<div>'s).
- Added an additional 'Class/Level' section to make it easier to multi-class.
- Basic character information remains on top of the page as a header.
- Added a 'Notes' page for generic notes.

### Future Updates & Goals:
- Code clean-up: a lot of the HTML and CSS needs to be cleaned up to remove depreciated references, be more consistent, and be easier to read.
- Fine tuning and tweaks to UI.
- Better documentation going forward.
- Add Help & documentation as a menu item and/or page.
- Add additional functionality:
    - Auto calculate more fields.
    - Better image handling & selection.
    - Allow user to select a save sheet to load from.
    - Make usable online.
    - Hover Tool-Tips for fields.

---

## Issue Reporting & Pull Requests.
### Issues:
If you find any issues, feel free to report them and I will try to address them. Please include as much detail as possible on how to re-create the problem, thanks!

### Pull Requests & Forks:
Feel free to make contributions or fork this project. Please just credit the original author and myself. Thanks!