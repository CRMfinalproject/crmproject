class Tabs {
    constructor () {
        debugger;
        // document.body.querySelector(".content").insertAdjacentHTML("afterbegin",`<div class="tabs"></div>`);
        // this.tabsContainer = document.body.querySelector(".tabs");
        this.tabsContainer = createElement(document.body.querySelector(".content"), 'div', 'tabs');
        this.render();
        this.tabsContainer.addEventListener('click', this.toggle.bind(this));
        // document.body.querySelector(".tabs").addEventListener('click', this.toggle.bind(this));
    }

    toggle (event) {
        debugger;
        if (!event.target.classList.contains("tabs__item--active") && event.target.classList.contains("tabs__item")) {
            document.body.querySelector(".tabs__item--active").classList.remove("tabs__item--active");
            event.target.classList.add("tabs__item--active");

            if (document.body.querySelector(".tabs__item--active").innerHTML == "Товары") {
                tableControl = new TableControlBlock("новый товар");
            }
            if (document.body.querySelector(".tabs__item--active").innerHTML == "Поставки") {
                tableControl = new TableControlBlock("новая поставка");
            }
            if (document.body.querySelector(".tabs__item--active").innerHTML == "Категории") {
                tableControl = new TableControlBlock("новая категория");
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