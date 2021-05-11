
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import { Form,Button,Col } from 'react-bootstrap';
import './register.css';
import React from 'react'
const bootstrap = require('bootstrap')




function Register() {
  return (
   <div className="app">
            <div >
              <Header />
            </div>

     <div className="register_body_head">
     สมัครสมาชิก
     </div>

     <div className="register_body">
    <div className="register_form">
     <Form>
       <div className="name">
      <Form.Group controlId="name">
          <Form.Label>ชื่อ-นามสกุล</Form.Label>
          <Form.Control type="text" placeholder="ชื่อ-นามสกุล" />
      </Form.Group>
      </div>
      <div className="email">
      <Form.Group   controlId="email">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="E-mail" />
      </Form.Group>
      </div>

      <div className="university">
      <Form.Group  controlId="university">
          <Form.Label>มหาวิทยาลัย</Form.Label>
          <Form.Control  as="select">
            <option>มหาวิทยาลัยธรรมศาสตร์</option>
            <option>มหาวิทยาลัยกรุงเทพ</option>
          </Form.Control>
      </Form.Group>
      </div>
      <div className="department">
      <Form.Group  controlId="department">
          <Form.Label>สาขา</Form.Label>
          <Form.Control  type="text" placeholder="สาขา" />
      </Form.Group>
      </div>
      <div className="faculty">
      <Form.Group  controlId="faculty">
          <Form.Label>คณะ</Form.Label>
          <Form.Control  type="text" placeholder="คณะ" />
      </Form.Group>
      </div>

      <div className="studentID">
      <Form.Group  controlId="studentID">
          <Form.Label>รหัสนักศึกษา</Form.Label>
          <Form.Control type="text" placeholder="รหัสนักศึกษา" />
      </Form.Group>
      </div>
      <div className="username">
      <Form.Group  controlId="ีusername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" />
      </Form.Group>
      </div>

      <div className="contactNumber">
      <Form.Group controlId="contactNumber">
          <Form.Label>เบอร์โทรศัพท์</Form.Label>
          <Form.Control type="text" placeholder="**********" /> 
      </Form.Group>
      </div>
      <div className="password">
      <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      </div>

      <div className="address">
      <Form.Group size="lg" as={Col} controlId="address">
          <Form.Label>ที่อยู่</Form.Label>
          <Form.Control as="textarea" rows={3} type="text" placeholder="" />
      </Form.Group>
      </div>
      <div className="confirmpassword">
      <Form.Group controlId="confirmpassword">
          <Form.Label>ยืนยัน Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      </div>

      <div className="submit">
        <Button size="lg"  type="submit">
          สมัครสมาชิก
        </Button>
      </div>
      </Form>
      </div>
     </div>

     
     
  </div>
  );
}


export default Register;
