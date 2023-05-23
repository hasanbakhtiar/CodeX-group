import React from 'react'
import BlogForm from '../../../components/BlogForm'
import { useDispatch } from 'react-redux'
import { addBlogToDatabase } from '../../../redux/action/blogAction';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <div>
        <h1 className='text-center my-3'>Add blog</h1>
        <BlogForm onFormSubmited={(allitems)=>{
            dispatch(addBlogToDatabase(allitems));
            navigate("/admin/dashboard")
        }}/>

    </div>
  )
}

export default CreateBlog