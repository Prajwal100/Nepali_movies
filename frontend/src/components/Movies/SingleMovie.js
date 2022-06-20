import React from "react";
import "./SingleMovie.css";
import { AiOutlineHeart } from "react-icons/ai";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
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
              <Link to={`movie/${props.movie._id}`} title={props.movie.name}>
                {props.movie.name}
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleMovie;
