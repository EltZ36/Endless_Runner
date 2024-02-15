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
        this.current_wall = new Wall(this, 810, Phaser.Math.Between(100, 280), 100, 280, this.maxSpeed)
        this.second_wall = new Wall(this, 810, Phaser.Math.Between(420, 560), 420, 560, this.maxSpeed)
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN) 
        keyONE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE)
        keyTWO = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO)
        keyTHREE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE)
        keyFOUR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR)
        this.collide = this.physics.add.collider(
            this.player,
            this.current_wall,
            this.collideWall,
            null,
            this 
        )
        this.collide2 = this.physics.add.collider(
            this.player, 
            this.second_wall,
            this.collideWall,
            null,
            this 
        )
        //this.collide.overlapOnly()
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
        this.background.tilePositionX += 5
        if(this.gameOver != false){
            this.player.update()
            this.current_wall.update()
            if(this.second_level_bump == true){
                this.second_wall.update()
            }
        }
    }

    collideWall(player, wall){
        if((wall.getShape() != "octagon") && ((wall.getShape() != player.getShape())  ||  (wall.getShape() == "default" && player.getShape() == "default"))){
            this.gameOver = false 
            player.anims.play('wall-hit')
            player.setVelocity(0)
            wall.setVelocityX(20)
            wall.setVelocityY(0)
            this.clock = this.time.delayedCall(600, () =>{
                wall.setVelocityX(0)
            })
            //play sound after the ship breaks 
            this.switch = this.time.delayedCall(1280, () =>{
                this.scene.start('gameOverScene')
                this.sound.play('explosion', {volume: 0.5})
            })
        }
        //decrement points if its an octagon
        if((wall.getShape() == "octagon")){
            points -= 5
            this.point_gain(0, wall)
            if(points < 0){
                points = 0
            }
        }
        //increment points if its the correct shape
        if( (wall.getShape() != "octagon") && (wall.getShape() == player.getShape()) && (wall.getShape() != "default" && player.getShape() != "default")){
            points += 10
            //add dissappearing text 
            this.point_gain(1, wall)
        }
    }

    increaseLevel(){
        this.seconds += 1
        this.level = this.seconds % 10
        if(this.level == 0 && this.first_level_bump == false && this.second_level_bump == false){
            this.first_level_bump = true 
            this.maxSpeed -= 20
            this.current_wall.setVelocityX(this.maxSpeed)
            this.second_wall.setVelocityX(this.maxSpeed)
            this.sound.play("level_change", {volume: 0.5})
        }
        else if(this.level == 0 && this.first_level_bump == true && this.second_level_bump == false){
            this.maxSpeed -= 30
            this.current_wall.setVelocityX(this.maxSpeed)
            this.second_wall.setVelocityX(this.maxSpeed)
            this.first_level_bump = false 
            this.second_level_bump = true 
            this.sound.play("level_change", {volume: 0.5})
        }
        else if(this.level == 0 && this.second_level_bump == true){
            this.maxSpeed -= 80
            this.ySpeed -= 10
            this.current_wall.setVelocityY(this.ySpeed)
            this.current_wall.setVelocityX(this.maxSpeed)
            this.second_wall.setVelocityY(this.ySpeed)
            this.second_wall.setVelocityX(this.maxSpeed)
            this.sound.play("level_change", {volume: 0.5})
        }
    }

    point_gain(type, wall){
        let current_wall_x_position = wall.x
        let current_wall_y_position = wall.y
        var pts;
        if(type == 0){
            pts = this.add.text(current_wall_x_position + 60, current_wall_y_position, '-5')
            this.sound.play('lose_pt', {volume: 0.5})
        }
        if(type != 0){
            pts = this.add.text(current_wall_x_position + 60, current_wall_y_position, '+10')
            this.sound.play('earn_pt', {volume: 0.5})
        }
        this.dissappear = this.tweens.add({
            targets: [pts],
            duration: 10000,
            onComplete: function(){
                pts.destroy()
            }
        })
        wall.setX(810)
        if(this.second_level_bump != true){
            wall.setY(Phaser.Math.Between(100, 560))
        }
        else{
            wall.setY(Phaser.Math.Between(wall.min_y, wall.max_y))
        }
    }
}