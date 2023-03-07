


// const text = document.querySelector('p');
// const list = document.querySelector('ul');
// text.innerHTML = list.childNodes[1].previousSibling.firstChild.nodeType;


// const myNewTag = document.createElement('h1');
// const myNewText = document.createTextNode('Hello JavaScript');
// myNewTag.appendChild(myNewText);
// document.body.appendChild(myNewTag);


// const btn = document.querySelector('button');
// const form  = document.querySelector('form');
// const input = document.querySelector('input')
// const list = document.querySelector('ol');


// input.onkeyup =()=>{
//     input.style.height = '20px';
//     input.style.backgroundColor = 'white';
//     input.style.transition = '1s'
// }

// input.onkeydown =()=>{
//     input.style.height = '70px';
//     input.style.backgroundColor = 'red';
//     input.style.transition = '1s'
// }



// const todoApp =e=>{
//     e.preventDefault();
// if (!input.value || input.value === ' ') {
//     alert('please,fill input');
// }else{
//     const li  = document.createElement('li');
//     li.innerHTML = input.value.trim();
//     list.appendChild(li);
//     input.value = "";
//     console.log(li.innerHTML);
//     li.onclick = ()=>{
//         if (li.style.textDecoration === 'none') {
//             li.style.textDecoration = "line-through";
//         }else{
//             li.style.textDecoration = "none"
//         }
//     }
//     li.ondblclick=()=>{
//         // list.removeChild(li);
//         li.remove();
//     }
// }
   
// }


// form.onsubmit = todoApp;



const defaultMail = "info@example.com";
const input = document.querySelector('input');
const alterText  = document.querySelector('p');
const form  = document.querySelector('form');
const emailCheck=(e)=>{
    e.preventDefault();
 if (!input.value) {
    alterText.innerHTML = "please, fill input";
    alterText.style.color = 'orange';
 }else{
    if (defaultMail === input.value) {
        alterText.innerHTML = "send password your email";
        alterText.style.color = 'green';
    }else{
        alterText.innerHTML  = 'wrong email address!'
        alterText.style.color = 'red';

    }
 }
}
form.onsubmit = emailCheck;

