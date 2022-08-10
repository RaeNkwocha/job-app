import React, { useEffect } from "react";
import "../Nav/css/nav.css";
import { useState } from "react";
import authService from "../../services/auth/authService";
import axios from "axios";
import ButtonDarkExample from "./avatar/Avatar";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [userProfile, setUserProfile] = useState([]);
  const client = axios.create({
    baseURL: "https://api.carelobby.flux.i.ng/v1/",
  });

  client.interceptors.request.use(
    function (config) {
      if (!config.headers) config.headers = {};
      if (localStorage.getItem("jwt") != null) {
        config.headers["Authorization"] =
          "Bearer " + localStorage.getItem("jwt");
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  const openNav = () => {
    setOpen(!open);
  };
  const user = authService.user;
  console.log(user);

  useEffect(() => {
    if (user != null) {
      const userId = user.id;
      client.get(`users/${userId}?populate=*`).then((response) => {
        setUserProfile(response.data);
      });
    }
  }, []);

  console.log(userProfile);

  return (
    <>
      <div className="nav-container">
        <div>
          <nav className="nav-bar">
            <a style={{ textDecoration: "none", color: "black" }} href="/">
              <h1 style={{ zIndex: "200" }}>Logo</h1>
            </a>
            <ul className="nav-items">
              {user ? (
                <ButtonDarkExample />
              ) : (
                <ul className="nav-items">
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href="/user-pages/login"
                  >
                    <li>Login</li>
                  </a>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href="/user-pages/register"
                  >
                    <li>Sign up</li>
                  </a>
                </ul>
              )}
            </ul>
            {user ? (
              <div style={{ zIndex: "200" }} className="hamburger">
                <ButtonDarkExample />
              </div>
            ) : (
              <div style={{ zIndex: "200" }} className="hamburger">
                <button onClick={openNav}>
                  {open ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      fill="black"
                      class="bi bi-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      fill="black"
                      class="bi bi-list"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            )}
          </nav>
        </div>
        {open ? (
          <div className="mobile-nav">
            <ul>
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="/user-pages/login"
              >
                <li>Login</li>
              </a>
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="/user-pages/register"
              >
                <li>Sign Up</li>
              </a>
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="/user-pages/post-a-job"
              >
                <li>Post a job</li>
              </a>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Nav;
