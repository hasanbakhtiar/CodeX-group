import React,{Component} from 'react';
import ReactDOM from 'react-dom/client';
import List from './List';
import './assets/sass/style.scss';
import carphoto from './assets/img/unsplash.jpg'
import Card from './Card';

class App extends Component{
  render(){
    return(
      <>
      <img src={carphoto} width={200} alt="" />
      <List />
<div className='my-flex'>
<Card />
      <Card />
      <Card />
      <Card />
      <Card />
</div>
      </>
    )
  }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

