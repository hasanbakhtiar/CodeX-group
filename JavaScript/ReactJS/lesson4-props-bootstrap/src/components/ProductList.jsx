import React, { Component } from 'react'
import Card from './Card'
import products from '../data/products'
// let data = ['table','chair','sofa'];
// console.log(data.sort());
let productscut = products.slice(0,3)
export class ProductListOne extends Component {
  render() {
    return (
        <div className='container'>
        <h1 className='text-center my-5'>Card List1</h1>
       <div className="row g-5">

        {
          
            
           productscut.map((item)=>{
            return <Card 
            // title={item.title} 
            // photo={item.photo} 
            // newproduct={item.newProduct}
            // price={item.price}
            // rate={item.rate}
            productprop={item}
            key={item.id}

            />
        })}




        {/*         
        <Card title="Card One" color="danger" photo="https://images.unsplash.com/photo-1678648113407-913545723db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
        <Card title="Card Two" color="warning" photo="https://images.unsplash.com/photo-1636204317618-81d898009d6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"/>
        <Card title="Card Three"/> */}

       </div>
      </div>
    )
  }
}


export class ProductListTwo extends Component {
    render() {
      return (
        <div>ProductList2</div>
      )
    }
  }


  export class ProductListThree extends Component {
    render() {
      return (
        <div>ProductList3</div>
      )
    }
  }