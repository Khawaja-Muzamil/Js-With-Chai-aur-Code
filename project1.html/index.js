const btn=document.querySelectorAll(".button")
const bdy=document.querySelector("body")


btn.forEach((bttn)=>{
bttn.addEventListener(('click'),(e)=>{
if(e.target.id==="gray"){
  bdy.style.background=e.target.id;
}
if(e.target.id==="white"){
  bdy.style.background=e.target.id;
}
if(e.target.id==="blue"){
  bdy.style.background=e.target.id;
}
if(e.target.id==="yellow"){
  bdy.style.background=e.target.id;
}
})
})