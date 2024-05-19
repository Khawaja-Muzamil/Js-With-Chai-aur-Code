// function outerFunction() {
//   let outerVariable = 'I am outside!';
  
//   function innerFunction() {
//     let innerVariable = 'I am inside!';
//     console.log(outerVariable); // 'I am outside!'
//     console.log(innerVariable); // 'I am inside!'
//   }
  
//   innerFunction();
//   // console.log(outerVariable); // 'I am outside!'
//   // console.log(innerVariable); // Uncaught ReferenceError: innerVariable is not defined
// }

// outerFunction();

// //closure
// function outerFunction() {
//   let outerVar = 'I am outside!';
  
//   function innerFunction() {
//       console.log(outerVar); // Accesses outerVar from outerFunction's scope
//   }
  
//   return innerFunction;
// }

// const myClosure = outerFunction();
// myClosure(); // Logs: "I am outside!"


//html work
// document.getElementById("orange").onclick=function(){
//   document.body.style.backgroundColor='orange'
// }
// document.getElementById("green").onclick=function(){
//   document.body.style.backgroundColor='green'
// }

// function clickhandler(color){
//   // document.body.style.backgroundColor=`${color}`

//   return function(){
//   document.body.style.backgroundColor=`${color}`
//   }
// }
// document.getElementById("orange").onclick=clickhandler('orange')
// document.getElementById("green").onclick=clickhandler('green')
