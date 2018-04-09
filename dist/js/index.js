"use strict";

var ROWS_PER_PAGE = 10;
var startRow = 0;
var endRow = ROWS_PER_PAGE;
var data = [{
    "id": 1,
    "name": "Помада Kylie",
    "category": "Косметика",
    "count": 259,
    "price": 299,
    "purchasePrice": 199,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-04-01",
    "weight": 0.3,
    "size": "1x1x5"
}, {
    "id": 2,
    "name": "Обезьянка",
    "category": "Игрушки",
    "count": 24,
    "price": 359,
    "purchasePrice": 150,
    "creationDate": "2018-02-05",
    "supplyDate": "2018-03-10",
    "weight": 0.6,
    "size": "40x40x30"
}, {
    "id": 3,
    "name": "Кофта",
    "category": "Одежда",
    "count": 52,
    "price": 300,
    "purchasePrice": 200,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-04-02",
    "weight": 1.1,
    "size": "40x40x50"
}, {
    "id": 4,
    "name": "Кроссовки",
    "category": "Обувь",
    "count": 100,
    "price": 999,
    "purchasePrice": 899,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-02-11",
    "weight": 3.8,
    "size": "35x20x18"
}, {
    "id": 5,
    "name": "Библия",
    "category": "Книги",
    "count": 500,
    "price": 55,
    "purchasePrice": 45,
    "creationDate": "2018-02-01",
    "supplyDate": "2017-03-01",
    "weight": 2,
    "size": "20x15x4"
}, {
    "id": 6,
    "name": "Мыло",
    "category": "Хоз.товары",
    "count": 500,
    "price": 15,
    "purchasePrice": 5,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-20",
    "weight": 0.5,
    "size": "8x4x2"
}, {
    "id": 7,
    "name": "Куртка",
    "category": "Кожа",
    "count": 5,
    "price": 5000,
    "purchasePrice": 4500,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 4.8,
    "size": "1000x1000x50"
}, {
    "id": 8,
    "name": "Ремень",
    "category": "Ремни",
    "count": 10,
    "price": 199,
    "purchasePrice": 189,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 1.2,
    "size": "1200x40x5"
}, {
    "id": 9,
    "name": "Энциклопедия",
    "category": "Книги",
    "count": 200,
    "price": 150,
    "purchasePrice": 50,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 5,
    "size": "300x20x5"
}, {
    "id": 10,
    "name": "Джинсы",
    "category": "Одежда",
    "count": 100,
    "price": 699,
    "purchasePrice": 599,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 3.4,
    "size": "1100x700x10"
}, {
    "id": 11,
    "name": "Лак MK",
    "category": "Косметика",
    "count": 1000,
    "price": 99,
    "purchasePrice": 79,
    "creationDate": "2018-03-18",
    "supplyDate": "2018-03-01",
    "weight": 0.4,
    "size": "1x1x5"
}, {
    "id": 12,
    "name": "Кеды",
    "category": "Обувь",
    "count": 155,
    "price": 499,
    "purchasePrice": 399,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 2.8,
    "size": "5x1x1"
}, {
    "id": 13,
    "name": "Шампунь",
    "category": "Хоз.товары",
    "count": 50,
    "price": 79,
    "purchasePrice": 69,
    "creationDate": "2018-02-05",
    "supplyDate": "2018-03-01",
    "weight": 1.5,
    "size": "21x12x3"
}, {
    "id": 14,
    "name": "Помада Loreal",
    "category": "Косметика",
    "count": 259,
    "price": 210,
    "purchasePrice": 199,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 0.3,
    "size": "1x1x5"
}, {
    "id": 15,
    "name": "Обезьянка",
    "category": "Игрушки",
    "count": 24,
    "price": 359,
    "purchasePrice": 150,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 0.6,
    "size": "40x40x30"
}, {
    "id": 16,
    "name": "Кофта",
    "category": "Одежда",
    "count": 52,
    "price": 300,
    "purchasePrice": 200,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 1.1,
    "size": "40x40x50"
}, {
    "id": 17,
    "name": "Кроссовки",
    "category": "Обувь",
    "count": 100,
    "price": 999,
    "purchasePrice": 899,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 3.8,
    "size": "35x20x18"
}, {
    "id": 18,
    "name": "Библия",
    "category": "Книги",
    "count": 500,
    "price": 55,
    "purchasePrice": 45,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 2,
    "size": "20x15x4"
}, {
    "id": 19,
    "name": "Мыло",
    "category": "Хоз.товары",
    "count": 500,
    "price": 15,
    "purchasePrice": 5,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 0.5,
    "size": "8x4x2"
}, {
    "id": 20,
    "name": "Куртка",
    "category": "Кожа",
    "count": 5,
    "price": 5000,
    "purchasePrice": 4500,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 4.8,
    "size": "1000x1000x50"
}, {
    "id": 21,
    "name": "Ремень",
    "category": "Ремни",
    "count": 10,
    "price": 199,
    "purchasePrice": 189,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 1.2,
    "size": "1200x40x5"
}, {
    "id": 22,
    "name": "Энциклопедия",
    "category": "Книги",
    "count": 200,
    "price": 150,
    "purchasePrice": 50,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 5,
    "size": "300x20x5"
}, {
    "id": 23,
    "name": "Джинсы",
    "category": "Одежда",
    "count": 100,
    "price": 699,
    "purchasePrice": 599,
    "creationDate": "2018-03-18",
    "supplyDate": "2018-03-01",
    "weight": 3.4,
    "size": "1100x700x10"
}, {
    "id": 24,
    "name": "Лак PNL",
    "category": "Косметика",
    "count": 1000,
    "price": 99,
    "purchasePrice": 79,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 0.2,
    "size": "1x1x5"
}, {
    "id": 25,
    "name": "Кеды",
    "category": "Обувь",
    "count": 155,
    "price": 499,
    "purchasePrice": 399,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 2.8,
    "size": "5x1x1"
}, {
    "id": 26,
    "name": "Шампунь",
    "category": "Хоз.товары",
    "count": 50,
    "price": 79,
    "purchasePrice": 69,
    "creationDate": "2018-02-05",
    "supplyDate": "2018-03-01",
    "weight": 1.5,
    "size": "21x12x3"
}, {
    "id": 27,
    "name": "Помада Dior",
    "category": "Косметика",
    "count": 259,
    "price": 750,
    "purchasePrice": 199,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 0.3,
    "size": "1x1x5"
}, {
    "id": 28,
    "name": "Обезьянка",
    "category": "Игрушки",
    "count": 24,
    "price": 359,
    "purchasePrice": 150,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 0.6,
    "size": "40x40x30"
}, {
    "id": 29,
    "name": "Кофта вязка",
    "category": "Одежда",
    "count": 52,
    "price": 300,
    "purchasePrice": 200,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 2.2,
    "size": "40x40x50"
}, {
    "id": 30,
    "name": "Кроссовки",
    "category": "Обувь",
    "count": 100,
    "price": 999,
    "purchasePrice": 899,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 3.8,
    "size": "35x20x18"
}, {
    "id": 31,
    "name": "Библия",
    "category": "Книги",
    "count": 500,
    "price": 55,
    "purchasePrice": 45,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 2,
    "size": "20x15x4"
}, {
    "id": 32,
    "name": "Мыло",
    "category": "Хоз.товары",
    "count": 500,
    "price": 15,
    "purchasePrice": 5,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 0.5,
    "size": "8x4x2"
}, {
    "id": 33,
    "name": "Куртка",
    "category": "Кожа",
    "count": 5,
    "price": 5000,
    "purchasePrice": 4500,
    "creationDate": "2018-02-05",
    "supplyDate": "2018-03-01",
    "weight": 4.8,
    "size": "1000x1000x50"
}, {
    "id": 34,
    "name": "Ремень",
    "category": "Ремни",
    "count": 10,
    "price": 199,
    "purchasePrice": 189,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 1.2,
    "size": "1200x40x5"
}, {
    "id": 35,
    "name": "Энциклопедия",
    "category": "Книги",
    "count": 200,
    "price": 150,
    "purchasePrice": 50,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 5,
    "size": "300x20x5"
}, {
    "id": 36,
    "name": "Джинсы",
    "category": "Одежда",
    "count": 100,
    "price": 699,
    "purchasePrice": 599,
    "creationDate": "2018-02-05",
    "supplyDate": "2018-03-01",
    "weight": 3.4,
    "size": "1100x700x10"
}, {
    "id": 37,
    "name": "Лак PNL",
    "category": "Косметика",
    "count": 1000,
    "price": 99,
    "purchasePrice": 79,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 0.2,
    "size": "1x1x5"
}, {
    "id": 38,
    "name": "Кеды",
    "category": "Обувь",
    "count": 155,
    "price": 499,
    "purchasePrice": 399,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 2.8,
    "size": "5x1x1"
}, {
    "id": 39,
    "name": "Шампунь",
    "category": "Хоз.товары",
    "count": 50,
    "price": 79,
    "purchasePrice": 69,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 1.5,
    "size": "21x12x3"
}, {
    "id": 40,
    "name": "Помада Dior",
    "category": "Косметика",
    "count": 259,
    "price": 750,
    "purchasePrice": 199,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 0.3,
    "size": "1x1x5"
}, {
    "id": 41,
    "name": "Обезьянка",
    "category": "Игрушки",
    "count": 24,
    "price": 359,
    "purchasePrice": 150,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 0.6,
    "size": "40x40x30"
}, {
    "id": 42,
    "name": "Кофта вязка",
    "category": "Одежда",
    "count": 52,
    "price": 300,
    "purchasePrice": 200,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 2.2,
    "size": "40x40x50"
}, {
    "id": 43,
    "name": "Кроссовки",
    "category": "Обувь",
    "count": 100,
    "price": 999,
    "purchasePrice": 899,
    "creationDate": "2018-02-05",
    "supplyDate": "2018-03-01",
    "weight": 3.8,
    "size": "35x20x18"
}, {
    "id": 44,
    "name": "Библия",
    "category": "Книги",
    "count": 500,
    "price": 55,
    "purchasePrice": 45,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 2,
    "size": "20x15x4"
}, {
    "id": 45,
    "name": "Мыло",
    "category": "Хоз.товары",
    "count": 500,
    "price": 15,
    "purchasePrice": 5,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 0.5,
    "size": "8x4x2"
}, {
    "id": 46,
    "name": "Куртка",
    "category": "Кожа",
    "count": 5,
    "price": 5000,
    "purchasePrice": 4500,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 4.8,
    "size": "1000x1000x50"
}, {
    "id": 47,
    "name": "Ремень",
    "category": "Ремни",
    "count": 10,
    "price": 199,
    "purchasePrice": 189,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 1.2,
    "size": "1200x40x5"
}, {
    "id": 48,
    "name": "Энциклопедия",
    "category": "Книги",
    "count": 200,
    "price": 150,
    "purchasePrice": 50,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 5,
    "size": "300x20x5"
}, {
    "id": 49,
    "name": "Джинсы",
    "category": "Одежда",
    "count": 100,
    "price": 699,
    "purchasePrice": 599,
    "creationDate": "2018-02-05",
    "supplyDate": "2018-03-01",
    "weight": 3.4,
    "size": "1100x700x10"
}, {
    "id": 50,
    "name": "Лак Odri",
    "category": "Косметика",
    "count": 1000,
    "price": 99,
    "purchasePrice": 79,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 0.3,
    "size": "1x1x5"
}, {
    "id": 51,
    "name": "Кеды",
    "category": "Обувь",
    "count": 155,
    "price": 499,
    "purchasePrice": 399,
    "creationDate": "2018-03-18",
    "supplyDate": "2018-03-01",
    "weight": 2.8,
    "size": "5x1x1"
}, {
    "id": 52,
    "name": "Шампунь",
    "category": "Хоз.товары",
    "count": 50,
    "price": 79,
    "purchasePrice": 69,
    "creationDate": "2018-02-01",
    "supplyDate": "2018-03-01",
    "weight": 1.5,
    "size": "21x12x3"
}];
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tabs = function () {
    function Tabs() {
        _classCallCheck(this, Tabs);

        this.tabsContainer = createElement(document.body.querySelector(".content"), 'div', 'tabs');
        this.render();
        this.tabsContainer.addEventListener('click', this.toggle.bind(this));
    }

    _createClass(Tabs, [{
        key: 'toggle',
        value: function toggle(event) {
            if (!event.target.classList.contains("tabs__item--active") && event.target.classList.contains("tabs__item")) {
                document.body.querySelector(".tabs__item--active").classList.remove("tabs__item--active");
                event.target.classList.add("tabs__item--active");

                switch (document.body.querySelector(".tabs__item--active").innerHTML) {
                    case "Товары":
                        tableControl.renderButtonTitle("новый товар");
                        table.redrawTable(productTableFields);
                        fieldSettings = new Fieldsettings();
                        break;
                    case "Поставки":
                        tableControl.renderButtonTitle("новая поставка");
                        table.redrawTable(supplyTableFields);
                        fieldSettings = new Fieldsettings();
                        break;
                    case "Категории":
                        tableControl.renderButtonTitle("новая категория");
                        break;
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            this.tabsContainer.insertAdjacentHTML("afterbegin", '\n            <div class="tabs__item tabs__item--active">\u0422\u043E\u0432\u0430\u0440\u044B</div>\n            <div class="tabs__item">\u041F\u043E\u0441\u0442\u0430\u0432\u043A\u0438</div>\n            <div class="tabs__item">\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438</div>');
        }
    }]);

    return Tabs;
}();

var tabs = new Tabs();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function createElement(par, tag, elemClass) {
    var element = document.createElement(tag);
    var elemClassArr = elemClass.split(" ");
    elemClassArr.map(function (elemClass) {
        return element.classList.add(elemClass);
    });
    par.appendChild(element);
    return element;
}

var TableControlBlock = function () {
    function TableControlBlock(addText) {
        _classCallCheck(this, TableControlBlock);

        this.addText = addText;

        if (!document.body.querySelector(".table-control")) {
            this.container = createElement(document.body.querySelector(".content"), 'div', 'table-control');
            this.render();
        } else {
            this.container = document.body.querySelector(".table-control");
            this.renderButtonTitle(this.addText);
        };

        this.actionSubmenu = this.container.querySelector(".table-control__button--actions");
        this.renderActionSubmenu();
        this.actionSubmenu.addEventListener('click', this.showActionSubmenu.bind(this));
    }

    _createClass(TableControlBlock, [{
        key: "render",
        value: function render() {
            this.container.insertAdjacentHTML("afterbegin", "\n            <div class=\"table-control__button table-control__button--actions\">\n                <div class=\"table-control__button__title\">\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u043C\u0438</div>\n                <div class=\"table-control__button__arrow\"></div>\n            </div>   \n            <div class=\"table-control__button table-control__button--add-new\">\n                <img src=\"../images/round-add-button.svg\" alt=\"+\" class=\"table-control__button__icon\">\n                <div class=\"table-control__button__title\">" + this.addText + "</div>\n            </div> ");
        }
    }, {
        key: "renderButtonTitle",
        value: function renderButtonTitle(addText) {
            this.container.querySelector(".table-control__button--add-new .table-control__button__title").innerHTML = addText;
        }
    }, {
        key: "renderActionSubmenu",
        value: function renderActionSubmenu() {
            this.actionSubmenu.insertAdjacentHTML("beforeend", "\n            <div class=\"table-control__submenu\">\n                <img src=\"../images/garbage.svg\" alt=\"+\" class=\"table-control__submenu__icon\">\n                <div class=\"table-control__button__title table-control__submenu__title\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</div>\n            </div>");
        }
    }, {
        key: "showActionSubmenu",
        value: function showActionSubmenu(event) {
            // debugger;
            if (event.target.classList.contains("table-control__button--actions") || event.target.parentElement.classList.contains("table-control__button--actions") || event.target.classList.contains("table-control__submenu__icon") || event.target.classList.contains("table-control__submenu__title")) {
                var actionsButton = document.body.querySelector(".table-control__button--actions");
                actionsButton.classList.toggle("table-control__submenu--opened");
                var arrow = document.body.querySelector(".table-control__button__arrow");
                var angle = void 0;
                if (actionsButton.classList.contains("table-control__submenu--opened")) {
                    angle = 45;
                    var id = setInterval(function () {
                        if (angle == 225) {
                            clearInterval(id);
                        } else {
                            angle = angle + 10;
                            arrow.style.transform = "rotate(" + angle + "deg)";
                        }
                    }, 10);
                } else {
                    angle = 225;
                    var _id = setInterval(function () {
                        if (angle == 45) {
                            clearInterval(_id);
                        } else {
                            angle = angle - 10;
                            arrow.style.transform = "rotate(" + angle + "deg)";
                        }
                    }, 10);
                };
            }

            var submenu = document.body.querySelector(".table-control__submenu");
            submenu.addEventListener('click', this.deleteSelected());
        }
    }, {
        key: "deleteSelected",
        value: function deleteSelected() {
            var _this = this;

            if (event.target.classList.contains("table-control__submenu__icon") || event.target.classList.contains("table-control__submenu__title")) {

                var rowsToDel = Array.from(table.container.children[1].querySelectorAll(".checkbox:checked"), function (elem) {
                    return elem.parentElement.parentElement;
                });

                // let idsToDel = rowsToDel.map(row => {
                //     row.classList.add('setToDel');
                //     return row.id.replace('row-', '');
                // });

                // rowsToDel.map(row => {
                //     row.classList.add('setToDel');
                //     return row.id.replace('row-', '');
                // });

                rowsToDel.map(function (row) {
                    row.classList.add('setToDel');
                    row.children[row.children.length - 1].children[0].classList.add("close");
                    row.children[row.children.length - 1].children[3].classList.remove("close");
                    row.children[row.children.length - 1].children[3].addEventListener('click', _this.recoverDeleted.bind(_this));
                });

                document.querySelector(".data-table-header .checkbox").checked = false;

                // if (idsToDel.length != 0) {
                //     this.timerId = setTimeout(() => {
                //         let countToDel = 0;
                //         while (countToDel != idsToDel.length) {
                //             for (let i=0; i<data.length; i++) {
                //                 idsToDel.map(productToDel => {
                //                     if (data[i].id == productToDel) {
                //                         data.splice(i, 1);
                //                         countToDel++;
                //                     }
                //                 })
                //             };
                //         };
                //         table.renderData();
                //         page.setSettings();
                //         page.render();
                //     }, 5000);
                // }
            }
        }
    }, {
        key: "recoverDeleted",
        value: function recoverDeleted(event) {

            console.log(this);
            clearTimeout(this.timerId);
            var currentTr = event.target.parentElement.parentElement.parentElement;
            var currentTd = currentTr.children;
            currentTd[0].children[0].checked = false;
            var td = event.target.parentElement.parentElement;
            td.children[3].classList.add("close");
            td.children[0].classList.remove("close");
            currentTr.classList.remove('setToDel');
        }
    }]);

    return TableControlBlock;
}();

var tableControl = new TableControlBlock("новый товар");
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EditActions = function () {
    function EditActions() {
        _classCallCheck(this, EditActions);

        this.uId = 0;
        this.timerId = null;
        this.bindedDotsHandler = this.dotsHandler.bind(this);
        this.bindedEditHandler = this.editHandler.bind(this);
        this.binedActionsMouseLeave = this.actionsMouseLeave.bind(this);
        this.bindedCopyHandler = this.copyHandler.bind(this);
        this.bindedDelHandler = this.delHandler.bind(this);
        this.bindedRecConfirmHandler = this.recConfirmHandler.bind(this);
        this.bindedEditConfirmHandler = this.editConfirmHandler.bind(this);
    }

    _createClass(EditActions, [{
        key: "dotsHandler",
        value: function dotsHandler(event) {
            var td = event.target.parentElement.parentElement;
            td.children[0].classList.add("close");
            td.children[1].classList.remove("close");
        }
    }, {
        key: "removeEventClickOnDotsButtons",
        value: function removeEventClickOnDotsButtons() {
            this.removeEvents('.table-column-actions__dots', 'click', this.bindedDotsHandler);
        }
    }, {
        key: "addEventClickOnDotsButtons",
        value: function addEventClickOnDotsButtons() {
            this.addEvents('.table-column-actions__dots', 'click', this.bindedDotsHandler);
        }
    }, {
        key: "copyHandler",
        value: function copyHandler(event) {
            var currentTr = event.target.parentElement.parentElement.parentElement; // current tr with class = row
            var td = event.target.parentElement.parentElement; // current td with class = cell
            var currentTd = currentTr.children; // all td in this tr with class = cell
            td.children[0].classList.remove("close");
            td.children[1].classList.add("close");

            var cloneTr = currentTr.cloneNode(true);
            var id = cloneTr.id;
            var newId = id + 'c' + ++this.uId;

            cloneTr.id = newId;
            currentTr.insertAdjacentElement('afterend', cloneTr);

            this.removeEventClickOnCopyButtons();
            this.removeEventClickOnEditButtons();
            this.removeEventClickOnDelButtons();
            this.removeEventClickOnDotsButtons();
            this.removeEventClickOnEditConfirmButtons();
            this.removeEventClickOnRecConfirmButtons();
            this.removeEventMouseOutForActions();

            this.addEventClickOnCopyButtons();
            this.addEventClickOnEditButtons();
            this.addEventClickOnDotsButtons();
            this.addEventClickOnDelButtons();
            this.addEventClickOnEditConfirmButtons();
            this.addEventClickOnRecConfirmButtons();
            this.addEventMouseOutForActions();

            var dateCell = document.querySelector("#" + newId + " .table-column-creationDate");
            var now = new Date();
            var newDate = now.toISOString().slice(0, 10);

            dateCell.children[0].textContent = newDate;

            var newObject = this.makeObject(cloneTr);
            this.add(newObject, data);

            td.children[1].classList.add("close");
            td.children[0].classList.remove("close");
        }
    }, {
        key: "makeObject",
        value: function makeObject(tr) {
            var id = tr.id;
            var name = tr.children[1].children[0].textContent;
            var category = tr.children[2].textContent;
            var count = tr.children[3].children[0].textContent;
            var price = tr.children[4].children[0].textContent;
            var creationDate = tr.children[5].children[0].textContent;
            var weight = tr.children[5].children[0].textContent;
            var size = tr.children[7].children[0].textContent;

            return {
                id: id,
                name: name,
                category: category,
                count: count,
                price: price,
                creationDate: creationDate,
                weight: weight,
                size: size
            };
        }
    }, {
        key: "add",
        value: function add(obj, arr) {
            arr.push(obj);
        }
    }, {
        key: "each",
        value: function each(selector, callback) {
            var elements = document.querySelectorAll(selector);
            for (var i = 0; i < elements.length; i++) {
                callback(elements[i]);
            };
        }
    }, {
        key: "addEvents",
        value: function addEvents(selector, eventName, handler) {
            this.each(selector, function (el) {
                return el.addEventListener(eventName, handler);
            });
        }
    }, {
        key: "removeEvents",
        value: function removeEvents(selector, eventName, handler) {
            this.each(selector, function (el) {
                return el.removeEventListener(eventName, handler);
            });
        }
    }, {
        key: "addEventMouseOutForActions",
        value: function addEventMouseOutForActions() {
            this.addEvents('.js-actions', 'mouseleave', this.bindedActionsMouseLeave);
        }
    }, {
        key: "removeEventMouseOutForActions",
        value: function removeEventMouseOutForActions() {
            this.removeEvents('.js-actions', 'mouseleave', this.bindedActionsMouseLeave);
        }
    }, {
        key: "actionsMouseLeave",
        value: function actionsMouseLeave(event) {
            var el = event.target;
            if (el.nextSibling.classList.contains('close') && el.nextSibling.nextSibling.classList.contains('close')) {
                el.classList.add('close');
                el.previousSibling.classList.remove('close');
            };
        }
    }, {
        key: "removeEventClickOnCopyButtons",
        value: function removeEventClickOnCopyButtons() {
            this.removeEvents('.table-column-actions__copy', 'click', this.bindedCopyHandler);
            //тоже самое, что и код ниже:
            // let copyBtn = document.querySelectorAll('.table-column-actions__copy');
            // copyBtn = document.querySelectorAll('.table-column-actions__copy');
            // for(let i = 0; i < copyBtn.length; i++) {
            //     copyBtn[i].removeEventListener('click', this.bindedCopyHandler);
            // };
        }
    }, {
        key: "addEventClickOnCopyButtons",
        value: function addEventClickOnCopyButtons() {
            this.addEvents('.table-column-actions__copy', 'click', this.bindedCopyHandler);
        }
    }, {
        key: "editHandler",
        value: function editHandler(event) {
            var currentTr = event.target.parentElement.parentElement.parentElement;
            var td = event.target.parentElement.parentElement;
            var currentTd = currentTr.children;
            td.children[1].classList.add("close");
            td.children[2].classList.remove("close");

            for (var i = 1; i < currentTd.length - 1; i++) {
                var el = currentTd[i];
                var firstCh = el.children[0];
                var secondCh = el.children[1];
                var isName = el.classList.contains('table-column-name');
                var isCategory = el.classList.contains('table-column-category');
                var isCount = el.classList.contains('table-column-count');
                var isPrice = el.classList.contains('table-column-price');
                var isDate = el.classList.contains('table-column-creationDate');
                var isWeight = el.classList.contains('table-column-weight');
                var isSize = el.classList.contains('table-column-size');
                var isPurPrice = el.classList.contains('table-column-purchasePrice');
                var isSupDate = el.classList.contains('table-column-supplyDate');

                if (isName) {
                    el.innerHTML = "<input type=\"text\" value=\"" + el.textContent + "\" class=\"table-column__input-name\">";
                } else if (isCategory) {
                    var sortedCateg = data.map(function (elem) {
                        return elem.category;
                    }).sort();
                    var categoryList = sortedCateg.filter(function (el, i, arr) {
                        return arr.includes(el, i + 1) === false;
                    });
                    if (categoryList.includes(el.textContent)) {
                        var _i = categoryList.indexOf(el.textContent);
                        categoryList.splice(_i, 1);
                    };
                    var mappedArr = categoryList.map(function (elem) {
                        return "<option value=" + elem + ">" + elem + "</option>";
                    });
                    var reducedArr = mappedArr.reduce(function (accum, elem) {
                        return accum + elem;
                    });
                    el.innerHTML = "<select name=\"category\" class=\"table-column__input-select\"><option value=" + el.textContent + ">" + el.textContent + "</option></select>";
                    var id = currentTr.id;
                    var categorySelection = document.querySelector("#" + id + " .table-column-category .table-column__input-select");
                    categorySelection.insertAdjacentHTML('beforeend', reducedArr);
                } else if (isDate || isSupDate) {
                    var date = new Date(el.textContent);
                    var currentDate = date.toISOString().slice(0, 10);
                    el.innerHTML = "<input type=\"date\" value=\"" + currentDate + "\" class=\"table-column__input-date\">";
                } else if (isPrice || isCount || isWeight || isPurPrice) {
                    firstCh.innerHTML = "<input type=\"text\" value=\"" + firstCh.textContent + "\" class=\"table-column__input-numbers\">";
                } else if (isSize) {
                    firstCh.innerHTML = "<input type=\"text\" value=\"" + firstCh.textContent + "\" class=\"table-column__input-size\">";
                };
            };
        }
    }, {
        key: "removeEventClickOnEditButtons",
        value: function removeEventClickOnEditButtons() {
            this.removeEvents('.table-column-actions__edit', 'click', this.bindedEditHandler);
        }
    }, {
        key: "addEventClickOnEditButtons",
        value: function addEventClickOnEditButtons() {
            this.addEvents('.table-column-actions__edit', 'click', this.bindedEditHandler);
        }
    }, {
        key: "delHandler",
        value: function delHandler(event) {
            // current tr with class = row
            var currentTr = event.target.parentElement.parentElement.parentElement;
            // all th in this tr with class = cell
            var currentTd = currentTr.children;
            currentTr.classList.add('setToDel');

            for (var i = 0; i < currentTd.length; i++) {
                var el = currentTd[i];
                var child = currentTd[i].children[0];
                var isName = el.classList.contains('table-column-name');
                var isCategory = el.classList.contains('table-column-category');

                if (isName) {
                    child.classList.add('setToDel-name');
                    continue;
                };
                if (isCategory) {
                    child.children[0].classList.add('setToDel-category');
                    continue;
                };
            };
            // let id = currentTr.id;
            // let originId = id.replace('row-', '');
            //current th with class = cell
            var td = event.target.parentElement.parentElement;
            td.children[1].classList.add("close");
            td.children[3].classList.remove("close");

            //====== to uncomment the code below if it will be needed: =====//

            // this.timerId = setTimeout( () => {
            // let toDel = document.querySelector(`#${id}`);
            // toDel.remove();
            // for(let i = 0; i< data.length; i++) {
            //     if(data[i].id == originId) {
            //         data.splice(i, 1);
            //         break;
            //     };
            // };
            // }, 5000);
        }
    }, {
        key: "removeEventClickOnDelButtons",
        value: function removeEventClickOnDelButtons() {
            this.removeEvents('.table-column-actions__delete', 'click', this.bindedDelHandler);
        }
    }, {
        key: "addEventClickOnDelButtons",
        value: function addEventClickOnDelButtons() {
            this.addEvents('.table-column-actions__delete', 'click', this.bindedDelHandler);
        }
    }, {
        key: "recConfirmHandler",
        value: function recConfirmHandler(event) {
            //for delHandler:
            //clearTimeout(this.timerId);
            var currentTr = event.target.parentElement.parentElement.parentElement;
            var currentTd = currentTr.children;
            var td = event.target.parentElement.parentElement;
            td.children[3].classList.add("close");
            td.children[0].classList.remove("close");
            currentTr.classList.remove('setToDel');
            for (var i = 0; i < currentTd.length; i++) {
                var el = currentTd[i];
                var child = currentTd[i].children[0];
                var isName = el.classList.contains('table-column-name');
                var isCategory = el.classList.contains('table-column-category');

                if (isName) {
                    child.classList.remove('setToDel-name');
                };
                if (isCategory) {
                    child.children[0].classList.remove('setToDel-category');
                };
            };
        }
    }, {
        key: "editConfirmHandler",
        value: function editConfirmHandler(event) {
            var currentTr = event.target.parentElement.parentElement.parentElement;
            var currentTd = currentTr.children;
            var td = event.target.parentElement.parentElement;
            var inpValue = [];

            for (var i = 0; i < currentTd.length; i++) {
                var el = currentTd[i];
                var child = currentTd[i].children[0];
                var isCheckbox = el.classList.contains('table-column-checkbox');
                var isName = el.classList.contains('table-column-name');
                var isCategory = el.classList.contains('table-column-category');
                var isCount = el.classList.contains('table-column-count');
                var isPrice = el.classList.contains('table-column-price');
                var isDate = el.classList.contains('table-column-creationDate');
                var isWeight = el.classList.contains('table-column-weight');
                var isSize = el.classList.contains('table-column-size');
                var isPurPrice = el.classList.contains('table-column-purchasePrice');
                var isSupDate = el.classList.contains('table-column-supplyDate');

                if (isCheckbox) {
                    continue;
                };
                if (isName) {
                    el.innerHTML = "<a href=\"\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440/" + currentTd.id + "\" class=\"table-column-name__link\">" + child.value + "</a>";
                    continue;
                };
                if (isCategory) {
                    var value = child.value;
                    if (value === 'Хоз.товары') {
                        el.innerHTML = "<span id=\"\u0425\u043E\u0437\u0442\u043E\u0432\u0430\u0440\u044B\"><span>" + value + "</span></span>";
                    } else {
                        el.innerHTML = "<span id=" + value + "><span>" + value + "</span></span>";
                    }

                    continue;
                }
                if (isDate || isSupDate) {
                    el.innerHTML = child.value;
                    continue;
                }
                if (isCount || isPrice || isWeight || isSize || isPurPrice) {
                    child.innerHTML = child.children[0].value;
                    continue;
                };
            };

            td.children[2].classList.add("close");
            td.children[0].classList.remove("close");
        }
    }, {
        key: "removeEventClickOnEditConfirmButtons",
        value: function removeEventClickOnEditConfirmButtons() {
            this.removeEvents('.table-column-actions__ok', 'click', this.bindedEditConfirmHandler);
        }
    }, {
        key: "addEventClickOnEditConfirmButtons",
        value: function addEventClickOnEditConfirmButtons() {
            this.addEvents('.table-column-actions__ok', 'click', this.bindedEditConfirmHandler);
        }
    }, {
        key: "removeEventClickOnRecConfirmButtons",
        value: function removeEventClickOnRecConfirmButtons() {
            this.removeEvents('.table-column-actions__recover', 'click', this.bindedRecConfirmHandler);
        }
    }, {
        key: "addEventClickOnRecConfirmButtons",
        value: function addEventClickOnRecConfirmButtons() {
            this.addEvents('.table-column-actions__recover', 'click', this.bindedRecConfirmHandler);
        }
    }, {
        key: "getGenericId",
        value: function getGenericId() {
            // AJAX request to get new ID;   
        }
    }, {
        key: "addEditActionsEvents",
        value: function addEditActionsEvents() {
            this.addEventClickOnDotsButtons();
            this.addEventMouseOutForActions();
            this.addEventClickOnCopyButtons();
            this.addEventClickOnEditButtons();
            this.addEventClickOnDelButtons();
            this.addEventClickOnEditConfirmButtons();
            this.addEventClickOnRecConfirmButtons();
        }
    }]);

    return EditActions;
}();

var editActions = new EditActions();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Table = function () {
    function Table(fields) {
        _classCallCheck(this, Table);

        this.container = document.createElement('table');
        document.body.querySelector('.content').appendChild(this.container);
        this.container.classList.add('data-table');
        this.container.insertAdjacentHTML('afterbegin', '<thead class="data-table-header"></thead><tbody class="data-table-body"></tbody>');
        this.fields = fields;
        this.renderHeader();
        this.renderData();
    }

    _createClass(Table, [{
        key: 'renderHeader',
        value: function renderHeader() {
            // header
            var headerContent = "";
            // добавила в отрисовку заголовков проверку выбранных полей
            //${ this.fields.map((elem) => elem.hidden === false ? ` <th class = "order-ctrl">${elem.view}</th>` : '').reduce((accum, next) => accum + next) }
            headerContent = '<tr class = "row-table">\n                                <th class = "order-ctrl"><input type = "checkbox" class ="checkbox"></th>\n                                ' + this.fields.map(function (field) {
                return ' <th class = "order-ctrl table-header-' + field.name + '" ' + (field.hidden ? "hidden" : "") + ' >' + field.view + '<span class = "dropdown-arrow"></span></th>';
            }).reduce(function (accum, next) {
                return accum + next;
            }) + '\n                                <th class = "order-ctrl"><div class="table__fieldsettings"><p class="table__fieldsettings_heading"><span class="table__fieldsettings_heading__text"></span><img class="table__fieldsettings__btn" src="../images/field_settings.png"></p></div></th>';

            this.container.querySelector(".data-table-header").innerHTML = headerContent;
            //new Fieldsettings();
            this.container.querySelector(".data-table-header .checkbox").addEventListener('change', this.selectAll.bind(this));
        }

        // data

    }, {
        key: 'renderData',
        value: function renderData() {
            var _this = this;

            // перед тем, как перерисовать таблицу удаляем отмеченные у удалению строки
            //    debugger; 
            this.deleteSelected();

            var dataPage = data.slice(startRow, endRow);
            if (dataFilter) {

                dataPage = dataFilter.slice(startRow, endRow);
            }
            var bodyContent = "";

            dataPage.map(function (row) {
                bodyContent += '<tr class = "row-table" id="row-' + row.id + '">';
                bodyContent += '<td class="table-column-checkbox"><input type="checkbox" class ="checkbox row-table"></td>';

                bodyContent += _this.fields.map(function (field) {
                    return '<td class="table-column-' + field.name + '" ' + (field.hidden ? "hidden" : "") + '>' + field.format(row[field.name]) + '</td>';
                }).reduce(function (accum, next) {
                    return accum + next;
                });

                bodyContent += '\n            <td class="table-column-settings">\n                <div class="table-column-actions js-dots">\n                    <img src="../images/three-dots.png" class="table-column-actions__dots adsf">\n                </div><div class="table-column-actions js-actions close">\n                    <img src="../images/copy-icon.svg" title="\u043F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C" class="table-column-actions__copy">\n                    <img src="../images/edit-icon.svg" title="\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C" class="table-column-actions__edit">\n                    <img src="../images/delete-icon.svg" title="\u0443\u0434\u0430\u043B\u0438\u0442\u044C" class="table-column-actions__delete">\n                </div><div class="table-column-actions__ok  js-ok close">\n                    <span class="button__ok">OK</span>\n                </div><div class="table-column-actions__recover js-recover close">\n                    <span class="button__recover">\u041E\u0442\u043C\u0435\u043D\u0430</span>\n                </div>\n            </td>';
                bodyContent += '</tr>';
            });
            document.querySelector(".data-table-body").innerHTML = bodyContent;

            // from edit-actions.js:
            editActions.addEditActionsEvents();
        }
    }, {
        key: 'showColumns',
        value: function showColumns() {
            var _this2 = this;

            this.fields.forEach(function (field) {
                var header = _this2.container.getElementsByClassName('table-header-' + field.name)[0];
                header.hidden = field.hidden;

                var colData = _this2.container.getElementsByClassName('table-column-' + field.name);
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = colData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var el = _step.value;

                        el.hidden = field.hidden;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            });
        }
    }, {
        key: 'redrawTable',
        value: function redrawTable(fields) {
            this.fields = fields;
            this.renderHeader();
            this.renderData();
        }
    }, {
        key: 'selectAll',
        value: function selectAll() {
            var checkboxArr = table.container.children[1].querySelectorAll(".checkbox");
            if (document.querySelector(".data-table-header .checkbox").checked) {
                checkboxArr.forEach(function (elem) {
                    elem.checked = true;
                });
            } else checkboxArr.forEach(function (elem) {
                elem.checked = false;
            });;
        }
    }, {
        key: 'deleteSelected',
        value: function deleteSelected() {
            var rowsToDel = Array.from(document.querySelectorAll(".setToDel"));
            if (rowsToDel.length) {
                (function () {
                    var idsToDel = rowsToDel.map(function (row) {
                        // row.classList.add('setToDel');
                        return row.id.replace('row-', '');
                    });
                    var countToDel = 0;
                    while (countToDel != idsToDel.length) {
                        var _loop = function _loop(i) {
                            idsToDel.map(function (productToDel) {
                                if (data[i].id == productToDel) {
                                    data.splice(i, 1);
                                    dataFilter.splice(i, 1);
                                    countToDel++;
                                }
                            });
                        };

                        for (var i = 0; i < data.length; i++) {
                            _loop(i);
                        };
                    };
                })();
            }
        }
    }]);

    return Table;
}();

var productTableFields = [{ name: "name", view: "Название товара", hidden: false, format: function format(x) {
        return '<a href = "#" class = "table-column-name__link">' + x + '</a>';
    } }, { name: "category", view: "Категория", hidden: false, format: function format(x) {
        return '<span id = ' + x.replace(/\./g, "") + '><span>' + x + '</span></span>';
    } }, { name: "count", view: "Кол-во на складе", hidden: false, format: function format(x) {
        return '<span>' + x + '</span><span class="table-fixedtext">\u0448\u0442</span>';
    } }, { name: "price", view: "Цена", hidden: false, format: function format(x) {
        return '<span>' + x + '</span><span class="table-fixedtext">\u0433\u0440\u043D</span>';
    } }, { name: "creationDate", view: "Дата создания", hidden: false, format: function format(x) {
        return '<span>' + x + '</span>';
    } }, { name: "weight", view: "Вес", hidden: false, format: function format(x) {
        return '<span>' + x + '</span><span class="table-fixedtext">\u043A\u0433</span>';
    } }, { name: "size", view: "Размеры(ШхВхД)", hidden: false, format: function format(x) {
        return '<span>' + x + '</span><span class="table-fixedtext">\u0441\u043C</span>';
    } }];

var supplyTableFields = [{ name: "name", view: "Название товара", hidden: false, format: function format(x) {
        return '<a href = "#" class = "table-column-name__link">' + x + '</a>';
    } }, { name: "category", view: "Категория", hidden: false, format: function format(x) {
        return '<span id = ' + x.replace(/\./g, "") + '><span>' + x + '</span></span>';
    } }, { name: "purchasePrice", view: "Закупочная цена", hidden: false, format: function format(x) {
        return '<span>' + x + '</span><span class="table-fixedtext">\u0433\u0440\u043D</span>';
    } }, { name: "supplyDate", view: "Дата поставки", hidden: false, format: function format(x) {
        return '<span>' + x + '</span>';
    } }];

var table = new Table(productTableFields);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fieldsettings = function () {
    function Fieldsettings() {
        var _this = this;

        _classCallCheck(this, Fieldsettings);

        this.container = document.querySelector('.table__fieldsettings');
        this.triggerBtn = document.querySelector('.table__fieldsettings__btn');
        this.headingText = document.querySelector('.table__fieldsettings_heading__text');
        this.form = {};
        this.container.addEventListener('click', function () {
            return _this.container.classList.contains('table__fieldsettings--active') ? event.target.classList.contains('table__fieldsettings__item') || event.target.classList.contains('table__fieldsettings__checkbox') ? _this.updateField() : _this.hide() : _this.render();
        });
        document.body.addEventListener('click', function () {
            if (_this.container.classList.contains('table__fieldsettings--active')) {
                if (event.target !== _this.triggerBtn && event.target.classList.contains('table__fieldsettings__item') === false && event.target.classList.contains('table__fieldsettings__checkbox') === false) {
                    _this.hide();
                }
            }
        });
    }

    _createClass(Fieldsettings, [{
        key: 'render',
        value: function render() {
            this.container.classList.add('table__fieldsettings--active');
            this.triggerBtn.setAttribute('src', '../images/field_settings_active.png');
            this.headingText.textContent = "Настройка полей";
            this.form = document.createElement('form');
            this.container.appendChild(this.form);
            this.form.classList.add("table__fieldsettings__form");
            this.form.innerHTML = table.fields.map(function (elem) {
                return elem.hidden === false ? '<label class="table__fieldsettings__item"><input type="checkbox" class="table__fieldsettings__checkbox" name=\'' + elem.name + '\' checked> ' + elem.view + '</label>' : '<label class="table__fieldsettings__item"><input type="checkbox" class="table__fieldsettings__checkbox" name=\'' + elem.name + '\'> ' + elem.view + '</label>';
            }).reduce(function (accum, elem) {
                return accum + elem;
            });
        }
    }, {
        key: 'hide',
        value: function hide() {

            if (event.target.classList.contains('table__fieldsettings__item') === false && event.target.classList.contains('table__fieldsettings__checkbox') === false) {
                this.container.classList.remove('table__fieldsettings--active');
                this.triggerBtn.setAttribute('src', '../images/field_settings.png');
                this.headingText.textContent = '';
                this.container.removeChild(this.form);
                table.showColumns();
            }
        }
    }, {
        key: 'updateField',
        value: function updateField() {
            var _this2 = this;

            if (event.target.classList.contains('table__fieldsettings__item')) {
                this.selectedField = event.target;
                this.selectedFieldCheckbox = this.selectedField.querySelector('.table__fieldsettings__checkbox');
            } else {
                this.selectedFieldCheckbox = event.target;
            }
            this.selectedFieldCheckbox.checked ? table.fields.find(function (el) {
                return el.name === _this2.selectedFieldCheckbox.name;
            }).hidden = false : table.fields.find(function (el) {
                return el.name === _this2.selectedFieldCheckbox.name;
            }).hidden = true;
        }
    }]);

    return Fieldsettings;
}();

var fieldSettings = new Fieldsettings();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var filterNamePrice = [];
var filterNameCount = [];
var filterNameCategory = [];
var filterNameDate = [];
var result = [];
var Tablefilter = {};
var filterNameChecked = [];
var dataFilter = [];
var finalResults = [];
var filterNamebyName = [];

var Filter = function () {
    function Filter() {
        _classCallCheck(this, Filter);

        var filterHtml = document.querySelector('#js-filter-content').textContent.trim();
        this.parentFilter = document.querySelector(".table-control");
        this.parentFilter.insertAdjacentHTML("beforeend", filterHtml);
        this.btnFilter = document.querySelector("#btnFilter");
        this.modalFilter = document.querySelector("#modalFilter");

        this.arrowFilter = document.querySelector(".filter_btn__dropdown-arrow");
        this.inputDate2 = document.querySelector("#inputdateMax");
        this.inputDate1 = document.querySelector("#inputdateMin");
        this.openCloseFilter = document.querySelector("#openCloseFilter");
        this.link1 = document.querySelector("#linkdate1");
        this.inputDate2.style.visibility = "hidden";
        this.inputDate1.style.visibility = "hidden";
        this.link2 = document.querySelector("#linkdate2");

        window.onload = function () {
            filter.setupSliders();
        };
    }

    _createClass(Filter, [{
        key: "setupSliders",
        value: function setupSliders() {
            var sliderSections = document.getElementsByClassName("filter_modal");

            for (var x = 0; x < sliderSections.length; x++) {
                var sliders = sliderSections[x].getElementsByTagName("input");
                for (var y = 0; y < sliders.length; y++) {
                    if (sliders[y].type === "range") {
                        sliders[y].oninput = filter.getVals;
                        sliders[y].oninput();
                    }
                }
            }
        }

        //OPEN FILTER

    }, {
        key: "open",
        value: function open() {
            this.link1.style.visibility = "visible";
            this.link2.style.visibility = "visible";
            this.modalFilter.style.height = "300px";
            this.parentFilter.style.height = "400px";
            this.modalFilter.style.visibility = "visible";
            this.openCloseFilter.textContent = "ЗАКРЫТЬ";
            this.arrowFilter.style.transform = "rotate(225deg)";
            this.btnFilter.style.borderColor = "white";
            this.btnFilter.setAttribute("onclick", "filter.close()");
        }
        //CLOSE FILTER

    }, {
        key: "close",
        value: function close() {
            this.modalFilter.style.visibility = "hidden";
            this.inputDate2.style.visibility = "hidden";
            this.modalFilter.style.height = "1px";
            this.parentFilter.style.height = "100px";
            this.inputDate1.style.visibility = "hidden";
            this.link2.style.visibility = "hidden";
            this.link1.style.visibility = "hidden";
            this.arrowFilter.style.transform = "rotate(45deg)";
            this.openCloseFilter.textContent = "ОТКРЫТЬ";
            this.btnFilter.setAttribute("onclick", "filter.open()");
        }
    }, {
        key: "linkdate1",
        value: function linkdate1() {
            this.link1.style.visibility = "hidden";
            this.inputDate1.style.visibility = "visible";
        }
    }, {
        key: "linkdate2",
        value: function linkdate2() {
            this.link2.style.visibility = "hidden";
            this.inputDate2.style.visibility = "visible";
        }
        //RESULT OF FILTER

    }, {
        key: "resultID",
        value: function resultID() {
            result = [];
            result[0] = filterNamePrice;
            result[1] = filterNameCount;
            if (filterNameCategory.length !== 0) {
                result.push(filterNameCategory);
            }
            if (filterNameDate.length !== 0) {
                result.push(filterNameDate);
            }
            if (searchSelectByname.value.length !== 0) {
                result.push(filterNamebyName);
            }
            finalResults = [];
            var sorted_arr = [];
            switch (result.length) {
                case 2:
                    sorted_arr = result[0].concat(result[1]);
                    sorted_arr.sort(function (a, b) {
                        return a - b;
                    });
                    for (var j = 0; j < sorted_arr.length - 1; j++) {
                        if (sorted_arr[j] === sorted_arr[j + 1]) {
                            finalResults.push(sorted_arr[j]);
                        }
                    }
                    break;
                case 3:
                    sorted_arr = result[0].concat(result[1], result[2]);
                    sorted_arr.sort(function (a, b) {
                        return a - b;
                    });
                    for (var _j = 0; _j < sorted_arr.length - 1; _j++) {
                        if (sorted_arr[_j] === sorted_arr[_j + 1] && sorted_arr[_j] === sorted_arr[_j + 2]) {
                            finalResults.push(sorted_arr[_j]);
                        }
                    }
                    result.splice(2, 1);
                    break;
                case 4:
                    sorted_arr = result[0].concat(result[1], result[2], result[3]);
                    sorted_arr.sort(function (a, b) {
                        return a - b;
                    });
                    for (var _j2 = 0; _j2 < sorted_arr.length - 1; _j2++) {
                        if (sorted_arr[_j2] === sorted_arr[_j2 + 1] && sorted_arr[_j2] === sorted_arr[_j2 + 2] && sorted_arr[_j2] === sorted_arr[_j2 + 3]) {
                            finalResults.push(sorted_arr[_j2]);
                        }
                    }
                    result.splice(3, 1);
                    break;

                case 5:
                    sorted_arr = result[0].concat(result[1], result[2], result[3], result[4]);
                    sorted_arr.sort(function (a, b) {
                        return a - b;
                    });
                    for (var _j3 = 0; _j3 < sorted_arr.length - 1; _j3++) {
                        if (sorted_arr[_j3] === sorted_arr[_j3 + 1] && sorted_arr[_j3] === sorted_arr[_j3 + 2] && sorted_arr[_j3] === sorted_arr[_j3 + 3] && sorted_arr[_j3] === sorted_arr[_j3 + 4]) {
                            finalResults.push(sorted_arr[_j3]);
                        }
                    }
                    result.splice(4, 1);
                    break;

                default:
                    break;
            }

            page.setSettings(finalResults);
            startRow = 0;
            endRow = ROWS_PER_PAGE;
            page.render();
            this.filterData();
        }
        //SET NEW DATA AFTER FILTER

    }, {
        key: "filterData",
        value: function filterData() {

            dataFilter = [];
            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < finalResults.length; j++) {
                    if (data[i].id === finalResults[j]) {
                        dataFilter.push(data[i]);
                    }
                }
            }
            table.renderData();
        }
        //CHECKBOX INPUT

    }, {
        key: "checkControl",
        value: function checkControl() {
            filterNameChecked = [];
            var list = document.getElementsByClassName("filter_checkboxes__input");
            for (var i = 0; i < list.length; i++) {
                if (list[i].checked === true) {
                    filterNameChecked[i] = list[i].value;
                }
            }

            filterNameCategory = [];
            for (var j = 0; j < filterNameChecked.length; j++) {
                for (var h = 0; h < data.length; h++) {
                    if (filterNameChecked[j] == data[h].category) {
                        filterNameCategory.push(data[h].id);
                    }
                }
            }

            this.resultID();
        }
        //SEARCH BY NAME INPUT

    }, {
        key: "searchSelectByName",
        value: function searchSelectByName() {
            filterNamebyName = [];
            if (searchSelectByname.value != "") {
                for (var i = 0; i < data.length; i++) {
                    data[i].name.slice(0, searchSelectByname.value.length);
                    if (searchSelectByname.value.toLowerCase().indexOf(data[i].name.slice(0, searchSelectByname.value.length).toLowerCase()) > -1) {
                        filterNamebyName.push(data[i].id);
                    }
                }
            }

            this.resultID();
        }
        //DATE INPUT MIN_MAX DATE

    }, {
        key: "filterMimMaxDate",
        value: function filterMimMaxDate() {
            var minDate = new Date(inputdateMin.value);
            var maxDate = new Date(inputdateMax.value);
            filterNameDate = [];
            for (var i = 0; i < data.length; i++) {
                var mainDate = new Date(data[i].creationDate);
                if (inputdateMin.value === "" && inputdateMax.value !== "" && mainDate <= maxDate) {
                    filterNameDate.push(data[i].id);
                }
                if (inputdateMin.value !== "" && inputdateMax.value === "" && mainDate >= minDate) {
                    filterNameDate.push(data[i].id);
                }
                if (inputdateMin.value !== "" && inputdateMax.value !== "" && mainDate <= maxDate && mainDate >= minDate) {
                    filterNameDate.push(data[i].id);
                    this.resultID();
                }
            }
            this.resultID();
        }
        //RANGE INPUT MIN-MAX PRICE

    }, {
        key: "inputRangePrice",
        value: function inputRangePrice() {
            minPrice.value = minRangePrice.value;
            maxPrice.value = maxRangePrice.value;
            Tablefilter.priceMin = minRangePrice.value;
            Tablefilter.priceMax = maxRangePrice.value;
            this.filterMinMaxPrice();
        }
    }, {
        key: "filterMinMaxPrice",
        value: function filterMinMaxPrice() {
            filterNamePrice = [];
            for (var i = 0; i < data.length; i++) {
                if (data[i].price >= Tablefilter.priceMin && data[i].price <= Tablefilter.priceMax) {
                    filterNamePrice.push(data[i].id);
                }
            }

            this.resultID();
        }
        //RANGE INPUT MIN-MAX COUNT

    }, {
        key: "inputRangeCount",
        value: function inputRangeCount() {
            minCount.value = minRangeQuantity.value;
            maxCount.value = maxRangeQuantity.value;
            Tablefilter.numberMin = minRangeQuantity.value;
            Tablefilter.numberMax = maxRangeQuantity.value;
            this.filterMinMaxCount();
        }
    }, {
        key: "filterMinMaxCount",
        value: function filterMinMaxCount() {
            filterNameCount = [];
            for (var i = 0; i < data.length; i++) {
                if (data[i].count >= Tablefilter.numberMin && data[i].count <= Tablefilter.numberMax) {
                    filterNameCount.push(data[i].id);
                }
            }

            this.resultID();
        }
        //TO GET VALUES FROM RANGE INPUT

    }, {
        key: "getVals",
        value: function getVals() {
            var parent = this.parentNode;
            var slides = parent.getElementsByTagName("input");
            var slide1 = parseFloat(slides[0].value);
            var slide2 = parseFloat(slides[1].value);
            if (slide1 > slide2) {
                var tmp = slide2;
                slide2 = slide1;
                slide1 = tmp;
            }
            switch (parent.parentNode.id) {
                case 'filter-block-by-price':
                    document.getElementById("minRangePrice").value = slide1;
                    document.getElementById("maxRangePrice").value = slide2;
                    Tablefilter.priceMin = slide1;
                    Tablefilter.priceMax = slide2;
                    filter.filterMinMaxPrice();
                    break;
                case 'filter-block-by-quantity':
                    document.getElementById("minRangeQuantity").value = slide1;
                    document.getElementById("maxRangeQuantity").value = slide2;
                    Tablefilter.numberMin = slide1;
                    Tablefilter.numberMax = slide2;
                    filter.filterMinMaxCount();
                    break;
                default:
                    break;
            }
        }
    }]);

    return Filter;
}();

