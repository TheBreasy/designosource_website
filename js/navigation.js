let hamburger = document.querySelector(".hamburger");
let compactMenu = document.querySelector(".menu-wrap-compact nav");
let fullMenubg = document.querySelector(".menu-wrap-full");
let fullMenubgBeta = document.querySelector(".menu-wrap-full-beta");
let compactMenubg = document.querySelector(".menu-wrap-compact");

let scrollOffsetMinimum = 50;

let isOpen = true;

//Toggling the menu open and closed
hamburger.addEventListener("click", function(){
    if(isOpen) {
        hamburger.innerHTML = "close";
        compactMenu.style.visibility = "visible";

        isOpen = false;
    } else {
        hamburger.innerHTML = "menu";
        compactMenu.style.visibility = "hidden";

        isOpen = true;
    }
});

//Adding bgColor to menu when scrolling
window.addEventListener("scroll", function(){
    let scrollOffset = window.scrollY;
    
    if(scrollOffset > scrollOffsetMinimum) {
        fullMenubg.style.backgroundColor = "var(--bgColor)";
        fullMenubgBeta.style.backgroundColor = "var(--bgColor)";
        compactMenubg.style.backgroundColor = "var(--bgColor)";
        return;
    }

    fullMenubg.style.backgroundColor = "transparent";
    fullMenubgBeta.style.backgroundColor = "transparent";
    compactMenubg.style.backgroundColor = "transparent";
});