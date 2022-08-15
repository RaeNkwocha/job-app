import React from "react";
import "../signupscreens/employers-signup/employers.css";
import Nav from "../Home/Nav/Nav";

const SubmitJobApp = () => {
  return (
    <>
      <nav>
        <Nav />
      </nav>{" "}
      <div style={{ background: "#191C24", color: "white",marginTop:'-30px' }}>

        <div className="form-grid-holder">
          <div className="main-form-grid">
            <div>
              <h4 style={{ marginBottom: "30px", marginTop:'50px' }}>Fill job Application</h4>
            </div>
            <form>
              <div className="form-field">
                <div className="form-grid">
                  <div>
                    <label style={{ display: "block", color: "lightGrey" }}>
                      Name
                    </label>
                    <input
                      //   onChange={(e) => setTitle(e.target.value)}
                      //   value={title}
                      type="text"
                      required
                      className="form-input"
                    ></input>
                  </div>
                  <div>
                    <label style={{ display: "block", color: "lightGrey" }}>
                      Phone Number
                    </label>
                    <input
                      type="text"
                      required
                      //   onChange={(e) => setType(e.target.value)}
                      //   value={type}
                      className="form-input"
                    ></input>
                  </div>
                </div>
                <div className="form-grid">
                  <div>
                    <label style={{ display: "block", color: "lightGrey" }}>
                      Start
                    </label>
                    <input
                      //   onChange={(e) => setTitle(e.target.value)}
                      //   value={title}
                      type="text"
                      required
                      className="form-input"
                    ></input>
                  </div>
                  <div>
                    <label style={{ display: "block", color: "lightGrey" }}>
                      End
                    </label>
                    <input
                      type="text"
                      required
                      //   onChange={(e) => setType(e.target.value)}
                      //   value={type}
                      className="form-input"
                    ></input>
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", color: "lightGrey" }}>
                    Cover Letter
                  </label>
                  <textarea
                    placeholder="Cover letter"
                    type="text"
                    // onChange={(e) => setJobReq(e.target.value)}
                    // value={jobReq}
                    style={{marginBottom:'20px'}}
                    className="form-textarea"
                    rows="6"
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: "lightGrey" }}>
                    Upload CV
                  </label>
                 <input type='file' />
                </div>
              </div>
              <div style={{ marginTop: "20px" }}>
                {" "}
                <input type="submit" value="Submit Application" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubmitJobApp;
