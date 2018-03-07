class TableControlBlock {
    constructor(addText) {
        //  debugger;  
        document.body.querySelector(".content").innerHTML += `<div class="table-control"></div>`;     
        this.container = document.body.querySelector(".table-control");
        this.addText = addText;
        this.render();
        this.actionSubmenu = this.container.querySelector(".table-control__button--actions");
        this.renderActionSubmenu();
        this.actionSubmenu.addEventListener('click', this.showActionSubmenu.bind(this));
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
        this.actionSubmenu.innerHTML += `
        <div class="table-control__submenu">
            <img src="../images/garbage.svg" alt="+" class="table-control__submenu__icon">
            <div class="table-control__button__title">Удалить</div>
        </div>`;
    }

    showActionSubmenu() {
        this.actionSubmenu.classList.toggle("table-control__submenu--opened");
                // debugger;
        let arrow = this.container.querySelector(".table-control__button__arrow");
        // console.log(arrow.style.transform.substring(7,10));
        let angle;
        if (this.actionSubmenu.classList.contains("table-control__submenu--opened")) {
            angle = 45;
            let id = setInterval(() => {
                // debugger;
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
                // debugger;
                if (angle == 45) {
                    clearInterval(id);
                } else {
                    angle = angle - 10;
                    arrow.style.transform = `rotate(${angle}deg)`;
                }
            }, 10);
        };
        // let id = setInterval( () => {
        //         // debugger;
        //         if (angle == 225 || angle == 45) {
        //             clearInterval(id);
        //         } else {
        //             angle = angle + 10;
        //             arrow.style.transform = `rotate(${angle}deg)`;
        //         }
        //     }, 10);

            // function arrowAnimation(angle) {
            //     debugger;
            //     if (angle == 225) {
            //         clearInterval(id);
            //     } else {
            //         angle = angle + 10;
            //         arrow.style.transform = `rotate(${angle}deg)`;
            //     }
            // }
    }
}

let tableControl = new TableControlBlock("новый товар");