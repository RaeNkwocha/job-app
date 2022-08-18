import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useRecoilState } from "recoil";
import jobState, {
  singleApplicantState,
  singleJobState,
} from "../../atoms/atoms";
import { apiProvider } from "../../services/apiProvider";
import authService from "../../services/auth/authService";
import CreatedJobs from "./CreatedJobs";
import { useHistory } from "react-router-dom";

const JobApplicants = () => {
  let navigate = useHistory();

  const params = useParams();
  const [hasApplied, setHasApplied] = useState([]);
  const [status, setStatus] = useState("");
  const [applicants, setApplicants] = useRecoilState(singleApplicantState);

  useEffect(() => {
    if (!applicants) {
      apiProvider
        .get(`/jobs/${params.id}`)
        .then((res) => res.data.data)
        .then(setApplicants);
    }
    apiProvider
      .get(
        `/job-applications/?filters[user]=${authService.user.id}&filters[job]=${params.id}&populate=*,user.profile`
      )
      .then((response) => {
        setHasApplied(
          response.data.data.filter((item) => item.attributes.user.data)
        );
      });
  }, []);

  function changeJobStatus(id) {
    apiProvider.put(`/job-applications/${id}`, {
      data: {
        status: status.value,
      },
    });

    console.log(id, "hey");
  }

  const jboStatus = [
    {
      id: 0,
      name: "Pending",
      value: "Pending",
    },
    {
      id: 1,
      name: "Accepted",
      value: "Accepted",
    },
    {
      id: 2,
      name: "Rejected",
      value: "Rejected",
    },
    {
      id: 3,
      name: "InReview",
      value: "InReview",
    },
  ];
  console.log(status.value, "hey");

  return (
    <>
      <div className="row ">
        <div className="col-12 grid-margin">
          <div className="card" style={{ background: "white", color: "black" }}>
            <div className="card-body">
              <h4 className="card-title">Order Status</h4>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>
                        <div className="form-check form-check-muted m-0">
                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                            <i className="input-helper"></i>
                          </label>
                        </div>
                      </th>
                      <th> Job ID </th>
                      <th> Applicants first name </th>
                      <th> Phone Number </th>
                      <th> Gender </th>
                      <th> Country </th>
                      <th> Email </th>
                      <th> Application Status </th>
                    </tr>
                  </thead>
                  <tbody>
                    {hasApplied.map((item) => (
                      <tr>
                        <td>
                          <div className="form-check form-check-muted m-0">
                            <label className="form-check-label">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <i className="input-helper"></i>
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex">
                            <span className="pl-2">{item.id}</span>
                          </div>
                        </td>
                        <td>
                          {" "}
                          {
                            item.attributes.user.data.attributes.profile.data
                              .attributes.firstName
                          }{" "}
                        </td>
                        <td>
                          {
                            item.attributes.user.data.attributes.profile.data
                              .attributes.phoneNumber
                          }
                        </td>
                        <td>
                          {
                            item.attributes.user.data.attributes.profile.data
                              .attributes.gender
                          }
                        </td>
                        <td>{item.attributes.user.data.attributes.country}</td>
                        <td> {item.attributes.user.data.attributes.email} </td>
                        <td>
                          <div style={{ cursor: "pointer" }}>
                            <select
                              className="badge badge-outline"
                              onChange={() => changeJobStatus(item.id)}
                            >
                              {jboStatus.map((status) => (
                                <option
                                  onChange={(e) => setStatus(e.target.value)}
                                  value={status.value}
                                >
                                  {item.attributes.status}
                                </option>
                              ))}
                            </select>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobApplicants;
