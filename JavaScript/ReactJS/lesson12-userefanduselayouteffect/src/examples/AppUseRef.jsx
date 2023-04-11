import React, { useRef, useState } from 'react'
import { Button } from 'react-bootstrap'

const AppUseRef = () => {
    const [data,setData] = useState();
    const [value,setValue] = useState();
    const inputRef = useRef();
  return (
    <div className='d-flex align-items-center justify-content-center flex-column' style={{height:"100vh"}}>
        <h1 >{data}</h1>
       <div>
       <input type="text" ref={inputRef} value={value} /><Button className='btn-sm'
        onClick={()=>{
           setData(inputRef.current.value);
           setValue('');
            
        }}  
        >action</Button>
       </div>
    </div>
  )
}

export default AppUseRef