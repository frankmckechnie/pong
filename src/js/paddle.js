
// Objects
class Paddle {
    constructor(x, y, width, height, dy, color) {
        this.x = x;
        this.y = y;
        this.dy = dy; 
        this.width = width;
        this.height = height;
        this.color = color;
        this.up = false;
        this.down = false;
        this.border = 10;
    }

    draw(c) {
        c.beginPath();
        c.rect(this.x, this.y, this.width, this.height);
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
        c.closePath();
    }

    moveUp(){
        if(!this.up) return;
        if(this.y - this.dy - this.border <= 0){
            return this.y = 0 + this.border;
        } 
        this.y += -this.dy;
    }

    moveDown(game){
        if(!this.down) return; 
        if(this.y + (this.height + this.dy + this.border) >= game.canvas.height){
            return this.y = game.canvas.height - this.height - this.border;
        }       
        this.y += this.dy;
    }

    update(game) {

        this.moveUp(game);
        this.moveDown(game);
    
        this.draw(game.c);
    }
}

export default Paddle;


