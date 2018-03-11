// class Table {
//     constructor(data = {}) {
//         this.fields =
//             [
//                 { name: "name", view: "Название товара", hidden: false, classname: "table-name" },
//                 { name: "category", view: "Категория", hidden: false, classname: "table-column-category" },
//                 { name: "count", view: "Количество на складе", hidden: false, classname: "table-column-count" },
//                 { name: "price", view: "Цена", hidden: false, classname: "table-column-price" },
//                 { name: "creationDate", view: "Дата создания", hidden: false, classname: "table-column-createDate" },
//                 { name: "weight", view: "Вес", hidden: false, classname: "table-column-weight" },
//                 { name: "size", view: "Размеры(ШхВхД)", hidden: false, classname: "table-column-size" },
//                 { name: "settings", view: "", hidden: false, classname: "table-column-settings"}
//             ];
//         this.renderTable(data);
//     }

//     renderField(id, fieldName, fieldData){
//         if(fieldData == undefined){
//             return `-`;
//         }

//         switch (fieldName) {
//             case "name":
//                 return `<a href = "Ссылка на товар/${id}" class = "table-column-name">${fieldData}</a>`;
//             case "category":
//                 return `<span>${fieldData}</span>`;
//             case "count":
//                 return `<span>${fieldData} шт</span>`;
//             case "price":
//                 return `<span>${fieldData} грн</span>`;
//             case "creationDate":
//                 return `<span>${fieldData}</span><span></span>`;
//             case "weight":
//                 return `<span>${fieldData} грамм</span>`;
//             case "size":
//                 return `<span>${fieldData} см </span>`;
//             case "settings":
//                 return `<span>${fieldData}</span>`;
            
        
//             default:
//                 return fieldData;
            
//         }
        
//     }

//     renderTable(data) {

//         // header
//         let containerTbl = `<div><table class="data-table" ><tr><th class = "order-ctrl"><input type = "checkbox" class ="checkbox"></input></th>`;
//         this.fields.forEach(field => {
//             containerTbl += `<th class = "order-ctrl">${field.view}</th>`;
//         });
//         containerTbl += `</tr>`;

        
//         // data
//         data.map(row => {
//             containerTbl += `<tr><td><input type = "checkbox" class ="checkbox row-table"></input></td>`;
//             this.fields.forEach(field => {
//                 containerTbl += `<td class="${field.classname} row-table">${this.renderField(row.id, field.name, row[field.name])}</td>`;
//             });
//             containerTbl += `</tr>`;
//         });

//         containerTbl += `</tr></table></div>`;
//         document.body.innerHTML = containerTbl;
//     }


// }

// let data = [
//     {
//         "id": 1,
//         "name": "Помада Kylie",
//         "category": "Косметика",
//         "count": 259,
//         "price": 299,
//         "creationDate": "02/21/2018",
//         "weight": 10,
//         "size": "1x1x5"
//     },
//     {
//         "id": 2,
//         "name": "Обезьянка",
//         "category": "Игрушки",
//         "count": 24,
//         "price": 359,
//         "creationDate": "02/20/2018",
//         "weight": 250,
//         "size": "40x40x30"
//     },
//     {
//         "id": 3,
//         "name": "Кофта",
//         "category": "Одежда",
//         "count": 52,
//         "price": 300,
//         "creationDate": "02/13/2018",
//         "weight": 500,
//         "size": "40x40x50"
//     },
//     {
//         "id": 4,
//         "name": "Кроссовки",
//         "category": "Обувь",
//         "count": 100,
//         "price": 999,
//         "creationDate": "02/12/2018",
//         "weight": 700,
//         "size": "35x20x18"
//     },
//     {
//         "id": 5,
//         "name": "Библия",
//         "category": "Книги",
//         "count": 500,
//         "price": 55,
//         "creationDate": "02/19/2018",
//         "weight": 1000,
//         "size": "20x15x4"
//     },
//     {
//         "id": 6,
//         "name": "Мыло",
//         "category": "Хоз.товары",
//         "count": 500,
//         "price": 15,
//         "creationDate": "01/18/2018",
//         "weight": 100,
//         "size": "8x4x2"
//     },
//     {
//         "id": 7,
//         "name": "Куртка",
//         "category": "Кожа",
//         "count": 5,
//         "price": 5000,
//         "creationDate": "02/21/2018",
//         "weight": 3000,
//         "size": "1000x1000x50"
//     },
//     {
//         "id": 8,
//         "name": "Ремень брючной",
//         "category": "Ремни",
//         "count": 10,
//         "price": 199,
//         "creationDate": "12/21/2017",
//         "weight": 300,
//         "size": "1200x40x5"
//     },
//     {
//         "id": 9,
//         "name": "Энциклопедия",
//         "category": "Книги",
//         "count": 200,
//         "price": 150,
//         "creationDate": "02/21/2018",
//         "weight": 1000,
//         "size": "300x20x5"
//     },
//     {
//         "id": 10,
//         "name": "Джинсы",
//         "category": "Одежда",
//         "count": 100,
//         "price": 699,
//         "creationDate": "02/01/2018",
//         "weight": 850,
//         "size": "1100x700x10"
//     },
//     {
//         "id": 11,
//         "name": "Лак",
//         "category": "Косметика",
//         "count": 1000,
//         "price": 99,
//         "creationDate": "02/21/2018",
//         "weight": 10,
//         "size": "1x1x5"
//     },
//     {
//         "id": 12,
//         "name": "Кеды",
//         "category": "Обувь",
//         "count": 155,
//         "price": 499,
//         "creationDate": "02/11/2018",
//         "weight": 10,
//         "size": "5x1x1"
//     },
//     {
//         "id": 13,
//         "name": "Шампунь",
//         "category": "Хоз.товары",
//         "count": 50,
//         "price": 79,
//         "creationDate": "02/21/2018",
//         "weight": 150,
//         "size": "21x12x3"
//     }
// ];

// new Table(data);

