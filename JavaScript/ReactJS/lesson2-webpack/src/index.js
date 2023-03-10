import React from "react";
import  ReactDOM  from "react-dom";
import './style.scss';
import myphoto from './unsplash.jpg'
class App extends React.Component{
    render(){
        return(
          <>
            <h1>Hello React with webpack</h1>
            <img width={300} src={myphoto} alt="" />
          </>
        )
    }
}


ReactDOM.render(<App />, document.querySelector('#root'));