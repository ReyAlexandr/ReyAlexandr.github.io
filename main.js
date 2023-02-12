const menu = document.querySelector("#menu");
const navLinks = document.querySelector(".navLinks");


let typed = new Typed("#multiText", {
    strings : ["web designer", "youtuber", "programmer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1500
})

menu.addEventListener("click", function() {
    menu.classList.toggle("switch");
    navLinks.classList.toggle("list");
});
