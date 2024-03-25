const form=document.querySelector("form")

// const height=parseInt(document.querySelector('#height').value)
//this  usecase will give empty value.

form.addEventListener(("submit"),(e)=>{
e.preventDefault();
const height=parseInt(document.querySelector('#height').value)
const weight=parseInt(document.querySelector('#weight').value)
const result=document.querySelector('#result')

if(height === '' || height < 0 || isNaN(height) ){
  result.innerHTML=`plese enter a valid height (${height})`;
  result.style.color="red";
}else if(weight === '' || weight < 0 || isNaN(weight) ){
  result.innerHTML=`plese enter a valid weight (${weight})`
  result.style.color="red";
}else{
const bmi =(weight / (height/100*height/100)).toFixed(2);
 result.innerHTML=`<span>${bmi}</span>`;

const underWeight=document.querySelector("#underWeight");
const normalWeight=document.querySelector("#normalWeight");
const overWeight=document.querySelector('#overWeight');

if(bmi < 18.6 ){
  underWeight.style.color="red";
}else if(bmi >= 18.6 && bmi <= 24.9){
  normalWeight.style.color="green"
}else if(bmi >=24.9){
  overWeight.style.color="red";
}
}
});


