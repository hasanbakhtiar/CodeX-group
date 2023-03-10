import { Component } from "react";

class List extends Component{
    render(){
      return(
        <ol style={{color:"red", fontSize:"20px"}}>
          <li className="test">Hello</li>
          <li>Hello</li>
          <li>Hello</li>
        </ol>
      )
    }
  }


  export default List;
  