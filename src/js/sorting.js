const tHead = document.querySelector(".data-table-header");
let prev;

const sortNames = (criteria) => {
	if((typeof prev !== 'undefined') && (prev !== event.target)){
        prev.classList.remove("desc");
    }
	event.target.classList.toggle("desc");
	if(event.target.classList.contains("desc")){
		data.sort(function(obj1, obj2) {
			if (obj1[criteria] < obj2[criteria]) return 1;
			if (obj1[criteria] > obj2[criteria]) return -1;
			return 0;
		});
		table.renderData();
	} else {
		data.sort(function(obj1, obj2) {
			if (obj1[criteria] < obj2[criteria]) return -1;
			if (obj1[criteria] > obj2[criteria]) return 1;
			return 0;
		});
		table.renderData();
	}
	prev = event.target;
};

const sortByDate = () => {
	if((typeof prev !== 'undefined') && (prev !== event.target)){
        prev.classList.remove("desc");
    }
	if(event.target.textContent === "Дата создания"){
		event.target.classList.toggle("desc");
		if(event.target.classList.contains("desc")){
			data.sort(function(obj1, obj2) {
				return (new Date(obj2.creationDate) - new Date(obj1.creationDate));
			});
			table.renderData();
		} else {
			data.sort(function(obj1, obj2) {
				return (new Date(obj1.creationDate) - new Date(obj2.creationDate));
			});
			table.renderData();
		}
	}
	prev = event.target;
};

const sortBySize = () => {
	if((typeof prev !== 'undefined') && (prev !== event.target)){
        prev.classList.remove("desc");
    }
	if(event.target.textContent === "Размеры(ШхВхД)"){
		event.target.classList.toggle("desc");
		if(event.target.classList.contains("desc")){
			data.sort(function(obj1, obj2) {
				let size1 = obj1.size.split("x");
				let size2 = obj2.size.split("x");
				let volume1 = size1[0] * size1[1] * size1[2];
				let volume2 = size2[0] * size2[1] * size2[2];
				return (volume2 - volume1);
			});
			table.renderData();
		} else {
			data.sort(function(obj1, obj2) {
				let size1 = obj1.size.split("x");
				let size2 = obj2.size.split("x");
				let volume1 = size1[0] * size1[1] * size1[2];
				let volume2 = size2[0] * size2[1] * size2[2];
				return volume1 - volume2;
			});
			table.renderData();
		}
	}
	prev = event.target;
};

tHead.addEventListener("click", function () {
	let target = event.target.textContent;
	switch(target) {
		case "Название товара": {
			sortNames("name");
			break;
		}
		case "Категория": {
			sortNames("category");
			break;
		}
		case "Кол-во на складе": {
			sortNames("count");
			break;
		}
		case "Цена": {
			sortNames("price");
			break;
		}
		case "Дата создания": {
			sortByDate();
			break;
		}
		case "Вес": {
			sortNames("weight");
			break;
		}
		case "Размеры(ШхВхД)": {
			sortBySize();
			break;
		}
	}
});
