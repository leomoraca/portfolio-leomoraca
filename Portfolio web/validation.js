
const submitButton = document.querySelector(".contact__submit");
const contactValidation= document.querySelector(".contact__validation");
const contactTime = document.querySelector(".contact__time");

let emailSent = false;

const initialTime = 60;
let time = initialTime;


const saveLocalStorage = (name,data)=>{localStorage.setItem(name,data);}

const readLocalStorage = (name)=>{ return localStorage.getItem(name);}



const decreaseTime = () =>{
    const interval = setInterval(()=>{
        time--;
        saveLocalStorage("time",time);
        contactTime.textContent = `${time}s`;
        console.log(time);

        if(time <= 0){
            clearInterval(interval);
            console.log('es cero');
            emailSent = false;
            saveLocalStorage("emailSent",emailSent);
            time = initialTime;
            saveLocalStorage("time",time);
            contactValidation.classList.remove("contact__validation--visible");
        }
    },1000);
}


emailSent = readLocalStorage("emailSent");
if(emailSent==="true"){
    time = readLocalStorage('time');
    decreaseTime();
}

let push = false;
submitButton.addEventListener("click",(e)=>{

    emailSent = readLocalStorage("emailSent");
    console.log(emailSent);

    if(emailSent == "true"){
      e.preventDefault();
    }
   
    if(emailSent === "true" && !push){
        push = true;
        contactValidation.classList.add("contact__validation--visible");
        if(time == initialTime){
        decreaseTime();
        }

    } else if(emailSent == "false" || emailSent == null){
        contactValidation.classList.remove("contact__validation--visible");
        push = false;
        emailSent = true;
        saveLocalStorage("emailSent",emailSent);

    }
})








