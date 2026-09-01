/* =========================
   SCROLL ANIMATION
========================= */

const animatedItems = document.querySelectorAll(
'.documentation-card,.stat-card,.quote-content'
);

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
'show-animation'
);

}

});

},{
threshold:0.15
});

animatedItems.forEach(item=>{
observer.observe(item);
});

/* =========================
   COUNTER ANIMATION
========================= */

const counters =
document.querySelectorAll(".stat-card h3");

counters.forEach(counter=>{

const target =
parseInt(counter.innerText);

if(isNaN(target)) return;

let current = 0;

const update = ()=>{

const increment =
target / 40;

current += increment;

if(current < target){

counter.innerText =
Math.floor(current) + "+";

requestAnimationFrame(update);

}else{

counter.innerText =
target + "+";

}

};

update();

});