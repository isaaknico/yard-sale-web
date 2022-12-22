console.log('Hello, world');

const navEmail = document.querySelector('.account__email');
const desktopMenu = document.querySelector('.menu-container');
const menuHamburgerIcon = document.querySelector('.header__menu-icon');
const mobileMenuIconClose = document.querySelector('.mobile-menu__icon-close');
const mobileMenu = document.querySelector('.mobile-menu-container');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamburgerIcon.addEventListener('click', toggleMobileMenu);
mobileMenuIconClose.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    mobileMenu.classList.toggle('inactive');
}