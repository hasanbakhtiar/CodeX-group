import React, { Component } from 'react'

class Search extends Component {
  constructor(){
    super();
    this.state={
      keyword:""
    }
  }
  formSubmit=(e)=>{
        e.preventDefault();
        this.props.inputValue(this.state.keyword)
  }
  render() {
    return (  
      <form onSubmit={this.formSubmit} className='d-flex alidn-items-center justify-content-center  my-5'> 
          <div className="col-6">
          <div className="input-group mb-3">
            <input onChange={e=>{
              this.setState({
                keyword:e.target.value
              })
            }} type="text" className="form-control" placeholder="Enter username"  />
            <button className="btn btn-success" type="submit">Search</button>
            </div>
          </div>
      </form>
    )
  }
}

export default Search