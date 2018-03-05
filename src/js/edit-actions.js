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
let uId = 0;

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
    let newId = id + 'c' + ++uId;

    cloneTr.id = newId;
    currentTr.insertAdjacentElement('afterend', cloneTr);
    
    removeEventClickOnCopyButtons();
    removeEventClickOnEditButtons();
    removeEventClickOnDelButtons();
    removeEventClickOnDotsButtons();
    removeEventClickOnConfirmButtons();

    addEventClickOnCopyButtons();
    addEventClickOnEditButtons();
    addEventClickOnDelButtons();
    addEventClickOnDotsButtons();
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
    // current tr with class = row
    currentTr = event.target.parentElement.parentElement.parentElement; 
    let id = currentTr.id;
    let originId = id.replace('row-', '');
    let buttonOk = document.querySelector(`#${id} .button__ok`);
    //current btnOk
    buttonOk.innerHTML = 'Восстановить'; 
    
    // current th with class = cell
    th = event.target.parentElement.parentElement; 
    // all th in this tr with class = cell
    currentTh = currentTr.children; 
    th.children[1].classList.toggle("close");
    th.children[2].classList.toggle("close");
    th.children[2].classList.toggle("recover");
    
    let timerId = setTimeout( () => {
        if(th.children[2].classList.contains("recover")) {
            let toDel = document.querySelector(`#${id}`);
            toDel.remove();
            for(let i = 0; i< data.length; i++) {
                if(data[i].id == originId) {
                    data.splice(i, 1);
                    break;
                }
            }
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
        };
        
        th.children[2].classList.toggle("edit"); 
        th.children[0].classList.toggle("close");
        th.children[2].classList.toggle("close");
    };

    if(divConfirm.classList.contains("recover")) {
        th.children[2].classList.toggle("recover");
        th.children[2].classList.toggle("close");
        th.children[0].classList.toggle("close");
    };
};

function removeEventClickOnConfirmButtons() {
    divOk = document.querySelectorAll('.products-list__cell-actions__btn');
    for(let i = 0; i < divOk.length; i++) {
        divOk[i].removeEventListener('click', confirmHandler);
    };
};

function addEventClickOnConfirmButtons() {
    divOk = document.querySelectorAll('.products-list__cell-actions__btn');
    for(let i = 0; i < divOk.length; i++) {
        divOk[i].addEventListener('click', confirmHandler);
    };
};
addEventClickOnConfirmButtons();
