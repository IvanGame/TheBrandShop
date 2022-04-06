let arrow2 = document.querySelectorAll('.arrow-2');
for (i = 0; i < arrow.length; i++) {
    let subMenu = arrow2[i].nextElementSibling;
    let thisArrow = arrow2[i];

    arrow2[i].addEventListener('click', function () {
        subMenu.classList.toggle('open');
        thisArrow.classList.toggle('active');
    });
}