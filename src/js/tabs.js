class Tabs {
    constructor () {
        this.tabsContainer = document.body.querySelector(".tabs");
        this.render();
        this.tabsContainer.addEventListener("click", this.toggle.bind(this));
    }

    toggle (event) {
        if (!event.target.classList.contains("tabs__item--active") && event.target.classList.contains("tabs__item")) {
            document.body.querySelector(".tabs__item--active").classList.remove("tabs__item--active");    
            event.target.classList.add("tabs__item--active");
        }
    }
    render () {
        this.tabsContainer.innerHTML = `
            <div class="tabs__item tabs__item--active">Товары</div>
            <div class="tabs__item">Поставки</div>
            <div class="tabs__item">Категории</div>`;
    }
}
let tab = new Tabs();