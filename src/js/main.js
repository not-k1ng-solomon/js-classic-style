import './slider';
import modals from "./module/modals";
import tabs from "./module/tabs";
import forms from "./module/forms";
import changeModalState from "./module/changeModalState";
import timer from "./module/timer";
import images from "./module/images";

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let modalState = {};
    let deadline = '2021-04-23';
    changeModalState(modalState);
    modals(modalState);
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState);
    timer('.container1', deadline);
    images();
});