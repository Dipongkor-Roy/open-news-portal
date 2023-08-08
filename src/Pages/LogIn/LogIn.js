import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import  { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const navigate=useNavigate();
  const {logInViaPass}=useContext(AuthContext)
  const handleSubmit=(event)=>{
    event.preventDefault()
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    logInViaPass(email,password)
    .then(result=>{
    const user=result.user;
    console.log(user)
    form.reset()
    navigate('/');
  })
  
    
    .catch(e=>console.error(e))

  }
    return (
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
      </Form.Group>
      <Button variant="success" type="Log In">
        Log In
      </Button>
    </Form>
  
    );
};

export default LogIn;