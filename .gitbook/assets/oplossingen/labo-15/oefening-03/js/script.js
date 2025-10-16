// Importeer data uit JSON
import todosData from "../assets/json/todos.json" with { type: 'json' };

// Functie om enkel voltooide todos terug te geven
function getCompleted(todos) {
    const completedTodos = [];

    // Loop door elk element in de array
    for (let i=0; i < todos.length; i++) {
    // Controleer of de todo voltooid is en voeg deze toe aan de nieuwe array
        if (todos[i].completed) {
            completedTodos.push(todos[i]);
        }
    }

    return completedTodos;
}

// Roep de functie aan met het ingelezen array van todos
const completedTodos = getCompleted(todosData);

// Schrijf het resultaat naar het scherm
const list = document.getElementById('todos');
for (const todo of completedTodos) {
    const li = document.createElement('li');
    li.textContent = todo.title;
    list.appendChild(li);
}