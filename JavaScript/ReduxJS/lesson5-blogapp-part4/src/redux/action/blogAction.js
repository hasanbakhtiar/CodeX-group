import {v4 as uuid} from 'uuid';

export const addblog = ({photo,title,desc}) => ({
    type: "CREATE_BLOG",
    myblog:{
        id:uuid(),
        photo,
        title,
        desc
    }
})

export const updateBlog = (id,update)=>({
    type:"UPDATE_BLOG",
    id,update

})


export const removeBlog = ({comingid}) => ({
    type: "DELETE_BLOG",
    myid:comingid   
})