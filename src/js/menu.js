<<<<<<< HEAD
const burgerBtn = '.burger';
const burgerMenuContainer = '.burger-menu__container';
const menuItemBtn = '.menu__item';
const openClassBurgerCont = 'burger-menu__container--open';
const openClassBurgerBtn = 'burger--open';
const openClassMenuItemBtn = 'menu__item--open';

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
        this.element.addEventListener('mouseleave', this.close());
        this.element.addEventListener('click', event => {
            event.preventDefault();
            this.toggle();
        })
    }
}
class BurgerMenu extends Menu {
    constructor(selector, options, burgerContMenu) {
        debugger;
        super(selector, options);
        this.element.addEventListener('click', event => {
            event.preventDefault();
            burgerContMenu.toggle();
            this.toggle();
            event.stopPropagation();
        })
    }
}
class BurgerContMenu extends Menu {
    constructor(selector, options) {
        debugger;
        super(selector, options);
        this.element.addEventListener('mouseleave', event => {
            this.close();
            // burgerMenu.close();
            document.body.querySelector('.burger').classList.remove('burger--open');
        });
    }
}
export { BurgerMenu, UserCabinetMenu, BurgerContMenu, burgerBtn, burgerMenuContainer,
 menuItemBtn, openClassBurgerCont, openClassBurgerBtn, openClassMenuItemBtn };
// export * from '/menu'

=======

// const burgerBtn = '.burger';
// const burgerMenuContainer = '.burger-menu__container';
// const menuItemBtn = '.menu__item';
// const openClassBurgerCont = 'burger-menu__container--open';
// const openClassBurgerBtn = 'burger--open';
// const openClassMenuItemBtn = 'menu__item--open';
// const classBurgerCont = 'burger-menu__container';
// const classBurger = 'burger';
// const classMenu = 'menu';

// class Menu {
//     constructor(selector, options) {
//         this.element = document.querySelector(selector);
//         this.options = options;
//     }

//     toggle() {
//         this.element.classList.toggle(this.options.openStateClass);
//     }

//     close() {
//         this.element.classList.remove(this.options.openStateClass);
//     }
// }


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

class Menu {
    constructor(selector, options) {
        this.element = document.querySelector(selector);
        this.subitems = document.querySelectorAll(selector + ` ${options.subItemClass}`); 
        this.options = options;
        this.element.addEventListener('click', event => this.onClick(event));
        // this.element.addEventListener('mouseleave', event => this.onItemMouseLeave(event));

        this.subitems.forEach( subitem => subitem.addEventListener('click', event => this.onSubItemClick(event)));
    }

    onClick(event) {
        this.prevent();

        if (this.options.onClick)
            this.options.onClick.call(this);
    }

    onSubItemClick(event) {
        this.prevent();
        this.close();

        if (this.options.onSubItemClick)
            this.options.onSubItemClick.call(this);
    }

    onItemMouseLeave(event) {
        if (this.options.onItemMouseLeave)
            this.options.onItemMouseLeave.call(this);
    }

    prevent() {
        event.preventDefault();
        event.stopPropagation();
    }

    toggle() {
        this.element.classList.toggle(this.options.openStateClass);
    }

    open() {
        this.element.classList.add(this.options.openStateClass);
    }

    hasOpenClass() {
        return this.element.classList.contains(this.options.openStateClass);
    }

    close() {
        this.element.classList.remove(this.options.openStateClass);
    }
}


const userCabinetMenu = new Menu('.menu', {
    openStateClass: 'menu__item--open',
    subItemClass: '.menu__subitem',
    onClick() {
        this.open();
    },
    onItemMouseLeave() {
        this.close();
    }
});

const burgerBtn = new Menu('.burger', {
    openStateClass: 'burger--open',
    onClick() {
        this.toggle();
        burgerMenu.toggle();
    },
    // onItemMouseLeave() {
    //     this.close();
    //     burgerMenu.close();
    // }
});

const burgerMenu = new Menu('.burger-menu__container', {
    openStateClass: 'burger-menu__container--open',
    onClick() {
        this.close();
    },
    onItemMouseLeave() {
        this.close();
        burgerBtn.close();
    }
});
>>>>>>> development
