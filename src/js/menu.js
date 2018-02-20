
const burgerBtn = '.burger';
const burgerMenuContainer = '.burger-menu__container';
const menuItemBtn = '.menu__item';
const openClassBurgerCont = 'burger-menu__container--open';
const openClassBurgerBtn = 'burger--open';
const openClassMenuItemBtn = 'menu__item--open';
const classBurgerCont = 'burger-menu__container';
const classBurger = 'burger';
const classMenu = 'menu';

class Menu {
    constructor(selector, options) {
        this.element = document.querySelector(selector);
        this.options = options;
    }

    toggle() {
        this.element.classList.toggle(this.options.openStateClass);
    }

    close() {
        this.element.classList.remove(this.options.openStateClass);
    }
}


const userCabinetMenu = new Menu(menuItemBtn, {
    openStateClass: openClassMenuItemBtn
});
const burgerMenu = new Menu(burgerBtn, {
    openStateClass: openClassBurgerBtn
});
const burgerContMenu = new Menu(burgerMenuContainer, {
    openStateClass: openClassBurgerCont
});

userCabinetMenu.element.addEventListener('click', () => userCabinetMenu.toggle());

burgerMenu.element.addEventListener('click', event => {
    event.preventDefault();

    burgerContMenu.toggle();
    burgerMenu.toggle();
});


document.body.addEventListener('click', (event) => {
    let el = event.target;
    let shouldMenuClose = true;

    while( el != document.body) {
        let hasBurger = el.classList.contains(classBurger);
        let hasBurgerMenu = el.classList.contains(classBurgerCont);
        let hasMenu = el.classList.contains(classMenu);

        if (hasBurger || hasBurgerMenu || hasMenu) {
            shouldMenuClose = false;
            break;
        }

        el = el.parentNode;
    }

    if (shouldMenuClose) {
        burgerMenu.close();
        userCabinetMenu.close();
        burgerContMenu.close();
        event.preventDefault();
    }
});

