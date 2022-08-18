import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import jobState, { singleJobState } from "../../../atoms/atoms";
import AvaliableJobs from "../AvaliableJobs";
import authService from "../../../services/auth/authService";
import { apiProvider } from "../../../services/apiProvider";
import JobApplicants from "../../organization/JobApplicants";
import CreatedJobs from "../../organization/CreatedJobs";

const Jobs = () => {
  const [jobs, setJobs] = useRecoilState(jobState);
  const [userProfile, setUserProfile] = useState([]);

  const user = authService.user;
  const [singleJob, setSingleJob] = useRecoilState(singleJobState);
  let navigate = useHistory();

  useEffect(() => {
    if (user != null) {
      const userId = user.id;
      apiProvider.get(`users/${userId}?populate=*`).then((response) => {
        setUserProfile(response.data.profile);
      });
    }
    apiProvider.get("jobs?populate=*").then((response) => {
      setJobs(response.data.data);
    });
  }, []);

  console.log(jobs);

  function handleSubmit(job) {
    setSingleJob(job);
    navigate.push(`/user-pages/${job.id}/apply-for-job`);
  }
  function viewApplicants(job) {
    setSingleJob(job);
    navigate.push(`/user-pages/${job.id}/job-applicants`);
  }
  return (
    <>
      <div className="d-flex flex-row justify-content-between">
        {userProfile.type === "Organization" ? (
          <h2
            style={{ color: "black", marginLeft: "15px", marginBottom: "20px" }}
            className="card-title"
          >
            Jobs You Created
          </h2>
        ) : (
          <h2
            style={{ color: "black", marginLeft: "15px", marginBottom: "20px" }}
            className="card-title"
          >
            Avaliable Jobs
          </h2>
        )}
      </div>
      {userProfile.type === "Organization" ? <CreatedJobs viewApplicants={viewApplicants}/> : (
        <AvaliableJobs jobs={jobs} handleSubmit={handleSubmit} />
      )}
    </>
  );
};

export default Jobs;
