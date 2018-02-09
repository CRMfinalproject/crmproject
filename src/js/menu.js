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

window.addEventListener('load', () => {   

    let burgerBtn = document.getElementsByClassName('burger')[0];
    let burgerMenuContainer = document.getElementsByClassName('burger-menu__container')[0];
    
    burgerBtn.addEventListener('click', event => {
        event.preventDefault();
        let closedClass = 'burger-menu__container--closed';

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
})