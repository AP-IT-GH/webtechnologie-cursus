"use strict";

const myButton = document.querySelector('#myAction');

myButton.addEventListener('click', function (e) {
  console.log("Er werd op mij geklikt.")
});

// Alternatief met arrow function
// myButton.addEventListener('click',  () => {
//   console.log("Er werd op mij geklikt.")
// });