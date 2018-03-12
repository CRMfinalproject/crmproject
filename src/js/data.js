
const ROWS_PER_PAGE = 10;
let data = [
    {
        "id": 1,
        "name": "Помада Kylie",
        "category": "Косметика",
        "count": 259,
        "price": 299,
        "creationDate": "2018-02-01",
        "weight": 10,
        "size": "1x1x5"
    },
    {
        "id": 2,
        "name": "Обезьянка",
        "category": "Игрушки",
        "count": 24,
        "price": 359,
        "creationDate": "2018-02-01",
        "weight": 250,
        "size": "40x40x30"
    },
    {
        "id": 3,
        "name": "Кофта",
        "category": "Одежда",
        "count": 52,
        "price": 300,
        "creationDate": "2018-02-01",
        "weight": 500,
        "size": "40x40x50"
    },
    {
        "id": 4,
        "name": "Кроссовки",
        "category": "Обувь",
        "count": 100,
        "price": 999,
        "creationDate": "2018-02-01",
        "weight": 700,
        "size": "35x20x18"
    },
    {
        "id": 5,
        "name": "Библия",
        "category": "Книги",
        "count": 500,
        "price": 55,
        "creationDate": "2018-02-01",
        "weight": 1000,
        "size": "20x15x4"
    },
    {
        "id": 6,
        "name": "Мыло",
        "category": "Хоз.товары",
        "count": 500,
        "price": 15,
        "creationDate": "2018-02-01",
        "weight": 100,
        "size": "8x4x2"
    },
    {
        "id": 7,
        "name": "Куртка",
        "category": "Кожа",
        "count": 5,
        "price": 5000,
        "creationDate": "2018-02-01",
        "weight": 3000,
        "size": "1000x1000x50"
    },
    {
        "id": 8,
        "name": "Ремень брючной",
        "category": "Ремни",
        "count": 10,
        "price": 199,
        "creationDate": "2018-02-01",
        "weight": 300,
        "size": "1200x40x5"
    },
    {
        "id": 9,
        "name": "Энциклопедия",
        "category": "Книги",
        "count": 200,
        "price": 150,
        "creationDate": "2018-02-01",
        "weight": 1000,
        "size": "300x20x5"
    },
    {
        "id": 10,
        "name": "Джинсы",
        "category": "Одежда",
        "count": 100,
        "price": 699,
        "creationDate": "2018-02-01",
        "weight": 850,
        "size": "1100x700x10"
    },
    {
        "id": 11,
        "name": "Лак",
        "category": "Косметика",
        "count": 1000,
        "price": 99,
        "creationDate": "2018-02-01",
        "weight": 10,
        "size": "1x1x5"
    },
    {
        "id": 12,
        "name": "Кеды",
        "category": "Обувь",
        "count": 155,
        "price": 499,
        "creationDate": "2018-02-01",
        "weight": 10,
        "size": "5x1x1"
    },
    {
        "id": 13,
        "name": "Шампунь",
        "category": "Хоз.товары",
        "count": 50,
        "price": 79,
        "creationDate": "2018-02-01",
        "weight": 150,
        "size": "21x12x3"
    },
    {
        "id": 14,
        "name": "Помада Kylie",
        "category": "Косметика",
        "count": 259,
        "price": 299,
        "creationDate": "2018-02-01",
        "weight": 10,
        "size": "1x1x5"
    },
    {
        "id": 15,
        "name": "Обезьянка",
        "category": "Игрушки",
        "count": 24,
        "price": 359,
        "creationDate": "2018-02-01",
        "weight": 250,
        "size": "40x40x30"
    },
    {
        "id": 16,
        "name": "Кофта",
        "category": "Одежда",
        "count": 52,
        "price": 300,
        "creationDate": "2018-02-01",
        "weight": 500,
        "size": "40x40x50"
    },
    {
        "id": 17,
        "name": "Кроссовки",
        "category": "Обувь",
        "count": 100,
        "price": 999,
        "creationDate": "2018-02-01",
        "weight": 700,
        "size": "35x20x18"
    },
    {
        "id": 18,
        "name": "Библия",
        "category": "Книги",
        "count": 500,
        "price": 55,
        "creationDate": "2018-02-01",
        "weight": 1000,
        "size": "20x15x4"
    },
    {
        "id": 19,
        "name": "Мыло",
        "category": "Хоз.товары",
        "count": 500,
        "price": 15,
        "creationDate": "2018-02-01",
        "weight": 100,
        "size": "8x4x2"
    },
    {
        "id": 20,
        "name": "Куртка",
        "category": "Кожа",
        "count": 5,
        "price": 5000,
        "creationDate": "2018-02-01",
        "weight": 3000,
        "size": "1000x1000x50"
    },
    {
        "id": 21,
        "name": "Ремень брючной",
        "category": "Ремни",
        "count": 10,
        "price": 199,
        "creationDate": "2018-02-01",
        "weight": 300,
        "size": "1200x40x5"
    },
    {
        "id": 22,
        "name": "Энциклопедия",
        "category": "Книги",
        "count": 200,
        "price": 150,
        "creationDate": "2018-02-01",
        "weight": 1000,
        "size": "300x20x5"
    },
    {
        "id": 23,
        "name": "Джинсы",
        "category": "Одежда",
        "count": 100,
        "price": 699,
        "creationDate": "2018-02-01",
        "weight": 850,
        "size": "1100x700x10"
    },
    {
        "id": 24,
        "name": "Лак",
        "category": "Косметика",
        "count": 1000,
        "price": 99,
        "creationDate": "2018-02-01",
        "weight": 10,
        "size": "1x1x5"
    },
    {
        "id": 25,
        "name": "Кеды",
        "category": "Обувь",
        "count": 155,
        "price": 499,
        "creationDate":  "2018-02-01",
        "weight": 10,
        "size": "5x1x1"
    },
    {
        "id": 26,
        "name": "Шампунь",
        "category": "Хоз.товары",
        "count": 50,
        "price": 79,
        "creationDate": "02/21/2018",
        "weight": 150,
        "size": "21x12x3"
    },
    {
        "id": 27,
        "name": "Помада Kylie",
        "category": "Косметика",
        "count": 259,
        "price": 299,
        "creationDate": "02/21/2018",
        "weight": 10,
        "size": "1x1x5"
    },
    {
        "id": 28,
        "name": "Обезьянка",
        "category": "Игрушки",
        "count": 24,
        "price": 359,
        "creationDate": "02/20/2018",
        "weight": 250,
        "size": "40x40x30"
    },
    {
        "id": 29,
        "name": "Кофта",
        "category": "Одежда",
        "count": 52,
        "price": 300,
        "creationDate": "02/13/2018",
        "weight": 500,
        "size": "40x40x50"
    },
    {
        "id": 30,
        "name": "Кроссовки",
        "category": "Обувь",
        "count": 100,
        "price": 999,
        "creationDate": "02/12/2018",
        "weight": 700,
        "size": "35x20x18"
    },
    {
        "id": 31,
        "name": "Библия",
        "category": "Книги",
        "count": 500,
        "price": 55,
        "creationDate": "02/19/2018",
        "weight": 1000,
        "size": "20x15x4"
    },
    {
        "id": 32,
        "name": "Мыло",
        "category": "Хоз.товары",
        "count": 500,
        "price": 15,
        "creationDate": "01/18/2018",
        "weight": 100,
        "size": "8x4x2"
    },
    {
        "id": 33,
        "name": "Куртка",
        "category": "Кожа",
        "count": 5,
        "price": 5000,
        "creationDate": "02/21/2018",
        "weight": 3000,
        "size": "1000x1000x50"
    },
    {
        "id": 34,
        "name": "Ремень брючной",
        "category": "Ремни",
        "count": 10,
        "price": 199,
        "creationDate": "12/21/2017",
        "weight": 300,
        "size": "1200x40x5"
    },
    {
        "id": 35,
        "name": "Энциклопедия",
        "category": "Книги",
        "count": 200,
        "price": 150,
        "creationDate": "02/21/2018",
        "weight": 1000,
        "size": "300x20x5"
    },
    {
        "id": 36,
        "name": "Джинсы",
        "category": "Одежда",
        "count": 100,
        "price": 699,
        "creationDate": "02/01/2018",
        "weight": 850,
        "size": "1100x700x10"
    },
    {
        "id": 37,
        "name": "Лак",
        "category": "Косметика",
        "count": 1000,
        "price": 99,
        "creationDate": "02/21/2018",
        "weight": 10,
        "size": "1x1x5"
    },
    {
        "id": 38,
        "name": "Кеды",
        "category": "Обувь",
        "count": 155,
        "price": 499,
        "creationDate":  "2018-02-01",
        "weight": 10,
        "size": "5x1x1"
    },
    {
        "id": 39,
        "name": "Шампунь",
        "category": "Хоз.товары",
        "count": 50,
        "price": 79,
        "creationDate": "02/21/2018",
        "weight": 150,
        "size": "21x12x3"
    },
    {
        "id": 40,
        "name": "Помада Kylie",
        "category": "Косметика",
        "count": 259,
        "price": 299,
        "creationDate": "02/21/2018",
        "weight": 10,
        "size": "1x1x5"
    },
    {
        "id": 41,
        "name": "Обезьянка",
        "category": "Игрушки",
        "count": 24,
        "price": 359,
        "creationDate": "02/20/2018",
        "weight": 250,
        "size": "40x40x30"
    },
    {
        "id": 42,
        "name": "Кофта",
        "category": "Одежда",
        "count": 52,
        "price": 300,
        "creationDate": "02/13/2018",
        "weight": 500,
        "size": "40x40x50"
    },
    {
        "id": 43,
        "name": "Кроссовки",
        "category": "Обувь",
        "count": 100,
        "price": 999,
        "creationDate": "02/12/2018",
        "weight": 700,
        "size": "35x20x18"
    },
    {
        "id": 44,
        "name": "Библия",
        "category": "Книги",
        "count": 500,
        "price": 55,
        "creationDate": "02/19/2018",
        "weight": 1000,
        "size": "20x15x4"
    },
    {
        "id": 45,
        "name": "Мыло",
        "category": "Хоз.товары",
        "count": 500,
        "price": 15,
        "creationDate": "01/18/2018",
        "weight": 100,
        "size": "8x4x2"
    },
    {
        "id": 46,
        "name": "Куртка",
        "category": "Кожа",
        "count": 5,
        "price": 5000,
        "creationDate": "02/21/2018",
        "weight": 3000,
        "size": "1000x1000x50"
    },
    {
        "id": 47,
        "name": "Ремень брючной",
        "category": "Ремни",
        "count": 10,
        "price": 199,
        "creationDate": "12/21/2017",
        "weight": 300,
        "size": "1200x40x5"
    },
    {
        "id": 48,
        "name": "Энциклопедия",
        "category": "Книги",
        "count": 200,
        "price": 150,
        "creationDate": "02/21/2018",
        "weight": 1000,
        "size": "300x20x5"
    },
    {
        "id": 49,
        "name": "Джинсы",
        "category": "Одежда",
        "count": 100,
        "price": 699,
        "creationDate": "02/01/2018",
        "weight": 850,
        "size": "1100x700x10"
    },
    {
        "id": 50,
        "name": "Лак",
        "category": "Косметика",
        "count": 1000,
        "price": 99,
        "creationDate": "02/21/2018",
        "weight": 10,
        "size": "1x1x5"
    },
    {
        "id": 51,
        "name": "Кеды",
        "category": "Обувь",
        "count": 155,
        "price": 499,
        "creationDate":  "2018-02-01",
        "weight": 10,
        "size": "5x1x1"
    },
    {
        "id": 52,
        "name": "Шампунь",
        "category": "Хоз.товары",
        "count": 50,
        "price": 79,
        "creationDate": "02/21/2018",
        "weight": 150,
        "size": "21x12x3"
    }
];
