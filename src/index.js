// ./src/index.js

import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux'; /* code change */
import { Provider } from 'react-redux'

import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';

const store = createStore(shoppingListItemReducer)

render (
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
)


