
import axios from 'axios'
import Header2 from './Header2'
import Postall1 from './Home/postall1'
import Postall2 from './Home/postall2'
import {React, useState , Component, props,Catch} from 'react'
import ty from './Home/home_img/ty.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Col,Nav,Tabs, Tab, Modal, Row, Card, Container } from 'react-bootstrap';
import './profile.css';
const bootstrap = require('bootstrap')



class Profile extends Component {
    
   

    constructor(props) {
    super(props);

    this.state = {
        fullname:'',
        address: '',
        department: '',
        faculty: '',
        university: ''
    }

    
}

    componentDidMount() {
        this.state.studentid = "6109680261"
        
        axios.get('http://localhost:4000/user/edit-user/' ).
        then(res=> {
            this.setState({
                name: "Narinaja",
                address: "หอใน C5",
                faculty: "วิทยาศาสตร์",
                university: "TU"
            })
        }).catch((error) => {
            console.log(error)
        })
        
    }

   

   

  
  



    
   
render() {
    const name= "Narinaja"
   const address= "หอใน C5"
    const faculty= "วิทยาศาสตร์"
    const department = "คอมพิวเตอร์"
    const university = "TU"

    return (
        <div className="profile_app">
        <Header2 />

        <div className="profile_topbody">

           
                <img className="profile_img" src={ty} width='20%' />
           

            <div className="profile_center">
                
                <div className="profile_detail">
                Username : <b>{name}</b><br></br>
                สถานที่ : <b>{address} </b><br></br>
                ข้อมูลเพิ่มเติม : <b>{department} {faculty} {university}</b><br></br>
                </div>
            </div>

            
        </div>

        <div className="profile_post_body">
            
                <Button className="profile_get"  >ขอยืม</Button>
                <Button className="profile_give"  >ให้ยืม</Button>

                <div className="post_in_profile">
               
                </div>
                
            
        </div>
</div>







    )
}
}

export default Profile;


