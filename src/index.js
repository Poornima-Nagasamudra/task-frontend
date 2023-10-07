import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import configureStore from '../src/store/configureStore';
import { startGetTasks } from './actions/taskAction';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"

const store = configureStore()

if(localStorage.getItem('token')){
  store.dispatch(startGetTasks())
}

store.subscribe(function(){
    // console.log('store', store.getState())
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <BrowserRouter>
         <App />
    </BrowserRouter>
  </Provider>

);


