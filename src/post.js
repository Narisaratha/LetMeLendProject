import Header2 from './Header2'
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Row,Col,Nav,Container,Card } from 'react-bootstrap';
import expressicon from './Home/home_img/expressicon.svg'
import './post.css'

import testimg from './Home/home_img/testimg.jpg'
import ty from './Home/home_img/ty.jpg'


const bootstrap = require('bootstrap')

function Post() {
    const mode = "ขอยืม"
    const topicName = "ยืมตุ๊กตาไปกอดเล่นคืนนี้หน่อยสิคะตัวเอง"
    const price = "10"
    const description = "บลาๆๆๆๆาดาป่ือ่า่าิอแ้ปาีกเ้อแ่ืแาก่านเด้รีิอ้แก่ืพะท้านิ รแีป้ำิพะ ้ทิงาอฉฏง้วำฟพ่ใทอืาด่้่อกา่แร"
    const userimg = ty
    const username = "renebaebae"
    const ratingPoint = "3.1"
    const imgpost = testimg
    const getdate = "10/05/64"
    const givedate = "18/05/64"
    const place = "ทิวสน"

    return (
        
        <div className="app">    
        <div className="header">
         <Header2 />
        </div>
        
        <div className="title__header">
            {mode} - {topicName}    
        </div>    


        <div className="bodypost">
            <div className="col">
            <Row >
                <div className="head_post">
                        <img className="post_user_img" src={userimg} />
                        <div className="post_username">{username}</div>
                        <div className="post_rating">(Rating : {ratingPoint})</div>
               
                <div className="button">
                    <div className="butchat" >
                    <Button size="sm" >แชท</Button>
                    </div>
                    <div className="butpro" >
                    <Button size="sm">โปรไฟล์</Button>
                    </div>
                </div>
                </div>
            </Row>
            <hr width='85%' size='5' color='#770088'></hr>
            <Row>
                
                        <Col>
                        <div className="post_img">
                        <img className="imgpost" src={imgpost} width='20%'/>
                        <div className="posttext">
                        <b>ต้องการยืมวันที่ </b> <i>{getdate}</i><br></br>
                        <b>วันที่คืน </b><i>{givedate}</i><br></br>
                        <b>สถานที่แลกเปลี่ยน </b><i>{place} </i>   
                        </div>
                        </div>
                        </Col>
                       
                        <Col>
                        <div className='post_all'>
                        <div className="topicName">
                           <b>{topicName}</b>
                        </div>
                        <div className="price">
                            <b>{price} บาท </b>
                        </div>
                        <div className="description">
                           <i> รายละเอียดเพิ่มเติม</i>
                            <div className="desbody">  
                            {description}
                            </div>
                        </div>
                        

                       <div className="butmode"><Button size="lg">{mode}</Button></div>
                        </div>
                        </Col>

            </Row>
            </div>
        </div>
      </div> 
    );
}
  export default Post;