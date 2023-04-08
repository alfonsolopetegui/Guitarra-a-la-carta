/*** navbar apearance ***/

const navbar = document.querySelector('.nav-container');

window.onscroll = () => {
    if(window.scrollY > 20) {
        navbar.classList.add('nav-active')
    } else {
        navbar.classList.remove('nav-active')
    }
}

/*** burger menu */
const menu = document.querySelector("#menu");
const abrir = document.querySelector("#abrir");
// const cerrar = document.querySelector("#cerrar");

abrir.addEventListener('click', () => {
    menu.classList.add('visible');
})

cerrar.addEventListener('click', ()=> {
    menu.classList.remove('visible');
})