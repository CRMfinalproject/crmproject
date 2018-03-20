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

