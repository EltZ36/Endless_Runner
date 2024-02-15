class GameOver extends Phaser.Scene{
    constructor(){
        super("gameOverScene")
    }

    create(){
        keyRESET = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        keyMENU = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)

        //code snippet from paddle parkour 
        if(localStorage.getItem('hiscore') != null) {
            let storedScore = parseInt(localStorage.getItem('hiscore'));
            //console.log(`storedScore: ${storedScore}`);
            // see if current score is higher than stored score
            if(points > storedScore) {
                //console.log(`New high score: ${level}`);
                localStorage.setItem('hiscore', points.toString());
                highScore = points;
                newHighScore = true;
            } else {
                //console.log('No new high score :/');
                highScore = parseInt(localStorage.getItem('hiscore'));
                newHighScore = false;
            }
        } 
        else {
            //console.log('No high score stored. Creating new.');
            highScore = points;
            localStorage.setItem('hiscore', highScore.toString());
            newHighScore = true;
        }
        this.add.text(game.config.width/2, game.config.height/2 - 70, 'Game Over', {fontSize: 50}).setOrigin(0.5)
        if(newHighScore){
            this.add.text(game.config.width/2, game.config.height/2 + borderUISize - 20, `New High Score!`, {fontSize: 20}).setOrigin(0.5)
        }
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize - 50, `Your Highest Score: ${highScore}`, {fontSize: 20}).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, `Your Score: ${points}`, {fontSize: 20}).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding + 40, 'Press R to play again or Press M to go back to the menu', {fontSize: 18}).setOrigin(0.5)

        this.add.text(game.config.width/2, game.config.height/2 - borderUISize + borderPadding + 240, 'Credits:').setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize + borderPadding + 270, 'BGM is "Sci-fi Ambient Music" by Yevhenii Kovalenko on PixaBay').setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize + borderPadding + 290, 'Sound effects created on jfsxr').setOrigin(0.5)
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