import React from 'react'
import BlogForm from '../../../components/BlogForm'
import { connect, useDispatch, useSelector } from 'react-redux'
import { updateBlog } from '../../../redux/action/blogAction';
import { useNavigate } from 'react-router-dom';

const EditBlog = ({ pvalue }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const blogdata = useSelector(state => state)
    const linkpathcount = window.location.pathname.length - 36;
    const link = window.location.pathname.slice(linkpathcount, 9999);
    const filterblog = blogdata.find(p => p.id === link)
    return (
        <div>
            <h1 className='text-center my-5'>Edit Blog</h1>
            <BlogForm editblog={filterblog} onFormSubmited={(item) => {
                dispatch(updateBlog(filterblog.id, item))
                navigate('/admin/dashboard')
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