var filter = new Filter();
"use strict";
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Integration = function () {
    function Integration(contentHtml) {
        var _this = this;

        _classCallCheck(this, Integration);

        this.contentHtml = contentHtml;
        this.triggerBtn = document.querySelector('#js-menu-integration');
        this.currentBtn = this.triggerBtn.querySelector('.burger-menu__item');
        this.triggerBtn.addEventListener('click', function () {
            return _this.render();
        });
    }

    _createClass(Integration, [{
        key: 'render',
        value: function render() {
            this.target = event.target;
            this.prev = document.querySelector(".burger-menu__item--selected");
            if (typeof this.prev !== "undefined" && this.prev !== this.target) {
                this.prev.classList.remove("burger-menu__item--selected");
            }
            this.currentBtn.classList.add("burger-menu__item--selected");
            document.querySelector('.content').innerHTML = this.contentHtml;
        }
    }]);

    return Integration;
}();

var integrationPageHtml = document.querySelector('#js-integration-content').textContent.trim();
var integrationPage = new Integration(integrationPageHtml);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// const burgerBtn = '.burger';
// const burgerMenuContainer = '.burger-menu__container';
// const menuItemBtn = '.menu__item';
// const openClassBurgerCont = 'burger-menu__container--open';
// const openClassBurgerBtn = 'burger--open';
// const openClassMenuItemBtn = 'menu__item--open';
// const classBurgerCont = 'burger-menu__container';
// const classBurger = 'burger';
// const classMenu = 'menu';

