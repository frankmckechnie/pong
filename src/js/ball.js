import utils from './utils';

// Objects
class Ball {
    constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dy = dy; 
        this.dx = dx;
        this.radius = radius;
        this.color = color;
    }

    draw(c) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
        c.closePath();
    }

    reset(game){
        game.reset();
    }

    update(game) {


        if(this.y + this.radius + this.dy > game.canvas.height || this.y - this.radius <= 0){
            this.dy = -this.dy;
        }

        // left paddle
        if(this.x - this.radius <= 0){
            game.playerOne.addScore();
            return this.reset(game);
        }

        // right paddle
        if(this.x + this.radius + this.dx > game.canvas.width) {
            game.playerTwo.addScore();
            return this.reset(game);
        } 

        if(utils.circleRectCollision(this.x, this.y, this.radius, game.rightPaddle.x,  game.rightPaddle.y, game.rightPaddle.width + Math.abs(this.dx), game.rightPaddle.height) ){
            this.dx = -this.dx;
        }

        if(utils.circleRectCollision(this.x, this.y, this.radius, game.leftPaddle.x,  game.leftPaddle.y, game.leftPaddle.width + Math.abs(this.dx), game.leftPaddle.height)){
            this.dx = -this.dx;
        }

        this.y += this.dy;
        this.x += this.dx;
        this.draw(game.c);


        
    }
}

export default Ball;


