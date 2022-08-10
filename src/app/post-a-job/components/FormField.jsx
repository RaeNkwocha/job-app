import axios from "axios";
import React, { useState } from "react";
import "../../signupscreens/employers-signup/employers.css";

const FormField = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [payment, setPayment] = useState("");
  const [currency, setCurrency] = useState("");
  const [jobReq, setJobReq] = useState("");
  const [jobDesc, setJobDesc] = useState("");

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
  const addPost = (e) => {
    e.preventDefault();
    client
      .post("jobs", {
        data: {
          title: title,
          description: jobDesc,
          requirements: jobReq,
          type: type,
          paymentCurrency: currency,
          paymentAmount: payment,
        },
      })
      .then((res) => console.log("posting job", res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="employers-form-head">
        <h3>Looking to hire someone? Post a job and find a match</h3>
      </div>
      <div className="form-grid-holder">
        <div className="main-form-grid">
          <div>
            <h4 style={{ marginBottom: "30px" }}>Enter job details</h4>
          </div>
          <form onSubmit={addPost}>
            <div className="form-field">
              <div className="form-grid">
                <div>
                  <label style={{ display: "block", color: "lightGrey" }}>
                    Title
                  </label>
                  <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    required
                    className="form-input"
                  ></input>
                </div>
                <div>
                  <label style={{ display: "block", color: "lightGrey" }}>
                    Type
                  </label>
                  <input
                    type="text"
                    required
                    onChange={(e) => setType(e.target.value)}
                    value={type}
                    className="form-input"
                  ></input>
                </div>
              </div>
              <div className="form-grid">
                <div>
                  <label style={{ display: "block", color: "lightGrey" }}>
                    Payment Amount
                  </label>
                  <input
                    type="text"
                    required
                    onChange={(e) => setPayment(e.target.value)}
                    value={payment}
                    className="form-input"
                  ></input>
                </div>
                <div>
                  <label style={{ display: "block", color: "lightGrey" }}>
                    Payment Currency
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setCurrency(e.target.value)}
                    value={currency}
                    className="form-input"
                  ></input>
                </div>
                <div>
                  <label style={{ display: "block", color: "lightGrey" }}>
                    Start
                  </label>
                  <input type="text" className="form-input"></input>
                </div>
                <div>
                  <label style={{ display: "block", color: "lightGrey" }}>
                    End
                  </label>
                  <input type="text" className="form-input"></input>
                </div>
              </div>
              <div>
                <label style={{ display: "block", color: "lightGrey" }}>
                  Job requirements
                </label>
                <textarea
                  placeholder="Enter Job requirements"
                  type="text"
                  onChange={(e) => setJobReq(e.target.value)}
                  value={jobReq}
                  className="form-textarea"
                  rows="6"
                />
              </div>
              <div>
                <label style={{ display: "block", color: "lightGrey" }}>
                  Job description
                </label>
                <textarea
                  onChange={(e) => setJobDesc(e.target.value)}
                  value={jobDesc}
                  placeholder="Enter Job description"
                  type="text"
                  className="form-textarea"
                  rows="6"
                />
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              {" "}
              <input type="submit" value="Post Job" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormField;
