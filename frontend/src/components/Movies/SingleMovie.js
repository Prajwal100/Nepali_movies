import React from "react";
import "./SingleMovie.css";
import { AiOutlineHeart } from "react-icons/ai";
import { Col } from "react-bootstrap";
const SingleMovie = (props) => {
  return (
    <Col xs={props.col} className="mt-4">
      <div className="border">
        <div className="movie_card">
          <div className="image">
            <div className="wrapper">
              <a className="movie_image" title={props.movie.name}>
                <img
                  loading="lazy"
                  className="poster"
                  src={props.movie.image}
                  alt=""
                />
              </a>
            </div>
            <div className="options">
              <a className="no_click" href="#">
                <AiOutlineHeart />
              </a>
            </div>
          </div>
          <div className="content">
            <h2 className="text-center">
              <a href="/tv/76479" title={props.movie.name}>
                {props.movie.name}
              </a>
            </h2>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleMovie;
