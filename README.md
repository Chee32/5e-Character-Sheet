# 5e Character Sheet
 A character sheet for 5th edition dungeons and dragons

This is meant to be an offline character sheet for the game of dungeons and dragons. It is not written to be mobile-friendly or with any online modules. 
It does, however, include jQuery and uses it to load a character from a JSON file and automatically fill out most of the sheet based on your attributes. 

## Here are some things to know when using this sheet.

### How to use this sheet.
The main idea behind this sheet is that you can set your attributes and then the skills will auto-populate based on the scores. To make your own character sheet, download the repository, fill out all the fields staring with proficeincy bonus and attribute scores, and save your sheet into the sheet folder.

I also included the ability to lock the sheet. It stops the scripts from running on the sheet if you want to calculate all of your information yourself.
To turn on the lock, click the bars in the upper right corner and click lock. This has to be set every time you load up the sheet.

To save the sheet, click the bars in the upper right corner and click save. A JSON will be downloaded. Put this JSON (named savedSheet.json) into the sheet folder of the project. Then you can open index.html and your sheet will populate based on the JSON.

To change the images upload your images into the imgs folder. For the Character Appearance name the file Character.jpeg. For the Alliance Symbol, name the file Symbol.jpeg. If you want to change the name or file type of these images you will have to go into the CSS and change the values.

I have set up a default character to show how this form is meant to be used.  This includes a saveSheet.json, Character.jpeg, and Symbol.jpeg. I hope it helps you in making characters and playing your games.

### Fields that don't populate.
Some fields do not auto-populate based off of the attributes. 

Some of the less obvious ones are:
- AC: The reason for this is that your armor and class features mainly determine your AC. I felt it was better to just leave it to you to set it.
- Initiative Bonus: Again, a lot of things can change this other than attributes.
- Proficiency Bonus: This mainly changes with level so I felt it was easy enough to set.
- Current Hit Dice: Again, mainly based on level and not attributes.
- Max Health: This is mainly based off of class and level. It can also be rolled if you chose to so I didn't want this to change if someone added more hit dice.

Sorry for any spelling mistakes.  If you add them as issues I can change them in anther update.
