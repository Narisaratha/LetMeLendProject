import './createpost2.css';
import Header from './Header'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Row,Col } from 'react-bootstrap'

function Createpost2() {
  return (
    <div className="create2_app">    
      <div >
        <Header />
        </div>

      <div className="create2_body_head">ขอยืม</div>

      <div className="create2_body">
        <Form>
          <div className="create2_picture">
            
          </div>
        <Row>
         <Col>
          เพิ่มรูป
         </Col>
        <Col>
        <Row>
          <div className="create2_topic">
            <Form.Group controlID="topic">
              <Form.Label>หัวข้อโพสต์</Form.Label>
              <Form.Control type="text" placeholder="ระบุหัวข้อ"></Form.Control>
            </Form.Group>
          </div>
          </Row>
          <Row>
          <div className="create2_item">
            <Form.Group controlID="item">
              <Form.Label>สิ่งของที่ต้องการยืม</Form.Label>
              <Form.Control type="text" placeholder="ระบุสิ่งของ เช่น รองเท้า, เนคไท, พัดลม, ตุ๊กตา"></Form.Control>
            </Form.Group>
          </div>
          </Row>
          </Col>
          </Row>

          <div className="create2_detail">
            <Form.Group controlID="detail">
              <Form.Label>รายละเอียดเพิ่มเติม</Form.Label>
              <Form.Control as="textarea" rows={3} type="text" placeholder="เพิ่มรายละเอียด"></Form.Control>
            </Form.Group>
          </div>
          <div className="create2_reward">
            <Form.Group controlID="reward">
              <Form.Label>ค่าตอบแทน</Form.Label>
              <Form.Control type="text" placeholder="เพิ่มค่าตอบแทน (เหรียญ)"></Form.Control>
            </Form.Group>
          </div>
          <div className="create2_date">
            <Form.Group controlID="date">
              
              <div className="create2_getdate">
                  <Form.Label>วันที่ต้องการยืม</Form.Label>
                  <Form.Control type="date"></Form.Control>
              </div>
              <div className="create2_givedate">
                  <Form.Label>วันที่ต้องการคืน</Form.Label>
                  <Form.Control type="date"></Form.Control>
              </div>
          </Form.Group>  
          </div>


          <div className="create2_place">
            <Form.Group controlID="place">
              <Form.Label>สถานที่แลกเปลี่ยน</Form.Label>
              <Form.Control type="text" placeholder="ระบุสถานที่"></Form.Control>
            </Form.Group>
          </div>
          <div className="create2_highlightPost">
            <Form.Group controlID="highlightPost">
              <Form.Label>ท่านต้องการประกาศบนคำขอยืมพิเศษหรือไม่</Form.Label>
              <div className="create2_radioCon">
                <Form.Check inline type="radio" label="ต้องการ" name="conRadio" id="conRadioY"/>
                <Form.Check inline type="radio" label="ไม่ต้องการ" name="conRadio" id="conRadioN"/>
              </div>
              <div className="create2_warning">
                ***หากเลือกการขอยืมแบบพิเศษต้องกำหนดค่าตอบแทนขั้นต่ำ 10 เหรียญ
              </div>
            </Form.Group>
          </div>
          
            <Button className="createbut2" href="./createpost_db" size="lg" type="submit">
              สร้างโพสต์
            </Button>
      
        </Form>
      </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default Createpost2;