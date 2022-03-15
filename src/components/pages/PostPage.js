import React, { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import parse from "html-react-parser";
import Paper from "@mui/material/Paper";
import EventIcon from "@mui/icons-material/Event";

const PostPage = () => {
  // eslint-disable-next-line no-unused-vars
  const {
    currentPost,

    setEvent,
    setPostId,
    setCurrentPost,
    //setCollectionFolder,
  } = useContext(PostContext);

  function handlerBackToPostList() {
    setPostId();
    setCurrentPost();

    setEvent("table");
  }

  return (
    <div>
      {currentPost ? (
        <Container>
          <Card>
            <Card.Header>
              <Row>
                <Col sm={10}>
                  <h4>Post Preview</h4>
                </Col>
                <Col sm={2}>
                  {" "}
                  <Button onClick={handlerBackToPostList}>
                    Back to Post List{" "}
                  </Button>
                </Col>
              </Row>
            </Card.Header>
          </Card>

          <Card>
            <Paper elevation={3}>
              <Card.Header>
                <Row>
                  <Col sm={8}>
                    <h6>{currentPost.header}</h6>
                  </Col>
                  <Col sm={4}>
                    <EventIcon sx={{ mr: 2, ml: 2 }} />
                    {`${currentPost.postDate}: ${currentPost.postDate}  `}
                  </Col>
                </Row>
              </Card.Header>
            </Paper>
            <Card.Body>{parse(currentPost.text)}</Card.Body>
          </Card>
        </Container>
      ) : null}
    </div>
  );
};

export default PostPage;
