import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Profile from './profile/Profile';
import image from './photo.jpg'
import * as serviceWorker from './serviceWorker';
function handleName(name) {
  alert("This is the profile of " + name);
}
ReactDOM.render(
  <React.StrictMode>
    <Profile fullname="Tom Cruise" profession="Actor" handleName={handleName}><img src={image}></img></Profile>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
