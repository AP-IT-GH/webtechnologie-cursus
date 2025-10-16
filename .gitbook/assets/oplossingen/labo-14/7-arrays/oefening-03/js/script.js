const form = document.getElementById('friends');
const amountFriendsField = document.getElementById('amountFriends');

form.addEventListener('submit', function(e){
    e.preventDefault();

    // Haal het aantal vrienden op uit het inputveld
    const amountFriends = parseInt(amountFriendsField.value);

    // Maak een array voor de vrienden
    const friends = [];

    // Vraag X aantal keer de naam van de vriend en voeg deze toe aan de array
    for (let i=0; i<amountFriends; i++) {
        const friendName = prompt("Geef de naam van vriend " + (i + 1) + ":");
        friends.unshift(friendName); // Voeg de vriend toe aan het begin van de array
    }

    // Toon de vriendenlijst in een ul-element
    const friendsList = document.getElementById("friendsList");
    friendsList.innerHTML = ""; // Leeg de lijst voordat we opnieuw toevoegen

    for (let i=0; i<friends.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = friends[i];
        friendsList.appendChild(listItem);
    }
});