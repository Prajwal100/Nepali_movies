import React from "react";
import "./singleUser.css";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const SingleUser = () => {
  return (
    <Col xs={3} className="mt-4">
      <Card>
        <Card.Img
          variant="top"
          src="https://i0.wp.com/www.nepalitrends.com/wp-content/uploads/2018/03/18403575_10156191780857942_704805207278765448_n-e1522087692140.jpg?fit=768%2C760&ssl=1"
        />
        <Card.Body>
          <Card.Title>
            <Link to="https://www.themoviedb.org/t/">Namrata Shrestha</Link>
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleUser;
