function createanElement(typeElement, classNameElement){
    const element = document.createElement(typeElement);
    element.setAttribute("class",classNameElement);
    return element;
}
export {createanElement};