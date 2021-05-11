//ให้ยืม

import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Col,Nav } from 'react-bootstrap';
import Express from './express'
import Postall2 from './postall2'

class Page2 extends Component {
    render() {
        return (
            <div>
                <Express/>
                <Postall2/>
            </div>
        );
    }
}

export default Page2;