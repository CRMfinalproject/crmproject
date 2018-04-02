import { debug } from "util";

export default class {
    constructor(table) {
        debugger;
        this.modalFilter = document.querySelector("#modalFilter");
        this.btnFilter = document.querySelector("#btnFilter");
        this.parentFilter = document.querySelector(".table-control");
        this.parentFilter.appendChild(this.btnFilter);
        this.parentFilter.appendChild(this.modalFilter);
        this.arrowFilter = document.querySelector(".filter_btn__dropdown-arrow");
        this.inputDate2 = document.querySelector("#inputdateMax");
        this.inputDate1 = document.querySelector("#inputdateMin");
        this.link1 = document.querySelector("#linkdate1");
        this.inputDate2.style.visibility = "hidden";
        this.inputDate1.style.visibility = "hidden";
        this.link2 = document.querySelector("#linkdate2");
        this.table = table;
        this.tableFilter = {};
        this.filterNameDate = [];
        this.finalResults = [];
        this.addEvents();
        this.windowLoad();
    }
    addEvents() {
        this.openCloseFilter = document.body.querySelector("#openCloseFilter");
        debugger;
        this.openCloseFilter.addEventListener("click", () => {
            if (this.openCloseFilter.textContent === "ОТКРЫТЬ") this.open()
            else this.close();
        });

        this.list = document.body.getElementsByClassName("filter_checkboxes__input");
        const checkboxArr = Array.from(this.list);
        checkboxArr.map(checkbox => checkbox.addEventListener("click", () => this.checkControl()));

        this.SelectByName = document.body.querySelector("#searchSelectByname");
        this.SelectByName.addEventListener("keyup", () => {this.searchSelectByname()});

        this.minRangePrice = document.body.querySelector("#minRangePrice");
        this.maxRangePrice = document.body.querySelector("#maxRangePrice");
        this.minRangePrice.addEventListener("keyup", () => { this.inputRangePrice() });
        this.maxRangePrice.addEventListener("keyup", () => { this.inputRangePrice() });

        this.minRangeQuantity = document.body.querySelector("#minRangeQuantity");
        this.maxRangeQuantity = document.body.querySelector("#maxRangeQuantity");
        this.minRangeQuantity.addEventListener("keyup", () => { this.inputRangeCount() });
        this.maxRangeQuantity.addEventListener("keyup", () => { this.inputRangeCount() });

    }
    windowLoad() {
        const sliderSections = document.getElementsByClassName("filter_modal");

        for (let x = 0; x < sliderSections.length; x++) {
            let sliders = sliderSections[x].getElementsByTagName("input");
            debugger;
            for (let y = 0; y < sliders.length; y++) {
                if (sliders[y].type === "range") {
                    // sliders[y].addEventListener("input", () => {this.getVals()});
                    this.getVals(sliders[y]);
                    // sliders[y].oninput = this.getVals;
                    // sliders[y].oninput();
                }
            }
        }
        this.getVals();
        this.filterMinMaxPrice();
        this.filterMinMaxCount();
    }
    //OPEN FILTER
    open() {
        // console.log("open");
        // debugger;
        this.link1.style.visibility = "visible";
        this.link2.style.visibility = "visible";
        this.modalFilter.style.height = "300px";
        this.parentFilter.style.height = "400px";
        this.modalFilter.style.visibility = "visible";
        this.openCloseFilter.textContent = "ЗАКРЫТЬ";
        this.arrowFilter.style.transform = "rotate(225deg)";
        this.btnFilter.style.borderColor = "white";
        // this.btnFilter.setAttribute("onclick", "filter.close()")
    }
    //CLOSE FILTER
    close() {
        this.modalFilter.style.visibility = "hidden";
        this.inputDate2.style.visibility = "hidden";
        this.modalFilter.style.height = "1px";
        this.parentFilter.style.height = "100px";
        this.inputDate1.style.visibility = "hidden";
        this.link2.style.visibility = "hidden";
        this.link1.style.visibility = "hidden";
        this.arrowFilter.style.transform = "rotate(45deg)";
        this.openCloseFilter.textContent = "ОТКРЫТЬ";
        // this.btnFilter.setAttribute("onclick", "filter.open()")
    }
    linkdate1() {
        this.link1.style.visibility = "hidden";
        this.inputDate1.style.visibility = "visible";
    }
    linkdate2() {
        this.link2.style.visibility = "hidden";
        this.inputDate2.style.visibility = "visible";
    }
    //RESULT OF FILTER
    resultID() {
        // debugger;
        this.result = [];
        this.result[0] = this.filterNamePrice;
        this.result[1] = this.filterNameCount;
        if (this.filterNameCategory.length !== 0) {
            this.result.push(this.filterNameCategory);
        }
        if (this.filterNameDate.length !== 0) {
            this.result.push(this.filterNameDate);
        }
        if (this.SelectByName.value.length !== 0) {
            this.result.push(this.filterNamebyName);

        }
        this.finalResults = [];
        let sorted_arr = [];
        // debugger;
        switch (this.result.length) {
            case 2:
                sorted_arr = this.result[0].concat(this.result[1]);
                sorted_arr.sort(function (a, b) {
                    return a - b;
                });
                for (let j = 0; j < sorted_arr.length - 1; j++) {
                    if (sorted_arr[j] === sorted_arr[j + 1]) {
                        this.finalResults.push(sorted_arr[j]);
                    }
                }
                break;
            case 3:
                sorted_arr = this.result[0].concat(this.result[1], this.result[2]);
                sorted_arr.sort(function (a, b) {
                    return a - b;
                });
                for (let j = 0; j < sorted_arr.length - 1; j++) {
                    if (sorted_arr[j] === sorted_arr[j + 1] && sorted_arr[j] === sorted_arr[j + 2]) {
                        this.finalResults.push(sorted_arr[j]);
                    }
                }
                this.result.splice(2, 1);
                break;
            case 4:
                sorted_arr = this.result[0].concat(this.result[1], this.result[2], this.result[3]);
                sorted_arr.sort(function (a, b) {
                    return a - b;
                });
                for (let j = 0; j < sorted_arr.length - 1; j++) {
                    if (sorted_arr[j] === sorted_arr[j + 1] && sorted_arr[j] === sorted_arr[j + 2] && sorted_arr[j] === sorted_arr[j + 3]) {
                        this.finalResults.push(sorted_arr[j]);
                    }
                }
                this.result.splice(3, 1);
                break;

            case 5:
                sorted_arr = this.result[0].concat(this.result[1], this.result[2], this.result[3], this.result[4]);
                sorted_arr.sort(function (a, b) {
                    return a - b;
                });
                for (let j = 0; j < sorted_arr.length - 1; j++) {
                    if (sorted_arr[j] === sorted_arr[j + 1] && sorted_arr[j] === sorted_arr[j + 2] && sorted_arr[j] === sorted_arr[j + 3] && sorted_arr[j] === sorted_arr[j + 4]) {
                        this.finalResults.push(sorted_arr[j]);
                    }
                }
                this.result.splice(4, 1);
                break;

            default:
                break;
        }
        debugger;
        this.filterData();
        console.log(this.finalResults);
        console.log(this.table.dataFilter);
        this.table.startRow = 0;
        this.table.endRow = this.table.ROWS_PER_PAGE;
        this.dispatchFilterResults();

    }
    dispatchFilterResults () {
        // debugger;
        const eventFilterResults = new CustomEvent('eventFilterResults', {
            bubbles: true
        });
        document.body.dispatchEvent(eventFilterResults);
    }
    //SET NEW DATA AFTER FILTER
    filterData() {

        this.table.dataFilter = [];
        for (let i = 0; i < this.table.data.length; i++) {
            for (let j = 0; j < this.finalResults.length; j++) {
                if (this.table.data[i].id === this.finalResults[j]) {
                    this.table.dataFilter.push(this.table.data[i]);
                }
            }
        }
        this.table.renderData();

    }
    //CHECKBOX INPUT
    checkControl() {
        this.filterNameChecked = [];
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].checked === true) {
                this.filterNameChecked[i] = this.list[i].value;
            }
        }

        this.filterNameCategory = [];
        for (let j = 0; j < this.filterNameChecked.length; j++) {
            for (let h = 0; h < this.table.data.length; h++) {
                if (this.filterNameChecked[j] == this.table.data[h].category) {
                    this.filterNameCategory.push(this.table.data[h].id);
                }
            }
        }
        debugger;
        this.resultID();
    }
    //SEARCH BY NAME INPUT
    searchSelectByName() {
        this.filterNamebyName = [];
        if (this.selectByName.value != "") {
            for (let i = 0; i < data.length; i++) {
                data[i].name.slice(0, this.selectByName.value.length);
                if (this.selectByName.value.toLowerCase().indexOf(data[i].name.slice(0, this.selectByName.value.length).toLowerCase()) > -1) {
                    this.filterNamebyName.push(data[i].id);
                }
            }
        }

        this.resultID();
    }
    //DATE INPUT MIN_MAX DATE
    filterMimMaxDate() {
        let minDate = new Date(inputdateMin.value);
        let maxDate = new Date(inputdateMax.value);
        for (let i = 0; i < this.table.data.length; i++) {
            let mainDate = new Date(this.table.data[i].creationDate);
            if (inputdateMin.value === "" && inputdateMax.value !== "" && mainDate <= maxDate) {
                this.filterNameDate.push(this.table.data[i].id);
            }
            if (inputdateMin.value !== "" && inputdateMax.value === "" && mainDate >= minDate) {
                this.filterNameDate.push(this.table.data[i].id);
            }
            if (inputdateMin.value !== "" && inputdateMax.value !== "" && mainDate <= maxDate && mainDate >= minDate) {
                this.filterNameDate.push(this.table.data[i].id);
                this.resultID();
            }
        }
        this.resultID();
    }
    //RANGE INPUT MIN-MAX PRICE
    inputRangePrice() {
        minPrice.value = this.minRangePrice.value;
        maxPrice.value = this.maxRangePrice.value;
        this.tableFilter.priceMin = this.minRangePrice.value;
        this.tableFilter.priceMax = this.maxRangePrice.value;
        this.filterMinMaxPrice();
    }
    filterMinMaxPrice() {
        debugger;
        this.filterNamePrice = [];
        for (let i = 0; i < this.table.data.length; i++) {
            if (this.table.data[i].price >= this.tableFilter.priceMin && 
                this.table.data[i].price <= this.tableFilter.priceMax) {
                    this.filterNamePrice.push(this.table.data[i].id);
            }
        }

        // this.resultID();
    }
    //RANGE INPUT MIN-MAX COUNT
    inputRangeCount() {
        minCount.value = this.minRangeQuantity.value;
        maxCount.value = this.maxRangeQuantity.value;
        this.tableFilter.numberMin = this.minRangeQuantity.value;
        this.tableFilter.numberMax = this.maxRangeQuantity.value;
        this.filterMinMaxCount();
    }

    filterMinMaxCount() {
        debugger;
        this.filterNameCount = [];
        for (let i = 0; i < this.table.data.length; i++) {
            if (this.table.data[i].count >= this.tableFilter.numberMin && this.table.data[i].count <= this.tableFilter.numberMax) {
                this.filterNameCount.push(this.table.data[i].id);
            }
        }

        // this.resultID();

    }
    //TO GET VALUES FROM RANGE INPUT
    getVals(sliderElement) {
        debugger;
        // let parent = document.body.querySelector(".filter_priceDateBlock");
        let parent = sliderElement.parentNode;
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
                this.tableFilter.priceMin = slide1;
                this.tableFilter.priceMax = slide2;
                this.filterMinMaxPrice();
                break;
            case 'filter-block-by-quantity':
                document.getElementById("minRangeQuantity").value = slide1;
                document.getElementById("maxRangeQuantity").value = slide2;
                this.tableFilter.numberMin = slide1;
                this.tableFilter.numberMax = slide2;
                this.filterMinMaxCount();
                break;
            default:
                break;
        }

    }

}



