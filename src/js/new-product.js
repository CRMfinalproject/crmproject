class AddProduct {
    constructor(categoryList) {
        this.container = document.querySelector('.new-product__wrapper');
        this.categorySelection = document.querySelector('#js-select-category');
        this.categoryList = categoryList;
        //document.body.querySelector(".table-control__button--add-new").addEventListener('click', () => this.render());
        this.createCategoryList();
        this.container.querySelector('form').addEventListener('input', () => this.autocompleteFields());
        this.container.querySelector('#js-category-add-btn').addEventListener('click', () => this.addCategory());
        this.container.querySelector('#js-submit-btn').addEventListener('click', () => this.createNewProduct());

    }
        render() {};
        createCategoryList() {
            this.categorySelection.insertAdjacentHTML('beforeend', this.categoryList.map((elem) => `<option value=${elem}>${elem}</option>`).reduce((accum, elem) => accum + elem));
        };
        addCategory() {
            if (this.categoryList.includes(this.container.querySelector('#js-new-product-category').value) === false) {
                this.categoryList.push(this.container.querySelector('#js-new-product-category').value);
                this.categoryList.sort();
                this.createCategoryList();
            }
        }
        autocompleteFields() {
            console.log(event.target);
            if (event.target === this.container.querySelector('select')) {
                this.container.querySelector('#js-new-product-category').value = this.container.querySelector('select').value;
            }
            if (this.container.querySelector('#js-new-product-width').value.length > 0 && this.container.querySelector('#js-new-product-height').value.length > 0 && this.container.querySelector('#js-new-product-length').value.length > 0) {
                this.container.querySelector('#js-new-product-volume').value = Math.round(this.container.querySelector('#js-new-product-width').value * this.container.querySelector('#js-new-product-height').value * this.container.querySelector('#js-new-product-length').value / 4000 * 100) / 100;
            }

        };
        createNewProduct() {
            let productToAdd = {
                name: this.container.querySelector('#js-new-product-name').value,
                category: this.container.querySelector('#js-new-product-category').value,
                description: this.container.querySelector('#js-new-product-description').value,
                price: this.container.querySelector('#js-new-product-price').value,
                count: this.container.querySelector('#js-new-product-description').value,
                size: `${this.container.querySelector('#js-new-product-width').value} x ${this.container.querySelector('#js-new-product-height').value} x ${this.container.querySelector('#js-new-product-length').value}` ,
                weight: this.container.querySelector('#js-new-product-weight').value,
                volume: this.container.querySelector('#js-new-product-volume').value


            }
            data.push(productToAdd);
        }

}

let productCategoryList = data.map((elem) => elem.category).sort().filter((el, i, arr) => arr.includes(el, i + 1) === false);
let newProduct = new AddProduct(productCategoryList);

