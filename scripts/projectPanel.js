document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".project-card");
    const panel = document.getElementById("project-panel");
    const backButton = document.getElementById("go-back-btn");
    const title = document.getElementById("project-title");
    const desc = document.getElementById("project-description");


    const projectData = {
    "Project 1": { title: "Project 1", url: "Projects/project1.html" },
    "Project 2": { title: "Project 2", url: "Projects/project2.html" },
    "Project 3": { title: "Project 3", url: "Projects/project3.html" },
    "Project 4": { title: "Project 4", url: "Projects/project4.html" }
    };

    cards.forEach(card => {
        card.addEventListener("click", () => {
        const projectName = card.querySelector("h3").innerText;
        const project = projectData[projectName];

        if (project && project.url) {
            triggerPageTransition(project.url);
        }
        });
    });

  backButton.addEventListener("click", () => {
    panel.classList.remove("panel-show");
    panel.classList.add("panel-hide");
  });
});