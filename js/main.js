const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const con_inner = document.querySelector('.contacts-form');

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open');
    con_inner.classList.toggle('inner-close');
});


