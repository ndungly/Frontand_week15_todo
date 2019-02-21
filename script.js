const todoInput = document.querySelector(".todo-input");
const addToDo = document.querySelector(".add-todo");
const removeToDo = document.querySelector(".remove");
const todoList = document.querySelector(".to-do-list");
const todoListItem = document.querySelector(".to-do-item");
const emptyMsg = document.querySelector(".empty");

/*
const toDoDone
const toDoAllDone
*/

console.dir(document.querySelector(".todo-input"));

// add a to do list item to the list and clear the input field

const addTodoItem = inputTxt => {
    if (inputTxt === "") {
        return;
    }

    todoList.innerHTML += `<li class="to-do-item">${inputTxt}<button class="remove">x</button></li>`;
}


// toDoDone - strikethrough text, add eventlistener on entire list item.

// removeToDo - removes the parent of the targeted remove button including contents. Add eventlistener on the remove button.

// toDoAllDone - when all done, give alert

// toDoAllGone - when all gone, show text 'maybe you should add a to do?'.




// Events


// Add to do item and remove the 'empty' message

addToDo.addEventListener("click", () => {
    addTodoItem(todoInput.value);
    todoInput.value = "";

    if (todoList.children.length > 0) {
        document.querySelector(".empty").hidden = true;
    } else {
        document.querySelector(".empty").hidden = false;
    }
})


// Strikethrough text when clicking on the to do item

todoList.addEventListener("click", event => {
    if (event.target.classList.contains('to-do-item')) {
    event.target.classList.toggle("to-do-done");
}})


