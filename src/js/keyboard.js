import Game from './Game';

/**
 * All keyboard events
 * 
 */

/**
 * Key down events
 */
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

/**
 * Keyup events
 */
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