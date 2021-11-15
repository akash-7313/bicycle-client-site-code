import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import footerImg from "../../../images/footerImg.jpg";

const Footer = () => {
  const footerOverflow = {
    overflow: "hidden",
  };
  const logoStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "40px",
    marginRight: "10px",
    cursor: "pointer",
  };
  const cursorStyle = {
    cursor: "pointer",
  };

  return (
    <div className="mt-5" style={footerOverflow}>
      <div className="container pt-5">
        <Row xs={1} md={3} className="g-4">
          <Col></Col>
          <Col className="text-center">
            <img
              alt=""
              src={footerImg}
              width="60"
              height="30"
              className="d-inline-block align-top"
            />
            <span style={logoStyle} className="name me-3 fs-5">
              <b className="text-dark">Riders</b>
            </span>
            <Card.Body>
              <Card.Text>
                <small>RIDER'S BI-CYCLE SHOP, NIP: 000-000-000</small> <br />
                <small>STREET: 10(B), CITY: ROME, ITALY</small>
              </Card.Text>
              <Card.Text>
                <small>
                  PHONE: 000-000-000 <br /> EMAIL: riders@store.com
                </small>
              </Card.Text>
              <Card.Text className="fw-bold">
                <small>GODZ OTWARCIA</small>
              </Card.Text>
              <Card.Text className="fw-bold">
                <small>PN-PT: 10-19</small>
                <br />
                <small>SOB: 10-16</small>
                <br />
                <small>NIEDZ: 11-16</small>
                <br />
              </Card.Text>
              <Card.Text>
                <small>NEWSLETTER</small> <br />
                <div className="input-group my-3">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="EMAIL"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-success btn-sm"
                    type="button"
                    id="button-addon2"
                  >
                    SUBSCRIBE
                  </button>
                </div>
              </Card.Text>
              <Card.Text className="mt-5 text-danger">
                <small>FOLLOW US ON:</small>
                <i className="fab fa-twitter ms-2" style={cursorStyle}></i>
                <i className="fab fa-facebook-f ms-2" style={cursorStyle}></i>
                <i className="fab fa-instagram ms-2" style={cursorStyle}></i>
              </Card.Text>
              <Card.Text>
                <small className="me-3 fw-bold" style={cursorStyle}>CONTACT</small>
                <small className="me-3 fw-bold" style={cursorStyle}>FAQS</small>
                <small className="me-3 fw-bold" style={cursorStyle}>PRIVACY</small>
                <small className="me-0 fw-bold" style={cursorStyle}>TERMS & CONDITION</small>
              </Card.Text>
            </Card.Body>
          </Col>
          <Col></Col>
        </Row>
      </div>
      <Row xs={1} md={3} className="g-2 bg-dark p-3">
        <Col className="text-md-start text-center">
          <img
            alt=""
            src={footerImg}
            width="60"
            height="30"
            className="d-inline-block align-top"
          />
          <span style={logoStyle} className="name ms-2 fs-5">
            <b className="text-white fs-6">Riders</b>
          </span>
        </Col>
        <Col>
          <Card.Text className="text-center text-white">
            &#169; 2021 Copyright reserved
          </Card.Text>
        </Col>
        <Col className="text-md-end text-center">
          <NavLink
            to="/login"
            className="me-2"
            style={{ textDecoration: "none", color: "white" }}
          >
            <small>SIGN IN</small>
          </NavLink>
          <NavLink
            to="/register"
            style={{ textDecoration: "none", color: "white" }}
          >
            <small>SIGN UP</small>
          </NavLink>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
