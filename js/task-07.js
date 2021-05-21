const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}

refs.text.style.fontSize = refs.input.value + 'px';

const onListenRange = event => {
    refs.text.style.fontSize = event.currentTarget.value + 'px';
    console.log('efs.text.style.fontSize', refs.text.style.fontSize)
};

refs.input.addEventListener('input', onListenRange);
