var display = "0";
var valorAnterior = "";
var op = "";

function operacion(operac) {
  switch (operac) {
    case "x":
      valorAnterior = display;
      display = 0;
      op = "producto";
      actualizarDisplay();
      break;
    case "/":
      valorAnterior = display;
      display = 0;
      op = "division";
      actualizarDisplay();
      break;
    case "-":
      valorAnterior = display;
      display = 0;
      op = "resta";
      actualizarDisplay();
      break;
    case "+":
      valorAnterior = display;
      display = 0;
      op = "suma";
      actualizarDisplay();
      break;
    case "+/-":
      display *= -1;
      actualizarDisplay();
      break;
    case "%":
      valorAnterior = display;
      display = 0;
      op = "porcentaje";
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
    case "porcentaje":
      display = (Number(valorAnterior) * Number(display)) / 100;
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
  if (display == 0) display = "";
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
