import React, { useEffect, useRef } from 'react'
import { Button,Col,Form  } from 'react-bootstrap'


const user ={
    name:"a",
    pass:'1'
}

const Login = () => {

    const emailRef = useRef();
    const passRef = useRef();
    

    
    const loginSubmit =e=>{
        e.preventDefault();
        if (!emailRef.current.value || !passRef.current.value) {
            alert('please, fill input')
        }else{
            if (emailRef.current.value === user.name && passRef.current.value ===user.pass) {
                alert('login success')
            }else{
                alert('wrong')
            }
        }
    }
  return (
 <>
<Col md={6}>
 <Form onSubmit={loginSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control ref={emailRef} type="text"/>
     
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control ref={passRef} type="password" placeholder="" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
</Col>
 </>
  )
}

export default Login