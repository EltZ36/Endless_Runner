class Player extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, speed){
        super(scene, 60, 250, 'player_states', 'player00.png')
        this.scene = scene 
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.setImmovable()
        this.setCollideWorldBounds(true);
        this.speed = speed
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
        if(keyONE.isDown && this.default != true){
            this.setTexture('player_states', 'player00.png')
            this.triangle = false
            this.circle = false 
            this.square = false 
            this.default = true
            this.scene.sound.play('default_switch', {volume: 0.5})
        }
        if(keyTWO.isDown && this.circle != true){
            this.setTexture('player_states', 'player04.png')
            this.triangle = false
            this.circle = true 
            this.square = false 
            this.default = false
            this.scene.sound.play('circle_switch', {volume: 0.5})
        }
        if(keyTHREE.isDown && this.square != true){
            this.setTexture('player_states', 'player05.png')
            this.triangle = false
            this.circle = false 
            this.square = true 
            this.default = false
            this.scene.sound.play('square_switch', {volume: 0.5})
        }
        if(keyFOUR.isDown  && this.triangle != true){
            this.setTexture('player_states', 'player06.png')
            this.triangle = true 
            this.circle = false 
            this.square = false 
            this.default = false
            this.scene.sound.play('triangle_switch', {volume: 0.5})
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
