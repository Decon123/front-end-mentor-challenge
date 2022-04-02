const thankCard = document.querySelector("#thank-card");
const formCard = document.querySelector(".card");
const btn = document.querySelector(".btn")
const body = document.body;

body.removeChild(thankCard);

btn.addEventListener("click",(e)=>{
  e.preventDefault();
  body.removeChild(formCard);
  body.appendChild(thankCard);
  
})