const todoInput = document.querySelector(".todo-input");
const addToDo = document.querySelector(".add-todo");
const todoList = document.querySelector(".to-do-list");
const emptyMsg = document.querySelector(".empty");
const popUp = document.querySelector(".hurrah");
const closePopup = document.querySelector(".close");


// add a to do list item to the list and clear the input field

const addTodoItem = inputTxt => {
    if (inputTxt === "") {
        return;
    }

    todoList.innerHTML += `<li class="to-do-item"><p>${inputTxt}</p><button class="remove">x</button></li>`;
}


// removeToDo - removes the parent of the targeted remove button including contents. Add eventlistener on the remove button.



// toDoAllDone - when all done, give alert




// Events


// Add to do item and remove the 'empty' message

addToDo.addEventListener("click", () => {
    addTodoItem(todoInput.value);
    todoInput.value = "";

    if (todoList.children.length > 0) {
        emptyMsg.hidden = true;
    } 
})


// Strikethrough text when clicking on the to do item, show popup when all to dos are striked through

todoList.addEventListener("click", event => {
    if (event.target.classList.contains('to-do-item')) {
    event.target.classList.toggle("to-do-done");
    }
    if (todoList.children.length === todoList.querySelectorAll(".to-do-done").length) {
        popUp.style.display = 'flex';
}})


// Remove to do item when clicking on a remove button anywhere in the ul, add empty msg when all to do's are removed

todoList.addEventListener("click", event => {
        if (event.target.classList.contains('remove')) {
        event.target.closest('.to-do-item').remove();
    }

    if (todoList.children.length === 0) {
        emptyMsg.hidden = false;
    }
})


// Close popup

closePopup.addEventListener("click", event => {
    popUp.style.display = 'none';
})