"use strict";

document
    .querySelector('#searchButton')
    .addEventListener('click', searchCocktails);

async function searchCocktails() {
  try {
    const ingredientInput = document.querySelector('#ingredientInput');
    const ingredient = ingredientInput.value;

    const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${ingredient}`;
    const response = await fetch(apiUrl, {
      headers: { "Accept-Encoding": "gzip,deflate,compress" }
    });
    const data = await response.json();

    const cocktailList = document.querySelector('#cocktailList');
    cocktailList.innerHTML = '';

    if (data.drinks) {
      data.drinks.forEach(cocktail => {
        const listItem = document.createElement('li');
        listItem.textContent = `${cocktail.strDrink}`;
        cocktailList.appendChild(listItem);
      });
    } else {
      const listItem = document.createElement('li');
      listItem.textContent = "--> This is not a valid ingredient!";
      cocktailList.appendChild(listItem);
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}