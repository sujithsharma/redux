import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../index.css";
import { Link } from "react-router-dom";
import SignupSuccessModal from "./SignupSuccessModal";
import { useFetchDataQuery, useUpdateDataMutation } from "../slice/api";

function Signup() {
  const [showModal, setShowModal] = useState(false);
  const { data } = useFetchDataQuery();
  const [updateData] = useUpdateDataMutation();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      name: "",
      country: "",
      zipcode: "",
      email: "",
      gender: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
      name: Yup.string().required("Name is required"),
      country: Yup.string().required("Country is required"),
      zipcode: Yup.string().required("Zipcode is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      gender: Yup.string().required("Gender is required"),
    }),
    onSubmit: async (values) => {
      console.log("submitted");
      const properData = [...data, values];
      const updatedData = JSON.stringify(properData);
      formik.resetForm();
      await updateData(updatedData);
      setShowModal(true);
    },
  });
  console.log(formik);
  return (
    <div className="container p-5">
      <h1>User Registration Form</h1>
      <div className="row">
        <div className="col-md">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">
                Username<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control p-2"
                id="username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.username && formik.errors.username && (
                <div className="error text-danger">
                  {formik.errors.username}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">
                Password<span className="text-danger">*</span>
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="error text-danger ">
                  {formik.errors.password}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="name">
                Name<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="error text-danger ">{formik.errors.name}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="country">
                Country<span className="text-danger">*</span>
              </label>
              <select
                className="form-control"
                id="country"
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select Country</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Spain">Spain</option>
                <option value="Japan">Japan</option>
                <option value="China">China</option>
                <option value="India">India</option>
              </select>
              {formik.touched.country && formik.errors.country && (
                <div className="error text-danger ">
                  {formik.errors.country}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="zipcode">
                Zipcode<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="zipcode"
                name="zipcode"
                value={formik.values.zipcode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.zipcode && formik.errors.zipcode && (
                <div className="error text-danger ">
                  {formik.errors.zipcode}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Email<span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="error text-danger ">{formik.errors.email}</div>
              )}
            </div>
            <div className="form-group">
              <label>
                Gender <span className="text-danger">*</span>
              </label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="male"
                    name="gender"
                    value="male"
                    checked={formik.values.gender === "male"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="female"
                    name="gender"
                    value="female"
                    checked={formik.values.gender === "female"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
              </div>
              {formik.touched.gender && formik.errors.gender && (
                <div className="error text-danger">{formik.errors.gender}</div>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="mt-5">
        <p>Already a member ? </p>
        <Link to="/login">
          <button className="btn btn-success btn-lg">Login</button>
        </Link>
      </div>
      <SignupSuccessModal
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}

export default Signup;
