


import hit from '../assets/hit.mp3';
import end from '../assets/end-of-game.mp3';
import MusicPlayer from './MusicPlayer';
import Menu from './menu';

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

// Implementation
const Game = {
    form: document.getElementById('js-game-options'),
    hook: document.querySelector('.game'),
    musicFields: document.querySelectorAll('.js-music-preview'),
    ball: undefined,
    canvas: canvas,
    c: c,
    musicPlayer: new MusicPlayer(),
    leftPaddle: undefined,
    rightPaddle: undefined,
    playerOne: undefined,
    playerTwo: undefined,
    direction: true,
    options: undefined,
    isPaused: false,
    audio: {
        hit: new Audio(hit),
        end: new Audio(end)
    }
};

Game.menu = new Menu(Game);

export default Game;