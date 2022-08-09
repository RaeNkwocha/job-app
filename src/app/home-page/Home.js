import React from "react";
import AvaliabeJobs from "../Home/avaliable-jobs/AvaliabeJobs";
import Employers from "../Home/employers/Employers";
import HomePage from "../Home/Home";
import JobOpenings from "../Home/job-openings/JobOpenings";
import Nav from "../Home/Nav/Nav";
const Home = () => {
  return (
    <div style={{ background: "white", color: "black" }}>
      <nav>
        <Nav />
      </nav>
      <div>
        {" "}
        <HomePage />
      </div>
      <div style={{ marginTop: "100px" }}>
        <JobOpenings />
      </div>
      <div style={{ marginTop: "150px" }}>
        <AvaliabeJobs />
      </div>
      <div style={{ marginTop: "50px" }}>
        <Employers />
      </div>
    </div>
  );
};

export default Home;
