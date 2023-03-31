import React, { Component, Fragment } from 'react'
import Header from './components/Header'
import '../node_modules/bootstrap/scss/bootstrap.scss';
import Search from './components/Search';
import Users from './components/Users';
import axios from 'axios';
class App extends Component {

  constructor(){
    super();
    this.state={
      users:[],
      data:false
    }
  }


  componentDidMount(){
 
  }
  

  searchValue=(keyword)=>{
    axios.get(`https://api.github.com/search/users?q=${keyword}`)
    .then((res)=>{
      this.setState({users:res.data.items,
        data:true
      });
      console.log(res);

  })
  }
  
  render() {
    return (
      <Fragment>
          <Header />
          <Search inputValue={this.searchValue}/>
          {this.state.users.length === 0 ? <h1 className='text-center'>No Users</h1>: <Users comingusers = {this.state.users}/>}
      </Fragment>
    )
  }
}

export default App