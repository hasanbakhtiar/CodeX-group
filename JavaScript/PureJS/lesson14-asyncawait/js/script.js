// const myData =(comingResult)=>{
//   console.log(comingResult);
// }

// const myPromise = new Promise((resolve,reject)=>{
//       const x = 0;

//       if (x == 1) {
//           resolve('OK')
//       }else{
//         reject('Error')
//       }
// })

// myPromise.then(
//   (a)=>{myData(a);},
//   (b)=>{myData(b);}
// );

// const comingdata = ;

// console.log(fetch());
// console.log(window);
// const fetchApi = async()=>{

//   const apidata = await comingdata;
//   const mydata = await apidata.json();
//   console.log(mydata);

// }
// fetchApi();


try{
  // throw "everything is ok";
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(data=>console.log(data))
.catch(err=>{console.log('api is wrong!')})
.finally(()=>{
  console.log('api is perfect');
})


}catch(err){
  // console.log('something is wrong!');
  console.log(console.log(err));
}finally{
  console.log('im running everytime');
}

