import React, { useState } from "react";
import AdminLayouts from "../Layout";
import { useDispatch, useSelector } from "react-redux";
import {createCelebrity} from '../../actions/celebrityActions'
import {useNavigate} from 'react-router-dom'
const AddCelebrityComponent = () => {
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
      console.log(reader);
      reader.onload=()=>{
        console.log(reader);
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
    setSubmitted(true);
    const { name } = formState.values;
    if (name) {
      dispatch(createCelebrity(formState.values));
      setFormState({ values: {} });
      navigate("/admin/celebrities")
      setSubmitted(false);
    }
  };
  return (
    <React.Fragment>
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
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Celebrity name"
                      name="name"
                      value={formState.values.name || ''}
                      onChange={handleChange}
                    />
                    {submitted && !formState.values.name && (
                      <div className="text-danger">Name field is required</div>
                    )}
                  </div>
                </div>

                <div className="col-6">
                  <div className="form-group">
                    <label>Date Of Birth</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Date of birth"
                      name="dob"
                      value={formState.values.dob || ''}
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
                    <input type="file" accept="image/*" className="form-control" name="image" onChange={handleChange}/>
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
                    <label>Gender</label>
                    <select className="form-control" name="gender" onChange={handleChange}>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>

                <div className="col-6">
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Address"
                      name="address"
                      onChange={handleChange}
                    />
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
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
function AddCelebrity() {
  return <AdminLayouts children={<AddCelebrityComponent />} />;
}

export default AddCelebrity;
