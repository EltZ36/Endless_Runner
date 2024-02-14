class Play extends Phaser.Scene{
    constructor(){
        super("playScene")
    }

    create(){
        //tile sprite
        this.physics.world.setBounds(0,30, 0, 570, false, false, true, true)
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
        this.gameOver = true 
        this.seconds = 0
        this.first_level_bump = false 
        this.second_level_bump = false 
        points = 0
        this.ySpeed = 0
        this.level_timer = this.time.addEvent({delay: 2000, 
            callback: this.increaseLevel,
            callbackScope: this,
            loop: true})
        //snippet from paddle parkour 
        this.bgm = this.sound.add('bgm', {
            mute: false,
            volume: 3,
            rate: 1,
            loop: true
        })
        this.bgm.play()
    }

    update(){ 
        //scrolling background
        this.background.tilePositionX += 2
        if(this.gameOver != false){
            this.player.update()
            this.current_wall.update()
        }
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
            this.gameOver = false 
            this.player.anims.play('wall-hit')
            this.player.setVelocity(0)
            this.current_wall.setVelocityX(20)
            this.current_wall.setVelocityY(0)
            this.clock = this.time.delayedCall(600, () =>{
                this.current_wall.setVelocityX(0)
            })
            this.switch = this.time.delayedCall(1280, () =>{
                this.scene.start('gameOverScene')
                this.sound.play('explosion', {volume: 0.5})
            })
        }
        else{
            points += 10
            this.sound.play('earn_pt', {volume: 0.5})
        }
    }

    increaseLevel(){
        this.seconds += 1
        this.level = this.seconds % 10
        if(this.level == 0 && this.first_level_bump == false && this.second_level_bump == false){
            this.first_level_bump = true 
            this.maxSpeed -= 20
            this.current_wall.setVelocityX(this.maxSpeed)
            this.background.tilePositionX += 8
            this.sound.play("level_change", {volume: 0.5})
        }
        else if(this.level == 0 && this.first_level_bump == true && this.second_level_bump == false){
            this.maxSpeed -= 30
            this.current_wall.setVelocityX(this.maxSpeed)
            this.background.tilePositionX += 15
            this.second_level_bump = true 
            this.sound.play("level_change", {volume: 0.5})
        }
        else if(this.level == 0 && this.second_level_bump == true){
            this.maxSpeed -= 50
            this.ySpeed -= 10
            this.current_wall.setVelocityY(this.ySpeed)
            this.current_wall.setVelocity(this.maxSpeed)
            this.background.tilePositionX += 20
            this.sound.play("level_change", {volume: 0.5})
        }
    }
}