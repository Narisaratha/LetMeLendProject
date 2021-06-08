//ขอยืม

import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home2 from '../home2'
import { Form,Button,Col,Nav } from 'react-bootstrap';
import Express from './express'
import Postall1 from './postall1'
import Postall12 from './postall1 2'
import Postall13 from './postall1 3'
import Postall14 from './postall1 4'
import Postall15 from './postall1 5'
import "./page.css"


function Page1() {
    
    const[mode,setMode] = useState('get')

    
        return (
            <div>  
                <div className="page_body_ex">   
                <Express/>
                </div>  
                <div className="page_body">
                <div className="rowpost">
                <div className="page_body_post">
                <Postall1 />
                </div>
                <div className="page_body_post">
                <Postall12 />
                </div>
                <div className="page_body_post">
                <Postall13 />
                </div>

                <div className="page_body_post">
                <Postall14 />
                </div>
                <div className="page_body_post">
                <Postall15 />
                </div>
               
                </div>
                </div>
            </div>
        );
    }


export default Page1;