import Header2 from './Header2'
import React, { Component ,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Row,Col,Nav,Container,Card } from 'react-bootstrap';
import expressicon from './Home/home_img/expressicon.svg'
import './post.css'

import testimg from './Home/home_img/testimg.jpg'
import ty from './Home/home_img/ty.jpg'
import catBag from './Home/home_img/catBag.jpeg'
import './commentgive.css'


const bootstrap = require('bootstrap')

function Commentgive() {
    
    const userimg = ty
    const imgpost = catBag
    const username = "JKloveU"
    const mode = "ให้ยืม"

    const topicName = "ให้เช่ากระเป๋าแมว"
    const itemName = "กระเป๋าแมว"
    const description = "แบบใสได้มาตรฐาน"
    const postID = "0410"
    const reward = "3"
    const getdate = "09/06/2564"
    const givedate = "12/06/2564"
    const place = "interzone"
    
    const date = getdate
    const typedate = "ให้ยืมวันที่"

const comment = "ต้องการยืม"

    const[commemt,setComment] = useState('')
    

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
                        <img className="post_user_img" src={ty} />
                        <div className="post_username">{username}</div>
               
                <div className="button">
                    <div className="butchat" >
                    <Button href="/chat" size="sm" >แชท</Button>
                    </div>
                    <div className="butpro" >
                    <Button href="/profile" size="sm">โปรไฟล์</Button>
                    </div>
                </div>
                </div>
            </Row>
            <hr width='85%' size='5' color='#770088'></hr>
            <Row>
                
                        <Col>
                        <div className="post_img">
                        <img className="imgpost" src={catBag} width='20%'/>
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
                            <b>{reward} บาท </b>
                        </div>
                        <div className="description">
                           <i> รายละเอียดเพิ่มเติม</i>
                            <div className="desbody">  
                            {description}
                            </div>
                        </div>
                        

                       <div className="butmode"><Button href="/comment_db" size="lg">{mode}</Button></div>
                        </div>
                        </Col>

            </Row>
            <Row>
            <div class="commentCard">
                <h4>ความคิดเห็น</h4>
                <textarea className="comment-area" 
           placeholder=" แสดงความคิดเห็นของคุณ" rows="1" />
                <div><button className="send-btn" type="submit">
                    ส่ง                   
                </button></div>
            </div>
            </Row>
            <div className="comment_post">

                Narinaja : "{comment}" "{itemName}"
            </div>

            </div>
        </div>
      </div> 
    );
}
  export default Commentgive;