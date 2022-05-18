let select3 = document.querySelector('.filter2__select-1');
let submenu3 = document.querySelector('.filter2__submenu1');
let arrow3 = document.querySelector('.arrow-3');

select3.onclick = function () {
    submenu3.classList.toggle('open');
    arrow3.classList.toggle('active');
}

