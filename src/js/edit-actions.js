const startEditBtn = document.querySelector('.products-list__cell-actions__edit');
const thCell = document.querySelectorAll('.products-list__cell');
const inp = document.querySelectorAll('.products-list__cell__input');
// const divActClose = document.querySelectorAll('.products-list__cell-actions--close');
// const divActOpen = document.querySelectorAll('.products-list__cell-actions--open');
const btnOk = document.querySelector('.products-list__cell-actions__btn');
const threeDots= document.querySelector('.products-list__cell-actions__dots');
const cellAct = document.querySelectorAll('.products-list__cell-actions');


threeDots.addEventListener('click', (event) => {
    cellAct.classList.toggle("close");
    // startEditBtn.classList.toggle("close");
});


startEditBtn.addEventListener('click', event => {
// const btnOk = document.createElement('button');
// btnOk.textContent = 'OK';
// btnOk.classList.add('button__ok');
// divActClose.display = 'none';
// btnOk.display = 'block';
startEditBtn.classList.toggle("close");
btnOk.classList.toggle("close");
    for(let i = 0; i < thCell.length-1; i++ ){
        thCell[i].innerHTML = `<input type="text" value="${thCell[i].textContent}" class="products-list__cell__input">`;
    };
});
// thCell[-1].insertAdjacentElement(afterbegin, btnOk);
// thCell[-1].insertAdjacentHTML(beforeend, `<button class="button__ok">OK</button>`);
// });

btnOk.addEventListener('click', event => {
    for(let i = 0; i < thCell.length-1; i++ ){
        thCell[i].innerHTML = `${inp[i].textContent}`;
    };

inp.remove();
cellAct.classList.toggle("close");
// divActOpen.display = 'block';
// btnOk.display = 'none';
// thCell[-1].innerHTML = `
//             <div class="products-list__cell-actions products-list__cell-actions--open">
//                 <img src="../images/three-dots.png" class="products-list__cell-actions__dots">
//             </div>
//             <div class="products-list__cell-actions products-list__cell-actions--close">
//                 <img src="../images/copy-icon.svg" title="переместить" class="products-list__cell-actions__copy">
//                 <img src="../images/edit-icon.svg" title="редактировать" class="products-list__cell-actions__edit">
//                 <img src="../images/delete-icon.svg" title="удалить" class="products-list__cell-actions__delete">
//             </div>`;
});




