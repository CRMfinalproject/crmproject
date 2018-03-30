import Menu from './menu';
const userCabinetMenu = new Menu('.menu', {
    openStateClass: 'menu__item--open',
    subItemClass: '.menu__subitem',
    onClick() {
        this.open();
    },
    onItemMouseLeave() {
        this.close();
    }
});

const burgerBtn = new Menu('.burger', {
    openStateClass: 'burger--open',
    onClick() {
        this.toggle();
        burgerMenu.toggle();
    },
    // onItemMouseLeave() {
    //     this.close();
    //     burgerMenu.close();
    // }
});

const burgerMenu = new Menu('.burger-menu__container', {
    openStateClass: 'burger-menu__container--open',
    onClick() {
        this.close();
        burgerBtn.close();
    },
    onItemMouseLeave() {
        this.close();
        burgerBtn.close();
    }
});

import exportedData from './data';
let data = exportedData;

import exportedProductTableFields from './product-fields';
let productTableFields = exportedProductTableFields;

import exportedSupplyTableFields from './supplies-fields';
let supplyTableFields = exportedSupplyTableFields;

import TableControlBlock from './table-control-block';
let tableControl = new TableControlBlock("новый товар");

import Table from './table';
let table = new Table(productTableFields, supplyTableFields, data, '');

import Tabs from './tabs';
let tabs = new Tabs(table);

import AddProduct from './new-product';
let productCategoryList = data.map(
    (elem) => elem.category).sort().filter((el, i, arr) => arr.includes(el, i + 1) === false);
let newProduct = new AddProduct(productCategoryList, table);

import Fieldsettings from './field-settings';
let fieldSettings = new Fieldsettings(productTableFields, table);

import Sorting from './sorting';
let sorting = new Sorting(table);

import Pagination from './pagination';
let page = new Pagination(table);

let productsBtn = document.querySelector('#js-menu-products');
productsBtn.addEventListener('click', () => {
    document.querySelector('.content').innerHTML = '';
    tabs.render();
    tableControl.render();
    table.render();
    page.render();
    sorting.setClick();
    debugger;
    fieldSettings.setClick();
});

import Tutorial from './tutorial';
debugger;
let tutorialPageHtml = document.querySelector('#js-tutorial-content').textContent.trim();
let tutorialPage = new Tutorial(tutorialPageHtml);

import Likecounter from './tutorial_likecounter';
let tutorialLikeCounter = new Likecounter();

let triggerBtn = document.querySelector('#js-menu-tutorials');
triggerBtn.addEventListener('click', () => {
    tutorialPage.render();
    tutorialLikeCounter.render();
});