import React from "react";
import "./employers.css";
const EmployersForm = () => {
  return (
    <>
      <div className="employers-form-head">
        <h3>Looking for a Job? Create an Account</h3>
      </div>
      <div className="form-grid-holder">
        <div className="main-form-grid">
          <div>
            <h4 style={{ marginBottom: "30px" }}>
              Enter Your Personal Information
            </h4>
          </div>
          <form>
            <div className="form-field">
              <div className="form-grid">
                <div>
                  <label style={{ display: "block", color: "lightGrey" }}>
                    Username
                  </label>
                  <input type="name" required className="form-input"></input>
                </div>
                <div>
                  <label style={{ display: "block", color: "lightGrey" }}>
                    Email Address
                  </label>
                  <input type="email" required className="form-input"></input>
                </div>
              </div>
              <div className="form-grid">
                <div>
                  <label style={{ display: "block", color: "lightGrey" }}>
                    Country
                  </label>
                  <input type="name" required className="form-input"></input>
                </div>
                <div>
                  <label style={{ display: "block", color: "lightGrey" }}>
                    Create Password
                  </label>
                  <input type="password" className="form-input"></input>
                </div>
              </div>
            </div>
            <div style={{ display: "grid", placeItems: "center" }}>
              {" "}
              <input type="submit" value="Sign Up" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmployersForm;
