"use strict";
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var burgerBtn = '.burger';
var burgerMenuContainer = '.burger-menu__container';
var menuItemBtn = '.menu__item';
var openClassBurgerCont = 'burger-menu__container--open';
var openClassBurgerBtn = 'burger--open';
var openClassMenuItemBtn = 'menu__item--open';
var classBurgerCont = 'burger-menu__container';
var classBurger = 'burger';
var classMenu = 'menu';

var Menu = function () {
    function Menu(selector, options) {
        _classCallCheck(this, Menu);

        this.element = document.querySelector(selector);
        this.options = options;
    }

    _createClass(Menu, [{
        key: 'toggle',
        value: function toggle() {
            this.element.classList.toggle(this.options.openStateClass);
        }
    }, {
        key: 'close',
        value: function close() {
            this.element.classList.remove(this.options.openStateClass);
        }
    }]);

    return Menu;
}();

var userCabinetMenu = new Menu(menuItemBtn, {
    openStateClass: openClassMenuItemBtn
});
var burgerMenu = new Menu(burgerBtn, {
    openStateClass: openClassBurgerBtn
});
var burgerContMenu = new Menu(burgerMenuContainer, {
    openStateClass: openClassBurgerCont
});

userCabinetMenu.element.addEventListener('click', function () {
    return userCabinetMenu.toggle();
});

burgerMenu.element.addEventListener('click', function (event) {
    event.preventDefault();

    burgerContMenu.toggle();
    burgerMenu.toggle();
});

document.body.addEventListener('click', function (event) {
    var el = event.target;
    var shouldMenuClose = true;

    while (el != document.body) {
        var hasBurger = el.classList.contains(classBurger);
        var hasBurgerMenu = el.classList.contains(classBurgerCont);
        var hasMenu = el.classList.contains(classMenu);

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