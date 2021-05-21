const validationInput = document.querySelector('#validation-input');

const onBlurInput = event => {
    validationInput.classList.add('invalid');
    event.currentTarget.value.length === +validationInput.dataset.length && event.target.value.trim() !== ''
        ? validationInput.classList.replace('invalid', 'valid')
        : validationInput.classList.replace('valid', 'invalid')
};

validationInput.addEventListener('blur', onBlurInput);

