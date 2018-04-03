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
			dataFilter.sort(function(prev, next) {
				if (prev[criteria] < next[criteria]) return 1;
				if (prev[criteria] > next[criteria]) return -1;
				return 0;
			});
			table.renderData();
		} else {
			dataFilter.sort(function(prev, next) {
				if (prev[criteria] < next[criteria]) return -1;
				if (prev[criteria] > next[criteria]) return 1;
				return 0;
			});
			table.renderData();
		}
		this.prev = event.target;
	}
	
	sortByDate(criteria) {
		if((typeof this.prev !== "undefined") && (this.prev !== event.target)){
			this.prev.classList.remove("desc");
		}
		if(event.target.textContent === "Дата создания" || "Дата поставки"){
			event.target.classList.toggle("desc");
			if(event.target.classList.contains("desc")){
				dataFilter.sort(function(prev, next) {
					return (new Date(next[criteria]) - new Date(prev[criteria]));
				});
				table.renderData();
			} else {
				dataFilter.sort(function(prev, next) {
					return (new Date(prev[criteria]) - new Date(next[criteria]));
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
				dataFilter.sort(function(prev, next) {
					let prevSize = prev.size.split("x");
					let nextSize = next.size.split("x");
					let prevVolume = prevSize[0] * prevSize[1] * prevSize[2];
					let nextVolume = nextSize[0] * nextSize[1] * nextSize[2];
					return (nextVolume - prevVolume);
				});
				table.renderData();
			} else {
				dataFilter.sort(function(prev, next) {
					let prevSize = prev.size.split("x");
					let nextSize = next.size.split("x");
					let prevVolume = prevSize[0] * prevSize[1] * prevSize[2];
					let nextVolume = nextSize[0] * nextSize[1] * nextSize[2];
					return prevVolume - nextVolume;
				});
				table.renderData();
			}
		}
		this.prev = event.target;
	}
	uncheckHeader() {
		if (document.querySelector(".data-table-header .checkbox").checked) {
			document.querySelector(".data-table-header .checkbox").checked = false;
		}
	}
	
	sort() {
		this.target = event.target.textContent;
		switch(this.target) {
			case "Название товара": {
				this.uncheckHeader();
				this.sortNames("name");
				break;
			}
			case "Категория": {
				this.uncheckHeader();
				this.sortNames("category");
				break;
			}
			case "Кол-во на складе": {
				this.uncheckHeader();
				this.sortNames("count");
				break;
			}
			case "Цена": {
				this.uncheckHeader();
				this.sortNames("price");
				break;
			}
			case "Закупочная цена": {
				this.uncheckHeader();
				this.sortNames("price");
				break;
			}
			case "Дата создания": {
				this.uncheckHeader();
				this.sortByDate("supplyDate");
				break;
			}
			case "Дата поставки": {
				this.uncheckHeader();
				this.sortByDate("creationDate");
				break;
			}
			case "Вес": {
				this.uncheckHeader();
				this.sortNames("weight");
				break;
			}
			case "Размеры(ШхВхД)": {
				this.uncheckHeader();
				this.sortBySize();
				break;
			}
		}
	}
}

let sorting = new Sorting();
