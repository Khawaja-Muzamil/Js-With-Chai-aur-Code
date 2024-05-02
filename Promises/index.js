// API IS intermediater (help to communicate )

// api.github
// randomuser.me  
// jason formattor.

// Fetching data using https.

// const requestUrl='https://api.github.com/users/hiteshchoudhary'
// const xhr= new XMLHttpRequest();
// xhr.open('GET',requestUrl)
// xhr.onreadystatechange=function(){
//// console.log(xhr.readyState);
//   if(xhr.readyState === 4){
//     const data= JSON.parse(this.responseText);
//     console.log(typeof data);
//     console.log(data.followers);
//   }
// }
//  xhr.send();

// ---> promise. ;.

// Example asynchronous function that returns a promise.

// function fetchData() {
//   return new Promise((resolve, reject) => {
// // Simulating asynchronous operation (e.g., fetching data from a server)
//       setTimeout(() => {
//           const data = Math.random() * 1;
//           if (data >0.5) {
//               resolve('Data fetched successfully');
// // Resolve the promise with the fetched data.
//           } else {
//               reject(new Error('Failed to fetch data'));
//                // Reject the promise with an error
//           }
//       }, 1000); // Simulating a delay of 1 seconds
  
// });
// }

// // // Using the promise

// fetchData()
//   .then((result) => {
//       console.log('Success:', result); // Handle success
//   })
//   .catch((error) => {
//       console.error('Error:', error); // Handle error
//   });


// three states
// pending 
// fullfilled
// rejected

// const promise1=new Promise((resolve,reject)=>{
// // //   //do an async task like database call , cryptography ,network call.

//   setTimeout(() => {
//     console.log('Aysnc task is complete');
//     resolve();
//   }, 1000);
// }); 
// promise1
// .then(()=>{
//   console.log('promise consumed');
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('making promise');
//     resolve();
//   }, 1000);
// }).then(()=>{
//   console.log('promise completd');
// })


// const promise3=new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       usernamr:'muzamil',
//       email:"abc@fff.com",
//     })
//   }, 1000);
// })

// promise3
// .then((user)=>{
// console.log(user);
// })

// const promise4=new Promise((resolve, reject) => {
//   setTimeout(() => {
//    let error=true;
//    if(!error){
//     resolve({username:'muzamil',password:'q34567'})
//    }else{
//     reject('something went wrong');
//    }
//   }, 1000);
// });
// promise4
// .then((user)=>{
//   console.log(user);
//   return user.username;
// })
// .then((uername)=>{
//   console.log(uername);
// })
// .catch((error)=>{
//   console.log(error);
// })
// .finally(()=>{
//   console.log('the promise is either resolved or rejected');
// })

// const promise5=new Promise((resolve, reject) => {
//     setTimeout(() => {
//    let error=false;
//    if(!error){
//     resolve({username:'javascript',password:'q34567'})
//    }else{
//     reject('JS went wrong');
//    }
//   }, 1000);
// });
// // async function consumepromise5(){
// //   const response=await promise5;
// //   console.log(response.username);
// // }
// // consumepromise5()
//  //or
// async function consumepromise5(){
//     try {
//       const response=await promise5
//       console.log(response.username);
//     } catch (error) {
//       console.log(error);
//     }
// }
// consumepromise5();

//fetch

// async function getallusers(){
//   try{
//   const response= await fetch('https://jsonplaceholder.typicode.com/users')
//   const data= await response.json()
//   console.log(data);
// }catch(error){
//   console.log(error);
// }
// }
// getallusers();


// //fetch using then and catch

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((responce)=>{
//   return responce.json()
// }).then((data)=>{
// console.log(data);
// })
// .catch((error)=>{
//   console.log(error);
// });
