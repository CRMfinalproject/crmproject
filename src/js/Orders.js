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
		table = new Table(this.fields);

        filter = new Filter();
		filter.setupSliders();
		
        sorting = new Sorting();
		fieldSettings = new Fieldsettings(this.fields);
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

let ordersPage = new Orders(productTableFields);
