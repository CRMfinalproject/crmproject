class Menu {
    constructor(selector, options) {
        this.element = document.querySelector(selector);
        this.options = options;
    }

    toggle() {
        debugger;
        this.element.classList.toggle(this.options.openStateClass);
    }

    close() {
        debugger;
        this.element.classList.remove(this.options.openStateClass);
    }
}
class UserCabinetMenu extends Menu {
    constructor(selector, options) {
        debugger;
        super(selector, options);
        this.element.addEventListener('mouseleave', () => this.close.bind(this));
        this.element.addEventListener('click', event => {
            event.preventDefault();
            this.toggle.bind(this);
        })
    }
}
class BurgerMenu extends Menu {
    constructor(selector, options) {
        debugger;
        super(selector, options);
        this.element.addEventListener('click', event => {
            event.preventDefault();
            // burgerContMenu.toggle();
            this.toggle.bind(this);
            event.stopPropagation();
        })
    }
}
class BurgerContMenu extends Menu {
    constructor(selector, options) {
        debugger;
        super(selector, options);
        this.element.addEventListener('mouseleave', event => {
            this.close.bind(this);
            // burgerMenu.close();
        });
    }
}
export { BurgerMenu, UserCabinetMenu, BurgerContMenu };

// const classBurgerCont = 'burger-menu__container';
// const classBurger = 'burger';
// const classMenu = 'menu';

// const userCabinetMenu = new Menu(menuItemBtn, {
//     openStateClass: openClassMenuItemBtn
// });
// const burgerMenu = new Menu(burgerBtn, {
//     openStateClass: openClassBurgerBtn
// });
// const burgerContMenu = new Menu(burgerMenuContainer, {
//     openStateClass: openClassBurgerCont
// });

// userCabinetMenu.element.addEventListener('click', event => {
//     event.preventDefault();
//     userCabinetMenu.toggle();
// })

// userCabinetMenu.element.addEventListener('mouseleave', () => userCabinetMenu.close());

// burgerMenu.element.addEventListener('click', event => {
//     event.preventDefault();

//     burgerContMenu.toggle();
//     burgerMenu.toggle();
//     event.stopPropagation()
// });

// burgerContMenu.element.addEventListener('mouseleave', event => {
//     burgerContMenu.close();
//     burgerMenu.close();
// });





// document.body.addEventListener('click', (event) => {
//     let el = event.target;
//     let shouldMenuClose = true;

//     while( el != document.body) {
//         let hasBurger = el.classList.contains(classBurger);
//         let hasBurgerMenu = el.classList.contains(classBurgerCont);
//         let hasMenu = el.classList.contains(classMenu);

//         if (hasBurger || hasBurgerMenu || hasMenu) {
//             shouldMenuClose = false;
//             break;
//         }

//         el = el.parentNode;
//     }

//     if (shouldMenuClose) {
//         burgerMenu.close();
//         userCabinetMenu.close();
//         burgerContMenu.close();
//         event.preventDefault();
//     }
// });
