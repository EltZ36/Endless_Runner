class Player extends Phaser.GameObjects.Sprite{
    constructor(scene){
        scene.add.existing(this)
        scene.physics.add.existing(this)
    }

    update(){

    }
}