const tHead = document.querySelector(".data-table-header");

const sortNumbers = (criteria) => {
		event.target.classList.toggle("desc");
		if (event.target.classList.contains("desc")) {
			data.sort(function (obj1, obj2) {
				return obj2[criteria] - obj1[criteria];
			});
			table.renderData();
		} else {
			data.sort(function (obj1, obj2) {
				return obj1[criteria] - obj2[criteria];
			});
			table.renderData();
		}
};

const sortByName = () => {
	if(event.target.textContent === "Название товара"){
		event.target.classList.toggle("desc");
		if(event.target.classList.contains("desc")){
			data.sort(function(obj1, obj2) {
				if (obj1.name < obj2.name) return 1;
				if (obj1.name > obj2.name) return -1;
				return 0;
			});
			table.renderData();
		} else {
			data.sort(function(obj1, obj2) {
				if (obj1.name < obj2.name) return -1;
				if (obj1.name > obj2.name) return 1;
				return 0;
			});
			table.renderData();
		}
	}

};

const sortByCat = () => {
	if(event.target.textContent === "Категория"){
		event.target.classList.toggle("desc");
		if(event.target.classList.contains("desc")){
			data.sort(function(obj1, obj2) {
				if (obj1.category < obj2.category) return 1;
				if (obj1.category > obj2.category) return -1;
				return 0;
			});
			table.renderData();
		} else {
			data.sort(function(obj1, obj2) {
				if (obj1.category < obj2.category) return -1;
				if (obj1.category > obj2.category) return 1;
				return 0;
			});
			table.renderData();
		}	
	}
};


// const sortByCount = () => {
// 	if(event.target.textContent === "Кол-во на складе"){
// 		event.target.classList.toggle("desc");
// 		if(event.target.classList.contains("desc")){
// 			data.sort(function(obj1, obj2) {
// 			return obj2.count - obj1.count;
// 			});
// 			table.renderData();
// 		} else {
// 			data.sort(function(obj1, obj2) {
// 				return obj1.count - obj2.count;
// 			});
// 			table.renderData();
// 		}
// 	}
	
// };


// const sortByPrice = () => {
// 	if(event.target.textContent === "Цена"){
// 		event.target.classList.toggle("desc");
// 		if(event.target.classList.contains("desc")){
// 			data.sort(function(obj1, obj2) {
// 				return obj2.price - obj1.price;
// 			});
// 			table.renderData();
// 		} else {
// 			data.sort(function(obj1, obj2) {
// 				return obj1.price - obj2.price;
// 			});
// 			table.renderData();
// 		}
// 	}
// };


const sortByDate = () => {
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
};


// const sortByWeight = () => {
// 	if(event.target.textContent === "Вес"){
// 		event.target.classList.toggle("desc");
// 		if(event.target.classList.contains("desc")){
// 			data.sort(function(obj1, obj2) {
// 				return obj2.weight - obj1.weight;
// 			});
// 			table.renderData();
// 		} else {
// 			data.sort(function(obj1, obj2) {
// 				return obj1.weight - obj2.weight;
// 			});
// 			table.renderData();
// 		}
// 	}	
// };


const sortBySize = () => {
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
};
	
// tHead.addEventListener("click", function(){
// 	if(event.target.textContent === "Название товара") sortByName();
// 	if(event.target.textContent === "Категория") sortByCat();
// 	if(event.target.textContent === "Кол-во на складе") sortByCount();
// 	if(event.target.textContent === "Цена") sortByPrice();
// 	if(event.target.textContent === "Дата создания") sortByDate();
// 	if(event.target.textContent === "Вес") sortByWeight();
// 	if(event.target.textContent === "Размеры(ШхВхД)") sortBySize();
// });

tHead.addEventListener("click", function () {
	if (event.target.textContent === "Название товара") sortByName();
	if (event.target.textContent === "Категория") sortByCat();
	if (event.target.textContent === "Кол-во на складе") sortNumbers("count");
	if (event.target.textContent === "Цена") sortNumbers("price");
	if (event.target.textContent === "Дата создания") sortByDate();
	if (event.target.textContent === "Вес") sortNumbers("weight");
	if (event.target.textContent === "Размеры(ШхВхД)") sortBySize();
});
