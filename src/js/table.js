export default class {
    constructor(fields, data) {
        this.container = document.createElement('table');
        document.body.querySelector('.content').appendChild(this.container);
        this.container.classList.add('data-table');
        this.container.insertAdjacentHTML('afterbegin', `<thead class="data-table-header"></thead><tbody class="data-table-body"></tbody>`);
        
        this.fields = fields;
        this.data = data;

        this.setSettings();
        this.renderHeader();
        this.renderData();
        this.showColumns();
    }

    setSettings () {
        this.ROWS_PER_PAGE = 10;
        this.startRow = 0;
        this.endRow = this.ROWS_PER_PAGE;
    }

    renderHeader() {
        // header
        let headerContent = "";
      // добавила в отрисовку заголовков проверку выбранных полей
        //${ this.fields.map((elem) => elem.hidden === false ? ` <th class = "order-ctrl">${elem.view}</th>` : '').reduce((accum, next) => accum + next) }
        headerContent = `<tr class = "row-table">
                                <th class = "order-ctrl"><input type = "checkbox" class ="checkbox"></th>
                                ${this.fields.map((field) => ` <th class = "order-ctrl table-header-${field.name}" ${field.hidden ? "hidden" : ""} >${field.view}</th>`).reduce((accum, next) => accum + next)}
                                <th class = "order-ctrl"><div class="table__fieldsettings"><p class="table__fieldsettings_heading"><span class="table__fieldsettings_heading__text"></span><img class="table__fieldsettings__btn" src="../images/field_settings.png"></p></div></th>`;

        this.container.querySelector(".data-table-header").innerHTML = headerContent;
        //new Fieldsettings();
        this.container.querySelector(".data-table-header .checkbox").addEventListener('change', this.selectAll.bind(this));
    }

    // data
    renderData() {
       // перед тем, как перерисовать таблицу удаляем отмеченные у удалению строки
        this.deleteSelected();
        debugger;
        let dataPage = this.data.slice(this.startRow, this.endRow);
        let bodyContent = "";

        dataPage.map(row => {
            bodyContent += `<tr class = "row-table" id="row-${row.id}">`;
            bodyContent += `<td class="table-column-checkbox"><input type="checkbox" class ="checkbox row-table"></td>`;
            bodyContent += `<td class="table-column-name"  ${this.fields.find((f) => f.name === 'name').hidden ? "hidden" : ""}><a href = "Ссылка на товар/${row.id}" class = "table-column-name__link">${row.name}</a></td>`;
            bodyContent += `<td class="table-column-category" id = ${row.category.replace(/\./g, "")}  ${this.fields.find((f) => f.name === 'category').hidden ? "hidden" : ""}><span>${row.category}</span></td>`;
            bodyContent += `<td class="table-column-count" ${this.fields.find((f) => f.name === 'count').hidden ? "hidden" : ""}><span>${row.count} шт</span></td>`;
            bodyContent += `<td class="table-column-price" ${this.fields.find((f) => f.name === 'price').hidden ? "hidden" : ""}><span>${row.price} грн</span></td>`;
            bodyContent += `<td class="table-column-creationDate" ${this.fields.find((f) => f.name === 'creationDate').hidden ? "hidden" : ""}><span>${row.creationDate}</span></td>`;
            bodyContent += `<td class="table-column-weight" ${this.fields.find((f) => f.name === 'weight').hidden ? "hidden" : ""}><span>${row.weight} г</span></td>`;
            bodyContent += `<td class="table-column-size" ${this.fields.find((f) => f.name === 'size').hidden ? "hidden" : ""}><span>${row.size} см </span></td>`;
            bodyContent += `
            <td class="table-column-settings">
                <div class="table-column-actions js-dots">
                    <img src="../images/three-dots.png" class="table-column-actions__dots adsf">
                </div><div class="table-column-actions js-actions close">
                    <img src="../images/copy-icon.svg" title="переместить" class="table-column-actions__copy">
                    <img src="../images/edit-icon.svg" title="редактировать" class="table-column-actions__edit">
                    <img src="../images/delete-icon.svg" title="удалить" class="table-column-actions__delete">
                </div><div class="table-column-actions__ok  js-ok close">
                    <button class="button__ok">OK</button>
                </div><div class="table-column-actions__recover js-recover close">
                    <button class="button__recover">Восстановить</button>
                </div>
            </td>`;
            bodyContent += `</tr>`;
        });
        document.querySelector(".data-table-body").innerHTML = bodyContent;

        // from edit-actions.js:
        // addEditActionsEvents()
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

    selectAll() {
        let checkboxArr = document.querySelector(".data-table-body").querySelectorAll(".checkbox");
        if (document.querySelector(".data-table-header .checkbox").checked) {
            checkboxArr.forEach((elem) => { elem.checked = true });
        } else checkboxArr.forEach((elem) => { elem.checked = false });;
    }

    deleteSelected () {
        let rowsToDel = Array.from(document.querySelectorAll(".setToDel"));
        if (rowsToDel.length) {
            let idsToDel = rowsToDel.map(row => {
                row.classList.add('setToDel');
                return row.id.replace('row-', '');
            });
            let countToDel = 0;
                    while (countToDel != idsToDel.length) {
                        for (let i=0; i<this.data.length; i++) {
                            idsToDel.map(productToDel => {
                                if (this.data[i].id == productToDel) {
                                    this.data.splice(i, 1);
                                    countToDel++;
                                }
                            })
                        };
                    };
        }
    }

    setCurrentPage (currentPage) {
        debugger;
        this.startRow = (currentPage - 1) * this.ROWS_PER_PAGE;
        this.endRow = currentPage * this.ROWS_PER_PAGE;
        if (this.endRow >= this.data.length) {
            this.endRow = this.data.length
        };
    }

}
