import React from "react";
import AdminLayouts from "../Layout";
import Loader from "../Layout/Loader";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function MoviesList() {
  const { loading, error, celebrities } = useSelector(
    (state) => state.celebrities
  );
  return (
    <>
      <React.Fragment>
        <div className="container-fluid">
          {loading ? (
            <Loader />
          ) : (
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  All Movies{" "}
                  <Link to="/admin/movie/create" className="btn btn-warning">
                    <i className="fa fa-plus"></i> Create
                  </Link>
                </h6>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellSpacing="0"
                  >
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Uploaded By</th>
                        <th>Review</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Uploaded By</th>
                        <th>Review</th>
                        <th>Actions</th>
                      </tr>
                    </tfoot>
                    <tbody>
                      {/* {celebrities.map((celebrity) => (
                        <tr>
                          <td>{celebrity.name}</td>
                          <td>
                            <img
                              src={generateImageUrl(celebrity.image)}
                              alt={celebrity.name}
                              style={{ width: "60px" }}
                            />
                          </td>
                          <td>{celebrity.gender}</td>
                          <td>{moment(celebrity.dob).format("YYYY-MMM-DD")}</td>
                          <td>{celebrity.address}</td>
                          <td>
                            <Link
                              to={`/admin/celebrity/edit/${celebrity._id}`}
                              className="btn btn-primary btn-sm"
                            >
                              <i className="fa fa-edit"></i>
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-danger btn-sm ml-2"
                              onClick={() => deleteHandler(celebrity._id)}
                            >
                              <i className="fa fa-trash-alt"></i>
                            </Link>
                          </td>
                        </tr>
                      ))} */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </React.Fragment>
    </>
  );
}
function Movies() {
  return (
    <AdminLayouts children={<MoviesList />} title="Movies List || Dashboard" />
  );
}

export default Movies;
