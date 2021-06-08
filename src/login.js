import LoginForm from './loginForm';
import Home2 from './home2';
import Header from './Header'
import {Link, Route, Switch} from 'react-router-dom'
import { Form,Button,Col } from 'react-bootstrap';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React ,{useState} from 'react'
const bootstrap = require('bootstrap')





function Login() {
  const exUser = {
    username: "Narinaja",
    password: "12345"
  }

  const [user,setUser] = useState ({username:"", password:""});
  const [error , setError] = useState("");

  const Login = details => {
    console.log(details);
  
    if(details.username == exUser.username && details.password == exUser.password){
    console.log("Logged in");
      setUser({
        username: details.name,
        password: details.password
      });

    } else {
      console.log("Details do not match!")
      setError("ไม่มีบัญชีนี้อยู่ในระบบ กรุณาลองใหม่อีกครั้ง!")
    }
  }

 return (


  <div className="App">
    {( user.username != "" ) ? (
      <Home2 />
    ) : (
      <LoginForm Login={Login} error={error} />
    ) }
  </div>

  );
}

export default Login;