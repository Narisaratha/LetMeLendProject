//ให้ยืม

import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Col,Nav } from 'react-bootstrap';
import Express from './express'
import Postall from './postall'
import './postall.css'

class Page2 extends Component {
    render() {
        return (
            <div>
                <div className="page_body_ex">   
                <Express/>
                </div>  
                <div className="page_body_post">
                <Postall />
                <Postall />
                </div>
            </div>
        );
    }
}

export default Page2;