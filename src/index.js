import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App.js';

// Require Sass file so webpack can build it
// import'./styles/style.css';
// Redux Imports
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './Redux/reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
)

ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    , document.getElementById('root'));