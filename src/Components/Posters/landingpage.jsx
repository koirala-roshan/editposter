import React from "react";
import Navbar from "./navbar";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link, NavLink } from "react-router-dom";
const Landing = () => {
  return (
    <>




<h1 className="niceh1"><span className="dd1">Beta</span>  Hi I am Flier Editor <span className="dd">Powered by SSPT</span> </h1>
{/* <p className="cclp container text-center mb-4">Specially designed to help volunteers/teachers who is organizing courses events and many more in the field. It contains already made fliers where you can just put your details, download it and share.</p> */}
      
      <Tabs 
        defaultActiveKey="anandutsav" 
        id="uncontrolled-tab-example"
        className="mb-3 justify-content-center ntabs"
      >
                <Tab eventKey="anandutsav" title="Anand Utsav">
          <div className="container-fluid">
            <div className="row mt-3 justify-content-center">
              <div className="card">
                <img
                  src="./frontcover.jpg"
                  class="card-img-top mt-3"
                  alt="..."
                  height="150px"
                  width="200px"
                />
                <div className="card-body">
                  <h5 className="card-title">Anand Utsav with Gurudev</h5>
                  <p className="card-text">
                    You can edit phot0, date, time, location and more in this
                    design
                  </p>
                  <NavLink to="/anandutsav" className="btn btn-primary">
                    Edit this template{" "}
                  </NavLink>
                </div>
              </div>



            </div>
          </div>
        </Tab>
        <Tab eventKey="happiness" title="Happiness Program">
        <p className="text-center text-danger">Coming soon...</p>
          {/* <div className="container-fluid">
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
          </div> */}
        </Tab>
        <Tab eventKey="sahaj" title="Sahaj Samadhi Meditation">
        <p className="text-center text-danger">Coming soon...</p>
          {/* <div className="container">
            <div className="row mt-3 justify-content-center">
              <div className="card col-md-3 mt-3">
                <img
                  src="./s1.jpg"
                  class="card-img-top mt-3"
                  alt="..."
                   height="120"
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
            </div>
          </div> */}
        </Tab>
        <Tab eventKey="yoga" title="Sri Sri Yoga">
        <p className="text-center text-danger">Coming soon...</p>
          {/* <div className="container">
            <div className="row mt-3 justify-content-center">
              <div className="card col-md-3 mb-3 mt-3">
                <img
                  src="./followup1.jpg"
                  class="card-img-top"
                  alt="..."
                                    height="120"
                  width="120rem"
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
          </div> */}
        </Tab>
        <Tab eventKey="followup" title="Follow Up">
        <p className="text-center text-danger">Coming soon...</p>
          {/* <div className="container">
            <div className="row mt-3 justify-content-center mb-3">
              <div className="card col-md-3">
                <img
                  src="./followup1.jpg"
                  class="card-img-top"
                  alt="..."
                                height="150"
                  width="120rem"
                />
                <div className="card-body">
                  <h5 className="card-title">Follow Up</h5>
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
          </div> */}
        </Tab>

        <Tab eventKey="satsang" title="Satsang">
          <p className="text-center text-danger">Coming soon...</p>
          {/* <div className="container">
            <div className="row mt-3 justify-content-center mb-3">
              <div className="card col-md-3">
                <img
                  src="./followup1.jpg"
                  class="card-img-top"
                  alt="..."
                                height="150"
                  width="120rem"
                />
                <div className="card-body">
                  <h5 className="card-title">Follow Up</h5>
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
          </div> */}
        </Tab>
      </Tabs>

      {/* faq */} 

<div className="container mt-4 mb-4"> 
  <div className="row">


      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button active" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        When this will be fully functional?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Who is operating this?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>The Art of Living</strong> - Maintained by Sri Sri Publication Trust <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        What's the purpose?

      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>It is specially designed</strong>  to help volunteers/teachers who is organizing courses events and many more in the field. It contains already made fliers where you can just put your details, download it and share. <code>.accordion-body</code>
      </div>
    </div>
  </div>
</div>
</div>
</div>


      {/* Footer */}

      <footer class="footer-section">
        <div class="container">
            <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="cta-text">
                                <h4>Find us</h4>
                                <span>21st KM, Udayapura Post, Kanakapura Rd, Bengaluru, Karnataka 560082</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-phone"></i>
                            <div class="cta-text">
                                <h4>Call us</h4>
                                <span>+91 7411057770</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="far fa-envelope-open"></i>
                            <div class="cta-text">
                                <h4>Mail us</h4>
                                <span className="mail">support@artofliving.store</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                            <img src="./logo.avif" className="img-fluid"/>
                            </div>
                            <div class="footer-text">
                                <p>We promote peace through diverse humanitarian projects, including conflict resolution, disaster relief, sustainable rural development, empowerment of women, prisoner rehabilitation, education for all, and environmental sustainability.</p>
                            </div>
                            <div class="footer-social-icon">
                                <span>Follow us</span>
                                <a href="#"><i class="bi bi-facebook"></i></a>
                                <a href="#"><i class="bi bi-twitter"></i></a>
                                <a href="#"><i class=" bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="https://artofliving.store/">Home</a></li>
                                <li><a href="#">about</a></li>

                            
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Latest News</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        {/* <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <img src="./logo.avif" className="img-fluid"/>
                            </div>
                            
                        </div> */}
                    </div>
                </div>
            </div>
        </div>

        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2018, All Right Reserved <a href="https://artofliving.store/">Sri Sri Publications Trust</a></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </footer>
    </>
  );
};

export default Landing;
