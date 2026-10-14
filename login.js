const formulario = document.getElementById("form-login");
const mensajeLogin = document.getElementById("mensaje-login");


function iniciarSesion(evento) {
    evento.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("contraseña").value;
     
    const datos = usuarios[usuario];

    if (datos !== undefined && datos.contraseña === contraseña) {
        sessionStorage.setItem("usuarioActivo", usuario);
        mensajeLogin.textContent = "Bienvenido"
        window.location.href = "principal.html";
    }else{
        mensajeLogin.textContent = "Usuario o contraseña incorrectos"
    }
}

formulario.addEventListener("submit", iniciarSesion)