import { createElem } from './utils';

export default class {
    constructor () {
        this.tabsContainer = createElem(document.body.querySelector(".content"), 'div', 'tabs');
        this.render();
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
                    // table.redrawTable(productTableFields);
                    // fieldSettings = new Fieldsettings();
                    break;
                case "Поставки":
                    this.renderButtonTitle("новая поставка");
                    // table.redrawTable(supplyTableFields);
                    // fieldSettings = new Fieldsettings();
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
        this.tabsContainer.insertAdjacentHTML("afterbegin", `
            <div class="tabs__item tabs__item--active">Товары</div>
            <div class="tabs__item">Поставки</div>
            <div class="tabs__item">Категории</div>`);
    }
}