// class Menu {
//     constructor(selector, options) {
//         this.element = document.querySelector(selector);
//         this.options = options;
//     }

//     toggle() {
//         this.element.classList.toggle(this.options.openStateClass);
//     }

//     close() {
//         this.element.classList.remove(this.options.openStateClass);
//     }
// }


// const userCabinetMenu = new Menu(menuItemBtn, {
//     openStateClass: openClassMenuItemBtn
// });
// const burgerMenu = new Menu(burgerBtn, {
//     openStateClass: openClassBurgerBtn
// });
// const burgerContMenu = new Menu(burgerMenuContainer, {
//     openStateClass: openClassBurgerCont
// });

// userCabinetMenu.element.addEventListener('click', event => {
//     event.preventDefault();
//     userCabinetMenu.toggle();
// })

// userCabinetMenu.element.addEventListener('mouseleave', () => userCabinetMenu.close());

// burgerMenu.element.addEventListener('click', event => {
//     event.preventDefault();

//     burgerContMenu.toggle();
//     burgerMenu.toggle();
//     event.stopPropagation()
// });

// burgerContMenu.element.addEventListener('mouseleave', event => {
//     burgerContMenu.close();
//     burgerMenu.close();
// });

// document.body.addEventListener('click', (event) => {
//     let el = event.target;
//     let shouldMenuClose = true;

