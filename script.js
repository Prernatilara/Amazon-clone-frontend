const heroImage = document.querySelector(".hero-images");
const slideButtons = document.querySelectorAll(".slide-button");

slideButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        const direction = button.id==="slide-button-left"?-1:1;
        const scrollAmount = heroImage.clientWidth * direction;
        heroImage.scrollBy({left:scrollAmount,behaviour : "smooth"});
    });
});