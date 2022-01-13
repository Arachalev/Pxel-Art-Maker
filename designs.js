/**INITIALIZING THE VALUES */
const gridHeight = document.querySelector("#inputHeight");
const gridWidth = document.querySelector("#inputWidth");
const gridForm = document.querySelector("#sizePicker");
const color = document.querySelector("#colorPicker");
const mainTable = document.getElementById("pixelCanvas");
let enteredColor = color.value;
let enteredHeight, enteredWidth, finalHeight, finalWidth;

/**A FUNCTION TO SET ATTRIBUTES OF AN ELEMENT */
function setAttributes(el, attrs) {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

/**FUNCTION TO MAKE A GRID */
function makeGrid(height, width) {
  for (let x = 0; x < height; x++) {
    let newRow = document.createElement("tr");
    setAttributes(newRow, { id: `row${x}`, class: "row" });
    mainTable.insertAdjacentElement("beforeend", newRow);
    for (let y = 0; y < width; y++) {
      let newTableData = document.createElement("td");
      setAttributes(newTableData, { id: `data${x}-${y}` });
      newRow.insertAdjacentElement("beforeend", newTableData);
      /**ADDING AN EVENT LISTENER TO THE CREATED TABLE-DATA */
      newTableData.addEventListener("click", (e) => {
        newTableData.style.backgroundColor = enteredColor;
      });
    }
  }
}

/**FUNCTOIN TO RESET THE COLOR OF THE GRID AND ALSO REMOVE THE GRID FROM THE DOM */
function reset(className) {
  document.querySelectorAll(className).forEach((el) => el.remove());
  enteredColor = "#000000";
  color.value = "#000000";
}

/**ADDING AN EVENT LISTENER FOR A COLOR CHANGE */
color.addEventListener("input", (e) => {
  enteredColor = color.value;
});

/**ADDING AN EVENT LISTERN TO THE FORM ON SUBMIT */
gridForm.addEventListener("submit", (e) => {
  e.preventDefault();
  enteredHeight = gridHeight.value;
  enteredWidth = gridWidth.value;
  finalHeight = parseInt(enteredHeight);
  finalWidth = parseInt(enteredWidth);
  reset(".row");
  makeGrid(finalHeight, finalWidth);
});
