import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'

const TodoList:React.FC<any> = ({items}) => {
  return (
    <ListGroup>
      {items.map((val:any)=>{

    return <ListGroup.Item key={val.id} className='d-flex justify-content-between'>{val.text}<Button variant='danger'>X</Button></ListGroup.Item>
      })}
  </ListGroup>
  )
}

export default TodoList