const refs = {
    input: document.querySelector('#name-input'),
    nameLable: document.querySelector('#name-output'),
}

const onInputEntering = event => {
    refs.nameLable.textContent =
        event.currentTarget.value === ''
            ? 'незнакомец'
            : event.currentTarget.value;
};

refs.input.addEventListener('input', onInputEntering);
