
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Col,Nav } from 'react-bootstrap';
import './header2.css';
import ty from './Home/home_img/ty.jpg'
import chaticon from './Home/home_img/chaticon.svg'
import React, {Component, useState} from 'react'
const bootstrap = require('bootstrap')


export default class Header2 extends Component {
    render(){

        const username = "renebaebae"


        return(
                <div className="app__header">
                    <div className="text">
                    ยืมหน่อย
                    </div>           
                    <Form>
                    <div className="inputsearch">
                        <Form.Group controlId="inputsearch">
                            <Form.Control type="text" placeholder="Search" />
                        </Form.Group>
                    </div>
                    <div className="submit">
                        <Button variant="outline-info"  type="submit">
                        ค้นหา
                        </Button>
                    </div>
                    </Form> 

                        <div className="profileheader">
                        <img className="header_user_img" src={ty} width='10%' />
                        <div className="header_username">{username}</div>
                        </div>  
                        <img className="chatheader" src={chaticon} width='5%' />
                      
        </div> 
        )


    }
}













