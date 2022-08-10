import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import Nav from "../Home/Nav/Nav";
import authService from "../services/auth/authService";
import SizesExample from "./loginSpinner/Spinner";

const  Login=()=> {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [identifier, setIdentifier] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErr("");
    try {
      await authService.sigin(identifier,password).then(() => {
        setLoading(false);
        setErr("hey");
        window.location.href = "/user-pages/dashboard";
      });
    } catch (error) {
      console.error("Error", error);
      setLoading(false);
     if(error.message === "Network Error"){
      setErr("Network Error");
     } else{
      setErr("Invalid username or Password");

     }
    }
  };
    return (
      <div style={{ background: "white" }}>
        <nav>
         <Nav />   
        </nav>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div
                style={{
                  background: "whitesmoke",
                  color: "black",
                  marginBottom: "100px",
                }}
                className="card text-left py-5 px-4 px-sm-5"
              >
                <div className="brand-logo">
                  <h1>Logo</h1>
                </div>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                {loading?(
                  <SizesExample/>
                ):(
                  null
                )}
                {err ? <label style={{ color: "red" }}>{err}</label> : null}
                <form onSubmit={handleLogin} className="pt-3">
                <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleInputUsername1"
                      placeholder="Username"
                      onChange={(e) => setIdentifier(e.target.value)}
                      value={identifier}
                      style={{color:"black"}}

                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      style={{color:"black"}}

                    />
                  </div>
                  <div className="mt-3">
                    <input
                    type="submit"
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      style={{
                        background: "black",
                        border: "none",
                        outline: "none",
                      }}
                    />
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        <i className="input-helper"></i>
                        Keep me signed in
                      </label>
                    </div>
                    <a
                      href="!#"
                      onClick={(event) => event.preventDefault()}
                      className="auth-link text-muted"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account?{" "}
                    <a href="/user-pages/register" className="text-primary">
                      Create
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Login;