//     while( el != document.body) {
//         let hasBurger = el.classList.contains(classBurger);
//         let hasBurgerMenu = el.classList.contains(classBurgerCont);
//         let hasMenu = el.classList.contains(classMenu);

//         if (hasBurger || hasBurgerMenu || hasMenu) {
//             shouldMenuClose = false;
//             break;
//         }

//         el = el.parentNode;
//     }

//     if (shouldMenuClose) {
//         burgerMenu.close();
//         userCabinetMenu.close();
//         burgerContMenu.close();
//         event.preventDefault();
//     }
// });

var Menu = function () {
    function Menu(selector, options) {
        var _this = this;

        _classCallCheck(this, Menu);

        this.element = document.querySelector(selector);
        this.subitems = document.querySelectorAll(selector + (' ' + options.subItemClass));
        this.options = options;
        this.element.addEventListener('click', function (event) {
            return _this.onClick(event);
        });
        this.element.addEventListener('mouseleave', function (event) {
            return _this.onItemMouseLeave(event);
        });

        this.subitems.forEach(function (subitem) {
            return subitem.addEventListener('click', function (event) {
                return _this.onSubItemClick(event);
            });
        });
    }

    _createClass(Menu, [{
        key: 'onClick',
        value: function onClick(event) {
            this.prevent();

            if (this.options.onClick) this.options.onClick.call(this);
        }
    }, {
        key: 'onSubItemClick',
        value: function onSubItemClick(event) {
            this.prevent();
            this.close();

            if (this.options.onSubItemClick) this.options.onSubItemClick.call(this);
        }
    }, {
        key: 'onItemMouseLeave',
        value: function onItemMouseLeave(event) {
            if (this.options.onItemMouseLeave) this.options.onItemMouseLeave.call(this);
        }
    }, {
        key: 'prevent',
        value: function prevent() {
            event.preventDefault();
            event.stopPropagation();
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            this.element.classList.toggle(this.options.openStateClass);
        }
    }, {
        key: 'open',
        value: function open() {
            this.element.classList.add(this.options.openStateClass);
        }
    }, {
        key: 'hasOpenClass',
        value: function hasOpenClass() {
            return this.element.classList.contains(this.options.openStateClass);
        }
    }, {
        key: 'close',
        value: function close() {
            this.element.classList.remove(this.options.openStateClass);
        }
    }]);

    return Menu;
}();

