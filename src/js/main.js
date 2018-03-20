// const ROWS_PER_PAGE = 10;
// let startRow = 0;
// let endRow = ROWS_PER_PAGE;
// let tableSettings = {
//     startRow: 0,
//     endRow: ROWS_PER_PAGE
// };

import exportedData from './data';
let data = exportedData;

let productTableFields = [
    { name: "name", view: "Название товара", hidden: false },
    { name: "category", view: "Категория", hidden: false },
    { name: "count", view: "Количество на складе", hidden: false },
    { name: "price", view: "Цена", hidden: false },
    { name: "creationDate", view: "Дата создания", hidden: false },
    { name: "weight", view: "Вес", hidden: true },
    { name: "size", view: "Размеры(ШхВхД)", hidden: true }
]

import Tabs from './tabs';
let tabs = new Tabs();

import TableControlBlock from './table-control-block';
let tableControl = new TableControlBlock("новый товар");

import Table from './table';
let table = new Table(productTableFields, data);

import Fieldsettings from './field-settings';
let fieldSettings = new Fieldsettings(productTableFields, table);


//import Pagination from './pagination';
//let page = new Pagination(data, ROWS_PER_PAGE, startRow, endRow, table);