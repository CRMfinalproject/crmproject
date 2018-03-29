export default class {
    constructor(table) {       
        // debugger;
        this.table = table;

        window.addEventListener('resize', this.controlSize.bind(this));
        this.setSettings();
        this.renderContainer();
        this.render();
    }
    setSettings() {
        this.totalPages = (this.table.data.length < 10) ? 1 : Math.ceil(this.table.data.length/10);
        this.currentPage = 1;
        this.arrPages = Array.from({ length: (this.totalPages + 1) }, (v, i) => i);
        this.arrPages.splice(0, 1);
        this.mobile = (screen.width < 780) ? true : false;
        this.arrPagesToShow = this.pagesToShow(this.table.data);
    }
    pagesToShow() {

        let startPage, endPage;
        this.totalPages = Math.ceil(this.table.data.length / 10);
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
    renderContainer() {
        let content = document.querySelector('.content');
        content.insertAdjacentHTML('beforeend', '<div class="pagination"></div>');
        this.container = document.body.querySelector(".pagination");
        this.container.addEventListener('click', this.switchPages.bind(this));
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
        
        this.table.setCurrentPage(this.currentPage);

        this.table.startRow = (this.currentPage - 1) * this.table.ROWS_PER_PAGE;
        this.table.endRow = this.currentPage * this.table.ROWS_PER_PAGE;
        if (this.table.endRow >= this.table.data.length) {
            this.table.endRow = this.table.data.length};
        this.table.renderData();
        if (this.table.dataFilter) {
            this.render(this.pagesToShow(this.table.dataFilter))
        } else this.render(this.pagesToShow(this.table.data));

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