var userCabinetMenu = new Menu('.menu', {
    openStateClass: 'menu__item--open',
    subItemClass: '.menu__subitem',
    onClick: function onClick() {
        this.open();
    },
    onItemMouseLeave: function onItemMouseLeave() {
        this.close();
    }
});

var burgerBtn = new Menu('.burger', {
    openStateClass: 'burger--open',
    onClick: function onClick() {
        this.toggle();
        burgerMenu.toggle();
    }
});

var burgerMenu = new Menu('.burger-menu__container', {
    openStateClass: 'burger-menu__container--open',
    onClick: function onClick() {
        this.close();
        burgerBtn.close();
    },
    onItemMouseLeave: function onItemMouseLeave() {
        this.close();
        burgerBtn.close();
    }
});
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddProduct = function () {
    function AddProduct(categoryList) {
        var _this = this;

        _classCallCheck(this, AddProduct);

        this.categoryList = categoryList;
        document.body.querySelector(".table-control__button--add-new").addEventListener('click', function () {
            return _this.render();
        });
    }

    _createClass(AddProduct, [{
        key: "render",
        value: function render() {
            if (document.body.querySelector(".tabs__item--active").textContent === "Товары") {
                this.container = document.createElement('div');
                this.container.classList.add('new-product__wrapper');
                document.querySelector('.content').insertBefore(this.container, document.querySelector('.data-table'));
                this.background = document.createElement('div');
                this.background.classList.add('new-product__background');
                document.querySelector('.content').appendChild(this.background);
                this.newProductHtml = document.querySelector('#js-add-new-product').textContent.trim();
                this.container.insertAdjacentHTML('afterbegin', this.newProductHtml);
                this.defineVariables();
                this.categorySelectionHtml = this.categoryList.map(function (elem) {
                    return "<li class=\"new-product__form__selection__option\" hidden>" + elem + "</li>";
                }).reduce(function (accum, elem) {
                    return accum + elem;
                });
                this.categorySelection.insertAdjacentHTML('beforeend', this.categorySelectionHtml);
                this.categoryOption = this.container.querySelectorAll('.new-product__form__selection__option');
                this.addEvents();
            }
        }
    }, {
        key: "defineVariables",
        value: function defineVariables() {
            this.nameInput = this.container.querySelector('#js-new-product-name');
            this.form = this.container.querySelector('#js-new-product-form');
            this.categoryInput = this.container.querySelector('#js-new-product-category');
            this.categorySelection = this.container.querySelector('#js-select-category');
            this.categorySelectionBtn = this.container.querySelector('#js-form-selection-arrow');
            this.descriptionInput = this.container.querySelector('#js-new-product-description');
            this.numberInputs = this.container.querySelectorAll('.new-product__form__input--number__label', '.new-product__form__input--number__label--small');
            this.priceInput = this.container.querySelector('#js-new-product-price');
            this.countInput = this.container.querySelector('#js-new-product-count');
            this.widthInput = this.container.querySelector('#js-new-product-width');
            this.heightInput = this.container.querySelector('#js-new-product-height');
            this.lengthInput = this.container.querySelector('#js-new-product-length');
            this.weightInput = this.container.querySelector('#js-new-product-weight');
            this.volumeInput = this.container.querySelector('#js-new-product-volume');
            this.submitBtn = this.container.querySelector('#js-new-product-submit-btn');
            this.closeBtn = this.container.querySelector('#js-new-product-close-btn');
        }
    }, {
        key: "addEvents",
        value: function addEvents() {
            var _this2 = this;

            document.querySelector('.content').addEventListener('click', function () {
                if (event.target === _this2.closeBtn || event.target === _this2.background) {
                    _this2.closeForm();
                }
            });
            this.form.addEventListener('input', function () {
                return _this2.autocompleteVolume();
            });
            this.nameInput.addEventListener('mouseleave', function () {
                return _this2.showStarInRequired();
            });
            this.form.addEventListener('click', function () {
                if (event.target === _this2.nameInput) {
                    _this2.hideStarInRequired();
                } else if (event.target.classList.contains('new-product__form__selection__option')) {
                    _this2.selectCategory();
                    _this2.hideCategories();
                } else if (event.target === _this2.categorySelectionBtn || event.target.parentNode === _this2.categorySelectionBtn) {
                    if (Array.from(_this2.categoryOption).every(function (elem) {
                        return elem.hidden === true;
                    })) {
                        _this2.showCategories();
                    } else {
                        _this2.hideCategories();
                    }
                } else if (event.target === _this2.categoryInput) {
                    _this2.categoryInput.value = '';
                    _this2.showCategories();
                }
            });
            this.form.addEventListener('keyup', function () {
                return _this2.autocompleteSelection();
            });
            this.submitBtn.addEventListener('click', function () {
                return _this2.createNewProduct();
            });
            document.addEventListener('submit', function () {
                setTimeout(function () {
                    return _this2.closeForm();
                }, 1000);
                _this2.showSuccessMessage();
            });
        }
    }, {
        key: "showCategories",
        value: function showCategories() {
            this.categoryOption.forEach(function (elem) {
                return elem.removeAttribute('hidden');
            });
        }
    }, {
        key: "selectCategory",
        value: function selectCategory() {
            this.categoryInput.value = event.target.textContent;
        }
    }, {
        key: "hideCategories",
        value: function hideCategories() {
            this.categoryOption.forEach(function (elem) {
                return elem.setAttribute('hidden', true);
            });
        }
    }, {
        key: "hideStarInRequired",
        value: function hideStarInRequired() {
            this.container.querySelector('#js-required-field-star').setAttribute('hidden', true);
        }
    }, {
        key: "showStarInRequired",
        value: function showStarInRequired() {
            var _this3 = this;

            if (this.nameInput.value === '') {
                setTimeout(function () {
                    return _this3.container.querySelector('#js-required-field-star').removeAttribute('hidden');
                }, 1000);
            }
        }
    }, {
        key: "autocompleteSelection",
        value: function autocompleteSelection() {
            var _this4 = this;

            if (event.target === this.categoryInput) {
                var inputLength = this.categoryInput.value.length;
                if (inputLength !== 0) {
                    this.categoryOption.forEach(function (elem) {
                        elem.textContent.toLocaleLowerCase().slice(0, inputLength) === _this4.categoryInput.value.toLowerCase() ? elem.hidden = false : elem.hidden = true;
                    });
                }
            }
        }
    }, {
        key: "autocompleteVolume",
        value: function autocompleteVolume() {
            if (event.target === this.widthInput || event.target === this.heightInput || event.target === this.lengthInput) {
                if (this.widthInput.value.length > 0 && this.heightInput.value.length > 0 && this.lengthInput.value.length > 0) {
                    this.volumeInput.value = Math.round(this.container.querySelector('#js-new-product-width').value * this.container.querySelector('#js-new-product-height').value * this.container.querySelector('#js-new-product-length').value / 4000 * 100) / 100;
                }
            }
        }
    }, {
        key: "createNewProduct",
        value: function createNewProduct() {
            if (this.nameInput.value !== '' && this.priceInput.value !== '' && this.weightInput.value !== '' && this.volumeInput.value !== '') {
                var maxId = data.map(function (elem) {
                    return elem.id;
                }).reduce(function (accum, next) {
                    return accum > next ? accum : next;
                });
                var newId = maxId + 1;
                var productToAdd = {
                    id: newId,
                    name: this.nameInput.value,
                    category: this.categoryInput.value,
                    description: this.descriptionInput.value,
                    price: this.priceInput.value,
                    count: this.countInput.value,
                    creationDate: new Date().getFullYear() + "-0" + (new Date().getMonth() + 1) + "-" + new Date().getDate(),
                    size: this.widthInput.value + " x " + this.heightInput.value + " x " + this.lengthInput.value,
                    weight: this.weightInput.value,
                    volume: this.volumeInput.value
                };
                data.push(productToAdd);
                dataFilter.push(productToAdd);
            }
        }
    }, {
        key: "showSuccessMessage",
        value: function showSuccessMessage() {
            if (event.target === this.form) {
                event.preventDefault();
                document.querySelector('.new-product__form__heading').classList.add('new-product__form__heading--success');
                document.querySelector('.new-product__form__heading').textContent = "Товар добавлен";
                if (this.form.parentNode !== null) {
                    this.container.removeChild(this.form);
                }
            }
        }
    }, {
        key: "closeForm",
        value: function closeForm() {
            if (this.container.parentNode !== null && this.background.parentNode !== null) {
                document.querySelector('.content').removeChild(this.container);
                document.querySelector('.content').removeChild(this.background);
            }
        }
    }]);

    return AddProduct;
}();

