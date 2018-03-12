class Tabs {
    constructor () {
        document.body.querySelector(".content").innerHTML += `<div class="tabs"></div>`;
        this.tabsContainer = document.body.querySelector(".tabs");
        this.render();
        document.body.querySelector(".content").addEventListener('click', this.toggle.bind(this));
        // document.body.querySelector(".tabs").addEventListener('click', this.toggle.bind(this));
    }

    toggle (event) {
        if (!event.target.classList.contains("tabs__item--active") && event.target.classList.contains("tabs__item")) {
            document.body.querySelector(".tabs__item--active").classList.remove("tabs__item--active");    
            event.target.classList.add("tabs__item--active");
        }

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
    render () {
        this.tabsContainer.innerHTML = `
            <div class="tabs__item tabs__item--active">Товары</div>
            <div class="tabs__item">Поставки</div>
            <div class="tabs__item">Категории</div>`;
    }
}
let tabs = new Tabs();