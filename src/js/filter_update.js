let Tablefilter = {};
Tablefilter.category = [];
Tablefilter.date = [];
Tablefilter.price = [];
Tablefilter.count = [];
Tablefilter.name = [];
Tablefilter.urlName = "";
Tablefilter.urlCategory = "";
Tablefilter.urlDateMin = "";
Tablefilter.urlDateMax = "";

let filterNameChecked = [];

const filterBox = document.querySelector(".filter_container");

const modalFilter = document.querySelector("#modalFilter");
const btnFilter = document.querySelector("#btnFilter");
const arrowFilter = document.querySelector(".filter_btn__dropdown-arrow");
const inputDate2 = document.querySelector("#inputdateMax");
const inputDate1 = document.querySelector("#inputdateMin");
const link1 = document.querySelector("#linkdate1");
inputDate2.style.visibility = "hidden";
inputDate1.style.visibility = "hidden";
const link2 = document.querySelector("#linkdate2");

const filter_merge = document.querySelector (".table-control");

// filter_merge.childNodes[3].insertAdjacentHTML("afterEnd", ``);
//OPEN MODAL WIN

function openModal() {
    filter_merge.style.padding = "30px 41px 390px 41px"
    link1.style.visibility = "visible";
    link2.style.visibility = "visible";
    modalFilter.style.height = "310px";
    modalFilter.style.animationName = "slideIn";
    modalFilter.style.visibility = "visible";
    openCloseFilter.textContent = "ЗАКРЫТЬ";
    arrowFilter.style.animationName = "arrowFilter";
    arrowFilter.style.transform = "rotate(225deg)";
    btnFilter.style.borderColor = "white";
    btnFilter.setAttribute("onclick", "hiddenModal()")
}

//CLOSE MODAL WIN

function hiddenModal() {
    filter_merge.style.padding = "30px 41px 13px 41px";
    modalFilter.style.height = "1px";
    modalFilter.style.visibility = "hidden";
    inputDate2.style.visibility = "hidden";
    inputDate1.style.visibility = "hidden";
    link2.style.visibility = "hidden";
    link1.style.visibility = "hidden";
    arrowFilter.style.animationName = "arrowFilterback";
    arrowFilter.style.transform = "rotate(45deg)";
    openCloseFilter.textContent = "ОТКРЫТЬ";
    btnFilter.setAttribute("onclick", "openModal()")
}


function linkdate1() {
    link1.style.visibility = "hidden";
    inputDate1.style.visibility = "visible";
}

function linkdate2() {
    link2.style.visibility = "hidden";
    inputDate2.style.visibility = "visible";
}

// SEND the Request
function changeData(){

    fetch("http://feathy.online/api/products/?filter[price][from]=" + Tablefilter.price[0] +
        ",filter[price][to]=" + Tablefilter.price[1] + ",filter[count][from]=" + Tablefilter.count[0] +
        ",filter[count][to]=" + Tablefilter.count[1] + Tablefilter.urlDateMin +
        Tablefilter.urlDateMax + Tablefilter.urlCategory + Tablefilter.urlName +
        "&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImVtYWlsIjoidHR0QHR0LnR0IiwiaWF0IjoxNTE3OTEwMjA1LCJleHAiOjE1MjA1MDIyMDV9.I3JNxWvE5X2naKLK5IgZDIRH5m9UTMxHwrlFC0mygpU")

        .then(response => {

            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .then(data => {

            // document.triggerEvent("changeData");
        });


}

//RANGE INPUT STRUCTURE

function getVals() {
    let parent = this.parentNode;
    let slides = parent.getElementsByTagName("input");
    let slide1 = parseFloat(slides[0].value);
    let slide2 = parseFloat(slides[1].value);
    // slide1.style.boxShadow="-60px 0px 0px 60px red";
    if (slide1 > slide2) {
        let tmp = slide2;
        slide2 = slide1;
        slide1 = tmp;
    }

    switch (parent.parentNode.id) {
        case 'filter-block-by-price':
            document.getElementById("minRangePrice").value = slide1;
            document.getElementById("maxRangePrice").value = slide2;
            Tablefilter.price[0] = slide1;
            Tablefilter.price[1] = slide2;
            changeData();
            break;
        case 'filter-block-by-quantity':
            document.getElementById("minRangeQuantity").value = slide1;
            document.getElementById("maxRangeQuantity").value = slide2;
            Tablefilter.count[0] = slide1;
            Tablefilter.count[1] = slide2;
            changeData();
            break;
        default:
            break;
    }

}
function inputRangePrice() {
    minPrice.value = minRangePrice.value;
    maxPrice.value = maxRangePrice.value;


    Tablefilter.price[0] = minRangePrice.value;
    Tablefilter.price[1] = maxRangePrice.value;
    changeData();
}
function inputRangeCount() {
    minCount.value = minRangeQuantity.value;
    maxCount.value = maxRangeQuantity.value;
    Tablefilter.count[0] = minRangeQuantity.value;
    Tablefilter.count[1] = maxRangeQuantity.value;
    changeData();
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

//FILTER CHECKBOX BY CATEGORY

function checkControl() {
    Tablefilter.urlCategory = "";
    filterNameChecked = [];
    let list = document.getElementsByClassName("filter_checkboxes__input");
    for (let i = 0; i < list.length; i++) {
        if (list[i].checked === true) {
            filterNameChecked.push(list[i].value);
        }
    }
    Tablefilter.category = filterNameChecked;
    if (Tablefilter.category.length > 0){
        Tablefilter.urlCategory = ",filter[category]=" + Tablefilter.category;
    }
    else {
        Tablefilter.urlCategory = "";
    }
    changeData();
}

//FILTER MIN-MAX DATE

function filterMimMaxDate() {

    Tablefilter.urlDateMin = "";
    Tablefilter.urlDateMax = "";
    let today = new Date();
    let minDate = new Date(inputdateMin.value);
    let maxDate = new Date(inputdateMax.value);
    if(inputdateMin.value != ""){
        minDate = minDate.toISOString();
        console.log("minDate:" + minDate);
        Tablefilter.date[0] = minDate;
        Tablefilter.urlDateMin = ",filter[date][from]=" + Tablefilter.date[0];
    }
    if(inputdateMax.value != ""){
        maxDate = maxDate.toISOString();
        console.log("maxDate:" + maxDate);
        Tablefilter.date[1] = maxDate;
        Tablefilter.urlDateMax = ",filter[date][to]=" + Tablefilter.date[1];
    }
    changeData();
}



//FILTER SEARCH BY NAME

function searchSelectByName() {
    Tablefilter.urlName = "";
    if (searchSelectByname.value != "") {
        Tablefilter.name[0] = searchSelectByname.value;
        Tablefilter.urlName = ",filter[name]=" + Tablefilter.name;
        changeData();
    }
}
