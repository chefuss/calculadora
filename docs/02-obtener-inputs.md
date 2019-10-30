# Calculadora Javascript - Obtener Inputs

Ahora que tenemos una calculadora queremos poder apretar los botones y ver eso en el visor de la calculadora.

## Crear e incluir archivo javascript

Crear el archivo main.js en la raíz del proyecto e incluirlo antes del cierre de body

```html
    ...
        <script src="main.js"></script>
    </body>
```

## Mantener estado de la calculadora

Por ahora el estado de la calculadora es simplemente el valor del display.

```javascript
var display = "0";
```

Este estado tiene que verse reflejado en el display. Vamos a escribir una funcion que actualiza el estado en el display.

```javascript
function actualizarDisplay() {
  document.getElementById("display").innerText = display;
}

window.onload = function() {
  actualizarDisplay();
};
```

## Presionar un número

Al presionar una tecla tenemos que ejecutar una funcion y modificar el estado del visor. Para esto podemos utilizar el atributo _onClick_ en los botones que utilicemos.
Como nuestro display es un string podemos simplemente concatenar el nuevo numero.

```javascript
function presonarNumero(numero) {
  display += numero;
  actualizarDisplay();
}
```
