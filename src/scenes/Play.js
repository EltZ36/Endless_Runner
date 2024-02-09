class Play extends Phaser.Scene{
    constructor(){
        super("playScene")
    }

    create(){
        this.maxSpeed = 200
        this.player = new Player(this, 200)
        //maybe have to add in random code in here or a state machine instead
        this.wallGroup = this.add.group({
            runChildUpdate: true
        })
        this.addWall()
    }

    update(){ 
        while(this.player.getHit() == false){
            this.player.update()
        }
        if(this.player.getHit() == true){
            this.player.anims.play('wall-hit')
        }
    }

    addWall(){
        //let speed = 20; 
        let new_wall = new Wall(this, this.speed - 200)
        this.wallGroup.add(new_wall)
    }
    //add in collison checker
}