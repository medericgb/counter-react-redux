import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// Redux
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux';
// import { ReduxThunk } from 'redux-thunk';

import countReducer from './reducers/countReducer';

const store = createStore(countReducer)
// const store = createStore(countReducer, applyMiddleware(ReduxThunk))
console.log(store.getState());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
