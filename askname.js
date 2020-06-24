const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  askName = document.querySelector(".js-askname");

const USER_LS = "currentUser",
  SHOWING_CL = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function paintName(text) {
  form.classList.remove(SHOWING_CL);
  askName.classList.add(SHOWING_CL);
  askName.innerText = `Hello ${text}`;
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintName(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CL);
  form.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintName(currentUser);
  }
}

function init() {
  loadName();
}

init();
