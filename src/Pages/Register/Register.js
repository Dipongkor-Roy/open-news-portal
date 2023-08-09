import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {
  const [error,setError]=useState('');
  const {createUser}=useContext(AuthContext);
  const handleSubmit=(event)=>{
    event.preventDefault();
    const form=event.target;
    const name=form.name.value;
    const photoURL=form.photoUrl.value;
    const email=form.email.value;
    const password=form.password.value;
    createUser(email,password)
    .then((result)=>{
      const user=result.user;
      console.log(user)
      form.reset();
      setError('')
    })
    .catch(e=>{
      console.error(e)
      setError(e.message)
    })

  }
    return (
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" name="name" placeholder="Enter Name" />
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>PhotoUrl</Form.Label>
        <Form.Control type="" name="photoUrl" placeholder="Enter photoUrl" />
        <Form.Text className="text-muted">
       
        </Form.Text>
      </Form.Group>
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
      <Button variant="info" type="submit">
        Register
      </Button>
      <div className='text-danger my-2'> 
        {error}
      </div>
    </Form>
    );
};

export default Register;