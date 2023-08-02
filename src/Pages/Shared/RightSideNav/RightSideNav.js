import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarusel from "../../Shared/BrandCarusel/BrandCarusel";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const RightSideNav = () => {
  return (
    <div>
      <div>
        <ButtonGroup vertical>
          <Button className="mb-2" variant="outline-primary">
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
