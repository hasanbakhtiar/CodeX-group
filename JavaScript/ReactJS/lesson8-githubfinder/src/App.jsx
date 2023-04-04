import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import Search from "./components/Search";
import Users from "./components/Users";
import axios from "axios";
class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      status:"",
      
    };
  }



 


  searchValue = (keyword) => {
    axios
      .get(`https://api.github.com/search/users?q=${keyword}`)
      .then((res) => {
        this.setState({ users: res.data.items, data: true });
        console.log(res);
      });
  };

  formStatus=(a)=>{
      this.setState({
          status:a
      })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Search dataStatus={this.formStatus} inputValue={this.searchValue} formStatus={this.dataStatus} />
        {this.state.users.length === 0 ? (
          <h1  className="text-center">{this.state.status}</h1>
        ) : (
          <Users comingusers={this.state.users} />
        )}
      </Fragment>
    );
  }
}

export default App;
