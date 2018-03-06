class Table {
    constructor(data = {}) {
        this.renderTable(data);
    }

    renderTable(data) {

        //open table
        let containerTbl = `
        <table class="data-table" >`;

        // header
        containerTbl += `<tr class = "row-table">`;
        containerTbl += `<th class = "order-ctrl"><input type = "checkbox" class ="checkbox"></input></th>`
        containerTbl += `<th class = "order-ctrl">Название товара</th>`;
        containerTbl += `<th class = "order-ctrl">Категория</th>`;
        containerTbl += `<th class = "order-ctrl">Количество на складе</th>`;
        containerTbl += `<th class = "order-ctrl">Цена</th>`;
        containerTbl += `<th class = "order-ctrl">Дата создания</th>`;
        containerTbl += `<th class = "order-ctrl">Вес</th>`;
        containerTbl += `<th class = "order-ctrl">Размеры(ШхВхД)</th>`;
        containerTbl += `<th class = "order-ctrl"></th>`; // for settings
        containerTbl += `</tr>`;

        
        // data
        data.map(row => {
            
            containerTbl += `<tr class = "row-table">`;
            containerTbl += `<td class="table-column-checkbox"><input type="checkbox" class ="checkbox row-table"></input></td>`;
            containerTbl += `<td class="table-column-name"><a href = "Ссылка на товар/${row.id}" class = "table-column-name">${row.name}</a></td>`;
            containerTbl += `<td class="table-column-category"><span>${row.category}</span></td>`;
            containerTbl += `<td class="table-column-count"><span>${row.count} шт</span></td>`;
            containerTbl += `<td class="table-column-price"><span>${row.price} грн</span></td>`;
            containerTbl += `<td class="table-column-creationDate"><span>${row.creationDate}</span><span></span></td>`;
            containerTbl += `<td class="table-column-weight"><span>${row.weight} грамм</span></td>`;
            containerTbl += `<td class="table-column-size"><span>${row.size} см </span></td>`;
            containerTbl += `<td class="table-column-settings"><span>...</span></td>`; // for settings
            containerTbl += `</tr>`;
        });


        // close table
        containerTbl += `</table>`;
        document.querySelector(".content").innerHTML += containerTbl;
    }


}

let data = [
    {
        "id": 1,
        "name": "Помада Kylie",
        "category": "Косметика",
        "count": 259,
        "price": 299,
        "creationDate": "02/21/2018",
        "weight": 10,
        "size": "1x1x5"
    },
    {
        "id": 2,
        "name": "Обезьянка",
        "category": "Игрушки",
        "count": 24,
        "price": 359,
        "creationDate": "02/20/2018",
        "weight": 250,
        "size": "40x40x30"
    },
    {
        "id": 3,
        "name": "Кофта",
        "category": "Одежда",
        "count": 52,
        "price": 300,
        "creationDate": "02/13/2018",
        "weight": 500,
        "size": "40x40x50"
    },
    {
        "id": 4,
        "name": "Кроссовки",
        "category": "Обувь",
        "count": 100,
        "price": 999,
        "creationDate": "02/12/2018",
        "weight": 700,
        "size": "35x20x18"
    },
    {
        "id": 5,
        "name": "Библия",
        "category": "Книги",
        "count": 500,
        "price": 55,
        "creationDate": "02/19/2018",
        "weight": 1000,
        "size": "20x15x4"
    },
    {
        "id": 6,
        "name": "Мыло",
        "category": "Хоз.товары",
        "count": 500,
        "price": 15,
        "creationDate": "01/18/2018",
        "weight": 100,
        "size": "8x4x2"
    },
    {
        "id": 7,
        "name": "Куртка",
        "category": "Кожа",
        "count": 5,
        "price": 5000,
        "creationDate": "02/21/2018",
        "weight": 3000,
        "size": "1000x1000x50"
    },
    {
        "id": 8,
        "name": "Ремень брючной",
        "category": "Ремни",
        "count": 10,
        "price": 199,
        "creationDate": "12/21/2017",
        "weight": 300,
        "size": "1200x40x5"
    },
    {
        "id": 9,
        "name": "Энциклопедия",
        "category": "Книги",
        "count": 200,
        "price": 150,
        "creationDate": "02/21/2018",
        "weight": 1000,
        "size": "300x20x5"
    },
    {
        "id": 10,
        "name": "Джинсы",
        "category": "Одежда",
        "count": 100,
        "price": 699,
        "creationDate": "02/01/2018",
        "weight": 850,
        "size": "1100x700x10"
    },
    {
        "id": 11,
        "name": "Лак",
        "category": "Косметика",
        "count": 1000,
        "price": 99,
        "creationDate": "02/21/2018",
        "weight": 10,
        "size": "1x1x5"
    },
    {
        "id": 12,
        "name": "Кеды",
        "category": "Обувь",
        "count": 155,
        "price": 499,
        "creationDate": "02/11/2018",
        "weight": 10,
        "size": "5x1x1"
    },
    {
        "id": 13,
        "name": "Шампунь",
        "category": "Хоз.товары",
        "count": 50,
        "price": 79,
        "creationDate": "02/21/2018",
        "weight": 150,
        "size": "21x12x3"
    }
];

new Table(data);

