/*Elton Zeng
Hours committed: 20-30 hours
Sources: used snippets of code from paddle parkour  

the lines are 133 to 142 on Play.js used in my function point gain on lines 134 - 155


youtube video: 

Creative tilt:
For the technically interesting, I think I am proud to be able have done a texture atlas and having to look online for the sources to do it made me learn more about what a texture atlas is and the similarities it had to spritesheets.
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

