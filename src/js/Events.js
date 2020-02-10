import Game from './Game';
import {mouse} from './utils';
import GameFields from './GameFields';
import Options from './options';

/**
 * All event listers
 * 
 * for keyboard events @see './keyboard.js'
 */

/**
 * Mouse tracking event 
 */
addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

/**
 * Resize event, reset canvas 
 */
addEventListener('resize', () => {
    Game.canvas.width = innerWidth;
    Game.canvas.height = innerHeight;
    if(Game.options){
        Game.init(Game.options);
    }
});


/**
 * Form submit event, game start
 */
Game.form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const level = formData.get(GameFields.LEVEL);
    const player = formData.get(GameFields.PLAYER);
    const music = formData.get(GameFields.MUSIC);

    Game.options = new Options(Game, level, player, music);
    Game.init(Game.options);
    Game.animate();
    Game.options.music.play();
});

/**
 * Preview the music please
 */
[...Game.musicFields].map(el => {
    el.addEventListener('mouseover', function(e){
        let button = e.currentTarget;
        let input = button.parentElement.querySelector('[name="music"]');
        button.classList.add('button__preview--spin');
        Game.musicPlayer.sortTune(input.value).setAudio();
        Game.musicPlayer.preview(function(){
            button.classList.add('button__preview--spin');
        });
    });
    el.addEventListener('mouseout', function(e){
        let button = e.currentTarget;
        button.classList.remove('button__preview--spin');
        Game.musicPlayer.pause().reset();
    });
});

