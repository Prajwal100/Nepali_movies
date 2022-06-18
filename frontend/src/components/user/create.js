import React from "react";
import {
  Row,
  Container,
  Table,
  Col,
  Button,
  Badge,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const userCreate = () => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1>User Management</h1>
        </Col>
        <Col xs={12}>
          <Link to="/create/user">
            <Button variant="primary">Go Back</Button>
          </Link>
        </Col>
        <Col xs={12} className="pt-5">
          <Form>
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
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default userCreate;
