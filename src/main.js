//have a config object beforehand to get the settings we want 
let config = {
    type: Phaser.AUTO, 
    width: 800, 
    height: 640,
    physics:{
        default: "arcade",
        //arcade: {
           // debug: true
        //}
    },
    scene: [Menu, Play, GameOver]
}
//for the arrow keys and pressing space to start the game
let game = new Phaser.Game(config)
let keySPACE, keyUP, keyDOWN, keyONE, keyTWO, keyTHREE, keyFOUR, keyRESET, keyMENU
//set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3

