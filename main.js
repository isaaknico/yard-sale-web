console.log('Hello, world');

const navEmail = document.querySelector('.account__email');
const desktopMenu = document.querySelector('.menu-container');
const menuHamburgerIcon = document.querySelector('.header__menu-icon');
const mobileMenuIconClose = document.querySelector('.mobile-menu__icon-close');
const mobileMenu = document.querySelector('.mobile-menu-container');
const navShopCartIcon = document.querySelector('.account__shopping-cart');
const closeShopCartAsideIcon = document.querySelector('.title__icon');
const shoppingCartAside = document.querySelector('.shopping-cart-aside');
const cardsContainer = document.querySelector('.cards-container');
const productDetailAside = document.querySelector('.product-details-aside');
const closeProductDetailAsideIcon = document.querySelector('.product-details__icon-close');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamburgerIcon.addEventListener('click', toggleMobileMenu);
mobileMenuIconClose.addEventListener('click', toggleMobileMenu);
navShopCartIcon.addEventListener('click', toggleShoppingCartAside);
closeShopCartAsideIcon.addEventListener('click', toggleShoppingCartAside);
closeProductDetailAsideIcon.addEventListener('click', closeProductDetailAside); // openProductDetailAside in renderProducts()

function toggleDesktopMenu () {
    const isShoppingCartAsideClosed = shoppingCartAside.classList.contains('inactive');
    const isProductDetailAsideClosed = productDetailAside.classList.contains('inactive');

    if (!isShoppingCartAsideClosed || !isProductDetailAsideClosed) {
        shoppingCartAside.classList.add('inactive');
        productDetailAside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    const isShoppingCartAsideClosed = shoppingCartAside.classList.contains('inactive');
    const isProductDetailAsideClosed = productDetailAside.classList.contains('inactive');

    if (!isShoppingCartAsideClosed || !isProductDetailAsideClosed) {
        shoppingCartAside.classList.add('inactive');
        productDetailAside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCartAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailAsideClosed = productDetailAside.classList.contains('inactive');

    if (!isMobileMenuClosed || !isDesktopMenuClosed || !isProductDetailAsideClosed) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        productDetailAside.classList.add('inactive');
    } 
    
    shoppingCartAside.classList.toggle('inactive');
}

function openProductDetailAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isShoppingCartAsideClosed = shoppingCartAside.classList.contains('inactive');
    const isProductDetailAsideClosed =  productDetailAside.classList.contains('inactive');
    
    if (!isMobileMenuClosed || !isDesktopMenuClosed || !isShoppingCartAsideClosed) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        shoppingCartAside.classList.add('inactive');
    }
    
    if (isProductDetailAsideClosed) {
        productDetailAside.classList.remove('inactive');
    }
}

function closeProductDetailAside () {
    productDetailAside.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 400,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=630&h=375&dpr=0',
});
productList.push({
    name: 'Laptop',
    price: 1200,
    image: 'https://images.pexels.com/photos/12935036/pexels-photo-12935036.png?auto=compress&cs=tinysrgb&w=630&h=375&dpr=0',
});
productList.push({
    name: 'TV',
    price: 99,
    image: 'https://images.pexels.com/photos/8058637/pexels-photo-8058637.jpeg?auto=compress&cs=tinysrgb&w=630&h=375&dpr=0',
});

function renderProducts (arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        const cardImg = document.createElement('img');
        const cardInfo = document.createElement('div');
        const cardInfoText = document.createElement('div');
        const cardPrice = document.createElement('p');
        const cardName = document.createElement('p');
        const cardInfoFigure = document.createElement('figure');
        const cardAddIcon = document.createElement('img');
    
        productCard.classList.add('product-card');
        cardImg.setAttribute('src', product.image);
        cardInfo.classList.add('product-card__info');
        cardPrice.innerText = '$' + product.price;
        cardName.innerText = product.name;
        cardAddIcon.setAttribute('src', './assets/icons/bt_add_to_cart.svg');

        productCard.addEventListener('click', openProductDetailAside);
    
        cardInfoText.append(cardPrice, cardName);
        cardInfoFigure.appendChild(cardAddIcon);
        cardInfo.append(cardInfoText, cardInfoFigure);
        productCard.append(cardImg, cardInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);