import React from "react";
import Layout from "../layout";

import Banner from "../LandingPage/Banner";
import MovieList from "../Movies/MovieList";

const HomeComponent = () => {
  return (
    <React.Fragment>
      <Banner />
      <MovieList />
    </React.Fragment>
  );
};
const Home = (props) => {
  return (
    <React.Fragment>
      <Layout children={<HomeComponent />} />
    </React.Fragment>
  );
};

export default Home;
