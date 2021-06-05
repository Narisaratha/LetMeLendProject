
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Col,Nav,container } from 'react-bootstrap';
import {Link, Route, Switch} from 'react-router-dom'
import './header1.css';
import Login from './login.js'
import Register from './register.js'
import Home1 from './home1'
import React, {Component, useState} from 'react'
const bootstrap = require('bootstrap')

  
function Header1()  {


    const[searchInput,setsearchInput] = useState('')


   
        return(
            <>
            <div className="app__header">
               
                 <Link to="/"><a className="text">ยืมหน่อย</a></Link> 
                       
                    <Form className="search1">
                    <div className="inputsearch1">
                        <Form.Group controlId="inputsearch">
                            <Form.Control type="text" placeholder="Search" />
                        </Form.Group>
                    </div>
                   
                    
                        <Button href="/search" className="submit1" variant="outline-info"  type="submit" >
                        ค้นหา
                        </Button>
                
                    </Form> 

                        <div className="header1_login">
                        <Link to="/login">
                        <Button className="login_button"  variant="outline-info" size="sm"  >เข้าสู่ระบบ</Button>
                        </Link>
                        </div> 
                        
                        <div className="header1_register">
                            <Link to="/register">
                                <a href="/register"><font color="white">สมัครสมาชิก</font></a>
                            </Link>
                        </div>  
                   
             </div> 
           </>             

        )


    }

    


export default Header1;













