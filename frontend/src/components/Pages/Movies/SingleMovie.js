import React from "react";
import "./SingleMovie.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";

import {
  addToWishlist,
  removeWishlist,
} from "../../../actions/wishlistActions";
const SingleMovie = (props) => {
  const dispatch = useDispatch();

  const { wishlistItems } = useSelector((state) => state.wishlist);
  console.log(wishlistItems);

  const itemInWishlist = wishlistItems.some((i) => i.movie === props.movie._id);
  const addToWishlistHandler = () => {
    console.log(itemInWishlist, props.movie._id);
    if (itemInWishlist) {
      dispatch(removeWishlist(props.movie._id));
      toast.success("Item successfully removed from wishlist.");
    } else {
      dispatch(addToWishlist(props.movie._id));
      toast.success("Item successfully added to wishlist.");
    }
  };
  return (
    <Col xs={props.col} className="mt-4">
      <div className="border">
        <div className="movie_card">
          <div className="image">
            <div className="wrapper">
              <Link
                to={`/movie/${props.movie._id}`}
                className="movie_image"
                title={props.movie.name}
              >
                <img
                  loading="lazy"
                  className="poster"
                  src={props.movie.image}
                  alt=""
                />
              </Link>
            </div>
            <div className="options">
              <Link className="no_click" to="" onClick={addToWishlistHandler}>
                {itemInWishlist ? <AiFillHeart /> : <AiOutlineHeart />}
              </Link>
            </div>
          </div>
          <div className="content">
            <h2 className="text-center">
              <Link to={`/movie/${props.movie._id}`} title={props.movie.name}>
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
