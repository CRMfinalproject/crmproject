class Table {
    constructor(fields) {
        this.container = document.createElement('table');
        document.body.querySelector('.content').appendChild(this.container);
        this.container.classList.add('data-table');
        this.container.insertAdjacentHTML('afterbegin', `<thead class="data-table-header"></thead><tbody class="data-table-body"></tbody>`);
        this.fields = fields;
        debugger;
        this.renderHeader();
        this.renderData();
        this.showColumns();
    }

    renderHeader() {
        let headerContent = "";
        //${ this.fields.map((elem) => elem.hidden === false ? ` <th class = "order-ctrl">${elem.view}</th>` : '').reduce((accum, next) => accum + next) }
        headerContent = `<tr class = "row-table">
                                <th class = "order-ctrl"><input type = "checkbox" class ="checkbox"></th>
                                ${this.fields.map((field) => `<th class = "order-ctrl table-header-${field.name}" ${field.hidden ? "hidden" : ""}>${field.view}</th>`).reduce((accum, next) => accum + next)}
                                <th class = "order-ctrl"><div class="table__fieldsettings"><p class="table__fieldsettings_heading"><span class="table__fieldsettings_heading__text"></span><img class="table__fieldsettings__btn" src="../images/field_settings.png"></p></div></th>
                        </tr>`;
        document.querySelector(".data-table-header").innerHTML = headerContent;
        if (fieldSettings) {
            new Fieldsettings();
        }
    }
    renderData() {
        let dataPage = data.slice(startRow, endRow);
        let fieldNames = this.fields.map((elem) => elem.name);
        let bodyContent = '';
        dataPage.map((row) => {
            bodyContent += `<tr class = "row-table" id="row-${row.id}">`
            bodyContent += `<td class="table-column-checkbox"><input type="checkbox" class ="checkbox row-table"></td>`
            Object.keys(row).forEach((key) => {
                if (fieldNames.indexOf(key) !== -1) {
                    switch (key) {
                        case 'name' :
                            bodyContent += `<td class="table-column-name" ${this.fields.find((f) => f.name === 'name').hidden ? "hidden" : ""}><a href = "Ссылка на товар/${row.id}" class = "table-column-name__link">${row.name}</a></td>`;
                            break;
                        case 'category' :
                            bodyContent += `<td class="table-column-category" ${this.fields.find((f) => f.name === 'category').hidden ? "hidden" : ""}><span>${row.category}</span></td>`;
                            break;
                        case 'count' :
                            bodyContent += `<td class="table-column-count" ${this.fields.find((f) => f.name === 'count').hidden ? "hidden" : ""}><span>${row.count} шт</span></td>`;
                            break;
                        case 'price' :
                            bodyContent += `<td class="table-column-price" ${this.fields.find((f) => f.name === 'price').hidden ? "hidden" : ""}><span>${row.price} грн</span></td>`;
                            break;
                        case 'purchasePrice' :
                            bodyContent += `<td class="table-column-price" ${this.fields.find((f) => f.name === 'purchasePrice').hidden ? "hidden" : ""}><span>${row.purchasePrice} грн</span></td>`;
                            break;
                        case 'creationDate' :
                            bodyContent += `<td class="table-column-creationDate" ${this.fields.find((f) => f.name === 'creationDate').hidden ? "hidden" : ""}><span>${row.creationDate}</span></td>`;
                            break;
                        case 'supplyDate' :
                            bodyContent += `<td class="table-column-supplyDate" ${this.fields.find((f) => f.name === 'supplyDate').hidden ? "hidden" : ""}><span>${row.supplyDate}</span></td>`;
                            break;
                        case 'weight' :
                            bodyContent += `<td class="table-column-weight" ${this.fields.find((f) => f.name === 'weight').hidden ? "hidden" : ""}><span>${row.weight} г</span></td>`;
                            break;
                        case 'size' :
                            bodyContent += `<td class="table-column-size" ${this.fields.find((f) => f.name === 'size').hidden ? "hidden" : ""}><span>${row.size} см </span></td>`;
                            break;
                    }
                }
            });
            bodyContent += `<td class="table-column-settings">
                <div class="table-column-actions js-dots">
                    <img src="../images/three-dots.png" class="table-column-actions__dots adsf">
                </div>
                <div class="table-column-actions js-actions close">
                    <img src="../images/copy-icon.svg" title="переместить" class="table-column-actions__copy">
                    <img src="../images/edit-icon.svg" title="редактировать" class="table-column-actions__edit">
                    <img src="../images/delete-icon.svg" title="удалить" class="table-column-actions__delete">
                </div>
                <div class="table-column-actions__ok  js-ok close">
                    <button class="button__ok">OK</button>
                </div>
                <div class="table-column-actions__recover js-recover close">
                    <button class="button__recover">Восстановить</button>
                </div>
                </td>
              </tr>`
        });
        document.querySelector(".data-table-body").innerHTML = bodyContent;
        addEditActionsEvents();
    };

    showColumns(){
        this.fields.forEach((field) => {
            let header = this.container.getElementsByClassName(`table-header-${field.name}`)[0];
            header.hidden = field.hidden;
            let colData = this.container.getElementsByClassName(`table-column-${field.name}`);
            for (const el of colData) {
                el.hidden = field.hidden;
            }
        });

    }
}
let productTableFields = [
    { name: "name", view: "Название товара", hidden: false},
    { name: "category", view: "Категория", hidden: false},
    { name: "count", view: "Количество на складе", hidden: false},
    { name: "price", view: "Цена", hidden: false },
    { name: "creationDate", view: "Дата создания", hidden: false },
    { name: "weight", view: "Вес", hidden: true },
    { name: "size", view: "Размеры(ШхВхД)", hidden: true }
]

let supplyTableFields = [
    { name: "name", view: "Название товара", hidden: false},
    { name: "category", view: "Категория", hidden: false},
    { name: "purchasePrice", view: "Закупочная цена", hidden: false },
    { name: "supplyDate", view: "Дата поставки", hidden: false },
];

let table = new Table(productTableFields);