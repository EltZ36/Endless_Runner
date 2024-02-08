class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene")
    }

    preload(){
        //preloading in the wall states
        this.load.image('wall_triangle', './assets/wall_triangle.png')
        this.load.image('wall_circle', './assets/wall_circle.png')
        this.load.image('wall_square', './assets/wall_square.png')
        this.load.image('wall_octagon', './assets/wall_octagon.png')
        this.load.image('wall_blank', './assets/wall_blank.png')
        //player states down below
        this.load.image('player', './assets/player.png')
        this.load.image('player_circle', './assets/player_circle.png')
        this.load.image('player_square', './assets/player_square.png')
        this.load.image('player_triangle', './assets/player_triangle.png')
    }

    create(){
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT) 
    }

    init(){

    }

    update(){

    }
}