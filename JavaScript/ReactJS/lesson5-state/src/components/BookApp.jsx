import React, { Component } from 'react'

export class BookApp extends Component {
    constructor(){
        super();
        this.state ={
            photo:"https://kitabevim.az/wp-content/uploads/2020/12/1984-600x985-1.jpg",
            title:"1984",
            author:"George Orwell"
        }
    }
    nextBook=()=>{
        this.setState({
            photo:"http://unimall.az/images/detailed/143/amerikaa-500x500.jpg",
            title:"Amerikan faciesi",
            author:"Hafiz"
        })
    }
  render() {
    return (
                    <div className="card" style={{width: '18rem'}}>
            <img src={this.state.photo} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{this.state.title}</h5>
                <p className="card-text">{this.state.author}</p>
                <button onClick={this.nextBook} className="btn btn-warning">next</button>
                
            </div>
            </div>

    )
  }
}

export default BookApp