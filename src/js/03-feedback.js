let throttle = require('lodash.throttle');
// получаем элементы формы
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// получаем текущее состояние формы из хранилища
let state = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

// заполняем поля формы сохраненными значениями
emailInput.value = state.email || '';
messageInput.value = state.message || '';

// функция для сохранения состояния формы в хранилище
const saveStateToLocalStorage = throttle(() => {
  state.email = emailInput.value;
  state.message = messageInput.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
}, 500);

// отслеживаем событие input на полях формы и сохраняем состояние в хранилище
emailInput.addEventListener('input', saveStateToLocalStorage);
messageInput.addEventListener('input', saveStateToLocalStorage);

// отслеживаем событие submit на форме
form.addEventListener('submit', event => {
  event.preventDefault(); // предотвращаем отправку формы
  saveStateToLocalStorage();
  // выводим объект с полями email, message и текущими их значениями в консоль
  console.log({
    email: emailInput.value,
    message: messageInput.value,
  });

  // очищаем хранилище и поля формы
  state = {};
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
});
