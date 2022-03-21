import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {applyMiddleware, createStore} from "redux";
import RootReducer from "./state/reducers/root_reducer";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

const store = createStore(RootReducer, applyMiddleware(thunk))

function render(){
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
         document.getElementById('root')
    )
}

store.subscribe(render);

render();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
