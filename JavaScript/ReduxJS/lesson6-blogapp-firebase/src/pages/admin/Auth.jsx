import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const user = {
    email:"a@a",
    pass:'a123'
}
const Auth = () => {
    const [email,setEmail] = useState();
    const [pass,setPass] = useState();
    const navigate = useNavigate();
    const formSubmit =e=>{
        e.preventDefault();
        if (!email || !pass) {
            alert('plase, fill input')
        }else{
            if (email === user.email && pass === user.pass) {
                navigate('/admin/dashboard');
            }else{
                alert('wrong')
            }
        }
    }
  return (
    <div className='d-flex align-items-center justify-content-center flex-column'>
        <h1 className='my-5'>Login</h1>
                <form onSubmit={formSubmit} className='col-4'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input  onChange={e=>{setEmail(e.target.value)}} type="email" className="form-control"  />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input  onChange={e=>{setPass(e.target.value)}} type="password" className="form-control" />
                </div>
     
                <button type="submit" className="btn btn-primary">Login</button>
                </form>

    </div>
  )
}

export default Auth