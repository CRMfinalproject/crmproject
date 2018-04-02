export default class {
    constructor(selector, options) {
        this.element = document.querySelector(selector);
        this.subitems = document.querySelectorAll(selector + ` ${options.subItemClass}`);
        this.options = options;
        this.element.addEventListener('click', event => this.onClick(event));
        this.element.addEventListener('mouseleave', event => this.onItemMouseLeave(event));

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
