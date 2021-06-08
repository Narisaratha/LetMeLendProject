import Header2 from './Header2'
import React, { Component ,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Row,Col,Nav,Container,Card } from 'react-bootstrap';
import expressicon from './Home/home_img/expressicon.svg'
import './post.css'

import testimg from './Home/home_img/testimg.jpg'
import ty from './Home/home_img/ty.jpg'
import cal from './Home/home_img/cal.jpeg'
import './commentgive.css'


const bootstrap = require('bootstrap')

function Commentgive() {
    
const topicName5 = "ขอยืมเครื่องคิดเลขหน่อยค่ะ"
const itemName5 = "เครื่องคิดเลข"
const description5 = "ขอเครื่องคิดเลขที่หาค่าพาย รูท ln ได้ค่ะ"
const postID5 = "3422"
const reward5 = "10"
const getdate5 = "04/06/2564"
const givedate5 = "07/06/2564"
const place5 = "หอใน C3 ธรรมศาสตร์ รังสิต"
const mode = "ขอยืม"

const username1 = "Narinaja"
const username2 = "Mintzaa"
const username3 = "Aumei"
const username4 = "Nt123"
const username5 = "Jkjk"

const comment = "เสนอให้คุณยืม"

    const[commemt,setComment] = useState('')
    

    return (
        
        <div className="app">    
        <div className="header">
         <Header2 />
        </div>
        
        <div className="title__header">
            {mode} - {topicName5}    
        </div>    


        <div className="bodypost">
            <div className="col">
            <Row >
                <div className="head_post">
                        <img className="post_user_img" src={ty} />
                        <div className="post_username">{username1}</div>
               
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
                        <img className="imgpost" src={cal} width='20%'/>
                        <div className="posttext">
                        <b>ต้องการยืมวันที่ </b> <i>{getdate5}</i><br></br>
                        <b>วันที่คืน </b><i>{givedate5}</i><br></br>
                        <b>สถานที่แลกเปลี่ยน </b><i>{place5} </i>   
                        </div>
                        </div>
                        </Col>
                       
                        <Col>
                        <div className='post_all'>
                        <div className="topicName">
                           <b>{topicName5}</b>
                        </div>
                        <div className="price">
                            <b>{reward5} บาท </b>
                        </div>
                        <div className="description">
                           <i> รายละเอียดเพิ่มเติม</i>
                            <div className="desbody">  
                            {description5}
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

                Narinaja : "{comment}" "{itemName5}"
            </div>

            </div>
        </div>
      </div> 
    );
}
  export default Commentgive;