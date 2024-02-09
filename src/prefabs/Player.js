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
    }
}
