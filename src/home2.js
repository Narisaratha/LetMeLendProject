//ก่อนล็อกอิน


import Header1 from './Header2'
import Page1 from './Home/page1'
import Page2 from './Home/page2'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Col,Nav,Tabs, Tab, Modal, Row, Card, Container } from 'react-bootstrap';
import './home1.css';
const bootstrap = require('bootstrap')


function Home2() {
  
  return (
  
     <div className="app"> 
        <div>
          <Header1/>
        </div>   
      <div className="body_head">
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