class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene")
    }

    preload(){
        //preloading in the wall states
        this.load.image('wall_triangle', './assets/triangle.png')
        this.load.image('wall_circle', './assets/circle.png')
        this.load.image('wall_square', './assets/square.png')
        this.load.image('wall_blank', './assets/wall.png')
        //player states down below
    }

    create(){

    }

    init(){

    }

    update(){

    }
}