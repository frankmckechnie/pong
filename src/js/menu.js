/**
 * 
 * Game menu
 * 
 */

class Menu {

    // menu

    constructor(selector, hooks){
        this.menu = document.querySelector(selector);
        console.log(hooks, this.menu);
        // gameMode
        // gameLevel

    }

    getOptions(){
        let options = this.menu.querySelectorAll('.js-options');
        console.log(options);

    }



}


const menu = new Menu('.js-menu');
menu.getOptions();

