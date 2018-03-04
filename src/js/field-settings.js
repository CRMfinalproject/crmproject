const FIELD_SETTINGS = document.querySelector('#js-field-settings');
const FIELD_SETTINGS_BTN = document.querySelector('#js-field-settings-btn');
const FIELD_SETTINGS_HEADING = document.querySelector('#js-field-settings-heading');
let fieldSettingsHeadingText = null;
let fieldSettingsForm = null;

let table = {
    fields: [
        { name: "name", view: "Название товара", hidden: false },
        { name: "category", view: "Категория", hidden: false },
        { name: "count", view: "Количество на складе", hidden: false },
        { name: "price", view: "Цена", hidden: false },
        { name: "creationDate", view: "Дата создания", hidden: false },
        { name: "weight", view: "Вес", hidden: true },
        { name: "size", view: "Размеры(ШхВхД)", hidden: true }
    ]
};

class Fieldsettings {
    constructor() {
    }
    render() {
            FIELD_SETTINGS.classList.add('table__fieldsettings--active');
            FIELD_SETTINGS_BTN.setAttribute('src', '../images/settings_active.png');
            fieldSettingsHeadingText = document.createElement('span');
            FIELD_SETTINGS_HEADING.insertBefore(fieldSettingsHeadingText, FIELD_SETTINGS_BTN);
            FIELD_SETTINGS_HEADING.classList.add("table__fieldsettings_heading__text");
            fieldSettingsHeadingText.textContent = "Настройка полей";
            fieldSettingsForm = document.createElement('form');
            FIELD_SETTINGS.appendChild(fieldSettingsForm);
            fieldSettingsForm.classList.add("table__fieldsettings__form");
            fieldSettingsForm.innerHTML = table.fields.map((elem) => elem.hidden === false ? `<p class="table__fieldsettings__item"><input type="checkbox" class="table__fieldsettings__checkbox" name='${elem.name}' checked> ${elem.view}</p>` : `<p class="table__fieldsettings__item"><input type="checkbox" class="table__fieldsettings__checkbox" name='${elem.name}'> ${elem.view}</p>`).reduce((accum, elem) => accum + elem);
        };
    hide() {
        FIELD_SETTINGS.classList.remove('table__fieldsettings--active');
        FIELD_SETTINGS_BTN.setAttribute('src', '../images/settings.png');
        FIELD_SETTINGS_HEADING.removeChild(fieldSettingsHeadingText);
        FIELD_SETTINGS.removeChild(fieldSettingsForm);
    };
    selectFields() {
        let selectedField = event.target;
        let selectedFieldCheckbox = selectedField.querySelector('.table__fieldsettings__checkbox');
        if (selectedFieldCheckbox.hasAttribute('checked')) {
            selectedFieldCheckbox.removeAttribute('checked');
            table.fields.find((el) => el.name === selectedFieldCheckbox.name).hidden = true;
        } else {
            selectedFieldCheckbox.setAttribute('checked', true);
            table.fields.find((el) => el.name === selectedFieldCheckbox.name).hidden = false;
        }
        //table.render(); --таблица перерисовывается после изменения каждого чекбокса или после закрытия формы?
    }
}
let fieldSettings = new Fieldsettings();

FIELD_SETTINGS.addEventListener('click', function(){
    if (FIELD_SETTINGS.classList.contains('table__fieldsettings--active') === false) {
        fieldSettings.render();
    } else if (FIELD_SETTINGS.classList.contains('table__fieldsettings--active') && event.target !== FIELD_SETTINGS_BTN) {
        fieldSettings.selectFields();
    } else {
        fieldSettings.hide();
    }
});

document.body.addEventListener('click', function() {
    if (FIELD_SETTINGS.classList.contains('table__fieldsettings--active')) {
        if (event.target.parentNode !== fieldSettingsForm && event.target.parentNode !== FIELD_SETTINGS_HEADING) {
            fieldSettings.hide();
        }
    }
});
