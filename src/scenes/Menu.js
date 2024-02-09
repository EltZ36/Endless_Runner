class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene")
    }

    preload(){
        //preloading in the wall states
        this.load.image('wall_triangle', './assets/img/wall_triangle.png')
        this.load.image('wall_circle', './assets/img/wall_circle.png')
        this.load.image('wall_square', './assets/img/wall_square.png')
        this.load.image('wall_octagon', './assets/img/wall_octagon.png')
        this.load.image('wall_blank', './assets/img/wall_blank.png')
        //player states down below
        this.load.spritesheet('player', './assets/img/player.png', {
            frameWidth: 48,
            frameHeight: 48,
        })
        this.load.image('player_circle', './assets/img/player_circle.png')
        this.load.image('player_square', './assets/img/player_square.png')
        this.load.image('player_triangle', './assets/img/player_triangle.png')
    }

    create(){
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN) 
        keyONE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE)
        keyTWO = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO)
        keyTHREE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE)
        keyFOUR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR)
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Working Title for Endless Ranner', {fontSize: 24}).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press SPACE TO START').setOrigin(0.5)
        this.anims.create({
            key: 'wall-hit',
            frameRate: 5,
            repeat: -1, 
            frames: this.anims.generateFrameNumbers('player', {start: 0, end: 3})
        })
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.scene.start('playScene')
        }
    }
}