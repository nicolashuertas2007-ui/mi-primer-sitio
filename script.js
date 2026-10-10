const boton = document.getElementById("btn-saludo");
const mensaje = document.getElementById("mensaje");

let saludo = 0;

function saludar() {
    saludo++;

    mensaje.textContent = `¡Gracias por saludar! Llevas ${saludo} saludo(s).`;
}

if (boton && mensaje) {
    boton.addEventListener("click", saludar);
} else {
    console.error("No se encontró el botón o el elemento del mensaje.");
}
