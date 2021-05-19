const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const mainListIngredients = document.querySelector('#ingredients');


const listIngredients = ingridients => {
    const listElements = [];
    ingredients.forEach(ingredient => {
        const itemEl = document.createElement('li');
        itemEl.textContent = ingredient;
        listElements.push(itemEl);
    })
    return listElements;
};

mainListIngredients.append(...listIngredients(ingredients));