const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');
// console.log(decrementBtn);
// console.log(incrementBtn);
// console.log(valueEl);

decrementBtn.addEventListener('click', function () {
  counterValue.decrement();
  console.log(counterValue);

  valueEl.textContent = counterValue.value;
});
incrementBtn.addEventListener('click', function () {
  counterValue.increment();
  console.log(counterValue);

  valueEl.textContent = counterValue.value;
});
