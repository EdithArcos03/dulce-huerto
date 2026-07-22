
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menuBtn.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', isOpen);
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const data = new FormData(this);
  const nombre = data.get('nombre');
  document.getElementById('formMsg').textContent =
    `Gracias, ${nombre}. Tu consulta está lista. Conecta este formulario a tu correo o WhatsApp para recibir mensajes reales.`;
  this.reset();
});
