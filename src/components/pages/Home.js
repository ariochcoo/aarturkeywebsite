import React, { useState, useContext, useEffect } from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import { LanguageContext } from "../../context/LanguageContext";
import { PostContext } from "../../context/PostContext";
import FirebaseFirestoreService from "../../FirebaseFirestoreService";
import { Fab } from "@mui/material";
import Paper from "@mui/material/Paper";
import parse from "html-react-parser";
import { NavLink } from "react-router-dom";
import ReadMoreSharpIcon from "@mui/icons-material/ReadMoreSharp";
import EventIcon from "@mui/icons-material/Event";

const Home = () => {
  //   const [posts, setPosts] = useState([]);
  //   const [post, setPost] = useState({
  //     header: "",
  //     mainText: "",
  //     postDate: "",
  //   });
  // eslint-disable-next-line no-unused-vars
  const [siteLanguage, setSiteLanguage] = useContext(LanguageContext);

  const { dispatchPostEvent, setCollectionFolder, categoryFilter } =
    useContext(PostContext);
  const [posts, setPosts] = useState([]);
  const [collectionName, setCollectionName] = useState("arabicPost");

  const [postTable, setPostTable] = useState({
    header: "",
    buttonText: "",
    postDate: "",
  });

  useEffect(() => {
    handlerCollectionName(siteLanguage);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteLanguage]);

  useEffect(() => {
    fetchPosts()
      .then((fetchedPosts) => {
        setPosts(fetchedPosts);
      })
      .catch((error) => {
        console.error(error.message);
        throw error;
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionName, categoryFilter]);

  function handlerCollectionName(siteLanguage) {
    if (siteLanguage === "English") {
      setCollectionName("englishPost");
      setCollectionFolder("englishPost");
      setPostTable({
        header: "News",
        buttonText: "Read More",
        postDate: "Post Date",
      });
    } else if (siteLanguage === "Turkish") {
      setCollectionName("turkishPost");
      setCollectionFolder("turkishPost");
      setPostTable({
        header: "Haberler",
        buttonText: "Daha fazla oku",
        postDate: "Yayınlanma Zamanı",
      });
    } else if (siteLanguage === "Arabic") {
      setCollectionName("arabicPost");
      setCollectionFolder("arabicPost");
      setPostTable({
        header: "أخبار",
        buttonText: "اقرأ أكثر",
        postDate: "تاريخ آخر",
      });
    } else {
      setCollectionName("englishPost");
      setCollectionFolder("englishPost");
      setPostTable({
        header: "News",
        buttonText: "Read More",
        postDate: "Post Date",
      });
    }
  }

  async function fetchPosts() {
    const queries = [];

    if (categoryFilter) {
      queries.push({
        field: "topic",
        condition: "==",
        value: categoryFilter,
      });
    }

    const orderByField = "postDate";
    const orderByDirection = "desc";
    // if (orderBy) {
    //   switch (orderBy) {
    //     case " publishDateAsc":
    //       orderByDirection = "asc";
    //       break;
    //     case "publishDateDesc":
    //       orderByDirection = "desc";
    //       break;
    //     default:
    //       break;
    //   }
    // }

    let fetchedPosts = [];
    try {
      const response = await FirebaseFirestoreService.readDocumentWithQuery({
        collection: collectionName,
        queries: queries,
        orderByField: orderByField,
        orderByDirection: orderByDirection,
      });
      const newPosts = response.docs.map((postDoc) => {
        const id = postDoc.id;
        const data = postDoc.data();

        return { ...data, id };
      });

      fetchedPosts = [...newPosts];
    } catch (error) {
      console.error(error.message);
      throw error;
    }
    return fetchedPosts;
  }

  function handlerReadPostHome(e) {
    dispatchPostEvent("READ_POST", e);
  }

  return (
    <div>
      <Container fluid>
        <Paper elevation={7}>
          <Card>
            <Paper elevation={12}>
              <Card.Header>
                {categoryFilter ? (
                  <h4>{`${postTable.header} / ${categoryFilter}`}</h4>
                ) : (
                  <h4>{postTable.header}</h4>
                )}
              </Card.Header>
            </Paper>
            <Card.Body>
              {posts && posts.length > 0 ? (
                posts.map((post, index) => (
                  <div key={index}>
                    <Card>
                      <Paper elevation={3}>
                        <Card.Header>
                          <Row>
                            <Col sm={8}>
                              <h6>{post.header}</h6>
                            </Col>
                            <Col sm={4}>
                              <EventIcon sx={{ mr: 2, ml: 2 }} />
                              {`${postTable.postDate}: ${post.postDate}  `}
                            </Col>
                          </Row>
                        </Card.Header>
                      </Paper>
                      <Card.Body>{parse(post.shortDes)}</Card.Body>
                      <Card.Body>
                        <NavLink
                          style={{ textDecoration: "none", cursor: "pointer" }}
                          className={(isActive) =>
                            "nav-link" + (!isActive ? " unselected" : "")
                          }
                          to="/readpostpage"
                        >
                          <Fab
                            variant="extended"
                            size="small"
                            color="error"
                            aria-label="add"
                            sx={{ pl: 3 }}
                            onClick={() => handlerReadPostHome(post.id)}
                          >
                            {postTable.buttonText}{" "}
                            <ReadMoreSharpIcon sx={{ mr: 2, ml: 2 }} />
                          </Fab>
                        </NavLink>
                      </Card.Body>
                    </Card>
                    <br></br>
                  </div>
                ))
              ) : siteLanguage === "Arabic" ? (
                <h6>لا يوجد اخبار عن هذا</h6>
              ) : (
                <h6>Bu konuda herhangi bir haber bulunmamaktadır.</h6>
              )}
            </Card.Body>
          </Card>
        </Paper>
      </Container>
    </div>
  );
};

export default Home;
