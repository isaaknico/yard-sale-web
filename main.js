console.log('Hello, world');

const navEmail = document.querySelector('.account__email');
const desktopMenu = document.querySelector('.menu-container');

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');
}