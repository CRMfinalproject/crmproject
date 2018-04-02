class Orders {
    constructor(fields) {
        this.triggerBtn = document.querySelector('#js-menu-orders');
		this.currentBtn = this.triggerBtn.querySelector('.burger-menu__item');
        this.triggerBtn.addEventListener('click', () => this.render());
		this.fields = fields;
		
    };
    render(){
		this.target = event.target;
		this.prev = document.querySelector(".burger-menu__item--selected");
		if((typeof this.prev !== "undefined") && (this.prev !== this.target)){
			this.prev.classList.remove("burger-menu__item--selected");
		}
		this.currentBtn.classList.add("burger-menu__item--selected")
		
		document.querySelector('.content').innerHTML = '';
		this.renderContainer();
		
    }
	
	renderContainer () {
        const parent = document.body.querySelector('.content');
		parent.innerHTML = '';
		this.tabsContainer = createElement(parent, 'div', 'tabs');
		tabs = new Tabs();
		tableControl = new TableControlBlock("новый товар");
		table = new Table(productTableFields);
		sorting = new Sorting();
		fieldSettings = new Fieldsettings(productTableFields);
		page = new Pagination(data);
    }
	
	createElem(parent, tag, elemClass, nextSibling) {
		let element = document.createElement(tag);
		let elemClassArr = elemClass.split(" ");
		elemClassArr.map(elemClass => element.classList.add(elemClass));
		if (!nextSibling) {
			parent.appendChild(element);
		} else {parent.insertBefore(element, nextSibling)};
		return element;
	}
}
let productTableFields = [
    { name: "name", view: "Название товара", hidden: false, format: (x) => `<a href = "#" class = "table-column-name__link">${x}</a>` },
    { name: "category", view: "Категория", hidden: false, format: (x) => `<span id = ${x.replace(/\./g, "")}><span>${x}</span></span>` },
    { name: "count", view: "Кол-во на складе", hidden: false, format: (x) => `<span>${x}</span><span class="table-fixedtext">шт</span>` },
    { name: "price", view: "Цена", hidden: false, format: (x) => `<span>${x}</span><span class="table-fixedtext">грн</span>` },
    { name: "creationDate", view: "Дата создания", hidden: false, format: (x) => `<span>${x}</span>` },
    { name: "weight", view: "Вес", hidden: false, format: (x) => `<span>${x}</span><span class="table-fixedtext">г</span>` },
    { name: "size", view: "Размеры(ШхВхД)", hidden: false, format: (x) => `<span>${x}</span><span class="table-fixedtext">см</span>` }
];

let supplyTableFields = [
    { name: "name", view: "Название товара", hidden: false, format: (x) => `<a href = "#" class = "table-column-name__link">${x}</a>` },
    { name: "category", view: "Категория", hidden: false, format: (x) => `<span id = ${x.replace(/\./g, "")}><span>${x}</span></span>` },
    { name: "purchasePrice", view: "Закупочная цена", hidden: false, format: (x) => `<span>${x}</span><span class="table-fixedtext">грн</span>` },
    { name: "supplyDate", view: "Дата поставки", hidden: false, format: (x) => `<span>${x}</span>` },
];


let ordersPage = new Orders(productTableFields);
