
const utils = {
    debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    },
    randomIntFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    randomColor(colors) {
        return colors[Math.floor(Math.random() * colors.length)];
    },
    distance(x1, y1, x2, y2) {
        const xDist = x2 - x1;
        const yDist = y2 - y1;

        return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
    },
    // CIRCLE/RECTANGLE
    circleRectCollision(cx, cy, radius, rx, ry, rw, rh) {

        // temporary variables to set edges for testing
        let testX = cx;
        let testY = cy;
    
        // which edge is closest?
        if (cx < rx)         testX = rx;      // test left edge
        else if (cx > rx+rw) testX = rx+rw;   // right edge
        if (cy < ry)         testY = ry;      // top edge
        else if (cy > ry+rh) testY = ry+rh;   // bottom edge
    
        // get distance from closest edges
        let distance = this.distance(testX, testY, cx, cy);
    
        // if the distance is less than the radius, collision!
        if (distance <= radius) {
            return true;
        }
        return false;
    },
    mouse:{
        x: innerWidth / 2,
        y: innerHeight / 2
    }
};

module.exports = utils;
