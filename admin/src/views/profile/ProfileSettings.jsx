import React, { useEffect, useState } from "react";
import AdminLayouts from "../Layout";
import { useSelector, useDispatch } from "react-redux";
import {validateForm} from '../../utils/helper'
import {profileUpdate} from '../../actions/userActions'
function ProfileSettingsPageComponent() {
  const initialFormErrors={
    name:"",
    email:"",
    password:"",
    c_password:""
  };
  
  const [errors,setErrors]= useState(initialFormErrors);
  
  const validateInputs=()=>{
    const err={...errors};
    
    err.name = !formState.values.name ? "Name field is required" : "";
    err.email = !formState.values.email ? "Email field is required" : "";
    // err.password = formState.values.password.length <6 ? "Password must be at least 6 characters." : "";
    // err.c_password =formState.values.password !== formState.values.c_password ? "Password does not match." : "";
    
    setErrors(err);
    
    return validateForm(err);
  }
  
  const [formState, setFormState] = useState({ values: {} });

  const { profile } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  useEffect(() => {
    setFormState({values:profile})
  },[dispatch,profile]);

  const handleChange = (e) => {
    setFormState((formState)=>({
      ...formState,
      values:{
        ...formState.values,
        [e.target.name]: e.target.value
      }
    }))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateInputs()){
      dispatch(profileUpdate(formState.values));
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col-md-4">
      <div className="card bg-white mb-4">
            <div className="card-body text-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="avatar"
                className="rounded-circle img-fluid"
                style={{ width: "150px" }}
              />
              <h5 className="my-3">{profile.name} <span className="badge badge-success">{profile.role}</span></h5>
              <p className="text-muted mb-1">{profile.email}</p>
            </div>
          </div>
      </div>
      <div className="col-md-8">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              <i className="fa fa-user-cog"></i> Update Profile
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
                    {errors.name.length > 0 && (
                            <div className="text-danger">
                              {errors.name}
                            </div>
                          )}
                  </div>
                </div>

                <div className="col-6">
                  <div className="form-group">
                  <label>Email</label>
                    <input
                    disabled
                      type="email"
                      className="form-control"
                      placeholder="Enter Email address"
                      name="email"
                      value={formState.values.email || ""}
                      onChange={handleChange}
                    />
                     {errors.email.length > 0 && (
                            <div className="text-danger">
                              {errors.email}
                            </div>
                          )}
                  </div>
                </div>
                {/* <div className="col-6">
                  <div className="form-group">
                    <label>Current Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="******"
                      name="password"
                      value={formState.values.password || ""}
                      onChange={handleChange}
                    />
                    {errors.password.length > 0 && (
                            <div className="text-danger">
                              {errors.password}
                            </div>
                          )}
                  </div>
                </div>

                <div className="col-6">
                  <div className="form-group">
                  <label>Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter at least 6 characters"
                      name="c_password"
                      value={formState.values.c_password || ""}
                      onChange={handleChange}
                    />
                    {errors.c_password.length > 0 && (
                            <div className="text-danger">
                              {errors.c_password}
                            </div>
                          )}
                  </div>
                </div> */}
            
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
      </div>
    </div>
  );
}

function ProfileSettingsPage() {
  return (
    <AdminLayouts
      children={<ProfileSettingsPageComponent />}
      title="Profile Settings Page || Dashboard"
    />
  );
}

export default ProfileSettingsPage;
