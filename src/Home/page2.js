

//ขอยืม

import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Col,Nav } from 'react-bootstrap';
import Express from './express'
import Postall2 from './postall2'
import Postall201 from './postall201'
import Postall202 from './postall202'
import Postall203 from './postall203'
import Postall204 from './postall204'
import Postall205 from './postall205'

import "./page.css"


class Page2 extends Component {
    render() {
        return (
            <div>  
                <div className="page_body_ex">   
                <Express/>
                </div>  
                <div className="page_body">
                <div className="rowpost">
                <div className="page_body_post">
                <Postall201 />
                </div>
                <div className="page_body_post">
                <Postall202 />
                </div>
                <div className="page_body_post">
                <Postall203 />
                </div>

                <div className="page_body_post">
                <Postall204 />
                </div>
                <div className="page_body_post">
                <Postall205 />
                </div>
                <div className="page_body_post">
                <Postall2 />
                </div>

                
                </div>
                </div>
            </div>
        );
    }
}

export default Page2;