import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, clearErrors } from "../../../actions/userActions";
import { FaSpinner } from "react-icons/fa";
import toast from "react-hot-toast";
import Loader from "../layout/Loader";
import MetaData from "../layout/MetaData";
import Layout from "../layout";
const RegisterPage = ({ history }) => {
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.authReducer
  );

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    cpassword: "",
    gender: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, isAuthenticated, error, history, navigate]);

  const { name, username, email, password, cpassword, gender } = user;
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(
    "https://bukovskevrchy.pl/img/64c9c78b19101eadf6e459ddbb0fd69a.jpg"
  );

  const submitHandler = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      toast.error("Password length must be at least 6 characters");
      return;
    }

    if (password !== cpassword) {
      toast.error("Password does not match");
      return;
    }
    let formData = new FormData();
    formData.set("name", name);
    formData.set("username", username);
    formData.set("email", email);
    formData.set("password", password);
    formData.set("gender", gender);

    console.log("register", JSON.stringify(formData), formData, name);
    dispatch(register(formData));
  };

  const onChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
    }
  };
  return (
    <Layout>
      <MetaData title="Register | Nepali Movies" />
      <section>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="row card-body p-4 p-lg-5 text-black">
                      <form
                        onSubmit={submitHandler}
                        encType="multipart/form-data"
                      >
                        <div className="d-flex mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x"></i>
                          <span className="h1 fw-bold mb-0">Nepali Movies</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3">
                          Sign Up into your account
                        </h5>

                        <div className="row">
                          <div className="col-6">
                            <div className="form-outline mb-4">
                              <input
                                type="text"
                                id="form2Example17"
                                className="form-control form-control-lg"
                                value={name}
                                name="name"
                                onChange={onChange}
                              />
                              <label
                                className="form-label"
                                htmlFor="form2Example17"
                              >
                                Full name
                              </label>
                            </div>
                          </div>

                          <div className="col-6">
                            <div className="form-outline mb-4">
                              <input
                                name="username"
                                type="text"
                                id="form2Example17"
                                className="form-control form-control-lg"
                                value={username}
                                onChange={onChange}
                              />
                              <label
                                className="form-label"
                                htmlFor="form2Example17"
                              >
                                Username
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-outline mb-4">
                              <input
                                name="email"
                                type="email"
                                id="form2Example27"
                                className="form-control form-control-lg"
                                value={email}
                                onChange={onChange}
                              />
                              <label
                                className="form-label"
                                htmlFor="form2Example27"
                              >
                                Email Address
                              </label>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-outline mb-4">
                              <select
                                onChange={onChange}
                                name="gender"
                                className="form-control"
                              >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                              </select>
                              <label
                                className="form-label"
                                htmlFor="form2Example27"
                              >
                                Gender
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-outline mb-4">
                              <input
                                type="password"
                                id="form2Example27"
                                className="form-control form-control-lg"
                                value={password}
                                name="password"
                                onChange={onChange}
                              />
                              <label
                                className="form-label"
                                htmlFor="form2Example27"
                              >
                                Password
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-outline mb-4">
                              <input
                                type="password"
                                id="form2Example27"
                                className="form-control form-control-lg"
                                value={cpassword}
                                name="cpassword"
                                onChange={onChange}
                              />
                              <label
                                className="form-label"
                                htmlFor="form2Example27"
                              >
                                Confirm Password
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <img
                            src={avatarPreview}
                            style={{ width: "200px", height: "auto" }}
                            className="img-fluid rounded-circle mb-2"
                            alt="avatar"
                          />
                          <br />
                          <label
                            className="form-label"
                            htmlFor="form2Example27"
                          >
                            Avatar Preview
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="file"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            onChange={onChange}
                            name="avatar"
                            accept="images/*"
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example27"
                          >
                            Avatar
                          </label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                          >
                            {/* {loading ? (
                              <FaSpinner icon="spinner" className="spinner" />
                            ) : (
                              "Register"
                            )} */}
                            Register
                          </button>
                        </div>

                        <p className="mb-5 pb-lg-2">
                          Already have an account?{" "}
                          <Link to="/login">Login here</Link>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RegisterPage;
