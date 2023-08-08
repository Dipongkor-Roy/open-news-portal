import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { Image } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
const Header = () => {
  const { user,logOut} = useContext(AuthContext);
  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.error(error))
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-4">
      <Container>
        <Navbar.Brand href="/">Open-News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">News</Nav.Link>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav />
          </div>
          <Navbar.Text>
            {user?.uid ? (
             <>
              <span className="me-2">{user?.displayName}</span>
              <Button variant="light" onClick={handleLogOut} className="me-2">Log Out</Button></>
            ) : (
              <>
                <Link to="/logIn">
                  <Button variant="success" className="me-2">LogIn</Button>
                </Link>
                <Link to="/register">
                  <Button variant="info" className="me-2">Register</Button>
                </Link>
              </>
            )}

            {user?.photoURL ? (
              <Image
                style={{ height: "30px" }}
                roundedCircle
                src={user?.photoURL}
              ></Image>
            ) : (
              <FaUser></FaUser>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
