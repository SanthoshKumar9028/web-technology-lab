let screen = document.getElementById("screen");

function concatWithInput(obj) {
  screen.value += obj.innerHTML;
}

function clearScreen() {
  screen.value = "";
}

function eraseLastSymbol() {
  if (screen.value.includes("Infinity") || screen.value.includes("NaN")) {
    return clearScreen();
  }
  screen.value = screen.value.slice(0, screen.value.length - 1);
}

function calculate() {
  try {
    let result = eval(screen.value);
    if (result) {
      screen.value = result;
    }
  } catch (e) {}
}

//adding key board acces

window.addEventListener("keypress", function (e) {
  e.preventDefault();
  if (
    (e.code.includes("Digit") || e.code.includes("Numpad")) &&
    /\d$/.test(e.code)
  ) {
    screen.value += e.code[e.code.length - 1];
  } else if (e.code.includes("Enter")) {
    calculate();
  } else if (e.code.includes("KeyC")) {
    clearScreen();
  } else {
    let op = null;
    if (e.code.includes("Add")) {
      op = "+";
    } else if (e.code.includes("Subtract")) {
      op = "-";
    } else if (e.code.includes("Multiply")) {
      op = "*";
    } else if (e.code.includes("Divide")) {
      op = "/";
    } else if (e.code.includes("Decimal")) {
      op = ".";
    }
    if (op) screen.value += op;
  }
});
