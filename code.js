
// RESPONSIVE NAV

const headHamburguer = document.querySelector(".head__hamburguer");
const headBarMobile = document.querySelector(".head__barMobile");
const body = document.querySelector("body");
const headButtons = document.querySelectorAll(".head__button");

let hide = false;

const visibleClass = "head__barMobile--visible";

//it shows the responsive menu
headHamburguer.addEventListener("click", () =>{
    //This is for remove and add the scroll when we are in the responsive menu
    hideMenu();

    //This helps with the accesibility 
    accesibility(); 

})



//When I push a button I want to hide the menu
const hideMenu = () =>{

    headBarMobile.classList.toggle(visibleClass)

    if(hide == false){
        body.style.overflowY = "hidden";
        body.style.overflowX = "hidden";
        hide = true;
    } else{
        body.style.overflowY = "scroll";
        body.style.overflowX = "scroll";
        hide = false;
    }

    for (headButton of headButtons) {
        headButton.addEventListener("click",()=>{
            headBarMobile.classList.remove(visibleClass);
            body.style.overflowY = "scroll";
        })
    }
}

const accesibility = () =>{
    if(headBarMobile.classList.contains(visibleClass)){
        headHamburguer.setAttribute("aria-label", "Close Menu");
        return;
    }
     headHamburguer.setAttribute("aria-label", "Open Menu");
}


// LETTERS ANIMATION
const animationLetters = (_seconds, _delay ) =>{

    const homeJob = document.querySelector(".home__job");
    const ocupationArray = "software enginner";
    

    homeJob.textContent = '';

    setTimeout(()=>{
        i = 0;
    const interval =   setInterval(()=>{
         if(i<ocupationArray.length){
             homeJob.textContent += ocupationArray[i];
             i++;
             return;
         }
         console.log('finished');
         clearInterval(interval);
         },((_seconds/(ocupationArray.length-1))*1000));
       },_delay*1000)

}

animationLetters(2,0.5);








