import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarusel from "../../Shared/BrandCarusel/BrandCarusel";
import { GoogleAuthProvider } from "firebase/auth";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const RightSideNav = () => {
  const {logInProvider}=useContext(AuthContext)
  const googleProvider= new GoogleAuthProvider();
  const handleSubmitSignIn=()=>{
    logInProvider(googleProvider)
    .then(result=>{
      const user=result.user;
      console.log(user)
    })
    .catch(error=>console.error(error))
  }
  return (
    <div>
      <div>
        <ButtonGroup vertical>
          <Button onClick={handleSubmitSignIn} className="mb-2" variant="outline-primary">
            <FaGoogle /> Login With Google
          </Button>
          <Button variant="outline-dark">
            <FaGithub /> Login With Github
          </Button>
        </ButtonGroup>
      </div>
      <div className="mt-4">
        <h5>Find Us On</h5>
        <ListGroup className="mt-2">
          <ListGroup.Item className="mb-2">
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp /> WhatsApp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitch /> Twitch
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="mt-4">
        <BrandCarusel></BrandCarusel>
      </div>
    </div>
  );
};

export default RightSideNav;
