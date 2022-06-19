import SingleMovie from "./SingleMovie";
import React from "react";
import { Row, Container, Col } from "react-bootstrap";
const MovieList = () => {
  return (
    <Container className="mt-4">
      <Row>
        <SingleMovie col="3" />
        <SingleMovie col="3" />
        <SingleMovie col="3" />
        <SingleMovie col="3" />
        <SingleMovie col="3" />
        <SingleMovie col="3" />
        <SingleMovie col="3" />
      </Row>
    </Container>
  );
};

export default MovieList;
