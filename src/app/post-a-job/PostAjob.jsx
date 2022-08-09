import React from "react";
import Nav from "../Home/Nav/Nav";
import FormField from "./components/FormField";

const PostAjob = () => {
  return (
    <>
      <div style={{ background: "white", color: "black" }}>
        {" "}
        <nav>
          <Nav />
        </nav>
        <div>
          <FormField />
        </div>
      </div>
    </>
  );
};

export default PostAjob;
