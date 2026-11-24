
//   ========================================
//       WORKING OF HEADER 
// ==========================================
const about=document.getElementById("about");

about.addEventListener("click",function(){
    document.querySelector(".page2").scrollIntoView({
        behavior: "smooth"
    })
})

const skillshai=document.querySelector("#skills1");
skillshai.addEventListener("click",function(){
    console.log("skills ");
    document.querySelector(".page").scrollIntoView({
        behavior:"smooth" 

    })
});


const contact=document.querySelector("#contact");
contact.addEventListener("click",function(){
    document.querySelector(".lastsec").scrollIntoView({
        behavior:"smooth"
    })
})

const home=document.querySelector("#home");
 home.addEventListener("click",function(){
    document.querySelector(".mainpage").scrollIntoView({
    behavior:"smooth"
    })
 })
const formbana=document.querySelector("#form-tofill");
formbana.addEventListener("click",function(){
      document.querySelector("form").style.display="block";
    document.querySelector("form").scrollIntoView({
   behavior:"smooth"
    })
})

//  ================================
//          THEME CHANGER
//==================================
const namehai=document.querySelector("#name");
const body=document.querySelector("body");


namehai.addEventListener("click",function(){
   body.classList.toggle("bg");
})
    //   ==============================
    //     SCROLLER animation  
    // ================================


const revealElements = document.querySelectorAll(
    ".page2, .page, .lastpage, .lastsec"
);


const observer=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{   //entries=[target value(lastsec,lastpage...) true || false of intersecting]
  if(entry.isIntersecting){
    entry.target.classList.add("show");
  }
  })
  
},{
    threshold:0.2,
})
revealElements.forEach((data)=>{
     data.classList.add("reveal");
     observer.observe(data);
})

// ==========================================
//             typing Animation
// ==========================================


const words = ["HI I'am" ,"DSA SOLVER","BORN TO SHINE"];
const typing1= document.querySelector(".typing");


let wordindex=0;
let charindex=0;
let isdeleting=false;
function  typeANIMATION(){
    if(!typing1){
        return ;
    }
const currentword=words[wordindex];

if(!isdeleting){
    charindex++;
}
if(isdeleting){
    charindex--;
}
  let speed=isdeleting?50:100;
typing1.textContent=currentword.substring(0,charindex) || "\u200B";
if(!isdeleting && charindex== currentword.length ){
    isdeleting=true;
     speed=2000;
}
if(isdeleting &&  charindex==0){
    isdeleting=false;
    wordindex=(wordindex+1)%words.length;
    

}
setTimeout(typeANIMATION,speed);
}

typeANIMATION();


// ======================================================
//         FORM  VALIDATION
//=======================================================



const form = document.querySelector("form");
const submitBtn=document.querySelector("#btnsub")
const yourName = document.querySelector("#yourname");
const yourNumber = document.querySelector("#yournumber");
const yourEmail = document.querySelector("#youremail");
const profession = document.querySelector("#dev");
const feedback = document.querySelector("#feedback");

const closeButton = document.querySelector("#btnclose");

// Form submit and validation
form.addEventListener("submit",function(dets){
    
    dets.preventDefault();
    if(feedback.value.trim().length<10){
         feedback.setCustomValidity("feedback must contain 10 letters");

    }else{
          feedback.setCustomValidity("");
    }
    if(!form.checkValidity()){
        form.reportValidity();
        return ;
    }
   
        submitBtn.textContent="SUBMITTTED";
       

 
  submitBtn.textContent = "SUBMITTTED";
  const formdata=Object.fromEntries(new FormData(form));
    let users=JSON.parse(localStorage.getItem("users")) || [];
    users.push(formdata);
    localStorage.setItem("users", JSON.stringify(users));
       alert("form succesfully submitted");
    form.reset();

})
   



// Close form
closeButton.addEventListener("click", function (event) {
     event.preventDefault();

    form.style.display = "none";

    document.querySelector(".mainpage").scrollIntoView({
        behavior:"smooth"
    })
});

//=======================================
//        PROGRESS BAR 
//=======================================



const progressbar=document.querySelectorAll(".progressbar");

 
const viewer=new IntersectionObserver((elements)=>{
// console.log("entries",elements);

    elements.forEach((element)=>{
const fill=element.target.querySelector(".fill");
    
    if(element.isIntersecting){
        const width=fill.dataset.width;
        fill.style.width=width+"%";
      
    }else if(!element.isIntersecting){
        fill.style.width=0+"%";
    
    }

    })
},{
    threshold:0.2
})

progressbar.forEach((entry)=>{
    viewer.observe(entry);
})


// ==========================================================
//    form submission in local Storage
// ===========================================================

