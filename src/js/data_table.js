// const dataUrl = `https://trello-attachments.s3.amazonaws.com/5a7d77d8cb4876903b093cff/5a8d42f1e53d84d1cfc3dc11/74acb4c8bf49732b088038b596fb269e/data.json`;


// class Table {
//     constructor(data = {}) {
//         this.fields =
//             [
//                 { name: "name", view: "Название товара", hidden: false },
//                 { name: "category", view: "Категория", hidden: false },
//                 { name: "count", view: "Количество на складе", hidden: false },
//                 { name: "price", view: "Цена", hidden: false },
//                 { name: "creationDate", view: "Дата создания", hidden: false },
//                 { name: "weight", view: "Вес", hidden: false },
//                 { name: "size", view: "Размеры(ШхВхД)", hidden: false }
//             ];
//         this.renderTable(data);
//     }



//     renderTable(data) {

//         // header
//         let containerTbl = `<div><table><tr>`;
//         this.fields.forEach(field => {
//             containerTbl += `<th>${field.view}</th>`;
//         });
//         containerTbl += `</tr>`;

//         // data
//         data.map(row => {
//             containerTbl += `<tr>`;
//             this.fields.forEach(field => {
//                 containerTbl += `<td>${row[field.name]}</td>`;
//             });
//             containerTbl += `</tr>`;
//         });

//         containerTbl += `</tr></table></div>`;
//         document.body.innerHTML = containerTbl;
//     }


// }

// // function get() {

// //     fetch(dataUrl, { mode: 'no-cors', header: {'Access-Control-Allow-Origin': '*'} })
// //         .then(response => {
// //             if (response.ok) return response.json();
// //             throw new Error("Error fetching data");
// //         })
// //         .then(data => {
// //             new table(data);
// //         })
// //         .catch(error => {
// //             console.error("Error: ", error);
// //         });

// // }
// // //get();

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
];

// new table(data);

