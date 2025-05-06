document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".project-card");
    const panel = document.getElementById("project-panel");
    const backButton = document.getElementById("go-back-btn");
    const title = document.getElementById("project-title");
    const desc = document.getElementById("project-description");


    const projectData = {
        "Project 1": {
            title: "Project 1",
            description: "Description for Project 1",
        },
        "Project 2": {
            title: "Project 2",
            description: "Description for Project 2",
        },
        // Add more projects

    };

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const projectName = card.querySelector("h3").innerText;

            if (projectData[projectName]) {
                title.innerText = projectData[projectName].title;
                desc.innerText = projectData[projectName].description;
            }

            panel.classList.remove("panel-hide");
            panel.classList.add("panel-show");
        });
    });

    backButton.addEventListener("click", () => {
        panel.classList.remove("panel-show");
        panel.classList.add("panel-hide");
    });
});