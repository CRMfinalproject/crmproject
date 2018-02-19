"use strict";
'use strict';

var hasClass = function hasClass(element, cls) {
    var classes = element.getAttribute('class') || '';
    return classes.indexOf(cls) !== -1;
};
var removeClass = function removeClass(element, cls) {
    var classes = element.getAttribute('class') || '';
    classes = classes.replace(cls, '');
    element.setAttribute('class', classes);
};
var addClass = function addClass(element, cls) {
    var classes = element.getAttribute('class') || '';
    classes = classes += ' ' + cls;
    element.setAttribute('class', classes);
};

var burgerBtn = document.getElementsByClassName('burger')[0];
var burgerMenuContainer = document.getElementsByClassName('burger-menu__container')[0];
var openClass = 'burger-menu__container--open';

burgerBtn.addEventListener('click', function (event) {
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

var menuItemBtn = document.getElementsByClassName('menu__item')[0];

menuItemBtn.addEventListener('click', function (event) {

    if (hasClass(menuItemBtn, 'menu__item--open')) {
        removeClass(menuItemBtn, 'menu__item--open');
    } else {
        addClass(menuItemBtn, 'menu__item--open');
    }
});

document.body.addEventListener('click', function (event) {
    var el = event.target;
    var shouldMenuClose = true;

    while (el != document.body) {
        var hasBurger = el.classList.contains("burger");
        var hasBurgerMenu = el.classList.contains("burger-menu__container");
        var hasMenu = el.classList.contains("menu");

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