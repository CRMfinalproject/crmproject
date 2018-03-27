class AddProduct {
    constructor(categoryList) {
        this.categoryList = categoryList;
        document.body.querySelector(".table-control__button--add-new").addEventListener('click', () => this.render());
    }
    render() {
        this.container = document.createElement('div');
        this.container.classList.add('new-product__wrapper');
        document.querySelector('.content').insertBefore(this.container, document.querySelector('.data-table'));
        this.background = document.createElement('div');
        this.background.classList.add('new-product__background');
        document.querySelector('.content').appendChild(this.background);
        this.newProductHtml = document.querySelector('#js-add-new-product').textContent.trim();
        this.container.insertAdjacentHTML('afterbegin', this.newProductHtml);
        this.defineVariables();
        this.categorySelectionHtml = this.categoryList.map((elem) => `<li class="new-product__form__selection__option" hidden>${elem}</li>`).reduce((accum, elem) => accum + elem);
        this.categorySelection.insertAdjacentHTML('beforeend', this.categorySelectionHtml);
        this.categoryOption = this.container.querySelectorAll('.new-product__form__selection__option');
        this.addEvents();
    };
    defineVariables() {
        this.nameInput = this.container.querySelector('#js-new-product-name');
        this.form = this.container.querySelector('#js-new-product-form');
        this.categoryInput = this.container.querySelector('#js-new-product-category');
        this.categorySelection = this.container.querySelector('#js-select-category');
        this.categorySelectionBtn = this.container.querySelector('.new-product__form__selection__arrow');
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
        this.arrow = this.container.querySelector("arrow");
    };
    addEvents() {
        document.querySelector('.content').addEventListener('click', () => {
            if (event.target === this.closeBtn || event.target === this.background) {
                this.closeForm();
            }
        })
        this.form.addEventListener('input', () => this.autocompleteVolume());
        this.form.addEventListener('click', () => {
            if (event.target === this.categoryInput || event.target === this.categorySelectionBtn) {
                this.showCategories();
                if (event.target === this.categorySelectionBtn || event.target === this.arrow ){
                    this.hideCategories();
                }
            } else if (event.target.classList.contains('new-product__form__selection__option')) {
                this.selectCategory();
                this.hideCategories();
            }
        });
        this.form.addEventListener('keyup', () => this.autocompleteSelection());
        this.submitBtn.addEventListener('click', () => this.createNewProduct());
        document.addEventListener('submit', () => {
            setTimeout(() => this.closeForm(), 1000)
            this.showSuccessMessage();
        });
    }
    showCategories() {
        this.categoryOption.forEach((elem) => elem.removeAttribute('hidden'));
    };
    selectCategory() {
      this.categoryInput.value = event.target.textContent;
    };
    hideCategories(){
       this.categoryOption.forEach((elem) => elem.setAttribute('hidden', true));
    };
    autocompleteSelection() {
        if (event.target === this.categoryInput) {
            let inputLength = this.categoryInput.value.length;
            if (inputLength !== 0) {
                this.categoryOption.forEach((elem) => {
                    debugger;
                    elem.textContent.toLocaleLowerCase().slice(0, inputLength) === this.categoryInput.value.toLowerCase() ? elem.hidden = false : elem.hidden = true
                })
            }
        }
    }
    autocompleteVolume() {
        if (event.target === this.widthInput || event.target === this.heightInput || event.target === this.lengthInput) {
            if (this.widthInput.value.length > 0 && this.heightInput.value.length > 0 && this.lengthInput.value.length > 0) {
                this.volumeInput.value = Math.round(this.container.querySelector('#js-new-product-width').value * this.container.querySelector('#js-new-product-height').value * this.container.querySelector('#js-new-product-length').value / 4000 * 100) / 100;
            }
        }
    };
    createNewProduct() {
        let productToAdd = {
             id: data.length + 1,
             name: this.nameInput.value,
             category: this.categoryInput.value,
             description: this.descriptionInput.value,
             price: this.priceInput.value,
             count: this.countInput.value,
             creationDate: `${new Date().getFullYear()}-0${new Date().getMonth() + 1}-${new Date().getDate()}`,
             size: `${this.widthInput.value} x ${this.heightInput.value} x ${this.lengthInput.value}` ,
             weight: this.weightInput.value,
             volume: this.volumeInput.value
        };
        data.push(productToAdd);
        dataFilter.push(productToAdd);
    };
    showSuccessMessage() {
         if (event.target === this.form) {
             event.preventDefault();
             document.querySelector('.new-product__form__heading').classList.add('new-product__form__heading--success');
             document.querySelector('.new-product__form__heading').textContent = "Товар добавлен";
             this.container.removeChild(this.form);
         }
    };
    closeForm() {
         document.querySelector('.content').removeChild(this.container);
         document.querySelector('.content').removeChild(this.background);
    }
}
let productCategoryList = data.map((elem) => elem.category).sort().filter((el, i, arr) => arr.includes(el, i + 1) === false);
let newProduct = new AddProduct(productCategoryList);

