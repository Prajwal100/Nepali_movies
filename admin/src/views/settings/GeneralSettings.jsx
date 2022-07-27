import React, { useEffect, useState } from "react";
import AdminLayouts from "../Layout";
import { useSelector, useDispatch } from "react-redux";
function GeneralSettingsComponent() {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({ values: {} });

  const { profile } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChange = (e) => {};
  const handleSubmit = (e) => {};
  return (
    <div className="container-fluid">
      <div className="row">
     
      <div className="col-md-12">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              <i className="fa fa-cogs"></i> Update Settings
            </h6>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label>Site Name</label>
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
                  <label>Email Address</label>
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
                    <label>Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter phone number"
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
                  <label>Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter address details"
                      name="email"
                      value={formState.values.email || ""}
                      onChange={handleChange}
                    />
                    {submitted && !formState.values.email && (
                      <div className="text-danger">Email field is required</div>
                    )}
                  </div>
                </div>
                
                <div className="col-12">
                  <div className="form-group">
                  <label>Copyright Text</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter copyright content here"
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
                    Update
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

function GeneralSettings() {
  return (
    <AdminLayouts
      children={<GeneralSettingsComponent />}
      title="Settings Page || Dashboard"
    />
  );
}

export default GeneralSettings;
