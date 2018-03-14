class AddProduct {
    constructor(categoryList) {
        this.categoryList = categoryList;
        document.body.querySelector(".table-control__button--add-new").addEventListener('click', () => this.render());
    }
        render() {
            this.container = document.createElement('div');
            this.container.classList.add('new-product__wrapper');
            document.querySelector('.content').insertBefore(this.container, document.body.querySelector('.table-control'));
            document.querySelector('.content').removeChild(document.querySelector('.pagination'));
            document.querySelector('.content').removeChild(document.querySelector('.data-table'));
            document.querySelector('.content').removeChild(document.querySelector('.table-control'));
            this.newProductHtml = document.querySelector('#js-add-new-product').textContent.trim();
            this.container.insertAdjacentHTML('afterbegin', this.newProductHtml);
            this.categorySelection = this.container.querySelector('#js-select-category');
            this.categorySelection.insertAdjacentHTML('beforeend', this.categoryList.map((elem) => `<option value=${elem}>${elem}</option>`).reduce((accum, elem) => accum + elem));
            this.nameInput = this.container.querySelector('#js-new-product-name');
            this.form = this.container.querySelector('#js-new-product-form');
            this.categoryInput = this.container.querySelector('#js-new-product-category');
            this.descriptionInput = this.container.querySelector('#js-new-product-description');
            this.priceInput = this.container.querySelector('#js-new-product-price');
            this.countInput = this.container.querySelector('#js-new-product-count');
            this.widthInput = this.container.querySelector('#js-new-product-width');
            this.heightInput = this.container.querySelector('#js-new-product-height');
            this.lengthInput = this.container.querySelector('#js-new-product-length');
            this.volumeInput = this.container.querySelector('#js-new-product-volume');
            this.categoryAddBtn = this.container.querySelector('#js-category-add-btn');
            this.submitBtn = this.container.querySelector('#js-submit-btn');
            this.form.addEventListener('input', () => this.autocompleteFields());
            this.categoryAddBtn.addEventListener('click', () => {
                event.preventDefault();
                this.addCategory()
            });
            this.submitBtn.addEventListener('click', () => this.createNewProduct());
        };
        addCategory() {
            if (this.categoryList.includes(this.categoryInput.value) === false) {
                this.categoryList.push(this.categoryInput.value);
                this.categoryList.sort();
                this.autocompleteFields();
            }
        }
        autocompleteFields() {
            if (event.target === this.categorySelection) {
                this.categoryInput.value = this.categorySelection.value;
            } else if (event.target === this.widthInput || event.target === this.heightInput || event.target === this.lengthInput) {
                if (this.widthInput.value.length > 0 && this.heightInput.value.length > 0 && this.lengthInput.value.length > 0) {
                    this.volumeInput.value = Math.round(this.container.querySelector('#js-new-product-width').value * this.container.querySelector('#js-new-product-height').value * this.container.querySelector('#js-new-product-length').value / 4000 * 100) / 100;
                }
            }
        };
        createNewProduct() {
            let productToAdd = {
                name: this.nameInput.value,
                category: this.categoryInput.value,
                description: this.descriptionInput.value,
                price: this.priceInput.value,
                count: this.countInput.value,
                size: `${this.widthInput.value} x ${this.heightInput.value} x ${this.lengthInput.value}` ,
                volume: this.volumeInput.value
            };
            data.push(productToAdd);
        }

}

let productCategoryList = data.map((elem) => elem.category).sort().filter((el, i, arr) => arr.includes(el, i + 1) === false);
let newProduct = new AddProduct(productCategoryList);

