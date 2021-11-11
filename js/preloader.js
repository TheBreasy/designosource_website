var loader = document.querySelector("#loader");

window.addEventListener("load", function(){
    loader.style.opacity = 0;
        loader.addEventListener("transitionend", function() {
            loader.style.display = "none";
        });
});