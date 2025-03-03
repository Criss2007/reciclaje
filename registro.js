document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formularioRegistro');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    // Alternar visibilidad de la contraseña
    togglePassword.addEventListener('click', () => {
        const tipo = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = tipo;
        togglePassword.classList.toggle('fa-eye-slash');
    });

    // Manejar el envío del formulario
    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto

        // Obtener los valores de los campos
        const usuario = document.getElementById('usuario').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validar que todos los campos estén completos
        if (!usuario || !email || !password) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Guardar las credenciales en localStorage (Solo para demostración, NO SEGURO PARA PRODUCCIÓN)
        localStorage.setItem('usuario', usuario);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password); // No recomendado en producción

        // Deshabilitar el botón para evitar doble clic
        const boton = formulario.querySelector('.boton');
        boton.disabled = true;

        // Mostrar mensaje de éxito
        alert('Registro exitoso. Serás redirigido al inicio de sesión.');

        // Redirigir al index.html después de 2 segundos
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    });
});
