// =============================
// PORTFOLIO JAVASCRIPT
// =============================

// Active Navigation Link on Scroll

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// =============================
// Smooth Scroll
// =============================

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});


// =============================
// Typing Effect
// =============================

const textArray = [

"Python Developer",

"Machine Learning Enthusiast",

"IoT Developer",

"Electronics Engineer"

];

let textIndex = 0;
let charIndex = 0;

const typingElement = document.querySelector(".home-text h3");

function typeText(){

    if(charIndex < textArray[textIndex].length){

        typingElement.textContent +=
        textArray[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText,100);

    }

    else{

        setTimeout(eraseText,1500);

    }

}

function eraseText(){

    if(charIndex > 0){

        typingElement.textContent =
        textArray[textIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseText,50);

    }

    else{

        textIndex++;

        if(textIndex >= textArray.length){

            textIndex = 0;

        }

        setTimeout(typeText,300);

    }

}

typingElement.textContent="";

typeText();


// =============================
// Reveal Animation
// =============================

const revealElements =
document.querySelectorAll("section,.project,.skill");

function reveal(){

    revealElements.forEach(item=>{

        const windowHeight = window.innerHeight;

        const revealTop =
        item.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();


// =============================
// Back To Top Button
// =============================

const topButton = document.createElement("button");

topButton.innerHTML="↑";

document.body.appendChild(topButton);

topButton.id="topBtn";

topButton.style.position="fixed";
topButton.style.bottom="30px";
topButton.style.right="30px";
topButton.style.width="50px";
topButton.style.height="50px";
topButton.style.borderRadius="50%";
topButton.style.border="none";
topButton.style.fontSize="22px";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.background="#38bdf8";
topButton.style.color="#000";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topButton.style.display="block";

    }

    else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// =============================
// Contact Form Validation
// =============================

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const inputs=form.querySelectorAll("input");

    let valid=true;

    inputs.forEach(input=>{

        if(input.value.trim()==""){

            valid=false;

            input.style.border="2px solid red";

        }

        else{

            input.style.border="none";

        }

    });

    if(valid){

        alert("Thank you! Your message has been sent.");

        form.reset();

    }

});


// =============================
// Dark / Light Mode
// =============================

const modeButton=document.createElement("button");

modeButton.innerHTML="🌙";

document.body.appendChild(modeButton);

modeButton.style.position="fixed";
modeButton.style.left="30px";
modeButton.style.bottom="30px";
modeButton.style.width="50px";
modeButton.style.height="50px";
modeButton.style.borderRadius="50%";
modeButton.style.cursor="pointer";
modeButton.style.border="none";
modeButton.style.fontSize="20px";

let dark=true;

modeButton.onclick=function(){

    if(dark){

        document.body.style.background="#ffffff";
        document.body.style.color="#000";

        modeButton.innerHTML="☀";

        dark=false;

    }

    else{

        document.body.style.background="#0f172a";
        document.body.style.color="#fff";

        modeButton.innerHTML="🌙";

        dark=true;

    }

};


// =============================
// Navbar Background
// =============================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>100){

        header.style.background="#0f172a";

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.4)";

    }

    else{

        header.style.background="#111827";

        header.style.boxShadow="none";

    }

});


// =============================
// Console Message
// =============================

console.log("Portfolio Website Loaded Successfully.");