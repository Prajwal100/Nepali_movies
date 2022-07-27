import React, { useEffect, useState } from "react";
import AdminLayouts from "../Layout";
import { useSelector, useDispatch } from "react-redux";
import { getSettingsInfo, updateSettings } from "../../actions/adminActions";
import Loader from "../Layout/Loader";
import { validateForm } from "../../utils/helper";
function GeneralSettingsComponent() {
  const initialFormErrors = {
    site_title: "",
    email: "",
    phone: "",
    address: "",
  };
  const [errors, setErrors] = useState(initialFormErrors);

  const validateInputs = () => {
    const err = { ...errors };

    err.site_title = !formState.values.site_title
      ? "Site title is required"
      : "";
    err.email = !formState.values.email ? "Email field is required" : "";

    err.phone = !formState.values.phone ? "Phone field is required" : "";

    err.address = !formState.values.address ? "Address field is required" : "";

    setErrors({ ...err });
    return validateForm(err);
  };
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
    if (validateInputs()) {
      dispatch(updateSettings(formState.values));
      dispatch(getSettingsInfo());
    }
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
                          <label>
                            Site Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter site title"
                            name="site_title"
                            value={formState.values.site_title || ""}
                            onChange={handleChange}
                          />
                          {errors.site_title.length > 0 && (
                            <div className="text-danger">
                              {errors.site_title}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="form-group">
                          <label>
                            Email Address <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Email address"
                            name="email"
                            value={formState.values.email || ""}
                            onChange={handleChange}
                          />
                          {errors.email.length > 0 && (
                            <div className="text-danger">{errors.email}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label>
                            Phone Number <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter phone number"
                            name="phone"
                            value={formState.values.phone || ""}
                            onChange={handleChange}
                          />
                          {errors.phone.length > 0 && (
                            <div className="text-danger">{errors.phone}</div>
                          )}
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="form-group">
                          <label>
                            Address <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter address details"
                            name="address"
                            value={formState.values.address || ""}
                            onChange={handleChange}
                          />
                          {errors.address.length > 0 && (
                            <div className="text-danger">{errors.address}</div>
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
