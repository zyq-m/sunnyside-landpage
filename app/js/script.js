const hamburgerMenu = document.querySelector('.hamburgermenu');
const menu = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', () => {

    if (menu.classList.contains('open')) { // close menu
        menu.classList.remove('open');        
        menu.classList.remove('fade-in');
    } else { // open menu
        menu.classList.add('open');
        menu.classList.add('fade-in');
    }
});