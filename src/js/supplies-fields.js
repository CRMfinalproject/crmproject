export default [
    { name: "name", view: "Название товара", hidden: false, format: (x) => `<a href = "#" class = "table-column-name__link">${x}</a>` },
    { name: "category", view: "Категория", hidden: false, format: (x) => `<span id = ${x.replace(/\./g, "")}><span>${x}</span></span>` },
    { name: "purchasePrice", view: "Закупочная цена", hidden: false, format: (x) => `<span>${x}</span><span class="table-fixedtext">грн</span>` },
    { name: "supplyDate", view: "Дата поставки", hidden: false, format: (x) => `<span>${x}</span>` },
]