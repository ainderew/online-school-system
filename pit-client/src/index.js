import React from "react";
import ReactDOM from "react-dom";
import MainContainer from "./Pages/1_Main-container/main-container.component";
import { createStore } from "redux";
import { Provider } from "react-redux";
import combinedReducers from "./redux_reducers/index";

const store = createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
