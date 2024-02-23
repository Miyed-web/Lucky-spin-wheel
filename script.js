const wheel = document.querySelector(".wheel");
const inside = document.querySelector(".inside");
const spinBtn = document.querySelector(".spinBtn");

let value1 = Math.ceil(Math.random() * -3600);
let value2 = Math.ceil(Math.random() * 3600);




spinBtn.addEventListener("click",( )=>{
  wheel.style.transform = 
  "rotate("+ value1+"deg)";
  value1 += Math.ceil(Math.random() * -3600);
  inside.style.transform = 
  "rotate("+ value2+"deg)";
  value2 += Math.ceil(Math.random() * 3600);
});


