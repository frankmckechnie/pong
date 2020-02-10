


import hit from '../assets/hit.mp3';
import end from '../assets/end-of-game.mp3';
import MusicPlayer from './MusicPlayer';

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
    audio: {
        hit: new Audio(hit),
        end: new Audio(end)
    }
};

export default Game;