import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Row,Col,Nav,container,Card } from 'react-bootstrap';
import expressicon from './home_img/expressicon.svg'
import './postall.css'
import testimg from './home_img/testimg.jpg'

class Postall2 extends Component {

    render() {
        return(

            <div className="bodypost">
            <div className="container">
                 <Row>
                    <Col>
                    <div className="post1">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={testimg} />
                    <Card.Body>
                        <Card.Title>ชื่อผู้โพสต์</Card.Title>
                        <Card.Text>
                        หัวข้อ
                        </Card.Text>
                        <div className="bottom">
                        <Button  variant="primary">ยืมหน่อย</Button>
                        </div>
                        <div className="bottom">
                        <Button  variant="primary">แชท</Button>
                        </div>
                    </Card.Body>
                    </Card>
                    </div>
                    </Col>

                    <Col>
                    <div className="post">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={testimg} />
                    <Card.Body>
                        <Card.Title>ชื่อผู้โพสต์</Card.Title>
                        <Card.Text>
                        หัวข้อ
                        </Card.Text>
                        <div className="bottom">
                        <Button  variant="primary">ยืมหน่อย</Button>
                        </div>
                        <div className="bottom">
                        <Button  variant="primary">แชท</Button>
                        </div>
                    </Card.Body>
                    </Card>
                    </div>
                    </Col>
                    
                    <Col>
                    <div className="post">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={testimg} />
                    <Card.Body>
                        <Card.Title>ชื่อผู้โพสต์</Card.Title>
                        <Card.Text>
                        หัวข้อ
                        </Card.Text>
                        <div className="bottom">
                        <Button  variant="primary">ยืมหน่อย</Button>
                        </div>
                        <div className="bottom">
                        <Button  variant="primary">แชท</Button>
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
}
export default Postall2;