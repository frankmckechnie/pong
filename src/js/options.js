import MusicPlayer from'./music';
/**
 * 
 * Game Options
 * 
 */

class Options {
    constructor(game, level, player, music) {
        this.setDefaults();
        this.game = game;
        this.level = this.levels[level];
        this.mode = this.modes[player];
        this.music = new MusicPlayer(music);
    }

    setDefaults(){
        this.levels = {
            easy: {
                ball:{
                    radius: 20,
                    velocity:{x: 7, y: 7}
                },
                paddle:{
                    height: 100,
                    width: 20,
                    speed: 5
                }
            },
            hard: {
                ball:{
                    radius: 10,
                    velocity:{x: 10, y: 10}
                },
                paddle:{
                    height: 60,
                    width: 20,
                    speed: 10
                }
            },
            insane:{
                ball:{
                    radius: 10,
                    velocity:{x:15, y: 15}
                },
                paddle:{
                    height: 30,
                    width: 20,
                    speed: 17
                }
            }
        };

        this.modes = {
            computer: {computer: true},
            player: {computer: false}
        };
    }
}


export default Options;