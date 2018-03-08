class TableControlBlock {
    constructor(addText) {
        //  debugger;  
        document.body.querySelector(".content").innerHTML += `<div class="table-control"></div>`;     
        this.container = document.body.querySelector(".table-control");
        this.addText = addText;
        this.render();
        this.actionSubmenu = this.container.querySelector(".table-control__button--actions");
        this.renderActionSubmenu();
        // this.actionSubmenu.addEventListener('click', this.showActionSubmenu.bind(this));
        document.body.querySelector(".content").addEventListener('click', this.showActionSubmenu.bind(this));
    }

    render() {
        // debugger;
        this.container.innerHTML = `
        <div class="table-control__button table-control__button--actions">
            <div class="table-control__button__title">Действия с выбранными</div>
            <div class="table-control__button__arrow"></div>
        </div>
        <div class="table-control__button table-control__button--add-new">
            <img src="../images/round-add-button.svg" alt="+" class="table-control__button__icon">
            <div class="table-control__button__title">${this.addText}</div>
        </div> `;
    }

    renderActionSubmenu() {
        // debugger;
        this.actionSubmenu.innerHTML += `
        <div class="table-control__submenu">
            <img src="../images/garbage.svg" alt="+" class="table-control__submenu__icon">
            <div class="table-control__button__title">Удалить</div>
        </div>`;
    }

    showActionSubmenu(event) {
        // debugger;
        if (event.target.classList.contains("table-control__button--actions") || 
            event.target.parentElement.classList.contains("table-control__button--actions")) {
            let actionsButton = document.body.querySelector(".table-control__button--actions");
            actionsButton.classList.toggle("table-control__submenu--opened");
            let arrow = document.body.querySelector(".table-control__button__arrow");
            let angle;
            if (actionsButton.classList.contains("table-control__submenu--opened")) {
                angle = 45;
                let id = setInterval(() => {
                    if (angle == 225) {
                        clearInterval(id);
                    } else {
                        angle = angle + 10;
                        arrow.style.transform = `rotate(${angle}deg)`;
                    }
                }, 10);
            } else {
                angle = 225;
                let id = setInterval(() => {
                    if (angle == 45) {
                        clearInterval(id);
                    } else {
                        angle = angle - 10;
                        arrow.style.transform = `rotate(${angle}deg)`;
                    }
                }, 10);
            };
        }
        
    }
}

let tableControl = new TableControlBlock("новый товар");