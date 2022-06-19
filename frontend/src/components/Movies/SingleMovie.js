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
              <a className="movie_image" title="Kabaddi 4">
                <img
                  loading="lazy"
                  className="poster"
                  src="https://www.trybooking.com/UserData/Homepage/G/EHI901673-dbe971d96d1f40b8b19a9d438d7c3a64.jpeg"
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
              <a href="/tv/76479" title="Kabaddi 4">
                Kabaddi 4
              </a>
            </h2>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleMovie;
