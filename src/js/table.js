class Table {
    constructor(data) {
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
        this.renderTable(data, 0, 9);
    }



    renderTable(data, startRow, endRow) {
        // debugger;
        // header
        let containerTbl = `<div><table><tr>`;
        this.fields.forEach(field => {
            containerTbl += `<th>${field.view}</th>`;
        });
        containerTbl += `</tr>`;

        // data
        for (let i = startRow; i <= endRow; i++) {
            // debugger;
            containerTbl += `<tr>`;
            this.fields.forEach(field => {
                containerTbl += `<td>${data[i][field.name]}</td>`;
            });
            containerTbl += `</tr>`;
        }
        // data.map(row => {
        //     containerTbl += `<tr>`;
        //     this.fields.forEach(field => {
        //         containerTbl += `<td>${row[field.name]}</td>`;
        //     });
        //     containerTbl += `</tr>`;
        // });

        containerTbl += `</tr></table></div>`;
        document.body.querySelector(".table").innerHTML = containerTbl;
    }


}
