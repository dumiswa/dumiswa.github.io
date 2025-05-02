window.addEventListener("load", () => {
    const fade = document.getElementById("page-fade"); 

    if (fade) {
        fade.classList.add("fade-out");

        fade.addEventListener("animationend", () => {
            fade.remove();
        });
    }
});