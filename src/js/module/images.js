const images = () => {
    const imgPopup = document.createElement('div'),
        workSelection = document.querySelector('.works'),
        imgBox = document.createElement('div'),
        bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    imgBox.classList.add('popup_image_box');
    workSelection.appendChild(imgPopup);

    imgPopup.style.alignItems = 'center';
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(imgBox);
    imgBox.appendChild(bigImage);

    workSelection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if(target && target.classList.contains('preview')){
            imgPopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src',path);
        }

        if(target && target.matches('div.popup')){
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
};

export default images;