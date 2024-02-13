class Player extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, speed){
        super(scene, 60, 250, 'player')
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.setImmovable()
        this.setCollideWorldBounds(true);
        this.speed = speed
        this.hit = false
        this.triangle = false
        this.circle = false 
        this.square = false 
        this.default = false
        this.setDragY(80)
        this.setBounce(0.1) 
    }

    update(){
        if(keyUP.isDown){
            this.body.velocity.y -= 20
        }
        if(keyDOWN.isDown){
            this.body.velocity.y += 20
        }
        if(keyONE.isDown){
            this.setTexture('player')
            this.triangle = false
            this.circle = false 
            this.square = false 
            this.default = true
        }
        if(keyTWO.isDown){
            this.setTexture('player_circle')
            this.triangle = false
            this.circle = true 
            this.square = false 
            this.default = false
        }
        if(keyTHREE.isDown){
            this.setTexture('player_square')
            this.triangle = false
            this.circle = false 
            this.square = true 
            this.default = false
        }
        if(keyFOUR.isDown){
            this.setTexture('player_triangle')
            this.triangle = true 
            this.circle = false 
            this.square = false 
            this.default = false
        }
    }

    getShape(){
        //could be done with a state machine instead but given that there are almost no changes to the different states. 
        //ie: speed increase or some such, it doesn't really make sense to do it and it's a lot less work to check for something of that nature
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
            default:
                return result; 
        }
    }
}
