class EditActions {
    constructor() {
        this.uId = 0;
        this.timerId = null;
        this.bindedDotsHandler = this.dotsHandler.bind(this);
        this.bindedEditHandler = this.editHandler.bind(this);
        this.binedActionsMouseLeave = this.actionsMouseLeave.bind(this);
        this.bindedCopyHandler = this.copyHandler.bind(this);
        this.bindedDelHandler = this.delHandler.bind(this);
        this.bindedRecConfirmHandler = this.recConfirmHandler.bind(this);
        this.bindedEditConfirmHandler = this.editConfirmHandler.bind(this);
    }
    dotsHandler(event) {
        let td = event.target.parentElement.parentElement;
        td.children[0].classList.add("close");
        td.children[1].classList.remove("close");
    };
    
    
    removeEventClickOnDotsButtons() {
        this.removeEvents('.table-column-actions__dots', 'click', this.bindedDotsHandler);
    };
    
    
    addEventClickOnDotsButtons() {
        this.addEvents('.table-column-actions__dots', 'click', this.bindedDotsHandler);
    };
    
    
    
    copyHandler(event) {
        let currentTr = event.target.parentElement.parentElement.parentElement; // current tr with class = row
        let td = event.target.parentElement.parentElement; // current td with class = cell
        let currentTd = currentTr.children; // all td in this tr with class = cell
        td.children[0].classList.remove("close");
        td.children[1].classList.add("close");
    
        let cloneTr = currentTr.cloneNode(true);
        let id = cloneTr.id;
        let newId = id + 'c' + ++this.uId;
    
        cloneTr.id = newId;
        currentTr.insertAdjacentElement('afterend', cloneTr);
    
        this.removeEventClickOnCopyButtons();
        this.removeEventClickOnEditButtons();
        this.removeEventClickOnDelButtons();
        this.removeEventClickOnDotsButtons();
        this.removeEventClickOnEditConfirmButtons();
        this.removeEventClickOnRecConfirmButtons();
        this.removeEventMouseOutForActions();
    
        this.addEventClickOnCopyButtons();
        this.addEventClickOnEditButtons();
        this.addEventClickOnDotsButtons();
        this.addEventClickOnDelButtons();
        this.addEventClickOnEditConfirmButtons();
        this.addEventClickOnRecConfirmButtons();
        this.addEventMouseOutForActions();
    
        let dateCell = document.querySelector(`#${newId} .table-column-creationDate`);
        let now = new Date();
        let newDate = now.toISOString().slice(0, 10);

        dateCell.children[0].textContent = newDate;
        
        let newObject = this.makeObject(cloneTr);
        this.add(newObject, data);
    
        td.children[1].classList.add("close");
        td.children[0].classList.remove("close");
    };
    
    
    makeObject(tr) {
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
    
    
    add(obj, arr) {
        arr.push(obj);
    };
    
    
    each(selector, callback) {
        let elements = document.querySelectorAll(selector);
        for(let i = 0; i < elements.length; i++) {
            callback(elements[i]);
        };
    };
    
    
    addEvents(selector, eventName, handler) {
        this.each(selector, el => el.addEventListener(eventName, handler));
    };
    
    
    removeEvents(selector, eventName, handler) {
        this.each(selector, el => el.removeEventListener(eventName, handler));
    };
    
    
    addEventMouseOutForActions() {
        this.addEvents('.js-actions', 'mouseleave', this.bindedActionsMouseLeave);
    };
    
    
    removeEventMouseOutForActions() {
        this.removeEvents('.js-actions', 'mouseleave', this.bindedActionsMouseLeave);
    };
    
    
    actionsMouseLeave(event) {
        let el = event.target;
        if(el.nextSibling.classList.contains('close') && el.nextSibling.nextSibling.classList.contains('close')) {
            el.classList.add('close');
            el.previousSibling.classList.remove('close');
        };
    };
    
    
    removeEventClickOnCopyButtons() {
        this.removeEvents('.table-column-actions__copy', 'click', this.bindedCopyHandler);
        //тоже самое, что и код ниже:
       // let copyBtn = document.querySelectorAll('.table-column-actions__copy');
        // copyBtn = document.querySelectorAll('.table-column-actions__copy');
        // for(let i = 0; i < copyBtn.length; i++) {
        //     copyBtn[i].removeEventListener('click', this.bindedCopyHandler);
        // };
    };
    
    
    addEventClickOnCopyButtons() {
        this.addEvents('.table-column-actions__copy','click', this.bindedCopyHandler);
    };
    
    
    editHandler(event) {
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
            let isPurPrice = el.classList.contains('table-column-purchasePrice');
            let isSupDate = el.classList.contains('table-column-supplyDate');
    
            if(isName) {
                el.innerHTML = `<input type="text" value="${el.textContent}" class="table-column__input-name">`;
            } else if(isCategory) {
                let sortedCateg = data.map((elem) => elem.category).sort();
                let categoryList = sortedCateg.filter((el, i, arr) => arr.includes(el, i + 1) === false);
                if (categoryList.includes(el.textContent)) {
                    let i = categoryList.indexOf(el.textContent);
                    categoryList.splice(i, 1);
                };
                let mappedArr = categoryList.map((elem) => `<option value=${elem}>${elem}</option>`);
                let reducedArr = mappedArr.reduce((accum, elem) => accum + elem);
                el.innerHTML = `<select name="category" class="table-column__input-select"><option value=${el.textContent}>${el.textContent}</option></select>`
                let id =  currentTr.id;
                let categorySelection = document.querySelector(`#${id} .table-column-category .table-column__input-select`);
                categorySelection.insertAdjacentHTML('beforeend',reducedArr);
            } else if(isDate || isSupDate) {
                var date = new Date(el.textContent);
                var currentDate = date.toISOString().slice(0,10);
                el.innerHTML = `<input type="date" value="${currentDate}" class="table-column__input-date">`;
            } else if(isPrice || isCount || isWeight || isPurPrice){
                firstCh.innerHTML = `<input type="text" value="${firstCh.textContent}" class="table-column__input-numbers">`;
            } else if(isSize) {
                firstCh.innerHTML = `<input type="text" value="${firstCh.textContent}" class="table-column__input-size">`;
            };
        };
    };
    
    
    removeEventClickOnEditButtons() {
        this.removeEvents('.table-column-actions__edit', 'click', this.bindedEditHandler);
    };
    
    
    addEventClickOnEditButtons() {
        this.addEvents('.table-column-actions__edit', 'click', this.bindedEditHandler);
    };
    
    
    delHandler(event) {
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
                child.children[0].classList.add('setToDel-category');
                continue;
            };
        };
        // let id = currentTr.id;
        // let originId = id.replace('row-', '');
        //current th with class = cell
        let td = event.target.parentElement.parentElement; 
        td.children[1].classList.add("close");
        td.children[3].classList.remove("close");
    
        //====== to uncomment the code below if it will be needed: =====//
    
        // this.timerId = setTimeout( () => {
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
    
    
    removeEventClickOnDelButtons() {
        this.removeEvents('.table-column-actions__delete', 'click', this.bindedDelHandler);
    };
    
    
    addEventClickOnDelButtons() {
        this.addEvents('.table-column-actions__delete', 'click', this.bindedDelHandler);
    }; 
    
    
    recConfirmHandler(event) {
        //for delHandler:
        //clearTimeout(this.timerId);
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
                child.children[0].classList.remove('setToDel-category');
            };
        };
    };
    
    
    editConfirmHandler(event) {
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
            let isPurPrice = el.classList.contains('table-column-purchasePrice');
            let isSupDate = el.classList.contains('table-column-supplyDate');
    
            if (isCheckbox) {
                continue;
            };
            if (isName) {
                el.innerHTML = `<a href="Ссылка на товар/${currentTd.id}" class="table-column-name__link">${child.value}</a>`;
                continue;
            };
            if (isCategory) {
                let value = child.value;
                if (value === 'Хоз.товары') {
                    el.innerHTML = `<span id="Хозтовары"><span>${value}</span></span>`;
                } else {
                    el.innerHTML = `<span id=${value}><span>${value}</span></span>`;
                }
        
                continue;
            }
            if (isDate || isSupDate) {
                el.innerHTML = child.value;
                continue;
            }
            if (isCount || isPrice || isWeight || isSize || isPurPrice) {
                child.innerHTML = child.children[0].value;
                continue;
            };
    
        };
    
        td.children[2].classList.add("close");        
        td.children[0].classList.remove("close");
    };
    
    
    removeEventClickOnEditConfirmButtons() {
        this.removeEvents('.table-column-actions__ok', 'click', this.bindedEditConfirmHandler);
    };
    
    
    addEventClickOnEditConfirmButtons() {
        this.addEvents('.table-column-actions__ok', 'click', this.bindedEditConfirmHandler);
    };
    
    
    removeEventClickOnRecConfirmButtons() {
        this.removeEvents('.table-column-actions__recover','click', this.bindedRecConfirmHandler);
    };
    
    
    addEventClickOnRecConfirmButtons() {
        this.addEvents('.table-column-actions__recover','click', this.bindedRecConfirmHandler);
    };
    
    
    getGenericId() {
        // AJAX request to get new ID;   
    }
    
    
    addEditActionsEvents(){
        this.addEventClickOnDotsButtons();
        this.addEventMouseOutForActions();
        this.addEventClickOnCopyButtons();
        this.addEventClickOnEditButtons();
        this.addEventClickOnDelButtons();
        this.addEventClickOnEditConfirmButtons();
        this.addEventClickOnRecConfirmButtons();
    }
}

let editActions = new EditActions();
