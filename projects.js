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
        <div class="project">
          <div>
            <img
              class="project-img"
              src="./assets/images/${project.preview}"
              alt=""
            />
          </div>    
      <h3 class="link cardTitle neonTextSecondary">${project.name}</h3>
          
        </div>
        </a>
    
        `;
    })
    .join('');
    darkMode()
   
}

displayProjects()

