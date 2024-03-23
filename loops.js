//loops

// for loop

// for (let i = 0; i < 10; i++) {
//   const element =i;
//   if(element==5){
//     console.log('5 is best no.');
//     continue;
//   }
//   console.log(element);
// }

// table example  usig for loop

// for (let i = 1;  i<=10; i++) {
//   console.log(`Table of ${i}`);
//   for (let a = 1; a<=10; a++) {
//   console.log(`${i} * ${a} = ${i * a} `);
//   }  
// }

// const ary=['aa','bb','cc']
// console.log(ary.length);
// for (let index = 0; index < ary.length; index++) {
//   const element = ary[index];
//   console.log(element);
// }


// //while loop
// let i=0;
// while (i<=10) {
//   console.log(i);
//   i++;
// }

// do while loop

// let score=1;
//  do{ 
// console.log(score);
// score++;
//  }while (score<=10) 


//higher order loops or array specific loops

//loops are used in arrays ,objects and strings

//FOROF LOOP

// const arr=[1,2,3,4,5]

// for (const ary of arr) {
//   console.log(ary);
// }


//ForIn loop

// const arr=[1,2,3,4,5]
// for (const key in arr) {
//         console.log(key);
//   }

  //--->  Maps(it is like obj it holds key value pairs, it remembers orders, it prints only  unique values)

  // const maap=new Map()
  // maap.set('IN','india')
  // maap.set('USA','united states of india')
  // maap.set('fr','france')
  // maap.set('IN','india')
  // // console.log(maap);
  // for (const [key,value] of maap) {
  //   console.log(key,':',value);
  // }

// forIN loop in objects

  // const games={
  //   game1:'NFS',
  //   game2:'spiderman'
  // }

  // for (const key in games) {
  //   console.log(key,":",games[key]);
  // }

  // forIn in arrays

//   const arr=['js','c++','c#','c']
//   for (const key in arr) {
// console.log(arr[key]);
//   }

//ForIn in new Map(map is not iterable)

// maap=new Map()
//   maap.set('IN','india')
//   maap.set('USA','united states of india')
//   maap.set('fr','france')
//   maap.set('IN','india')
//    for (const key in maap) {
// console.log(key);
//   }