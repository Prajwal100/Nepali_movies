import React, { useState, useEffect } from "react";
import AdminLayouts from "../Layout";
import Loader from "../Layout/Loader";
import { Link, useNavigate,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { capitalizeFistLetter, validateForm,generateImageUrl,toDatetimeLocal } from "../../utils/helper";
import { listCelebrities } from "../../actions/celebrityActions";
import { updateMovie ,moviesActions} from "../../actions/movieActions";
import Select from "react-select";




function EditMovieComponent() {
  const initialErrors = {
    name: "",
    image: "",
    category: "",
  };
  const [errors, setErrors] = useState(initialErrors);
  const inputValidators = () => {
    let err = { ...errors };

    err.name = !name ? "Movie name is required." : "";
    err.category = !category ? "Category field is required." : "";

    setErrors({ ...err });
    return validateForm(err);
  };
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [defaultImage, setDefaultImage] = useState(
    "https://user-images.githubusercontent.com/43302778/106805462-7a908400-6645-11eb-958f-cd72b74a17b3.jpg"
  );

  const [casts, setCasts] = useState(null);
  const [name, setName] = useState("");
  const [releaseDate, setReleaseDate] = useState(null);
  const [category, setCategory] = useState(null);
  const [image, setImage] = useState(null);
  const [uploadedBy, setUploadedBy] = useState("");
  const [overview, setOverview] = useState("");
  const { celebrities } = useSelector((state) => state.celebrityReducer);
  const {movies} = useSelector((state) => state.movieReducer);
  const categories = ["popular", "old", "new", "action"];

  useEffect(() => {
    
    if(!movies || movies.length===0){
      dispatch(moviesActions());
    }
    
    const movie=movies.find((movie)=>movie._id.toString() ===id)
    if(movie){
      setName(movie.name);
      setReleaseDate(toDatetimeLocal(movie.releaseDate));
      setDefaultImage(generateImageUrl(movie.image));
      setCategory(movie.category);
      setOverview(movie.overview);
      setUploadedBy(movie.uploadedBy);
    }
    dispatch(listCelebrities());
  }, [dispatch]);

  const handleCasts = (value) => {
    setCasts(value);
  };
  const handleChange = (e) => {
    if (e.target.name === "image") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setDefaultImage(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValidators()) {
      let formData = new FormData();
      formData.set("_id",id)
      formData.set("name", name);
      formData.set("releaseDate", releaseDate);
      formData.set("category", category);
      formData.set("image", image);
      formData.set("casts", casts);
      formData.set("overview", overview);

      dispatch(updateMovie(formData,id));

      navigate("/admin/movies");
      
    }
  };
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              <i className="fa fa-plus"></i> Edit Movie
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
                      value={name || ""}
                      onChange={(e) => setName(e.target.value)}
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
                      type="datetime-local"
                      className="form-control"
                      placeholder="Release Date"
                      name="releaseDate"
                      value={releaseDate || ""}
                      onChange={(e) => setReleaseDate(e.target.value)}
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
                      onChange={(e) => setCategory(e.target.value)}
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
                      onChange={handleCasts}
                    />
                   
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
                      value={uploadedBy}
                      onChange={(e) => setUploadedBy(e.target.value)}
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
                      onChange={(e) => setOverview(e.target.value)}
                    >
                      {overview}
                    </textarea>
                  </div>
                </div>
                <div className="col-6">
                  <button type="submit" className="btn btn-success">
                    Update
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
function EditMovie() {
  return (
    <AdminLayouts
      children={<EditMovieComponent />}
      title="Edit Movie || Dashboard"
    />
  );
}

export default EditMovie;
