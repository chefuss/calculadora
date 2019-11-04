var display = "0";
var valorAnterior = "";
var op = "";

function operacion(operac) {
  switch (operac) {
    case "x":
      valorAnterior = display;
      display = "";
      op = "producto";
      actualizarDisplay();
      break;
    case "/":
      valorAnterior = display;
      display = "";
      op = "division";
      actualizarDisplay();
      break;
    case "-":
      valorAnterior = display;
      display = "";
      op = "resta";
      actualizarDisplay();
      break;
    case "+":
      valorAnterior = display;
      display = "";
      op = "suma";
      actualizarDisplay();
      break;
    default:
      break;
  }
}

function igual() {
  switch (op) {
    case "suma":
      display = Number(valorAnterior) + Number(display);
      break;
    case "resta":
      display = Number(valorAnterior) - Number(display);
      break;
    case "producto":
      display = Number(valorAnterior) * Number(display);
      break;
    case "division":
      display = Number(valorAnterior) / Number(display);
      break;
    default:
      break;
  }
  actualizarDisplay();
}

function introducirValor(valor) {
  // Validar si hay mas de un punto
  if (valor === "." && display.includes(".")) {
    return;
  }

  var value = document.getElementById("display");
  display += "" + valor;
  value.textContent = display;
}

function actualizarDisplay() {
  document.getElementById("display").innerText = display;
}

function reset() {
  display = "0";
  op = "";
  valorAnterior = "";
  actualizarDisplay();
}

window.onload = function() {
  actualizarDisplay();
};
