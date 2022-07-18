import React, { useState,useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import Helmet from "react-helmet";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import {userLogin} from '../../actions/userActions'

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const {isAuthenticated} = useSelector((state)=>state.userLogin)
  
  useEffect(()=>{
    if(isAuthenticated){
        navigate('/',{replace:true})
    }
  },[dispatch, isAuthenticated,navigate])
  return (
    <>
      <Helmet>
        <title>Admin Login</title>
      </Helmet>
      <div className="container">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Must be valid email.")
              .max(255)
              .required("Email is required."),
            password: Yup.string()
              .required("Password is required.")
              .max(255)
              .min(6, "Password must be 6 characters."),
          })}
          onSubmit={async (values) => {
            console.log(values);
            try {
              setErrorMessage(" ");
              const { email, password } = values;
              dispatch(userLogin(email, password))
            
            } catch (err) {
              setErrorMessage(err.message || "Login Error");
            }
          }}
        >
          {({ isSubmitting, touched, errors }) => (
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-12 col-md-9">
                <div className="card o-hidden border-0 shadow-lg my-5">
                  <div className="card-body p-0">
                    <div className="row">
                      <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                      <div className="col-lg-6">
                        <div className="p-5">
                          <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">
                              Welcome Back!
                            </h1>
                          </div>
                          <Form className="user">
                            <div className="form-group">
                              <Field
                                type="email"
                                name="email"
                                className={`form-control form-control-user ${
                                  touched.email && errors.email
                                    ? "is-invalid"
                                    : ""
                                }`}
                                placeholder="Enter Email Address..."
                              />
                              <ErrorMessage
                                component="div"
                                name="email"
                                className="invalid-feedback"
                              />
                            </div>
                            <div className="form-group">
                              <Field
                                type="password"
                                name="password"
                                className={`form-control form-control-user
                                ${
                                  touched.password && errors.password
                                    ? "is-invalid"
                                    : ""
                                }`}
                                placeholder="Password"
                              />
                              <ErrorMessage
                          component="div"
                          name="password"
                          className="invalid-feedback"
                        />
                            </div>
                            <div className="form-group">
                              <div className="custom-control custom-checkbox small">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="customCheck"
                                >
                                  Remember Me
                                </label>
                              </div>
                            </div>
                            <button
                              disabled={isSubmitting}
                              type="submit"
                              className="btn btn-primary btn-user btn-block"
                            >
                              Login
                            </button>
                            <hr />
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default LoginPage;
