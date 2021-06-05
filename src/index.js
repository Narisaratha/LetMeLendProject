import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';

import { Switch, Route } from 'react-router-dom'

import Home1 from './home1'
import Home2 from './home2'
import Login from './login'
import Register from './register'
import Createpost from './createpost'
import Createpost2 from './createpost2'
import Createpost3 from './createpost3'
import Createpost_db from './createpost_db'
import Post from './post'
import Profile from './profile'
import Chat from './chat'
import Login_db from './login_db'
import Comment from './comment_db'

import { BrowserRouter } from "react-router-dom"


const AppWithRouternotAuthen = () => (
  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home1} />
    <Route  path="/login" component={Login} />
    <Route  path="/register" component={Register} />
    <Route  path="/home2" component={Home2} />
    <Route  path="/create" component={Createpost} />
    <Route path="/createpost2" component={Createpost2} />
    <Route path="/createpost3" component={Createpost3} />
    <Route path="/createpost_db" component={Createpost_db} />
    <Route path="/post" component={Post} />
    <Route path="/profile" component={Profile} />
    <Route path="/chat" component={Chat} />
    <Route path="/login_db" component={Login_db} />
    <Route path="/comment_db" component={Comment} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<AppWithRouternotAuthen />, document.getElementById('root'))
