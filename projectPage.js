import { fetchProjectData } from "./script.js";
import { darkMode } from "./script.js";

const pageId = new URLSearchParams(window.location.search).get('id');


let projects = []




;
// Display project page
const displayProjects= async() => {
  projects = await fetchProjectData()

    const  projectElements= document.querySelector('#project');

    // Display elements by Id
    const projectById =projects.find((element) => element.id === parseInt(pageId, 10));

    // Loop through array elements
    const goals = [];
    for (let i = 0; i < projectById.goals.length; i += 1) {
      goals.push(
        `  <li>${projectById.goals[i]}</li> `,
      );
    }
    const icons = [];
    for (let i = 0; i < projectById.toolIconsLight.length; i += 1) {
      icons.push(
        `  <div class=" light tool-division"><img class="light soft-icon icon" src="./assets/icons/${projectById.toolIconsLight[i]}" alt=""/></div>`,
      );
    }
    for (let i = 0; i < projectById.toolIconsLight.length; i += 1) {
      icons.push(
        `  <div class="dark tool-division"><img class="dark soft-icon icon" src="./assets/icons/${projectById.toolIconsDark[i]}" alt=""/></div>`,
      );
    }
    const toolNames = [];
    for (let i = 0; i < projectById.toolNames.length; i += 1) {
      toolNames.push(
        `  <div class="tool-division"><p class="soft-text">${projectById.toolNames[i]}</p></div>`,
      );
    }
    const process = [];
    for (let i = 0; i < projectById.process.length; i += 1) {
      process.push(
        `  <li>${projectById.process[i]}</li> `,
      );
    }
    

    // Get next project id page and loop through pages

    let nextPageId = Number(pageId) + 1
    
      if (nextPageId > projects.length) {
          nextPageId = 1  
    
      }

  

    projectElements.innerHTML =
    
       `
       <section>
       <h2 class="title main-title">${projectById.name}</h2>
       <div class="project-page">
       <section class="project-elements">
       <div class="project-image-section card card-page">
         <img
           src="./assets/images/${projectById.images[0]}"
           alt=""
           class="project-image"
         />
       </div>
       <section class="goalsSoft-section">
          <div class="goals-section card card-page">
            <div class="section-title">
            <img
            class="light icon"
            src="./assets/icons/goal.png"
            alt=""
          />
          <img
            class="dark icon"
            src="./assets/icons/goaldark.png"
            alt=""
          />
              <h3>Objectifs :</h3>
              </div>
         <ul class="description-goals">
           ${goals.join('')}
         </ul>
          </div>
          <div class="soft-section card card-page">
            <h3>Réalisé avec :</h3>
            <div class="soft-container">
                <div class="soft">
                  <div class="soft-iconsContainer">
                    ${icons.join('')}
                  </div>
                  <div class="soft-textContainer">
                    ${toolNames.join('')} 
                  </div>    
                </div>
            </div>
        </div>
      </section>  
     </section>
     <section class=" card card-page">
       <p>
        ${projectById.description}
       </p>  
     </section>
     <section class="project-process card card-page">
      <div class="section-title"
        <img
        class="light icon"
         src="./assets/icons/process.png"
         alt=""
        />
        <img
        class="dark icon"
        src="./assets/icons/processdark.png"
        alt=""
        />
        <h3>Processus</h3>
      </div>
     <ul class="description-goals">
     ${process.join('')}
   </ul>
     </section>
     <section class="project-links">
       <button
         onclick="window.open('${projectById.link}')"
         class="btn main-btn big-btn neonElement"
       >
       <img
       class="light see-project-icon"
       src="assets/icons/figmabtn.png"
       alt=""
     />
     <img
       class="dark see-project-icon nextProject"
       src="assets/icons/figmabtndark.png"
       alt=""
     />
        <span>Voir le projet</span>
       </button>
       <button
         onclick="window.location.href='./projectPage.html?id=${nextPageId}'"
         class="big-btn btn secondary-btn btn-project neonElement"
       >
         <img
           class="light switch-project-icon"
           src="assets/icons/arrow.png"
           alt=""
         />
         <img
           class="dark switch-project-icon"
           src="assets/icons/arrowdark.png"
           alt=""
         />
         <span>Projet suivant</span>
       </button>
     </section>
    
        `;

        // Display dark mode to dynamic generated content
        darkMode()
}

displayProjects()
