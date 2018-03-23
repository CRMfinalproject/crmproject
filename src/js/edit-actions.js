let uId = 0;
let timerId = null;


function dotsHandler(event) {
    let td = event.target.parentElement.parentElement;
    td.children[0].classList.add("close");
    td.children[1].classList.remove("close");
};


function removeEventClickOnDotsButtons() {
    removeEvents('.table-column-actions__dots', 'click', dotsHandler);
};


function addEventClickOnDotsButtons() {
    addEvents('.table-column-actions__dots', 'click', dotsHandler);
};



function copyHandler(event) {
    let currentTr = event.target.parentElement.parentElement.parentElement; // current tr with class = row
    let td = event.target.parentElement.parentElement; // current td with class = cell
    let currentTd = currentTr.children; // all td in this tr with class = cell
    td.children[0].classList.remove("close");
    td.children[1].classList.add("close");

    let cloneTr = currentTr.cloneNode(true);
    let id = cloneTr.id;
    let newId = id + 'c' + ++uId;

    cloneTr.id = newId;
    currentTr.insertAdjacentElement('afterend', cloneTr);

    removeEventClickOnCopyButtons();
    removeEventClickOnEditButtons();
    removeEventClickOnDelButtons();
    removeEventClickOnDotsButtons();
    removeEventClickOnEditConfirmButtons();
    removeEventClickOnRecConfirmButtons();
    removeEventMouseOutForActions();

    addEventClickOnCopyButtons();
    addEventClickOnEditButtons();
    addEventClickOnDelButtons();
    addEventClickOnDotsButtons();
    addEventClickOnEditConfirmButtons();
    addEventClickOnRecConfirmButtons();
    addEventMouseOutForActions();

    let dateCell = document.querySelector(`#${newId} .table-column-creationDate`);
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let day = now.getDate();
    let newDate = `${year}-${month}-${day}`
    dateCell.children[0].innerHTML = newDate;
    
    let newObject = makeObject(cloneTr);
    add(newObject, data);

    td.children[1].classList.add("close");
    td.children[0].classList.remove("close");
};


function makeObject(tr) {
    let id = tr.id;
    let name = tr.children[1].children[0].textContent;
    let category = tr.children[2].textContent;
    let count = tr.children[3].children[0].textContent;
    let price = tr.children[4].children[0].textContent;
    let creationDate = tr.children[5].children[0].textContent;
    let weight = tr.children[5].children[0].textContent;
    let size =  tr.children[7].children[0].textContent;

    return {
		id: id,
		name: name,
		category:  category,
		count: count,
		price: price,
		creationDate: creationDate,
		weight: weight,
		size: size
    };
};


function add(obj, arr) {
    arr.push(obj);
};


function each(selector, callback) {
    let elements = document.querySelectorAll(selector);
    for(let i = 0; i < elements.length; i++) {
        callback(elements[i]);
    };
};


function addEvents(selector, eventName, handler) {
    each(selector, el => el.addEventListener(eventName, handler));
};


function removeEvents(selector, eventName, handler) {
    each(selector, el => el.removeEventListener(eventName, handler));
};


function addEventMouseOutForActions() {
    addEvents('.js-actions', 'mouseleave', actionsMouseLeave);
};


function removeEventMouseOutForActions() {
    removeEvents('.js-actions', 'mouseleave', actionsMouseLeave);
};


function actionsMouseLeave(event) {
    let el = event.target;
    if(el.nextSibling.classList.contains('close') && el.nextSibling.nextSibling.classList.contains('close')) {
        el.classList.add('close');
        el.previousSibling.classList.remove('close');
    };
};


function removeEventClickOnCopyButtons() {
    removeEvents('.table-column-actions__copy', 'click', copyHandler);
    //тоже самое, что и код ниже:
   // let copyBtn = document.querySelectorAll('.table-column-actions__copy');
    // copyBtn = document.querySelectorAll('.table-column-actions__copy');
    // for(let i = 0; i < copyBtn.length; i++) {
    //     copyBtn[i].removeEventListener('click', copyHandler);
    // };
};


function addEventClickOnCopyButtons() {
    addEvents('.table-column-actions__copy','click', copyHandler);    
};


function editHandler(event) {
    let currentTr = event.target.parentElement.parentElement.parentElement;
    let td = event.target.parentElement.parentElement;
    let currentTd = currentTr.children;
    td.children[1].classList.add("close");
    td.children[2].classList.remove("close");

    for(let i = 1; i < currentTd.length-1; i++ ){
        let el = currentTd[i];
        let firstCh = el.children[0];
        let secondCh = el.children[1];
        let isName = el.classList.contains('table-column-name');
        let isCategory = el.classList.contains('table-column-category');
        let isCount = el.classList.contains('table-column-count');
        let isPrice = el.classList.contains('table-column-price');
        let isDate = el.classList.contains('table-column-creationDate');
        let isWeight = el.classList.contains('table-column-weight');
        let isSize = el.classList.contains('table-column-size');

        if(isName) {
            el.innerHTML = `<input type="text" value="${el.textContent}" class="table-column__input-name">`;
        } else if(isCategory) {
            el.innerHTML = `
                <select name="category" class="table-column__input-select">
                </select>`
            let categorySelection = document.querySelector('.table-column__input-select');
            let sortedCateg = data.map((elem) => elem.category).sort();
            let categoryList = sortedCateg.filter((el, i, arr) => arr.includes(el, i + 1) === false);
            let mappedArr = categoryList.map((elem) => `<option value=${elem}>${elem}</option>`);
            let reducedArr = mappedArr.reduce((accum, elem) => accum + elem);
            categorySelection.insertAdjacentHTML('beforeend',reducedArr);
        } else if(isDate) {
            el.innerHTML = `<input type="date" value="${el.textContent}" class="table-column__input-creationDate">`;
        } else if(isPrice || isCount || isWeight){
            firstCh.innerHTML = `<input type="text" value="${firstCh.textContent}" class="table-column__input-numbers">`;
        } else if(isSize) {
            firstCh.innerHTML = `<input type="text" value="${firstCh.textContent}" class="table-column__input-size">`;
        };
    };
};


