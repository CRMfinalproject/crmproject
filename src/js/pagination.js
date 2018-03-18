class Pagination {
    constructor(table) {
        // document.body.querySelector(".content").innerHTML += `<div class="pagination"></div>`;    
        // this.table = table;
        let content = document.querySelector('.content');
        content.insertAdjacentHTML('beforeend', '<div class="pagination"></div>');
        this.container = document.body.querySelector(".pagination");

        this.setSettings();
        this.render();

        this.container.addEventListener('click', this.switchPages.bind(this));

        window.addEventListener('resize', this.controlSize.bind(this));
    }
    setSettings() {
        // от сервера мы получаем общее количество ТОВАРОВ
        debugger;
        this.totalPages = Math.ceil(data.length/10);
        this.currentPage = Math.ceil(endRow/10);
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
        debugger;
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
        startRow = (this.currentPage - 1) * ROWS_PER_PAGE;
        endRow = this.currentPage * ROWS_PER_PAGE;
        if (endRow >= data.length) {
            endRow = data.length};
        table.renderData();
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

let page = new Pagination();
