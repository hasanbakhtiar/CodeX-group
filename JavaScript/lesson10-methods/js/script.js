
// let students = [
//     { id: "001", name: "Anish", sports: "Cricket" },
//     { id: "002", name: "Smriti", sports: "Basketball" },
//     { id: "003", name: "Rahul", sports: "Cricket" },
//     { id: "004", name: "Bakul", sports: "Basketball" },
//     { id: "005", name: "Nikita", sports: "Hockey" }
// ]

// /* Applying filter function on students array to
//    retrieve those students Objects who play 
//    basketball and then the new array returned by
//    filter method is mapped in order to get the name
//    of basketball players instead of whole object.*/
// let basketballPlayers = students.filter((student)=> {
//     return student.sports === "Cricket";
// }).map(function (student) {
//     return student.name;
// })

// console.log("Basketball Players are:");
  
// // Printing out the name of Basketball players
// basketballPlayers.forEach(function (players) {
//     console.log(players);
// });





// const data = ['pen','book','rules'];
// data.push("new data");
// data.pop();
// data.shift();
// data.unshift('new value');
// console.log(data);


import { productList } from "../data/products.js";
// productList.splice(3,5)

// productList.map((item,i)=>{
//     console.log((i+1)+item.title);
// })


// productList.forEach((item,i)=>{
//     console.log((i+1)+item.title);
// })

// const data = ["men's clothing"];

// const checkCategory =(category)=>{
//     return category == "men's clothing";
// }
// console.log(productList.filter(checkCategory));


// let productFilter = productList.filter((data)=>{
//     return data.category === "electronics"
// }).map(item=>{
//     return item.title
// })

// productFilter.forEach(item=>{
//     console.log(item);
// })



