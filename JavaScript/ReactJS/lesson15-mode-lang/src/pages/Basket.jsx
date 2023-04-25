import React from 'react'
import { Button, Container, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useCart } from 'react-use-cart'

const Basket = () => {
    const {isEmpty,items,updateItemQuantity,removeItem, cartTotal} = useCart();
  return (
 <>
   {isEmpty ? <LinkContainer to="/products">
    <div className="d-flex justify-content-center">
      <img src="https://cdn.dribbble.com/users/461802/screenshots/4421003/emptycart.gif" alt="" />
    </div>
   </LinkContainer>:<>
 <Container>
 <h1 className='my-5 text-center '>Your Basket</h1>
   <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Photo</th>
          <th>Title</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
{items.map(value=>(
  <tr key={value.id}>
  <td>1</td>
  <td><img width={50} src={value.image} alt="" /></td>
  <LinkContainer to={`/products/${value.id}`}>
  <td className='text-primary'>{value.title.substring(0,30)}...</td>
  </LinkContainer>
  <td>{value.price.toFixed()*value.quantity}$</td>
  <td>
    <Button variant='warning' onClick={()=>{updateItemQuantity(value.id, value.quantity -1)}}>-</Button>
    <span className='mx-2'>{value.quantity}</span>
    <Button variant='success' onClick={()=>{updateItemQuantity(value.id, value.quantity +1)}}>+</Button>
  </td>
  <td><Button variant='danger' onClick={()=>{removeItem(value.id)}}>X</Button></td>
</tr>
))}
      
        
      </tbody>
    </Table>
    <h4 className='mt-3 '>Total Price:{cartTotal.toFixed()}$</h4>
 </Container>

   </>}
 </>
  )
}

export default Basket