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
            alerttext:"",
            alertstyle:"",
            pass:""
        }
    }
    formSubmit=(e)=>{
        e.preventDefault();
        if (!this.state.email || !this.state.pass) {
            this.setState({
                alerttext:"please, fill input!  ",
                alertstyle:'warning'
            })
        }else{
            if (this.state.pass === userdata.pass && this.state.email === userdata.email) {
                this.setState({
                    alerttext:"login is successfully!",
                    alertstyle:'success'
                })
            }else{
                this.setState({
                    alerttext:"email or password is wrong!",
                    alertstyle:'danger'
                })
            }
        }
    }
  render() {
    return (
      <>
          <div className="d-flex align-items-center justify-content-center flex-column">
            <h1>Login</h1>
            <div className={`alert alert-${this.state.alertstyle}`}>{this.state.alerttext}</div>
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