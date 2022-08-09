import React from "react";
import "../../signupscreens/employers-signup/employers.css";
const FormField = () => {
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
          <form>
            <div className="form-field">
              <div className="form-grid">
                <div>
                  <label style={{ display: "block", color: "lightGrey" }}>
                    Title
                  </label>
                  <input type="text" required className="form-input"></input>
                </div>
                <div>
                  <label style={{ display: "block", color: "lightGrey" }}>
                    Type
                  </label>
                  <input type="text" required className="form-input"></input>
                </div>
              </div>
              <div className="form-grid">
                <div>
                  <label style={{ display: "block", color: "lightGrey" }}>
                    Payment Amount
                  </label>
                  <input type="text" required className="form-input"></input>
                </div>
                <div>
                  <label style={{ display: "block", color: "lightGrey" }}>
                    Payment Currency
                  </label>
                  <input type="text" className="form-input"></input>
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
                  Job description
                </label>
                <textarea
                  placeholder="Enter Job description"
                  type="text"
                  className="form-textarea"
                  rows="6"
                />
              </div>
              <div>
                <label style={{ display: "block", color: "lightGrey" }}>
                  Job requirements
                </label>
                <textarea
                  placeholder="Enter Job requirements"
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
