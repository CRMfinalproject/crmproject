class Pagination {
    constructor(data) {
        // document.body.querySelector(".content").innerHTML += `<div class="pagination"></div>`;

        let content = document.querySelector('.content');
        content.insertAdjacentHTML('beforeend', '<div class="pagination"></div>');
        this.container = document.body.querySelector(".pagination");



        this.container.addEventListener('click', this.switchPages.bind(this));

        window.addEventListener('resize', this.controlSize.bind(this));
        this.setSettings(data);
        this.render();
    }
    setSettings(data) {
        // от сервера мы получаем общее количество ТОВАРОВ

        this.totalPages = (data.length < 10) ? 1 : Math.ceil(data.length/10);
        this.currentPage = 1;
        this.arrPages = Array.from({ length: (this.totalPages + 1) }, (v, i) => i);
        this.arrPages.splice(0, 1);
        this.mobile = (screen.width < 780) ? true : false;
        this.arrPagesToShow = this.pagesToShow(data);
    }
    pagesToShow(data) {

        let startPage, endPage;
        this.totalPages = Math.ceil(data.length / 10);
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
    switchPages() {
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

        startRow = (this.currentPage - 1) * ROWS_PER_PAGE;
        endRow = this.currentPage * ROWS_PER_PAGE;
        if (endRow >= data.length) {
            endRow = data.length};
        table.renderData();
        if (dataFilter) {
            this.render(this.pagesToShow(dataFilter))
        } else this.render(this.pagesToShow(data));

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

let page = new Pagination(data);
