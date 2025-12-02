
let slideelement = document.querySelector(".slides");
let slide = document.querySelectorAll(".slide");
let prebtn = document.getElementById("prev");
let nextbtn = document.getElementById("next");
let dotcontainer = document.getElementById("dots");
let index = 0;


function changeslide(){
    slideelement.style.transform = `translatex(${-index*100}%)`;
}

slide.forEach(function(s,d){
    let dot = document.createElement('button');
    dot.className = "dot";
    dot.addEventListener("click",function(){
    changetoslide(d);
    })
    dotcontainer.appendChild(dot);
})

function changetoslide(i){
    index = (i+slide.length)%slide.length;
    changeslide();
}

function goprev(){
    changetoslide(index-1);
}

function gonext(){
    changetoslide(index+1);
}

prebtn.addEventListener("click",function(){
    goprev()
});
nextbtn.addEventListener("click",function(){
    gonext()
});

setInterval(gonext,3000);
// changeslide();

