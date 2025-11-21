let invoer = prompt("Geef een cijfer tussen 0 en 10:");
let cijfer = Number(invoer);
let beoordeling;

if (isNaN(cijfer) || cijfer < 0 || cijfer > 10) {
    beoordeling = "Fout: geef een geldig cijfer tussen 0 en 10.";
} else {
    switch (true) {
        case (cijfer >= 0 && cijfer <= 2):
            beoordeling = "Zeer slecht";
            break;
        case (cijfer >= 3 && cijfer <= 4):
            beoordeling = "Onvoldoende";
            break;
        case (cijfer >= 5 && cijfer <= 6):
            beoordeling = "Voldoende";
            break;
        case (cijfer >= 7 && cijfer <= 8):
            beoordeling = "Goed";
            break;
        case (cijfer >= 9 && cijfer <= 10):
            beoordeling = "Uitstekend";
            break;
    }
}

console.log(beoordeling);
