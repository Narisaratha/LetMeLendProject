//ก่อนล็อกอิน


import Header2 from './Header2'
import ty from './Home/home_img/ty.jpg'
import Page1 from './Home/page1'
import Page2 from './Home/page2'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Col,Nav,Tabs, Tab, Modal, Row, Card, Container } from 'react-bootstrap';
import './home2.css';
const bootstrap = require('bootstrap')


function Home2() {
  
  return (
  
     <div className="app"> 
        <div>
          <Header2 />
        </div> 
        <Button className="createbutton">
          <img className="imginbutton" src={ty} width='40%'></img>
          <div className="textin_create">
            <b>สร้างโพสต์</b>
          </div>
        </Button> 

      <div className="home2_body_head">
      <Container>
                 <Row>
                     <Col>
                         <Tabs defaultActiveKey="Page1" 
                               id="controlled-tab-example">
                             <Tab eventKey="Page1" title="ขอยืม">
                                 <Page1 />
                             </Tab>
                             <Tab eventKey="Page2" title="ให้ยืม">
                                 <Page2 />
                             </Tab>
                         </Tabs>
                     </Col>
                 </Row>
             </Container>
      </div>
      </div>
 
  );
}

export default Home2;