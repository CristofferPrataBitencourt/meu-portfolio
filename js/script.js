//Animação ao Scroll
const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }    
    });
},{
    threshold:0.2
});

document.querySelectorAll("section, .project-card, .grid-skills img").forEach(el =>{
    el.classList.add("hidden");
    observer.observe(el);
});

//Menu ativo conforme scroll
const sections = document.querySelectorAll("section");
const navLinksMenu = document.querySelectorAll(".navbar a");

const menuObserver = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if (entry.isIntersecting){
            navLinksMenu.forEach(link =>{
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${entry.target.id}`){
                    link.classList.add("active");
                }
            });
        }
    });
}, {
    threshold:0.6
});

sections.forEach(section => menuObserver.observe(section));

const hamburger = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".nav-links");

hamburger.addEventListener("click", () =>{
    navLinksContainer.classList.toggle("active");
});

//Fecha menu ao clicar em link ( mobile)
navLinksMenu.forEach(link =>{
    link.addEventListener("click",() =>{
        navLinksContainer.classList.remove("active");
    });
});