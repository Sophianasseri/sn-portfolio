//Fade Out Effect



function fadeOut () {
    document.getElementById("hero").classList.add("fadeOut");
    setTimeout(() => {
        window.location.href='./projects.html'
    }, 450)
    
}

document.getElementById("slideInBtn").addEventListener("click",fadeOut)