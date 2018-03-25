/*class Table {
    constructor(fields, data = {}) {
        document.body.querySelector(".content").innerHTML += 
        `<table class="data-table">
            <thead class="data-table-header"></thead>
            <tbody class="data-table-body"></tbody>
        </table>`;

        this.fields = fields;
        this.renderHeader();
        this.renderData(data);
    }

    renderHeader() {
        // header
        let tableHeader = document.querySelector(".data-table-header");
        let headerContent = `<tr class = "row-table">
                                <th class = "order-ctrl"><input type = "checkbox" class ="checkbox"></th>
                                ${this.fields.map((elem) => elem.hidden === false ? `<th class = "order-ctrl">${elem.view}</th>` : '')}
                                <th class = "order-ctrl"><div class="table__fieldsettings"><p class="table__fieldsettings_heading"><span class="table__fieldsettings_heading__text"></span><img class="table__fieldsettings__btn" src="../images/field_settings.png"></p></div></th>`;
        tableHeader.innerHTML = headerContent;
    }


    // data
    renderData(data) {
        let bodyContent = '';
        let result = data.map((elem) => {
            bodyContent += `<tr class = "row-table"><td class="table-column-checkbox"><input type="checkbox" class ="checkbox row-table"></td>`;
            Object.keys(elem).map((key) => key !== 'id' ? ((this.fields.filter((field) => field.hidden === false).forEach((item) => key === item.name ? (key === 'name' ? bodyContent += `<td class="table-column-name"><a href="Ссылка на товар/${elem.id}" class="table-column-name">${elem.name}</a></td>` : bodyContent += `<td class="table-column-category"><span>${elem[key]}</span></td>`) : ''))) : '');
            bodyContent += `<td class="table-column-settings"><span>...</span></td></tr>`;
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
let table = new Table(productTableFields, data.slice(0, ROWS_PER_PAGE));

*/