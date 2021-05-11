import './createpost2.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Row,Col } from 'react-bootstrap'

function Createpost2() {
  return (
    <div className="app">    
      <div className="app__header">
        <div className="text">  
          ยืมหน่อย
        </div> 
        </div>

      <div className="body_head">ขอยืม</div>

      <div className="body">
        <Form>
          <div className="picture">
            
          </div>
          <div className="topic">
            <Form.Group controlID="topic">
              <Form.Label>หัวข้อโพสต์</Form.Label>
              <Form.Control type="text" placeholder="ระบุหัวข้อ"></Form.Control>
            </Form.Group>
          </div>
          <div className="item">
            <Form.Group controlID="item">
              <Form.Label>สิ่งของที่ต้องการยืม</Form.Label>
              <Form.Control type="text" placeholder="ระบุสิ่งของ เช่น รองเท้า, เนคไท, พัดลม, ตุ๊กตา"></Form.Control>
            </Form.Group>
          </div>
          <div className="detail">
            <Form.Group controlID="detail">
              <Form.Label>รายละเอียดเพิ่มเติม</Form.Label>
              <Form.Control as="textarea" rows={3} type="text" placeholder="เพิ่มรายละเอียด"></Form.Control>
            </Form.Group>
          </div>
          <div className="reward">
            <Form.Group controlID="reward">
              <Form.Label>ค่าตอบแทน</Form.Label>
              <Form.Control type="number" placeholder="เพิ่มค่าตอบแทน (เหรียญ)"></Form.Control>
            </Form.Group>
          </div>
          <div className="date">
            <Form.Group controlID="date">
              <Row>
                <Col>
                  <Form.Label>วันที่ต้องการยืม</Form.Label>
                  <Form.Control type="date"></Form.Control>
                </Col>
                <Col>
                  <Form.Label>วันที่ต้องการคืน</Form.Label>
                  <Form.Control type="date"></Form.Control>
                </Col>
              </Row>
          </Form.Group>
          </div>
          <div className="place">
            <Form.Group controlID="place">
              <Form.Label>สถานที่แลกเปลี่ยน</Form.Label>
              <Form.Control type="text" placeholder="ระบุสถานที่"></Form.Control>
            </Form.Group>
          </div>
          <div className="highlightPost">
            <Form.Group controlID="highlightPost">
              <Form.Label>ท่านต้องการประกาศบนคำขอยืมพิเศษหรือไม่</Form.Label>
              <div className="radioCon">
                <Form.Check inline type="radio" label="ต้องการ" name="conRadio" id="conRadioY"/>
                <Form.Check inline type="radio" label="ไม่ต้องการ" name="conRadio" id="conRadioN"/>
              </div>
              <div className="warning">
                ***หากเลือกการขอยืมแบบพิเศษต้องกำหนดค่าตอบแทนขั้นต่ำ 10 เหรียญ
              </div>
            </Form.Group>
          </div>
          <div className="submit">
            <Button size="lg" type="submit">
              เผยแพร่โพสต์
            </Button>
          </div>
        </Form>
      </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default Createpost2;