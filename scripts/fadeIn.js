window.addEventListener("load", () => {
    const fade = document.getElementById("page-fade");
  
    // Trigger the transition
    fade.classList.add("fade-out");
  
    // Remove the element after the transition ends
    fade.addEventListener("transitionend", () => {
      fade.remove();
    });
  });