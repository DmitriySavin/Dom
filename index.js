const refsMainBtn = document.querySelector('.main-btn');
const refsMainText = document.querySelector('.main-text');

refsMainBtn.addEventListener('click', () => {
    refsMainBtn.textContent = refsMainText.textContent;
})


// 

const refsMainImg = document.querySelector('.main-image');
refsMainImg.src = './images/pexels-saizstudio-21701019.jpg';

// 

const refsMainLink = document.querySelector('.main-link');
const refsSecondImg = document.querySelector('.secong-img');

refsMainLink.href = '/images/pexels-saizstudio-21701019.jpg';
refsSecondImg.alt = 'Отличное фото!';

//

const refsListItem = document.querySelector('.list-item');
refsListItem.textContent = 'Abvgd';