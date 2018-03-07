class Table {
    constructor(data = {}) {
        document.body.querySelector(".content").innerHTML += `<table class="data-table"></table>`;
        this.containerTbl = document.body.querySelector(".data-table");
        this.renderTable(data);
    }

    renderTable(data) {
        // debugger;
        //open table
        // let containerTbl = `
        // <table class="data-table" >`;

        // header
        this.containerTbl = `<tr class = "row-table">`;
        this.containerTbl += `<th class = "order-ctrl"><input type = "checkbox" class ="checkbox"></input></th>`
        this.containerTbl += `<th class = "order-ctrl">Название товара</th>`;
        this.containerTbl += `<th class = "order-ctrl">Категория</th>`;
        this.containerTbl += `<th class = "order-ctrl">Количество на складе</th>`;
        this.containerTbl += `<th class = "order-ctrl">Цена</th>`;
        this.containerTbl += `<th class = "order-ctrl">Дата создания</th>`;
        this.containerTbl += `<th class = "order-ctrl">Вес</th>`;
        this.containerTbl += `<th class = "order-ctrl">Размеры(ШхВхД)</th>`;
        this.containerTbl += `<th class = "order-ctrl"></th>`; // for settings
        this.containerTbl += `</tr>`;

        
        // data
        data.map(row => {
            
            this.containerTbl += `<tr class = "row-table">`;
            this.containerTbl += `<td class="table-column-checkbox"><input type="checkbox" class ="checkbox row-table"></input></td>`;
            this.containerTbl += `<td class="table-column-name"><a href = "Ссылка на товар/${row.id}" class = "table-column-name">${row.name}</a></td>`;
            this.containerTbl += `<td class="table-column-category"><span>${row.category}</span></td>`;
            this.containerTbl += `<td class="table-column-count"><span>${row.count} шт</span></td>`;
            this.containerTbl += `<td class="table-column-price"><span>${row.price} грн</span></td>`;
            this.containerTbl += `<td class="table-column-creationDate"><span>${row.creationDate}</span><span></span></td>`;
            this.containerTbl += `<td class="table-column-weight"><span>${row.weight} грамм</span></td>`;
            this.containerTbl += `<td class="table-column-size"><span>${row.size} см </span></td>`;
            this.containerTbl += `<td class="table-column-settings"><span>...</span></td>`; // for settings
            this.containerTbl += `</tr>`;
        });


        // close table
        // containerTbl += `</table>`;
        document.querySelector(".data-table").innerHTML = this.containerTbl;

    }
}

let table = new Table(data.slice(0, ROWS_PER_PAGE));

