class Wall extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, speed){
        //max btwn 570 and 70
        super(scene, 810, Phaser.Math.Between(70, 570), 'wall_blank')
        this.currentScene = scene
        this.speed = speed
        this.bounce = false
        this.isNew = true; 
        this.currentScene.add.existing(this)
        this.currentScene.physics.add.existing(this)
        this.setVelocityX(speed)
        this.setImmovable()
    }

    update(){
        if(this.isNew && this.x < (game.config.width/2)){
            this.currentScene.addWall(this.parent, this.speed)
            this.isNew = false
        }
        //if this.level == 50, increase the speed 
        //make sure the max speed doesn't reach like 200 
        if(this.x < -this.width){
            this.destroy()
        }
    }
}