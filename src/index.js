import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Booking from './TicketBooking';
import Learning from './Learning';
import * as serviceWorker from './serviceWorker';
import ShowDB from './ShowDB';
import PostDB from './PostDB';

// ReactDOM.render(<Booking />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Learning />, document.getElementById('root'));
// ReactDOM.render(<ShowDB />, document.getElementById('root'));
ReactDOM.render(<PostDB />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
