//ขอยืม

import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Col,Nav } from 'react-bootstrap';
import Express from './express'
import Postall2 from './postall2'
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
                <Postall2 />
                </div>
                <div className="page_body_post">
                <Postall2 />
                </div>
                <div className="page_body_post">
                <Postall2 />
                </div>

                <div className="page_body_post">
                <Postall2 />
                </div>
                <div className="page_body_post">
                <Postall2 />
                </div>
                <div className="page_body_post">
                <Postall2 />
                </div>

                <div className="page_body_post">
                <Postall2 />
                </div>
                <div className="page_body_post">
                <Postall2 />
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