import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';


import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const personName = (state = 'Chris', action) => {
    if (action.type === 'SET_PERSON_NAME'){
    // ! Never set state equal to anything!! (e.g. DO NOT state++)
    // Reducers always return state (existing value) by default
    //action.payload new value of playerOneName
    return action.payload;
    }
    return state
}

const miles = (state = 0, action) => {
    if (action.type === 'SET_MILES'){
        return action.payload
    }
    return state
}

const allPeople = (state = [], action) => {
    if (action.type === 'ADD_PERSON_NAME') {
        //return a new array with existing items PLUS the new item
        return [...state, action.payload];
        //basically the same as state.push(action.payload);
        //always want to create a new thing(ie array) and not change the default state
    }
    return state;
}
const storeInstance = createStore(
    combineReducers(
        {
            personName,
            allPeople,
            miles,
        }
    ),
    applyMiddleware(logger)
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
