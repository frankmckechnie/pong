/**
 * 
 * Game Options
 * 
 */

class Options {
    constructor(game, level, player) {
        this.setDefaults();
        this.game = game;
        this.level = this.levels[level];
        this.mode = this.modes[player];
    }

    setDefaults(){
        this.levels = {
            easy: {
                ball:{
                    radius: 10,
                    velocity:{x: 5, y: 5}
                },
                paddle:{
                    height: 300,
                    width: 200,
                    speed: 8
                }
            },
            hard: {
                ball:{
                    radius: 10,
                    velocity:{x: 10, y: 10}
                },
                paddle:{
                    height: 200,
                    width: 200,
                    speed: 10
                }
            },
            insane:{
                ball:{
                    radius: 10,
                    velocity:{x:15, y: 15}
                },
                paddle:{
                    height: 200,
                    width: 200,
                    speed: 13
                }
            }
        };

        this.modes = {
            computer: {computer: true},
            player: {computer: false}
        };
    }
}


export default options;