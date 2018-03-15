function createElement(par, tag, elemClass) {
    let element = document.createElement(tag);
    let elemClassArr = elemClass.split(" ");
    elemClassArr.map(elemClass => element.classList.add(elemClass));
    par.appendChild(element);
    return element;
}

class TableControlBlock {
    constructor(addText) {
        debugger;  
        /*if (!document.body.querySelector(".table-control")) {
            document.body.querySelector(".content").innerHTML += `<div class="table-control"></div>`;     
        };
        this.container = document.body.querySelector(".table-control");*/
        // this.container = document.createElement('div');
        this.addText = addText;

        if (!document.body.querySelector(".table-control")) {
            this.container = createElement(document.body.querySelector(".content"), 'div', 'table-control');
            this.render();
        } else {
            this.container = document.body.querySelector(".table-control");
            this.renderButtonTitle();
            };
        
        
        this.actionSubmenu = this.container.querySelector(".table-control__button--actions");
        this.renderActionSubmenu();
        this.actionSubmenu.addEventListener('click', this.showActionSubmenu.bind(this));
        // document.body.querySelector(".content").addEventListener('click', this.showActionSubmenu.bind(this));
    }

    render() {
        debugger;
        // this.container.classList.add('table-control');
        // document.body.querySelector(".content").appendChild(this.container);


        // this.container = this.createElement(document.body.querySelector(".content"), 'div', 'table-control');
        // this.createElement(this.container, 'div', "table-control__button table-control__button--actions");
        // this.createElement(this.container, 'div', "table-control__button table-control__button--add-new");

        // this.createElement(document.body.querySelector(".table-control__button--actions"), 'div', "table-control__button__title");
        // this.createElement(document.body.querySelector(".table-control__button--actions"), 'div', "table-control__button__arrow");

        // this.createElement(document.body.querySelector(".table-control__button--add-new"), 'img', "table-control__button__icon");
        // this.createElement(document.body.querySelector(".table-control__button--add-new"), 'div', "table-control__button__title");

        this.container.insertAdjacentHTML("afterbegin", `
            <div class="table-control__button table-control__button--actions">
                <div class="table-control__button__title">Действия с выбранными</div>
                <div class="table-control__button__arrow"></div>
            </div>   
            <div class="table-control__button table-control__button--add-new">
                <img src="../images/round-add-button.svg" alt="+" class="table-control__button__icon">
                <div class="table-control__button__title">${this.addText}</div>
            </div> `);
    }

    renderButtonTitle() {
        this.container.querySelector(".table-control__button--add-new .table-control__button__title").innerHTML = this.addText;
    }

    renderActionSubmenu() {
        this.actionSubmenu.insertAdjacentHTML("beforeend", `
            <div class="table-control__submenu">
                <img src="../images/garbage.svg" alt="+" class="table-control__submenu__icon">
                <div class="table-control__button__title table-control__submenu__title">Удалить</div>
            </div>`
        );
    }

    showActionSubmenu(event) {
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

        debugger;
        let submenu = document.body.querySelector(".table-control__submenu");
        submenu.addEventListener('click', this.deleteSelected());
        
    }

    deleteSelected() {
        debugger;

        if (event.target.classList.contains("table-control__submenu__icon") || event.target.classList.contains("table-control__submenu__title")) {
            let inputsToDel = Array.from(table.container.querySelectorAll("input:checked"),
                elem => elem.parentElement.parentElement.id.slice(4));

            if (inputsToDel.length != 0) {
                let countToDel = 0;
                while (countToDel != inputsToDel.length) {
                    for (let i=0; i<data.length; i++) {
                        inputsToDel.map(productToDel => {
                            if (data[i].id == productToDel) {
                                data.splice(i, 1);
                                countToDel++;
                            }
                        })
                    };
                };
                debugger;
                table.renderData();
                page.setSettings();
                page.render();
            }
        }
    }
}

let tableControl = new TableControlBlock("новый товар");