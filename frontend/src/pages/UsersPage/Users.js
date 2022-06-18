import React from "react";
import SingleUser from "../../components/user/singleUser";
import { Row, Col } from "react-bootstrap";
const UsersPage = () => {
  return (
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
  );
};
export default UsersPage;
