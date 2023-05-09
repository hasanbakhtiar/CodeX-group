import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';



const initalState = 0;

const store = createStore((state = initalState, action) => {
  switch (action.type) {

    case 'increment':
      return state + 1

    case 'decrement':
      return state - 1

    default:
      return 0
  }
});


store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({
  type:"increment"
})
store.dispatch({
  type:"decrement"
})
store.dispatch({
  type:"decrement"
})








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Hello Redux JS</h1>
  </React.StrictMode>
);

