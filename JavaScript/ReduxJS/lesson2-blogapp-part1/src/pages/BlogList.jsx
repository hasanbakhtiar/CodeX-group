import React from 'react'
import { Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard'
import { useSelector } from 'react-redux'

const BlogList = () => {
    const blog = useSelector(state=>state);
  return (
    <>
     <h1 className='text-center my-5'>Rog Blogs</h1>   
     <Row>
        {blog.map(i=>(

        <SingleCard photo={i.photo} title={i.title} desc={i.desc} key={i.id} />
        ))}
     </Row>

    </>
  )
}

export default BlogList