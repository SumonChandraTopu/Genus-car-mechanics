import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Login.css'

const Login = () => {
  return (
    <div className="d-flex row justify-content-center align-items-center form-container">
      <Form className="col-lg-3 col-sm-5  text-start form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="px-5" variant="danger" type="submit">
          Submit
        </Button>
        <div className="mt-3">
            <h6>New user?</h6>
            <Link to="/register"><button className="btn btn-outline-danger w-100 mt-2">Create new account</button></Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
