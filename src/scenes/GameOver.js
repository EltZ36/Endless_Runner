class GameOver extends Phaser.Scene{
    constructor(){
        super("gameOverScene")
    }

    create(){
        keyRESET = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        keyMENU = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Game Over', {fontSize: 24}).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press R to play again or Press M to go back to the menu').setOrigin(0.5)
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyMENU)){
            this.scene.start('menuScene')
        }
        if(Phaser.Input.Keyboard.JustDown(keyRESET)){
            this.scene.start('playScene')
        } 
    }
}