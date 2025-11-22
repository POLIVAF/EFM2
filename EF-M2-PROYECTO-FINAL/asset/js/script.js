$(document).ready(function () {

// SMOOTH SCROLL + ANIMATE para enlaces del navbar
$(document).ready(function () {
  $('a.nav-link').on('click', function (event) {
    // Solo para enlaces internos
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top - 70 // ajustar si navbar fijo
      }, 1500, 'swing');
    }
  });
});

  // BLOQUEAR caracteres inválidos en tiempo real
  $("#nombre").on("input", function () {
    // Permitir solo letras y espacios
    this.value = this.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
  });

  $("#telefono").on("input", function () {
    // Permitir solo números y +
    this.value = this.value.replace(/[^0-9\+]/g, '');
  });

  // CLICK en el botón confirmar
  $("#btnConfirmar").on("click", function () {
    let nombre = $("#nombre").val().trim();
    let email = $("#email").val().trim();
    let telefono = $("#telefono").val().trim();
    let entrada = $("#entrada").val();

    // Limpiar alertas previas
    $(".invalid-feedback").remove();
    $("#alertaFormulario").removeClass("alert alert-success alert-danger").addClass("d-none").html("");

    let errores = false;

    // Validación Nombre
    if (!nombre) {
      $("#nombre").after('<div class="invalid-feedback d-block text-danger">Campo obligatorio</div>');
      console.error("❌ Error: Nombre vacío");
      errores = true;
    }

    // Validación Email
    if (!email) {
      $("#email").after('<div class="invalid-feedback d-block text-danger">Campo obligatorio</div>');
      console.error("❌ Error: Email vacío");
      errores = true;
    } else {
      const regexEmail = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;
      if (!regexEmail.test(email)) {
        $("#email").after('<div class="invalid-feedback d-block text-danger">Email inválido</div>');
        console.error("❌ Error: Email inválido");
        errores = true;
      }
    }

    // Validación Teléfono
    if (!telefono) {
      $("#telefono").after('<div class="invalid-feedback d-block text-danger">Campo obligatorio</div>');
      console.error("❌ Error: Teléfono vacío");
      errores = true;
    }

    // Validación Entrada
    if (!entrada) {
      $("#entrada").after('<div class="invalid-feedback d-block text-danger">Debe seleccionar un tipo de entrada</div>');
      console.error("❌ Error: Entrada no seleccionada");
      errores = true;
    }

    if (errores) {
      console.log("❌ Formulario incompleto");
      setTimeout(() => {
        $(".invalid-feedback").fadeOut(500, function() { $(this).remove(); });
      }, 3000);
      return;
    }

    // Si todo es válido
    console.log("✔️ Formulario completado con éxito");
    $("#alertaFormulario")
      .removeClass("d-none alert-danger")
      .addClass("alert alert-success")
      .html("<strong>Reservación exitosa:</strong> Te has inscrito correctamente.")
      .fadeIn();

    setTimeout(() => {
      $("#alertaFormulario").fadeOut(500, function () {
        $(this).addClass("d-none").removeClass("alert alert-success").html("");
      });
    }, 6000);

    // Limpiar formulario
    $("#formRegistro")[0].reset();
  });
});

