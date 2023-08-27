// Slider

const slideSky = ["askyproject.png", "askyproject2.png", "askyproject3.png"];
const slideWivy = ["wivy.png", "wivy2.png", "wivy3.png"];

let number = 0;

function ChangeSlideSky(direction) {
    number = number + direction;
    if (number < 0)
    number = slideSky.length -1;
if (number > slideSky.length -1)
number =0
document.getElementById("slideSky").src = "./assets/images/" + slideSky[number];

}

function ChangeSlideWivy(direction) {
    number = number + direction;
    if (number < 0)
    number = slideWivy.length -1;
if (number > slideWivy.length -1)
number =0
document.getElementById("slideWivy").src = "./assets/images/" + slideWivy[number];

}




// Dark Mode

const body = document.querySelector("body")
const lightImages = document.querySelectorAll(".light")
const darkImages = document.querySelectorAll(".dark")
const neonText =  document.querySelector("#neonText")
const neonElements = document.querySelectorAll(".neonElement")
const neonTextSecondary = document.querySelectorAll(".navLink")


// Change pictures according to color theme and add neon effect on button on dark mode
const switchPictures = () => {
    if (body.getAttribute('data-theme') === 'dark') {

      if (lightImages !== null) {
        lightImages.forEach((image) => {
          image.style.display = "none"
      })
      }
        
        if (darkImages !== null) {
          darkImages.forEach((image) => {
            image.style.display = "block"
        })
        }
       
        if (neonText !== null) {
          neonText.classList.add("neonText")

        }

        if (neonElements !== null) {
          neonElements.forEach((el) => {
            el.classList.add("neon")
        })
        }

        if (neonTextSecondary !== null) {
          neonTextSecondary.forEach((text) => {
            text.classList.add("neonTextSecondary")
        })
        
        }

    } else  {
      if (lightImages !== null) {
        lightImages.forEach((image) => {
          image.style.display = "block"
      })
      }
      if (darkImages !==null) {
        darkImages.forEach((image) => {
          image.style.display = "none"
      })
      }
    if (neonText !== null) {
      neonText.classList.remove("neonText")
      }
      if (neonElements !== null) {
        neonElements.forEach((el) => {
          el.classList.remove("neon")
      })
      }
      if (neonTextSecondary !== null) {
        neonTextSecondary.forEach((text) => {
          text.classList.remove("neonTextSecondary")
      })
      }     
       
    }
}

function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
      return localStorageTheme;
    }
  
    if (systemSettingDark.matches) {
      return "dark";
    }
  
    return "light";
  }
  
  /**
  * Utility function to update the button aria-label.
  */
  function updateButton({ buttonEl, isDark }) {
    const newCta = isDark ? "Changer vers le thème lumineux" : "Changer vers le thème sombre";
    // use an aria-label if you are omitting text on the button
    // and using a sun/moon icon, for example
    buttonEl.setAttribute("aria-label", newCta);
  }
  
  /**
  * Utility function to update the theme setting on the body tag
  */
  function updateThemeOnHtmlEl({ theme }) {
    document.querySelector("body").setAttribute("data-theme", theme);
  }
  
  
  /**
  * On page load:
  */
  
  /**
  * 1. Grab what we need from the DOM and system settings on page load
  */
  const button = document.querySelector("[data-theme-toggle]");
  const localStorageTheme = localStorage.getItem("theme");
  const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
  
  /**
  * 2. Work out the current site settings
  */
  let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });
  
  /**
  * 3. Update the theme setting and button text accoridng to current settings
  */
  updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
  updateThemeOnHtmlEl({ theme: currentThemeSetting });
  
  /**
  * 4. Add an event listener to toggle the theme
  */
  button.addEventListener("click", (event) => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
  
    localStorage.setItem("theme", newTheme);
    updateButton({ buttonEl: button, isDark: newTheme === "dark" });
    updateThemeOnHtmlEl({ theme: newTheme });
  
    currentThemeSetting = newTheme;
    switchPictures()
  }); 

  switchPictures()
