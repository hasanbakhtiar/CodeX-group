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