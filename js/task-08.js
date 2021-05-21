const refs = {
    input: document.querySelector('input'),
    render: document.querySelector('[data-action="render"]'),
    destroy: document.querySelector('[data-action="destroy"]'),
    boxes: document.querySelector('#boxes'),
}
let amount = refs.input.value;

function getRandom(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function createBoxes(amount) {
    const listElements = [];
    let width = '30px';
    let height = '30px';
    for (let i = 0; i < amount; i++) {
        const itemEl = document.createElement('div');
        itemEl.style.backgroundColor = `rgb(${getRandom(255)}, ${getRandom(255)}, ${getRandom(255)})`;
        itemEl.style.width = width;
        itemEl.style.height = height;
        itemEl.style.margin = "10px";
        width = parseInt(width) + 10 + 'px';
        height = parseInt(height) + 10 + 'px';
        listElements.push(itemEl);
    }
    return refs.boxes.append(...listElements);
};

function onClearBoxes() {
    refs.boxes.innerHTML = '';
    refs.input.value = '0';
}

const onListenRange = () => {
    amount = refs.input.value;
    createBoxes(amount);
};

refs.render.addEventListener('click', onListenRange);
refs.destroy.addEventListener('click', onClearBoxes)
