import React from 'react'
import BlogForm from '../../../components/BlogForm'
import {  useDispatch, useSelector } from 'react-redux'
import { editBlogFromDatabase } from '../../../redux/action/blogAction';
import { useNavigate, useParams } from 'react-router-dom';

const EditBlog = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} =useParams();
    const blogdata = useSelector(state => state)
    const filterblog = blogdata.find(p => p.id === id)
    return (
        <div>
            <h1 className='text-center my-5'>Edit Blog</h1>
            <BlogForm editblog={filterblog} onFormSubmited={(item) => {
                dispatch(editBlogFromDatabase(filterblog.id, item))
                navigate('/admin/dashboard');
            }
            } />
        </div>
    )
}


// const mapStateToProps =(state)=>{
//     const linkpathcount = window.location.pathname.length-36;
//     const link = window.location.pathname.slice(linkpathcount,9999);
//     return{
//         pvalue:state.find(p=>p.id === link )
//     }
// }

// export default connect(mapStateToProps)(EditBlog)
export default EditBlog;