import React, { Component } from 'react'
import axios from 'axios';
class App extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }

    componentDidMount(){
      axios.get('https://rickandmortyapi.com/api/character')
      .then((res)=>{
        this.setState({
          data:res.data.results

        })
        
        console.log(this.state.data)
      })
    }
  render() {
    return (
      <div>
        <ol>
            {this.state.data.map((item,i)=>{
              return <li key={i}>{item.name}</li>
            })}
        </ol>
      </div>
    )
  }
}

export default App