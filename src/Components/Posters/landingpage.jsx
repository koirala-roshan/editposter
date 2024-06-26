import React from "react";
import Navbar from "./navbar";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link, NavLink } from "react-router-dom";
const Landing = () => {
  return (
    <>
      <div className="hero-img">
        <div className="texthero">
          <h1 className="">
            Hi, I am <span className="editor">flyer editor</span>
          </h1>
          <p className="">
            {" "}
            Designed by:{" "}
            <a
              href="https://artofliving.store/"
              target="_blank"
              className="text-white"
            >
              Sri Sri Publications Trust
            </a>{" "}
            for your convenience.
          </p>
        </div>
      </div>

      <Tabs 
        defaultActiveKey="happiness" 
        id="uncontrolled-tab-example"
        className="mb-3 justify-content-center newtabs"
      >
        <Tab eventKey="happiness" title="Happiness Program">
          <div className="container-fluid">
            <div className="row mt-3 justify-content-center">
              <div className="card">
                <img
                  src="./s1.jpg"
                  class="card-img-top mt-3"
                  alt="..."
                  height="150"
                  width="120rem"
                />
                <div className="card-body">
                  <h5 className="card-title">Happiness Program</h5>
                  <p className="card-text">
                    You can edit phot, date, time, location and more in this
                    design
                  </p>
                  <NavLink to="/editposter" className="btn btn-primary">
                    Edit this template{" "}
                  </NavLink>
                </div>
              </div>

              <div className="card">
                <img
                  src="./s2.jpg"
                  class="card-img-top mt-3"
                  alt="..."
                  height="150"
                  width="120rem"
                />
                <div className="card-body">
                  <h5 className="card-title">Happiness Program</h5>
                  <p className="card-text">
                    You can edit phot, date, time, location and more in this
                    design
                  </p>
                  <NavLink to="/editposter2" className="btn btn-primary">
                    Edit this template{" "}
                  </NavLink>
                </div>
              </div>

              <div className="card">
                <img
                  src="./hppp.jpg"
                  class="card-img-top mt-3"
                  alt="..."
                  height="150"
                  width="120rem"
                />
                <div className="card-body">
                  <h5 className="card-title">Happiness Program</h5>
                  <p className="card-text">
                    You can edit phot, date, time, location and more in this
                    design
                  </p>
                  <NavLink to="/editposter4" className="btn btn-primary">
                    Edit this template{" "}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="sahaj" title="Sahaj Samadhi Meditation">
          <div className="container">
            <div className="row mt-3 justify-content-center">
              <div className="card col-md-3">
                <img
                  src="./s1.jpg"
                  class="card-img-top"
                  alt="..."
                  height="290rem"
                />
                <div className="card-body">
                  <h5 className="card-title">Happiness Program</h5>
                  <p className="card-text">
                    You can edit phot, date, time, location and more in this
                    design
                  </p>
                  <NavLink to="/editposter" className="btn btn-primary">
                    Edit this template{" "}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="yoga" title="Sri Sri Yoga">
          <div className="container">
            <div className="row mt-3 justify-content-center">
              <div className="card col-md-3">
                <img
                  src="./followup1.jpg"
                  class="card-img-top"
                  alt="..."
                  height="290rem"
                />
                <div className="card-body">
                  <h5 className="card-title">Happiness Program</h5>
                  <p className="card-text">
                    You can edit phot, date, time, location and more in this
                    design
                  </p>
                  <NavLink to="/editposter3" className="btn btn-primary">
                    Edit this template{" "}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="followup" title="Follow Up">
          <div className="container">
            <div className="row mt-3 justify-content-center">
              <div className="card col-md-3">
                <img
                  src="./followup1.jpg"
                  class="card-img-top"
                  alt="..."
                  height="290rem"
                />
                <div className="card-body">
                  <h5 className="card-title">Happiness Program</h5>
                  <p className="card-text">
                    You can edit phot, date, time, location and more in this
                    design
                  </p>
                  <NavLink to="/editposter3" className="btn btn-primary">
                    Edit this template{" "}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </>
  );
};

export default Landing;
