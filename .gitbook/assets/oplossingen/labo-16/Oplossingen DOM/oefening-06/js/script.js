"use strict";

const todoList = document.querySelector('#todoList');
const addItemButton = document.querySelector('#addItem');

addItemButton.addEventListener('click', function (e) {
    // Nieuw li-element maken
    const newTodoItem = document.createElement('li');
    newTodoItem.textContent = 'Nieuw to-do item';

    // Nieuw li-element toevoegen aan de lijst
    todoList.appendChild(newTodoItem);
});