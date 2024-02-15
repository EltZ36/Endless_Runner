class Wall extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, min_y, max_y, speed){
        //max btwn 570 and 70
        super(scene, x, y, 'wall_blank')
        this.x = x 
        this.y = y
        this.min_y = min_y
        this.max_y = max_y
        this.scene = scene
        this.speed = speed
        this.bounce = false
        this.isNew = true; 
        this.scene.add.existing(this)
        this.scene.physics.add.existing(this)
        this.setVelocityX(this.speed)
        this.setImmovable()
        this.octagon = false 
        this.triangle = false
        this.circle = false
        this.square = false 
        this.default = true 
        this.setBounce(0.5)
        this.setCollideWorldBounds(true)
    }

    update(){
        if(this.x < -this.width){
            this.x = 810
            if(this.scene.second_level_bump == false){
                this.y = Phaser.Math.Between(100, 560)
            }
            else{
                this.y = Phaser.Math.Between(this.min_y, this.max_y)
            }
            this.setRandom()
        }
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
        //let random = 4
        if(this.scene.first_level_bump == true){
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