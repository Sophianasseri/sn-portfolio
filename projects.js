import { fetchProjectData } from "./script.js";
import { darkMode } from "./script.js";

let projects = []

   const displayProjects = async () =>  {
    projects = await fetchProjectData()

    const  projectElements= document.querySelector('.project-container');
    projectElements.innerHTML = projects
    .map((project) => {
      return `
      <a
      href="./projectPage.html?id=${project.id}"
      >
        <div class="project card">
          <div>
            <img
              class="light project-img"
              src="./assets/images/${project.previewLight}"
              alt=""
            />
            <img
            class="dark project-img"
            src="./assets/images/${project.previewDark}"
            alt=""
          />
          </div>    
      <h3 class="cardTitle">${project.name}</h3>
      <p class="link projectLink neonTextSecondary">En savoir plus</p>
          
        </div>
        </a>
    
        `;
    })
    .join('');
    darkMode()
   
}

displayProjects()

