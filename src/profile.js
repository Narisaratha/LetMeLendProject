
import Header2 from './Header2'
import ty from './Home/home_img/ty.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Col,Nav,Tabs, Tab, Modal, Row, Card, Container } from 'react-bootstrap';
import './profile.css';
const bootstrap = require('bootstrap')


function Profile() {

    return (
        <div className="profile_app">
        <Header2 />

        <div className="profile_header">
            <div className="upper-body">
                <Form.Group as={Row} controlId="R1">
                    <Col controlId="picBlock">
                        <img src={ty} className="profilePic_01" alt="profilePic_01" width="60%" />
                    </Col>
                    <Col controlId="dataBlock">
                        <Row>
                            <Col>
                            รีวิว: 5/5
                            </Col>
                            <Col>
                            <img src={ty} width="20%"/>
                            <img src={ty} width="20%"/>
                            <img src={ty} width="20%"/>
                            <img src={ty} width="20%"/>
                            <img src={ty} width="20%"/>
                            </Col>
                            <Col>53 รีวิว</Col>
                        </Row>
                        <Form.Group controlId="dataD">
                        <Row>
                            <b>ชื่อผู้ใช้:</b> Kimtae3012
                        </Row>
                        <Row>
                            <b>เขตพื้นที่:</b> หอใน C11, ธรรมศาสตร์ รังสิต
                        </Row>
                        <Row>
                            <b>ข้อมูลเพิ่มเติม:</b> สาขาวิชาวิทยาการคอมพิวเตอร์, วิทยาศาสตร์และเทคโนโลยี
                        </Row>
                        </Form.Group>
                    </Col>
                    <Col controlId="coinBlock">
                        <Row>
                                Coin: 9,500
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="primary">เติม Coin</Button>
                            </Col>
                            <Col>
                                <Button variant="secondary">แลก Coin</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Button type="submit">
                                แชท
                            </Button>
                        </Row>
                    </Col>
                </Form.Group>
                </div>
                
                <div className="lower-body">
                    <Row>
                        <Col>
                            <b>ขอยืม</b>
                        </Col>
                        <Col>
                            <b>ให้ยืม</b>
                        </Col>
                    </Row>
                    <Row>
                        <img src={ty} width="40%"></img>
                    </Row>
                </div>
            </div>


        </div>







    )
}

export default Profile;


