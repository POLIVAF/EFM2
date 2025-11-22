$(document).ready(function () {

  // ==========================
  // SMOOTH SCROLL NAVBAR
  // ==========================
  $('a.nav-link').on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top - 70
      }, 1500, 'swing');
    }
  });

  // ==========================
  // BLOQUEAR CARACTERES INVALIDOS
  // ==========================
  $("#nombre").on("input", function () {
    this.value = this.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
  });

  $("#telefono").on("input", function () {
    this.value = this.value.replace(/[^0-9\+]/g, '');
  });

  // ==========================
  // VALIDACIÓN FORMULARIO
  // ==========================
  $("#btnConfirmar").on("click", function () {
    let nombre = $("#nombre").val().trim();
    let email = $("#email").val().trim();
    let telefono = $("#telefono").val().trim();
    let entrada = $("#entrada").val();

    $(".invalid-feedback").remove();
    $("#alertaFormulario").removeClass("alert alert-success alert-danger").addClass("d-none").html("");

    let errores = false;

    if (!nombre) {
      $("#nombre").after('<div class="invalid-feedback d-block text-danger">Campo obligatorio</div>');
      errores = true;
    }

    if (!email) {
      $("#email").after('<div class="invalid-feedback d-block text-danger">Campo obligatorio</div>');
      errores = true;
    } else {
      const regexEmail = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;
      if (!regexEmail.test(email)) {
        $("#email").after('<div class="invalid-feedback d-block text-danger">Email inválido</div>');
        errores = true;
      }
    }

    if (!telefono) {
      $("#telefono").after('<div class="invalid-feedback d-block text-danger">Campo obligatorio</div>');
      errores = true;
    }

    if (!entrada) {
      $("#entrada").after('<div class="invalid-feedback d-block text-danger">Debe seleccionar un tipo de entrada</div>');
      errores = true;
    }

    if (errores) {
      setTimeout(() => {
        $(".invalid-feedback").fadeOut(500, function() { $(this).remove(); });
      }, 3000);
      return;
    }

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

    $("#formRegistro")[0].reset();
  });

  // ==========================
  // FLIP CLOCK
  // ==========================
  const eventDate = new Date("2026-02-01T00:00:00").getTime();
  let flipInterval;

  function pad(n) { return n < 10 ? "0" + n : n; }

  function createFlipUnit(id, label) {
    return `
      <div class="flip-unit" id="${id}">
        <div class="flip-card-inner">
          <div class="flip-card-front">00</div>
          <div class="flip-card-back">00</div>
        </div>
        <span class="unit-label">${label}</span>
      </div>`;
  }

  const countdownContainer = $("#countdown");
  countdownContainer.html(
    createFlipUnit("days", "Días") +
    createFlipUnit("hours", "Horas") +
    createFlipUnit("minutes", "Minutos") +
    createFlipUnit("seconds", "Segundos")
  );

  function flipNumber(id, value) {
    const unit = document.querySelector(`#${id} .flip-card-inner`);
    const front = unit.querySelector(".flip-card-front");
    const back = unit.querySelector(".flip-card-back");

    if (parseInt(front.textContent) !== value) {
      back.textContent = pad(value);
      unit.classList.add("flip");
      setTimeout(() => {
        front.textContent = pad(value);
        unit.classList.remove("flip");
      }, 700);
    }
  }

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

  updateFlipClock(); // inicio inmediato
  flipInterval = setInterval(updateFlipClock, 1000);

});
