const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const elements = ingredients.map(option => {
  const titleEl = document.createElement('li');
  titleEl.classList.add('item');
  titleEl.textContent = option;
  // console.log(titleEl);

  const navEl = document.querySelector('ul');
  console.log(navEl);
  navEl.append(titleEl);
  // return titleEl;
});
