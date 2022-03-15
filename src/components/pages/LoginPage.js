import React, { useState, useContext, useEffect } from "react";
import FirebaseAuthService from "../../FirebaseAuthService";
import { Form, Card, Button, Container, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { LanguageContext } from "../../context/LanguageContext";
import Paper from "@mui/material/Paper";

import contactImage from "../utils/eng_tate_color.png";

const LoginPage = () => {
  const [siteLanguage, setSiteLanguage] = useContext(LanguageContext);

  useEffect(() => {
    setSiteLanguage("English");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteLanguage]);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await FirebaseAuthService.loginUser(userName, password);
      setUserName("");
      setPassword("");
      routeChange();
      console.log(userName);
    } catch (error) {
      alert(error.message);
      throw error;
    }
  }

  let navigate = useNavigate();
  let pagelink = "/adminpage";

  const routeChange = () => {
    navigate(pagelink);
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4} align="center">
            <Box
              sx={{
                width: 250,
                height: 250,

                // // backgroundColor: "primary.dark",
                // // "&:hover": {
                // //   backgroundColor: "primary.main",
                // //   opacity: [0.9, 0.8, 0.7],
                // },
              }}
            >
              <Card.Img variant="top" src={contactImage} />
            </Box>
          </Col>
          <Col sm={4}></Col>
        </Row>
        <br></br>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            <Paper elevation={7}>
              <Card>
                <Card.Header align="center">
                  <h5>Login</h5>
                </Card.Header>
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="loginpage-1">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="email"
                        name="userName"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="loginpage-2">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    <div className="d-grid gap-2" align="center">
                      <Button type="submit" variant="danger">
                        Login
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Paper>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
