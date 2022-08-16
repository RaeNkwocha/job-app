import React from "react";
import Card from "react-bootstrap/Card";

const JobDetails = ({ job }) => {
  return (
    <Card style={{ background: "white", marginTop: "10px" }}>
      <div style={{ padding: "10px" }}>
        <div style={{ marginBottom: "30px", marginTop: "20px" }}>
          <h1>{job.attributes.title}</h1>
        </div>
        <div>
          <label>Job Summary</label>
          <p>{job.attributes.description}</p>
          <div>
            <ul style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <li>Job Type</li>
              <span>{job.attributes.type}</span>
            </ul>
            <ul
              style={{ display: "flex", alignItems: "center", gap: "2.7rem" }}
            >
              <li>Start</li>
              <span>{job.attributes.start}</span>
            </ul>
            <ul
              style={{ display: "flex", alignItems: "center", gap: "3.2rem" }}
            >
              <li>End</li>
              <span>{job.attributes.end}</span>
            </ul>
          </div>
        </div>
        <div>
          <label>Job requirements</label>
          <p>{job.attributes.requirements}</p>
        </div>
        <div>
          <label>Remuneration:</label>
          <p>
            NGN {job.attributes.paymentAmount} Net (To be increased after
            completion of a probatory period of 3 - 6 months)
          </p>
        </div>
      </div>{" "}
    </Card>
  );
};

export default JobDetails;
