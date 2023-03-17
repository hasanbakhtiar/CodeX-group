import React, { Component } from 'react'

const userdata = {
    pass:"a",
    email:"a@a"
}


 class Login extends Component {
    
    constructor(){
        super();
        this.state={
            email:"",
            pass:""
        }
    }
    formSubmit=(e)=>{
        e.preventDefault();
        if (!this.state.email || !this.state.pass) {
            alert('fill input')
        }else{
            if (this.state.pass === userdata.pass && this.state.email === userdata.email) {
                alert('login success')
            }else{
                alert('wrong')
            }
        }
    }
  render() {
    return (
      <>
          <div className="d-flex align-items-center justify-content-center flex-column">
            <h1>Login</h1>
       <div className="col-6">
       <form onSubmit={this.formSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" onChange={(e)=>{this.setState({
                    email:e.target.value
                })}} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control"onChange={(e)=>{this.setState({
                    pass:e.target.value
                })}} />
            </div>
       
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
       </div>
          </div>

      </>
    )
  }
}

export default Login