import { createElem } from './utils';

export default class {
    constructor(addText) {
        this.addText = addText;
        this.render();
    }
    render() {
        // debugger;
        this.container = createElem(document.body.querySelector(".content"), 'div', 'table-control');
        this.container.insertAdjacentHTML("afterbegin", `
            <div class="table-control__button table-control__button--actions">
                <div class="table-control__button__title">Действия с выбранными</div>
                <div class="table-control__button__arrow"></div>
            </div>   
            <div class="table-control__button table-control__button--add-new">
                <img src="../images/round-add-button.svg" alt="+" class="table-control__button__icon">
                <div class="table-control__button__title">${this.addText}</div>
            </div> `);
        this.renderActionSubmenu();
    }

    renderButtonTitle(addText) {
        // debugger;
        this.container.querySelector(".table-control__button--add-new .table-control__button__title").innerHTML = addText;
    }

    renderActionSubmenu() {
        this.actionSubmenu = this.container.querySelector(".table-control__button--actions");
        this.actionSubmenu.insertAdjacentHTML("beforeend", `
            <div class="table-control__submenu">
                <img src="../images/garbage.svg" alt="+" class="table-control__submenu__icon">
                <div class="table-control__button__title table-control__submenu__title">Удалить</div>
            </div>`
        );
        this.actionSubmenu.addEventListener('click', this.showActionSubmenu.bind(this));
    }

    showActionSubmenu(event) {
        // debugger;
        if (event.target.classList.contains("table-control__button--actions") || 
            event.target.parentElement.classList.contains("table-control__button--actions") ||
            event.target.classList.contains("table-control__submenu__icon") || 
            event.target.classList.contains("table-control__submenu__title")) {
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

        let submenu = document.body.querySelector(".table-control__submenu");
        submenu.addEventListener('click', this.deleteSelected());
        
    }

    deleteSelected() {
        if (event.target.classList.contains("table-control__submenu__icon") || event.target.classList.contains("table-control__submenu__title")) {
            debugger;
            let rowsToDel = Array.from(document.querySelector(".data-table-body").querySelectorAll(".checkbox:checked"),
                elem => elem.parentElement.parentElement);
            rowsToDel.map (row => {
                row.classList.add('setToDel');
                row.children[row.children.length-1].children[0].classList.add("close");
                row.children[row.children.length-1].children[3].classList.remove("close");
                row.children[row.children.length - 1].children[3].addEventListener('click', this.recoverDeleted.bind(this));
            });

            document.querySelector(".data-table-header .checkbox").checked = false;
        }
    }

    recoverDeleted(event) {

        console.log(this);
        clearTimeout(this.timerId);
        let currentTr = event.target.parentElement.parentElement.parentElement;
        let currentTd = currentTr.children;
        currentTd[0].children[0].checked = false;
        let td = event.target.parentElement.parentElement;
        td.children[3].classList.add("close");
        td.children[0].classList.remove("close");
        currentTr.classList.remove('setToDel');
    }

}
