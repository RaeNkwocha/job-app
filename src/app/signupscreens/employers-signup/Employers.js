import React from "react";
import Nav from "../../Home/Nav/Nav";
import EmployersForm from "./EmployersForm";

const Employers = () => {
  return (
    <>
      <div style={{ background: "white", color: "black" }}>
        {" "}
        <nav>
          <Nav />
        </nav>
        <EmployersForm />
      </div>
    </>
  );
};

export default Employers;
