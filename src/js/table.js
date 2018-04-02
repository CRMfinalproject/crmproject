class Table {
    constructor(fields) {
        this.container = document.createElement('table');
        document.body.querySelector('.content').appendChild(this.container);
        this.container.classList.add('data-table');
        this.container.insertAdjacentHTML('afterbegin', `<thead class="data-table-header"></thead><tbody class="data-table-body"></tbody>`);
        this.fields = fields;
        this.renderHeader();
        this.renderData();
    }

    renderHeader() {
        // header
        let headerContent = "";
      // добавила в отрисовку заголовков проверку выбранных полей
        //${ this.fields.map((elem) => elem.hidden === false ? ` <th class = "order-ctrl">${elem.view}</th>` : '').reduce((accum, next) => accum + next) }
        headerContent = `<tr class = "row-table">
                                <th class = "order-ctrl"><input type = "checkbox" class ="checkbox"></th>
                                ${this.fields.map((field) => ` <th class = "order-ctrl table-header-${field.name}" ${field.hidden ? "hidden" : ""} >${field.view}<span class = "dropdown-arrow"></span></th>`).reduce((accum, next) => accum + next)}
                                <th class = "order-ctrl"><div class="table__fieldsettings"><p class="table__fieldsettings_heading"><span class="table__fieldsettings_heading__text"></span><img class="table__fieldsettings__btn" src="../images/field_settings.png"></p></div></th>`;

        this.container.querySelector(".data-table-header").innerHTML = headerContent;
        //new Fieldsettings();
        this.container.querySelector(".data-table-header .checkbox").addEventListener('change', this.selectAll.bind(this));
    }


    // data
    renderData() {
       // перед тем, как перерисовать таблицу удаляем отмеченные у удалению строки
    //    debugger; 
       this.deleteSelected();

        let dataPage = data.slice(startRow, endRow);
        if (dataFilter) {

            dataPage = dataFilter.slice(startRow, endRow);
        }
        let bodyContent = "";

        dataPage.map(row => {
            bodyContent += `<tr class = "row-table" id="row-${row.id}">`;
            bodyContent += `<td class="table-column-checkbox"><input type="checkbox" class ="checkbox row-table"></td>`;

            bodyContent += 
                this.fields.map((field) => `<td class="table-column-${field.name}" ${field.hidden ? "hidden" : ""}>${field.format(row[field.name])}</td>`).reduce((accum, next) => accum + next);

            bodyContent += `
            <td class="table-column-settings">
                <div class="table-column-actions js-dots">
                    <img src="../images/three-dots.png" class="table-column-actions__dots adsf">
                </div><div class="table-column-actions js-actions close">
                    <img src="../images/copy-icon.svg" title="переместить" class="table-column-actions__copy">
                    <img src="../images/edit-icon.svg" title="редактировать" class="table-column-actions__edit">
                    <img src="../images/delete-icon.svg" title="удалить" class="table-column-actions__delete">
                </div><div class="table-column-actions__ok  js-ok close">
                    <span class="button__ok">OK</span>
                </div><div class="table-column-actions__recover js-recover close">
                    <span class="button__recover">Отмена</span>
                </div>
            </td>`;
            bodyContent += `</tr>`;
        });
        document.querySelector(".data-table-body").innerHTML = bodyContent;

        // from edit-actions.js:
        editActions.addEditActionsEvents();
    }

    showColumns(){
        this.fields.forEach(field => {
            let header = this.container.getElementsByClassName(`table-header-${field.name}`)[0];
            header.hidden = field.hidden;
            
            let colData = this.container.getElementsByClassName(`table-column-${field.name}`);
            for (const el of colData) {
                el.hidden = field.hidden;
            }
        });
    }

    redrawTable(fields){
        this.fields = fields;
        this.renderHeader();
        this.renderData();
    }

    selectAll() {
        let checkboxArr = table.container.children[1].querySelectorAll(".checkbox");
        if (document.querySelector(".data-table-header .checkbox").checked) {
            checkboxArr.forEach((elem) => { elem.checked = true });

        } else checkboxArr.forEach((elem) => { elem.checked = false });;
    }

    deleteSelected () {
        let rowsToDel = Array.from(document.querySelectorAll(".setToDel"));
        if (rowsToDel.length) {
            let idsToDel = rowsToDel.map(row => {
                // row.classList.add('setToDel');
                return row.id.replace('row-', '');
            });
            let countToDel = 0;
                    while (countToDel != idsToDel.length) {
                        for (let i=0; i<data.length; i++) {
                            idsToDel.map(productToDel => {
                                if (data[i].id == productToDel) {
                                    data.splice(i, 1);
                                    dataFilter.splice(i, 1);
                                    countToDel++;
                                }
                            })
                        };
                    };
        }
    }

}
let productTableFields = [
    { name: "name", view: "Название товара", hidden: false, format: (x) => `<a href = "#" class = "table-column-name__link">${x}</a>` },
    { name: "category", view: "Категория", hidden: false, format: (x) => `<span id = ${x.replace(/\./g, "")}><span>${x}</span></span>` },
    { name: "count", view: "Кол-во на складе", hidden: false, format: (x) => `<span>${x}</span><span class="table-fixedtext">шт</span>` },
    { name: "price", view: "Цена", hidden: false, format: (x) => `<span>${x}</span><span class="table-fixedtext">грн</span>` },
    { name: "creationDate", view: "Дата создания", hidden: false, format: (x) => `<span>${x}</span>` },
    { name: "weight", view: "Вес", hidden: false, format: (x) => `<span>${x}</span><span class="table-fixedtext">кг</span>` },
    { name: "size", view: "Размеры(ШхВхД)", hidden: false, format: (x) => `<span>${x}</span><span class="table-fixedtext">см</span>` }
];

let supplyTableFields = [
    { name: "name", view: "Название товара", hidden: false, format: (x) => `<a href = "#" class = "table-column-name__link">${x}</a>` },
    { name: "category", view: "Категория", hidden: false, format: (x) => `<span id = ${x.replace(/\./g, "")}><span>${x}</span></span>` },
    { name: "purchasePrice", view: "Закупочная цена", hidden: false, format: (x) => `<span>${x}</span><span class="table-fixedtext">грн</span>` },
    { name: "supplyDate", view: "Дата поставки", hidden: false, format: (x) => `<span>${x}</span>` },
];

let table = new Table(productTableFields);