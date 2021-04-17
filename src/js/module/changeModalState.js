import checkNumberInputs from "./checkNumberInputs";

const changeModalState = (state) => {
    const windowsForm = document.querySelectorAll('.balcon_icons_img'),
        windowsWidth = document.querySelectorAll('#width'),
        windowsHeight = document.querySelectorAll('#height'),
        windowsType = document.querySelectorAll('#view_type'),
        windowsProfile = document.querySelectorAll('.checkbox');

    checkNumberInputs('#width');
    checkNumberInputs('#height');

    function bindActionToElems(event, element, prop) {
        element.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case "SPAN" : {
                        state[prop] = i;
                        break;
                    }
                    case "INPUT" : {
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
                            element.forEach((box, j) => {
                                box.checked = false;
                                if(i === j){
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    }
                    case "SELECT" : {
                        state[prop] = item.value;
                        break;
                    }
                }
            })
        });
    }

    bindActionToElems('click', windowsForm, 'form');
    bindActionToElems('input', windowsWidth, 'width');
    bindActionToElems('input', windowsHeight, 'height');
    bindActionToElems('change', windowsType, 'type');
    bindActionToElems('change', windowsProfile, 'profile');

};

export default changeModalState;