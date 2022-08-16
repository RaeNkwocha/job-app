import React, { useEffect, useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import jobState, { singleJobState } from "../../../atoms/atoms";

const Jobs = () => {
  const [jobs, setJobs] = useRecoilState(jobState);
  const [singleJob, setSingleJob] = useRecoilState(singleJobState);
  let navigate = useHistory();

  const client = axios.create({
    baseURL: "https://api.carelobby.flux.i.ng/v1/",
  });
  useEffect(() => {
    client.get("jobs?populate=*").then((response) => {
      setJobs(response.data.data);
    });
  }, []);

  console.log(jobs);

  function handleSubmit(job) {
    setSingleJob(job);
    navigate.push(`/user-pages/${job.id}/apply-for-job`);
  }

  return (
    <>
      <div className="d-flex flex-row justify-content-between">
        <h2 style={{ color: "black",marginLeft:"15px",marginBottom:"20px" }} className="card-title">
          Avaliable Jobs
        </h2>
      </div>
      {jobs.slice(0, 5).map((job) => (
        <div className="col-md-12 grid-margin stretch-card">
          <div style={{ background: "white", color: "black" }} className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <div className="preview-list">
                    <div
                      style={{ cursor: "pointer" }}
                      className="preview-item-content d-sm-flex flex-grow"
                    >
                      <div className="flex-grow">
                        <h3 className="preview-subject">
                          {job.attributes.title}
                        </h3>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                            marginTop: "20px",
                          }}
                        >
                          <div>
                            <p className="text-muted mb-0">
                              Type:{" "}
                              <span style={{ color: "black" }}>
                                {job.attributes.type}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-muted mb-0">
                              Posted At:{" "}
                              <span style={{ color: "black" }}>
                                {job.attributes.createdAt}
                              </span>
                            </p>
                          </div>
                        </div>

                        <p
                          style={{ marginTop: "8px" }}
                          className="text-muted mb-0"
                        >
                          Job Description:{" "}
                          <span style={{ color: "black", fontSize: "1rem" }}>
                            {job.attributes.description}
                          </span>
                        </p>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                            marginTop: "8px",
                          }}
                        >
                          <div>
                            <p className="text-muted mb-0">
                              Start:{" "}
                              <span style={{ color: "black" }}>
                                {job.attributes.start}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-muted mb-0">
                              End:{" "}
                              <span style={{ color: "black" }}>
                                {job.attributes.end}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-muted mb-0">
                              Payment:
                              <span style={{ color: "black" }}>
                                {" "}
                                NGN{job.attributes.paymentAmount}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div style={{ marginTop: "8px" }}>
                          <h6>
                            {" "}
                            Job requirements:{" "}
                            <span style={{ color: "black" }}>
                              {job.attributes.requirements}
                            </span>
                          </h6>
                        </div>
                        <div>
                          <button
                            style={{
                              padding: "8px",
                              border: "none",
                              background: "black",
                              color: "white",
                              borderRadius: "5px",
                              marginTop: "10px",
                            }}
                            onClick={() => handleSubmit(job)}
                          >
                            Apply now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Jobs;
