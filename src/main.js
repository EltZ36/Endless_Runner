/*Elton Zeng
Hours committed: ~25 hours

Sources: 
From Paddle Parkour: 
lines 15 to 19 in Play.js used for my bgm as well for my Play.js(47 - 53)
lines 73 to 78 in Play.js for the difficulty increase for my Play.js (97 - 123)
lines 118 to 124 in Play.js also for the difficulty increase for my Play.js (97 - 123)
the lines are 133 to 142 in Play.js used in my function point_gain on my Play.js (134 - 155)
line 256 in Play.js also used in mine to switch to the gameover screen on my Play.js (74)
lines 19 to 22 were referenced in my update in my wall.js (lines 27 - 34) but I didn't use the addBarrier() method. 

For the texture atlas, I referenced a youtube video (link: https://www.youtube.com/watch?v=9sWrGohw9qo) by jest array. I went from 00:00 to 02:41 for the code and to learn 
more about what a texture atlas is. The texture atlas snippet is on lines 40 - 48 of my Menu.js

For the credits, they are on the gameover.js screen. 

Creative tilt (technical):
For the technically interesting, I think I am proud to be able have done a texture atlas and having to look online for the sources to do it made me learn more about what a texture atlas is and the similarities it had to spritesheets.
I had to look around the class canvas for the resources as well as the youtube video and still have trouble with me going back and forth between the texture program and my current program in order to get it to work. 
After all the work, the texture atlas was easy to implement and simiar to a sprite but I had difficulty trying to get it to work and display the animations properly which is why I think it was technically interesting as I had to learn it
myself and it is interesting to think about fitting multiple differing sprites as opposed to just a uniform spritesheet. 

Creative tilt (form):
I also thought that being able to run the symbol matching without a state machine to be interesting and I wonder how the game would have went with a statemachine and what difficulties I would have had if I had implemented the statemachine. 
For an endless runner, I never see any type of pattern matching especially the ones discussed in class so I decided to make a game around that. I also thought the idea of having holes in the walls reminded me of this show that I watched as a kid called "Hole in the Wall" and I thought it was something to think about.
I am also proud of being able to draw different ships based on ships and try to see what patterns I can do on the ships and I think it's something I could have explored more of with this game. 
*/
//have a config object beforehand to get the settings we want 
let config = {
    type: Phaser.AUTO, 
    width: 800, 
    height: 640,
    physics:{
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    scene: [Menu, Play, GameOver]
}
//for the arrow keys and pressing space to start the game
let game = new Phaser.Game(config)
let keySPACE, keyUP, keyDOWN, keyONE, keyTWO, keyTHREE, keyFOUR, keyRESET, keyMENU
//set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3
let highScore
let points 
let newHighScore = false

