import { fetchProjectData } from "./script.js";
import { darkMode } from "./script.js";

const pageId = new URLSearchParams(window.location.search).get('id');


let projects = []

;
// Display project page
const displayProjects= async() => {
  projects = await fetchProjectData()

    const  projectElements= document.querySelector('#project');

    const projectById =projects.find((element) => element.id === parseInt(pageId, 10));

    const goals = [];
    for (let i = 0; i < projectById.goals.length; i += 1) {
      goals.push(
        `  <li>${projectById.goals[i]}</li> `,
      );
    }

    const iconsLight = [];
    for (let i = 0; i < projectById.toolIconsLight.length; i += 1) {
      iconsLight.push(
        `  <img class="light soft-icon" src="./assets/icons/${projectById.toolIconsLight[i]}" alt=""/> `,
      );
    }

    const iconsDark = [];
    for (let i = 0; i < projectById.toolIconsLight.length; i += 1) {
      iconsDark.push(
        `  <img class="dark soft-icon" src="./assets/icons/${projectById.toolIconsDark[i]}" alt=""/> `,
      );
    }
    const toolNames = [];
    for (let i = 0; i < projectById.toolNames.length; i += 1) {
      iconsDark.push(
        `  <p class="soft-text">${projectById.toolNames[i]}</p> `,
      );
    }

    projectElements.innerHTML =
    
       `
       <section>
       <h1 class="title main-title">${projectById.name}</h1>

       <div id="slider" class="slider">
         <div class="previous btn neonElement" onclick="ChangeSlide(-1)">
           <img
             class="light slide-icon slide-icon-rotate"
             src="./assets/icons/chevron.svg"
             alt=""
           />
           <img
             class="dark slide-icon slide-icon-rotate"
             src="./assets/icons/chevrondark.svg"
             alt=""
           />
         </div>
         <img
           src="./assets/images/${projectById.images[0]}"
           alt=""
           id="sliderEl"
           class="slide"
         />
         <div class="next btn neonElement" onclick="ChangeSlide(1)">
           <img
             class="light slide-icon"
             src="./assets/icons/chevron.svg"
             alt=""
           />
           <img
             class="dark slide-icon"
             src="./assets/icons/chevrondark.svg"
             alt=""
           />
         </div>
       </div>
     </section>

     <section class="project-description">
       <p class="project-description-text">
        ${projectById.description}
       </p>
       <div class="separation"></div>
       <div class="description-notes">
         <h2 class="description-title">Objectifs :</h2>
         <ul class="description-goals">
           ${goals.join('')}
         </ul>
         <h2 class="description-title">Réalisé avec :</h2>
         <div class="soft-container">
           <div class="soft">
             ${iconsLight.join('')}
             ${iconsDark.join('')} 
             ${toolNames.join('')}
           </div>
         </div>
       </div>
     </section>
     <section class="project-links">
       <button
         onclick="window.open('${projectById.link}')"
         class="btn main-btn big-btn neonElement"
       >
         Voir le projet
       </button>
       <button
         onclick="window.location.href='./wivyproject.html'"
         class="big-btn btn secondary-btn btn-project neonElement"
       >
         <img
           class="light switch-project-icon nextProject"
           src="assets/icons/arrow.svg"
           alt=""
         />
         <img
           class="dark switch-project-icon nextProject"
           src="assets/icons/arrowdark.svg"
           alt=""
         />
         <span>Projet suivant</span>
       </button>
     </section>
    
        `;
        darkMode()
}

displayProjects()


    // Slider
 
  const  ChangeSlide = async (direction) => {
    projects = await fetchProjectData()
    const projectById =projects.find((element) => element.id === parseInt(pageId, 10));

    const slide = projectById.images;

    const slideEl = document.getElementById("sliderEl")
    
      number = number + direction;
      if (number < 0)
      number = slide.length -1;
    if (number > slide.length -1)
    number =0
    
    
      slideEl.src = "./assets/images/" + slide[number];
    
    }
