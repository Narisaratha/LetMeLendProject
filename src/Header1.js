
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Col,Nav,container } from 'react-bootstrap';
import './header1.css';
import Login from './login.js'
import Register from './register.js'
import Home1 from './home1'
import React, {Component, useState} from 'react'
const bootstrap = require('bootstrap')

export default class Header1 extends Component {
    render(){
        return(
                <div className="app__header">
                    <div className="text">
                   ยืมหน่อย
                    </div>           
                    <Form className="search1">
                    <div className="inputsearch1">
                        <Form.Group controlId="inputsearch">
                            <Form.Control type="text" placeholder="Search" />
                        </Form.Group>
                    </div>
                    <div className="submit1">
                        <Button variant="outline-info"  type="submit" >
                        ค้นหา
                        </Button>
                    </div>
                    </Form> 

                        <div className="login">
                        <Button  variant="outline-info" size="sm">ข้าสู่ระบบ</Button>
                        </div> 
                        <div className="register">สมัครสมาชิก
                        </div>  
             </div> 
                        

        )


    }
}













