// let arrow2 = document.querySelectorAll('.arrow-2');
// for (i = 0; i < arrow.length; i++) {
//     let subMenu = arrow2[i].nextElementSibling;
//     let thisArrow = arrow2[i];

//     arrow2[i].addEventListener('click', function () {
//         subMenu.classList.toggle('open');
//         thisArrow.classList.toggle('active');
//     });
// }

let select2 = document.querySelector('.header__select-2');
let submenu2 = document.querySelector('.submenu-2');
let arrow2 = document.querySelector('.arrow-2');

select2.onclick = function () {
    submenu2.classList.toggle('open');
    arrow2.classList.toggle('active');
}

$(document).ready(function () {
    $('.slider').slick({

    });
});