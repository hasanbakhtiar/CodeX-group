import React from "react";
import ReactDOM from "react-dom/client";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import configureStore from "./redux/store/configureStore";
import { addblog, removeBlog } from "./redux/action/blogAction";
import App from "./App";
import { Provider } from "react-redux";
import './sass/style.scss';

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(
  addblog({
    photo:
      "https://insider-gaming.com/wp-content/uploads/2023/04/Asus_ROG_Ally_2-1.jpg",
    title: "1ASUS Ally",
    desc: "It has been confirmed that the ROG Ally will retail for $699.99 and will launch worldwide on June 13, 2023. The ASUS ROG Ally will come with 3 months of Xbox Game Pass Ultimate for free.",
  })
);
 store.dispatch(
  addblog({
    photo: "https://dlcdnrog.asus.com/rog/media/1617248057491.webp",
    title: "2HANDS-ON: THE ROG STRIX G17 HAS THE HUSTLE FOR ANY GAME",
    desc:"Call it luck. Call it practice meeting opportunity. Whatever it was, I was in the right place at the right time. For three straight rounds in Counter-Strike: Global Offensive, the opposing team had rushed bomb site B, turning a long, curved hallway into a bloodbath. This time, I held back. With a P90 in burst fire mode, I crouched and waited for my opponents to traverse the hallway and push into the bomb site. One, two, and then three terrorists rounded the corner. Three quick bursts of lethal firepower later, my team had an advantage that snowballed into victory."
  })
);

// console.log(blog1.myblog.id);
// store.dispatch(removeBlog({comingid:blog1.myblog.id}))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
  </React.StrictMode>
);
