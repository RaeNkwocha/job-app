import React from "react";
import account from "./image/account.png";
import "./styles.css";

const AvaliabeJobs = () => {
  return (
    <>
      <div>
        <h2 style={{ textAlign: "center" }}>The Fast Track To Your Next Job</h2>
      </div>
      <div className="fast-track-grid">
        <div style={{ marginBottom: "100px" }}>
          <div style={{ display: "grid", placeItems: "center" }}>
            <img src={account} alt="" width="50%" />
          </div>
          <div>
            <h3>Create Your Account</h3>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ut
              inventore totam delectus repellat. Error quibusdam illo veniam
              sint nemo!
            </p>
          </div>
          <div className="cta">
            <a>Sign up</a>
          </div>
        </div>
        <div style={{ marginBottom: "100px" }}>
          <div style={{ display: "grid", placeItems: "center" }}>
            <img src={account} alt="" width="50%" />
          </div>
          <div>
            <h3>Explore Your Options</h3>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ut
              inventore totam delectus repellat. Error quibusdam illo veniam
              sint nemo!
            </p>
          </div>
          <div className="cta">
            <a>Explore Jobs</a>
          </div>
        </div>
        <div style={{ marginBottom: "100px" }}>
          <div style={{ display: "grid", placeItems: "center" }}>
            <img src={account} alt="" width="50%" />
          </div>
          <div>
            <h3>Talk On Your Own Terms</h3>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ut
              inventore totam delectus repellat. Error quibusdam illo veniam
              sint nemo!
            </p>
          </div>
          <div className="cta">
            <a>Explore</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvaliabeJobs;
