//ขอยืม

import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Col,Nav } from 'react-bootstrap';
import Express from './express'
import Postall1 from './postall1'

class Page1 extends Component {
    render() {
        return (
            <div>
                <Express/>
                <Postall1/>
            </div>
        );
    }
}

export default Page1;