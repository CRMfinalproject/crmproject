const FIELD_SETTINGS = document.querySelector('#js-field-settings');
let table = {
    fields: [
        { name: "name", view: "Название товара", hidden: false },
        { name: "category", view: "Категория", hidden: false },
        { name: "count", view: "Количество на складе", hidden: false },
        { name: "price", view: "Цена", hidden: false },
        { name: "creationDate", view: "Дата создания", hidden: false },
        { name: "weight", view: "Вес", hidden: false },
        { name: "size", view: "Размеры(ШхВхД)", hidden: false }
    ]
};

class Fieldsettings {
    constructor() {
    }

    render() {
        let fieldSettingsList = '';
        fieldSettingsList = table.fields.map((elem) => elem.hidden === false ? `<p class="table__fieldsettings__item"><input type="checkbox" checked> ${elem.view}</p>` : `<p class="table__fieldsettings__item"><input type="checkbox"> ${elem.view}</p>`).reduce((accum, elem) => accum + elem);
        if (FIELD_SETTINGS.classList.contains('table__fieldsettings--active') === false) {
            FIELD_SETTINGS.classList.add('table__fieldsettings--active');
            FIELD_SETTINGS.innerHTML = `<p class="table__fieldsettings_heading">
                                <span class="table__fieldsettings_heading__text">Настройка полей</span>
                                <img src="../images/settings_active.png">
                            </p>
                            <form action="" class="table__fieldsettings__form">${fieldSettingsList}</form>`;
        } else {
            //FIELD_SETTINGS.classList.remove('table__fieldsettings--active');
            //FIELD_SETTINGS.innerHTML = `<img src="../images/settings.png">`;
        }
    }

    /*setSettings() {
        let settingsSelection = document.querySelectorAll(".table__fieldsettings__checkbox");
        let selectSettings = settingsSelection.forEach((elem) => elem.hasAttribute('checked') ? elem.removeAttribute('checked') : elem.setAttribute('checked'));
        settingsSelection.addEventListener('click', selectSettings);
//= table.fields.map((elem) => (elem.hidden === false) ? elem.hidden = true : elem.hidden = false)

    }*/
}
let fieldSettings = new Fieldsettings();

FIELD_SETTINGS.addEventListener('click', fieldSettings.render);

