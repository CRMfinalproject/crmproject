const dataUrl = `https://trello-attachments.s3.amazonaws.com/5a7d77d8cb4876903b093cff/5a8d42f1e53d84d1cfc3dc11/74acb4c8bf49732b088038b596fb269e/data.json`;


class Table {
    constructor(data = {}) {
        this.fields =
            [
                { name: "name", view: "Название товара", hidden: false },
                { name: "category", view: "Категория", hidden: false },
                { name: "count", view: "Количество на складе", hidden: false },
                { name: "price", view: "Цена", hidden: false },
                { name: "creationDate", view: "Дата создания", hidden: false },
                { name: "weight", view: "Вес", hidden: false },
                { name: "size", view: "Размеры(ШхВхД)", hidden: false }
            ];
        this.renderTable(data);
    }



    renderTable(data) {

        // header
        let containerTbl = `<div><table><tr>`;
        this.fields.forEach(field => {
            containerTbl += `<th>${field.view}</th>`;
        });
        containerTbl += `</tr>`;

        // data
        data.map(row => {
            containerTbl += `<tr>`;
            this.fields.forEach(field => {
                containerTbl += `<td>${row[field.name]}</td>`;
            });
            containerTbl += `</tr>`;
        });

        containerTbl += `</tr></table></div>`;
        document.body.innerHTML = containerTbl;
    }


}

// function get() {

//     fetch(dataUrl, { mode: 'no-cors', header: {'Access-Control-Allow-Origin': '*'} })
//         .then(response => {
//             if (response.ok) return response.json();
//             throw new Error("Error fetching data");
//         })
//         .then(data => {
//             new table(data);
//         })
//         .catch(error => {
//             console.error("Error: ", error);
//         });

// }
// //get();

let data = [
    {
        name: "Помада Kylie",
        category: "Косметика",
        count: 259,
        price: 299,
        creationDate: "21/02/2018"
    },
    {
        name: "Обезьянка",
        category: "Игрушки",
        count: 24,
        price: 359,
        creationDate: "20/02/2018"
    },
    {
        name: "Кофта",
        category: "Одежда",
        count: 52,
        price: 300,
        creationDate: "13/02/2018"
    },
    {
        name: "Кроссовки",
        category: "Обувь",
        count: 100,
        price: 999,
        creationDate: "12/02/2018"
    },
    {
        name: "Библия",
        category: "Книги",
        count: 500,
        price: 55,
        creationDate: "19/02/2018"
    },
    {
        name: "Мыло",
        category: "Хоз.товары",
        count: 500,
        price: 15,
        creationDate: "18/01/2018"
    },
    {
        name: "Куртка",
        category: "Кожа",
        count: 5,
        price: 5000,
        creationDate: "21/02/2018"
    },
    {
        name: "Ремень брючной",
        category: "Ремни",
        count: 10,
        price: 199,
        creationDate: "21/12/2017"
    },
    {
        name: "Энциклопедия",
        category: "Книги",
        count: 200,
        price: 150,
        creationDate: "21/02/2018"
    },
    {
        name: "Джинсы",
        category: "Одежда",
        count: 100,
        price: 699,
        creationDate: "01/02/2018"
    },
    {
        name: "Лак",
        category: "Косметика",
        count: 1000,
        price: 99,
        creationDate: "21/02/2018"
    },
    {
        name: "Кеды",
        category: "Обувь",
        count: 155,
        price: 499,
        creationDate: "11/02/2018"
    },
    {
        name: "Шампунь",
        category: "Хоз.товары",
        count: 50,
        price: 79,
        creationDate: "21/02/2018"
    },
];

new table(data);

