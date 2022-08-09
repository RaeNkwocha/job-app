import React from "react";
import "./styles.css";
const JobOpenings = () => {
  const jobs = [
    {
      id: 1,
      name: "designer",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, ut vero numquam quos fuga voluptatibus?",
      company: "techHub",
    },
    {
      id: 1,
      name: "designer",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, ut vero numquam quos fuga voluptatibus?",
      company: "techHub",
    },
    {
      id: 1,
      name: "designer",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, ut vero numquam quos fuga voluptatibus?",
      company: "techHub",
    },
  ];
  return (
    <>
      <div className="job-openings">
        <div>
          {" "}
          <h2>Current Job Openings</h2>
        </div>
        <div className="job-card-grid">
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <h5>
                <span>Job title:</span>
                {job.name}
              </h5>
              <p style={{ marginTop: "20px", marginBottom: "20px" }}>
                {job.description}
              </p>
              <div className="inner-card-grid">
                <a>Apply now</a>
                <div>{job.company}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "20px" }} className="cta">
          <a>Find More Jobs</a>
        </div>
      </div>
    </>
  );
};

export default JobOpenings;
