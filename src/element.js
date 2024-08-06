function makeElement(type) {
  let innerText = '';
  let className = '';
  return {
    addText(text) {
      innerText = text;
      return this;
    },
    addClass(name) {
      className = name;
      return this;
    },
    create() {
      let element = document.createElement(type);
      if (innerText != '') {
        element.textContent = innerText;
      }
      if (className != '') {
        element.classList.add(className);
      }
      return element;
    },
  };
}

export { makeElement };
