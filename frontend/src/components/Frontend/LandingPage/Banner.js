import React from "react";
import "./Banner.css";
import { Container } from "react-bootstrap";
const Banner = () => {
  return (
    <section
      className="banner_inner"
      style={{
        background: `linear-gradient(to right, rgba(3, 37, 65, 0.8) 0%, rgba(3, 37, 65, 0) 100%), url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/7VrRna8S3x6xbijooeBmxqvHXiu.jpg")`,
      }}
    >
      <Container className="media">
        <div className="column_wrapper">
          <div className="content_wrapper wrap">
            <div className="heading">
              <h2>Welcome.</h2>
              <h3>Explore the most popular Nepali Movies now.</h3>
            </div>

            <div className="search">
              {/* <form id="inner_search_form" action="/search" method="get" accept-charset="utf-8">
                
                <label>
                  <input dir="auto" id="inner_search_v4" name="query" type="text" tabindex="1" autocorrect="off" autofill="off" autocomplete="off" spellcheck="false" placeholder="Search for a movie, tv show, person......" value="">
                </label>
                <input type="submit" value="Search">
              </form> */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Banner;
