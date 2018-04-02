let filterNamePrice = [];
let filterNameCount = [];
let filterNameCategory = [];
let filterNameDate = [];
let result = [];
let Tablefilter = {};
let filterNameChecked = [];
let dataFilter = [];
let finalResults = [];
let filterNamebyName = [];

class Filter{
    constructor() {

        const filterHtml = document.querySelector('#js-filter-content').textContent.trim();
        this.parentFilter = document.querySelector(".table-control");
        this.parentFilter.insertAdjacentHTML("beforeend",filterHtml);
        this.btnFilter = document.querySelector("#btnFilter");
        this.modalFilter = document.querySelector("#modalFilter");

        this.arrowFilter = document.querySelector(".filter_btn__dropdown-arrow");
        this.inputDate2 = document.querySelector("#inputdateMax");
        this.inputDate1 = document.querySelector("#inputdateMin");
        this.openCloseFilter = document.querySelector("#openCloseFilter");
        this.link1 = document.querySelector("#linkdate1");
        this.inputDate2.style.visibility = "hidden";
        this.inputDate1.style.visibility = "hidden";
        this.link2 = document.querySelector("#linkdate2");
        
        window.onload = function () {
            filter.setupSliders();
        };
    }

    setupSliders(){
        const sliderSections = document.getElementsByClassName("filter_modal");

        for (let x = 0; x < sliderSections.length; x++) {
            let sliders = sliderSections[x].getElementsByTagName("input");
            for (let y = 0; y < sliders.length; y++) {
                if (sliders[y].type === "range") {
                    sliders[y].oninput = filter.getVals;
                    sliders[y].oninput();
                }
            }
        }
    }

    //OPEN FILTER
    open(){
        this.link1.style.visibility = "visible";
        this.link2.style.visibility = "visible";
        this.modalFilter.style.height = "300px";
        this.parentFilter.style.height = "400px";
        this.modalFilter.style.visibility = "visible";
        this.openCloseFilter.textContent = "ЗАКРЫТЬ";
        this.arrowFilter.style.transform = "rotate(225deg)";
        this.btnFilter.style.borderColor = "white";
        this.btnFilter.setAttribute("onclick", "filter.close()")
    }
    //CLOSE FILTER
    close(){
        this.modalFilter.style.visibility = "hidden";
        this.inputDate2.style.visibility = "hidden";
        this.modalFilter.style.height = "1px";
        this.parentFilter.style.height = "100px";
        this.inputDate1.style.visibility = "hidden";
        this.link2.style.visibility = "hidden";
        this.link1.style.visibility = "hidden";
        this.arrowFilter.style.transform = "rotate(45deg)";
        this.openCloseFilter.textContent = "ОТКРЫТЬ";
        this.btnFilter.setAttribute("onclick", "filter.open()")
    }
    linkdate1(){
        this.link1.style.visibility = "hidden";
        this.inputDate1.style.visibility = "visible";
    }
    linkdate2(){
        this.link2.style.visibility = "hidden";
        this.inputDate2.style.visibility = "visible";
    }
    //RESULT OF FILTER
    resultID() {
        result = [];
        result[0] = filterNamePrice;
        result[1] = filterNameCount;
        if (filterNameCategory.length !== 0) {
            result.push(filterNameCategory);
        }
        if (filterNameDate.length !== 0) {
            result.push(filterNameDate);
        }
        if (searchSelectByname.value.length !== 0) {
            result.push(filterNamebyName);

        }
        finalResults = [];
        let sorted_arr = [];
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
                sorted_arr = result[0].concat(result[1], result[2]);
                sorted_arr.sort(function (a, b) {
                    return a - b;
                });
                for (let j = 0; j < sorted_arr.length - 1; j++) {
                    if (sorted_arr[j] === sorted_arr[j + 1] && sorted_arr[j] === sorted_arr[j + 2]) {
                        finalResults.push(sorted_arr[j]);
                    }
                }
                result.splice(2, 1);
                break;
            case 4:
                sorted_arr = result[0].concat(result[1], result[2], result[3]);
                sorted_arr.sort(function (a, b) {
                    return a - b;
                });
                for (let j = 0; j < sorted_arr.length - 1; j++) {
                    if (sorted_arr[j] === sorted_arr[j + 1] && sorted_arr[j] === sorted_arr[j + 2] && sorted_arr[j] === sorted_arr[j + 3]) {
                        finalResults.push(sorted_arr[j]);
                    }
                }
                result.splice(3, 1);
                break;

            case 5:
                sorted_arr = result[0].concat(result[1], result[2], result[3], result[4]);
                sorted_arr.sort(function (a, b) {
                    return a - b;
                });
                for (let j = 0; j < sorted_arr.length - 1; j++) {
                    if (sorted_arr[j] === sorted_arr[j + 1] && sorted_arr[j] === sorted_arr[j + 2] && sorted_arr[j] === sorted_arr[j + 3] && sorted_arr[j] === sorted_arr[j + 4]) {
                        finalResults.push(sorted_arr[j]);
                    }
                }
                result.splice(4, 1);
                break;

            default:
                break;
        }

