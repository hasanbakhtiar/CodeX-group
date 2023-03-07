const row = document.querySelector('.row');

fetch('https://restcountries.com/v3.1/all')
.then(res=>res.json())

.then(data=>{
    let card = "";
    data.map(item=>{
        card+=`
        <div class="col-md-4">
        <div class="card" >
        <img height="300" src="${item.flags.png}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.name.common}</h5>
          <p class="card-text">${item.capital}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        </div>
        `
    })
    row.innerHTML = card;
});
