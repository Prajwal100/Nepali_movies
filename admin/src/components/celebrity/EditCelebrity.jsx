import React, { useState,useEffect } from "react";
import AdminLayouts from "../Layout";
import { useDispatch, useSelector } from "react-redux";
import {createCelebrity} from '../../actions/celebrityActions'
import {Link, useNavigate,useParams } from 'react-router-dom'


const EditCelebrityComponent = ({match}) => {
  const {id}=useParams();
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    values: {},
  });
  
  const {celebrity}=useSelector((state)=>state.celebrityEdit);
  
  useEffect(()=>{
    setFormState({values:{}})
    
    if(celebrity._id !==id){
      
    }
    else{
      setFormState({values:celebrity})
    }
  },[celebrity,dispatch,id])

  const handleChange = (e) => {
    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [e.target.name]: e.target.value,
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
      // navigate("/celebrities")
      setSubmitted(false);
    }
  };
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              <i className="fa fa-plus"></i> Update Celebrity
            </h6>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit} enctype="multipart/form-data">
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
                    <input type="file" className="form-control" name="image" onChange={handleChange}/>
                    <div className="text-danger">Image field is required</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label>Preview</label>
                    <img
                      src="https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg"
                      alt="preview"
                      className="img-fluid"
                      style={{ width: "160px", height: "160px" }}
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
                  <Link to="/admin/celebrities" className="btn btn-warning ml-2">Cancel</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
function EditCelebrity() {
  return <AdminLayouts children={<EditCelebrityComponent />} />;
}

export default EditCelebrity;
