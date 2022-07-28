import SingleMovie from "./SingleMovie";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Container, Col } from "react-bootstrap";

import { getMovies } from "../../../actions/movieActions";
import Loader from "../layout/Loader";
import Layout from "../layout";
const MovieList = () => {
  const [page, setPage] = useState(0);
  const { loading, movies } = useSelector((state) => state.movies);
  const [movie, setMovie] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    //load more movies
    const loadMoreMovies = () => {
      dispatch(getMovies(page));
      setMovie([...movie, ...movies]);
    };
    loadMoreMovies();
  }, []);

  const loadMore = () => {
    setPage((page) => page + 1);
  };

  return (
    <Layout title="Movies list page">
      <Container className="mt-5">
        <Row>
          {loading ? (
            <Loader />
          ) : (
            <React.Fragment>
              {movies &&
                movies.map((item) => (
                  <SingleMovie key={item._id} col="3" movie={item} />
                ))}
              {/* <div className="mt-4 text-center">
              <button
                type="button"
                onClick={loadMore}
                className="btn btn-success"
              >
                Load More
              </button>
            </div> */}
            </React.Fragment>
          )}
        </Row>
      </Container>
    </Layout>
  );
};

export default MovieList;
