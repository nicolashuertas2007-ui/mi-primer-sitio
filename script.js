document.addEventListener("DOMContentLoaded", function() {

    let btnSaludo = document.getElementById("btn-saludo");
    let mensaje = document.getElementById("mensaje");
    let contador = 0;

    btnSaludo.addEventListener("click", function() {
        contador++;

        mensaje.textContent = "¡Hola,Has presionado el botón " + contador + " veces.";
    });

});
