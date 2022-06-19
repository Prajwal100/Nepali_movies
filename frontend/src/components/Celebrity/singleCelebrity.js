import React from "react";
import "./singleCelebrity.css";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const SingleCelebrity = (props) => {
  return (
    <Col xs={3} className="mt-4">
      <Card>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>
            <Link class="name" to={`/celebrity/${props.id}`}>
              {props.name}
            </Link>
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleCelebrity;
