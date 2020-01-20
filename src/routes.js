import { createStore } from "redux";
import createReducer from "./reducers";
import React, { Suspense, lazy } from 'react';
import data_reducer  from './Libary'
console.log(data_reducer,'data_reducer');
const reducer6 = (state = 300, action) => {
    switch (action.type) {
      case "PUT":
        break;
  
      default:
        break;
    }
    return state;
  };
  const reducer_token = {
      ...data_reducer,
      home:reducer6
  }
  console.log(reducer_token,'reducer_token');
//   const Home = lazy(() => import('./home'));
//   console.log(Home,'HOME');
const initializeStore = () => {
  const store = createStore(createReducer());

  store.asyncReducers = {};
  store.injectReducer = (key, reducer) => {
      console.log("INJECT-ROUTE");
    store.asyncReducers[key] = reducer;


    store.replaceReducer(createReducer(reducer_token));
    return store;
  };

  console.log(store.injectReducer,'store.injectReducer');
  store.injectReducer('home',reducer6)
  console.log(store.getState(),'getstate');
  return store;
};


export default initializeStore;