import React, { Component } from 'react'


 class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count:10
        }
        this.increment = this.increment.bind(this)
    }
    increment(){
        this.setState({
            count:this.state.count +1
        })
    }
    decrement=()=>{
     if (this.state.count > 0) {
        this.setState({
            count:this.state.count -1
        })
     }
    }
  render() {
    return (
      <div className='container mt-5'>
        <button className='btn btn-primary' onClick={this.decrement}>-1</button>
                <span className='mx-3'>{this.state.count}</span>
        <button className='btn btn-primary' onClick={this.increment}>+1</button>
       

      </div>
    )
  }
}

export default Counter