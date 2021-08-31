import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

const body = (
    <div>
        <App />
    </div>
);

const rootElement = document.getElementById('root');
ReactDOM.render(body, rootElement);