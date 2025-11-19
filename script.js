const menuToggle = document.getElementById("toggleMenu");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("open");
});

const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    });
});

cards.forEach(card => observer.observe(card));

const myImg = document.getElementById("myImg");

 observer.observe(myImg);

