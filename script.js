const hamburgerMenu = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav");

hamburgerMenu.addEventListener("click", ()=> { 
    navBar.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
})