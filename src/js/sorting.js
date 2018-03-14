let data = [
    {
        "id": 1,
        "name": "Помада Kylie",
        "category": "Косметика",
        "count": 259,
        "price": 299,
        "creationDate": "02/21/2018",
        "weight": 10,
        "size": "1x1x5"
    },
    {
        "id": 2,
        "name": "Обезьянка",
        "category": "Игрушки",
        "count": 24,
        "price": 359,
        "creationDate": "02/20/2018",
        "weight": 250,
        "size": "40x40x30"
    },
    {
        "id": 3,
        "name": "Кофта",
        "category": "Одежда",
        "count": 52,
        "price": 300,
        "creationDate": "02/13/2018",
        "weight": 500,
        "size": "40x40x50"
    },
    {
        "id": 4,
        "name": "Кроссовки",
        "category": "Обувь",
        "count": 100,
        "price": 999,
        "creationDate": "02/12/2018",
        "weight": 700,
        "size": "35x20x18"
    },
    {
        "id": 5,
        "name": "Библия",
        "category": "Книги",
        "count": 500,
        "price": 55,
        "creationDate": "02/19/2018",
        "weight": 1000,
        "size": "20x15x4"
    },
    {
        "id": 6,
        "name": "Мыло",
        "category": "Хоз.товары",
        "count": 500,
        "price": 15,
        "creationDate": "01/18/2018",
        "weight": 100,
        "size": "8x4x2"
    },
    {
        "id": 7,
        "name": "Куртка",
        "category": "Кожа",
        "count": 5,
        "price": 5000,
        "creationDate": "02/21/2018",
        "weight": 3000,
        "size": "1000x1000x50"
    },
    {
        "id": 8,
        "name": "Ремень брючной",
        "category": "Ремни",
        "count": 10,
        "price": 199,
        "creationDate": "12/21/2017",
        "weight": 300,
        "size": "1200x40x5"
    },
    {
        "id": 9,
        "name": "Энциклопедия",
        "category": "Книги",
        "count": 200,
        "price": 150,
        "creationDate": "02/21/2018",
        "weight": 1000,
        "size": "300x20x5"
    },
    {
        "id": 10,
        "name": "Джинсы",
        "category": "Одежда",
        "count": 100,
        "price": 699,
        "creationDate": "02/01/2018",
        "weight": 850,
        "size": "1100x700x10"
    },
    {
        "id": 11,
        "name": "Лак",
        "category": "Косметика",
        "count": 1000,
        "price": 99,
        "creationDate": "02/21/2018",
        "weight": 10,
        "size": "1x1x5"
    },
    {
        "id": 12,
        "name": "Кеды",
        "category": "Обувь",
        "count": 155,
        "price": 499,
        "creationDate": "02/11/2018",
        "weight": 10,
        "size": "5x1x1"
    },
    {
        "id": 13,
        "name": "Шампунь",
        "category": "Хоз.товары",
        "count": 50,
        "price": 79,
        "creationDate": "02/21/2018",
        "weight": 150,
        "size": "21x12x3"
    }
];

const tHead = document.querySelector(".data-table-header");
const tBody = document.querySelector(".data-table-body");

const updateView = products => {
	let htmlString = "";
	products.map(product => {
		htmlString += `<tr class="row">
				<td><input type="checkbox" name="checkbox"></td>
				<td>${product.name}</td>
				<td>${product.category}</td>
				<td>${product.count}</td>
				<td>${product.price}</td>
				<td>${product.creationDate}</td>
				<td>${product.weight}</td>
				<td>${product.size}</td>
				</tr>`;
  });
  tBody.innerHTML = htmlString;
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
			updateView(data);
		} else {
			data.sort(function(obj1, obj2) {
				if (obj1.name < obj2.name) return -1;
				if (obj1.name > obj2.name) return 1;
				return 0;
			});
			updateView(data);
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
			updateView(data);
		} else {
			data.sort(function(obj1, obj2) {
				if (obj1.category < obj2.category) return -1;
				if (obj1.category > obj2.category) return 1;
				return 0;
			});
			updateView(data);
		}	
	}
};

const sortByCount = () => {
	if(event.target.textContent === "Кол-во на складе"){
		event.target.classList.toggle("desc");
		if(event.target.classList.contains("desc")){
			data.sort(function(obj1, obj2) {
			return obj2.count - obj1.count;
			});
			updateView(data);
		} else {
			data.sort(function(obj1, obj2) {
				return obj1.count - obj2.count;
			});
			updateView(data);
		}
	}
	
};

const sortByPrice = () => {
	if(event.target.textContent === "Цена"){
		event.target.classList.toggle("desc");
		if(event.target.classList.contains("desc")){
			data.sort(function(obj1, obj2) {
				return obj2.price - obj1.price;
			});
			updateView(data);
		} else {
			data.sort(function(obj1, obj2) {
				return obj1.price - obj2.price;
			});
			updateView(data);
		}
	}
};

const sortByDate = () => {
	if(event.target.textContent === "Дата создания"){
		event.target.classList.toggle("desc");
		if(event.target.classList.contains("desc")){
			data.sort(function(obj1, obj2) {
				return (new Date(obj2.creationDate) - new Date(obj1.creationDate));
			});
			updateView(data);
		} else {
			data.sort(function(obj1, obj2) {
				return (new Date(obj1.creationDate) - new Date(obj2.creationDate));
			});
			updateView(data);
		}
	}
};

const sortByWeight = () => {
	if(event.target.textContent === "Вес"){
		event.target.classList.toggle("desc");
		if(event.target.classList.contains("desc")){
			data.sort(function(obj1, obj2) {
				return obj2.weight - obj1.weight;
			});
			updateView(data);
		} else {
			data.sort(function(obj1, obj2) {
				return obj1.weight - obj2.weight;
			});
			updateView(data);
		}
	}	
};

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
			updateView(data);
		} else {
			data.sort(function(obj1, obj2) {
				let size1 = obj1.size.split("x");
				let size2 = obj2.size.split("x");
				let volume1 = size1[0] * size1[1] * size1[2];
				let volume2 = size2[0] * size2[1] * size2[2];
				return volume1 - volume2;
			});
			updateView(data);
		}
	}
	
};
	
thead.addEventListener("click", function(){
	if(event.target.textContent === "Название товара") sortByName();
	if(event.target.textContent === "Категория") sortByCat();
	if(event.target.textContent === "Кол-во на складе") sortByCount();
	if(event.target.textContent === "Цена") sortByPrice();
	if(event.target.textContent === "Дата создания") sortByDate();
	if(event.target.textContent === "Вес") sortByWeight();
	if(event.target.textContent === "Размеры(ШхВхД)") sortBySize();
});
