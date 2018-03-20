function createElem(par, tag, elemClass) {
    let element = document.createElement(tag);
    let elemClassArr = elemClass.split(" ");
    elemClassArr.map(elemClass => element.classList.add(elemClass));
    par.appendChild(element);
    return element;
}

export { createElem };