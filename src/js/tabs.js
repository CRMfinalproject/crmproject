class Tabs {
    constructor () {
        this.tabsContainer = createElement(document.body.querySelector(".content"), 'div', 'tabs');
        this.render();
        this.tabsContainer.addEventListener('click', this.toggle.bind(this));
    }

    toggle (event) {
        if (!event.target.classList.contains("tabs__item--active") && event.target.classList.contains("tabs__item")) {
            document.body.querySelector(".tabs__item--active").classList.remove("tabs__item--active");
            event.target.classList.add("tabs__item--active");

            switch (document.body.querySelector(".tabs__item--active").innerHTML) {
                case "Товары": 
                    tableControl.renderButtonTitle("новый товар");
                    table.redrawTable(productTableFields);
                    fieldSettings = new Fieldsettings();
                    break;
                case "Поставки":
                    tableControl.renderButtonTitle("новая поставка");
                    table.redrawTable(supplyTableFields);
                    fieldSettings = new Fieldsettings();
                    break;
                case "Категории":
                    tableControl.renderButtonTitle("новая категория");
                    break;
            }
        }
    }
    render () {
        this.tabsContainer.insertAdjacentHTML("afterbegin", `
            <div class="tabs__item tabs__item--active">Товары</div>
            <div class="tabs__item">Поставки</div>
            <div class="tabs__item">Категории</div>`);
    }
}
let tabs = new Tabs();