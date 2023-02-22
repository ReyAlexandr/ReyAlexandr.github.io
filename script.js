
var menuBar = document.querySelector('.fa-bars');
var menuX = document.querySelector('.fa-xmark');
var menu = document.querySelector('.menu');
var leagueTitles = document.querySelectorAll('.titles span');
var selectedTitle = document.querySelector('.selected');

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

leagueTitles.forEach(title => {
    title.addEventListener('click', () => {
        if(title.classList.contains('selected')) return;
        title.classList.add('selected');
        selectedTitle.classList.remove('selected');
        selectedTitle = title;
        leagueTitles = document.querySelectorAll('.titles span');
    })
})

