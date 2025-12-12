// Contactformulier
const form = document.querySelector('.contact__form');
const submitModal = document.querySelector('.contact__modal');
const modalMessage = document.querySelector('.modal__message');

// --- API: https://raw.githubusercontent.com/JPLectorAP/thank-you-message-api/refs/heads/main/message.json
const endpoint = "https://raw.githubusercontent.com/JPLectorAP/thank-you-message-api/refs/heads/main/message.json";
const getThankyouMessage = async () => {
    const response = await fetch(endpoint);
    const parsedResponse = await response.json();
    const message = parsedResponse.message;
    return message;
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const message = await getThankyouMessage();
    modalMessage.textContent = message;
    submitModal.style.display = "block";
});