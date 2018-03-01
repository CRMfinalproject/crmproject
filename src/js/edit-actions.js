let currentTr = null;
let th = null;
let currentTh = null;
let editBtn = document.querySelectorAll('.products-list__cell-actions__edit');
let inp = document.getElementsByClassName('products-list__cell__input');
let divOk = document.querySelectorAll('.products-list__cell-actions__btn');
let btnOk = document.querySelectorAll('.button__ok');
let dotsBtn = document.querySelectorAll('.products-list__cell-actions__dots');
let copyBtn = document.querySelectorAll('.products-list__cell-actions__copy');
let delBtn = document.querySelectorAll('.products-list__cell-actions__delete');

function dotsHandler(event) {
        th = event.target.parentElement.parentElement;
        th.children[0].classList.toggle("close");
        th.children[1].classList.toggle("close");
};

function removeEventClickOnDotsButtons() {
    dotsBtn = document.querySelectorAll('.products-list__cell-actions__dots');
    for(let i = 0; i < dotsBtn.length; i++) {
        dotsBtn[i].removeEventListener('click', dotsHandler);
    };
};

function addEventClickOnDotsButtons() {
    dotsBtn = document.querySelectorAll('.products-list__cell-actions__dots');
    for(let i = 0; i < dotsBtn.length; i++) {
        dotsBtn[i].addEventListener('click', dotsHandler);
    };
};
addEventClickOnDotsButtons();

function copyHandler(event) {
    currentTr = event.target.parentElement.parentElement.parentElement; // current tr with class = row
    th = event.target.parentElement.parentElement; // current th with class = cell
    currentTh = currentTr.children; // all th in this tr with class = cell
    th.children[1].classList.toggle("close");
    th.children[0].classList.toggle("close");
    let cloneTr = currentTr.cloneNode(true);
    let id = cloneTr.id;
    ///!!!!!////
    let newId = id + 'c1';//не знаю как сделать уникальный идентификатор
    cloneTr.id = newId;
    currentTr.insertAdjacentElement('afterend', cloneTr);
    
    removeEventClickOnCopyButtons();
    addEventClickOnCopyButtons();
    removeEventClickOnEditButtons();
    addEventClickOnEditButtons();
    removeEventClickOnDelButtons();
    addEventClickOnDelButtons();
    removeEventClickOnDotsButtons();
    addEventClickOnDotsButtons();
    removeEventClickOnConfirmButtons();
    addEventClickOnConfirmButtons();
};

function removeEventClickOnCopyButtons() {
    copyBtn = document.querySelectorAll('.products-list__cell-actions__copy');
    for(let i = 0; i < copyBtn.length; i++) {
        copyBtn[i].removeEventListener('click', copyHandler);
    };
};

function addEventClickOnCopyButtons() {
    copyBtn = document.querySelectorAll('.products-list__cell-actions__copy');
    for(let i = 0; i < copyBtn.length; i++) {
        copyBtn[i].addEventListener('click', copyHandler);
    };
};
addEventClickOnCopyButtons();


function editHandler(event) {
    currentTr = event.target.parentElement.parentElement.parentElement;
    th = event.target.parentElement.parentElement;
    currentTh = currentTr.children;
    th.children[1].classList.toggle("close");
    th.children[2].classList.toggle("close");
    th.children[2].classList.toggle("edit");
    for(let i = 1; i < currentTh.length-2; i++ ){
        currentTh[i].innerHTML = `<input type="text" value="${currentTh[i].textContent}" class="products-list__cell__input">`;
    };
};

function removeEventClickOnEditButtons() {
    editBtn = document.querySelectorAll('.products-list__cell-actions__edit');
    for(let i = 0; i < editBtn.length; i++) {
        editBtn[i].removeEventListener('click', editHandler);
    };
};

function addEventClickOnEditButtons() {
    editBtn = document.querySelectorAll('.products-list__cell-actions__edit');
    for(let i = 0; i < editBtn.length; i++) {
        editBtn[i].addEventListener('click', editHandler);
    };
};
addEventClickOnEditButtons();

function delHandler(event) {
    currentTr = event.target.parentElement.parentElement.parentElement; // current tr with class = row
    th = event.target.parentElement.parentElement; // current th with class = cell
    currentTh = currentTr.children; // all th in this tr with class = cell
    th.children[1].classList.toggle("close");
    th.children[2].classList.toggle("close");
    th.children[2].classList.toggle("recover");
    //! не работает!!!! 
    let btn = event.target;
    btn.innerHTML = 'Восстановить'; //current btnOk
/////!!!!//////
    let timerId = setTimeout( () => {
        if(th.children[2].classList.contains("recover")) {
            let id = currentTr.id;
            let toDel = document.querySelector(`#${id}`);
            toDel.remove();
            data.map(obj => {
                for(let value of obj) {
                    if(value === id) {
                        let i = data.indexOf(value);
                        data.splice(i, 1);
                    };
                };
            });
        };
    }, 5000);
};

function removeEventClickOnDelButtons() {
    delBtn = document.querySelectorAll('.products-list__cell-actions__delete');
    for(let i = 0; i < delBtn.length; i++) {
        delBtn[i].removeEventListener('click', delHandler);
    };
};

function addEventClickOnDelButtons() {
    delBtn = document.querySelectorAll('.products-list__cell-actions__delete');
    for(let i = 0; i < delBtn.length; i++) {
        delBtn[i].addEventListener('click', delHandler);
    };
}; 
addEventClickOnDelButtons();

function confirmHandler(event) {
    currentTh = currentTr.children;
    th = event.target.parentElement.parentElement;
    let divConfirm = event.target.parentElement;
    if(divConfirm.classList.contains("edit")) {
        const inpValue = [];

        for(let i = 0; i < currentTh.length; i++ ) {
            const el = currentTh[i].children[0];
            if (el.tagName == 'INPUT') {
                inpValue.push(el.value); 
            };
        };
        
        for(let i = 0; i < currentTh.length-1; i++ ){
            currentTh[i].innerHTML = inpValue[i];
        };    
        th.children[2].classList.toggle("edit"); 
        th.children[0].classList.toggle("close");
        th.children[2].classList.toggle("close");
    };

    if(divConfirm.classList.contains("recover")) {
        th.children[2].classList.toggle("recover");
        th.children[2].classList.toggle("close");
         //! не работает!!!! event.target.innerHTML = 'ОК';
        th.children[0].classList.toggle("close");
    };
};

function removeEventClickOnConfirmButtons() {
    for(let i = 0; i < divOk.length; i++) {
        divOk[i].removeEventListener('click', confirmHandler);
    };
};

function addEventClickOnConfirmButtons() {
    for(let i = 0; i < divOk.length; i++) {
        divOk[i].addEventListener('click', confirmHandler);
    };
};
addEventClickOnConfirmButtons();
