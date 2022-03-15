import React, { useContext } from "react";
import { PostContext } from "../../context/PostContext";
//import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import PreviewIcon from "@mui/icons-material/Preview";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  Form,
  Table,
  Card,
  //Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const PostTable = ({ activepage, setactivePage }) => {
  // eslint-disable-next-line no-unused-vars
  const {
    posts,
    collectionFolder,
    setCollectionFolder,
    dispatchPostEvent,

    setEvent,
  } = useContext(PostContext);

  // const navigate = useNavigate();

  // const routeChange = (path) => {
  //   navigate(path);
  // };

  function handlePostFolderFilter(e) {
    setCollectionFolder(e.target.value);
  }

  function handlerDeletePost(e) {
    dispatchPostEvent("DELETE_POST", e);
  }

  function handlerReadPost(e) {
    dispatchPostEvent("READ_POST", e);

    let path = "postpage";
    setEvent(path);
  }

  function handlerEditPage(e) {
    dispatchPostEvent("READ_POST", e);
    let path = "editpost";
    setEvent(path);
  }

  return (
    <div>
      <Container fluid>
        <Card>
          <Card.Header>Filter</Card.Header>

          <Card.Body>
            <Row>
              <Form>
                <Row>
                  <Col sm={6}>
                    <Form.Group className="mb-2" controlId="Control.Input1">
                      <Form.Label>Please Select Post Language</Form.Label>
                      <Form.Select
                        type="select"
                        required
                        name="language"
                        value={collectionFolder}
                        onChange={(e) => {
                          handlePostFolderFilter(e);
                        }}
                        aria-label="Please Select"
                      >
                        <option value="arabicPost">Arabic</option>
                        <option value="turkishPost">Turkish</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col sm={6}></Col>
                </Row>
              </Form>
            </Row>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>Post Table </Card.Header>
          <Card.Body>
            <Table className="mt-4" striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>text</th>
                  <th>Topic</th>
                  <th>Post Date</th>
                  <th>Show Post</th>
                  <th>Edit Post</th>
                  <th>Delete Post</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id} align="center">
                    <td>{post.header}</td>
                    <td>{post.topic}</td>
                    <td>{post.postDate}</td>
                    <td>
                      <IconButton
                        aria-label="read"
                        size="large"
                        onClick={() => handlerReadPost(post.id)}
                      >
                        <PreviewIcon
                          fontSize="inherit"
                          color="secondary"
                          // sx={{ ml: 3 }}
                        />
                      </IconButton>
                    </td>
                    <td>
                      <IconButton
                        aria-label="edit"
                        size="large"
                        onClick={() => handlerEditPage(post.id)}
                      >
                        <EditIcon
                          fontSize="inherit"
                          color="success"
                          // sx={{ ml: 3 }}
                        />
                      </IconButton>
                    </td>
                    <td>
                      <IconButton
                        aria-label="delete"
                        size="large"
                        onClick={() => handlerDeletePost(post.id)}
                      >
                        <DeleteIcon fontSize="large" color="error" />
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default PostTable;
