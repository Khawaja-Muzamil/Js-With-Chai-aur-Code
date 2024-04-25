//events run sequently in javaScript

// onclick gives us less features as compared to eventlistner
// document.getElementById("owl").onclick= function(){
//   alert("owl Clicked");
// }

// const owl=document.querySelector("#owl")
// owl.addEventListener(('click'),(e)=>{
//   // alert("OWL Clicke")
// console.log(e);
  
// },false);

// -->Events used
// type, timestamp, defaultPrevented 
//target , toElement , srcElement ,currentTarget
//clientX,clientY,screenX,screenY
//altKey,ctrlkey,shiftkey,keycode

// -->event propagration(means going bottom to top  innerelement to outerelement) or event bubling
// event capturing( it goes from top to bottom , ist outer ele. than inner ele.)

//  --->event bubling
// const images=document.querySelector("#images")
// images.addEventListener(('click'),(e)=>{
//   console.log('click inside the ul');
// },false);
// const owl=document.querySelector("#owl")
// owl.addEventListener(('click'),(e)=>{
//   console.log('owl clicked');
// },false);

// //---> event capturing
// const images=document.querySelector("#images")
// images.addEventListener(('click'),(e)=>{
//   console.log('click inside the ul');
// },true);
// const owl=document.querySelector("#owl")
// owl.addEventListener(('click'),(e)=>{
//   console.log('owl clicked');
// },true);


//----->stopPropagration() used to not allow outer elements to run
// const images=document.querySelector("#images")
// images.addEventListener(('click'),(e)=>{
//   console.log('click inside the ul');
// },false);
// const owl=document.querySelector("#owl")
// owl.addEventListener(('click'),(e)=>{
//   console.log('owl clicked');
//   e.stopPropagation()
// },false);

//--->preventDefault

// document.getElementById("google").addEventListener(('click'),(e)=>{
//   console.log('google clicked');
// e.preventDefault();
// },false)

// project onclick image remove the img

// document.querySelector("#images").addEventListener(('click'),(e)=>{
//   console.log(e.target);
//   console.log(e.target.parentNode);
//   let rmv=e.target.parentNode;
//   rmv.remove();
// })

// //tagNmae
// document.querySelector("#images").addEventListener(('click'),(e)=>{
// //   // console.log(e.target.tagName);
//   if(e.target.tagName==="IMG"){
//     console.log(e.target.id);
//   let rmv=e.target.parentNode;
//   rmv.remove();
//   }
// })
