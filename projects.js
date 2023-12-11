function fetchProjectData() {
    fetch('./projects.json')
        .then(response => response.json())
        .then(projects => displayProjects(projects))
        .catch(error => console.error('Error fetching data:', error));
}
   function displayProjects(projects) {

    const  projectElements= document.querySelector('.project-container');
    projectElements.innerHTML = projects
    .map((project) => {
      return `
        <div class="project">
          <div>
            <img
              class="project-img"
              src="./assets/images/${project.preview}"
              alt=""
            />
          </div>
          <h2 class="title">${project.name}</h2>
          <button
            class="btn main-btn big-btn project-btn neonElement"
            onclick="window.location.href='./projectPage.html?id=${project.id}.'"
          >
            En savoir plus
          </button>
        </div>
      </section>
    
        `;
    })
    .join('');
   
}


window.addEventListener('load', fetchProjectData);
;

