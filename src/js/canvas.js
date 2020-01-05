import utils from './utils';
import Ball from './ball';
import Paddle from './paddle';


const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
};

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

// Implementation
const Game = {
    ball: undefined,
    c: c,
    canvas: canvas,
    leftPaddle: undefined,
    rightPaddle: undefined
};

// Event Listeners
addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    Game.init();
});

addEventListener('click', () => {
    Game.init();
});

addEventListener('keydown', event => {
    if (event.isComposing || event.keyCode === 229) {
        return;
    }

    switch(event.keyCode) {
    case 37: // left
        break;

    case 38: // up
        break;

    case 39: // right
        break;

    case 40: // down
        break;

    default: return; // exit this handler for other keys
    }
// do something
});



Game.init = () => {

    let radius = 10;

    let bConf = {
        radius: radius,
        x: utils.randomIntFromRange(radius, canvas.width - radius),
        y: utils.randomIntFromRange(0, canvas.height - radius),
        dx: 4,
        dy: 4,
        color: utils.randomColor(colors)
    };

    Game.ball = new Ball(bConf.x, bConf.y, bConf.dx, bConf.dy, bConf.radius, bConf.color);
    
    Game.leftPaddle = new Paddle(10, canvas.height / 2, 20, 40, 5, utils.randomColor(colors));
    Game.rightPaddle = new Paddle(canvas.width - 10, canvas.height / 2, 20, 40, 5, utils.randomColor(colors));

};

// Animation Loop
Game.animate = () => {
    requestAnimationFrame(Game.animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    Game.ball.update(Game);
    Game.leftPaddle.update(Game);
    Game.rightPaddle.update(Game);
};

Game.init();
Game.animate();