        page.setSettings(finalResults);
        startRow = 0;
        endRow = ROWS_PER_PAGE;
        page.render();
        this.filterData();

    }
    //SET NEW DATA AFTER FILTER
    filterData() {

        dataFilter = [];
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < finalResults.length; j++) {
                if (data[i].id === finalResults[j]) {
                    dataFilter.push(data[i]);
                }
            }
        }
        table.renderData();

    }
    //CHECKBOX INPUT
    checkControl() {
        filterNameChecked = [];
        let list = document.getElementsByClassName("filter_checkboxes__input");
        for (let i = 0; i < list.length; i++) {
            if (list[i].checked === true) {
                filterNameChecked[i] = list[i].value;
            }
        }

        filterNameCategory = [];
        for (let j = 0; j < filterNameChecked.length; j++) {
            for (let h = 0; h < data.length; h++) {
                if (filterNameChecked[j] == data[h].category) {
                    filterNameCategory.push(data[h].id);
                }
            }
        }

        this.resultID();
    }
    //SEARCH BY NAME INPUT
    searchSelectByName() {
        filterNamebyName = [];
        if (searchSelectByname.value != "") {
            for (let i = 0; i < data.length; i++) {
                data[i].name.slice(0, searchSelectByname.value.length);
                if (searchSelectByname.value.toLowerCase().indexOf(data[i].name.slice(0, searchSelectByname.value.length).toLowerCase()) > -1) {
                    filterNamebyName.push(data[i].id);
                }
            }
        }

        this.resultID();
    }
    //DATE INPUT MIN_MAX DATE
    filterMimMaxDate() {
        let minDate = new Date(inputdateMin.value);
        let maxDate = new Date(inputdateMax.value);
        filterNameDate = [];
        for (let i = 0; i < data.length; i++) {
            let mainDate = new Date(data[i].creationDate);
            if (inputdateMin.value === "" && inputdateMax.value !== "" && mainDate <= maxDate) {
                filterNameDate.push(data[i].id);
            }
            if (inputdateMin.value !== "" && inputdateMax.value === "" && mainDate >= minDate) {
                filterNameDate.push(data[i].id);
            }
            if (inputdateMin.value !== "" && inputdateMax.value !== "" && mainDate <= maxDate && mainDate >= minDate) {
                filterNameDate.push(data[i].id);
                this.resultID();
            }
        }
        this.resultID();
    }
    //RANGE INPUT MIN-MAX PRICE
    inputRangePrice() {
        minPrice.value = minRangePrice.value;
        maxPrice.value = maxRangePrice.value;
        Tablefilter.priceMin = minRangePrice.value;
        Tablefilter.priceMax = maxRangePrice.value;
        this.filterMinMaxPrice();
    }
    filterMinMaxPrice() {
        filterNamePrice = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].price >= Tablefilter.priceMin && data[i].price <= Tablefilter.priceMax) {
                filterNamePrice.push(data[i].id);
            }
        }

        this.resultID();
    }
    //RANGE INPUT MIN-MAX COUNT
    inputRangeCount() {
        minCount.value = minRangeQuantity.value;
        maxCount.value = maxRangeQuantity.value;
        Tablefilter.numberMin = minRangeQuantity.value;
        Tablefilter.numberMax = maxRangeQuantity.value;
        this.filterMinMaxCount();
    }

    filterMinMaxCount() {
        filterNameCount = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].count >= Tablefilter.numberMin && data[i].count <= Tablefilter.numberMax) {
                filterNameCount.push(data[i].id);
            }
        }

        this.resultID();

    }
    //TO GET VALUES FROM RANGE INPUT
    getVals() {
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
                filter.filterMinMaxPrice();
                break;
            case 'filter-block-by-quantity':
                document.getElementById("minRangeQuantity").value = slide1;
                document.getElementById("maxRangeQuantity").value = slide2;
                Tablefilter.numberMin = slide1;
                Tablefilter.numberMax = slide2;
                filter.filterMinMaxCount();
                break;
            default:
                break;
        }

    }

}
let filter = new Filter();

