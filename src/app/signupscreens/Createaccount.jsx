import React from "react";
import Getstarted from "../Home/get-started/Getstarted";
import Nav from "../Home/Nav/Nav";

const Createaccount = () => {
  return (
    <>
      <div style={{ background: "white", color: "black" }}>
        {" "}
        <nav>
          <Nav />
        </nav>
        <div>
          <div>
            <h1 style={{ textAlign: "center", marginTop: "70px" }}>
              Create Your Account
            </h1>
            <Getstarted />
          </div>
        </div>
      </div>
    </>
  );
};

export default Createaccount;
