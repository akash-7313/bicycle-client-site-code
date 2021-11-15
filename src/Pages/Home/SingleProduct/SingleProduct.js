import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SingleProduct = (props) => {
//   console.log(props.pd);
  const { _id, bicycleName, description, img, price } = props.pd;

  const url = `product/${_id}`;

  return (
    <Col>
      <Card className="shadow-sm h-100 border-0">
        <Card.Img className="h-100 p-3 img-fluid" variant="top" src={img} />
        <Card.Body>
          <Card.Title>
            <b className="text-dark">{bicycleName}</b>
          </Card.Title>
          <Card.Text>
            <small className="text-muted">{description.slice(0, 100)}...</small>
          </Card.Text>
        </Card.Body>

        <div className="d-flex justify-content-between align-items-center text-muted px-3 mb-2">
          <p className="text-secondary">
            <small className="fw-bold">Price: ${price}k </small>
            <small className="text-danger">
              <del>$200k</del>
            </small>
          </p>
          <NavLink to={url} className="ps-3">
            <Button variant="secondary" className="btn-sm">
              <i className="fas fa-shopping-bag"></i> Buy Now
            </Button>
          </NavLink>
        </div>
      </Card>
    </Col>
  );
};

export default SingleProduct;
