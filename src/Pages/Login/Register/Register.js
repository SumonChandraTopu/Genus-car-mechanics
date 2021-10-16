import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="d-flex justify-content-center  form-container">
      <Form className="text-start form w-50">
        <Row>
          <Col>
            <Form.Label>First name</Form.Label>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Label>Last name</Form.Label>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>

        <Row className="mt-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>

        <Form.Group className="mt-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button className="px-5 mt-3" variant="danger" type="submit">
          Submit
        </Button>
        <div className="mt-3">
            <h6><span>------------------------------------</span>Already have an account?<span>---------------------------------------</span></h6>
            <Link to="/login"><button className="btn btn-outline-danger w-100 mt-2">Sign in</button></Link>
        </div>
      </Form>
    </div>
  );
};

export default Register;
