const inputEl = document.querySelector('#validation-input');
const inputElDataLength = document.querySelector('#validation-input').getAttribute('data-length');

console.log(inputEl);
console.log(inputElDataLength);

inputEl.addEventListener('blur', ev => {
  inputEl.classList.add('invalid');
  if (ev.currentTarget.value.length === Number.parseInt(inputElDataLength)) {
    inputEl.classList.replace('invalid', 'valid');
  }
});
