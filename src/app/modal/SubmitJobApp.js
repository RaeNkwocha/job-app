import React, { useEffect, useState } from "react";
import "../signupscreens/employers-signup/employers.css";
import Nav from "../Home/Nav/Nav";
import { useRecoilState } from "recoil";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { singleJobState } from "../atoms/atoms";
import JobDetails from "./JobDetails";
import SubmitJobForm from "./SubmitJobForm";
import { apiProvider } from "../services/apiProvider";
import { useParams } from "react-router";
import authService from "../services/auth/authService";

const SubmitJobApp = () => {
  const params = useParams();
  const [job, setJob] = useRecoilState(singleJobState);
  const [hasApplied,setHasApplied]=useState(false)
  useEffect(() => {
    if (!job) {
      apiProvider.get(`/jobs/${params.id}`).then((res)=>res.data.data).then(setJob);
    }
  apiProvider.get(`/job-applications/count?filters[job]=${params.id}&filters[user]=${authService.user.id}`).then((res)=>res.data!=0).then(setHasApplied);

  }, []);
  console.log(job,params);

  if (!job) {
    return <div>loading...</div>;
  }
  

  return (
    <>
      
      <div style={{ background: "white", color: "black", marginTop: "30px" }}>
        <Container>
          <Row>
            <Col sm={8}>
              <JobDetails job={job} />
            </Col>
            <Col sm={4}>
              <SubmitJobForm hasApplied={hasApplied} job={job} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SubmitJobApp;
