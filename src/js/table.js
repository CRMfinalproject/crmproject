import { createElem } from './utils';

export default class {
    constructor(productTableFields, supplyTableFields, data, dataFilter) {
        this.fields = productTableFields;
        this.productFields = productTableFields;
        this.supplyFields = supplyTableFields;
        this.data = data;
        this.dataFilter = dataFilter;
        this.render();
        // this.renderContainer();
        // this.setSettings();
        // this.renderHeader();
        // this.renderData();
    }
    render() {
        this.renderContainer();
        this.setSettings();
        this.renderHeader();
        this.renderData();
    }
    renderContainer () {
        let parent = document.body.querySelector('.content');
        this.container = createElem(parent, 'table', 'data-table');
        this.container.insertAdjacentHTML('afterbegin', `<thead class="data-table-header"></thead><tbody class="data-table-body"></tbody>`);
    }

    setSettings () {
        this.ROWS_PER_PAGE = 10;
        this.startRow = 0;
        this.endRow = this.ROWS_PER_PAGE;
    }

    renderHeader() {
        // debugger;
        let headerContent = "";
        // добавила в отрисовку заголовков проверку выбранных полей
        headerContent = `<tr class = "row-table">
                                <th class = "order-ctrl"><input type = "checkbox" class ="checkbox"></th>
                                ${this.fields.map((field) => ` <th class = "order-ctrl table-header-${field.name}" ${field.hidden ? "hidden" : ""} >${field.view}<span class = "dropdown-arrow"></span></th>`).reduce((accum, next) => accum + next)}
                                <th class = "order-ctrl"><div class="table__fieldsettings"><p class="table__fieldsettings_heading"><span class="table__fieldsettings_heading__text"></span><img class="table__fieldsettings__btn" src="../images/field_settings.png"></p></div></th>`;

        this.container.querySelector(".data-table-header").innerHTML = headerContent;
        this.container.querySelector(".data-table-header .checkbox").addEventListener('change', this.selectAll.bind(this));
    }

    renderData() {
       // перед тем, как перерисовать таблицу удаляем отмеченные у удалению строки
        this.deleteSelected();
        debugger;
        let dataPage = this.data.slice(this.startRow, this.endRow);
        if (this.dataFilter) {
            dataPage = this.dataFilter.slice(this.startRow, this.endRow);
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
        this.fields = fields === "products" ? this.productFields : this.supplyFields;
        this.renderHeader();
        this.renderData();
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
                return row.id.replace('row-', '');
            });
            let countToDel = 0;
                    while (countToDel != idsToDel.length) {
                        for (let i=0; i<this.data.length; i++) {
                            idsToDel.map(productToDel => {
                                if (this.data[i].id == productToDel) {
                                    this.data.splice(i, 1);
                                    // dataFilter.splice(i, 1);
                                    countToDel++;
                                }
                            })
                        };
                    };
        }
    }

    setCurrentPage (currentPage) {
        // debugger;
        this.startRow = (currentPage - 1) * this.ROWS_PER_PAGE;
        this.endRow = currentPage * this.ROWS_PER_PAGE;
        if (this.endRow >= this.data.length) {
            this.endRow = this.data.length
        };
    }

}
