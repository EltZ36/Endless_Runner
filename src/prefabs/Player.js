class Player extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, speed){
        super(scene, 60, 250, 'player')
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.setImmovable()
        this.speed = speed
        this.hit = false
        this.triangle = false
        this.circle = false 
        this.square = false 
        this.default = false 
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyUP)){
            this.body.velocity.x += 20
        }
        if(Phaser.Input.Keyboard.JustDown(keyDOWN)){
            this.body.velocity.y -= 20
        }
    }

    getHit(){
        return this.hit
    }
}
