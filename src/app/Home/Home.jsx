import React from "react";
import work from "./image/job.png";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home-grid-holder">
        <div className="home-grid">
          <div className="text-holder">
            <h2>
              One Step <br /> Closer To Your <br /> New Job
            </h2>
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet, ut vero numquam quos fuga voluptatibus? Excepturi
                pariatur vel alias dolore ullam, optio iusto architecto veniam
                esse odit nostrum, id praesentium.
              </p>
            </div>
            <form>
              <div className="home-grid-form">
                <div>
                  <input
                    className="search-input"
                    type="text"
                    required
                    placeholder="search job"
                  />
                </div>
                <div>
                  <input
                    className="search-input"
                    type="text"
                    required
                    placeholder="Location"
                  />
                </div>
                <div>
                  <input
                    className="search-btn"
                    style={{ background: "black" }}
                    type="submit"
                  />
                </div>
              </div>
            </form>
          </div>
          <div style={{ display: "grid", placeItems: "center" }}>
            <img src={work} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
