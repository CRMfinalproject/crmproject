const getByName = document.querySelector("[data-sort='product-name']");
const getByCat = document.querySelector("[data-sort='product-category']");
const getByCount = document.querySelector("[data-sort='product-count']");
const getByPrice = document.querySelector("[data-sort='product-price']");
const getByDate = document.querySelector("[data-sort='product-date']");
const getByWeight = document.querySelector("[data-sort='product-weight']");
const getBySize = document.querySelector("[data-sort='product-size']");
const tBody = document.querySelector("#js-tbody");
const url = ("/GoIT/CRM/data.json");


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

const sortByName = () =>
	fetch(url)
	.then(response => 
		response.json())
	.then(data => {
		if(getByName.classList.contains("asc")){
			getByName.classList.remove("asc");
			data.sort(function(obj1, obj2) {
				if (obj1.name < obj2.name) return 1;
				if (obj1.name > obj2.name) return -1;
				return 0;
			});
			updateView(data);
		} else {
			getByName.classList.add("asc");
			data.sort(function(obj1, obj2) {
				if (obj1.name < obj2.name) return -1;
				if (obj1.name > obj2.name) return 1;
				return 0;
			});
			updateView(data);
		}
    })
	.catch(error => {
		console.log('Fetch Error:', error);
	});

const sortByCat = () =>
	fetch(url)
	.then(response =>
		response.json())
	.then(data => {
		if(getByCat.classList.contains("asc")){
			getByCat.classList.remove("asc");
			data.sort(function(obj1, obj2) {
				if (obj1.category < obj2.category) return 1;
				if (obj1.category > obj2.category) return -1;
				return 0;
			});
			updateView(data);
		} else {
			getByCat.classList.add("asc");
			data.sort(function(obj1, obj2) {
				if (obj1.category < obj2.category) return -1;
				if (obj1.category > obj2.category) return 1;
				return 0;
			});
			updateView(data);
		}
	 })
	.catch(error => {
		console.log('Fetch Error :-S', error);
	});	

const sortByCount = () =>
	fetch(url)
	.then(response =>
		response.json())
	.then(data => {
		if(getByCount.classList.contains("asc")){
			getByCount.classList.remove("asc");
			data.sort(function(obj1, obj2) {
				return obj2.count - obj1.count;
			});
			updateView(data);
		} else {
			getByCount.classList.add("asc");
			data.sort(function(obj1, obj2) {
				return obj1.count - obj2.count;
			});
			updateView(data);
		}
	})
	.catch(error => {
		console.log('Fetch Error :-S', error);
	});

const sortByPrice = () =>
	fetch(url)
	.then(response =>
		response.json())
	.then(data => {
		if(getByPrice.classList.contains("asc")){
			getByPrice.classList.remove("asc");
			data.sort(function(obj1, obj2) {
				return obj2.price - obj1.price;
			});
			updateView(data);
		} else {
			getByPrice.classList.add("asc");
			data.sort(function(obj1, obj2) {
				return obj1.price - obj2.price;
			});
			updateView(data);
		}
	})
	.catch(error => {
		console.log('Fetch Error :-S', error);
	});
	
const sortByDate = () =>
	fetch(url)
	.then(response =>
		response.json())
	.then(data => {
		if(getByDate.classList.contains("asc")){
			getByDate.classList.remove("asc");
			data.sort(function(obj1, obj2) {
				return (new Date(obj2.creationDate) - new Date(obj1.creationDate));
			});
			updateView(data);
		} else {
			getByDate.classList.add("asc");
			data.sort(function(obj1, obj2) {
				return (new Date(obj1.creationDate) - new Date(obj2.creationDate));
			});
			updateView(data);
		}
	})
	.catch(error => {
		console.log('Fetch Error :-S', error);
	});

const sortByWeight = () =>
	fetch(url)
	.then(response =>
		response.json())
	.then(data => {
		if(getByWeight.classList.contains("asc")){
			getByWeight.classList.remove("asc");
			data.sort(function(obj1, obj2) {
				return obj2.weight - obj1.weight;
			});
			updateView(data);
		} else {
			getByWeight.classList.add("asc");
			data.sort(function(obj1, obj2) {
				return obj1.weight - obj2.weight;
			});
			updateView(data);
		}
	})
	.catch(error => {
		console.log('Fetch Error :-S', error);
	});

const sortBySize = () =>
	fetch(url)
	.then(response =>
		response.json())
	.then(data => {
		if(getBySize.classList.contains("asc")){
			getBySize.classList.remove("asc");
			data.sort(function(obj1, obj2) {
				return obj2.size - obj1.size;
			});
			updateView(data);
		} else {
			getBySize.classList.add("asc");
			data.sort(function(obj1, obj2) {
				return obj1.size - obj2.size;
			});
			updateView(data);
		}
	})
	.catch(error => {
		console.log('Fetch Error :-S', error);
	});

	
getByName.addEventListener("click", sortByName);
getByCat.addEventListener("click", sortByCat);
getByCount.addEventListener("click", sortByCount);
getByPrice.addEventListener("click", sortByPrice);
getByDate.addEventListener("click", sortByDate);
getByWeight.addEventListener("click", sortByWeight);
getBySize.addEventListener("click", sortBySize);