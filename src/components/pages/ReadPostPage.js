import React, { useContext, useEffect } from "react";
import { PostContext } from "../../context/PostContext";
import { Container, Card, Row, Col, Button, Spinner } from "react-bootstrap";
import { LanguageContext } from "../../context/LanguageContext";
import parse from "html-react-parser";
import Paper from "@mui/material/Paper";
import EventIcon from "@mui/icons-material/Event";
import { useNavigate } from "react-router-dom";

const ReadPostPage = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [siteLanguage, setSiteLanguage] = useContext(LanguageContext);

  const {
    currentPost,

    setPostId,
    setCurrentPost,
  } = useContext(PostContext);

  useEffect(() => {
    if (currentPost) {
      if (currentPost.language !== siteLanguage) {
        handleGoBackHome();
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteLanguage]);

  function handleGoBackHome() {
    let pathfind = "/";
    routeChange(pathfind);
    setPostId();
    setCurrentPost();
  }

  const routeChange = (path) => {
    navigate(path);
  };

  return (
    <div>
      <div>
        {currentPost ? (
          <Container>
            <Card>
              <Card.Header>
                <Row>
                  <Col sm={10}>
                    <Button onClick={() => handleGoBackHome()} variant="danger">
                      {siteLanguage === "Arabic"
                        ? "العودة إلى الصفحة الرئيسية"
                        : "Ana sayfaya geri dön"}
                    </Button>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Card>
                  <Paper elevation={7}>
                    <Card.Header>
                      <Row>
                        <Col sm={8}>
                          <h6>{currentPost.header}</h6>
                        </Col>
                        <Col sm={4}>
                          <EventIcon sx={{ mr: 2, ml: 2 }} />
                          {`${
                            siteLanguage === "Arabic"
                              ? "تاريخ آخر"
                              : "Yayınlanma Zamanı"
                          }: ${currentPost.postDate}  `}
                        </Col>
                      </Row>
                    </Card.Header>
                  </Paper>
                  <Card.Body>{parse(currentPost.text)}</Card.Body>
                </Card>
              </Card.Body>
            </Card>
          </Container>
        ) : (
          <div align="center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadPostPage;
