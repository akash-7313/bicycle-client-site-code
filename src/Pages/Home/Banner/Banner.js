import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import banner from "../../../images/banner/banner.jpg";

const Banner = () => {

    const bannerStyle = {
        fontFamily: "'Lobster', cursive",
        letterSpacing: '4px',
        fontWeight:'400'
    }


  return (
    <div className="container mt-4">
      <Row xs={1} md={2} className="g-0">
        <Col>
          <Card.Body>
            <Card.Title className="fs-1" style={bannerStyle}>
              Your Dream <br /> Mountain Bike
            </Card.Title>
            <Card.Text className="fw-bold mt-4">Tyre size</Card.Text>
            <Card.Text className="text-muted">
              More thread typically means more grip but <br /> also more rolling
              resistence.
            </Card.Text>
            <Button
              variant="outline-primary"
              className="rounded-pill px-4 py-0"
            >
              Next
            </Button>
            <div className="mt-4 fw-bold text-muted">
              <Card.Text>Frame type/size</Card.Text>
              <Card.Text>Pedals & Straps</Card.Text>
              <Card.Text>Handlebar</Card.Text>
            </div>
          </Card.Body>
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <Card.Img variant="top" src={banner} className="img-fluid h-100 w-100" />
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
