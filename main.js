const display = document.getElementById("display");

function appendToDisplay(value) {
  display.textContent += value;
}

function clearDisplay() {
  display.textContent = "";
}

function clearLast() {
  display.textContent = display.textContent.slice(0, -1);
}

function calculate() {
  try {
    display.textContent = eval(display.textContent);
  } catch (error) {
    display.textContent = "Error";
  }
}
function calculatePercentage() {
  try {
    const currentValue = parseFloat(display.textContent);
    if (!isNaN(currentValue)) {
      display.textContent = (currentValue / 100).toString();
    } else {
      display.textContent = "Error";
    }
  } catch (error) {
    display.textContent = "Error";
  }         
}
 
