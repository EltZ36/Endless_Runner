class Play extends Phaser.Scene{
    constructor(){
        super("playScene")
    }

    create(){
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
            frameRate: 5,
            repeat: -1, 
            frames: this.anims.generateFrameNumbers('player', {start: 0, end: 3})
        })
    }

    update(){ 
        this.player.update()
    }

    addWall(){
        //let speed = 20; 
        let new_wall = new Wall(this, this.maxSpeed)
        this.wallGroup.add(new_wall)
    }
    //add in collison checker

    collideWall(){
        
    }
}