import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Register = () => {
  const [error,setError]=useState('');
  const [accept,setAccept]=useState(false);
  const {createUser,updateProfileDetail,sendlVerification}=useContext(AuthContext);

  //handle for from submit
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
      updateProfile(name,photoURL)
      handleEmailVerification();
      toast.success('Please Verify Your Email');
    })
    .catch(e=>{
      console.error(e)
      setError(e.message)
    })

  }
  //handle for checkbox
  const handleAccept=event=>{
    setAccept(event.target.checked)
  }
  //update Profile
  const updateProfile=(name,photoURL)=>{
    const profile={  displayName:name,
      photoURL: photoURL
    }
    updateProfileDetail(profile)
    .then(()=>{})
    .catch(e=>console.error(e));
  }
  const handleEmailVerification=()=>{
    sendlVerification();
  }
    return (
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" name="name" placeholder="Enter Name" />
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
      <Form.Check type="checkbox" onClick={handleAccept} label={<>Accept <Link to='/terms'>Terms And Condition</Link></>} />
      </Form.Group>
      <Button variant="info" type="submit" disabled={!accept}>
        Register
      </Button>
      <div className='text-danger my-2'> 
        {error}
      </div>
    </Form>
    );
};

export default Register;