import React from "react";
import ReactDOM from "react-dom";
import MainContainer from "./Pages/1_Main-container/main-container.component";
import { createStore } from "redux";
import { Provider } from "react-redux";
import combinedReducers from "./redux_reducers/index";

const saveToLocalStorage = (state) =>{
  try{
    const usableState = JSON.stringify(state) 
    localStorage.setItem("state", usableState)
    
  }catch(err){
    console.log(err)
  }
}

const loadFromLocalStorage = () =>{
  try{
    const usableState = localStorage.getItem("state")
    if (usableState === null) return undefined;
    return JSON.parse(usableState)
  }catch(err){
    console.log(err)
    return undefined
  }
}

const presistedState = loadFromLocalStorage()

const store = createStore(
  combinedReducers,
  presistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()))

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
