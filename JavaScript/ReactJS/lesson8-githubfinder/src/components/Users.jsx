import React, { Component } from 'react'
import SingleCard from './SingleCard'

class Users extends Component {
  render() {
   
    return (
      <div className="container">
        <div className='row g-5'>
            {this.props.comingusers.map(item=>{
                return <SingleCard key={item.id} alluserdata = {item}/>
            })}

 
      </div>
      </div>
    )
  }
}

export default Users