
// const parent=document.querySelector(".parent");
// console.log(parent);


//---> how to access children property using parent
// console.log(parent.children);
// console.log(parent.children[0].innerText);

// for (let i = 0; i < parent.children.length; i++) {
// console.log(parent.children[i].innerHTML);  
// }
// parent.children[1].style.color="red";
// console.log(parent.firstElementChild.innerHTML);
// console.log(parent.lastElementChild.innerHTML);


// --->access parent,nextsibling by child

// const dayone=document.querySelector('.day')

// console.log(dayone.innerHTML);
// console.log(dayone.parentElement.innerText);
// console.log(dayone.nextElementSibling.innerText);

//shows child nodes.
// const parent=document.querySelector(".parent");
// console.log("NODES:", parent.childNodes);


//----> creat element 

// const div=document.createElement('div')
// // console.log(div);
// div.className='main'
// // div.id="myid"
// div.id=Math.round(Math.random()*10 +1)

// //set attribute set values or add classes
// div.setAttribute('title',"generated title")
// div.style.backgroundColor="green";
// div.innerText="chai aur code"

// console.log(div.innerHTML);

// // const addtext=document.createTextNode("learning javascript")
// // div.appendChild(addtext);

// //now add this div into html body

// document.body.appendChild(div)