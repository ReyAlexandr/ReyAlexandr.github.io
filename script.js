
var menuBar = document.querySelector('.fa-bars');
var menuX = document.querySelector('.fa-xmark');
var menu = document.querySelector('.menu');

menuBar.addEventListener('click', ()=>{
    menuBar.style.display = "none";
    menuX.style.display = "inline-block";
    menu.classList.toggle('menu-open'); 
});

menuX.addEventListener('click', ()=>{
    menuBar.style.display = "inline-block";
    menuX.style.display = "none";
    menu.classList.toggle('menu-open'); 
});
