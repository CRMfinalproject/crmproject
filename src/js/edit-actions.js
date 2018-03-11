let currentTr = null;
let th = null;
let currentTh = null;
let editBtn = document.querySelectorAll('.products-list__cell-actions__edit');
let inp = document.getElementsByClassName('products-list__cell__input');
let divOk = document.querySelectorAll('.products-list__cell-actions__ok');
let divRec = document.querySelectorAll('.products-list__cell-actions__recover');
let btnOk = document.querySelectorAll('.button__ok');
let btnRec = document.querySelectorAll('.button__recover');
let dotsBtn = document.querySelectorAll('.products-list__cell-actions__dots');
let copyBtn = document.querySelectorAll('.products-list__cell-actions__copy');
let delBtn = document.querySelectorAll('.products-list__cell-actions__delete');
let uId = 0;
let timerId = null;


function dotsHandler(event) {
        th = event.target.parentElement.parentElement;
        th.children[0].classList.add("close");
        th.children[1].classList.remove("close");
};


function removeEventClickOnDotsButtons() {
    removeEvents('.products-list__cell-actions__dots', 'click', dotsHandler);
};


function addEventClickOnDotsButtons() {
    addEvents('.products-list__cell-actions__dots', 'click', dotsHandler);
};
addEventClickOnDotsButtons();


function copyHandler(event) {
    currentTr = event.target.parentElement.parentElement.parentElement; // current tr with class = row
    th = event.target.parentElement.parentElement; // current th with class = cell
    currentTh = currentTr.children; // all th in this tr with class = cell
    th.children[0].classList.remove("close");
    th.children[1].classList.add("close");

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


    let newObject = makeObject(cloneTr);
    add(newObject);

    th.children[1].classList.add("close");
    th.children[0].classList.remove("close");
};


function makeObject(tr) {

    return {
		"id": tr.id,
		"name": tr.children[1].children[0].textContent,
		"category":  tr.children[2].textContent,
		"count": tr.children[3].children[0].textContent,
		"price": tr.children[4].children[0].textContent,
		"creationDate": tr.children[5].children[0].textContent,
		"weight": tr.children[5].children[0].textContent,
		"size": tr.children[7].children[0].textContent
    };
};


function add(a) {
    data.push(a);
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
addEventMouseOutForActions();


function removeEventClickOnCopyButtons() {
    removeEvents('.products-list__cell-actions__copy', 'click', copyHandler);
    //тоже самое, что и код ниже:
    // copyBtn = document.querySelectorAll('.products-list__cell-actions__copy');
    // for(let i = 0; i < copyBtn.length; i++) {
    //     copyBtn[i].removeEventListener('click', copyHandler);
    // };
};


function addEventClickOnCopyButtons() {
    addEvents('.products-list__cell-actions__copy','click', copyHandler);    
};
addEventClickOnCopyButtons();


function editHandler(event) {
    currentTr = event.target.parentElement.parentElement.parentElement;
    th = event.target.parentElement.parentElement;
    currentTh = currentTr.children;
    th.children[1].classList.add("close");
    th.children[2].classList.remove("close");

    for(let i = 1; i < currentTh.length-1; i++ ){
        if(currentTh[i].classList.contains('creationDate')) {
            currentTh[i].innerHTML = `<input type="date" value="${currentTh[i].textContent}" class="products-list__cell__input">`;
        } else if(currentTh[i].classList.contains('category')) {
            currentTh[i].innerHTML = `
                <select name="category" class="category">
                    <option>Игрушки</option>
                    <option>Косметика</option>
                    <option>Сумки</option>
                    <option>Обувь</option>
                </select>`
        } else {
            currentTh[i].innerHTML = `<input type="text" value="${currentTh[i].textContent}" class="products-list__cell__input">`;

        };
    };
};


function removeEventClickOnEditButtons() {
    removeEvents('.products-list__cell-actions__edit', 'click', editHandler);
};


function addEventClickOnEditButtons() {
    addEvents('.products-list__cell-actions__edit', 'click', editHandler);
};
addEventClickOnEditButtons();


function delHandler(event) {
    // current tr with class = row
    currentTr = event.target.parentElement.parentElement.parentElement; 
    currentTr.classList.add('setToDel');
    let id = currentTr.id;
    let originId = id.replace('row-', '');
    // current th with class = cell
    th = event.target.parentElement.parentElement; 
    // all th in this tr with class = cell
    currentTh = currentTr.children; 
    th.children[1].classList.add("close");
    th.children[3].classList.remove("close");
    
    timerId = setTimeout( () => {
        let toDel = document.querySelector(`#${id}`);
        toDel.remove();
        for(let i = 0; i< data.length; i++) {
            if(data[i].id == originId) {
                data.splice(i, 1);
                break;
            };
        };
    }, 5000);
};


function removeEventClickOnDelButtons() {
    removeEvents('.products-list__cell-actions__delete', 'click', delHandler);
};


function addEventClickOnDelButtons() {
    addEvents('.products-list__cell-actions__delete', 'click', delHandler);
}; 
addEventClickOnDelButtons();


function recConfirmHandler(event) {
    clearTimeout(timerId);
    currentTh = currentTr.children;
    th = event.target.parentElement.parentElement;
    //let divRec = event.target.parentElement;
    th.children[3].classList.add("close");
    th.children[0].classList.remove("close");
    currentTr.classList.remove('setToDel');
};


function editConfirmHandler(event) {
    currentTh = currentTr.children;
    th = event.target.parentElement.parentElement;
    const inpValue = [];

    for(let i = 0; i < currentTh.length; i++ ) {
        let el = currentTh[i];
        if (el.classList.contains('th-checkbox'))
            continue;
            
        const child = currentTh[i].children[0];
        if (child.tagName == 'INPUT') {
            if ( el.classList.contains('name')) {
                el.innerHTML = `<a href="" class="products-list__link">` + child.value + '</a>';
            } else {
                el.innerHTML = child.value;
            };
        };
        if (child.tagName == 'SELECT') {
            el.innerHTML = child.value;;
        }
        th.children[2].classList.add("close");        
        th.children[0].classList.remove("close");
    };
};


function removeEventClickOnEditConfirmButtons() {
    removeEvents('.products-list__cell-actions__ok', 'click', editConfirmHandler);
};


function addEventClickOnEditConfirmButtons() {
    addEvents('.products-list__cell-actions__ok', 'click', editConfirmHandler);
};
addEventClickOnEditConfirmButtons();


function removeEventClickOnRecConfirmButtons() {
    removeEvents('.products-list__cell-actions__recover','click', recConfirmHandler);
};


function addEventClickOnRecConfirmButtons() {
    addEvents('.products-list__cell-actions__recover','click', recConfirmHandler);
};
addEventClickOnRecConfirmButtons();


function getGenericId() {
    // AJAX request to get new ID;   
}