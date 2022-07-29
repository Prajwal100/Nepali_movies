import React, { useEffect } from "react";
import SingleMovie from "./SingleMovie";
import "./movieDetails.css";
import { Row, Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailsMovies, clearErrors } from "../../../actions/movieActions";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../layout/Loader";
import Moment from "moment";
import Layout from "../layout";
import MetaData from "../layout/MetaData";
const MovieDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, error, movie } = useSelector((state) => state.movieDetails);
  useEffect(() => {
    console.log(id);
    dispatch(getDetailsMovies(id));

    if (error) {
      toast.error(error);
      dispatch(clearErrors);
    }
  }, [dispatch, id, error]);

  return (
    <Layout>
      <MetaData title="Celebrity Details" />
      <Toaster />
      {loading ? (
        <Loader />
      ) : (
        <div className="container mt-5 py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src={`http://localhost:4000/${movie.image}`}
                    alt={movie.name}
                    className="thumbnail-circle img-fluid"
                  />
                  <h5 className="my-3">{movie.name}</h5>
                  <p className="text-muted mb-4">{movie.address}</p>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <strong>Release Date :</strong>
                      <p className="mb-0">
                        {Moment(movie.releaseDate).format("YYYY-DD-MM")}
                      </p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <strong>Category :</strong>

                      <p className="mb-0">{movie.category}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <h2>{movie.name}</h2>
                    <p>{movie.overview}</p>
                  </div>
                  {/* <Row>
                    <SingleMovie col="4" />
                    <SingleMovie col="4" />
                    <SingleMovie col="4" />
                  </Row> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default MovieDetails;
