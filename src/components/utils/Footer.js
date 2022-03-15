import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Navbar className="menu" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">
              <Image
                alt=""
                src={logo}
                roundedCircle
                width="40"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              AAR Japan Turkey
            </Navbar.Brand> */}
          <Nav>
            <Navbar.Text>
              Copyright © Association for Aid and Relief, Japan, all rights
              reserved.
            </Navbar.Text>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
