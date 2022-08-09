import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Nav from "../Home/Nav/Nav";
import authService from "../services/auth/authService"

const Register = () => {
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [type, setType] = useState("");

  const signUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErr("");
    try {
      await authService.signUp(email, password, username,country,firstName,lastName,gender,phoneNumber,type).then(() => {
        setLoading(false);
        setErr("hey");
        window.location.href = "/dashboard";
      });
    } catch (error) {
      console.error("Error", error);
      setLoading(false);
      setErr("email already taken");
      console.log(err, "hey");
    }
  };
    return (
      <div style={{ background: "white" }}>
        <nav>
          <Nav />
        </nav>{" "}
        <div className="d-flex align-items-center auth px-0 h-100">
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
                <h4>New here?</h4>
                <h6 className="font-weight-light">
                  Signing up is easy. It only takes a few steps
                </h6>
                {loading ? <Spinner err={err} /> : ""}
                {err ? <label style={{ color: "red" }}>{err}</label> : null}
                <form onSubmit={signUp} className="pt-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleInputUsername1"
                      placeholder="Username"
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="exampleInputEmail1"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleInputEmail1"
                      placeholder="First name"
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstName}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleInputEmail1"
                      placeholder="Last name"
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastName}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleInputEmail1"
                      placeholder="Gender"
                      onChange={(e) => setGender(e.target.value)}
                      value={gender}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleInputEmail1"
                      placeholder="phone number"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleInputEmail1"
                      placeholder="Type"
                      onChange={(e) => setType(e.target.value)}
                      value={type}
                      required
                    />
                  </div>
                  <div className="form-group">
                  <input
                      type="text"
                      className="form-control form-control-lg"
                      id=""
                      onChange={(e) => setCountry(e.target.value)}
                      value={country}
                      placeholder="Country"
                      required
                    />
                    {/* <select
                      className="form-control form-control-lg"
                      id="exampleFormControlSelect2"
                    >
                      <option>Country</option>
                      <option>United States of America</option>
                      <option>United Kingdom</option>
                      <option>India</option>
                      <option>Germany</option>
                      <option>Argentina</option>
                    </select> */}
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        <i className="input-helper"></i>I agree to all Terms &
                        Conditions
                      </label>
                    </div>
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
                  <div className="text-center mt-4 font-weight-light">
                    Already have an account?{" "}
                    <a href="/user-pages/login" className="text-primary">
                      Login
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Register;
