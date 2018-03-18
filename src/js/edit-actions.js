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

addEventClickOnDotsButtons();


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


    let newObject = makeObject(cloneTr);
    add(newObject);

    td.children[1].classList.add("close");
    td.children[0].classList.remove("close");
};


function makeObject(tr) {
    let id = tr.id;
    let name = tr.children[1].children[0].textContent;
    let category = tr.children[2].textContent;
    let count = tr.children[3].children[0];
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
addEventClickOnCopyButtons();


function editHandler(event) {
    let currentTr = event.target.parentElement.parentElement.parentElement;
    let td = event.target.parentElement.parentElement;
    let currentTd = currentTr.children;
    td.children[1].classList.add("close");
    td.children[2].classList.remove("close");

    for(let i = 1; i < currentTd.length-1; i++ ){
        if(currentTd[i].classList.contains('table-column-creationDate')) {
            currentTd[i].innerHTML = `<input type="date" value="${currentTd[i].textContent}" class="table-column-creationDate__input">`;
        } else if(currentTd[i].classList.contains('table-column-category')) {
            currentTd[i].innerHTML = `
                <select name="category" class="table-column-category">
                    <option>Игрушки</option>
                    <option>Косметика</option>
                    <option>Сумки</option>
                    <option>Обувь</option>
                </select>`
        } else {
            currentTd[i].innerHTML = `<input type="text" value="${currentTd[i].textContent}" class="table-column__input">`;

        };
    };
};


function removeEventClickOnEditButtons() {
    removeEvents('.table-column-actions__edit', 'click', editHandler);
};


function addEventClickOnEditButtons() {
    addEvents('.table-column-actions__edit', 'click', editHandler);
};
addEventClickOnEditButtons();


function delHandler(event) {
    // current tr with class = row
    let currentTr = event.target.parentElement.parentElement.parentElement; 
    currentTr.classList.add('setToDel');
    let id = currentTr.id;
    let originId = id.replace('row-', '');
    // current th with class = cell
    let td = event.target.parentElement.parentElement; 
    // all th in this tr with class = cell
    let currentTd = currentTr.children; 
    td.children[1].classList.add("close");
    td.children[3].classList.remove("close");
    
    timerId = setTimeout( () => {
        debugger;
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
    removeEvents('.table-column-actions__delete', 'click', delHandler);
};


function addEventClickOnDelButtons() {
    addEvents('.table-column-actions__delete', 'click', delHandler);
}; 
addEventClickOnDelButtons();


function recConfirmHandler(event) {
    clearTimeout(timerId);
    let currentTr = event.target.parentElement.parentElement.parentElement;
    let currentTd = currentTr.children;
    let td = event.target.parentElement.parentElement;
    td.children[3].classList.add("close");
    td.children[0].classList.remove("close");
    currentTr.classList.remove('setToDel');
};


function editConfirmHandler(event) {
    let currentTr = event.target.parentElement.parentElement.parentElement;
    let currentTd = currentTr.children;
    let td = event.target.parentElement.parentElement;
    const inpValue = [];

    for(let i = 0; i < currentTd.length; i++ ) {
        let el = currentTd[i];
        if (el.classList.contains('table-column-checkbox'))
            continue;
            
        const child = currentTd[i].children[0];
        if (child.tagName == 'INPUT') {
            if ( el.classList.contains('table-column-name')) {
                el.innerHTML = `<a href=""Ссылка на товар/${currentTd.id}"" class="table-column-name__link">` + child.value + '</a>';
            } else {
                el.innerHTML = '<span>' + child.value + '</span>';
            };
        };
        if (child.tagName == 'SELECT') {
            el.innerHTML = child.value;;
        }
        td.children[2].classList.add("close");        
        td.children[0].classList.remove("close");
    };
};


function removeEventClickOnEditConfirmButtons() {
    removeEvents('.table-column-actions__ok', 'click', editConfirmHandler);
};


function addEventClickOnEditConfirmButtons() {
    addEvents('.table-column-actions__ok', 'click', editConfirmHandler);
};
addEventClickOnEditConfirmButtons();


function removeEventClickOnRecConfirmButtons() {
    removeEvents('.table-column-actions__recover','click', recConfirmHandler);
};


function addEventClickOnRecConfirmButtons() {
    addEvents('.table-column-actions__recover','click', recConfirmHandler);
};
addEventClickOnRecConfirmButtons();


function getGenericId() {
    // AJAX request to get new ID;   
}