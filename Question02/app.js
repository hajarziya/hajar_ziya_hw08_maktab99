function getElement(elementType, callback) {
  const divElement = document.createElement("div");
  document.body.appendChild(divElement);
  callBack(divElement);
  return divElement;
}

const callBack = function (elem) {
  elem.style.backgroundColor = "red";
  elem.textContent = "Some text";
};

console.log(getElement("div", callBack));
