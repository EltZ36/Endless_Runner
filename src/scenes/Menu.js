class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene")
    }

    preload(){
        //player texture atlas
        this.load.atlas('player_states', './assets/img/player_states.png', './assets/img/player_states.json')
       //preloading in the wall states
        this.load.image('background', './assets/img/background.png')
        this.load.image('wall_triangle', './assets/img/wall_triangle.png')
        this.load.image('wall_circle', './assets/img/wall_circle.png')
        this.load.image('wall_square', './assets/img/wall_square.png')
        this.load.image('wall_octagon', './assets/img/wall_octagon.png')
        this.load.image('wall_blank', './assets/img/wall_blank.png')
        //load in the audio 
        this.load.audio('circle_switch', './assets/audio/circle_switch.wav')
        this.load.audio('default_switch','./assets/audio/default_switch.wav')
        this.load.audio('square_switch', './assets/audio/square_switch.wav')
        this.load.audio('triangle_switch','./assets/audio/triangle_switch.wav')
        //bgm credit: Music by <a href="https://pixabay.com/users/stereocode-31360109/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=183269">Yevhenii Kovalenko</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=183269">Pixabay</a>
        //thinking time: music for videos
        this.load.audio('bgm', './assets/audio/background_music.mp3')
        this.load.audio('earn_pt', './assets/audio/pickupCoin.wav')
        this.load.audio('explosion', './assets/audio/explosion.wav')
        this.load.audio('level_change', './assets/audio/level_change.wav')
    }

    create(){
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Working Title for Endless Ranner', {fontSize: 24}).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize, 'Press 1, 2, 3, 4 to switch shapes and match the shape on the wall. Blank walls cannot be matched.', {fontSize: 12}).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding + 50, 'Press Space to Start').setOrigin(0.5)
        //code gotten at from 00:00 to 2:18 at https://www.youtube.com/watch?v=9sWrGohw9qo by youtuber jest array 
        this.anims.create({
            key: "wall-hit",
            frameRate: 5,
            frames: this.anims.generateFrameNames("player_states", {
                prefix: "player0",
                suffix: ".png",
                start: 0,
                end: 3
            })
        })
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.scene.start('playScene')
        }
    }
}