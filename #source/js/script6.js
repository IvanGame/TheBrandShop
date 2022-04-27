let select4 = document.querySelector('.filter2__select-2');
let submenu4 = document.querySelector('.filter2__submenu2');
let arrow4 = document.querySelector('.arrow-4');

select4.onclick = function () {
    submenu4.classList.toggle('open');
    arrow4.classList.toggle('active');
}