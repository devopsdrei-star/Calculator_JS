const displayEl = document.getElementById("display");
const historyEl = document.getElementById("history");
const calculator = document.querySelector(".calculator");

let current = "0";
let previous = null;
let operation = null;
let memory = 0;

function updateDisplay(value) {
  displayEl.textContent = value;
}

function setHistory(text = "") {
  historyEl.textContent = text;
}

function clearAll() {
  current = "0";
  previous = null;
  operation = null;
  updateDisplay(current);
  setHistory("");
}

function inputDigit(digit) {
  if (current.length >= 12) return;
  if (digit === ".") {
    if (!current.includes(".")) current += ".";
    return updateDisplay(current);
  }

  if (current === "0") {
    current = digit;
  } else {
    current += digit;
  }
  updateDisplay(current);
}

function setOperation(op) {
  if (operation && previous !== null) {
    compute();
  }
  previous = parseFloat(current);
  operation = op;
  current = "0";
  setHistory(`${formatNumber(previous)} ${symbolFor(op)}`);
}

function compute() {
  if (operation === null || previous === null) return;
  const a = previous;
  const b = parseFloat(current);
  const op = operation;
  let result = a;

  switch (operation) {
    case "add":
      result = a + b;
      break;
    case "subtract":
      result = a - b;
      break;
    case "multiply":
      result = a * b;
      break;
    case "divide":
      result = b === 0 ? "Error" : a / b;
      break;
    default:
      break;
  }

  if (result !== "Error") {
    result = parseFloat(result.toPrecision(12));
  }

  current = String(result);
  previous = null;
  operation = null;
  setHistory(`${formatNumber(a)} ${symbolFor(op)} ${formatNumber(b)} =`);
  updateDisplay(current);
}

function symbolFor(op) {
  switch (op) {
    case "add":
      return "+";
    case "subtract":
      return "−";
    case "multiply":
      return "×";
    case "divide":
      return "÷";
    default:
      return "";
  }
}

function formatNumber(n) {
  if (!isFinite(n)) return String(n);
  const trimmed = parseFloat(n.toPrecision(12));
  return String(trimmed);
}


function handleMemory(action) {
  const value = parseFloat(current) || 0;
  if (action === "mc") memory = 0;
  if (action === "mr") current = String(memory);
  if (action === "mplus") memory += value;
  if (action === "mminus") memory -= value;
  updateDisplay(current);
}

calculator.addEventListener("click", (e) => {
  const target = e.target.closest("button");
  if (!target) return;

  const { value, action } = target.dataset;

  if (value) {
    inputDigit(value);
    return;
  }

  if (action === "clear") return clearAll();
  if (action === "equals") return compute();
  if (action && ["add", "subtract", "multiply", "divide"].includes(action)) {
    return setOperation(action);
  }
  if (action && ["mc", "mr", "mplus", "mminus"].includes(action)) {
    return handleMemory(action);
  }
});


updateDisplay(current);
