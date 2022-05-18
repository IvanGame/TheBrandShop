let select5 = document.querySelector('.cards__select-1');
let submenu5 = document.querySelector('.cards__submenu1');
let arrow5 = document.querySelector('.arrow-5');

select5.onclick = function () {
    submenu5.classList.toggle('open');
    arrow5.classList.toggle('active');
}