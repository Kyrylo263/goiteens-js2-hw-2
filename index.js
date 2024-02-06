// 1.

const sliderInput = document.querySelector('.slider__input');
const sliderImage = document.querySelector('.slider__image');

sliderInput.addEventListener('input', _.debounce(changeSizeImage, 500));

function changeSizeImage(event) {
    const value = event.target.value;
    const newSize = value * 3;
    sliderImage.style.width = newSize + 'px';
    sliderImage.style.height = newSize + 'px';
};

// 2.

