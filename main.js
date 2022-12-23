console.log('Hello, world');

const navEmail = document.querySelector('.account__email');
const desktopMenu = document.querySelector('.menu-container');
const menuHamburgerIcon = document.querySelector('.header__menu-icon');
const mobileMenuIconClose = document.querySelector('.mobile-menu__icon-close');
const mobileMenu = document.querySelector('.mobile-menu-container');
const navShopCartIcon = document.querySelector('.account__shopping-cart');
const closeShopCartAsideIcon = document.querySelector('.title__icon');
const shoppingCartAside = document.querySelector('.product-details');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamburgerIcon.addEventListener('click', toggleMobileMenu);
mobileMenuIconClose.addEventListener('click', toggleMobileMenu);
navShopCartIcon.addEventListener('click', toggleShoppingCartAside);
closeShopCartAsideIcon.addEventListener('click', toggleShoppingCartAside);

function toggleDesktopMenu () {
    const isShoppingCartAsideClosed = shoppingCartAside.classList.contains('inactive');

    if (!isShoppingCartAsideClosed) {
        shoppingCartAside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    const isShoppingCartAsideClosed = shoppingCartAside.classList.contains('inactive');

    if (!isShoppingCartAsideClosed) {
        shoppingCartAside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCartAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed || !isDesktopMenuClosed) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    } 
    
    shoppingCartAside.classList.toggle('inactive');
}