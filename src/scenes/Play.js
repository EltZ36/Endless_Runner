class Play extends Phaser.Scene{
    constructor(){
        super("playScene")
    }

    create(){
        //tile sprite 
        this.background = this.add.tileSprite(0, 0, 800, 640, 'background').setOrigin(0,0)
        this.maxSpeed = -500
        this.player = new Player(this, 200)
        //maybe have to add in random code in here or a state machine instead
        this.wallGroup = this.add.group({
            runChildUpdate: true
        })
        this.addWall()
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN) 
        keyONE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE)
        keyTWO = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO)
        keyTHREE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE)
        keyFOUR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR)
        this.anims.create({
            key: 'wall-hit',
            frameRate: 4,
            repeat: -1, 
            frames: this.anims.generateFrameNumbers('player', {start: 0, end: 3})
        })
        this.physics.add.collider(
            this.player,
            this.wallGroup,
            this.collideWall,
            null,
            this,
        )
    }

    update(){ 
        this.player.update()
    }

    //could do this in wall.update() instead for the boom animation
    addWall(){
        //let speed = 20; 
        let new_wall = new Wall(this, this.maxSpeed)
        this.wallGroup.add(new_wall)
    }
    //add in collison checker

    collideWall(){
        console.log('hit')
        this.player.anims.play('wall-hit')
        this.switch = this.time.delayedCall(1000, () =>{
            this.scene.start('gameOverScene')
        })
    }
}