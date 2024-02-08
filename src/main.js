//have a config object beforehand to get the settings we want 
let config = {
    type: Phaser.AUTO, 
    width: 640, 
    height: 480,
    physics:{
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    scene: [Menu, Play, GameOver]
}
//for the arrow keys and pressing space to start the game
let keySPACE, keyRIGHT, keyLEFT, keyONE, keyTWO, keyTHREE, keyFOUR
let game = new Phaser.Game(config)
//set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3

