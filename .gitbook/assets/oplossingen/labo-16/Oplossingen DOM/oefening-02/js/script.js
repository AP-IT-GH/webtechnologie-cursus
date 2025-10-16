"use strict"

const myButton = document.querySelector('#myAction');

myButton.addEventListener('click', function (e) {
  const myP = document.querySelector('#myText');
  myP.innerHTML = "Er werd op mij geklikt.";
});