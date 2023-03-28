import { Component } from 'react'

class App extends Component{
  constructor(){
    super();
    this.state = {
      value:"",
      result:"",
      display:true
      
    }
  }
  handleClick =()=>{
    this.setState({
      result:this.state.value
    })
  }
  componentDidUpdate(){
   document.querySelector('button').className = 'btn btn-success';
  }
  componentWillUnmount(){
    document.querySelector('button').className = 'btn btn-dark';
  }
  render(){
    return(
      <div className='mt-5 container'>
     <input type="text"  onChange={e=>{
        this.setState({
          value:e.target.value
        })
      }}/> <button className="btn btn-secondary" onClick={this.handleClick}>add</button>
       <p>{this.state.display ? this.state.result : ""}</p> 
      <button className='btn btn-danger'  onClick={()=>{
        this.setState({
          display:false
        })
      }}>all del</button>
      </div>
    )
  }
}















// class Info extends Component{
//   componentWillUnmount(){
//     alert('tag is deleted!')
//   }
//   render(){
//     return(
//       <>
//       <h1>Hello</h1>
//       </>
//     )
//   }
// }


// class App extends Component{
//   constructor(){
//     super();
//     this.state={
//       display:true
//     }
//   }

//   delete=()=>{
//    this.setState({
//     display:false
//    })
//   }
//   render(){
//     let comp;
//     if (this.state.display) {
//       comp = <Info />
//     }
   
//     return(
//       <div className='container my-5'>
//       {comp}
//       <button onClick={this.delete}>delete</button>
//       </div>
//     )
//   }

// }













// class App extends Component {
 
//   constructor(){
//     super();
//     console.log('constructor is running!');
//     this.state ={
//       info:['hello']
//     }
//   }
//   componentDidMount(){
//      document.querySelector('h1').style.color = 'red';
//      console.log('componentDidMount is running!');
//     //  this.setState({
//     //    info:['hello']
//     //   })
//       this.state.info.length === 0 ? console.log('empty') : console.log('full');
//   }

//   componentDidUpdate(){
//     console.log('componentDidUpdate is running! ');
//     document.querySelector('p').innerHTML = 'changed';
//     document.querySelector('p').style.backgroundColor = 'red';
//   }

//   change=()=>{
//     this.setState({
//       info:['bye']
//     })
//   }
  
//   render() {
//     return (
//       <div className='container mt-5'>
//         <p>color</p>
//         <h1>{this.state.info}</h1>
//         <button onClick={this.change}>action</button>
//       </div>
//     )
//   }
// }

export default App