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
import Post from './post'
import Profile from './profile'
import Chat from './chat'
import Comment from './comment_db'
import Commentgive from './commentgive'
import Commentget from './commentget'


import UserList from './showdata'

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
    <Route path="/post" component={Post} />
    <Route path="/profile" component={Profile} />
    <Route path="/chat" component={Chat} />
    <Route path="/comment_db" component={Comment} />
    <Route path="/userlist" component={UserList} />
    <Route path="/commentgive" component={Commentgive} />
    <Route path="/commentget" component={Commentget} />

    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<AppWithRouternotAuthen />, document.getElementById('root'))
