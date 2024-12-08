document.addEventListener("DOMContentLoaded", () => {
    const projectList = document.getElementById("project-list");
    const filterButtons = document.querySelectorAll(".filter-bar button");

    fetch("data/projects.json")
        .then(response => response.json())
        .then(data => {
            renderProjects(data);

            filterButtons.forEach(button => {
                button.addEventListener("click", () => {
                    const filter = button.dataset.filter;
                    const filteredProjects = data.filter(project =>
                        project.technologies.includes(filter)
                    );
                    renderProjects(filteredProjects);
                });
            });
        });

    function renderProjects(projects) {
        projectList.innerHTML = "";
        projects.forEach(project => {
            projectList.innerHTML += `
                <article class="project">
                    <h2>${project.title}</h2>
                    <p>${project.description}</p>
                    <a href="projects/project${project.id}.html">View Details</a>
                </article>
            `;
        });
    }
});
