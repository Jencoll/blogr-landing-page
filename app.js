const btnBurger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const allItems = document.querySelectorAll('.list');
const chevron = document.querySelectorAll('.chevron-mobile');
const btnSignup = document.querySelector('.connect');
const btnRedTxt = document.querySelector('.red-txt');
const btnWhiteTxt = document.querySelector('.white-txt')

btnBurger.addEventListener('click', () => {
    btnBurger.classList.toggle('active');
    menu.classList.toggle('active-menu');
})

// buttons effects
btnSignup.addEventListener('touchstart', () => {
    btnSignup.style.transform = "scale(0.9)";
    btnSignup.style.transition = "transform 0.25s ease";
})
btnSignup.addEventListener('touchend', () => {
    btnSignup.style.transform = "scale(1)";
})

btnRedTxt.addEventListener('click', () => {
    btnRedTxt.classList.toggle('active-btn');
})

btnWhiteTxt.addEventListener('click', () => {
    btnWhiteTxt.classList.toggle('active-btn');
})

// mobile menu
allItems.forEach(item => {

    item.addEventListener('click', () => {

        item.classList.toggle('active-mobile');

        allItems.forEach(item2 => {
            if (item2 !== item) {
                item2.classList.remove('active-mobile');
            }
        })

        for (i = 0; i < chevron.length; i++) {
          if (chevron[i].getAttribute('data-anim') === item.getAttribute('data-anim')) {
            chevron[i].classList.toggle('active-chevron');
          }
        }
    })
})