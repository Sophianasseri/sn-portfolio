const pageId = new URLSearchParams(window.location.search).get('id');

/*function fetchProjectData() {
    fetch('./projects.json')
        .then(response => response.json())
        .then(projects => displayProjects(projects))
        .catch(error => console.error('Error fetching data:', error));
}*/

async function fetchProjectData() {
  const reponse = await fetch('./projects.json');
  const projects = await reponse.json();
  return projects
}

let projects = []


window.addEventListener('load', fetchProjectData);
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
         onclick="window.open('https://www.figma.com/proto/N5jnGJBVmLVQTfjOQ1w0mu/Lyric-Book?page-id=0%3A1&type=design&node-id=261-1191&viewport=609%2C408%2C0.07&t=eiQK7HevFvAbvT4E-1&scaling=min-zoom&starting-point-node-id=261%3A1191&mode=design','_blank')"
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

       
}

displayProjects()

    // Slider

    
  const  ChangeSlide = async (direction) => {
    projects = await fetchProjectData()
    console.log(projects);
    const projectById =projects.find((element) => element.id === parseInt(pageId, 10));

    const slide = projectById.images;

    const slideEl = document.getElementById("sliderEl")
    console.log(slideEl);
    
      number = number + direction;
      if (number < 0)
      number = slide.length -1;
    if (number > slide.length -1)
    number =0
    
    
      slideEl.src = "./assets/images/" + slide[number];
    
    }
