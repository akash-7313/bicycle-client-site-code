import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from '../../../images/bi_cyclee.jpg';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
  const logoStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "40px",
    marginRight: "10px",
    cursor: "pointer",
  };

  const { user, logOut } = useAuth();
  
  return (
    <div>
      <Navbar sticky="top" expand="lg" variant="light">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src={logo}
              width="60"
              height="30"
              className="d-inline-block align-top"
            />
            <span style={logoStyle} className="name me-3 fs-5">
              <b className="text-dark">Riders</b>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <NavLink
                className="text-decoration-none me-4 text-primary py-2"
                exact
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className="text-decoration-none me-4 text-primary py-2"
                exact
                to="/collection"
              >
                Our Collection
              </NavLink>
              <NavLink
                className="text-decoration-none me-4 text-primary py-2"
                exact
                to="/dashboard"
              >
                Dashboard
              </NavLink>

              {user?.email ? (
                <div>
                  <button
                    onClick={logOut}
                    className="btn btn-sm btn-primary rounded-3 mt-1"
                  >
                    Log out
                  </button>
                </div>
              ) : (
                <div className="mt-1">
                  <NavLink
                    className="text-decoration-none me-4 text-primary py-2"
                    exact
                    to="/login"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    className="text-decoration-none me-4 text-primary"
                    exact
                    to="/register"
                  >
                    <button className="btn btn-sm btn-primary rounded-3 mt-1">
                      Register
                    </button>
                  </NavLink>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