var productCategoryList = data.map(function (elem) {
    return elem.category;
}).sort().filter(function (el, i, arr) {
    return arr.includes(el, i + 1) === false;
});
var newProduct = new AddProduct(productCategoryList);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Orders = function () {
		function Orders(fields) {
				var _this = this;

				_classCallCheck(this, Orders);

				this.triggerBtn = document.querySelector('#js-menu-orders');
				this.currentBtn = this.triggerBtn.querySelector('.burger-menu__item');
				this.triggerBtn.addEventListener('click', function () {
						return _this.render();
				});
				this.fields = fields;
		}

		_createClass(Orders, [{
				key: 'render',
				value: function render() {
						this.target = event.target;
						this.prev = document.querySelector(".burger-menu__item--selected");
						if (typeof this.prev !== "undefined" && this.prev !== this.target) {
								this.prev.classList.remove("burger-menu__item--selected");
						}
						this.currentBtn.classList.add("burger-menu__item--selected");

						document.querySelector('.content').innerHTML = '';
						this.renderContainer();
				}
		}, {
				key: 'renderContainer',
				value: function renderContainer() {
						var parent = document.body.querySelector('.content');
						parent.innerHTML = '';
						this.tabsContainer = createElement(parent, 'div', 'tabs');
						tabs = new Tabs();
						tableControl = new TableControlBlock("новый товар");
						table = new Table(this.fields);

						filter = new Filter();
						filter.setupSliders();

						sorting = new Sorting();
						fieldSettings = new Fieldsettings(this.fields);
						page = new Pagination(data);
				}
		}, {
				key: 'createElem',
				value: function createElem(parent, tag, elemClass, nextSibling) {
						var element = document.createElement(tag);
						var elemClassArr = elemClass.split(" ");
						elemClassArr.map(function (elemClass) {
								return element.classList.add(elemClass);
						});
						if (!nextSibling) {
								parent.appendChild(element);
						} else {
								parent.insertBefore(element, nextSibling);
						};
						return element;
				}
		}]);

		return Orders;
}();

