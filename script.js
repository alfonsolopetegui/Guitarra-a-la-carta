const navbar = document.querySelector('.nav');

window.onscroll = () => {
    if(window.scrollY > 20) {
        navbar.classList.add('nav-active')
    } else {
        navbar.classList.remove('nav-active')
    }
}


const menu = document.querySelector(".menu");
const abrir = document.querySelector(".abrir-menu");
const cerrar = document.querySelector(".cerrar-menu");

abrir.addEventListener('click', () => {
    menu.classList.add('visible');
})

cerrar.addEventListener('click', ()=> {
    menu.classList.remove('visible');
})