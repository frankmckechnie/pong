import utils from './utils';
import Ball from './ball';
import Paddle from './paddle';
import Player from './player';


const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
};

const colors = ['#2185C5', '#7ECEFD', '#FF7F66'];
const backgrounds = ['#ffffff', '#000000', '#261a67', '#e8ebf5'];

let backgroundGradient = c.createLinearGradient(0,0,0, canvas.height);
backgroundGradient.addColorStop(0,utils.randomColor(backgrounds));

// Implementation
const Game = {
    ball: undefined,
    c: c,
    canvas: canvas,
    leftPaddle: undefined,
    rightPaddle: undefined,
    playerOne: undefined,
    playerTwo: undefined,
    direction: true
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

// addEventListener('click', () => {
//     Game.init();
// });

addEventListener('keydown', event => {
    if (event.isComposing || event.keyCode === 229) {
        return;
    }

    switch (event.keyCode) {
    case 87: // left up
        Game.leftPaddle.up = true;
        break;
    case 83: // left down
        Game.leftPaddle.down = true;
        break;

    case 38: // upP
        Game.rightPaddle.up = true;
        break;
    case 40: // down
        Game.rightPaddle.down = true;
        break;

    default:
        return; // exit this handler for other keys
    }
    // do something
});

addEventListener('keyup', event => {
    if (event.isComposing || event.keyCode === 229) {
        return;
    }

    switch (event.keyCode) {
    case 87: // left up
        Game.leftPaddle.up = false;
        break;
    case 83: // left down
        Game.leftPaddle.down = false;
        break;
    case 38: // up
        Game.rightPaddle.up = false;
        break;
    case 40: // down
        Game.rightPaddle.down = false;
        break;

    default:
        return; // exit this handler for other keys
    }
    // do something
});


Game.reset = () => {

    let dx =  utils.randomIntFromRange(4.5, 6.5);
    let direction =  (Game.direction) ? -dx : dx;
    Game.direction = (Game.direction) ? false : true;

    let bConf = {
        radius: 10,
        x: canvas.width / 2,
        y: canvas.height / 2,
        dx: direction,
        dy: utils.randomIntFromRange(4, 6.5),
        color: utils.randomColor(colors)
    };

    Game.ball = new Ball(bConf.x, bConf.y, bConf.dx, bConf.dy, bConf.radius, bConf.color);
};

Game.init = () => {



    let bConf = {
        radius: 10,
        x: canvas.width / 2,
        y: canvas.height / 2,
        dx: utils.randomIntFromRange(4.5, 6.5),
        dy: utils.randomIntFromRange(4, 6.5),
        color: utils.randomColor(colors)
    };

    Game.ball = new Ball(bConf.x, bConf.y, bConf.dx, bConf.dy, bConf.radius, bConf.color);
    Game.leftPaddle = new Paddle(10, canvas.height / 2, 20, 40, 8, utils.randomColor(colors));
    Game.rightPaddle = new Paddle(canvas.width - 30, canvas.height / 2, 20, 40, 8, utils.randomColor(colors));
    Game.playerOne = new Player('Computer', 0, 10, 50);
    Game.playerOne.computer = true;
    Game.playerTwo = new Player('Frank', 0, canvas.width - 100, 50);

};

// Animation Loop
Game.animate = () => {
    requestAnimationFrame(Game.animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = backgroundGradient;
    c.fillRect(0, 0, canvas.width, canvas.height);


    Game.ball.update(Game);
    Game.leftPaddle.update(Game);
    Game.rightPaddle.update(Game);
    Game.playerOne.update(Game);
    Game.playerTwo.update(Game);
};

Game.init();
Game.animate();