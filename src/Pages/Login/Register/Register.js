import React, { useState } from "react";
import {
  Card,
  Col,
  FloatingLabel,
  Form,
  Row,
  Button,
  Spinner,
} from "react-bootstrap";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import registerImg from "../../../images/login/registration.jpg";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const [loggedInData, setLoggedInData] = useState({});
  const { user, registerNewUser, isLoading, error, signInWithGoogle } =
    useAuth();
  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value);
    const newLogInData = { ...loggedInData };
    newLogInData[field] = value;
    // console.log(newLogInData);
    setLoggedInData(newLogInData);
  };

  const handleRegister = (e) => {
    if (loggedInData.password !== loggedInData.password2) {
      alert("password didn't match, please enter a correct password.");
      return;
    }
    registerNewUser(
      loggedInData.email,
      loggedInData.password,
      loggedInData.name,
      history
    );

    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <div className="container">
      <Row xs={1} md={2} className="g-2 mt-3">
        <Col>
          <h4 className="mb-3 text-primary text-center">Please Register</h4>
          {user?.email && (
            <div className="border border-2 border-success rounded-3 text-center mb-3 w-75 mx-auto">
              <p className="mt-3">
                <i className="far fa-check-circle text-warning"></i> Your
                Account Created Successfully!
              </p>
            </div>
          )}
          {error && (
            <div className="border border-2 border-danger rounded-3 text-center mb-3 w-75 mx-auto px-1">
              <p className="mt-3">
                <i className="fas fa-exclamation-triangle text-danger"></i>{" "}
                {error}
              </p>
            </div>
          )}
          {isLoading && (
            <div className="text-center my-5 py-5">
              <Spinner className="my-5" animation="border" variant="primary" />
            </div>
          )}
          {!isLoading && (
            <form onSubmit={handleRegister}>
              <FloatingLabel
                controlId="floatingInput1"
                label="Your name"
                className="mb-3 w-75 mx-auto"
              >
                <Form.Control
                  type="text"
                  name="name"
                  onBlur={handleOnChange}
                  placeholder="Text"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput2"
                label="Email address"
                className="mb-3 w-75 mx-auto"
              >
                <Form.Control
                  type="email"
                  name="email"
                  onBlur={handleOnChange}
                  placeholder="name@example.com"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword1"
                label="Password"
                className="mb-3 w-75 mx-auto"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onBlur={handleOnChange}
                  placeholder="Password"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword2"
                label="Confirm your password"
                className="mb-3 w-75 mx-auto"
              >
                <Form.Control
                  type="password"
                  name="password2"
                  onBlur={handleOnChange}
                  placeholder="Password"
                />
              </FloatingLabel>
              <div className="d-grid gap-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  className="mb-3 w-75 mx-auto"
                >
                  Register
                </Button>
              </div>
              <div className="mb-3 w-75 mx-auto text-center">
                Already have an acount?
                <NavLink to="/login" className="text-primary">
                  Login
                </NavLink>
              </div>
              <div className="mb-3 w-75 mx-auto text-center">
                ------------or------------
              </div>
              <div className="d-grid gap-2">
                <Button
                  onClick={handleGoogleSignIn}
                  variant="warning"
                  size="sm"
                  className="mb-3 w-75 mx-auto"
                >
                  Google Sign In
                </Button>
              </div>
            </form>
          )}
        </Col>
        <Col className="text-center">
          <Card.Img
            src={registerImg}
            className="img-fluid h-100"
            alt="Card image"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Register;
