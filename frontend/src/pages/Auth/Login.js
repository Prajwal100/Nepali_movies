import React, { useEffect, useState } from "react";
import Loader from "../../components/Layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { login, clearErrors } from "../../actions/userActions";
import MetaData from "../../components/Layout/MetaData";

const LoginPage = ({ history }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = location.search
    ? location.search.split("=")[1]
    : "user/dashboard";

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.authReducer
  );
  useEffect(() => {
    if (isAuthenticated) {
      navigate(`/${redirect}`);
    }
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
  }, [dispatch, isAuthenticated, error, history, redirect, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <React.Fragment>
      <MetaData title="Login | Nepali Movies" />
      {loading ? (
        <Loader />
      ) : (
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
                      <div className="card-body p-4 p-lg-5 text-black">
                        <form onSubmit={submitHandler}>
                          <div className="d-flex mb-3 pb-1">
                            <i className="fas fa-cubes fa-2x"></i>
                            <span className="h1 fw-bold mb-0">
                              Nepali Movies
                            </span>
                          </div>

                          <h5 className="fw-normal mb-3 pb-3">
                            Sign into your account
                          </h5>

                          <div className="form-outline mb-4">
                            <input
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              type="email"
                              id="form2Example17"
                              className="form-control form-control-lg"
                            />
                            <label
                              className="form-label"
                              htmlFor="form2Example17"
                            >
                              Email address
                            </label>
                          </div>

                          <div className="form-outline mb-4">
                            <input
                              type="password"
                              id="form2Example27"
                              className="form-control form-control-lg"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <label
                              className="form-label"
                              htmlFor="form2Example27"
                            >
                              Password
                            </label>
                          </div>

                          <div className="pt-1 mb-4">
                            <button
                              className="btn btn-dark btn-lg btn-block"
                              type="submit"
                            >
                              Login
                            </button>
                          </div>

                          <Link className="small text-muted" to="">
                            Forgot password?
                          </Link>
                          <p className="mb-5 pb-lg-2">
                            Don't have an account?{" "}
                            <Link to="/register">Register here</Link>
                          </p>
                          <a href="#!" className="small text-muted">
                            Terms of use.
                          </a>
                          <a href="#!" className="small text-muted">
                            Privacy policy
                          </a>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </React.Fragment>
  );
};

export default LoginPage;
