import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';



const initalState = {count:0};

const store = createStore((state = initalState, action) => {
  switch (action.type) {

    case 'increment':
      return {count:typeof action.value === "number" ? state.count + action.value : 1 
}
    case 'decrement':
      return {count:state.count - 1}
      case 'reset':
      return {count:0}
      

    default:
      return {count:0}
  }
});


store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({
  type:"increment",
  value:10
})
store.dispatch({
  type:"decrement"
})
store.dispatch({
  type:"reset"
})
store.dispatch({
  type:"increment",
  value:100
})








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Hello Redux JS</h1>
  </React.StrictMode>
);

