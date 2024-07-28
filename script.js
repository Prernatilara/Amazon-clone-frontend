const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
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
    slideBar.classList.add("activate");
    cutMark.style.display = "inline";
    bodyDiv.style.display = "inline";
});
cutMark.addEventListener("click",()=>{
   
    cutMark.style.display = "none";
    bodyDiv.style.display = "none";
    slideBar.classList.remove("activate");
    
})


//back to top code
const backTotop = document.querySelector(".footer-panel1");
backTotop.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior : "smooth"
    });
   
});
// hello sighn in account & list coding
const accList = document.querySelector(".acc-list")
const downArrowacc = document.querySelector(".acc-sort-down");
const triangle =  document.querySelector(".triangle");
const accSignin = document.querySelector(".acc-signin");
const horizBorder = document.querySelector(".acc-signin-border");
const vertiBorder = document.querySelector(".acc-border");
const accyourList = document.querySelector(".acc-yourlist");
const yourAcc = document.querySelector(".your-acc");
const heroMessage = document.querySelector(".hero-message");
const hidnSignBox = document.querySelector(".hidden-signinbox");
accList.addEventListener("click",()=>{
    hidnSignBox.classList.toggle("active");
    bodyDiv.classList.toggle("active-1");
    triangle.classList.toggle("active");
    
});
