// Replace with the author's real WhatsApp number, in international format, no "+" or spaces.
const WHATSAPP_NUMBER = "15550101234";

const fab = document.getElementById("whatsapp-fab");
const fabMessage = "Assalamu Alaikum, I'm interested in the book Asma-ul-Husna: The 99 Names of Allah and Their Benefits.";
fab.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fabMessage)}`;

const form = document.getElementById("order-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = data.get("name").trim();
  const address = data.get("address").trim();
  const contact = data.get("contact").trim();
  const quantity = data.get("quantity");

  const message =
    `Assalamu Alaikum, I'd like to order the book "Asma-ul-Husna: The 99 Names of Allah and Their Benefits".\n\n` +
    `Name: ${name}\n` +
    `Quantity: ${quantity}\n` +
    `Shipping address: ${address}\n` +
    `Contact: ${contact}`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
});

// Placeholder only — wire this up to a real provider (Mailchimp, ConvertKit, etc.)
// before launch. Right now it doesn't send the email anywhere.
const newsletterForm = document.getElementById("newsletter-form");
const newsletterNote = document.getElementById("newsletter-note");

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  newsletterForm.reset();
  newsletterNote.textContent = "Thanks for subscribing! (Preview only — connect a real email provider before launch.)";
});
