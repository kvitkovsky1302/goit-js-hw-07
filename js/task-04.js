const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const counterValue = document.querySelector('#value');

const increment = () => {
    return counterValue.textContent = +counterValue.textContent + 1;
};

const decrement = () => {
    return counterValue.textContent = +counterValue.textContent - 1;
};

incrementBtn.addEventListener('click', increment);

decrementBtn.addEventListener('click', decrement);
