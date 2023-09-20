import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const DashboardSettings = () => {
  const matchedUserString = localStorage.getItem("matchedUser");
  const parsedMatchedUser = JSON.parse(matchedUserString);

  return (
    <div className="container mt-4">
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>

         

          <div className="d-flex align-items-center">
            <span>{parsedMatchedUser.username}</span>
            <button type="button" className="btn btn-link">
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>

        

          <div className="d-flex align-items-center">
            <span>********</span>
            <button type="button" className="btn btn-link">
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>

          

          <div className="d-flex align-items-center">
            <span>{parsedMatchedUser.name}</span>
            <button type="button" className="btn btn-link">
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country
          </label>

        

          <div className="d-flex align-items-center">
            <span>{parsedMatchedUser.country}</span>
            <button type="button" className="btn btn-link">
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="zipcode" className="form-label">
            Zipcode
          </label>

         

          <div className="d-flex align-items-center">
            <span>{parsedMatchedUser.zipcode}</span>
            <button type="button" className="btn btn-link">
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>

         

          <div className="d-flex align-items-center">
            <span>{parsedMatchedUser.email}</span>
            <button type="button" className="btn btn-link">
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>

          

          <div className="d-flex align-items-center">
            <span>{parsedMatchedUser.gender}</span>
            <button type="button" className="btn btn-link">
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            ID
          </label>


          <div className="d-flex align-items-center">
            <span>{parsedMatchedUser.id}</span>
            <button type="button" className="btn btn-link">
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default DashboardSettings;
