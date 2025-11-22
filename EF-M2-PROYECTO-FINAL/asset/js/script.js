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

// reloj conteo reguesivo
$(document).ready(function() {

  // FECHA DEL EVENTO
  const eventDate = new Date("2026-02-01T00:00:00").getTime();

  // FUNCION PARA AGREGAR CEROS
  function pad(n) {
    return n < 10 ? "0" + n : n;
  }

  // CREAR EL HTML DE LAS UNIDADES
  function createFlipUnit(id, label) {
    const html = `
      <div class="flip-unit" id="${id}">
        <div class="top front">00</div>
        <div class="bottom back">00</div>
        <span class="unit-label">${label}</span>
      </div>`;
    return html;
  }

  // AGREGAR EL CONTADOR A LA PÁGINA
  const countdownContainer = $("#countdown");
  countdownContainer.html(
    createFlipUnit("days", "Días") +
    createFlipUnit("hours", "Horas") +
    createFlipUnit("minutes", "Minutos") +
    createFlipUnit("seconds", "Segundos")
  );

  // FUNCION QUE ANIMA CADA UNIDAD
  function updateFlipUnit(id, value) {
    const unit = $("#" + id);
    const front = unit.find(".front");
    const back = unit.find(".back");

    if (front.text() !== value) {
      back.text(value);       // poner el nuevo valor en la parte de atrás
      unit.addClass("flip");  // iniciar animación

      setTimeout(() => {
        front.text(value);    // actualizar la parte frontal
        unit.removeClass("flip"); // reiniciar animación
      }, 600); // duración igual al CSS
    }
  }

  $// Fecha objetivo del evento
const eventDate = new Date("2026-02-01T00:00:00").getTime();

// Función para actualizar flip clock
function updateFlipClock() {
  const now = new Date().getTime();
  let distance = eventDate - now;

  if (distance < 0) {
    distance = 0;
    clearInterval(flipInterval);
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  flipNumber("days", days);
  flipNumber("hours", hours);
  flipNumber("minutes", minutes);
  flipNumber("seconds", seconds);
}

// Función para animar flip
function flipNumber(id, value) {
  const cardInner = document.querySelector(`#${id} .flip-card-inner`);
  const front = cardInner.querySelector(".flip-card-front");
  const back = cardInner.querySelector(".flip-card-back");

  if (parseInt(front.textContent) !== value) {
    back.textContent = value;
    cardInner.classList.add("flip");

    setTimeout(() => {
      front.textContent = value;
      cardInner.classList.remove("flip");
    }, 700); // duración de la animación
  }
}

// **Inicia la cuenta atrás al cargar la página**
document.addEventListener("DOMContentLoaded", () => {
  updateFlipClock(); // muestra los valores iniciales
  flipInterval = setInterval(updateFlipClock, 1000); // actualiza cada segundo
});

let flipInterval;