var ordersPage = new Orders(productTableFields);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pagination = function () {
    function Pagination(data) {
        _classCallCheck(this, Pagination);

        // document.body.querySelector(".content").innerHTML += `<div class="pagination"></div>`;

        var content = document.querySelector('.content');
        content.insertAdjacentHTML('beforeend', '<div class="pagination"></div>');
        this.container = document.body.querySelector(".pagination");

        this.container.addEventListener('click', this.switchPages.bind(this));

        window.addEventListener('resize', this.controlSize.bind(this));
        this.setSettings(data);
        this.render();
    }

    _createClass(Pagination, [{
        key: 'setSettings',
        value: function setSettings(data) {
            // от сервера мы получаем общее количество ТОВАРОВ

            this.totalPages = data.length < 10 ? 1 : Math.ceil(data.length / 10);
            this.currentPage = 1;
            this.arrPages = Array.from({ length: this.totalPages + 1 }, function (v, i) {
                return i;
            });
            this.arrPages.splice(0, 1);
            this.mobile = screen.width < 780 ? true : false;
            this.arrPagesToShow = this.pagesToShow(data);
        }
    }, {
        key: 'pagesToShow',
        value: function pagesToShow(data) {

            var startPage = void 0,
                endPage = void 0;
            this.totalPages = Math.ceil(data.length / 10);
            if (this.mobile) {
                startPage = this.currentPage <= 4 ? 0 : this.currentPage - 2;
                endPage = this.currentPage <= this.totalPages - 4 ? this.currentPage + 1 : this.totalPages;
            } else {
                startPage = this.currentPage <= 4 ? 0 : this.currentPage - 3;
                endPage = this.currentPage <= this.totalPages - 4 ? this.currentPage + 2 : this.totalPages;
            }

            this.arrPagesToShow = this.arrPages.slice(startPage, endPage);
            if (endPage != this.totalPages) {
                this.arrPagesToShow.push("...", this.totalPages);
            }
            if (startPage != 0) {
                this.arrPagesToShow.unshift(1, "...");
            }

            return this.arrPagesToShow;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;

            this.container.innerHTML = '';
            if (this.currentPage != 1) {
                this.container.innerHTML = '\n                <div class="pagination__item">\n                    <a link="#" class="pagination__link pagination__link__arrow pagination__link__arrow--left"></a>\n                </div>';
            };
            this.arrPagesToShow.map(function (elem) {
                if (elem == _this.currentPage) {
                    _this.container.innerHTML += '\n                <div class="pagination__item pagination__item--active">\n                    <a link="#" class="pagination__link pagination__link--active">' + elem + '</a>\n                </div>';
                } else {
                    _this.container.innerHTML += '\n                        <div class="pagination__item">\n                            <a link="#" class="pagination__link">' + elem + '</a>\n                        </div>';
                }
            });
            if (this.currentPage != this.totalPages) {
                this.container.innerHTML += '\n                <div class="pagination__item">\n                    <a link="#" class="pagination__link pagination__link__arrow pagination__link__arrow--right"></a>\n                </div>';
            }
        }
    }, {
        key: 'switchPages',
        value: function switchPages() {
            // debugger;
            event.preventDefault();
            if (event.target.innerHTML == "..." || event.target == this.container || event.target.classList.contains("pagination__item")) {
                return;
            };

            if (event.target.classList.contains("pagination__link__arrow--left")) {
                if (this.currentPage != 1) {
                    this.currentPage--;
                }
            } else if (event.target.classList.contains("pagination__link__arrow--right")) {
                if (this.currentPage != this.totalPages) {
                    this.currentPage++;
                }
            } else {
                this.currentPage = Number(event.target.innerHTML);
            }

            startRow = (this.currentPage - 1) * ROWS_PER_PAGE;
            endRow = this.currentPage * ROWS_PER_PAGE;
            if (endRow >= data.length) {
                endRow = data.length;
            };
            table.renderData();
            if (dataFilter) {
                this.render(this.pagesToShow(dataFilter));
            } else this.render(this.pagesToShow(data));
        }
    }, {
        key: 'controlSize',
        value: function controlSize(event) {
            if (screen.width < 780 && !this.mobile) {
                this.mobile = true;
                this.render(this.pagesToShow());
                return;
            }
            if (screen.width > 780 && this.mobile) {
                this.mobile = false;
                this.render(this.pagesToShow());
            }
        }
    }]);

    return Pagination;
}();

var page = new Pagination(data);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Products = function () {
    function Products(contentHtml) {
        var _this = this;

        _classCallCheck(this, Products);

        this.contentHtml = contentHtml;
        this.triggerBtn = document.querySelector('#js-menu-products');
        this.currentBtn = this.triggerBtn.querySelector('.burger-menu__item');
        this.triggerBtn.addEventListener('click', function () {
            return _this.render();
        });
    }

    _createClass(Products, [{
        key: 'render',
        value: function render() {
            this.target = event.target;
            this.prev = document.querySelector(".burger-menu__item--selected");
            if (typeof this.prev !== "undefined" && this.prev !== this.target) {
                this.prev.classList.remove("burger-menu__item--selected");
            }
            this.currentBtn.classList.add("burger-menu__item--selected");
            document.querySelector('.content').innerHTML = this.contentHtml;
        }
    }]);

    return Products;
}();

var productsPageHtml = document.querySelector('#js-products-content').textContent.trim();
var productsPage = new Products(productsPageHtml);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Settings = function () {
    function Settings(contentHtml) {
        var _this = this;

        _classCallCheck(this, Settings);

        this.contentHtml = contentHtml;
        this.triggerBtn = document.querySelector('#js-menu-settings');
        this.currentBtn = this.triggerBtn.querySelector('.burger-menu__item');
        this.triggerBtn.addEventListener('click', function () {
            return _this.render();
        });
    }

    _createClass(Settings, [{
        key: 'render',
        value: function render() {
            this.target = event.target;
            this.prev = document.querySelector(".burger-menu__item--selected");
            if (typeof this.prev !== "undefined" && this.prev !== this.target) {
                this.prev.classList.remove("burger-menu__item--selected");
            }
            this.currentBtn.classList.add("burger-menu__item--selected");
            document.querySelector('.content').innerHTML = this.contentHtml;
        }
    }]);

    return Settings;
}();

