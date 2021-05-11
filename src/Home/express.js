import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Col,Row,Nav,container } from 'react-bootstrap';
import expressicon from './home_img/expressicon.svg'
import './express.css'

import Test from './expressdb'



 function Express() {

    const price = "10"
    const topicName = "ขอยืมหน่อยค้าาาาาาาาhhhhhhhhhhhhhhhhhhhhhhhาาาาา"
    const getdate = "10/05/2564"

      return (
          
            <div className="bodyex">
                <div className="ex_container">
                
                <img className="ex_head_icon" src={expressicon} width='5%' />
               
                <div className="textex">
                ขอยืมเร่งด่วนพิเศษ
               </div>
               </div>

               <hr width='100%' size='5' color='#770088'></hr>
           
               <div className="order">
                    <div className="exorder">
                        <Row>
                        <div className="ex_price"><Col><i>{price} บาท</i></Col></div>
                        <div className="ex_topic"><Col><b><a href="#"><font color="red">{topicName}</font></a></b></Col></div>
                        <div className="ex_getdate"><Col><i>วันที่ต้องการยืม {getdate}</i></Col></div>
                        </Row> 
                    </div>
                    <div className="exorder">
                        <Row>
                        <div className="ex_price"><Col><i>{price} บาท</i></Col></div>
                        <div className="ex_topic"><Col><b><a href="#"><font color="red">{topicName}</font></a></b></Col></div>
                        <div className="ex_getdate"><Col><i>วันที่ต้องการยืม {getdate}</i></Col></div>
                        </Row> 
                    </div>
                    <div className="exorder">
                        <Row>
                        <div className="ex_price"><Col><i>{price} บาท</i></Col></div>
                        <div className="ex_topic"><Col><b><a href="#"><font color="red">{topicName}</font></a></b></Col></div>
                        <div className="ex_getdate"><Col><i>วันที่ต้องการยืม {getdate}</i></Col></div>
                        </Row> 
                    </div>
                    <div className="exorder">
                        <Row>
                        <div className="ex_price"><Col><i>{price} บาท</i></Col></div>
                        <div className="ex_topic"><Col><b><a href="#"><font color="red">{topicName}</font></a></b></Col></div>
                        <div className="ex_getdate"><Col><i>วันที่ต้องการยืม {getdate}</i></Col></div>
                        </Row> 
                    </div>  
                    <div className="exorder">
                        <Row>
                        <div className="ex_price"><Col><i>{price} บาท</i></Col></div>
                        <div className="ex_topic"><Col><b><a href="#"><font color="red">{topicName}</font></a></b></Col></div>
                        <div className="ex_getdate"><Col><i>วันที่ต้องการยืม {getdate}</i></Col></div>
                        </Row> 
                    </div>  
                    <div className="exorder">
                        <Row>
                        <div className="ex_price"><Col><i>{price} บาท</i></Col></div>
                        <div className="ex_topic"><Col><b><a href="#"><font color="red">{topicName}</font></a></b></Col></div>
                        <div className="ex_getdate"><Col><i>วันที่ต้องการยืม {getdate}</i></Col></div>
                        </Row> 
                    </div>   
                    <div className="exorder">
                        <Row>
                        <div className="ex_price"><Col><i>{price} บาท</i></Col></div>
                        <div className="ex_topic"><Col><b><a href="#"><font color="red">{topicName}</font></a></b></Col></div>
                        <div className="ex_getdate"><Col><i>วันที่ต้องการยืม {getdate}</i></Col></div>
                        </Row> 
                    </div>  
                    <div className="exorder">
                        <Row>
                        <div className="ex_price"><Col><i>{price} บาท</i></Col></div>
                        <div className="ex_topic"><Col><b><a href="#"><font color="red">{topicName}</font></a></b></Col></div>
                        <div className="ex_getdate"><Col><i>วันที่ต้องการยืม {getdate}</i></Col></div>
                        </Row> 
                    </div>  
                    <div className="exorder">
                        <Row>
                        <div className="ex_price"><Col><i>{price} บาท</i></Col></div>
                        <div className="ex_topic"><Col><b><a href="#"><font color="red">{topicName}</font></a></b></Col></div>
                        <div className="ex_getdate"><Col><i>วันที่ต้องการยืม {getdate}</i></Col></div>
                        </Row> 
                    </div>     
                     
               </div>
            </div>
        );
    }


export default Express;