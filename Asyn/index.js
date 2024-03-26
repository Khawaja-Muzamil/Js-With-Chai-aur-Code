//==> set timeout
// setTimeout(() => {
//   console.log('Muzamil');
// },1000);

//or
// const fun=()=>{
//   console.log('muzamil');
// }
// setTimeout(fun,1000);

// const fun1=()=>{
//   document.querySelector("h1").innerHTML="Muzamil"
// }
// const changetext=setTimeout(fun1,2000);

// document.querySelector("#stop").addEventListener(('click'),(e)=>{
// clearTimeout(changetext)
// })


//==> set interval
// const saydate=() => {
  // console.log('muzamil');
// }
// const intervalid=setInterval(saydate,1000);
// document.querySelector("#stop").addEventListener(('click'),(e)=>{
// clearInterval(intervalid)
// })
// document.querySelector("#start").addEventListener(('click'),(e)=>{
// setInterval(saydate,1000);
// })


const randomcolor=()=>{
  const hex="0123456789abcdef";
  let color="#"
  for(i=0;i<6;i++){
    color += hex[Math.floor(Math.random()*16)];
  }
  return color;
}
// console.log(randomcolor());
let intervalId;
const startchangingcolor=function(){
  if(!intervalId){
   intervalId=setInterval(changebgcolor,1000);
  }
    function changebgcolor(){
      document.body.style.backgroundColor=randomcolor();
    }

}
const stopchangingcolor=function(){
clearInterval(intervalId);
intervalId=null;

}
document.querySelector("#start").addEventListener('click',startchangingcolor);
document.querySelector("#stop").addEventListener('click',stopchangingcolor);