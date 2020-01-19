import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider,connect } from "react-redux"
import * as ruduece from './Libary'
import thunkMiddleware from 'redux-thunk'
import {createStore,combineReducers,applyMiddleware} from "redux"
  
console.log(ruduece.default);
 const logger = (store)=> (next) => (action) => 
    {
        console.log('will dispatch', action)
        console.log(store);
        console.log(store.getState());
        console.log(next);
        next(action)
    }
const store = createStore(
    combineReducers({ ...ruduece.default }),
    {},
    applyMiddleware(logger,thunkMiddleware)
  );
ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
