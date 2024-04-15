// function myfun() {
//   console.log('muzamil');
// }
// myfun()

// function add(num1,num2){
// return num1+num2;
// }
// console.log(add(5,4));

// function login(name) {
//   if(!name){
//     console.log('please enter a user name');
//   }
//   return `${name} just logged in`
// }
// console.log( login('muzamil'));
// // login(); 
 
// function calculate(val1, val2,...num1){ //(...restOperator)
// return val1+val2+ num1;
// }
// console.log(calculate(2,33,444));

// const user={
//   name:'muzamil',
//   age:22
// }

// function handleObject(anyobj){
//   return `user name is ${anyobj.name} and age is ${anyobj.age} `
// }
// console.log(handleObject(user));

// const aarr=[1,2,3,4,5];
// function getarr(ary){
// console.log(`2nd element of array is ${ary[1]} `);
// }
// getarr(aarr);
//  // or
// getarr([22,33,44,55,66]);

//scope in js

// let a=100;
// if(true){
//   // let a=10;
//   const b=20;
//   var c =30;
//   // console.log(a);
// }
// console.log(b);
// console.log(c);
//  we ca access global scope in block scope but cant acces block scope in global scope

// nested scope
// in this child function can access the parent variable

// function one(){
//   const name='muzamil'

//   function two(){
//     const websitee='youtube'
//     console.log(name);
//     console.log(websitee);
//   }
//   two();
// }
// one();

  // let name='muzamil'
  // if(name==='muzamil'){
  //   const web='youtube'
  //   console.log(web);
  // }
  // console.log(name);



//function decleration

// console.log(addone(5));
// function addone(num){
// return num+1;
// }
// console.log(addone(5));


// //function expression

// console.log(addtwo(5));
// const addtwo=function(num){
//   return num+2;
// }
// console.log(addtwo(5));


//====> Arrow function
//THIS keyword gives  value of the current content
// const user={
//   namee:'muzamil',
//   age:33,
//   welcom:function(){
// console.log(`${this.namee}, welcome to website`);
// console.log(this);
//   }
// }
// user.welcom();
// user.namee='hussain'
// user.welcom();
// console.log(this);


// function chai(){
//   let namee='muzamil'
//   console.log(this.namee);
// }
// chai();

// const chai=function(){
//   let namee='muzamil'
//   console.log(this.namee);
// }
// chai();


// const chai=()=>{
//   let namee='muzamil'
//   console.log(this.namee);
// }
// chai();

// let addtwo=(num1,num2)=>{
// return num1+num2;
// }
// console.log(addtwo(3,4));

//implicit return
// let addtwo=(num1,num2)=> num1+num2
//   console.log(addtwo(3,4));

//===> IIFE (immediately invoked functon expression)

// some times we acces variables from global scope and somtimes cause distractions to remove these distractions we use IIFE

// IIFE syntax

//name iife
// (function chai(){
//   console.log('DB CONNECTED');
// })();
// //  using arrow function
// (()=>{
//   console.log('DB CONNECTED one');
// })();


//simple iife
// ((name)=>{
//   console.log(`DB CONNECTED one ${name}`);
// })('muzamil');