let categorySelection = document.querySelector('#js-select-category');
let categoryList = [];
let apiUrl = '/GoIT/CRM/data.json';
fetch(dataUrl, {method: 'GET'})
.then((response) => response.json())
.then((data) => (data.name in categoryList) ?  categoryList : categoryList.push(data.name))
    .catch((error) => alert('Error adding product')
);
categorySelection.innerHTML = categoryList.map((elem) => `<option value=${elem}>${elem}</option>`).reduce((accum, elem) => accum + elem);