const header=document.getElementById("header");
const toggle=document.querySelector(".menu-toggle");
const menu=document.querySelector(".menu");

window.addEventListener("scroll",()=>header.classList.toggle("scrolled",window.scrollY>20));

toggle.addEventListener("click",()=>{
  const open=menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded",open);
});
document.querySelectorAll(".menu a").forEach(a=>a.addEventListener("click",()=>menu.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  const note=document.getElementById("formNote");
  note.textContent="Formulario preparado. Para recibir mensajes tendrás que conectarlo a un servicio de envío o a tu backend.";
  e.target.reset();
});

// WhatsApp flotante
const whatsappNumber = "34665743631"; // Cambia este número por el de SCSI, sin +, espacios ni guiones.
const whatsappMessage = "Hola, me gustaría solicitar información sobre vuestros servicios.";
const whatsappFloat = document.getElementById("whatsappFloat");

if (whatsappFloat) {
  whatsappFloat.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
}
