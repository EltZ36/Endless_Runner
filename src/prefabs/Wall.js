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
        this.setVelocityX(this.speed)
        this.setImmovable()
        this.octagon = false 
        this.triangle = false
        this.circle = false
        this.square = false 
        this.default = true 
    }

    update(){
        if(this.x < -this.width){
            this.x = 810
            this.y = Phaser.Math.Between(70, 570)
            this.setRandom()
        }
        /*if(this.isNew && this.x < (game.config.width/2)){
            this.currentScene.addWall(this.parent, this.speed)
            this.isNew = false
        }
        //if this.level == 50, increase the speed 
        //make sure the max speed doesn't reach like 200 
        if(this.x < -this.width){
            this.destroy()
        }*/
    }

    getShape(){
        let result = ""
        switch(this.default == true || this.default == false){
            case(this.default == true): 
                result = "default"
                return result; 
            case(this.square == true): 
                result = "square"
                return result; 
            case(this.triangle == true): 
                result = "triangle"
                return result;
            case(this.circle == true):
                result = "circle"
                return result;
            case(this.octagon == true):
                result = "octagon"
                return result; 
            default:
                return result; 
        }
    }

    setRandom(){
        var random
        //let random = 2
        if(this.currentScene.first_level_bump == true){
            random = Phaser.Math.Between(0, 4)
        }
        else{
            random = Phaser.Math.Between(0, 3)
        }
        switch(random){
            case 0:
                this.octagon = false 
                this.triangle = false
                this.circle = false
                this.square = false
                this.default = true 
                this.setTexture('wall_blank') 
                break;
            case 1:
                this.octagon = false 
                this.triangle = false
                this.circle = false
                this.square = true 
                this.default = false
                this.setTexture('wall_square') 
                break;
            case 2:
                this.octagon = false 
                this.triangle = true
                this.circle = false
                this.square = false 
                this.default = false
                this.setTexture('wall_triangle')
                break;
            case 3:
                this.octagon = false 
                this.triangle = false
                this.circle = true
                this.square = false 
                this.default = false
                this.setTexture('wall_circle')
                break;
            case 4:
                this.octagon = true 
                this.triangle = false
                this.circle = false
                this.square = false 
                this.default = false
                this.setTexture('wall_octagon')
                break;
            default:
                console.log('error, cannot set random')
                break;
        }
    }
}