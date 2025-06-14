
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
    const ocupationArray = "Ingeniero en sistemas";
    

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



// Get language

const getLanguague = (word)=>{

    let words = [];

    switch (self.location.pathname) {
        
        case "/english.html":
            words[0] = "Visit";
            words[1] = "Download my cv";
            break;
            
            case "/french.html":
                words[0] = "Visite";
                words[1] = "Télécharger mon CV";
                break;
                
                default:
                    words[0] = "Visitar";
                    words[1] = "Descarga mi CV";
                    break;
                
        }

 return words[word];
}

// I created the elements here because i want them to be created at the start of the page
const rocket = document.createElement('img');
rocket.classList = "card__icon";
rocket.src = "rocket.svg";

const download = document.createElement('img');
download.classList = "home__button-CV-icon";
download.src = "download.svg";


//Card Button Animation
const cardButtons = document.querySelectorAll(".cards__button");
const resumeButton = document.querySelector(".home__button-CV");


if(screen.width>=992){
    for (const button of cardButtons) {
        button.addEventListener("mouseenter",()=>{
            button.textContent =" ";
            button.appendChild(rocket);
        })
        
        button.addEventListener("mouseleave",()=>{
            button.innerHTML = getLanguague(0);
            
        })
    }
}

// Resume button animation
resumeButton.addEventListener("mouseenter",()=>{
    resumeButton.textContent ="";
    resumeButton.appendChild(download);
})

resumeButton.addEventListener("mouseleave",()=>{
    resumeButton.innerHTML = getLanguague(1);
    
})



// LOADING SCREEN

window.addEventListener('load',()=>{
    document.querySelector(".loader-container").style.display = "none";
    body.style.overflowY = "scroll";

})