function removeEventClickOnEditButtons() {
    removeEvents('.table-column-actions__edit', 'click', editHandler);
};


function addEventClickOnEditButtons() {
    addEvents('.table-column-actions__edit', 'click', editHandler);
};


function delHandler(event) {
    // current tr with class = row
    let currentTr = event.target.parentElement.parentElement.parentElement; 
    // all th in this tr with class = cell
    let currentTd = currentTr.children; 
    currentTr.classList.add('setToDel');

    for(let i = 0; i < currentTd.length; i++ ) {
        let el = currentTd[i];
        let child = currentTd[i].children[0];
        let isName = el.classList.contains('table-column-name');
        let isCategory = el.classList.contains('table-column-category')
        
        if (isName) {
            child.classList.add('setToDel-name');
            continue;
        };
        if (isCategory) {
            child.classList.add('setToDel-category');
            continue;
        };
    };
    // let id = currentTr.id;
    // let originId = id.replace('row-', '');
    // current th with class = cell
    let td = event.target.parentElement.parentElement; 
    td.children[1].classList.add("close");
    td.children[3].classList.remove("close");

    //====== to uncomment the code below if it will be needed: =====//

    // timerId = setTimeout( () => {
        // let toDel = document.querySelector(`#${id}`);
        // toDel.remove();
        // for(let i = 0; i< data.length; i++) {
        //     if(data[i].id == originId) {
        //         data.splice(i, 1);
        //         break;
        //     };
        // };
    // }, 5000);
};


function removeEventClickOnDelButtons() {
    removeEvents('.table-column-actions__delete', 'click', delHandler);
};


function addEventClickOnDelButtons() {
    addEvents('.table-column-actions__delete', 'click', delHandler);
}; 


function recConfirmHandler(event) {
    //for delHandler:
    //clearTimeout(timerId);
    let currentTr = event.target.parentElement.parentElement.parentElement;
    let currentTd = currentTr.children;
    let td = event.target.parentElement.parentElement;
    td.children[3].classList.add("close");
    td.children[0].classList.remove("close");
    currentTr.classList.remove('setToDel');
    for(let i = 0; i < currentTd.length; i++ ) {
        let el = currentTd[i];
        let child = currentTd[i].children[0];
        let isName = el.classList.contains('table-column-name');
        let isCategory = el.classList.contains('table-column-category')
        
        if (isName) {
            child.classList.remove('setToDel-name');
        };
        if (isCategory) {
            child.classList.remove('setToDel-category');
        };
    };
};


function editConfirmHandler(event) {
    let currentTr = event.target.parentElement.parentElement.parentElement;
    let currentTd = currentTr.children;
    let td = event.target.parentElement.parentElement;
    const inpValue = [];

    for(let i = 0; i < currentTd.length; i++ ) {
        let el = currentTd[i];
        let child = currentTd[i].children[0];
        let isCheckbox = el.classList.contains('table-column-checkbox');
        let isName = el.classList.contains('table-column-name');
        let isCategory = el.classList.contains('table-column-category');
        let isCount = el.classList.contains('table-column-count');
        let isPrice = el.classList.contains('table-column-price');
        let isDate = el.classList.contains('table-column-creationDate');
        let isWeight = el.classList.contains('table-column-weight');
        let isSize = el.classList.contains('table-column-size');

        if (isCheckbox) {
            continue;
        };
        if (isName) {
            el.innerHTML = `<a href="Ссылка на товар/${currentTd.id}" class="table-column-name__link">${child.value}</a>`;
            continue;
        };
        if (isCategory) {
            el.innerHTML = `<span>${child.value}</span>`;
            continue;
        }
        if (isDate) {
            el.innerHTML = child.value;
            continue;
        }
        if (isCount || isPrice || isWeight || isSize) {
            child.innerHTML = child.children[0].value;
            continue;
        };

    };

    td.children[2].classList.add("close");        
    td.children[0].classList.remove("close");
};


function removeEventClickOnEditConfirmButtons() {
    removeEvents('.table-column-actions__ok', 'click', editConfirmHandler);
};


function addEventClickOnEditConfirmButtons() {
    addEvents('.table-column-actions__ok', 'click', editConfirmHandler);
};


function removeEventClickOnRecConfirmButtons() {
    removeEvents('.table-column-actions__recover','click', recConfirmHandler);
};


function addEventClickOnRecConfirmButtons() {
    addEvents('.table-column-actions__recover','click', recConfirmHandler);
};


function getGenericId() {
    // AJAX request to get new ID;   
}


function addEditActionsEvents(){
    addEventClickOnDotsButtons();
    addEventMouseOutForActions();
    addEventClickOnCopyButtons();
    addEventClickOnEditButtons();
    addEventClickOnDelButtons();
    addEventClickOnEditConfirmButtons();
    addEventClickOnRecConfirmButtons();
}