import React, { useEffect, useState } from "react";
import { apiProvider } from "../../../services/apiProvider";
import authService from "../../../services/auth/authService";

const JobApplicationHistory = () => {
  const [jobApplication, setJobApplication] = useState([]);
  const [userProfile, setUserProfile] = useState([]);

  const user = authService.user;
  console.log(user);

  useEffect(() => {
    if (user != null) {
      const userId = user.id;
      apiProvider.get(`users/${userId}?populate=*`).then((response) => {
        setUserProfile(response.data.profile);
      });
    }
    apiProvider
      .get(`job-applications/?filters[user]=${user.id}&populate=*`)
      .then((response) => {
        setJobApplication(
          response.data.data.filter((item) => item.attributes.job.data)
        );
      });
  }, []);

  console.log(userProfile);
  console.log(jobApplication);
  return (
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
                          <input type="checkbox" className="form-check-input" />
                          <i className="input-helper"></i>
                        </label>
                      </div>
                    </th>
                    <th> Job ID </th>
                    <th> Title </th>
                    <th> Payment </th>
                    <th> Type </th>
                    <th> Start Date </th>
                    <th> End Date </th>
                    <th> Job Status </th>
                  </tr>
                </thead>
                <tbody>
                  {jobApplication.map((item) => (
                    <tr>
                      <td key={item.id}>
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
                      <td> {item.attributes.job.data.attributes.title} </td>

                      <td>
                        {" "}
                        {item.attributes.job.data.attributes.paymentAmount}{" "}
                      </td>
                      <td> {item.attributes.job.data.attributes.type} </td>

                      <td> {item.attributes.job.data.attributes.start} </td>
                      <td> {item.attributes.job.data.attributes.end} </td>
                      <td>
                        <div className={item.attributes.status === "Accepted" ?('badge badge-outline-success') :null}>
                          {item.attributes.status}
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
  );
};

export default JobApplicationHistory;
