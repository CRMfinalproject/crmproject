// FILTER MIN-MAX PRICE

function filterMinMaxPrice() {
    filterNamePrice = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].price >= Tablefilter.priceMin && data[i].price <= Tablefilter.priceMax) {
            filterNamePrice.push(data[i].id);
        }
    }
    // console.log(`RESULT by PRICE ${filterNamePrice}`);
    resultID();
}

// FILTER MIN-MAX COUNT

function filterMinMaxCount() {
    filterNameCount = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].count >= Tablefilter.numberMin && data[i].count <= Tablefilter.numberMax) {
            filterNameCount.push(data[i].id);
        }
    }
    // console.log(`RESULT by COUNT ${filterNameCount}`);
    resultID();

}

//RANGE INPUT STRUCTURE

function getVals() {
    let parent = this.parentNode;
    let slides = parent.getElementsByTagName("input");
    let slide1 = parseFloat(slides[0].value);
    let slide2 = parseFloat(slides[1].value);
    if (slide1 > slide2) {
        let tmp = slide2;
        slide2 = slide1;
        slide1 = tmp;
    }

    switch (parent.parentNode.id) {
        case 'filter-block-by-price':
            document.getElementById("minRangePrice").value = slide1;
            document.getElementById("maxRangePrice").value = slide2;
            Tablefilter.priceMin = slide1;
            Tablefilter.priceMax = slide2;
            filterMinMaxPrice();
            break;
        case 'filter-block-by-quantity':
            document.getElementById("minRangeQuantity").value = slide1;
            document.getElementById("maxRangeQuantity").value = slide2;
            Tablefilter.numberMin = slide1;
            Tablefilter.numberMax = slide2;
            filterMinMaxCount();
            break;
        default:
            break;
    }

}

window.onload = function () {
    const sliderSections = document.getElementsByClassName("filter_modal");

    for (let x = 0; x < sliderSections.length; x++) {
        let sliders = sliderSections[x].getElementsByTagName("input");
        for (let y = 0; y < sliders.length; y++) {
            if (sliders[y].type === "range") {
                sliders[y].oninput = getVals;
                sliders[y].oninput();
            }
        }
    }
};

function inputRangePrice() {
    minPrice.value = minRangePrice.value;
    maxPrice.value = maxRangePrice.value;
    Tablefilter.priceMin = minRangePrice.value;;
    Tablefilter.priceMax = maxRangePrice.value;
    filterMinMaxPrice();
}

function inputRangeCount() {
    minCount.value = minRangeQuantity.value;
    maxCount.value = maxRangeQuantity.value;
    Tablefilter.numberMin = minRangeQuantity.value;
    Tablefilter.numberMax = maxRangeQuantity.value;
    filterMinMaxCount();
}

//FILTER CHECKBOX BY CATEGORY

function checkControl() {
    filterNameChecked = [];
    let list = document.getElementsByClassName("filter_checkboxes__input");
    for (let i = 0; i < list.length; i++) {
        if (list[i].checked === true) {
            filterNameChecked[i] = list[i].value;
        }
    }
    // console.log(`${filterNameChecked}`);
    filterNameCategory = [];
    for (let j = 0; j < filterNameChecked.length; j++) {
        for (let h = 0; h < data.length; h++) {
            if (filterNameChecked[j] == data[h].category) {
                filterNameCategory.push(data[h].id);
            }
        }
    }
    // console.log(`RESULT by CATEGORY ${filterNameCategory}`);
    resultID();
}

//FILTER MIN-MAX DATE

function filterMimMaxDate() {
    let today = new Date();
    let minDate = new Date(inputdateMin.value);
    minDate.setHours(0);
    let maxDate = new Date(inputdateMax.value);
    maxDate.setHours(0);
    filterNameDate = [];
    for (let i = 0; i < data.length; i++) {
        let mainDate = new Date(data[i].creationDate);
        mainDate.setHours(0);
        if (mainDate >= minDate && mainDate <= maxDate) {
            filterNameDate.push(data[i].id);
        }
    }
    // console.log(`RESULT by DATE ${filterNameDate}`);
    resultID();
}

//RESULT FILTER ARRAY OF IDs
let finalResults = [];

