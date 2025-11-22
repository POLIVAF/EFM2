// Espera a que el documento HTML termine de cargarse
$(document).ready(function () {

  const modalExito = new bootstrap.Modal($('#modalExito'));

  $("#formRegistro").on("submit", function (event) {
    event.preventDefault(); // Detener envío normal

    console.clear();
    console.log("Intentando enviar formulario...");

    // Tomar valores
    let nombre = $("#nombre").val().trim();
    let email = $("#email").val().trim();
    let password = $("#password").val().trim();

    let errores = [];

    // Validación simple
    if (nombre === "") errores.push("Nombre vacío");
    if (email === "") errores.push("Email vacío");
    if (password === "") errores.push("Password vacío");

    // Si hay errores → Mostrar en consola
    if (errores.length > 0) {
      console.warn("⚠ Faltan campos obligatorios:");
      errores.forEach((e) => console.log("❌ " + e));

      // Opcional: alerta visual
      alert("Debe completar todos los campos.");
      return;
    }

    console.log("✔ Formulario válido");
    console.log("Mostrando modal de éxito...");

    modalExito.show(); // Abrir modal
  });

});

