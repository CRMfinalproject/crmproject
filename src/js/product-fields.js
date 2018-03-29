export default [
    { name: "name", view: "Название товара", hidden: false, format: (x) => `<a href = "#" class = "table-column-name__link">${x}</a>` },
    { name: "category", view: "Категория", hidden: false, format: (x) => `<span id = ${x.replace(/\./g, "")}><span>${x}</span></span>` },
    { name: "count", view: "Кол-во на складе", hidden: false, format: (x) => `<span>${x}</span><span class="table-fixedtext">шт</span>` },
    { name: "price", view: "Цена", hidden: false, format: (x) => `<span>${x}</span><span class="table-fixedtext">грн</span>` },
    { name: "creationDate", view: "Дата создания", hidden: false, format: (x) => `<span>${x}</span>` },
    { name: "weight", view: "Вес", hidden: false, format: (x) => `<span>${x}</span><span class="table-fixedtext">г</span>` },
    { name: "size", view: "Размеры(ШхВхД)", hidden: false, format: (x) => `<span>${x}</span><span class="table-fixedtext">см</span>` }
]