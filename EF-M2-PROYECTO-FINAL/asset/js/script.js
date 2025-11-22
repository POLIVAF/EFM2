$(document).ready(function () {

  // CLICK en el botón confirmar del modal
  $("#btnConfirmar").on("click", function () {
    
    let nombre = $("#nombre").val().trim();
    let email = $("#email").val().trim();
    let telefono = $("#telefono").val().trim();
    let errores = [];

    // Expresiones regulares
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;
    const regexTelefono = /^\+?\d{7,15}$/;  // solo números y + opcional

    // Validaciones
    if (!regexNombre.test(nombre)) {
      errores.push("El nombre solo debe contener letras.");
      console.error("❌ Error: nombre inválido");
    }

    if (!regexEmail.test(email)) {
      errores.push("El email debe ser un correo válido.");
      console.error("❌ Error: email inválido");
    }

    if (!regexTelefono.test(telefono)) {
      errores.push("El teléfono debe ser real (solo números y + opcional).");
      console.error("❌ Error: teléfono inválido");
    }

    // Mostrar errores en el DOM
    if (errores.length > 0) {
      $("#alertaFormulario")
        .removeClass("alert-success d-none")
        .addClass("alert-danger")
        .html("<strong>Error:</strong><br>" + errores.join("<br>"));
      return;
    }

    // Si está todo OK
    console.log("✔️ Formulario completado con éxito");

    $("#alertaFormulario")
      .removeClass("alert-danger d-none")
      .addClass("alert-success")
      .html("<strong>Reservación exitosa:</strong> Te has inscrito correctamente.");

  }); // <-- Cierre del click

}); // <-- Cierre del document ready
