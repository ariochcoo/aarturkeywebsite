import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import image1 from "./eng_yoko_color.png";
// import image2 from "./aarjapan2.jpg";
// import Paper from "@mui/material/Paper";
// import Divider from "@mui/material/Divider";
const Slider = () => {
  return (
    <div className="menu2">
      <Container fluid>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            {/* <Box
              sx={{
                width: 700,
                height: 200,

                // // backgroundColor: "primary.dark",
                // // "&:hover": {
                // //   backgroundColor: "primary.main",
                // //   opacity: [0.9, 0.8, 0.7],
                // },
              }}
            >
              <Card.Img variant="top" src={image1} />
            </Box> */}

            <Image className="d-block w-100 " rounded fluid src={image1} />
          </Col>
          <Col sm={4}></Col>
        </Row>
        {/* <h5>Striving to assist the most vulnerable,where they are</h5> */}

        {/* <Paper elevation={8}>
          <Carousel fade>
            <Carousel.Item>
              <Image
                className="d-block w-100 "
                rounded
                thumbnail
                fluid
                src={image1}
                alt="First slide"
              />
              <Carousel.Caption>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                rounded
                thumbnail
                fluid
                src={image2}
                alt="Second slide"
              />

              <Carousel.Caption>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                rounded
                thumbnail
                fluid
                src={image1}
                alt="Third slide"
              />

              <Carousel.Caption>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Paper> */}
      </Container>
    </div>
  );
};

export default Slider;
