// console.log(document);

// const title=document.getElementById('title');
// title.style.color="red"

//--> .innerText (shows  the actual value )
//---> .TextContent (show all the content(shows all the content that are hidden) with out html tags)
//-->  . innerHTML (shows all the content with htmls tags)

// title.innerText='muzamil'

// const h1=document.querySelector('h1')
// h1.style.color='green'

// const oul=document.querySelector('ul')
// const lii=oul.querySelector('li');
// lii.style.color="blue"

// nodelist and HtmlCollection are not pure arrays we can't use all the methods that are used in arrays.so we have to convert them into arrays than we can use all the methods of arrays on them.

// const all=document.querySelectorAll("li");//(it give nodelist)
// console.log(all);
// all.style.color='yellow'
// all[1].style.color='yellow'

// const myh1=document.querySelector('h1')
// console.log(myh1);
// myh1.style.color='purple'


// const all=document.querySelectorAll('li');
// // console.log(all);
// all.forEach((item)=>{
//   item.style.backgroundColor='green'
// })

// (it gives html collection)

// const classls=document.getElementsByClassName("list-item")
// console.log(classls);

// we have to convert htmlcollection or node list into array so that we can apply the methods of arrays on it.

//convert into array
// const classls=document.getElementsByClassName("list-item")
// const converary=Array.from(classls);
// // console.log(converary);
// converary.forEach((item)=>{
// item.style.color="orange"
// });