class Pagination {
    constructor(data = {}) {
        this.setSettings(data);
        this.render();
    }
    setSettings(data = {}) {
        this.totalPages = data.totalPages || 17;
        this.currentPage = data.currentPage || 6;
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
        let container = document.body.querySelector(".pagination");
        container.innerHTML = ``;
        if (this.currentPage != 1) {
            container.innerHTML = `
                <div class="pagination__item">
                    <a link="#" class="pagination__link pagination__link__arrow pagination__link__arrow--left"></a>
                </div>`
        };
        this.arrPagesToShow.map(elem => {
            if (elem == this.currentPage) {
                container.innerHTML += `
                <div class="pagination__item pagination__item--active">
                    <a link="#" class="pagination__link pagination__link--active">${elem}</a>
                </div>`}
            else {
                container.innerHTML += `
                        <div class="pagination__item">
                            <a link="#" class="pagination__link">${elem}</a>
                        </div>`
            }
        });
        if (this.currentPage != this.totalPages) {
            container.innerHTML += `
                <div class="pagination__item">
                    <a link="#" class="pagination__link pagination__link__arrow pagination__link__arrow--right"></a>
                </div>`;
        }
        //    container.addEventListener('click', this.switchPages.bind(this));
    }
    switchPages(event) {
        // debugger;
        event.preventDefault();
        if (event.target.innerHTML == "...") { return };
        
        if (event.target.classList.contains("pagination__link__arrow--left")) {
            if (this.currentPage != 1) { this.currentPage-- }
        }
        else if (event.target.classList.contains("pagination__link__arrow--right")) {
            if (this.currentPage != this.totalPages) { this.currentPage++ }
        }
        else { this.currentPage = Number(event.target.innerHTML); }
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

let page = new Pagination;
let container = document.body.querySelector(".pagination");
container.addEventListener('click', page.switchPages.bind(page));

window.addEventListener('resize', page.controlSize.bind(page));