var settingsPageHtml = document.querySelector('#js-settings-content').textContent.trim();
var settingsPage = new Settings(settingsPageHtml);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sorting = function () {
	function Sorting(table) {
		_classCallCheck(this, Sorting);

		this.tHead = document.querySelector(".data-table-header");
		this.prev;
		this.tHead.addEventListener("click", this.sort.bind(this));
	}

	_createClass(Sorting, [{
		key: "sortNames",
		value: function sortNames(criteria) {
			if (typeof this.prev !== "undefined" && this.prev !== event.target) {
				this.prev.classList.remove("desc");
			}
			event.target.classList.toggle("desc");
			if (event.target.classList.contains("desc")) {
				dataFilter.sort(function (prev, next) {
					if (prev[criteria] < next[criteria]) return 1;
					if (prev[criteria] > next[criteria]) return -1;
					return 0;
				});
				table.renderData();
			} else {
				dataFilter.sort(function (prev, next) {
					if (prev[criteria] < next[criteria]) return -1;
					if (prev[criteria] > next[criteria]) return 1;
					return 0;
				});
				table.renderData();
			}
			this.prev = event.target;
		}
	}, {
		key: "sortByDate",
		value: function sortByDate(criteria) {
			if (typeof this.prev !== "undefined" && this.prev !== event.target) {
				this.prev.classList.remove("desc");
			}
			if (event.target.textContent === "Дата создания" || "Дата поставки") {
				event.target.classList.toggle("desc");
				if (event.target.classList.contains("desc")) {
					dataFilter.sort(function (prev, next) {
						return new Date(next[criteria]) - new Date(prev[criteria]);
					});
					table.renderData();
				} else {
					dataFilter.sort(function (prev, next) {
						return new Date(prev[criteria]) - new Date(next[criteria]);
					});
					table.renderData();
				}
			}
			this.prev = event.target;
		}
	}, {
		key: "sortBySize",
		value: function sortBySize() {
			if (typeof this.prev !== "undefined" && this.prev !== event.target) {
				this.prev.classList.remove("desc");
			}
			if (event.target.textContent === "Размеры(ШхВхД)") {
				event.target.classList.toggle("desc");
				if (event.target.classList.contains("desc")) {
					dataFilter.sort(function (prev, next) {
						var prevSize = prev.size.split("x");
						var nextSize = next.size.split("x");
						var prevVolume = prevSize[0] * prevSize[1] * prevSize[2];
						var nextVolume = nextSize[0] * nextSize[1] * nextSize[2];
						return nextVolume - prevVolume;
					});
					table.renderData();
				} else {
					dataFilter.sort(function (prev, next) {
						var prevSize = prev.size.split("x");
						var nextSize = next.size.split("x");
						var prevVolume = prevSize[0] * prevSize[1] * prevSize[2];
						var nextVolume = nextSize[0] * nextSize[1] * nextSize[2];
						return prevVolume - nextVolume;
					});
					table.renderData();
				}
			}
			this.prev = event.target;
		}
	}, {
		key: "uncheckHeader",
		value: function uncheckHeader() {
			if (document.querySelector(".data-table-header .checkbox").checked) {
				document.querySelector(".data-table-header .checkbox").checked = false;
			}
		}
	}, {
		key: "sort",
		value: function sort() {
			this.target = event.target.textContent;
			switch (this.target) {
				case "Название товара":
					{
						this.uncheckHeader();
						this.sortNames("name");
						break;
					}
				case "Категория":
					{
						this.uncheckHeader();
						this.sortNames("category");
						break;
					}
				case "Кол-во на складе":
					{
						this.uncheckHeader();
						this.sortNames("count");
						break;
					}
				case "Цена":
					{
						this.uncheckHeader();
						this.sortNames("price");
						break;
					}
				case "Закупочная цена":
					{
						this.uncheckHeader();
						this.sortNames("price");
						break;
					}
				case "Дата создания":
					{
						this.uncheckHeader();
						this.sortByDate("supplyDate");
						break;
					}
				case "Дата поставки":
					{
						this.uncheckHeader();
						this.sortByDate("creationDate");
						break;
					}
				case "Вес":
					{
						this.uncheckHeader();
						this.sortNames("weight");
						break;
					}
				case "Размеры(ШхВхД)":
					{
						this.uncheckHeader();
						this.sortBySize();
						break;
					}
			}
		}
	}]);

	return Sorting;
}();

var sorting = new Sorting();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Statistics = function () {
    function Statistics(contentHtml) {
        var _this = this;

        _classCallCheck(this, Statistics);

        this.contentHtml = contentHtml;
        this.triggerBtn = document.querySelector('#js-menu-statistics');
        this.currentBtn = this.triggerBtn.querySelector('.burger-menu__item');
        this.triggerBtn.addEventListener('click', function () {
            return _this.render();
        });
    }

    _createClass(Statistics, [{
        key: 'render',
        value: function render() {
            this.target = event.target;
            this.prev = document.querySelector(".burger-menu__item--selected");
            if (typeof this.prev !== "undefined" && this.prev !== this.target) {
                this.prev.classList.remove("burger-menu__item--selected");
            }
            this.currentBtn.classList.add("burger-menu__item--selected");
            document.querySelector('.content').innerHTML = this.contentHtml;
        }
    }]);

    return Statistics;
}();

var statisticsPageHtml = document.querySelector('#js-statistics-content').textContent.trim();
var statisticsPage = new Statistics(statisticsPageHtml);
/*class Table {
    constructor(fields, data = {}) {
        document.body.querySelector(".content").innerHTML += 
        `<table class="data-table">
            <thead class="data-table-header"></thead>
            <tbody class="data-table-body"></tbody>
        </table>`;

        this.fields = fields;
        this.renderHeader();
        this.renderData(data);
    }

    renderHeader() {
        // header
        let tableHeader = document.querySelector(".data-table-header");
        let headerContent = `<tr class = "row-table">
                                <th class = "order-ctrl"><input type = "checkbox" class ="checkbox"></th>
                                ${this.fields.map((elem) => elem.hidden === false ? `<th class = "order-ctrl">${elem.view}</th>` : '')}
                                <th class = "order-ctrl"><div class="table__fieldsettings"><p class="table__fieldsettings_heading"><span class="table__fieldsettings_heading__text"></span><img class="table__fieldsettings__btn" src="../images/field_settings.png"></p></div></th>`;
        tableHeader.innerHTML = headerContent;
    }


    // data
    renderData(data) {
        let bodyContent = '';
        let result = data.map((elem) => {
            bodyContent += `<tr class = "row-table"><td class="table-column-checkbox"><input type="checkbox" class ="checkbox row-table"></td>`;
            Object.keys(elem).map((key) => key !== 'id' ? ((this.fields.filter((field) => field.hidden === false).forEach((item) => key === item.name ? (key === 'name' ? bodyContent += `<td class="table-column-name"><a href="Ссылка на товар/${elem.id}" class="table-column-name">${elem.name}</a></td>` : bodyContent += `<td class="table-column-category"><span>${elem[key]}</span></td>`) : ''))) : '');
            bodyContent += `<td class="table-column-settings"><span>...</span></td></tr>`;
        });
        document.querySelector(".data-table-body").innerHTML = bodyContent;
    }
}
let productTableFields = [
    { name: "name", view: "Название товара", hidden: false },
    { name: "category", view: "Категория", hidden: false },
    { name: "count", view: "Количество на складе", hidden: false },
    { name: "price", view: "Цена", hidden: false },
    { name: "creationDate", view: "Дата создания", hidden: false },
    { name: "weight", view: "Вес", hidden: true },
    { name: "size", view: "Размеры(ШхВхД)", hidden: true }
]
let table = new Table(productTableFields, data.slice(0, ROWS_PER_PAGE));

*/
"use strict";
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Team = function () {
    function Team(contentHtml) {
        var _this = this;

        _classCallCheck(this, Team);

        this.contentHtml = contentHtml;
        this.triggerBtn = document.querySelector('#js-menu-team');
        this.currentBtn = this.triggerBtn.querySelector('.burger-menu__item');
        this.triggerBtn.addEventListener('click', function () {
            return _this.render();
        });
    }

    _createClass(Team, [{
        key: 'render',
        value: function render() {
            this.target = event.target;
            this.prev = document.querySelector(".burger-menu__item--selected");
            if (typeof this.prev !== "undefined" && this.prev !== this.target) {
                this.prev.classList.remove("burger-menu__item--selected");
            }
            this.currentBtn.classList.add("burger-menu__item--selected");
            document.querySelector('.content').innerHTML = this.contentHtml;
        }
    }]);

    return Team;
}();

var teamPageHtml = document.querySelector('#js-team-content').textContent.trim();
var teamPage = new Team(teamPageHtml);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Likecounter = function () {
    function Likecounter() {
        var _this = this;

        _classCallCheck(this, Likecounter);

        this.likeImg = document.querySelector('#js-likeImg');
        this.container = document.querySelector('#js-likeBtn');
        this.likeBtnCounter = document.querySelector('#js-likeBtnCounter');
        this.likeCounter = 0;
        this.render();
        this.container.addEventListener('click', function () {
            return _this.countLikes();
        });
    }

    _createClass(Likecounter, [{
        key: 'render',
        value: function render() {
            if (localStorage.getItem('liked') === 'true') {
                this.likeImg.setAttribute('src', '../images/tutorial/icon_liked.png');
            } else {
                this.likeImg.setAttribute('src', '../images/tutorial/icon_like.png');
            }
            this.likeBtnCounter.textContent = this.likeCounter;
        }
    }, {
        key: 'countLikes',
        value: function countLikes() {
            event.preventDefault();
            if (localStorage.getItem("liked") === "true") {
                this.likeCounter--;
                localStorage.setItem("liked", "false");
                this.likeImg.setAttribute('src', '../images/tutorial/icon_like.png');
            } else {
                this.likeCounter++;
                localStorage.setItem("liked", "true");
                this.likeImg.setAttribute('src', '../images/tutorial/icon_liked.png');
            }
            this.likeBtnCounter.textContent = this.likeCounter;
            return this.likeCounter;
        }
    }]);

    return Likecounter;
}();

//let tutorialLikeCounter = new Likecounter();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tutorial = function () {
    function Tutorial(contentHtml) {
        var _this = this;

        _classCallCheck(this, Tutorial);

        this.contentHtml = contentHtml;
        // this.sidebarHtml = document.querySelector('#js-tutorial-sidebar').textContent.trim();
        this.triggerBtn = document.querySelector('#js-menu-tutorials');
        this.currentBtn = this.triggerBtn.querySelector('.burger-menu__item');
        this.triggerBtn.addEventListener('click', function () {
            return _this.render();
        });
    }

    _createClass(Tutorial, [{
        key: 'render',
        value: function render() {
            this.target = event.target;
            this.prev = document.querySelector(".burger-menu__item--selected");
            if (typeof this.prev !== "undefined" && this.prev !== this.target) {
                this.prev.classList.remove("burger-menu__item--selected");
            }
            this.currentBtn.classList.add("burger-menu__item--selected");
            document.querySelector('.content').innerHTML = this.contentHtml;
            new Likecounter();
        }
    }]);

    return Tutorial;
}();

var tutorialPageHtml = document.querySelector('#js-tutorial-content').textContent.trim();
var tutorialPage = new Tutorial(tutorialPageHtml);