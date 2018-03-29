function createElem(parent, tag, elemClass, nextSibling) {
    let element = document.createElement(tag);
    let elemClassArr = elemClass.split(" ");
    elemClassArr.map(elemClass => element.classList.add(elemClass));
    if (!nextSibling) {
        parent.appendChild(element);
    } else {parent.insertBefore(element, nextSibling)};
    return element;
}

export { createElem };