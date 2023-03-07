const text = document.querySelector('p')
const btnOne = document.querySelectorAll('button')[0];
// const btnTwo = document.querySelectorAll('button')[1];
// // text.innerHTML = window.innerHeight;
// // text.innerHTML = window.innerWidth;

// text.innerHTML = window.screen.width;
// text.innerHTML = window.screen.height;
// text.innerHTML = window.screen.availWidth;

// text.innerHTML = window.location.href
// text.innerHTML = window.location.hostname
// text.innerHTML = window.location.pathname
// text.innerHTML = window.location.port
// text.innerHTML = window.location.protocol

// window.location.assign('https://google.com')

// window.confirm('subscibe')

// if (confirm()) {
//     console.log('yes');
// }else{
//     console.log('no');
// }




// let myWindow;
// btnOne.onclick=()=>{
//      myWindow = window.open("","","width=500,height=300")
// }

// btnTwo.onclick=()=>{
//     myWindow.window.close()
// }

// text.innerHTML = new Date();
// text.innerHTML = new Date().getFullYear();
// text.innerHTML = new Date().getMonth();
// text.innerHTML = new Date().getDay();




// 1000ms = 1s
// setInterval(()=>{
//     document.write('Hello');
// },500);

// const clock = ()=>{
//     text.innerHTML = new Date();
// }

// console.log(alert);

// const dateTime = setInterval(clock,1000);
// btnOne.onclick=()=>{
//     clearInterval(dateTime);
// }

// setTimeout(()=>{
//     document.write("hello")
// },2000);



// setTimeout(() => {
//     document.querySelector('#preloader').className = 'hide';
//     document.querySelector('#mypage').className = 'show';
// }, 2000);





const loadDoc=()=> {

    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {

      if (this.readyState == 4 && this.status == 200) {
        text.innerHTML =
        this.responseText;
      }else{
        text.innerHTML = 'error'
      }

    };

    xhttp.open("GET", "../data/info.txt");
    xhttp.send();
  }

  btnOne.onclick = loadDoc