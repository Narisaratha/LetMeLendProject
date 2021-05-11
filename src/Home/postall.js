import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Row,Col,Nav,container,Card } from 'react-bootstrap';
import expressicon from './home_img/expressicon.svg'
import './postall.css'
import testimg from './home_img/testimg.jpg'
import ty from './home_img/ty.jpg'




function Postall1() {
 
    const userimg = ty
    const imgpost = testimg
    const username = "JKloveU"
    const mode = "get"
    const topicName = "8hkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
    const price = "10"
    const getdate = "10/05/2562"
    const givedate = "11/08/2562"
    const date = getdate
    const typedate = "ให้ยืมวันที่"
 
        return(

            <div className="bodypost">
            <div className="container">
                 <Row>
                    <Col>
                    <div className="post">
                    <Card style={{ width: '16rem' },{height: '25%'}}>
                    <Card.Img variant="top" src={imgpost} />
                    <Card.Body>

                        <div className="card_body">
                        <Card.Title>
                            <div className="postall_head">
                                <img className="postall_userimg" src={ty} width='10%'></img>
                                <a className="postall_username" href="#"><font color="black">{username}</font></a>
                            </div>
                        </Card.Title>

                        
                        <Card.Text>
                           <a className="postall_topic" href="#"><font color="black"><b>{topicName}</b></font></a>
                        </Card.Text>

                        <Card.Text>
                            <div className="price_date">
                           <a className="postall_price"><b>{price} บาท</b></a>
                           <a className="postall_date"><b>{typedate} {date}</b></a>
                           </div>
                        </Card.Text>
                        </div>

                        <div className="bottom">
                            <Button className="toget"  variant="primary">ยืมมั้ย</Button>
                            <Button className="tochat" variant="primary">แชท</Button>
                        </div>
                    </Card.Body>
                    </Card>
                    </div>
                    </Col>

                    <Col>
                    <div className="post">
                    <Card style={{ width: '16rem' },{height: '25%'}}>
                    <Card.Img variant="top" src={imgpost} />
                    <Card.Body>

                        <div className="card_body">
                        <Card.Title>
                            <div className="postall_head">
                                <img className="postall_userimg" src={ty} width='10%'></img>
                                <a className="postall_username" href="#"><font color="black">{username}</font></a>
                            </div>
                        </Card.Title>

                        
                        <Card.Text>
                           <a className="postall_topic" href="#"><font color="black"><b>{topicName}</b></font></a>
                        </Card.Text>

                        <Card.Text>
                            <div className="price_date">
                           <a className="postall_price"><b>{price} บาท</b></a>
                           <a className="postall_date"><b>{typedate} {date}</b></a>
                           </div>
                        </Card.Text>
                        </div>

                        <div className="bottom">
                            <Button className="toget"  variant="primary">ยืมมั้ย</Button>
                            <Button className="tochat" variant="primary">แชท</Button>
                        </div>
                    </Card.Body>
                    </Card>
                    </div>
                    </Col>
                    
                    <Col>
                    <div className="post">
                    <Card style={{ width: '16rem' },{height: '25%'}}>
                    <Card.Img variant="top" src={imgpost} />
                    <Card.Body>

                        <div className="card_body">
                        <Card.Title>
                            <div className="postall_head">
                                <img className="postall_userimg" src={ty} width='10%'></img>
                                <a className="postall_username" href="#"><font color="black">{username}</font></a>
                            </div>
                        </Card.Title>

                        
                        <Card.Text>
                           <a className="postall_topic" href="#"><font color="black"><b>{topicName}</b></font></a>
                        </Card.Text>

                        <Card.Text>
                            <div className="price_date">
                           <a className="postall_price"><b>{price} บาท</b></a>
                           <a className="postall_date"><b>{typedate} {date}</b></a>
                           </div>
                        </Card.Text>
                        </div>

                        <div className="bottom">
                            <Button className="toget"  variant="primary">ยืมมั้ย</Button>
                            <Button className="tochat" variant="primary">แชท</Button>
                        </div>
                    </Card.Body>
                    </Card>
                    </div>
                    </Col>
                </Row>
                </div>
            </div>

        )
}

export default Postall1;