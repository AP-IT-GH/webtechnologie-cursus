const messageElement = document.querySelector('#message');

document.addEventListener('mousemove', function(e) {
    // Muiscoördinaten ophalen uit het event
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Positie van de muis weergeven in de tekst
    messageElement.textContent = `Jouw muis bevindt zich op x: ${mouseX}, y: ${mouseY}`;
});