
import database from '../../firebase/firebaseConfig';

export const addBlog = (blog) => ({
    type: "ADD_BLOG",
    blog
})

export const addBlogToDatabase = (blogData = {}) => {
    return (dispatch) => {
        const { title='', desc='',photo='' } = blogData;
        const blog = {title,desc,photo};

        database.ref("blogs").push(blog).then((res) => {
            dispatch(addBlog({
                id: res.key,
                ...blog
            }))
        })
    }
}

export const updateBlog = (id,update)=>({
    type:"UPDATE_BLOG",
    id,update

})


export const removeBlog = ({comingid}) => ({
    type: "DELETE_BLOG",
    myid:comingid   
})


export const setBlogs = (blogs) => ({
    type: "SET_BLOGS",
    blogs
})

export const getBlogsFromDatabase = () => {
    return (dispatch) => {
        return database.ref("blogs").once("value").then((snapshot) => {
            const blogs = [];

            snapshot.forEach((blog) => {
                blogs.push({
                    id: blog.key,
                    ...blog.val()
                })
            })

            dispatch(setBlogs(blogs));
        })
    }
}