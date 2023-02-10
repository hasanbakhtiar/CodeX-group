// document.querySelector('h1').innerHTML = localStorage.getItem("title");
// localStorage.setItem('desc','new value')
// localStorage.setItem('title','JavaScript');
// localStorage.clear()



import * as textdata from "../data/data.js"
const btnLang = document.querySelectorAll('button')[0];
const li = document.querySelectorAll('li');



// DEYISILEN HISSEDIR!
if(localStorage.getItem('lang') === null){
    localStorage.setItem('lang','en');
}else{
    const chageLang = ()=>{
        if (btnLang.innerHTML === 'az') {
            for( let i in  textdata.lang.az){
                li[i].innerHTML = textdata.lang.az[i]
            }
            btnLang.innerHTML = 'en';
            localStorage.setItem('lang','az');
        }else{
            for( let i in  textdata.lang.en){
                li[i].innerHTML = textdata.lang.en[i]
            }
            btnLang.innerHTML = 'az';
            localStorage.setItem('lang','en');

        }
    }
    btnLang.onclick = chageLang;
}
// DEYISILEN HISSEDIR!


// DEFAULT HISSEDIR YENI SABIT QALAN
if (localStorage.getItem('lang') === 'az') {
    for( let i in  textdata.lang.az){
        li[i].innerHTML = textdata.lang.az[i]
    }
    btnLang.innerHTML = 'en';
}else{
    for( let i in  textdata.lang.en){
        li[i].innerHTML = textdata.lang.en[i]
    }
    btnLang.innerHTML = 'az';

}
// DEFAULT HISSEDIR YENI SABIT QALAN

// MODE HISSESI
const btnMode = document.querySelectorAll('button')[1];
const header  = document.querySelector('header');
const mode =()=>{
    if (btnMode.innerHTML === 'dark') {
        header.className = "dark";
        btnMode.innerHTML = "light"
    }else{
        header.className = "light";
        btnMode.innerHTML = "dark"

    }
}

btnMode.onclick = mode;
// MODE HISSESI












