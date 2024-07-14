
// This is code for image slider in the hero section 

const heroImages = document.querySelectorAll(".hero-images");
const slideButtons = document.querySelectorAll(".slide-button");

slideButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        const direction = button.id==="slide-button-left"?-1:1;
        const scrollAmount = heroImages[0].clientWidth * direction;
        heroImages[0].scrollBy({left:scrollAmount, behaviour : "smooth"});
    });
});

// code for the hidden slidebar in the pannel section
const body = document.querySelector("body");
const bodyDiv = document.querySelector(".body-div");
const slideBar = document.querySelector(".slide-bar");
const pannelAllbtn = document.querySelector(".panel-all");
const cutMark = document.querySelector(".cut-mark");
pannelAllbtn.addEventListener("click",()=>{
    slideBar.style.display = "inline";
    cutMark.style.display = "inline";
    bodyDiv.style.backgroundColor = "black"
});

cutMark.addEventListener("click",()=>{
    slideBar.style.display = "none";
    cutMark.style.display = "none";
})