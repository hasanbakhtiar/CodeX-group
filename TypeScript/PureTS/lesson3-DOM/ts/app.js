// var info:any = document.querySelector('h1') as HTMLHeadingElement;
var list = document.querySelector('li');
list.innerHTML = 'new value';
fetch('https://fakestoreapi.com/products')
    .then(function (res) { return res.json(); })
    .then(function (data) { return console.log(data); });
