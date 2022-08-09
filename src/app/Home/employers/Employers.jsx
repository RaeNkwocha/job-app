import React from "react";
import "./styles.css";

const Employers = () => {
  return (
    <>
      <div className="employers-full-page-grid">
        <div className="employer-bg-img"></div>
        <div className="employer-bg-grid-two">
          <h2 style={{ marginBottom: "30px" }}>Looking To Hire Someone</h2>
          <p style={{ marginBottom: "30px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            omnis vel fugit corrupti voluptas eius vero ipsam ea atque nostrum
            voluptatum expedita minus cumque incidunt pariatur repellendus
            doloribus, dignissimos qui.
          </p>
          <div
            style={{
              background: "white",
              color: "black",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;",
            }}
            className="cta"
          >
            <a>Start Hiring</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employers;
