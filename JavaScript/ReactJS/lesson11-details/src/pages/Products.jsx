import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard'
import axios from 'axios'

const Products = () => {
    const [product,setProduct] = useState([]);

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>setProduct(res.data))
 },[])
    
    
  return (
    <Container>
        <h1 className='my-5 text-center'>Products</h1>
        <Row className='g-5'>
           {product.map(item=>{
            return  <SingleCard 
            key={item.id}
            id={item.id}
            photo={item.image}
            title={item.title}
            desc={item.description}
            price={item.price}
            />
           })}
        </Row>

    </Container>
  )
}

export default Products