const btnBurger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const allItems = document.querySelectorAll('.menu-items');
const chevron = document.querySelector('.chevron-mobile');

btnBurger.addEventListener('click', () => {
    btnBurger.classList.toggle('active');
    menu.classList.toggle('active-menu');
})

allItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active-mobile');
    })
})