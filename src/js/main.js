const burgerBtn = '.burger';
const burgerMenuContainer = '.burger-menu__container';
const menuItemBtn = '.menu__item';
const openClassBurgerCont = 'burger-menu__container--open';
const openClassBurgerBtn = 'burger--open';
const openClassMenuItemBtn = 'menu__item--open';

import { BurgerMenu, UserCabinetMenu, BurgerContMenu } from './menu';

const userCabinetMenu = new UserCabinetMenu(menuItemBtn, {
    openStateClass: openClassMenuItemBtn
});
const burgerMenu = new BurgerMenu(burgerBtn, {
    openStateClass: openClassBurgerBtn
});
const burgerContMenu = new BurgerContMenu(burgerMenuContainer, {
    openStateClass: openClassBurgerCont
});

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

import AddProduct from './new-product';
let productCategoryList = data.map(
    (elem) => elem.category).sort().filter((el, i, arr) => arr.includes(el, i + 1) === false);
let newProduct = new AddProduct(productCategoryList);

import Table from './table';
let table = new Table(productTableFields, data);

import Fieldsettings from './field-settings';
let fieldSettings = new Fieldsettings(productTableFields, table);

import Pagination from './pagination';
let page = new Pagination(table);