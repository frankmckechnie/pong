import utils from './utils';
import Ball from './ball';
import Paddle from './paddle';
import Player from './player';
import Options from './options';

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


const colors = ['#2185C5', '#7ECEFD', '#FF7F66', '#ff8364', '#ffb677'];
const backgrounds = ['#ffffff', '#000000', '#261a67', '#e8ebf5', '#E3EAEF', '#21232f'];

let backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height);
backgroundGradient.addColorStop(0, utils.randomColor(backgrounds));

// Implementation
const Game = {
    form: document.getElementById('js-game-options'),
    hook: document.querySelector('.game'),
    ball: undefined,
    c: c,
    canvas: canvas,
    leftPaddle: undefined,
    rightPaddle: undefined,
    playerOne: undefined,
    playerTwo: undefined,
    direction: true,
    fields: {
        LEVEL: 'level',
        PLAYER: 'player',
        MUSIC: 'music'
    },
    options: undefined,
    audio: {
        hit: new Audio(hit),
        end: new Audio(end)
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
    if(Game.options){
        Game.init(Game.options);
    }
});


Game.form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const level = formData.get(Game.fields.LEVEL);
    const player = formData.get(Game.fields.PLAYER);
    const music = formData.get(Game.fields.MUSIC);

    console.log(music);

    Game.options = new Options(Game, level, player, music);
    Game.init(Game.options);
    Game.animate();
    console.log(Game.options.music);
    Game.options.music.play();
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
    Game.audio.hit.play();
};

Game.reset = () => {
    Game.audio.end.play();

    const ball =  Game.options.level.ball;
    let direction = (Game.direction) ? -ball.velocity.x : ball.velocity.x;
    Game.direction = (Game.direction) ? false : true;

    const wHalf = canvas.width / 2;
    const hHalf = canvas.height / 2;

    Game.ball = new Ball(wHalf, hHalf, direction, ball.velocity.y, ball.radius, utils.randomColor(colors));

};

Game.init = (options) => {
    const ball = options.level.ball;
    const paddle = options.level.paddle;
    const wHalf = canvas.width / 2;
    const hHalf = canvas.height / 2;

    Game.ball = new Ball(wHalf, hHalf, ball.velocity.x, ball.velocity.y, ball.radius, utils.randomColor(colors));
    Game.leftPaddle = new Paddle(10, hHalf, paddle.width, paddle.height, paddle.speed, utils.randomColor(colors));
    Game.rightPaddle = new Paddle(canvas.width - 30, hHalf, paddle.width, paddle.height, paddle.speed, utils.randomColor(colors));

    Game.playerOne = new Player('Player One', 0, 10, 50, options.mode.computer);
    Game.playerTwo = new Player('Player Two', 0, canvas.width - 125, 50, false);

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