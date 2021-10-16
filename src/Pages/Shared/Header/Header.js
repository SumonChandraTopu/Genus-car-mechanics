import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Genius </Navbar.Brand>
          <Nav className="ms-auto">
            <Navbar.Toggle />
            <Navbar.Collapse className=" justify-content-end">
              <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
              <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
              <Nav.Link as={Link} to="/home#experts">Experts</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>

              <Navbar.Text>
                Signed in as: <Link to="/login">Mark Otto</Link>
              </Navbar.Text>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Login;
