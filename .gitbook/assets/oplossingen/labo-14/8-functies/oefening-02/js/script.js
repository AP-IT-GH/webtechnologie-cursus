// Definieer de functie nameFromEmail met een email parameter
function nameFromEmail(email) {
    // Vind de index van "@" in de email
    const atIndex = email.indexOf("@");

    // Neem het gedeelte voor "@"
    let name = email.substring(0, atIndex);

    // Vervang het punt door een spatie
    name  = name.replace(".", " ");
    
    // Geef de naam terug in hoofdletters
    return name.toUpperCase();
}

// Vraag de gebruiker om hun email totdat ze een lege string invoeren
let email;
do {
    email = prompt("Geef uw email:");

    if (email !== null && email !== "") {
        const fullName = nameFromEmail(email);
        console.log(`De eigenaar van ${email} heet ${fullName}`);
    }
} while (email !== null && email !== "");