import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useFetchDataQuery } from "../slice/api";
import LoginErrorModal from "./LoginErrorModal";
function Login() {
  const navigate = useNavigate();
  const { data } = useFetchDataQuery();
  const [showErrorModal, setShowErrorModal] = useState(false);

  const checkCredentials = (values) => {
    const matchedUser = data.find(
      (user) =>
        user.username === values.username && user.password === values.password
    );
    if (matchedUser) {
      localStorage.setItem("matchedUser", JSON.stringify(matchedUser));
      navigate("/dashboard");
    } else {
      values.username = "";
      values.password = "";
      setShowErrorModal(true);
    }
  };

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.username && !values.password) {
          errors.username = "Both Username and Password is required";
        }
        return errors;
      }}
      onSubmit={(values) => {
        checkCredentials(values);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="container text-center mt-5 w-25">
            <h1>Login</h1>
            <ErrorMessage
              name="username"
              component="div"
              className="alert alert-danger"
              z
            />
            <div className="form-group">
              <Field
                type="text"
                name="username"
                placeholder="Username"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              Login
            </button>
            <div className="mt-5">
              <p>Not registered yet? Sign up now!</p>
              <Link to="/signup">
                <button className="btn btn-success btn-lg">Sign Up</button>
              </Link>
            </div>
            <LoginErrorModal
              show={showErrorModal}
              onClose={() => {
                setShowErrorModal(false);
                navigate("/signup");
              }}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Login;
