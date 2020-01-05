
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

    update(game) {


        if(this.y + this.radius + this.dy > game.canvas.height || this.y - this.radius <= 0){
            this.dy = -this.dy;
        }

        if(this.x + this.radius + this.dx > game.canvas.width || this.x - this.radius <= 0){
            this.dx = -this.dx;
        }

        this.y += this.dy;
        this.x += this.dx;
        this.draw(game.c);
    }
}

export default Ball;


