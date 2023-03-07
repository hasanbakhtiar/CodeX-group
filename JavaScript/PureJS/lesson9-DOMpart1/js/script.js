// Selectors
// document.getElementsByTagName('h1')[0].innerHTML = "Bye";
// document.getElementById('test').innerHTML = "Bye1";
// document.getElementsByClassName('text')[0].innerHTML = "Bye2";

// QuerySelector
// document.querySelector('.text').innerHTML = "Bye3";
// document.querySelectorAll('li')[2].innerHTML = 'new value';

// for(let i = 0; i<7 ;i++){

// document.getElementsByTagName('li')[i].innerHTML = 'data';
// document.querySelectorAll('li')[i].innerHTML = 'data';
// }




const changeValue = () => {
  for (let i = 0; i < 7; i++) {
    document.querySelectorAll("li")[i].innerHTML = "new value";
  }
};

document.querySelector('button').addEventListener("click",changeValue)

