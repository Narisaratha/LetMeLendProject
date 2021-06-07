
import axios from 'axios'
import Header2 from './Header2'
import Postall1 from './Home/postall1'
import Postall2 from './Home/postall2'
import {React, useState , Component} from 'react'
import ty from './Home/home_img/ty.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Col,Nav,Tabs, Tab, Modal, Row, Card, Container } from 'react-bootstrap';
import './profile.css';
const bootstrap = require('bootstrap')



class Profile extends Component {
    
   

    constructor(props) {
    super(props);

    this.state = {
        name: '',
        address: '',
        faculty: '',
        department: '',
        university: ''
    }
}



    
   
render() {


    return (
        <div className="profile_app">
        <Header2 />

        <div className="profile_topbody">

           
                <img className="profile_img" src={ty} width='20%' />
           

            <div className="profile_center">
                
                <div className="profile_detail">
                Username : <b>name</b><br></br>
                สถานที่ : <b>;;; </b><br></br>
                ข้อมูลเพิ่มเติม : <b>kkjkjk</b><br></br>
                </div>
            </div>

            <a href="/chat" className="profile_chat">
            <img  className="profile_icon_chat" href="/chat" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMS45OTkgNTExLjk5OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNTEwLjE1Niw0MDEuODQzTDQ4MC40MTksMzE1LjNjMTQuMzM0LTI5LjMwMiwyMS45MDktNjEuODksMjEuOTYtOTQuNjc5YzAuMDg4LTU3LjAxMy0yMS45Ny0xMTAuOTItNjIuMTEyLTE1MS43OSAgICBDNDAwLjExNywyNy45NTMsMzQ2LjYxNSw0Ljk0MiwyODkuNjE1LDQuMDM5QzIzMC41MSwzLjEwNSwxNzQuOTU0LDI1LjU4NywxMzMuMTg3LDY3LjM1MyAgICBjLTQwLjI3NCw0MC4yNzMtNjIuNjEyLDkzLjM2Ni02My4zMTksMTUwLjEwMkMzMC4xNzQsMjQ3LjM0MSw2Ljc0NSwyOTMuOTM2LDYuODIyLDM0My43MDUgICAgYzAuMDM3LDIzLjI5LDUuMjc5LDQ2LjQ0MSwxNS4yMTIsNjcuMzc2TDEuNTUxLDQ3MC42ODljLTMuNTIxLDEwLjI0Ny0wLjk0OSwyMS4zNzMsNi43MTMsMjkuMDM1ICAgIGM1LjM5Miw1LjM5MywxMi41MDEsOC4yNjQsMTkuODEyLDguMjY0YzMuMDc2LDAsNi4xODgtMC41MDgsOS4yMjMtMS41NTFsNTkuNjA5LTIwLjQ4M2MyMC45MzUsOS45MzMsNDQuMDg2LDE1LjE3NSw2Ny4zNzYsMTUuMjEyICAgIGMwLjA4NCwwLDAuMTY0LDAsMC4yNDgsMGM1MC41MS0wLjAwMiw5Ny40Ni0yNC4wMzUsMTI3LjIzNy02NC43MDJjMzAuOTg3LTAuODE2LDYxLjY0Ni04LjMxNyw4OS4zNjMtMjEuODc2bDg2LjU0NCwyOS43MzggICAgYzMuNjA2LDEuMjM5LDcuMzA0LDEuODQzLDEwLjk1OSwxLjg0M2M4LjY4OCwwLDE3LjEzNi0zLjQxMiwyMy41NDUtOS44MjJDNTExLjI4NCw0MjcuMjQyLDUxNC4zNCw0MTQuMDIxLDUxMC4xNTYsNDAxLjg0M3ogICAgIE0xNjQuNTMsNDcwLjY5Yy0wLjA2NSwwLTAuMTM0LDAtMC4xOTksMGMtMjAuNjE0LTAuMDMxLTQxLjA4NS01LjExMy01OS4xOTYtMTQuNjk1Yy0zLjcyNC0xLjk2OS04LjA5Ni0yLjMxLTEyLjA3OC0wLjk0MiAgICBsLTYxLjEyMywyMS4wMDNsMjEuMDAzLTYxLjEyMmMxLjM2OC0zLjk4MywxLjAyOC04LjM1NS0wLjk0Mi0xMi4wNzhjLTkuNTgyLTE4LjExMi0xNC42NjQtMzguNTgyLTE0LjY5Ni01OS4xOTcgICAgYy0wLjA1MS0zMy4xNTksMTIuODQ4LTY0LjU4OCwzNS40MDUtODguMTIyYzcuMzY4LDQ0LjkxNiwyOC43NzUsODYuMzA2LDYxLjk1NywxMTguODk4ICAgIGMzMi45MzcsMzIuMzUxLDc0LjMzOSw1Mi45NDksMTE5LjAxMSw1OS42ODNDMjMwLjA4NCw0NTcuMzY3LDE5OC4yODgsNDcwLjY5LDE2NC41Myw0NzAuNjl6IE00ODAuNjI4LDQxNC43OTcgICAgYy0wLjg2NywwLjg2Ny0xLjg5NSwxLjEwMy0zLjA1MSwwLjcwNWwtOTIuNjQ4LTMxLjgzNmMtMS42MDktMC41NTMtMy4yODMtMC44MjctNC45NTEtMC44MjdjLTIuNDU5LDAtNC45MDksMC41OTUtNy4xMjYsMS43NjkgICAgYy0yNi40NTMsMTMuOTk0LTU2LjM0NSwyMS40MTYtODYuNDQ3LDIxLjQ2MmMtMC4wOTksMC0wLjE4OSwwLTAuMjg4LDBjLTEwMC44NjMsMC0xODQuMTc2LTgxLjkzNC0xODUuNzc0LTE4Mi43NzMgICAgYy0wLjgwNS01MC43ODUsMTguNTEzLTk4LjUxNCw1NC4zOTQtMTM0LjM5NWMzNS44ODEtMzUuODgxLDgzLjYxOC01NS4xOTIsMTM0LjM5Ni01NC4zOTIgICAgYzEwMC45MzYsMS42MDEsMTgyLjkyNiw4NS4wNjgsMTgyLjc3LDE4Ni4wNjNjLTAuMDQ3LDMwLjEwMi03LjQ2OCw1OS45OTUtMjEuNDYxLDg2LjQ0NmMtMS45NywzLjcyMy0yLjMxLDguMDk1LTAuOTQyLDEyLjA3OCAgICBsMzEuODM1LDkyLjY0OEM0ODEuNzMyLDQxMi45MDUsNDgxLjQ5NCw0MTMuOTMyLDQ4MC42MjgsNDE0Ljc5N3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTM3Ni44OTIsMTM5LjUxMmgtMTgxLjU2Yy04LjQxNiwwLTE1LjIzOCw2LjgyMy0xNS4yMzgsMTUuMjM4YzAsOC40MTYsNi44MjMsMTUuMjM4LDE1LjIzOCwxNS4yMzhoMTgxLjU2ICAgIGM4LjQxNiwwLDE1LjIzOC02LjgyMywxNS4yMzgtMTUuMjM4QzM5Mi4xMywxNDYuMzM1LDM4NS4zMDgsMTM5LjUxMiwzNzYuODkyLDEzOS41MTJ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzYuODkyLDIwMi4xODNoLTE4MS41NmMtOC40MTYsMC0xNS4yMzgsNi44MjMtMTUuMjM4LDE1LjIzOHM2LjgyMywxNS4yMzgsMTUuMjM4LDE1LjIzOGgxODEuNTYgICAgYzguNDE2LDAsMTUuMjM4LTYuODIzLDE1LjIzOC0xNS4yMzhTMzg1LjMwOCwyMDIuMTgzLDM3Ni44OTIsMjAyLjE4M3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTMwNy4wMDQsMjY0Ljg1MkgxOTUuMzMxYy04LjQxNiwwLTE1LjIzOCw2LjgyMy0xNS4yMzgsMTUuMjM4YzAsOC40MTYsNi44MjMsMTUuMjM4LDE1LjIzOCwxNS4yMzhoMTExLjY3MiAgICBjOC40MTYsMCwxNS4yMzgtNi44MjMsMTUuMjM4LTE1LjIzOEMzMjIuMjQxLDI3MS42NzUsMzE1LjQyLDI2NC44NTIsMzA3LjAwNCwyNjQuODUyeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLz
                        IwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4="  width='13%' height='13%' />
                <div className="profile_text_chat">แชท</div>
            </a>
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


