class Table {
    constructor(data = {}) {
        document.body.querySelector(".content").innerHTML += 
        `<table class="data-table">
            <thead class="data-table-header"></thead>
            <tbody class="data-table-body"></tbody>
        </table>`;

      
        this.renderHeader();
        this.renderData(data);
    }

    renderHeader() {
        // header
        let headerContent = "";
        headerContent = `<tr class = "row-table">`;
        headerContent += `<th class = "order-ctrl"><input type = "checkbox" class ="checkbox"></input></th>`
        headerContent += `<th class = "order-ctrl">Название товара</th>`;
        headerContent += `<th class = "order-ctrl">Категория</th>`;
        headerContent += `<th class = "order-ctrl">Количество на складе</th>`;
        headerContent += `<th class = "order-ctrl">Цена</th>`;
        headerContent += `<th class = "order-ctrl">Дата создания</th>`;
        headerContent += `<th class = "order-ctrl">Вес</th>`;
        headerContent += `<th class = "order-ctrl">Размеры(ШхВхД)</th>`;
        headerContent += `<th class = "order-ctrl"></th>`; // for settings
        headerContent += `</tr>`;

        document.querySelector(".data-table-header").innerHTML = headerContent;
    }


    // data
    renderData(data) {
        let bodyContent = "";
        data.map(row => {
            bodyContent += `<tr class = "row-table">`;
            bodyContent += `<td class="table-column-checkbox"><input type="checkbox" class ="checkbox row-table"></input></td>`;
            bodyContent += `<td class="table-column-name"><a href = "Ссылка на товар/${row.id}" class = "table-column-name">${row.name}</a></td>`;
            bodyContent += `<td class="table-column-category"><span>${row.category}</span></td>`;
            bodyContent += `<td class="table-column-count"><span>${row.count} шт</span></td>`;
            bodyContent += `<td class="table-column-price"><span>${row.price} грн</span></td>`;
            bodyContent += `<td class="table-column-creationDate"><span>${row.creationDate}</span><span></span></td>`;
            bodyContent += `<td class="table-column-weight"><span>${row.weight} грамм</span></td>`;
            bodyContent += `<td class="table-column-size"><span>${row.size} см </span></td>`;
            bodyContent += `<td class="table-column-settings"><span>...</span></td>`; // for settings
            bodyContent += `</tr>`;
        });


        
        document.querySelector(".data-table-body").innerHTML = bodyContent;

    }
}

let table = new Table(data.slice(0, ROWS_PER_PAGE));

