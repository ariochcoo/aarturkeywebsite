import React, { useState, useEffect, useContext } from "react";
import { Form, Container, Row, Col, Card, Button } from "react-bootstrap";

import { PostContext } from "../../context/PostContext";

//Texteditor
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const EditPost = () => {
  const {
    currentPost,
    setCurrentPost,
    dispatchPostEvent,
    setCollectionFolder,
    postId,
    setPostId,
    setEvent,
  } = useContext(PostContext);

  const [post, setPost] = useState({
    language: "",
    header: "",
    topic: "",
    shortDes: "",
    text: "",
    postDate: "",
  });

  // update or create
  // const [varPost, setVarPost] = useState(true);

  useEffect(() => {
    if (currentPost) {
      setPost(currentPost);
      console.log(postId);
    } else {
      setPost({
        language: "",
        header: "",
        topic: "",
        shortDes: "",
        text: "",
        postDate: "",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPost]);

  const [servicesName, setServicesName] = useState({
    healthService: "",
    socialService: "",
    educationService: "",
  });

  useEffect(() => {
    handlerLanguageFormValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post.language]);

  // from ınput add to object
  function onChangeForm(e) {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  }

  // text editor data

  //define language

  function handlerLanguageFormValue() {
    if (post.language === "English") {
      setServicesName({
        healthService: "Health Services",
        socialService: "Social Services",
        educationService: "Education Services",
      });
      setCollectionFolder("englishPost");
    } else if (post.language === "Turkish") {
      setServicesName({
        healthService: "Sağlık Hizmetleri",
        socialService: "Sosyal Hizmetler",
        educationService: "Eğitim Hizmetleri",
      });
      setCollectionFolder("turkishPost");
    } else if (post.language === "Arabic") {
      setServicesName({
        healthService: "خدمات صحية",
        socialService: "خدمات اجتماعية",
        educationService: "خدمات التعليم",
      });
      setCollectionFolder("arabicPost");
    } else {
      setServicesName({
        healthService: "خدمات صحية",
        socialService: "خدمات اجتماعية",
        educationService: "خدمات التعليم",
      });
      setCollectionFolder("arabicPost");
    }
  }

  // get object from form

  function handleUpdateFormSubmit(e) {
    e.preventDefault();
    dispatchPostEvent("UPDATE_POST", { id: postId, document: post });
    setCurrentPost("");
    setPostId("");
    setPost({
      language: "",
      header: "",
      topic: "",
      shortDes: "",
      text: "",
      postDate: "",
    });
    setCollectionFolder("arabicPost");
  }

  // back function
  //hey baby

  function handlerBackToPostList() {
    setPostId();
    setCurrentPost();

    setEvent("table");
  }

  return (
    <div>
      <Container fluid>
        <Card>
          <Card.Header>
            <Row>
              <Col sm={10}>
                <h4>Edit Post Form</h4>
              </Col>
              <Col sm={2}>
                <Button onClick={handlerBackToPostList}>Back to List</Button>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleUpdateFormSubmit}>
              <Row>
                <Col>
                  <Form.Group className="mb-2" controlId="Control.Input1">
                    <Form.Label>Please Select Post Language</Form.Label>
                    <Form.Select
                      type="select"
                      required
                      name="language"
                      value={post.language}
                      onChange={onChangeForm}
                      aria-label="Please Select"
                    >
                      <option></option>

                      <option value="Arabic">Arabic</option>
                      <option value="Turkish">Turkish</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col sm={4}>
                  <Form.Group className="mb-2" controlId="Control.Input1">
                    <Form.Label>Specify Post Topic</Form.Label>
                    <Form.Select
                      type="select"
                      required
                      name="topic"
                      value={post.topic}
                      onChange={onChangeForm}
                      aria-label="Please Select"
                    >
                      <option></option>
                      <option value={servicesName.healthService}>
                        {servicesName.healthService}
                      </option>
                      <option value={servicesName.socialService}>
                        {servicesName.socialService}
                      </option>
                      <option value={servicesName.educationService}>
                        {servicesName.educationService}
                      </option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col sm={4}>
                  <Form.Group className="mb-2" controlId="Control.Input2">
                    <Form.Label>Post Date</Form.Label>
                    <Form.Control
                      type="date"
                      required
                      name="postDate"
                      value={post.postDate}
                      onChange={onChangeForm}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Form.Group className="mb-2" controlId="Control.Input3">
                  <Form.Label>Post Header</Form.Label>
                  <Form.Control
                    type="text"
                    name="header"
                    required
                    value={post.header}
                    onChange={onChangeForm}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-2" controlId="Control.Input3">
                  <Form.Label>Short Description for Home Page</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    name="shortDes"
                    required
                    value={post.shortDes}
                    onChange={onChangeForm}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3" controlId="Control.Input4">
                  <Form.Label>Text</Form.Label>
                  {/* <Form.Control
                    as="textarea"
                    name="text"
                    value={newPost.text}
                    onChange={onChangeForm}
                    rows={4}
                    required
                  /> */}

                  <CKEditor
                    editor={ClassicEditor}
                    data={post.text}
                    onChange={(event, editor) => {
                      post.text = editor.getData();
                    }}
                  />
                </Form.Group>
              </Row>
              <br></br>

              <div className="d-grid gap-2">
                <Button type="submit" variant="primary">
                  Update Post
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default EditPost;
