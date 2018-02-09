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

    burgerBtn.addEventListener('click', function (event) {
        event.preventDefault();
        var closedClass = 'burger-menu__container--closed';

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
});