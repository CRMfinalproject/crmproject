import { createElem } from './utils';

export default class {
    constructor (table) {
        this.table = table;
        this.render();
    }
    renderContainer () {
        let parent = document.body.querySelector(".content");
        let nextSibling = document.body.querySelector(".table-control");
        this.tabsContainer = createElem(parent, 'div', 'tabs', nextSibling);
        this.tabsContainer.addEventListener('click', this.toggle.bind(this));
    }
    toggle (event) {
        if (!event.target.classList.contains("tabs__item--active") && event.target.classList.contains("tabs__item")) {
            document.body.querySelector(".tabs__item--active").classList.remove("tabs__item--active");
            event.target.classList.add("tabs__item--active");
            debugger;
            switch (document.body.querySelector(".tabs__item--active").innerHTML) {
                case "Товары": 
                    this.renderButtonTitle("новый товар");
                    this.table.redrawTable("products");
                    break;
                case "Поставки":
                    this.renderButtonTitle("новая поставка");
                    this.table.redrawTable("supplies");
                    break;
                case "Категории":
                    this.renderButtonTitle("новая категория");
            }
        }
    }
    renderButtonTitle(addText) {
        debugger;
        document.querySelector(".table-control__button--add-new .table-control__button__title").innerHTML = addText;
    }
    render () {
        this.renderContainer();
        this.tabsContainer.insertAdjacentHTML("afterbegin", `
            <div class="tabs__item tabs__item--active">Товары</div>
            <div class="tabs__item">Поставки</div>
            <div class="tabs__item">Категории</div>`);
    }
}
