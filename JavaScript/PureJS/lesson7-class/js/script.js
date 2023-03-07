// function Car(brand,model,year){
//         this.ibrand = brand;
//         this.imodel = model;
//         this.iyear = year;
// }
// Car.prototype.color = 'red'

// const myCar = new Car("BMW","X5",2022);

// console.log(myCar.color);



// const Car=(brand,model,year)=>{
//     this.ibrand = brand;
//     this.imodel = model;
//     this.iyear = year;
// }


// const myCar = new Car("BMW","X5",2022);
// console.log(myCar.ibrand);



import { Car } from "./class/Car.js";
import { Moto } from "./class/Moto.js";

Car.prototype.color = 'red';
const myCar = new Car("BMW","X5",2022);

// console.log(myCar.color);
// console.log(Car.prototype);
console.log(myCar.calculateSpeed(100,2));




const myMoto = new Moto('Yamaha','s400',2020);
console.log(myMoto.calculateSpeed(1000,2));



