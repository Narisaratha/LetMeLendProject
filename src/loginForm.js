
import Header from './Header'
import Login from './login'
import './login.css';
import { Form,Button,Col } from 'react-bootstrap';
import React,{useState} from 'react'



function LoginForm({Login,error}){
    const[details,setDetails] = useState({username:"",password:""})

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

return(

    <div className="login_app">    
            <div >
              <Header />
            </div>
            <div className="login_body_head">
            ยืมหน่อย
            </div>
            
    <div className="login_body">       
    <Form onSubmit={submitHandler}>
            <div className="login_username">
                <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <input type="text" placeholder="username" onChange={e => setDetails({...details,username: e.target.value})} value={details.username} />
            </Form.Group>   
        </div> 

        <div className="login_password"> 
            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <input type="password" placeholder="password" onChange={e => setDetails({...details,password: e.target.value})} value={details.password} />
            </Form.Group>
        </div>
        {(error != "") ? (<div className="error">{error}</div>) : ""}
        <div className="login_submit">    
            <Button className="login_but" variant="primary" type="submit">
                เข้าสู่ระบบ
            </Button>
        </div>
      </Form>

  </div>   
  </div>   

   )
}
export default LoginForm;