let filterNamePrice = [];
let filterNameCount = [];
let filterNameCategory = [];
let filterNameDate = [];
let result = [];
let Tablefilter = {};
let filterNameChecked = [];

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

//OPEN MODAL WIN

function openModal() {

    link1.style.visibility = "visible";
    link2.style.visibility = "visible";
    modalFilter.style.height = "300px";
    filter_merge.style.padding = "30px 41px 390px 41px";
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

    modalFilter.style.visibility = "hidden";
    inputDate2.style.visibility = "hidden";
    modalFilter.style.height = "1px";
    filter_merge.style.padding = "30px 41px 13px 41px";
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

// // FILTER MIN-MAX PRICE
//
// function filterMinMaxPrice() {
//     filterNamePrice = [];
//     for (let i = 0; i < data.length; i++) {
//         if (data[i].price >= Tablefilter.priceMin && data[i].price <= Tablefilter.priceMax) {
//             filterNamePrice.push(data[i].id);
//         }
//     }
//     // console.log(`RESULT by PRICE ${filterNamePrice}`);
//     resultID();
// }
//
// // FILTER MIN-MAX COUNT
//
// function filterMinMaxCount() {
//     filterNameCount = [];
//     for (let i = 0; i < data.length; i++) {
//         if (data[i].count >= Tablefilter.numberMin && data[i].count <= Tablefilter.numberMax) {
//             filterNameCount.push(data[i].id);
//         }
//     }
//     // console.log(`RESULT by COUNT ${filterNameCount}`);
//     resultID();
//
// }
//
// //RANGE INPUT STRUCTURE
//
// function getVals() {
//     let parent = this.parentNode;
//     let slides = parent.getElementsByTagName("input");
//     let slide1 = parseFloat(slides[0].value);
//     let slide2 = parseFloat(slides[1].value);
//     if (slide1 > slide2) {
//         let tmp = slide2;
//         slide2 = slide1;
//         slide1 = tmp;
//     }
//
//     switch (parent.parentNode.id) {
//         case 'filter-block-by-price':
//             document.getElementById("minRangePrice").value = slide1;
//             document.getElementById("maxRangePrice").value = slide2;
//             Tablefilter.priceMin = slide1;
//             Tablefilter.priceMax = slide2;
//             filterMinMaxPrice();
//             break;
//         case 'filter-block-by-quantity':
//             document.getElementById("minRangeQuantity").value = slide1;
//             document.getElementById("maxRangeQuantity").value = slide2;
//             Tablefilter.numberMin = slide1;
//             Tablefilter.numberMax = slide2;
//             filterMinMaxCount();
//             break;
//         default:
//             break;
//     }
//
// }
//
// window.onload = function () {
//     const sliderSections = document.getElementsByClassName("filter_modal");
//
//     for (let x = 0; x < sliderSections.length; x++) {
//         let sliders = sliderSections[x].getElementsByTagName("input");
//         for (let y = 0; y < sliders.length; y++) {
//             if (sliders[y].type === "range") {
//                 sliders[y].oninput = getVals;
//                 sliders[y].oninput();
//             }
//         }
//     }
// };
//
// function inputRangePrice() {
//     minPrice.value = minRangePrice.value;
//     maxPrice.value = maxRangePrice.value;
//     Tablefilter.priceMin = minRangePrice.value;;
//     Tablefilter.priceMax = maxRangePrice.value;
//     filterMinMaxPrice();
// }
//
// function inputRangeCount() {
//     minCount.value = minRangeQuantity.value;
//     maxCount.value = maxRangeQuantity.value;
//     Tablefilter.numberMin = minRangeQuantity.value;
//     Tablefilter.numberMax = maxRangeQuantity.value;
//     filterMinMaxCount();
// }
//
// //FILTER CHECKBOX BY CATEGORY
//
// function checkControl() {
//     filterNameChecked = [];
//     let list = document.getElementsByClassName("filter_checkboxes__input");
//     for (let i = 0; i < list.length; i++) {
//         if (list[i].checked === true) {
//             filterNameChecked[i] = list[i].value;
//         }
//     }
//     // console.log(`${filterNameChecked}`);
//     filterNameCategory = [];
//     for (let j = 0; j < filterNameChecked.length; j++) {
//         for (let h = 0; h < data.length; h++) {
//             if (filterNameChecked[j] == data[h].category) {
//                 filterNameCategory.push(data[h].id);
//             }
//         }
//     }
//     // console.log(`RESULT by CATEGORY ${filterNameCategory}`);
//     resultID();
// }
//
// //FILTER MIN-MAX DATE
//
// function filterMimMaxDate() {
//     let today = new Date();
//     let minDate = new Date(inputdateMin.value);
//     minDate.setHours(0);
//     let maxDate = new Date(inputdateMax.value);
//     maxDate.setHours(0);
//     filterNameDate = [];
//     for (let i = 0; i < data.length; i++) {
//         let mainDate = new Date(data[i].creationDate);
//         mainDate.setHours(0);
//         if (mainDate >= minDate && mainDate <= maxDate) {
//             filterNameDate.push(data[i].id);
//         }
//     }
//     // console.log(`RESULT by DATE ${filterNameDate}`);
//     resultID();
// }
//
// //RESULT FILTER ARRAY OF IDs
// let finalResults = [];
//
//  function resultID() {
//     result[0] = filterNamePrice;
//     result[1] = filterNameCount;
//     if (filterNameCategory.length !== 0) {
//         result[2] = filterNameCategory;
//     }
//     if (filterNameDate.length !== 0) {
//         result[3] = filterNameDate;
//     }
//     finalResults = [];
//     let sorted_arr  = [];
//     switch (result.length) {
//         case 2:
//             sorted_arr = result[0].concat(result[1]);
//             sorted_arr.sort(function (a, b) {
//                 return a - b;
//             });
//             for (let j = 0; j < sorted_arr.length - 1; j++) {
//                 if (sorted_arr[j] === sorted_arr[j + 1]) {
//                     finalResults.push(sorted_arr[j]);
//                 }
//             }
//             break;
//         case 3:
//             sorted_arr = result[0].concat(result[1],result[2]);
//             sorted_arr.sort(function (a, b) {
//                 return a - b;
//             });
//             for (let j = 0; j < sorted_arr.length - 1; j++) {
//                 if (sorted_arr[j] === sorted_arr[j + 1] && sorted_arr[j] === sorted_arr[j + 2]) {
//                     finalResults.push(sorted_arr[j]);
//                 }
//             }
//             result.splice(2,1);
//             break;
//         case 4:
//             sorted_arr = result[0].concat(result[1],result[2],result[3]);
//             sorted_arr.sort(function (a, b) {
//                 return a - b;
//             });
//             for (let j = 0; j < sorted_arr.length - 1; j++) {
//                 if (sorted_arr[j] === sorted_arr[j + 1] && sorted_arr[j] === sorted_arr[j + 2] && sorted_arr[j] === sorted_arr[j + 3]) {
//                     finalResults.push(sorted_arr[j]);
//                 }
//             }
//             result.splice(3,1);
//             break;
//         default:
//             break;
//         //Here must be case 5: SearchingByName
//     }
//
//     //Here must be fetch request...
//     console.log("Список ID для fetch" + "  " + finalResults);
// };



//FILTER SEARCH BY NAME

// let resizeName = [];
// let filterNamebyName = [];
// function searchSelectByName() {
//     filterNamebyName = [];
//     if (searchSelectByname.value != "") {
//         for (let i = 0; i < searchSelectByname.value.length; i++) {
//             for (let j = 0; j < data.length; j++) {
//
//                 resizeName = data[j].name.split("", searchSelectByname.value.length);
//                 console.log(resizeName);
//
//                 if (searchSelectByname.value[i] == resizeName[i]) {
//                     filterNamebyName.push(data[j].id);
//
//                 }
//
//             }
//         }
//         console.log(`searchByName ${filterNamebyName}`);
//     }
//
// }