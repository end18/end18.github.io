const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
const toDos = [];

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    }
    todoInput.value = "";
    printToDos(newTodoObj);
}

function printToDos(newTodo)
{    
    let newItem = document.createElement("li");
    let newspan = document.createElement("span");
    let delBUtton = document.createElement("button");
    newItem.appendChild(newspan);
    newItem.appendChild(delBUtton);
    delBUtton.innerText = "X";
    delBUtton.style.margin = 2;
    delBUtton.addEventListener( "click", delButton);
    newspan.innerText = newTodo.text + "  ";
    newspan.id = newTodo.id;
    todoList.appendChild(newItem);
    toDos.push(newTodo);
    saveToDos();
}


function saveToDos()
{
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function delButton(event)
{    
    let parent = event.target.parentElement;
    let span = parent.querySelector("span");
    let delID = span.id;
    toDos.splice(toDos.findIndex((item) => item.id == delID),1);
    parent.remove()
    saveToDos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if( savedToDos != null)
{    
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach((item) => {
        printToDos(item);
    });
}