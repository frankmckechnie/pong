
// Objects
class Paddle {
    constructor(x, y, width, height, dy, color) {
        this.x = x;
        this.y = y;
        this.dy = dy; 
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(c) {
        c.beginPath();
        c.rect(this.x, this.y, this.width, this.height);
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
        c.closePath();
    }

    up(){
        if(this.y - this.height <= 0){
            this.dy = -this.dy;
        }

        this.y += this.dy;
    }

    down(game){
        if(this.y + this.height > game.canvas.height){
            this.dy = -this.dy;
        }

        this.y += this.dy;
    }

    update(game) {


        // if(this.y + this.radius + this.dy > game.canvas.height || this.y - this.radius <= 0){
        //     this.dy = -this.dy;
        // }

        // if(this.x + this.radius + this.dx > game.canvas.width || this.x - this.radius <= 0){
        //     this.dx = -this.dx;
        // }

        // this.y += this.dy;
        // this.x += this.dx;
        this.draw(game.c);
    }
}

export default Paddle;


