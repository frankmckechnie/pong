/**
 * 
 * Game Options
 * 
 */

class Options {
    constructor(options) {
    }

    setLevel(level){
        this.paddle = level.paddle;
        this.velocity = level.velocity;
    }
}

const options ={
    easy: {
        paddle:{
            height: 200,
            width: 200
        },
        velocity:{x: 10, y: 10}
    },
    hard: {

    },
    insane:{
        
    }
}; 






export default options;