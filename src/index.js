import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './views/App';
import store from "./store";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <Index/>
    </Provider>,
    document.getElementById('root')
);