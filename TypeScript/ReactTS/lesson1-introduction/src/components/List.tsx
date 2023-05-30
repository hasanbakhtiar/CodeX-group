import React from 'react'
import { productType } from '../config'

const List:React.FC<productType> = ({title,price,id}) => {
  return (
   <ol>
    <li>#{id}</li>
    <li>{title}</li>
    <li>{price}</li>
   </ol>
  )
}

export default List