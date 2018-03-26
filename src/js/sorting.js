class Sorting {
	constructor(table){
		this.tHead = document.querySelector(".data-table-header");
		this.prev;
		this.tHead.addEventListener("click", this.sort.bind(this));
	}
	
	sortNames(criteria) {
		if((typeof this.prev !== "undefined") && (this.prev !== event.target)){
			this.prev.classList.remove("desc");
		}
		event.target.classList.toggle("desc");
		if(event.target.classList.contains("desc")){
			dataFilter.sort(function(obj1, obj2) {
				if (obj1[criteria] < obj2[criteria]) return 1;
				if (obj1[criteria] > obj2[criteria]) return -1;
				return 0;
			});
			table.renderData();
		} else {
			dataFilter.sort(function(obj1, obj2) {
				if (obj1[criteria] < obj2[criteria]) return -1;
				if (obj1[criteria] > obj2[criteria]) return 1;
				return 0;
			});
			table.renderData();
		}
		this.prev = event.target;
	}
	
	sortByDate() {
		if((typeof this.prev !== "undefined") && (this.prev !== event.target)){
			this.prev.classList.remove("desc");
		}
		if(event.target.textContent === "Дата создания"){
			event.target.classList.toggle("desc");
			if(event.target.classList.contains("desc")){
				dataFilter.sort(function(obj1, obj2) {
					return (new Date(obj2.creationDate) - new Date(obj1.creationDate));
				});
				table.renderData();
			} else {
				dataFilter.sort(function(obj1, obj2) {
					return (new Date(obj1.creationDate) - new Date(obj2.creationDate));
				});
				table.renderData();
			}
		}
		this.prev = event.target;
	}
	
	sortBySize() {
		if((typeof this.prev !== "undefined") && (this.prev !== event.target)){
			this.prev.classList.remove("desc");
		}
		if(event.target.textContent === "Размеры(ШхВхД)"){
			event.target.classList.toggle("desc");
			if(event.target.classList.contains("desc")){
				dataFilter.sort(function(obj1, obj2) {
					let size1 = obj1.size.split("x");
					let size2 = obj2.size.split("x");
					let volume1 = size1[0] * size1[1] * size1[2];
					let volume2 = size2[0] * size2[1] * size2[2];
					return (volume2 - volume1);
				});
				table.renderData();
			} else {
				dataFilter.sort(function(obj1, obj2) {
					let size1 = obj1.size.split("x");
					let size2 = obj2.size.split("x");
					let volume1 = size1[0] * size1[1] * size1[2];
					let volume2 = size2[0] * size2[1] * size2[2];
					return volume1 - volume2;
				});
				table.renderData();
			}
		}
		this.prev = event.target;
	}
	
	sort(event) {
		this.target = event.target.textContent;
		switch(this.target) {
			case "Название товара": {
				this.sortNames("name");
				break;
			}
			case "Категория": {
				this.sortNames("category");
				break;
			}
			case "Кол-во на складе": {
				this.sortNames("count");
				break;
			}
			case "Цена": {
				this.sortNames("price");
				break;
			}
			case "Закупочная цена": {
				this.sortNames("price");
				break;
			}
			case "Дата создания": {
				this.sortByDate();
				break;
			}
			case "Дата поставки": {
				this.sortByDate();
				break;
			}
			case "Вес": {
				this.sortNames("weight");
				break;
			}
			case "Размеры(ШхВхД)": {
				this.sortBySize();
				break;
			}
		}
	}
}

let sorting = new Sorting();
