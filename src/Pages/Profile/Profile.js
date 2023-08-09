import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const {user}=useContext(AuthContext);
    const [name,setName]=useState(user.displayName);
    const photoUrlRef=useRef(user.photoURL)

    const handeleSubmit=event=>{
        event.preventDefault();
        console.log(photoUrlRef.current.value)
     }

    const handleNameChane=event=>{
        setName(event.target.value)
    }
      return (
        <Form onSubmit={handeleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={handleNameChane} defaultValue={name} type="" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>PhotoUrl</Form.Label>
        <Form.Control ref={photoUrlRef} defaultValue={user?.photoURL} type="" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    );
};

export default Profile;