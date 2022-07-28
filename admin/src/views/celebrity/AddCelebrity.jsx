import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {createCelebrity} from '../../actions/celebrityActions'
import {useNavigate,Link} from 'react-router-dom'
import AdminLayouts from "../Layout";
import {  validateForm } from "../../utils/helper";

function AddCelebrityComponent() {
  const initialFormErrors = {
    name: "",
    dob: "",
    image: "",
    gender: "",
    address: "",
  };

  const [errors, setErrors] = useState(initialFormErrors);
  const validateInputs = () => {
    const err = { ...errors };

    err.name = !formState.values.name ? "Celebrity name is required" : "";
    err.dob = !formState.values.dob ? "Date of Birth is required" : "";

    err.image = !formState.values.image ? "Image field is required" : "";

    err.gender = !formState.values.gender ? "Gender field is required" : "";

    err.address = !formState.values.address ? "Address field is required" : "";

    setErrors({ ...err });
    return validateForm(err);
  };
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [defaultImage,setDefaultImage] = useState('https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg')
  const [formState, setFormState] = useState({
    values: {},
  });

  const handleChange = (e) => {
    if(e.target.name ==="image"){
      const reader=new FileReader();
      reader.onload=()=>{
        if(reader.readyState===2){
          setDefaultImage(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [e.target.name]: e.target.type==="file" ? e.target.files[0]: e.target.value,
      },
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateInputs()){
      const { name } = formState.values;
    if (name) {
      dispatch(createCelebrity(formState.values));
      setFormState({ values: {} });
      navigate("/admin/celebrities")
    }
    }
  };
  return  <React.Fragment>
  <div className="container-fluid">
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">
          <i className="fa fa-plus"></i> Add Celebrity
        </h6>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label>Name <span className="text-danger">*</span></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Celebrity name"
                  name="name"
                  value={formState.values.name || ''}
                  onChange={handleChange}
                />
                 {errors.name.length > 0 && (
                        <div className="text-danger">{errors.name}</div>
                      )}
              </div>
            </div>

            <div className="col-6">
              <div className="form-group">
                <label>Date Of Birth <span className="text-danger">*</span></label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Date of birth"
                  name="dob"
                  value={formState.values.dob || ''}
                  onChange={handleChange}
                />
                 {errors.dob.length > 0 && (
                        <div className="text-danger">{errors.dob}</div>
                      )}
              </div>
            </div>

            <div className="col-6">
              <div className="form-group">
                <label>Image <span className="text-danger">*</span></label>
                <input type="file" accept="image/*" className="form-control" name="image" onChange={handleChange}/>
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
                <label>Gender <span className="text-danger">*</span></label>
                <select className="form-control" name="gender" onChange={handleChange}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                
                {errors.gender.length > 0 && (
                        <div className="text-danger">{errors.gender}</div>
                      )}
              </div>
            </div>

            <div className="col-6">
              <div className="form-group">
                <label>Address <span className="text-danger">*</span></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Address"
                  name="address"
                  onChange={handleChange}
                />
                 {errors.address.length > 0 && (
                        <div className="text-danger">{errors.address}</div>
                      )}
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label>Biography</label>
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
              <Link
                      to="/admin/celebrities"
                      className="btn btn-warning ml-2"
                    >
                      Back
                    </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</React.Fragment>;
}

function AddCelebrity() {
  return <AdminLayouts children={<AddCelebrityComponent />} title="Add celebrity || Dashboard" />;
}

export default AddCelebrity;