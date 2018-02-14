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

window.addEventListener('load', function () {

    var burgerBtn = document.getElementsByClassName('burger')[0];
    var burgerMenuContainer = document.getElementsByClassName('burger-menu__container')[0];
    var closedClass = 'burger-menu__container--closed';

    burgerBtn.addEventListener('click', function (event) {
        event.preventDefault();

        if (hasClass(burgerMenuContainer, closedClass)) {
            removeClass(burgerMenuContainer, closedClass);
        } else {
            addClass(burgerMenuContainer, closedClass);
        }

        if (hasClass(burgerBtn, 'burger--open')) {
            removeClass(burgerBtn, 'burger--open');
        } else {
            addClass(burgerBtn, 'burger--open');
        }
    });

    var menuItemBtn = document.getElementsByClassName('menu__item')[0];

    menuItemBtn.addEventListener('click', function (event) {
        event.preventDefault();

        if (hasClass(menuItemBtn, 'menu__item--closed')) {
            removeClass(menuItemBtn, 'menu__item--closed');
        } else {
            addClass(menuItemBtn, 'menu__item--closed');
        }

        if (hasClass(menuItemBtn, 'menu__item--open')) {
            removeClass(menuItemBtn, 'menu__item--open');
        } else {
            addClass(menuItemBtn, 'menu__item--open');
        }
    });

    var input = document.getElementsByClassName('search__input')[0];

    input.addEventListener('click', function (event) {
        event.preventDefault();

        if (hasClass(menuItemBtn, 'menu__item--open')) {
            removeClass(menuItemBtn, 'menu__item--open');
            addClass(menuItemBtn, 'menu__item--closed');
        }

        if (hasClass(burgerBtn, 'burger--open')) {
            removeClass(burgerBtn, 'burger--open');
            addClass(burgerMenuContainer, closedClass);
        }
    });
});