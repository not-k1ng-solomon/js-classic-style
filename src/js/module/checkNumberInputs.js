const checkNumberInputs = (selector) => {
    const validationInput = document.querySelectorAll(selector);
    validationInput.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
};

export default checkNumberInputs;