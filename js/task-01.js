const categoriesNum = document.querySelectorAll('h2');
console.log('Number of categories:', categoriesNum.length);

const markupEl = document.querySelectorAll('li.item');
for (let categories of markupEl) {
  console.log('Category:', categories.firstElementChild.textContent);
  console.log('Elements:', categories.lastElementChild.childElementCount);
}
