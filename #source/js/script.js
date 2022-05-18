// let arrow = document.querySelectorAll('.arrow');
// for (i = 0; i < arrow.length; i++) {
//     let subMenu = arrow[i].nextElementSibling;
//     let thisArrow = arrow[i];

//     arrow[i].addEventListener('click', function () {
//         subMenu.classList.toggle('open');
//         thisArrow.classList.toggle('active');
//     });
// }
let header__burger = document.querySelector('.header__burger');
let header__button = document.querySelector('.header__button');
let header_menu = document.querySelector('.header__menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.header__list');

header__burger.onclick = function () {
    header__burger.classList.toggle('active');
    header__button.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}

let select = document.querySelector('.header__select');
let submenu = document.querySelector('.submenu');
let arrow = document.querySelector('.arrow');

select.onclick = function () {
    submenu.classList.toggle('open');
    arrow.classList.toggle('active');
}

let cart = document.querySelector('.cart');
let cartWindow = document.querySelector('.cart__window');

cart.onclick = function () {
    cartWindow.classList.toggle('open');
}