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
        this.current_wall = new Wall(this, this.maxSpeed)
        /*this.wallGroup = this.add.group({
            runChildUpdate: true
        })
        this.addWall()*/
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
        /*this.physics.add.collider(
            this.player,
            this.wallGroup,
            this.collideWall,
            null,
            this,
        )*/ 
        this.physics.add.collider(
            this.player,
            this.current_wall,
            this.collideWall,
            null,
            this 
        )
    }

    update(){ 
        this.player.update()
        this.current_wall.update()
        //console.log(this.current_wall.getShape())
    }

    //could do this in wall.update() instead for the boom animation
    //add in collison checker
    addWall(){
        //let speed = 20; 
        let new_wall = new Wall(this, this.maxSpeed)
        new_wall.setRandom()
        this.wallGroup.add(new_wall)
        //wallGroup.add(new_wall)
    }

    collideWall(){
        if((this.current_wall.getShape() != "octagon") && ((this.current_wall.getShape() != this.player.getShape())  ||  (this.current_wall.getShape() == "default" && this.player.getShape() == "default"))){
            this.player.anims.play('wall-hit')
            this.switch = this.time.delayedCall(1000, () =>{
                this.scene.start('gameOverScene')
            })
            console.log(this.current_wall.getShape())
        }
    }
}