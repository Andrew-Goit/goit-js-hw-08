import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onTextInput, 500));

const userForm = {};

function onTextInput(event) {
//   const name = event.target.name;
//   const data = event.target.value;
//   userForm[name] = data;
  userForm[event.target.name] = event.target.value
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userForm));
}

getStorage();

function getStorage() {
  const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  if (!savedData) 
  return;
  if (savedData.email) {
    email.value = savedData.email
  }; 
  if (savedData.message) {
    message.value = savedData.message
  };
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  console.log({'email': email.value,'message': message.value});
  event.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

