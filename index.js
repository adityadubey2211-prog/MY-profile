const type = document.querySelector("#typing");
const text = "Aditya Dubey";
type.textContent = "";
let idx = 0;
function typer(){
    if(idx < text.length){
        type.innerHTML += text.charAt(idx);
        idx++;
        setTimeout(typer, 250);
    }
}
typer();
const stars = document.getElementById("stars");

for(let i=0;i<220;i++){
    const star=document.createElement("div");
    star.classList.add("star");
    star.style.left=Math.random()*100+"%";
    star.style.top=Math.random()*100+"%";
    star.style.animationDelay=Math.random()*3+"s";
    star.style.opacity=Math.random();
    stars.appendChild(star);
}

const launch = document.querySelector(".launch-btn");
const rocket = document.querySelector(".rocket");
const about = document.querySelector("#about");
launch.addEventListener('click', ()=>{
    rocket.classList.add("launch")
})
rocket.addEventListener('animationend', ()=>{
    about.style.display = "block";
    about.scrollIntoView({behavior:"smooth"});
    
});
