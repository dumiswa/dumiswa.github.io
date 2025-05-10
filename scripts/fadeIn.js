window.addEventListener("load", () => {
  const fade = document.getElementById("page-fade");

  // Only fade on first visit
  const hasVisited = sessionStorage.getItem("hasVisited");

  if (!hasVisited) {
    fade.classList.add("fade-out");
    fade.addEventListener("transitionend", () => {
      fade.remove();
    });
    sessionStorage.setItem("hasVisited", "true");
  } else {
    fade.remove(); 
  }
});
