import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import { logoutUser } from "../../../actions/userActions";

import toast, { Toaster } from "react-hot-toast";
import { AiOutlinePoweroff } from "react-icons/ai";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, loading } = useSelector((state) => state.authReducer);

  const handleLogout = () => {
    dispatch(logoutUser());
    toast.success("Successfully logout");
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link className="logo" to="/">
            <Navbar.Brand>Nepali Movies</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/" className="nav-link">
              Categories
            </Link>
            <Link to="/celebrities" className="nav-link">
              Celebrity List
            </Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              {user ? (
                <React.Fragment>
                  <Navbar.Text>
                    Signed in as: <a href="#login">{user.username}</a>
                  </Navbar.Text>

                  <Link to="/" onClick={handleLogout} className="nav-link">
                    <AiOutlinePoweroff title="Logout" />
                  </Link>
                </React.Fragment>
              ) : (
                !loading && (
                  <React.Fragment>
                    <Link to="/register" className="nav-link">
                      Register
                    </Link>
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </React.Fragment>
                )
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
