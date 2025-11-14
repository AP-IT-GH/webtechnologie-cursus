const temperatuur = parseFloat(prompt("Geef de temperatuur in:"));
const eenheid = prompt("Is dit in Celsius (C) of Fahrenheit (F)?").trim().toUpperCase();

if (eenheid === "C") {
    const resultaat = (temperatuur * 9 / 5) + 32;
    console.log(`${temperatuur}°C = ${resultaat.toFixed(2)}°F`);
    alert(`${temperatuur}°C = ${resultaat.toFixed(2)}°F`);
}
else if (eenheid === "F") {
    const resultaat = (temperatuur - 32) * 5 / 9;
    console.log(`${temperatuur}°F = ${resultaat.toFixed(2)}°C`);
    alert(`${temperatuur}°F = ${resultaat.toFixed(2)}°C`);
}
else {
    console.error("Ongeldige eenheid! Gebruik 'C' of 'F'.");
    alert("Fout: ongeldig symbool. Gebruik 'C' of 'F'.");
}