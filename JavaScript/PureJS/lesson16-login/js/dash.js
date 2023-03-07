const tbody = document.querySelector("tbody");

const catBtn = document.querySelectorAll('.catBtn');
var category = 'jewelery'

console.log(category);

const fetchApi = async () => {
  const comingdata = await fetch(`https://fakestoreapi.com/products/category/${category}`);

  let products = [];
  products = await comingdata.json();

  let td = "";
    products.map((item,i) => {
      td += `
                    <tr>
                    <th scope="row">${i+1}</th>
                    <td><img src="${item.image}" width="50"/></td>
                    <td>${item.title}</td>
                    <td>${item.price}$</td>
                    <td><button class="btn btn-warning">Edit</button></td>
                    <td><button class="btn btn-danger">Delete</button></td>
                    </tr>
                    `;
                });
                
                tbody.innerHTML = td;
                
                console.log(products);
            };
            fetchApi();

catBtn[0].onclick = ()=>{
    category = "women's clothing";
    fetchApi();
}

catBtn[1].onclick = ()=>{
    category = "men's clothing"
    fetchApi();
}
catBtn[2].onclick = ()=>{
    category = "jewelery"
    fetchApi();
}
