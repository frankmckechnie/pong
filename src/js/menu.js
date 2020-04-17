
/**
 * 
 * Game menu
 * 
 */

class Menu {

    // menu
    constructor(Game){
        this.menu = Game.hook;
    }

    isActive(){
        return this.menu.classList.contains('is-active');
    }

    hide(){
        this.menu.classList.remove('is-active');
    }

    show(){
        this.menu.classList.add('is-active');
    }
}

export default Menu;
