let hasClass = (element, cls) => {
    let classes = element.getAttribute('class') || '';
    return classes.indexOf(cls) !== -1;
}
let removeClass = (element, cls) => {
    let classes = element.getAttribute('class') || '';
    classes = classes.replace(cls, '')
    element.setAttribute('class', classes);
}
let addClass = (element, cls) => {
    let classes = element.getAttribute('class') || '';
    classes = classes += ' ' + cls;
    element.setAttribute('class', classes);
}
 

let burgerBtn = document.getElementsByClassName('burger')[0];
let burgerMenuContainer = document.getElementsByClassName('burger-menu__container')[0];
let openClass = 'burger-menu__container--open';

burgerBtn.addEventListener('click', event => {
    event.preventDefault();

    if (hasClass(burgerMenuContainer, openClass)) {
        removeClass(burgerMenuContainer, openClass);
    } else {
        addClass(burgerMenuContainer, openClass);
    }
    
    if (hasClass(burgerBtn, 'burger--open')) {
        removeClass(burgerBtn, 'burger--open');
    } else {
        addClass(burgerBtn, 'burger--open');
    }
    
});

let menuItemBtn = document.getElementsByClassName('menu__item')[0];

menuItemBtn.addEventListener('click', event => {

    if(hasClass(menuItemBtn, 'menu__item--open')) {
        removeClass(menuItemBtn, 'menu__item--open');
    } else {
        addClass(menuItemBtn, 'menu__item--open');
    }
});


document.body.addEventListener('click', (event) => {
    let el = event.target;
    let shouldMenuClose = true;

    while( el != document.body) {
        let hasBurger = el.classList.contains("burger");
        let hasBurgerMenu = el.classList.contains("burger-menu__container");
        let hasMenu = el.classList.contains("menu");

        if (hasBurger || hasBurgerMenu || hasMenu) {
            shouldMenuClose = false;
            break;
        }

        el = el.parentNode;
    }

    if (shouldMenuClose) {
        removeClass(burgerBtn, 'burger--open');
        removeClass(menuItemBtn, 'menu__item--open');
        removeClass(burgerMenuContainer, 'burger-menu__container--open');
        event.preventDefault();
    }
});

