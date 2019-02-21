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

// add a to do list item to the list, clear the input field and hide the empty message

const addTodoItem = inputTxt => {
    if (inputTxt === "") {
        return;
    }

    todoList.innerHTML += `<li class="to-do-item">${inputTxt}<button class="remove">x</button></li>`;
}

// add `<li class="to-do-item">${todoInput}<button class="remove">x</button></li>` to ul. Remove placeholder text.

// toDoDone - strikethrough text, add eventlistener on entire list item.

// removeToDo - removes the parent of the targeted remove button including contents. Add eventlistener on the remove button.

// toDoAllDone - when all done, give alert

// toDoAllGone - when all gone, show text 'maybe you should add a to do?'.


// EventListeners

addToDo.addEventListener("click", () => {
    addTodoItem(todoInput.value);
    console.log('here');
})

