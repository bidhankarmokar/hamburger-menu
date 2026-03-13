const hamburgerMenu = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav");

hamburgerMenu.addEventListener("click", ()=> { 
    navBar.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
})

// Nav bar hide/show on scroll

const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", ()=> { 
    const currentScroll = window.pageYOffset;
    if(currentScroll <= 0){ 
        body.classList.add("scroll-up");
        return;
    }
    if(currentScroll < lastScroll && body.classList.contains("scroll-down")){ 
        body.classList.add("scroll-up");
        body.classList.remove("scroll-down");
    }
    else if(currentScroll > lastScroll && !body.classList.contains("scroll-down")){ 
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
    }
    lastScroll = currentScroll;
})