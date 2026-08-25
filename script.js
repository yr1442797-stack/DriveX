AOS.init({
duration:1200,
once:true
});

const numbers=document.querySelectorAll(".number");

numbers.forEach(number=>{

let start=0;

let end=number.getAttribute("data-target");

let speed=end/100;

let counter=setInterval(()=>{

start+=speed;

number.innerHTML=Math.floor(start);

if(start>=end){

number.innerHTML=end;

clearInterval(counter);

}

},20);

});


const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function showSlide(n){

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[n].classList.add("active");
    dots[n].classList.add("active");
}

next.addEventListener("click",()=>{

    index++;

    if(index >= slides.length){
        index = 0;
    }

    showSlide(index);

});

prev.addEventListener("click",()=>{

    index--;

    if(index < 0){
        index = slides.length - 1;
    }

    showSlide(index);

});

dots.forEach((dot,i)=>{

    dot.addEventListener("click",()=>{

        index = i;
        showSlide(index);

    });

});

setInterval(()=>{

    index++;

    if(index >= slides.length){
        index = 0;
    }

    showSlide(index);

},3000);
