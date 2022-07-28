import React, { useEffect, useState } from "react";
import Layout from "../layout";

import Banner from "../LandingPage/Banner";
import { useSelector, useDispatch } from "react-redux";
import { Row, Container, Col } from "react-bootstrap";
import Loader from "../layout/Loader";
import SingleMovie from "./../Movies/SingleMovie";
import { getMovies } from "../../../actions/movieActions";
import { loadUser } from "../../../actions/userActions";

const HomeComponent = () => {
  const [page, setPage] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies(page));
    dispatch(loadUser());
  }, [dispatch, page]);
  const { loading, movies } = useSelector((state) => state.movies);

  return (
    <React.Fragment>
      <Banner />
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
    </React.Fragment>
  );
};
const Home = (props) => {
  return (
    <React.Fragment>
      <Layout children={<HomeComponent />} title="Best Nepali Movies " />
    </React.Fragment>
  );
};

export default Home;
