import Game from './Game';
import utils from './utils';
import Ball from './ball';
import Paddle from './paddle';
import Player from './player';
import './Events';
import './keyboard';

const colors = ['#2185C5', '#7ECEFD', '#FF7F66', '#ff8364', '#ffb677'];
const backgrounds = ['#ffffff', '#000000', '#261a67', '#e8ebf5', '#E3EAEF', '#21232f'];

let backgroundGradient = Game.c.createLinearGradient(0, 0, 0, Game.canvas.height);
backgroundGradient.addColorStop(0, utils.randomColor(backgrounds));

Game.canvas.width = innerWidth;
Game.canvas.height = innerHeight;

Game.playHit = () => {
    Game.audio.hit.play();
};

Game.reset = () => {
    Game.audio.end.play();

    const ball =  Game.options.level.ball;
    let direction = (Game.direction) ? -ball.velocity.x : ball.velocity.x;
    Game.direction = (Game.direction) ? false : true;

    const wHalf = Game.canvas.width / 2;
    const hHalf = Game.canvas.height / 2;

    Game.ball = new Ball(wHalf, hHalf, direction, ball.velocity.y, ball.radius, utils.randomColor(colors));

};

Game.init = (options) => {
    const ball = options.level.ball;
    const paddle = options.level.paddle;
    const wHalf = Game.canvas.width / 2;
    const hHalf = Game.canvas.height / 2;

    Game.ball = new Ball(wHalf, hHalf, ball.velocity.x, ball.velocity.y, ball.radius, utils.randomColor(colors));
    Game.leftPaddle = new Paddle(10, hHalf, paddle.width, paddle.height, paddle.speed, utils.randomColor(colors));
    Game.rightPaddle = new Paddle(Game.canvas.width - 30, hHalf, paddle.width, paddle.height, paddle.speed, utils.randomColor(colors));

    Game.playerOne = new Player('Player One', 0, 10, 50, options.mode.computer);
    Game.playerTwo = new Player('Player Two', 0, Game.canvas.width - 125, 50, false);

    Game.hook.classList.remove('is-active');
    Game.canvas.classList.add('is-active');
};

// Animation Loop
Game.animate = () => {
    requestAnimationFrame(Game.animate);
    Game.c.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
    Game.c.fillStyle = backgroundGradient;
    Game.c.fillRect(0, 0, Game.canvas.width, Game.canvas.height);


    Game.ball.update(Game);
    Game.leftPaddle.update(Game);
    Game.rightPaddle.update(Game);
    Game.playerOne.update(Game);
    Game.playerTwo.update(Game);
};