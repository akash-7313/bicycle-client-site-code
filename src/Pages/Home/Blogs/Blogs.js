import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import blogImgOne from "../../../images/blogs/blogone.jpg";
import blogImgTwo from "../../../images/blogs/blogtwo.jpg";
import blogImgThree from "../../../images/blogs/blogthree.jpg";

const Blogs = () => {
  return (
    <div className="container mt-5">
      <div className="pt-5 text-center">
        <h2 className="text-secondary">Our riding blogs </h2>
        <p className="text-muted">
          Bicycle is one of the best vehicles in the replace for <br /> its
          various aspects. The bicycle is <br /> made of two wheels, which
          consisting two tiers and tubes an iron frame.
        </p>
      </div>
      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card.Img variant="top" src={blogImgOne} className="img-fluid" />
          <Card.Body
            className="shadow-sm rounded-3"
            style={{ height: "195px" }}
          >
            <Card.Title>Italy's Piedmont Bike Tour</Card.Title>
            <Card.Text className="text-muted">
              <small>29 june,2019</small> by: Andreu flich
            </Card.Text>
            <Card.Text>
              A Slow Food & Wine Lover's Paradise in Piemonte
            </Card.Text>
            <Button
              variant="outline-primary"
              size="sm"
              className="rounded-pill py-0 px-3"
            >
              Read more <i className="fas fa-long-arrow-alt-right"></i>
            </Button>
          </Card.Body>
        </Col>
        <Col>
          <Card.Img variant="top" src={blogImgTwo} className="img-fluid" />
          <Card.Body
            className="shadow-sm rounded-3"
            style={{ height: "195px" }}
          >
            <Card.Title>Dolomites Bike Tour</Card.Title>
            <Card.Text className="text-muted">
              <small>29 june,2019</small> by: Andreu flich
            </Card.Text>
            <Card.Text>
              World-Class Routes in Italy, Austria & Netherlands.
            </Card.Text>
            <Button
              variant="outline-primary"
              size="sm"
              className="rounded-pill py-0 px-3"
            >
              Read more <i className="fas fa-long-arrow-alt-right"></i>
            </Button>
          </Card.Body>
        </Col>
        <Col>
          <Card.Img variant="top" src={blogImgThree} className="img-fluid" />
          <Card.Body
            className="shadow-sm rounded-3"
            style={{ height: "195px" }}
          >
            <Card.Title>Basque Country Bike Tour</Card.Title>
            <Card.Text className="text-muted">
              <small>29 june,2019</small> by: Andreu flich
            </Card.Text>
            <Card.Text>French Pyrenees & Spain's Rioja Wine Region</Card.Text>
            <Button
              variant="outline-primary"
              size="sm"
              className="rounded-pill py-0 px-3"
            >
              Read more <i className="fas fa-long-arrow-alt-right"></i>
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </div>
  );
};

export default Blogs;
