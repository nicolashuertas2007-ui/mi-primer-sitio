const saludo = document.getElementById("saludo");
const botonSalir = document.getElementById("btn-salir");
const usuarioActivo = sessionStorage.getItem("usuarioActivo");

if (usuarioActivo === null || usuarios[usuarioActivo] === undefined) {
    window.location.href = "login.html";
} else {
    const datos = usuarios[usuarioActivo];
    saludo.textContent = `Bienvenido ${datos.nombre}`;
}

function cerrarSesion() {
    sessionStorage.removeItem("usuarioActivo");
    window.location.href = "login.html";
}

botonSalir.addEventListener("click", cerrarSesion);