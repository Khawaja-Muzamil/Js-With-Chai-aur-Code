
// const parent=document.querySelector(".parent");
// console.log(parent);


//---> how to access children property using parent/
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


// const java=document.createElement("li")
// java.innerHTML="java"
// document.querySelector(".language").appendChild(java)

//---> add Elements using function
// function addlng(lname) {
//   const li=document.createElement("li");
//   li.innerHTML=`${lname}`
//   document.querySelector(".language").appendChild(li)
// }
// addlng("phyton");
// addlng("typescript");
// addlng("C#")

//create textnode inside li

// function addlng(lname) {
//   let li=document.createElement("li")
//   li.appendChild(document.createTextNode(lname))
//    document.querySelector(".language").appendChild(li)  
// }
// addlng("golang")
// addlng("C")
// addlng("C++")

// --->Edit values of an element
// const secondlang=document.querySelector("li:nth-child(2)")
// secondlang.innerHTML="mojo"
// secondlang.appendChild(document.createTextNode(" moja"))

// const newli=document.createElement("li")
// newli.textContent="Mojo"
// secondlang.replaceWith(newli)

//or
// const flang=document.querySelector("li:first-child")
// flang.outerHTML='<li>typescript</li>'

//--remove element

// const llang=document.querySelector("li:last-child")
// llang.remove()