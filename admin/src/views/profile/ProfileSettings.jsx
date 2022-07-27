import React, { useEffect, useState } from "react";
import AdminLayouts from "../Layout";
import { useSelector, useDispatch } from "react-redux";
function ProfileSettingsPageComponent() {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({ values: {} });

  const { profile } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChange = (e) => {};
  const handleSubmit = (e) => {};
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
                    {submitted && !formState.values.name && (
                      <div className="text-danger">Name field is required</div>
                    )}
                  </div>
                </div>

                <div className="col-6">
                  <div className="form-group">
                  <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email address"
                      name="email"
                      value={formState.values.email || ""}
                      onChange={handleChange}
                    />
                    {submitted && !formState.values.email && (
                      <div className="text-danger">Email field is required</div>
                    )}
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label>Current Password</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="******"
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
                  <label>New Password</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter at least 6 characters"
                      name="email"
                      value={formState.values.email || ""}
                      onChange={handleChange}
                    />
                    {submitted && !formState.values.email && (
                      <div className="text-danger">Email field is required</div>
                    )}
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
