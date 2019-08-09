# 5e Character Sheet
 A character sheet for 5th edition dungeons and dragons

This is ment to be an offline character sheet for the game of dungeons and dragons.  It is not written to be mobile friendly or to use any online modules.  
It does however, include jQuery and uses it to load a character from a JSON file and to automatically fill out most of the sheet based on your attributes.  

## Here are some things to know when using this sheet.

### Fields that don't populate.
There are some fields that do not auto populate based off of the attributes. 

The ones that don't change but you might think should are:
- AC: The reason for this is that the armor and class features mainly sets your AC.  I felt it was better to just leave it to you to set it.
- Initiative Bonus: Again, a lot of things can change this that are not attributes.
- Proficiency Bonus: This mainly changes with level so I felt it was easy enough to set.
- Current Hit Dice: Again, mainly based on level and not attributes.
- Max Health: This is mainly based off of class and level.  It can also be rolled if you chose to so I didn't want this to change if some one added more hit dice.

### How to use this sheet.
The main idea behind this sheet is that you can set your attribues and the skills will auto populate based on the values.  So the idea is that you set your proficency and then your scores and the most of the sheet will fill itself out.

To save the sheet, click the bars in the upper right corner and a JSON will be downloaded.  Put this JSON (named savedSheet.json) into the sheet folder of the project.  Then you can open index.html and your sheet will populate based on the json.

To change the images upload your images into the imgs folder.  For the Character Apperance name the file Character.jpeg. For the Alliance Symbol name the file Symbol.jpeg.  If you want to change this you have to go into the css and change the field.

I have set up a default character to show how this form is ment to be used.  I hope it helps you in making characters and playing your games.

Please ignore any spelling mistakes.