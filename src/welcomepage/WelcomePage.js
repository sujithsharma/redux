import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="text-center mt-5">
      <h1>Welcome to Our Website</h1>
      <p>Join us today to explore our amazing services!</p>
      <div className="row">
        <div className="col-md-6">
          <Link to="/signup">
            <button className="btn btn-primary btn-lg">Sign Up</button>
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="/login">
            <button className="btn btn-success btn-lg">Login</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
