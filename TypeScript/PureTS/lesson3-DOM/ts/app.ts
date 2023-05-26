// var info:any = document.querySelector('h1') as HTMLHeadingElement;
var list:any = document.querySelector<HTMLLIElement>('li');

list.innerHTML = 'new value';


interface prodType{
    id:number,
    title:string
}



fetch('https://fakestoreapi.com/products')
.then((res:any)=>res.json())
.then((data:prodType[])=>console.log(data)
)


