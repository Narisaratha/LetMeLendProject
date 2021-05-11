import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Col,Row,Nav,container } from 'react-bootstrap';
import expressicon from './home_img/expressicon.svg'
import './express.css'

import Test from './expressdb'



class Express extends Component {

    render() {
        return (
          
            <div className="bodyex">
                <div className="container">
                <div className="head_icon">
                <img src={expressicon} width='30px' />
                </div>
                <div className="textex">
                ขอยืมเร่งด่วนพิเศษ
               </div>
               </div>
               <hr width='100%' size='5' color='#770088'></hr>
               <div className="order">
               <div className="1">
               <Row>
                    <Col>ค่ายืม</Col>
                    <Col>หัวข้อ</Col>
                    <Col>วันที่ต้องการยืม</Col>
                </Row>
               </div>
               <div className="2">
               <Row>
                    <Col>ค่ายืม</Col>
                    <Col>หัวข้อ</Col>
                    <Col>วันที่ต้องการยืม</Col>
                </Row>
               </div>
               <div className="3">
               <Row>
                    <Col>ค่ายืม</Col>
                    <Col>หัวข้อ</Col>
                    <Col>วันที่ต้องการยืม</Col>
                </Row>
               </div>
               </div>
            </div>
        );
    }
}

export default Express;