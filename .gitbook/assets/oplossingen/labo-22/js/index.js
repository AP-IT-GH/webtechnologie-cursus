// Broodje samenstellen
const cardsBroodje = document.querySelectorAll('.card__broodje');
const cardsSaus = document.querySelectorAll('.card__saus');
const cardsBeleg = document.querySelectorAll('.card__beleg');

let selectedBroodje, selectedSaus, selectedBeleg;

cardsBroodje.forEach(card => {
    card.addEventListener('click', (el) => {
        
        const button = el.target.closest('.card__broodje');
        
        if (button) {
            if (button.classList.contains('active')) {
                button.classList.remove('active');
                selectedBroodje = null;
            } else {
                cardsBroodje.forEach(c => c.classList.remove('active'));
                button.classList.add('active');
                selectedBroodje = button.querySelector('.card__text').textContent.trim();
            }
        }
    });
});

cardsSaus.forEach(card => {
    card.addEventListener('click', (el) => {
        
        const button = el.target.closest('.card__saus');
        
        if (button) {
            if (button.classList.contains('active')) {
                button.classList.remove('active');
                selectedSaus = null;
            } else {
                cardsSaus.forEach(c => c.classList.remove('active'));
                button.classList.add('active');
                selectedSaus = button.querySelector('.card__text').textContent.trim();
            }
        }
    });
});

cardsBeleg.forEach(card => {
    card.addEventListener('click', (el) => {
        
        const button = el.target.closest('.card__beleg');
        
        if (button) {
            if (button.classList.contains('active')) {
                button.classList.remove('active');
                selectedBeleg = null;
            } else {
                cardsBeleg.forEach(c => c.classList.remove('active'));
                button.classList.add('active');
                selectedBeleg = button.querySelector('.card__text').textContent.trim();
            }
        }
    });
});

// Broodje bestellen
const bestelBtn = document.querySelector('.order__btn');
const cookingMessageWaiting = document.querySelector('.cooking__message-waiting');
const cookingMessageDone = document.querySelector('.cooking__message-done');
const spanBroodje = document.querySelector('.cooking__span-broodje');
const spanSaus = document.querySelector('.cooking__span-saus');
const spanBeleg = document.querySelector('.cooking__span-beleg');
const spanTimer = document.querySelector('.cooking__span-timer');

let timerInterval;

bestelBtn.addEventListener('click', () => {
    
    if (timerInterval) clearInterval(timerInterval);

    if (!selectedBroodje || !selectedSaus || !selectedBeleg) {
        cookingMessageDone.style.display = 'none';
        cookingMessageWaiting.style.display = 'flex';
        alert("Maak eerst een keuze van broodje, saus en beleg!");
        return;
    }

    spanBroodje.textContent = selectedBroodje;
    spanSaus.textContent = selectedSaus;
    spanBeleg.textContent = selectedBeleg;

    let timerValue = randomNumber(10, 30);
    spanTimer.textContent = timerValue;

    // Zet display terug naar flex
    cookingMessageDone.style.display = 'flex';
    cookingMessageWaiting.style.display = 'none';

    timerInterval = setInterval(() => {
        timerValue--;
        spanTimer.textContent = timerValue;

        if (timerValue <= 0) {
            clearInterval(timerInterval);
            alert("Je bestelling is klaar om af te halen!");
        }
    }, 1000);
});


// Helper functies
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
