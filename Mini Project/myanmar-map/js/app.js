let currentPlace = document.querySelector(".caption-place");
let path = document.querySelectorAll(".map path");

path.forEach(x=>{
    x.addEventListener("mouseover",_=>{
        currentPlace.innerText = x.getAttribute('title')
    });
});