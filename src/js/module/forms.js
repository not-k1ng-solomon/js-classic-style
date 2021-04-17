import checkNumberInputs from "./checkNumberInputs";

const forms = (state) => {
    const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

    checkNumberInputs('input[name="user_phone"]');

    const message = {
        'loading': 'Загрузка...',
        'success': 'Спасибо! Скоро мы свяжемся',
        'failure': 'Что-то пошло не так...'
    };

    const cleanInputs = () => {
        inputs.forEach(item => {
            item.value = "";
        });
    };

    const cleanForms = () => {
        forms.forEach(item => {
            item.reset();
        });
    };

    const postData = async (url, data) => {
        document.querySelector('.status').innerHTML = message.loading;
        let res = await fetch(url,
            {
                method: 'POST',
                body: data
            });

        return await res.text();
    };

    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement("div");
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === 'end') {
                for(let key in state){
                    formData.append(key,state[key]);
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    document.querySelector('.status').innerHTML = message.success;
                })
                .catch(() => {
                    document.querySelector('.status').innerHTML = message.failure;
                })
                .finally(() => {
                    cleanInputs();
                    setTimeout(() => statusMessage.remove(), 5000);
                });
        });
    });
};

export default forms;