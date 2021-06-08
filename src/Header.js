
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Col,Nav,container } from 'react-bootstrap';
import './header.css';
import {Link} from 'react-router-dom'
import Home1 from './home1'
import React, {Component, useState} from 'react'
const bootstrap = require('bootstrap')

export default class Header extends Component {
    render(){
        return(
          
                <div className="app__header">
                    
                    <Link to="/home2"><a className="text">ยืมหน่อย</a></Link>                 
             </div> 
               
        )


    }
}













