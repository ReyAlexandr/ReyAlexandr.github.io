
var menuBar = document.querySelector('.fa-bars');
var menuX = document.querySelector('.fa-xmark');
var menu = document.querySelector('.menu');
var titlesSpan = document.querySelectorAll('.titles span');
var selectedTitle = document.querySelector('.selected');
var matches = document.querySelectorAll('.matches');
var news = document.querySelectorAll('.news');

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


var leagueTitles = document.querySelector('.league-titles');
var titlesContainer = document.querySelector('.titles');
var startX, left;
leagueTitles.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
    left = Number(titlesContainer.style.left.slice(0,-2));
});

leagueTitles.addEventListener('touchmove', (event) => {
    touch = event.touches[0].clientX;
    change = touch - startX + left;
    maxChange = leagueTitles.clientWidth - titlesContainer.clientWidth;
    if (change >= maxChange) {
        if(change <= 2) {
            titlesContainer.style.left = `${change}px`;
        }
    }  
    event.preventDefault();
})

leagueTitles.addEventListener('touchend', (event) => {
    startX = event.changedTouches[0].clientX;
});


titlesSpan.forEach(title => {
    title.addEventListener('click', () => {
        if(title.classList.contains('selected')) return;
        title.classList.add('selected');
        selectedTitle.classList.remove('selected');
        selectedTitle = title;
        titlesSpan = document.querySelectorAll('.titles span');
    })
})

matches.forEach((match, index) => {
    match.addEventListener('click', () => {
        window.location.href = "match.html";
        localStorage.setItem('homeLogo',match.children[0].children[0].src);
        localStorage.setItem('awayLogo',match.children[2].children[0].src);
    })
})

news.forEach((n, i) => {
    n.addEventListener('click', () => {
        window.location.href = "single-news.html";
        localStorage.setItem('thumbnail',n.children[0].children[0].src);
    });
});
