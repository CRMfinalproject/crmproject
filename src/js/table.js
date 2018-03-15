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
        /*headerContent = `<tr class = "row-table">`;
        headerContent += `<th class = "order-ctrl"><input type = "checkbox" class ="checkbox"></input></th>`
        headerContent += `<th class = "order-ctrl">Название товара</th>`;
        headerContent += `<th class = "order-ctrl">Категория</th>`;
        headerContent += `<th class = "order-ctrl">Количество на складе</th>`;
        headerContent += `<th class = "order-ctrl">Цена</th>`;
        headerContent += `<th class = "order-ctrl">Дата создания</th>`;
        headerContent += `<th class = "order-ctrl">Вес</th>`;
        headerContent += `<th class = "order-ctrl">Размеры(ШхВхД)</th>`;
        headerContent += `<th class = "order-ctrl"><div class="table__fieldsettings"><p class="table__fieldsettings_heading"><span class="table__fieldsettings_heading__text"></span><img class="table__fieldsettings__btn" src="../images/field_settings.png"></p></div></th>`; // for settings
        headerContent += `</tr>`;*/
// добавила в отрисовку заголовков проверку выбранных полей
        headerContent = `<tr class = "row-table">
                                <th class = "order-ctrl"><input type = "checkbox" class ="checkbox"></th>
                                ${this.fields.map((elem) => elem.hidden === false ? ` <th class = "order-ctrl">${elem.view}</th>` : '').reduce((accum, next) => accum + next)}
                                <th class = "order-ctrl"><div class="table__fieldsettings"><p class="table__fieldsettings_heading"><span class="table__fieldsettings_heading__text"></span><img class="table__fieldsettings__btn" src="../images/field_settings.png"></p></div></th>`;

        document.querySelector(".data-table-header").innerHTML = headerContent;
    }


    // data
    renderData() {
        let dataPage = data.slice(startRow, endRow);
        let bodyContent = "";
        dataPage.map(row => {
            bodyContent += `<tr class = "row-table" id="row-${row.id}">`;
            bodyContent += `<td class="table-column-checkbox"><input type="checkbox" class ="checkbox row-table"></td>`;
            bodyContent += this.fields.find((field) => field.name === 'name').hidden === false ? `<td class="table-column-name"><a href = "Ссылка на товар/${row.id}" class = "table-column-name__link">${row.name}</a></td>` : '';
            bodyContent += this.fields.find((field) => field.name === 'category').hidden === false ? `<td class="table-column-category"><span>${row.category}</span></td>` : '';
            bodyContent += this.fields.find((field) => field.name === 'count').hidden === false ? `<td class="table-column-count"><span>${row.count} шт</span></td>` : '';
            bodyContent += this.fields.find((field) => field.name === 'price').hidden === false ? `<td class="table-column-price"><span>${row.price} грн</span></td>` : '';
            bodyContent += this.fields.find((field) => field.name === 'creationDate').hidden === false ? `<td class="table-column-creationDate"><span>${row.creationDate}</span></td>` : '';
            bodyContent += this.fields.find((field) => field.name === 'weight').hidden === false ? `<td class="table-column-weight"><span>${row.weight} г</span></td>` : '';
            bodyContent += this.fields.find((field) => field.name === 'size').hidden === false ? `<td class="table-column-size"><span>${row.size} см </span></td>` : '';
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

    }
}
let productTableFields = [
    { name: "name", view: "Название товара", hidden: false },
    { name: "category", view: "Категория", hidden: false },
    { name: "count", view: "Количество на складе", hidden: false },
    { name: "price", view: "Цена", hidden: false },
    { name: "creationDate", view: "Дата создания", hidden: false },
    { name: "weight", view: "Вес", hidden: true },
    { name: "size", view: "Размеры(ШхВхД)", hidden: true }
]
let table = new Table(productTableFields);

