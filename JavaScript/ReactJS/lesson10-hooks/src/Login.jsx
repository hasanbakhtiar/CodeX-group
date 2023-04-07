import { useState } from "react";
import { Container,  Button, Form, Col } from "react-bootstrap";
import userdata from "./data/userData";
import { useNavigate } from "react-router-dom";



const Login = () => {

    const navigate = useNavigate();
    
    

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [info,setInfo] = useState({
        alertStyle:"",
        alertText:""
    });

    const formSubmit=e=>{
        e.preventDefault();
        if (!email || !password) {
            setInfo({
                alertStyle:"warning",
                alertText:"please,fill input."
            })
        }else{

            if (email === userdata.email && password === userdata.password) {
                setInfo({ 
                    alertStyle:"success",
                    alertText:"login successfull!"
                });
                navigate('/home');
            }else{
                setInfo({ 
                    alertStyle:"danger",
                    alertText:"email or password is wrong!"
                });
            }

        }
    }
    
    
  return (
    <Container>
      <h1 className="text-center my-5">Login</h1>
   
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h4 className={`alert alert-${info.alertStyle}`}>{info.alertText}</h4>
      <Col md={6}>
      <Form onSubmit={formSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={e=>{setEmail(e.target.value)}} type="email" placeholder="Enter email" />
          
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control  onChange={e=>{setPassword(e.target.value)}} type="password" placeholder="Password" />
          </Form.Group>
         
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Col>
      </div>
    </Container>
  );
};

export default Login;
