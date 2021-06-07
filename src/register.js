
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import Header from './Header'
import {Link, Route, Switch} from 'react-router-dom'
import { Form,Button,Col } from 'react-bootstrap';
import './register.css';
import React from 'react'
import { Component } from 'react';
const bootstrap = require('bootstrap')




export default class Register extends Component {
    constructor(){
      super()
      this.state = {
        fullname:'',
        email: '',
        university: 'มหาวิทยาลัยธรรมศาสตร์',
        department: '',
        faculty: '',
        studentid: '',
        contactNumber: '',
        username:'',
        password: '',
        confirmpassword: '',
        address: ''
      }
      this.changeFullname = this.changeFullname.bind(this)
      this.changeEmail = this.changeEmail.bind(this)
      this.changeUniversity = this.changeUniversity.bind(this)
      this.changeDepartment = this.changeDepartment.bind(this)
      this.changefaculty = this.changefaculty.bind(this)
      this.changeStudentid = this.changeStudentid.bind(this)
      this.changeContactnumber = this.changeContactnumber.bind(this)
      this.changeUsername = this.changeUsername.bind(this)
      this.changePassword = this.changePassword.bind(this)
      this.changeConfirmpassword = this.changeConfirmpassword.bind(this)
      this.changeAddress = this.changeAddress.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
    }

    changeFullname(event){
      this.setState({
        fullname:event.target.value
      })
    }
    changeEmail(event){
      this.setState({
        email:event.target.value
      })
    }
    changeUniversity(event){
      this.setState({
        university:event.target.value
      })
    }
    changeDepartment(event){
      this.setState({
        department:event.target.value
      })
    }
    changefaculty(event){
      this.setState({
        faculty:event.target.value
      })
    }
    changeStudentid(event){
      this.setState({
        studentid:event.target.value
      })
    }
    changeContactnumber(event){
      this.setState({
        contactnumber:event.target.value
      })
    }
    changeUsername(event){
      this.setState({
        username:event.target.value
      })
    }
    changePassword(event){
      this.setState({
        password:event.target.value
      })
    }
    changeConfirmpassword(event){
      this.setState({
        confirmpassword:event.target.value
      })
    }
    changeAddress(event){
      this.setState({
        address:event.target.value
      })
    }

    onSubmit(event){

      this.props.history.push('/login')
      event.preventDefault()

      const registered = {
        fullname: this.state.fullname,
        email: this.state.email,
        university: this.state.university,
        department: this.state.department,
        faculty: this.state.faculty,
        studentid: this.state.studentid,
        contactnumber: this.state.contactnumber,
        username: this.state.username,
        password: this.state.password,
        confirmpassword: this.state.confirmpassword,
        address: this.state.address
      }

      axios.post('http://localhost:4000/user/create-user', registered)
      .then(response => console.log(response.data))

      this.setState({
        fullname:'',
        email: '',
        university: 'มหาวิทยาลัยธรรมศาสตร์',
        department: '',
        faculty: '',
        studentid: '',
        contactNumber: '',
        username:'',
        password: '',
        confirmpassword: '',
        address: ''
      })

    }

  render(){
  return (
   <div className="register_app">
            <div >
              <Header />
            </div>

     <div className="register_body_head">
     สมัครสมาชิก
     </div>

     <div className="register_body">
    <div className="register_form">
     <Form onSubmit={this.onSubmit}>
       <div className="name">
      <Form.Group controlId="name">
          <Form.Label>ชื่อ-นามสกุล</Form.Label>

          <Form.Control type="text"
          placeholder="ชื่อ-นามสกุล"
          onChange={this.changeFullname}
          value={this.state.fullname} />

      </Form.Group>
      </div>

      <div className="picture">
                    <Form.Group controlId="picture">
                        <Form.Label>รูปโปรไฟล์</Form.Label>
                        <Form.Control type="file" id="picFile" />
                    </Form.Group>
      </div>

      <div className="email">
      <Form.Group   controlId="email">
          <Form.Label>E-mail</Form.Label>

          <Form.Control type="email"
          placeholder="E-mail"
          onChange={this.changeEmail}
          value={this.state.email}
          />
      </Form.Group>
      </div>

      <div className="university">
      <Form.Group  controlId="university">
          <Form.Label>มหาวิทยาลัย</Form.Label>

          <Form.Control  as="select"
          onChange={this.changeUniversity}
          value={this.state.university}>
            <option>มหาวิทยาลัยธรรมศาสตร์</option>
            <option>มหาวิทยาลัยกรุงเทพ</option>
          </Form.Control>

      </Form.Group>
      </div>

      <div className="department">
      <Form.Group  controlId="department">
          <Form.Label>สาขา</Form.Label>

          <Form.Control  type="text"
          placeholder="สาขา"
          onChange={this.changeDepartment}
          value={this.state.department} />

      </Form.Group>
      </div>

      <div className="faculty">
      <Form.Group  controlId="faculty">
          <Form.Label>คณะ</Form.Label>

          <Form.Control  type="text"
          placeholder="คณะ"
          onChange={this.changefaculty}
          value={this.state.faculty} />

      </Form.Group>
      </div>

      <div className="studentID">
      <Form.Group  controlId="studentID">
          <Form.Label>รหัสนักศึกษา</Form.Label>

          <Form.Control type="text"
          placeholder="รหัสนักศึกษา"
          onChange={this.changeStudentid}
          value={this.state.studentid} />

      </Form.Group>
      </div>

      <div className="username">
      <Form.Group  controlId="username">
          <Form.Label>Username</Form.Label>

          <Form.Control type="text"
          placeholder="Username"
          onChange={this.changeUsername}
          value={this.state.username} />

      </Form.Group>
      </div>

      <div className="contactNumber">
      <Form.Group controlId="contactNumber">
          <Form.Label>เบอร์โทรศัพท์</Form.Label>

          <Form.Control type="text"
          placeholder="**********"
          onChange={this.changeContactnumber}
          value={this.state.contactnumber}/> 

      </Form.Group>
      </div>

      <div className="password">
      <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>

          <Form.Control type="password"
          placeholder="Password"
          onChange={this.changePassword}
          value={this.password}/>

      </Form.Group>
      </div>

      <div className="address">
      <Form.Group size="lg"  controlId="address">
          <Form.Label>ที่อยู่</Form.Label>

          <Form.Control as="textarea" rows={3} type="text" placeholder=""
          onChange={this.changeAddress}
          value={this.state.address} />

      </Form.Group>
      </div>

      <div className="confirmpassword">
      <Form.Group controlId="confirmpassword">
          <Form.Label>ยืนยัน Password</Form.Label>

          <Form.Control type="password"
          placeholder="Password"
          onChange={this.changeConfirmpassword}
          value={this.state.confirmpassword}/>

      </Form.Group>
      </div>

     
        <Button className="register_submit" size="lg"  type="submit" value='submit'  >
          สมัครสมาชิก
        </Button>
     </Form>
      </div>
     </div>

     
     
  </div>
  );
}
}

