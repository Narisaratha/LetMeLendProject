import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import {Link, Route, Switch} from 'react-router-dom'
import { Form,Button,Col } from 'react-bootstrap';
import './login.css';
import React from 'react'
const bootstrap = require('bootstrap')




function Login() {
 return (

<>
      <div className="login_app">    
            <div >
              <Header />
            </div>
            <div className="login_body_head">
            ยืมหน่อย
            </div>
       

  <div className="login_body">       
      <Form>
        <div className="login_username">
          <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" />
            </Form.Group>   
        </div> 

        <div className="login_password"> 
            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
        </div>
        <div className="login_submit">    
            <Button className="login_but" href="/login_db" variant="primary" type="submit">
                เข้าสู่ระบบ
            </Button>
        </div>
      </Form>

  </div>
    </div>
</>

  );
}

export default Login;