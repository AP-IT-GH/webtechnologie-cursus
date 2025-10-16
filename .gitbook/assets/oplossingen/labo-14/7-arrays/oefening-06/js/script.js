const list = document.getElementById('pokemon');
const yourTeam = document.getElementById('team');

const pokemon = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Caterpie",
    "Metapod",
    "Butterfree",
    "Weedle",
    "Kakuna",
    "Beedrill",
    "Pidgey",
    "Pidgeotto",
    "Pidgeot",
    "Rattata",
    "Raticate",
    "Spearow",
];

// Maak een array voor het team
let team = [];

// Toon de lijst van pokémon aan de gebruiker
for (let poke of pokemon) {
    const item = document.createElement('li');
    item.textContent = poke
    list.appendChild(item);
}

window.addEventListener('load', function(e){

    // Voeg pokémon toe aan het team met een do-while loop
    let input;
    do {
        input = prompt("Welke Pokémon wil je in je team? [1-21] (Typ 'STOP' om te eindigen):");

        if (input !== null) {
            const index = parseInt(input);

            if (!isNaN(index) && index > 0 && index <= pokemon.length) {
                const chosenPokemon = pokemon[index - 1];

                if (team.includes(chosenPokemon)) {
                    alert(`Deze Pokémon zit al in je team.`);
                } else {
                    team.push(chosenPokemon);
                    alert(`"${chosenPokemon}" is toegevoegd aan je team.`);
                }
            } else if (input.toLowerCase() !== "stop") {
                alert(`Deze Pokémon ken ik niet.`);
            }
        }
    } while (input !== null && input.toLowerCase() !== "stop");

    // Toon het team van de gebruiker
    for (const poke of team) {
        const item = document.createElement('li');
        item.textContent = poke
        yourTeam.appendChild(item);
    }

});
