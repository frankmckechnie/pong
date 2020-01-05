import utils from './utils';
import Ball from './ball';

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
};

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

const gravity = 1;
const friction = 0.88;

// Event Listeners
addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
});

addEventListener('click', () => {
    init();
});



// Implementation
const Game = {
    ball: undefined,
    c: c,
    canvas: canvas
};

Game.init = () => {

    let radius = 10;

    let bConf = {
        radius: radius,
        x: utils.randomIntFromRange(radius, canvas.width - radius),
        y: utils.randomIntFromRange(0, canvas.height - radius),
        dx: 4,
        dy: 4,
        color: utils.randomColor(colors)
    }
    Game.ball = new Ball(bConf.x, bConf.y, bConf.dx, bConf.dy, bConf.radius, bConf.color);
    
}

// Animation Loop
Game.animate = () => {
    requestAnimationFrame(Game.animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    Game.ball.update(Game);
}

Game.init();
Game.animate();





