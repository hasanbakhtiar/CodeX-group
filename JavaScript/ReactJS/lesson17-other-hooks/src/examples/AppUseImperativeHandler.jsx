import { Button } from 'react-bootstrap'
import React, { forwardRef, useImperativeHandle, useRef } from 'react'



const MyInput = forwardRef((props,ref) => {

  useImperativeHandle(ref,()=>({
    a:sayHi
  }))


  const sayHi = () => {
    alert('test')
}
  
    return (
        <input type="text" />
    )
})


const AppUseImperativeHandler = () => {
   
    const inputRef = useRef();
    
    const test = () => {
        inputRef.current.a()
    }

    return (
        <>
            <MyInput ref={inputRef}/><Button onClick={test} >test</Button>
        </>
    )
}

export default AppUseImperativeHandler