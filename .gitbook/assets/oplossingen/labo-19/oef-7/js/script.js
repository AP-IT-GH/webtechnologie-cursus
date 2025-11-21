"use strict";

function calculateTotalPrice(prices) {
  return prices.reduce((accumulator, value) => (accumulator += value), 0);
}

const prices = [130, 150, 80, 131, 90, 300, 212];
console.log("De input array:", prices);

const totalPrice = calculateTotalPrice(prices);
console.log("De totale prijs is:", totalPrice);