function resultID() {
    result[0] = filterNamePrice;
    result[1] = filterNameCount;
    if (filterNameCategory.length !== 0) {
        result[2] = filterNameCategory;
    }
    if (filterNameDate.length !== 0) {
        result[3] = filterNameDate;
    }
    finalResults = [];
    let sorted_arr  = [];
    switch (result.length) {
        case 2:
            sorted_arr = result[0].concat(result[1]);
            sorted_arr.sort(function (a, b) {
                return a - b;
            });
            for (let j = 0; j < sorted_arr.length - 1; j++) {
                if (sorted_arr[j] === sorted_arr[j + 1]) {
                    finalResults.push(sorted_arr[j]);
                }
            }
            break;
        case 3:
            sorted_arr = result[0].concat(result[1],result[2]);
            sorted_arr.sort(function (a, b) {
                return a - b;
            });
            for (let j = 0; j < sorted_arr.length - 1; j++) {
                if (sorted_arr[j] === sorted_arr[j + 1] && sorted_arr[j] === sorted_arr[j + 2]) {
                    finalResults.push(sorted_arr[j]);
                }
            }
            result.splice(2,1);
            break;
        case 4:
            sorted_arr = result[0].concat(result[1],result[2],result[3]);
            sorted_arr.sort(function (a, b) {
                return a - b;
            });
            for (let j = 0; j < sorted_arr.length - 1; j++) {
                if (sorted_arr[j] === sorted_arr[j + 1] && sorted_arr[j] === sorted_arr[j + 2] && sorted_arr[j] === sorted_arr[j + 3]) {
                    finalResults.push(sorted_arr[j]);
                }
            }
            result.splice(3,1);
            break;
        default:
            break;
        //Here must be case 5: SearchingByName
    }
    renderData();
    // return finalResults;
    //Here must be fetch request...
    console.log("Список ID для fetch" + "  " + finalResults);

};

function renderData() {
    let bodyContent = "";

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < finalResults.length; j++) {
            if (data[i].id === finalResults[j]) {

                bodyContent += `<tr class = "row-table" id="row-${data[i].id}">`;
                bodyContent += `<td class="table-column-checkbox"><input type="checkbox" class ="checkbox row-table"></input></td>`;
                bodyContent += `<td class="table-column-name"><a href = "Ссылка на товар/${data[i].id}" class = "table-column-name__link">${data[i].name}</a></td>`;
                bodyContent += `<td class="table-column-category"><span>${data[i].category}</span></td>`;
                bodyContent += `<td class="table-column-count"><span>${data[i].count} шт</span></td>`;
                bodyContent += `<td class="table-column-price"><span>${data[i].price} грн</span></td>`;
                bodyContent += `<td class="table-column-creationDate"><span>${data[i].creationDate}</span></td>`;
                bodyContent += `<td class="table-column-weight"><span>${data[i].weight} г</span></td>`;
                bodyContent += `<td class="table-column-size"><span>${data[i].size} см </span></td>`;
                bodyContent += `
                <td class="table-column-settings">
                    <div class="table-column-actions js-dots">
                        <img src="../images/three-dots.png" class="table-column-actions__dots adsf">
                    </div><div class="table-column-actions js-actions close">
                        <img src="../images/copy-icon.svg" title="переместить" class="table-column-actions__copy">
                        <img src="../images/edit-icon.svg" title="редактировать" class="table-column-actions__edit">
                        <img src="../images/delete-icon.svg" title="удалить" class="table-column-actions__delete">
                    </div><div class="table-column-actions__ok  js-ok close">
                        <button class="button__ok">OK</button>
                    </div><div class="table-column-actions__recover js-recover close">
                        <button class="button__recover">Восстановить</button>
                    </div>
                </td>`;
                bodyContent += `</tr>`;


            }
        }
        console.log(finalResults + "Mmmmm");
    }
    document.querySelector(".data-table-body").innerHTML = bodyContent;
}




class Table {
    constructor(data = {}) {

        document.body.querySelector(".content").innerHTML += 
        `<table class="data-table">
            <thead class="data-table-header"></thead>
            <tbody class="data-table-body"></tbody>
        </table>`;


        this.renderHeader();

    }

    renderHeader() {
        // header
        let headerContent = "";
        headerContent = `<tr class = "row-table">`;
        headerContent += `<th class = "order-ctrl"><input type = "checkbox" class ="checkbox"></input></th>`
        headerContent += `<th class = "order-ctrl">Название товара</th>`;
        headerContent += `<th class = "order-ctrl">Категория</th>`;
        headerContent += `<th class = "order-ctrl">Количество на складе</th>`;
        headerContent += `<th class = "order-ctrl">Цена</th>`;
        headerContent += `<th class = "order-ctrl">Дата создания</th>`;
        headerContent += `<th class = "order-ctrl">Вес</th>`;
        headerContent += `<th class = "order-ctrl">Размеры(ШхВхД)</th>`;
        headerContent += `<th class = "order-ctrl"></th>`; // for settings
        headerContent += `</tr>`;

        document.querySelector(".data-table-header").innerHTML = headerContent;
    }


    }


let table = new Table(finalResults.slice(0, ROWS_PER_PAGE));


