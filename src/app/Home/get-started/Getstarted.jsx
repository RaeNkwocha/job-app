import React from "react";
import work from "../get-started/image/work.png";
import job from "../get-started/image/job.png";
import "./started.css";
import { Link } from "react-router-dom";

const Getstarted = () => {
  return (
    <>
      <div className="get-started-grid">
        <div className="first-grid">
          <div>
            <img width="100%" src={work} alt="" />
          </div>
          <div style={{ display: "grid", placeItems: "center" }}>
            <div className="job-description-holder">
              {" "}
              <div>
                <h3>Job Seeker</h3>
              </div>
              <div>
                <p>
                  Are you looking for your dream job? Create a unique career
                  profile with Company's name
                </p>
              </div>
            </div>
          </div>

          <div className="get-started-btn">
            <Link to="/user-pages/register">
              {" "}
              <button>sign up as a job seeker</button>
            </Link>
          </div>
        </div>
        <div className="first-grid">
          <div>
            <img width="100%" src={job} alt="" />
          </div>
          <div style={{ display: "grid", placeItems: "center" }}>
            <div className="job-description-holder">
              {" "}
              <div>
                <h3>Employer</h3>
              </div>
              <div>
                <p>
                  Are you looking for quality candidates? Advertise and search
                  with Company's name
                </p>
              </div>
            </div>
          </div>
          <div className="get-started-btn">
            <Link to="/user-pages/register">
              <button>Sign up as an employer</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Getstarted;
