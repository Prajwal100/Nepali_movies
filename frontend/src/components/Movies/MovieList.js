import SingleMovie from "./SingleMovie";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Container, Col } from "react-bootstrap";

import { getMovies } from "../../actions/movieActions";
import Loader from "../../components/Layout/Loader";
const MovieList = () => {
  const { loading, movies, error } = useSelector((state) => state.movies);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);
  return (
    <Container className="mt-4">
      <Row>
        {loading ? (
          <Loader />
        ) : (
          <React.Fragment>
            {movies &&
              movies.map((movie) => (
                <SingleMovie key={movie._id} col="3" movie={movie} />
              ))}
          </React.Fragment>
        )}
      </Row>
    </Container>
  );
};

export default MovieList;
