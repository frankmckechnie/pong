class Player{

    constructor(name, score, x, y, computer) {
        this.name = name;
        this.score = score;
        this.x = x;
        this.y = y;
        this.computer = computer;
    }

    draw(c) {
        c.font = '18px Arial';
        c.fillText(this.name + ': ' + this.score, this.x, this.y);
    }

    update(game){
        (this.computer) ? this.automate(game) : '';
        this.draw(game.c);
    }

    addScore(){
        this.score ++;
    }

    automate(game){
        game.leftPaddle.y =+ game.ball.y * 0.99;
    }


}

export default Player;