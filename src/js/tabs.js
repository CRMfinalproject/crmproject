class Tabs {
    constructor () {
        debugger;
        document.body.querySelector(".content").innerHTML += `<div class="tabs"></div>`;
        this.tabsContainer = document.body.querySelector(".tabs");
        this.render();
        this.tabsContainer.addEventListener('click', this.toggle.bind(this));
        // this.container.addEventListener('click', this.switchPages.bind(this));
        // this.tabsContainer.addEventListener('click', this.test.bind(this));
    }
    // test () {
    //     console.log(`test`);
    // }
    toggle (event) {
        debugger;
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
let tabs = new Tabs();