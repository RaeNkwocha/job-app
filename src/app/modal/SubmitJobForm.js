import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import authService from "../services/auth/authService";

const SubmitJobForm = ({ job, hasApplied }) => {
  const [userProfile, setUserProfile] = useState([]);
  const [error, setError] = useState("");
  const client = axios.create({
    baseURL: "https://api.carelobby.flux.i.ng/v1/",
  });

  client.interceptors.request.use(
    function (config) {
      if (!config.headers) config.headers = {};
      if (localStorage.getItem("jwt") != null) {
        config.headers["Authorization"] =
          "Bearer " + localStorage.getItem("jwt");
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  const user = authService.user;

  useEffect(() => {
    if (user != null) {
      const userId = user.id;
      client.get(`users/${userId}?populate=*`).then((response) => {
        setUserProfile(response.data.profile);
      });
    }
  }, []);

  console.log(userProfile);

  //   job application

  const handleApplication = (e) => {
    e.preventDefault();
    client
      .post("job-applications?populate=*", {
        data: {
          job: job.id,
          user: user.id,
          canStart: "2022-08-16T08:03:18.782Z",
        },
      })
      .then((res) => console.log("posting job", res))
      .catch((err) => setError(err));
    if (error.message === "Request failed with status code 400") {
      setError("Failed to post Job");
    } else {
      setError("Job Posted Succesfully");
    }

    console.log(error);
  };

  return (
    <div>
      <Card style={{ color: "black", background: "white", marginTop: "10px" }}>
        <div style={{ padding: "10px" }}>
          
          <h2 hidden={hasApplied}>Apply for job</h2>
          <h2 hidden={!hasApplied}>You have already applied for this job.</h2>
          <form hidden={hasApplied} onSubmit={handleApplication}>
            <div style={{ marginTop: "20px" }}>
              <label style={{ display: "block" }}>first Name</label>
              <input
                style={{
                  width: "100%",
                  padding: "8px",
                  outline: "1px solid grey",
                  borderRadius: "5px",
                  border: "none",
                  background: "whitesmoke",
                }}
                value={userProfile.firstName}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <label style={{ display: "block" }}>Last Name</label>
              <input
                style={{
                  width: "100%",
                  padding: "8px",
                  outline: "1px solid grey",
                  borderRadius: "5px",
                  border: "none",
                  background: "whitesmoke",
                }}
                value={userProfile.lastName}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <label style={{ display: "block" }}>Email</label>
              <input
                style={{
                  width: "100%",
                  padding: "8px",
                  outline: "1px solid grey",
                  borderRadius: "5px",
                  border: "none",
                  background: "whitesmoke",
                }}
                value={user.email}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <label style={{ display: "block" }}>Gender</label>
              <input
                style={{
                  width: "100%",
                  padding: "8px",
                  outline: "1px solid grey",
                  borderRadius: "5px",
                  border: "none",
                  background: "whitesmoke",
                }}
                value={userProfile.gender}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <label style={{ display: "block" }}>cover letter</label>
              <textarea
                style={{
                  width: "100%",
                  padding: "8px",
                  outline: "1px solid grey",
                  borderRadius: "5px",
                  border: "none",
                  background: "whitesmoke",
                }}
                placeholder="cover letter"
                rows="6"
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <input type="submit" />
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default SubmitJobForm;
