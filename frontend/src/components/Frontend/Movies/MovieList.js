import SingleMovie from "./SingleMovie";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Container, Col } from "react-bootstrap";

import { getMovies } from "../../../actions/movieActions";
import Loader from "../layout/Loader";
const MovieList = () => {
  const [CurrentPage, setCurrentPage] = useState(1);
  const [Movies, setMovies] = useState([]);
  const { loading, movies, error } = useSelector((state) => state.movies);

  const dispatch = useDispatch();

  //load more movies
  const loadMoreMovies = () => {
    setCurrentPage(CurrentPage + 1);
  };

  useEffect(() => {
    dispatch(getMovies(CurrentPage));
    setMovies([...Movies, ...movies]);
  }, [dispatch, CurrentPage]);

  return (
    <Container className="mt-4">
      <Row>
        {loading ? (
          <Loader />
        ) : (
          <React.Fragment>
            {Movies &&
              Movies.map((movie) => (
                <SingleMovie key={movie._id} col="3" movie={movie} />
              ))}
            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={loadMoreMovies}
                className="btn btn-success"
              >
                Load More
              </button>
            </div>
          </React.Fragment>
        )}
      </Row>
    </Container>
  );
};

export default MovieList;
