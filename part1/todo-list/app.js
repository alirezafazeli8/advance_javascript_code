"use strict";
const form = document.getElementById("add-todo-form");
const todoItemContainer = document.getElementById("list-item-container");
const todosTempalte = document.getElementById("item-template");
const addTodoInput = document.getElementById("add-todo-input");
const keyOfTodos = `Todos_List_key`;
const todos = [];
const allTodos = loadTodos(localStorage.getItem(keyOfTodos));

allTodos.forEach((T) => {
    render(T);
});

const filterAllCompleteTodo = allTodos.filter((T) => T.taskDone == true);

filterAllCompleteTodo.forEach((value) => {
    const c = document.querySelector(`[data-id="${value.id}"]`);

    c.children[0].classList.add("bg-success");
    c.querySelector(`input`).checked = true;
});

// add item
form.addEventListener("submit", (e) => {
    // prevenet default buttton
    e.preventDefault();

    // todo input value

    const todoInputValue = addTodoInput.value;

    if (todoInputValue === "") return

    const todosObjectInfo = {
        name: todoInputValue,
        id: new Date().getTime(),
        taskDone: false,
    };

    todos.push(todosObjectInfo);

    // save
    saveTodos(todos);

    render(todosObjectInfo);

    // clear the input
    addTodoInput.value = "";
});

function render(todoValue) {

    const textInput = todosTempalte.content.cloneNode(true);
    const cloneInput = textInput.querySelector("#item-todo-list-input");
    const containerOfTodos = textInput.querySelector(".todo-item");
    cloneInput.innerText = todoValue.name;
    containerOfTodos.dataset.id = todoValue.id;
    // const remveButton = cloneInput
    textInput.querySelector("button").addEventListener("click", (e) => {
        containerOfTodos.remove();

        const newJsonTodos = JSON.parse(localStorage.getItem(keyOfTodos));
        const indexOfTodos = newJsonTodos.findIndex(value => value.id == todoValue.id)

        newJsonTodos.splice(indexOfTodos, 1);
        saveTodos(newJsonTodos)

    });

    compeleteTask(containerOfTodos);
    todoItemContainer.appendChild(textInput);
}

// save item
function saveTodos(sTodos) {
    const convertTodosToString = JSON.stringify(sTodos);
    localStorage.setItem(keyOfTodos, convertTodosToString);
}

// load item
function loadTodos(todosFromStorage) {
    return JSON.parse(todosFromStorage) || [];
}

function compeleteTask(container) {
    const idOfContainer = container.dataset.id
    const mainContainer = container.querySelector(".card")
    const jsonTodos = JSON.parse(localStorage.getItem(keyOfTodos))
    const realJson = jsonTodos.findIndex(item => item.id == idOfContainer)

    container.addEventListener("change", function (e) {
        if (e.target.checked) {
            jsonTodos[realJson].taskDone = true
            mainContainer.classList.add("bg-success")
            saveTodos(jsonTodos)
        }

        if (!e.target.checked) {
            jsonTodos[realJson].taskDone = false
            mainContainer.classList.remove("bg-success")
            saveTodos(jsonTodos)
        }
    });
}
