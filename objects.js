"use strict"

//object literals
// const obj={
//   name:"muzzamil",
//   "fullName":"kh muzamil",
//   age:22,
//   city:'srinagar',
//   email:'khawjajsj@gmail.com',
// }

// console.log(obj.name);
// console.log(obj['name']);
// console.log(obj.fullName);

//change data
// obj.age=23;
// console.log(obj.age);
//freez the object(can't change the object after freez)
// Object.freeze(obj);

//add function in onject

// obj.myfun=function() {
//   console.log('add func in obj.');
// }
// obj.myfun();

// obj.myfun1=function() {
//   console.log(`add func in obj. , ${this.name}`);
// }
// obj.myfun1();


// --->new way to represent objects

// singleton
// const tinder= new Object(); //singleton object
// console.log(tinder);

// const tinder= {}  //non singleton object
// console.log(tinder);
  
// //non singleton objects

// const tinder= {}
// tinder.id=123
// tinder.name='muzamil'

// console.log(tinder);
// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));
// console.log(tinder.hasOwnProperty('id'));



//objects inside objects


// const ruser={
//   email:'sum@gmail.com',
//   fullName:{
//     userfullNmae:{
//       firstNmae:'muzamil',
//       lastNmae:'hussain'
//     }
//   }
// }
// console.log(ruser.fullName.userfullNmae.firstNmae);


//use spread in objects

// const obj1={
//   1:'a',
//   2:'b'
// }
// const obj2={
//   3:'c',
//   4:'d'
// }

// const objts={...obj1,...obj2};
// console.log(objts);
//or
// const objts=Object.assign({},obj1,obj2)
// console.log(objts);

//object inside arrays
// const users=[
//   {
//     id:1,
//     email:'fghj@gmail.com',
//   },
//   {
//     id:2,
//     email:'dfghj@gmail.com',
//   },{
//     id:3,
//     email:'lkjhj@gmail.com',
//   }
// ]
// console.log(users[1]);

// 21-03-2024


// const course={
//   curseNmae:'js in hindi',
//   price: 999,
//   teacher:'muzamil',
// }
// // const {teacher}=course 
// console.log(course.teacher);

//  Apies
// JSON

// {
//   "name"='muzamil',
//  " course"='fullstack',
//  "prise"='free'
// }