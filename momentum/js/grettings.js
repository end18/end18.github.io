const loginForm = document.querySelector("#login-form");
const input = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(event);
    const username = input.value;
    saveUsername(username);
    showGreeting(username);
    console.log(username);    
}

function showGreeting(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function saveUsername(username) {
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
}


if (savedUsername == null) {
    console.log(`savedUsername ${savedUsername}`);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    console.log(`savedUsername ${savedUsername}`);
    showGreeting(savedUsername);
}

loginForm.addEventListener("submit", onLoginSubmit);

