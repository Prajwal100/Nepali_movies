import React, { useState } from "react";
import AdminLayouts from "../Layout";
import Loader from "../Layout/Loader";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function CreateMovie() {
  const { loading, error, movies } = useSelector((state) => state.movieReducer);

  const [formState, setFormState] = useState({ values: {} });
  const [submitted, setSubmitted] = useState(false);
  const [defaultImage, setDefaultImage] = useState(
    "https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg"
  );

  const handleChange = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              <i className="fa fa-plus"></i> Add Movie
            </h6>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Celebrity name"
                      name="name"
                      value={formState.values.name || ""}
                      onChange={handleChange}
                    />
                    {submitted && !formState.values.name && (
                      <div className="text-danger">Name field is required</div>
                    )}
                  </div>
                </div>

                <div className="col-6">
                  <div className="form-group">
                    <label>Release Date</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Date of birth"
                      name="dob"
                      value={formState.values.dob || ""}
                      onChange={handleChange}
                    />
                    {submitted && !formState.values.name && (
                      <div className="text-danger">DOB field is required</div>
                    )}
                  </div>
                </div>

                <div className="col-6">
                  <div className="form-group">
                    <label>Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      className="form-control"
                      name="image"
                      onChange={handleChange}
                    />
                    {submitted && !formState.values.image && (
                      <div className="text-danger">Image field is required</div>
                    )}
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label className="mr-3">Preview</label>
                    <img
                      src={defaultImage}
                      alt="preview"
                      className="img-fluid"
                      style={{ maxWidth: "160px", maxHeight: "160px" }}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label>Category</label>
                    <select
                      className="form-control"
                      name="gender"
                      onChange={handleChange}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label>Casts</label>
                    <select
                      className="form-control"
                      name="gender"
                      onChange={handleChange}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>

                <div className="col-6">
                  <div className="form-group">
                    <label>Uploaded By</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Address"
                      name="address"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label>Review</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter Biography"
                      name="biography"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className="col-6">
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                  <Link to="/admin/movies" className="btn btn-warning ml-2">
                    Cancel
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
function AddMovie() {
  return (
    <AdminLayouts
      children={<CreateMovie />}
      title="Create Movie || Dashboard"
    />
  );
}

export default AddMovie;
