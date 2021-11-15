import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';

const ShowReview = () => {
    
  const [reviews, setReviews] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(true);

    useEffect(() => {
      setIsLoadingData(true);
      fetch("http://localhost:5000/review")
        .then((res) => res.json())
        .then((result) => {
          setIsLoadingData(false);
          setReviews(result);
        });
    }, []);

    if (isLoadingData) {
      return (
        <div className="text-center my-5 py-5">
          <Spinner className="my-5" animation="border" variant="primary" />
        </div>
      );
    }
    return (
      <div className="container mt-5">
        <h2 className="mt-3 text-center">Our happy client says</h2>
        <Row xs={1} md={4} className="g-4 pt-4 px-3">
          {reviews.map((review, index) => (
            <Col className="p-2">
              <Card className="shadow h-100 border-0">
                <Card.Img
                  className="img-fluid p-3"
                  variant="top"
                  src={review?.img}
                />
                <Card.Body>
                  <Card.Title>
                    <b className="text-dark fs-6">{review?.name}</b>
                  </Card.Title>
                  <Card.Text>
                    <small className="text-muted">{review?.date}</small>
                  </Card.Text>
                  <Card.Text>
                    <small className="fs-6 ">Rating: {review?.rating}</small>
                  </Card.Text>
                  <Card.Text>
                    <small className="text-muted">
                      Rating: {review?.review?.slice(0, 50)}...
                    </small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
};

export default ShowReview;