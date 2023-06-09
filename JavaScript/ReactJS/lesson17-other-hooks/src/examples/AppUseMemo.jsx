import { Button } from 'react-bootstrap';
import React, { useMemo, useState } from 'react'
import users from '../data/users';

const AppUseMemo = () => {
    const [count, setCount] = useState(0);
    const [userId,setUserId] = useState(0);
    const getUserRows = ()=>{
        console.log('user id running');
        return users.map(item=>(<li key={item.id} onClick={()=>{setUserId(item.id) 
        }}>{item.name}</li>))
    }

    const userRows = useMemo(()=>getUserRows(),[userId]);
    return (
        <div>
            <span className='text-danger'>{userId}</span>
            {userRows}
        <hr />
            <span>{count}</span><Button onClick={() => { setCount(count + 1);
            console.log('count is running');
             }}>+1</Button>
        </div>
    )
}

export default AppUseMemo