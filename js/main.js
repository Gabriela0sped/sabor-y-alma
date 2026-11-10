
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

const reservationForm = document.getElementById('reservationForm');
const formMessage = document.getElementById('formMessage');
const dateInput = document.getElementById('date');

// Evita seleccionar fechas anteriores a hoy.
const today = new Date();
const localDate = new Date(
  today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split('T')[0];

dateInput.min = localDate;

reservationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  formMessage.textContent =
    '¡Gracias! Tu solicitud de reserva fue registrada correctamente.';

  reservationForm.reset();
  dateInput.min = localDate;
});
