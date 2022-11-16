const navElement = document.querySelector('.nav');
const bodyElement = document.getElementsByTagName('body')[0];
const hamburgerElement = document.querySelector('.hamburger');

hamburgerElement.addEventListener('click', function() {
    navElement.classList.toggle('nav--mobile');
    bodyElement.classList.toggle('overflow-hidden');
})
