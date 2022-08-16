import React, { Component, useEffect, useState } from "react";
import Jobs from "./user/avaliableJobs/Jobs";
import axios from "axios";
import authService from "../services/auth/authService";
import JobApplicants from "./organization/JobApplicants";
import Search from "./user/avaliableJobs/Search";


const Dashboard = () => {
  const [userProfile, setUserProfile] = useState([]);
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
  console.log(user);

  useEffect(() => {
    if (user != null) {
      const userId = user.id;
      client.get(`users/${userId}?populate=*`).then((response) => {
        setUserProfile(response.data.profile);
      });
    }
  }, []);

  console.log(userProfile.type);
  return (
    <div>
      <div className="row">
        <div className="col-12 grid-margin stretch-card">
          <Search />
        </div>
      </div>
      <div className="row">
        <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
          <div className="card" style={{ background: "white", color: "black" }}>
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="d-flex align-items-center align-self-start">
                    <h3 className="mb-0">$12.34</h3>
                    <p className="text-success ml-2 mb-0 font-weight-medium">
                      +3.5%
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="icon icon-box-success ">
                    <span className="mdi mdi-arrow-top-right icon-item"></span>
                  </div>
                </div>
              </div>
              <h6 className="text-muted font-weight-normal">
                Potential growth
              </h6>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
          <div className="card" style={{ background: "white", color: "black" }}>
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="d-flex align-items-center align-self-start">
                    <h3 className="mb-0">$17.34</h3>
                    <p className="text-success ml-2 mb-0 font-weight-medium">
                      +11%
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="icon icon-box-success">
                    <span className="mdi mdi-arrow-top-right icon-item"></span>
                  </div>
                </div>
              </div>
              <h6 className="text-muted font-weight-normal">Revenue current</h6>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
          <div className="card" style={{ background: "white", color: "black" }}>
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="d-flex align-items-center align-self-start">
                    <h3 className="mb-0">$12.34</h3>
                    <p className="text-danger ml-2 mb-0 font-weight-medium">
                      -2.4%
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="icon icon-box-danger">
                    <span className="mdi mdi-arrow-bottom-left icon-item"></span>
                  </div>
                </div>
              </div>
              <h6 className="text-muted font-weight-normal">Daily Income</h6>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
          <div className="card" style={{ background: "white", color: "black" }}>
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="d-flex align-items-center align-self-start">
                    <h3 className="mb-0">$31.53</h3>
                    <p className="text-success ml-2 mb-0 font-weight-medium">
                      +3.5%
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="icon icon-box-success ">
                    <span className="mdi mdi-arrow-top-right icon-item"></span>
                  </div>
                </div>
              </div>
              <h6 className="text-muted font-weight-normal">Expense current</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {userProfile.type === "Organization" ? (
          <>
            <Jobs />
          </>
        ) : (
          <>
            <JobApplicants />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
