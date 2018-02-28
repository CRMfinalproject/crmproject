class Pagination {
    constructor(data) {
    //  debugger;       
        this.container = document.body.querySelector(".pagination");

        this.setSettings(data);
        this.render();

        this.container.addEventListener('click', this.switchPages.bind(this));

        window.addEventListener('resize', this.controlSize.bind(this));
    }
    setSettings(data) {
        // от сервера мы получаем общее количество ТОВАРОВ
        this.totalPages = Math.ceil(data.length/10) || 17;
        this.currentPage = 1;
        this.arrPages = Array.from({ length: (this.totalPages + 1) }, (v, i) => i);
        this.arrPages.splice(0, 1);
        this.mobile = (screen.width < 780) ? true : false;
        this.arrPagesToShow = this.pagesToShow();
    }
    pagesToShow() {
        // debugger;
        let startPage, endPage;
        if (this.mobile) {
            startPage = (this.currentPage <= 4) ? 0 : this.currentPage - 2;
            endPage = (this.currentPage <= this.totalPages - 4) ? this.currentPage + 1 : this.totalPages;
        } else {
            startPage = (this.currentPage <= 4) ? 0 : this.currentPage - 3;
            endPage = (this.currentPage <= this.totalPages - 4) ? this.currentPage + 2 : this.totalPages;
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
    render() {
        // debugger;
        this.container.innerHTML = ``;
        if (this.currentPage != 1) {
            this.container.innerHTML = `
                <div class="pagination__item">
                    <a link="#" class="pagination__link pagination__link__arrow pagination__link__arrow--left"></a>
                </div>`
        };
        this.arrPagesToShow.map(elem => {
            if (elem == this.currentPage) {
                this.container.innerHTML += `
                <div class="pagination__item pagination__item--active">
                    <a link="#" class="pagination__link pagination__link--active">${elem}</a>
                </div>`}
            else {
                this.container.innerHTML += `
                        <div class="pagination__item">
                            <a link="#" class="pagination__link">${elem}</a>
                        </div>`
            }
        });
        if (this.currentPage != this.totalPages) {
            this.container.innerHTML += `
                <div class="pagination__item">
                    <a link="#" class="pagination__link pagination__link__arrow pagination__link__arrow--right"></a>
                </div>`;
        }
    }
    switchPages(event) {
        // debugger;
        event.preventDefault();
        if (event.target.innerHTML == "..." || event.target == this.container || 
            event.target.classList.contains("pagination__item")) { return };
        
        if (event.target.classList.contains("pagination__link__arrow--left")) {
            if (this.currentPage != 1) { this.currentPage-- }
        }
        else if (event.target.classList.contains("pagination__link__arrow--right")) {
            if (this.currentPage != this.totalPages) { this.currentPage++ }
        }
        else { this.currentPage = Number(event.target.innerHTML); }
        
        // вызываем renderTable класса Table с записи номер startRow по запись номер endRow (включительно)
        let startRow = (this.currentPage-1) *10;
        let endRow = this.currentPage * 10 - 1;
        if (endRow >= data.length) {
            endRow = data.length-1};
        table.renderTable(data, startRow, endRow);
        this.render(this.pagesToShow()); 
  
    }
    controlSize(event) {
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
}

let data = [
    {
        name: "Помада Kylie",
        category: "Косметика",
        count: 259,
        price: 299,
        creationDate: "21/02/2018"
    },
    {
        name: "Обезьянка",
        category: "Игрушки",
        count: 24,
        price: 359,
        creationDate: "20/02/2018"
    },
    {
        name: "Кофта",
        category: "Одежда",
        count: 52,
        price: 300,
        creationDate: "13/02/2018"
    },
    {
        name: "Кроссовки",
        category: "Обувь",
        count: 100,
        price: 999,
        creationDate: "12/02/2018"
    },
    {
        name: "Библия",
        category: "Книги",
        count: 500,
        price: 55,
        creationDate: "19/02/2018"
    },
    {
        name: "Мыло",
        category: "Хоз.товары",
        count: 500,
        price: 15,
        creationDate: "18/01/2018"
    },
    {
        name: "Куртка",
        category: "Кожа",
        count: 5,
        price: 5000,
        creationDate: "21/02/2018"
    },
    {
        name: "Ремень брючной",
        category: "Ремни",
        count: 10,
        price: 199,
        creationDate: "21/12/2017"
    },
    {
        name: "Энциклопедия",
        category: "Книги",
        count: 200,
        price: 150,
        creationDate: "21/02/2018"
    },
    {
        name: "Джинсы",
        category: "Одежда",
        count: 100,
        price: 699,
        creationDate: "01/02/2018"
    },
    {
        name: "Лак",
        category: "Косметика",
        count: 1000,
        price: 99,
        creationDate: "21/02/2018"
    },
    {
        name: "Кеды",
        category: "Обувь",
        count: 155,
        price: 499,
        creationDate: "11/02/2018"
    },
    {
        name: "Шампунь",
        category: "Хоз.товары",
        count: 50,
        price: 79,
        creationDate: "21/02/2018"
    },
    {
        name: "Помада Kylie",
        category: "Косметика",
        count: 259,
        price: 299,
        creationDate: "21/02/2018"
    },
    {
        name: "Обезьянка",
        category: "Игрушки",
        count: 24,
        price: 359,
        creationDate: "20/02/2018"
    },
    {
        name: "Кофта",
        category: "Одежда",
        count: 52,
        price: 300,
        creationDate: "13/02/2018"
    },
    {
        name: "Кроссовки",
        category: "Обувь",
        count: 100,
        price: 999,
        creationDate: "12/02/2018"
    },
    {
        name: "Библия",
        category: "Книги",
        count: 500,
        price: 55,
        creationDate: "19/02/2018"
    },
    {
        name: "Мыло",
        category: "Хоз.товары",
        count: 500,
        price: 15,
        creationDate: "18/01/2018"
    },
    {
        name: "Куртка",
        category: "Кожа",
        count: 5,
        price: 5000,
        creationDate: "21/02/2018"
    },
    {
        name: "Ремень брючной",
        category: "Ремни",
        count: 10,
        price: 199,
        creationDate: "21/12/2017"
    },
    {
        name: "Энциклопедия",
        category: "Книги",
        count: 200,
        price: 150,
        creationDate: "21/02/2018"
    },
    {
        name: "Джинсы",
        category: "Одежда",
        count: 100,
        price: 699,
        creationDate: "01/02/2018"
    },
    {
        name: "Лак",
        category: "Косметика",
        count: 1000,
        price: 99,
        creationDate: "21/02/2018"
    },
    {
        name: "Кеды",
        category: "Обувь",
        count: 155,
        price: 499,
        creationDate: "11/02/2018"
    },
    {
        name: "Шампунь",
        category: "Хоз.товары",
        count: 50,
        price: 79,
        creationDate: "21/02/2018"
    },
    {
        name: "Помада Kylie",
        category: "Косметика",
        count: 259,
        price: 299,
        creationDate: "21/02/2018"
    },
    {
        name: "Обезьянка",
        category: "Игрушки",
        count: 24,
        price: 359,
        creationDate: "20/02/2018"
    },
    {
        name: "Кофта",
        category: "Одежда",
        count: 52,
        price: 300,
        creationDate: "13/02/2018"
    },
    {
        name: "Кроссовки",
        category: "Обувь",
        count: 100,
        price: 999,
        creationDate: "12/02/2018"
    },
    {
        name: "Библия",
        category: "Книги",
        count: 500,
        price: 55,
        creationDate: "19/02/2018"
    },
    {
        name: "Мыло",
        category: "Хоз.товары",
        count: 500,
        price: 15,
        creationDate: "18/01/2018"
    },
    {
        name: "Куртка",
        category: "Кожа",
        count: 5,
        price: 5000,
        creationDate: "21/02/2018"
    },
    {
        name: "Ремень брючной",
        category: "Ремни",
        count: 10,
        price: 199,
        creationDate: "21/12/2017"
    },
    {
        name: "Энциклопедия",
        category: "Книги",
        count: 200,
        price: 150,
        creationDate: "21/02/2018"
    },
    {
        name: "Джинсы",
        category: "Одежда",
        count: 100,
        price: 699,
        creationDate: "01/02/2018"
    },
    {
        name: "Лак",
        category: "Косметика",
        count: 1000,
        price: 99,
        creationDate: "21/02/2018"
    },
    {
        name: "Кеды",
        category: "Обувь",
        count: 155,
        price: 499,
        creationDate: "11/02/2018"
    },
    {
        name: "Шампунь",
        category: "Хоз.товары",
        count: 50,
        price: 79,
        creationDate: "21/02/2018"
    },
    {
        name: "Обезьянка",
        category: "Игрушки",
        count: 24,
        price: 359,
        creationDate: "20/02/2018"
    },
    {
        name: "Кофта",
        category: "Одежда",
        count: 52,
        price: 300,
        creationDate: "13/02/2018"
    },
    {
        name: "Помада Kylie",
        category: "Косметика",
        count: 259,
        price: 299,
        creationDate: "21/02/2018"
    },
    {
        name: "Обезьянка",
        category: "Игрушки",
        count: 24,
        price: 359,
        creationDate: "20/02/2018"
    },
    {
        name: "Кофта",
        category: "Одежда",
        count: 52,
        price: 300,
        creationDate: "13/02/2018"
    },
    {
        name: "Кроссовки",
        category: "Обувь",
        count: 100,
        price: 999,
        creationDate: "12/02/2018"
    },
    {
        name: "Библия",
        category: "Книги",
        count: 500,
        price: 55,
        creationDate: "19/02/2018"
    },
    {
        name: "Мыло",
        category: "Хоз.товары",
        count: 500,
        price: 15,
        creationDate: "18/01/2018"
    },
    {
        name: "Куртка",
        category: "Кожа",
        count: 5,
        price: 5000,
        creationDate: "21/02/2018"
    },
    {
        name: "Ремень брючной",
        category: "Ремни",
        count: 10,
        price: 199,
        creationDate: "21/12/2017"
    },
    {
        name: "Энциклопедия",
        category: "Книги",
        count: 200,
        price: 150,
        creationDate: "21/02/2018"
    },
    {
        name: "Джинсы",
        category: "Одежда",
        count: 100,
        price: 699,
        creationDate: "01/02/2018"
    },
    {
        name: "Лак",
        category: "Косметика",
        count: 1000,
        price: 99,
        creationDate: "21/02/2018"
    },
    {
        name: "Кеды",
        category: "Обувь",
        count: 155,
        price: 499,
        creationDate: "11/02/2018"
    },
    {
        name: "Шампунь",
        category: "Хоз.товары",
        count: 50,
        price: 79,
        creationDate: "21/02/2018"
    }
];
let table = new Table(data);
let page = new Pagination(data);