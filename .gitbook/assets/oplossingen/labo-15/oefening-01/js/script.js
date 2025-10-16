const titleField = document.getElementById('title');
const recipeField = document.getElementById('recipe');

// Recept object aanmaken
const spaghetti = {
    name: "Spaghetti Bolognese",
    description: "Een klassiek Italiaans gerecht",
    persons: 4,
    ingredients: [
        { name: "Spaghetti", amount: "400 gram", price: 2.5 },
        { name: "Gehakt", amount: "500 gram", price: 5 },
        { name: "Tomatensaus", amount: "1 blik", price: 3 },
        { name: "Ui", amount: "1 stuk", price: 0.5 }
    ]
};

// Functie om totaalprijs te berekenen
function calculateTotalPrice(recipe) {
    let total = 0;

    // Loop door alle ingredienten
    for (let i=0; i < recipe.ingredients.length; i++) {
        // Voeg de prijs van elk ingrediënt toe aan de totaalprijs
        total += recipe.ingredients[i].price;
    }

    return total;
}

// Print de naam van het gerecht en de totaalprijs van alle ingrediënten
titleField.textContent = spaghetti.name;
recipeField.textContent = "totaalprijs van de ingrediënten: " + calculateTotalPrice(spaghetti).toFixed(2);