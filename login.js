document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll(".icon");
    const cantidadInput = document.getElementById("cantidad");
    const guardarBtn = document.getElementById("guardar");
    const finalizarBtn = document.getElementById("finalizar");

    let materialSeleccionado = "";
    let materiales = {
        plástico: 0,
        cartón: 0,
        metales: 0,
        electrónica: 0
    };

    icons.forEach(icon => {
        icon.addEventListener("click", function () {
            // Remover la clase 'selected' de todos los íconos
            icons.forEach(i => i.classList.remove("selected"));
            // Agregar la clase 'selected' al ícono clicado
            this.classList.add("selected");
            materialSeleccionado = this.getAttribute("data-material");
        });
    });

    guardarBtn.addEventListener("click", function () {
        const cantidad = parseFloat(cantidadInput.value);
        if (!materialSeleccionado) {
            alert("Por favor, seleccione un tipo de material.");
            return;
        }
        if (isNaN(cantidad) || cantidad <= 0) {
            alert("Por favor, ingrese una cantidad válida en kg.");
            return;
        }
        materiales[materialSeleccionado] += cantidad;
        actualizarResultados();
        cantidadInput.value = "";
        alert(`Se han guardado ${cantidad} kg de ${materialSeleccionado}.`);
    });

    finalizarBtn.addEventListener("click", function () {
        let resumen = "Resumen de materiales reciclados:\n";
        for (const material in materiales) {
            resumen += `${material.charAt(0).toUpperCase() + material.slice(1)}: ${materiales[material]} kg\n`;
        }
        alert(resumen);

        // Reiniciar los valores a 0
        materiales = {
            plástico: 0,
            cartón: 0,
            metales: 0,
            electrónica: 0
        };
        actualizarResultados();
    });

    function actualizarResultados() {
        document.getElementById("resPlastico").textContent = materiales.plástico.toFixed(2);
        document.getElementById("resCarton").textContent = materiales.cartón.toFixed(2);
        document.getElementById("resMetales").textContent = materiales.metales.toFixed(2);
        document.getElementById("resElectronica").textContent = materiales.electrónica.toFixed(2);
    }
});
