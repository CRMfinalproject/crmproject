export default class {
    constructor(productTableFields, table) {
        this.fields = productTableFields;
        this.table = table;
        this.renderContainer();
    }
    renderContainer() {
        // debugger;
        this.container = document.querySelector('.table__fieldsettings');
        this.triggerBtn = document.querySelector('.table__fieldsettings__btn');
        this.headingText = document.querySelector('.table__fieldsettings_heading__text');
        this.form = {};
        this.container.addEventListener('click', () => {
            // debugger;
            this.container.classList.contains('table__fieldsettings--active') ?
                (event.target.classList.contains('table__fieldsettings__item') ||
                    event.target.classList.contains('table__fieldsettings__checkbox') ?
                    this.updateField()
                    : this.hide())
                : this.render()
        });
        document.body.addEventListener('click', () => {
            // debugger;
            if (this.container.classList.contains('table__fieldsettings--active')) {
                if (event.target !== this.triggerBtn &&
                    event.target.classList.contains('table__fieldsettings__item') === false &&
                    event.target.classList.contains('table__fieldsettings__checkbox') === false) {
                    this.hide();
                }
            }
        })
    }
    render() {
            // debugger;
            this.container.classList.add('table__fieldsettings--active');
            this.triggerBtn.setAttribute('src', '../images/field_settings_active.png');
            this.headingText.textContent = "Настройка полей";
            this.form = document.createElement('form');
            this.container.appendChild(this.form);
            this.form.classList.add("table__fieldsettings__form");
            this.form.innerHTML = this.fields.map((elem) => 
                elem.hidden === false ? 
                `<label class="table__fieldsettings__item">
                    <input type="checkbox" class="table__fieldsettings__checkbox" name='${elem.name}' checked> ${elem.view}
                </label>` : 
                `<label class="table__fieldsettings__item">
                    <input type="checkbox" class="table__fieldsettings__checkbox" name='${elem.name}'> ${elem.view}
                </label>`).reduce((accum, elem) => accum + elem);
        };
    hide() {
        // debugger;
        if (event.target.classList.contains('table__fieldsettings__item') === false && event.target.classList.contains('table__fieldsettings__checkbox') === false) {
            this.container.classList.remove('table__fieldsettings--active');
            this.triggerBtn.setAttribute('src', '../images/field_settings.png');
            this.headingText.textContent = '';
            this.container.removeChild(this.form);
            this.table.showColumns();
        }
    };
    updateField() {
        if(event.target.classList.contains('table__fieldsettings__item')) {
            this.selectedField = event.target;
            this.selectedFieldCheckbox = this.selectedField.querySelector('.table__fieldsettings__checkbox');
        } else {
            this.selectedFieldCheckbox = event.target;
        }
        this.selectedFieldCheckbox.checked ? 
            this.fields.find((el) => el.name === this.selectedFieldCheckbox.name).hidden = false : 
            this.fields.find((el) => el.name === this.selectedFieldCheckbox.name).hidden = true;
    }
}

