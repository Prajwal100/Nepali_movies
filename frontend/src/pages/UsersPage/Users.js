import React from "react";
import SingleUser from "../../components/user/singleUser";
import { Container, Row, Col } from "react-bootstrap";
const UsersPage = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} className="mt-3">
          <h2 style={{ textDecoration: "underline" }}>Nepali Actor & Acress</h2>
        </Col>
        <SingleUser />
        <SingleUser />
        <SingleUser />
        <SingleUser />
        <SingleUser />
      </Row>
    </Container>
  );
};
export default UsersPage;
