import React, { useEffect, useState } from "react";
import AdminLayouts from "../Layout";
import { useSelector, useDispatch } from "react-redux";
import { getSettingsInfo, updateSettings } from "../../actions/adminActions";
import Loader from "../Layout/Loader";
function GeneralSettingsComponent() {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({ values: {} });

  const { settings, loading } = useSelector((state) => state.dashboard);

  const dispatch = useDispatch();

  useEffect(() => {
    
    setFormState({ values: {} });
    dispatch(getSettingsInfo());

    setFormState({ values: settings });
  }, [dispatch]);

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
    dispatch(updateSettings(formState.values));
    setSubmitted(false);
    dispatch(getSettingsInfo());
  };
  return (
    <div className="container-fluid">
      {loading ? (
        <Loader />
      ) : (
        <>
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
                            placeholder="Enter site title"
                            name="site_title"
                            value={formState.values.site_title || ""}
                            onChange={handleChange}
                          />
                          {submitted && !formState.values.site_title && (
                            <div className="text-danger">
                              Site Title field is required
                            </div>
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
                            <div className="text-danger">
                              Email field is required
                            </div>
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
                            name="phone"
                            value={formState.values.phone || ""}
                            onChange={handleChange}
                          />
                          {submitted && !formState.values.phone && (
                            <div className="text-danger">
                              Phone number field is required
                            </div>
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
                            name="address"
                            value={formState.values.address || ""}
                            onChange={handleChange}
                          />
                          {submitted && !formState.values.address && (
                            <div className="text-danger">
                              Address field is required
                            </div>
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
                            name="copyright"
                            value={formState.values.copyright || ""}
                            onChange={handleChange}
                          />
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
        </>
      )}
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
