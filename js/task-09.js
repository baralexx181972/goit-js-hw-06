const btnChangeColor = document.querySelector('button.change-color');

const colorValue = document.querySelector('span.color');

const bodyColor = document.querySelector('body');
btnChangeColor.addEventListener('click', () => {
  colorValue.textContent = getRandomHexColor();
  bodyColor.style.backgroundColor = colorValue.textContent;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
