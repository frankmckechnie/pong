import utils from './utils';
import Ball from './ball';
import Paddle from './paddle';
import Player from './player';
import options from './options';

import hit from '../assets/hit.mp3';
import end from '../assets/end-of-game.mp3';

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
};


const colors = ['#2185C5', '#7ECEFD', '#FF7F66','#ff8364', '#ffb677'];
const backgrounds = ['#ffffff', '#000000', '#261a67', '#e8ebf5', '#E3EAEF','#21232f'];

let backgroundGradient = c.createLinearGradient(0,0,0, canvas.height);
backgroundGradient.addColorStop(0,utils.randomColor(backgrounds));

// Implementation
const Game = {
    hook: document.querySelector('.game'),
    ball: undefined,
    c: c,
    canvas: canvas,
    leftPaddle: undefined,
    rightPaddle: undefined,
    playerOne: undefined,
    playerTwo: undefined,
    direction: true,
    computer: false,
    fields: {
        LEVEL:'level', 
        PLAYER: 'player'
    }
};

// Event Listeners
addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    Game.init(Game.computer);
});

// document.querySelector('.js-player-one').addEventListener('click', () => {
//     Game.computer = true;
//     Game.init();
//     Game.animate();
//     Game.hook.classList.remove('is-active');
//     canvas.classList.add('is-active');
// });

document.getElementById('js-game-options').addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const level = formData.get(Game.fields.LEVEL);
    const player = formData.get(Game.fields.PLAYER);
    
    const options = new Options(level, player);
    Game.init(options);
    Game.animate();
});

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

Game.playHit = () => {
    let audio = new Audio(hit);
    audio.play();
};

Game.reset = () => {

    let audio = new Audio(end);
    audio.play();

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

Game.init = (options) => {

    const ball = options.level.ball;
    const paddle = options.level.paddel;
    const wHalf =  canvas.width / 2;
    const hHalf =  canvas.height / 2;

    Game.ball = new Ball(wHalf, hHalf, ball.velocity.x, ball.velocity.y, ball.radius, utils.randomColor(colors));
    Game.leftPaddle = new Paddle(10, hHalf, paddle.width, paddle.height, paddle.speed, utils.randomColor(colors));
    Game.rightPaddle = new Paddle(canvas.width - 30, hHalf, paddle.width, paddle.height, paddle.speed, utils.randomColor(colors));
    
    Game.playerOne = new Player('Computer', 0, 10, 50);
    Game.playerOne.computer = Game.computer;
    Game.playerTwo = new Player('Frank', 0, canvas.width - 100, 50);

    Game.hook.classList.remove('is-active');
    canvas.classList.add('is-active');
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
