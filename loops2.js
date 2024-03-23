//higher order loops

//ForEach Loop

// const coading=['js','c++','c','java'];
// coading.forEach((item,index,are)=>{
// console.log(item,index,are);
// })

// const coading=['js','c++','c','java'];
// function printme(item){
//   console.log(item);
// }
// coading.forEach(printme)

//objects inside arrays

// const mycode= [
//    {
//     lngname:'javascript',
//     lngFname:'js'
//    },
//    {
//     lngname:'java',
//     lngFname:'java'
//    },
//    {
//     lngname:'phyton',
//     lngFname:'py'
//    },

//   ]

//   mycode.forEach( (item)=>{
// console.log(item.lngFname);
//   })

//for each does not return values.

// const coading=['js','c++','c','java'];
// const values= coading.forEach((item)=>{
//   console.log(item);
// })
// // console.log(values);

//filter(it return values)

// const nums=[1,2,3,4,5,6,7,8]
// const newnums=nums.filter((num)=>{
// return num >5
// })
// console.log(newnums);

//eg

//filter

// var List = [10,12,15,30];
// var updatedList = List.filter(function(list){ return list %  2 == 0  }); 
// console.log("original List" ,List)  //Original array not Modified
// console.log("Updated List" , updatedList)


//eg for foreach method

// const nums=[1,2,3,4,5,6,7,8]
// let newnum=[];
// nums.forEach((num)=>{
//   if(num>4){
//     newnum.push(num);
//   }
// })
// // console.log(nums);
// console.log(newnum);

// //using map

// var List = [10,12,15,30];
// var updatedList = List.map(function(list){ return list * 2  
// });
// console.log("original List" ,List)  //Original array not Modified
// console.log("Updated List" , updatedList)

//for each
// var Language = ['React','Javascript','HTML','CSS'];
// Language.forEach((language)=>console.log(language));

//filter eg

// const books=[
//   {tittle:'bk 1', gener:'since',publish:'1998',edition:2013},
//   {tittle:'bk 2', gener:'history',publish:'1988',edition:2020},
//   {tittle:'bk 3', gener:'fiction',publish:'1999',edition:2021},
//   {tittle:'bk 4', gener:'since',publish:'1978',edition:2024},
//   {tittle:'bk 5', gener:'history',publish:'1978',edition:2014},
// ]
// let userbooks= books.filter((item)=> item.gener === 'history')
// //  userbooks=books.filter((item)=>{
// //   return item .publish >=1980 && item.gener ==='history'
// //  })
// console.log(userbooks);

// eg for each
// const nums=[1,2,3,4,5,6,7,8,9,10]
// nums.forEach((item)=> {
//   console.log( item +10 );
// });

//same eg using map

// const nums=[1,2,3,4,5,6,7,8,9,10]
// const nwnum=nums.map((num)=>{
//   return num +10 
//   })
// console.log(nwnum);

//  chaning-->(we can use two to three methods in a same line)

// const nums=[1,2,3,4,5,6,7,8,9,10] 
// const newnums=nums.map((num) => num*10).map((num)=>num-1).filter((num)=>num>=50);
// console.log(newnums);

//reduce

// it has accumulator(empty varable it takes initial value) and current value(current array value)

// const nums=[1,2,3,4,5]
// const nwnum=nums.reduce((acc,cv)=>{
//   console.log(`acc: ${acc} and cv: ${cv}`);
// return acc + cv;
// },0)
// console.log(nwnum);

// const scard=[
//   {
//     iname:"js course",
//     price:1299,
//   },
//   {
//     iname:"data science",
//     price:3999,
//   },
//   {
//     iname:"machine learning",
//     price:5999,
//   },
//   {
//     iname:"fullStack course",
//     price:7299,
//   }
// ]

// const sscard=scard.reduce((acc,item)=>{
//   return acc + item.price;
// },0)
// console.log(sscard);