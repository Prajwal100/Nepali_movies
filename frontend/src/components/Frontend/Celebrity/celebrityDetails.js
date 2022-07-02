import React, { useEffect } from "react";
import "./celebrityDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getCelebrityDetails,
  clearErrors,
} from "../../../actions/celebrityActions";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../layout/Loader";
import Moment from "moment";
import Layout from "../layout";
import MetaData from "../layout/MetaData";
const CelebrityDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, error, celebrity } = useSelector(
    (state) => state.celebrityDetails
  );
  useEffect(() => {
    console.log(id);
    dispatch(getCelebrityDetails(id));

    if (error) {
      toast.error(error);
      dispatch(clearErrors);
    }
  }, [dispatch, id, error]);

  // convert digits to K, M ...
  const followersFormatter = (num) => {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + "K";
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num <= 999) {
      return num;
    }
  };
  return (
    <Layout>
      <MetaData title="Login | Nepali Movies" />
      {loading ? (
        <Loader />
      ) : (
        <div className="container mt-5 py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src={celebrity.image}
                    alt={celebrity.name}
                    className="rounded-circle img-fluid"
                  />
                  <h5 className="my-3">{celebrity.name}</h5>
                  <p className="text-muted mb-4">{celebrity.address}</p>
                  <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-dark">
                      Follow
                    </button>
                    <button type="button" className="btn btn-info ms-1">
                      {followersFormatter(celebrity.followers)} Followers
                    </button>
                  </div>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <strong>Birthday :</strong>
                      <p className="mb-0">
                        {Moment(celebrity.dob).format("YYYY-DD-MM")}
                      </p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <strong>Gender :</strong>

                      <p className="mb-0">{celebrity.gender}</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <strong>Place Of Birth :</strong>

                      <p className="mb-0">{celebrity.address}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <h2>{celebrity.name}</h2>
                    <p>{celebrity.biography}</p>
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

export default CelebrityDetail;
