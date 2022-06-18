import SingleMovie from "./SingleMovie";
import React from "react";
import { Row, Container, Col } from "react-bootstrap";
const MovieList = () => {
  return (
    <Container>
      <Row>
        <SingleMovie />
      </Row>
    </Container>
  );
};

export default MovieList;
