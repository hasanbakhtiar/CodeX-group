import React from "react";
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import configureStore from "./redux/store/configureStore";
import {  getBlogsFromDatabase } from "./redux/action/blogAction";
import App from "./App";
import { Provider } from "react-redux";
import './sass/style.scss';

const store = configureStore();



const result = (
  <Provider store={store}>
      <App />
  </Provider>
)



ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(getBlogsFromDatabase()).then(() => {
    ReactDOM.render(result, document.getElementById('root'));
})
