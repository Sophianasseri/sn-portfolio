import { fetchChallengeData } from "./script.js";
import { darkMode } from "./script.js";

let challenges = []

   const displayChallenges = async () =>  {
    challenges = await fetchChallengeData()

    const  projectElements= document.querySelector('.challenge-container');
    projectElements.innerHTML = challenges
    .map((challenge) => {
      return `
      <a
      href="${challenge.link}"
      >
        <d
        <div class="project">
          <div>
            <img
              class="project-img"
              src="./assets/images/${challenge.preview}"
              alt=""
          </div>
          <h3 class="link navLink cardTitle">${challenge.name}</h3>
        </div>
      </a>
    
        `;
    })
    .join('');
    darkMode()
   
}

displayChallenges()

