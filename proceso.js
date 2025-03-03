document.addEventListener("DOMContentLoaded", function () {
    const btnLogin = document.getElementById("btnLogin");
    const btnRegistro = document.getElementById("btnRegistro");
    const usernameInput = document.getElementById("nombre");
    const passwordInput = document.getElementById("contraseña");

    // Evento para el botón de iniciar sesión
    if (btnLogin) {
        btnLogin.addEventListener("click", function (event) {
            event.preventDefault(); // Evita el envío del formulario

            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            if (username === "" || password === "") {
                alert("Por favor, ingresa tu nombre de usuario y contraseña.");
                return;
            }

            // Assquí podrías agregar una validación con una base de datos o API
            alert("Inicio de sesión exitoso.");
            window.location.href = "login.html"; // Redirige a la página principal
        });
    }

    // Evento para el botón de registro
    if (btnRegistro) {
        btnRegistro.addEventListener("click", function (event) {
            event.preventDefault(); // Evita el envío del formulario
            window.location.href = "registro.html"; // Redirige a la página de registro
        });
    }
});
function togglePassword() {
    let passwordInput = document.getElementById("contraseña");
    let toggleBtn = document.querySelector(".toggle-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleBtn.innerHTML = "🔒"; // Cambia a ojo cerrado
    } else {
        passwordInput.type = "password";
        toggleBtn.innerHTML = "👁️"; // Vuelve al ojo abierto
    }
}