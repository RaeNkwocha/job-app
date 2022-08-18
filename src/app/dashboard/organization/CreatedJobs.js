import React, { useEffect, useState } from "react";
import { apiProvider } from "../../services/apiProvider";
import authService from "../../services/auth/authService";

const CreatedJobs = ({viewApplicants}) => {
  const [createJobs, setCreatedJobs] = useState([]);
  const [userProfile, setUserProfile] = useState({});

  const user = authService.user;

  useEffect(() => {
    if (user != null) {
      const userId = user.id;
      apiProvider.get(`users/${userId}?populate=*`).then((response) => {
        setUserProfile(response.data);
      });
    }
    apiProvider
      .get(`jobs/?filters[user]=${user.id}&populate=*`)
      .then((response) => {
        setCreatedJobs(response.data.data);
      });
  }, []);
  console.log(userProfile.id, createJobs);
  
  return (
    <div>
      {" "}
      {createJobs.slice(0, 5).map((job) => (
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
                            onClick={() => viewApplicants(job)}
                          >
                            View Applicants{" "}
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
    </div>
  );
};

export default CreatedJobs;
