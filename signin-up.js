
const signupLink = document.querySelector(".signup-link");
const signinContainer = document.querySelector(".Signin-container");
const signupContainer = document.querySelector(".signup-container");
signupLink.addEventListener("click",()=>{
    signinContainer.classList.add("hide");
    signupContainer.classList.add("show");
})
const signinLink = document.querySelector(".signin-link");
signinLink.addEventListener("click",()=>{
    signinContainer.classList.remove("hide");
    signupContainer.classList.remove("show");
})
const pwdInput = document.querySelectorAll(".pwd-inpt");
const eyeHide = document.querySelectorAll(".fa-eye-slash");
const eyeShow = document.querySelectorAll(".fa-eye");
//code to show and hide pswd
for(let i=0;i<=2;i++){
    eyeHide[i].addEventListener("click",()=>{
        pwdInput[i].type="text";
        eyeHide[i].style.display = "none";
        eyeShow[i].style.display = "inline";
    })

}
for(let i=0;i<=2;i++){
    eyeShow[i].addEventListener("click",()=>{
        pwdInput[i].type="password";
        eyeHide[i].style.display = "inline";
        eyeShow[i].style.display = "none";
    })

}