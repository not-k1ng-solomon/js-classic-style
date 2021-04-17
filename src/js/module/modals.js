const modals = (state) => {

    var validateFormFlag = true;

    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true, options = false) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            window = document.querySelectorAll('[data-modal]');

        const windowClosed = () => {
            window.forEach(item => {
                item.style.display = 'none';
            });
        };

        trigger.forEach(item => {

            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                if (options === false) {
                    windowClosed();
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                    // document.body.classList.add('modal-open')
                } else {
                    validateForm(state,options);
                   /* validateFormFlag = true;
                    options.some(item => {
                        if (!(item in state)) {
                            validateFormFlag = false;
                        }
                    });*/
                    if (validateFormFlag) {

                        windowClosed();

                        modal.style.display = 'block';
                        document.body.style.overflow = 'hidden';
                        // document.body.classList.add('modal-open')
                    }
                }
            });

        });

        close.addEventListener('click', () => {
            windowClosed();
            // modal.style.display = 'none';
            document.body.style.overflow = '';
            // document.body.classList.remove('modal-open')
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windowClosed();
                // modal.style.display = 'none';
                document.body.style.overflow = '';
                // document.body.classList.remove('modal-open')
            }
        })
    }

    async function validateForm(state, keys) {
        validateFormFlag = true;
        await keys.some(item => {
            if (!(item in state)) {
                validateFormFlag = false;
            }
        });
    }

    function showModalByTyme(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);

    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    let calc_options1 = ['width', 'height'];
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false, calc_options1);
    let calc_options2 = ['profile'];
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false, calc_options2);
    // showModalByTyme('.popup',60000);
};


export default modals;