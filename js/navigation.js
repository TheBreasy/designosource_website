let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu-wrap nav");

let isOpen = true;

hamburger.addEventListener("click", function(){
    if(isOpen) {
        hamburger.innerHTML = "close";
        menu.style.visibility = "visible";

        isOpen = false;
    } else {
        hamburger.innerHTML = "menu";
        menu.style.visibility = "hidden";

        isOpen = true;
    }
});