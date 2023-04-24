const wraper = document.querySelector('.wraper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const botonPop = document.querySelector('.botonlogin');
const iconClose= document.querySelector('.icon-close');



registerLink.addEventListener('click', ()=>{
    wraper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wraper.classList.remove('active');
});

botonPop.addEventListener('click', ()=>{
    wraper.classList.add('active-boton');
});

iconClose.addEventListener('click', ()=>{
    wraper.classList.remove('active-boton');
});


