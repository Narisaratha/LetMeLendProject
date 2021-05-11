import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';

import Post from './post'
import Createpost2 from './createpost2';
import Login from './login'
import Home2 from './home2';
import Register from './register'

    ReactDOM.render(
      <React.StrictMode>
      
        <Createpost2 />
       
      </React.StrictMode>,
      document.getElementById('root')
    );
 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
