const modals = (state) => {

    var validateFormFlag = true;



    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true, options = false) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            window = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();

        const windowClosed = () => {
            window.forEach(item => {
                item.style.display = 'none';
            });
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
        };

        const owerflowHidden = () =>{
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        };
        trigger.forEach(item => {

            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                if (options === false) {
                    windowClosed();
                    modal.style.display = 'block';
                    owerflowHidden();
                } else {
                    validateForm(state,options);
                    if (validateFormFlag) {
                        windowClosed();
                        modal.style.display = 'block';
                        owerflowHidden();
                    }
                }
            });

        });

        close.addEventListener('click', () => {
            windowClosed();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windowClosed();
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
            owerflowHidden();
        }, time);
    }

    function calcScroll(){
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.append(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;

        div.remove();

        return scrollWidth;
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