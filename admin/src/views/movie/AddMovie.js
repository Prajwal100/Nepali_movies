import React, { useState, useEffect } from "react";
import AdminLayouts from "../Layout";
import Loader from "../Layout/Loader";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { capitalizeFistLetter, validateForm } from "../../utils/helper";
import { listCelebrities } from "../../actions/celebrityActions";
import Select from "react-select";
function CreateMovie() {
  const initialErrors = {
    name: "",
    image: "",
    category: "",
  };
  const [errors, setErrors] = useState(initialErrors);
  const inputValidators = () => {
    let err = { ...errors };

    err.name = !formState.values.name ? "Movie name is required." : "";
    err.image = !formState.values.name ? "Image is required." : "";
    err.category = !formState.values.category
      ? "Category field is required."
      : "";

    setErrors({ ...err });
    return validateForm(err);
  };

  const dispatch = useDispatch();
  const [formState, setFormState] = useState({ values: {} });
  const [defaultImage, setDefaultImage] = useState(
    "https://user-images.githubusercontent.com/43302778/106805462-7a908400-6645-11eb-958f-cd72b74a17b3.jpg"
  );
  const { celebrities } = useSelector((state) => state.celebrityReducer);
  const categories = ["popular", "old", "new", "action"];

  useEffect(() => {
    dispatch(listCelebrities());
  }, [dispatch]);
  const handleChange = (e) => {
    console.log(e.target.name);
    // if (e.target.name === "image") {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     if (reader.readyState === 2) {
    //       setDefaultImage(reader.result);
    //     }
    //   };
    //   reader.readAsDataURL(e.target.files[0]);
    // }
    // setFormState((formState) => ({
    //   ...formState,
    //   values: {
    //     ...formState.values,
    //     [e.target.name]: e.target.value,
    //   },
    // }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValidators()) {
    }
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
                      placeholder="Enter movie name"
                      name="name"
                      value={formState.values.name || ""}
                      onChange={handleChange}
                    />
                    {errors.name.length > 0 && (
                      <div className="text-danger">{errors.name}</div>
                    )}
                  </div>
                </div>

                <div className="col-6">
                  <div className="form-group">
                    <label>Release Date</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Release Date"
                      name="releaseDate"
                      value={formState.values.releaseDate || ""}
                      onChange={handleChange}
                    />
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
                    {errors.image.length > 0 && (
                      <div className="text-danger">{errors.image}</div>
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
                      name="category"
                      onChange={handleChange}
                    >
                      {categories.map((category) => {
                        return (
                          <option value={category}>
                            {capitalizeFistLetter(category)}
                          </option>
                        );
                      })}
                    </select>
                    {errors.category.length > 0 && (
                      <div className="text-danger">{errors.category}</div>
                    )}
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label>Casts</label>
                    <Select
                      isMulti
                      options={celebrities.map((celebrity) => {
                        return {
                          _id: celebrity._id,
                          value: celebrity._id,
                          label: celebrity.name,
                        };
                      })}
                      menuPlacement="auto"
                      onChange={handleChange}
                    />
                    {/* <select
                      className="form-control"
                      name="casts"
                      onChange={handleChange}
                      multiple="true"
                    >
                      {celebrities.map((celebrity) => {
                        return (
                          <option value="celebrity">
                            {capitalizeFistLetter(celebrity.name)}
                          </option>
                        );
                      })}
                    </select> */}
                  </div>
                </div>

                <div className="col-6">
                  <div className="form-group">
                    <label>Uploaded By</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter uploader name"
                      name="uploadedBy"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label>Review</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter overview"
                      name="overview"
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
