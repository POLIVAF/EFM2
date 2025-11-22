// script.js (versión final con Bootstrap + validación + modal de éxito)

window.addEventListener("DOMContentLoaded", () => {
const form = document.getElementById("formContacto"); // ID correcto
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");


form.addEventListener("submit", function (event) {
event.preventDefault(); // Evitar envío real


// Validación simple manual + validación de Bootstrap
if (
nombre.value.trim() === "" ||
email.value.trim() === "" ||
mensaje.value.trim() === ""
) {
form.classList.add("was-validated");
return;
}


// Modal de Bootstrap para éxito
const modal = new bootstrap.Modal(document.getElementById("successModal"));
modal.show();


// Limpiar formulario
form.reset();
form.classList.remove("was-validated");
});
});