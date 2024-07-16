import React from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { NavLink } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Landing = () => {
  return (
    <>
    {/* <div className="container">
    <Navbar collapseOnSelect expand="lg" className="bg-body-white">

        <Navbar.Brand>  <img src="./logo.avif" className="img-fluid mb-1" width="100px" height="auto"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">
         

</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      
    </Navbar>
</div> */}

<nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a href="#"><i className="bi-house"></i> Home</a></li>
                <li><a href="#"><i className="bi-info-circle"></i> About</a></li>
                <li><a href="#"><i className="bi-cart3"></i> Our Products</a></li>
                <li><a href="#"><i className="bi-quote"> </i>Testimonial</a></li>
                <li><a href="#"><i className="bi-whatsapp"> </i>Contact</a></li>
            </ul>
            <h1 class="logo"><img src="./logo.avif" className="img-fluid mb-1" width="100px" height="auto"/> </h1>
             {/* //<span className="dd"> Flier- Editor [Powered by SSPT]</span>  */}
        </div>
    </nav>

<div className="container mt-4">
<Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slider1.webp"
          alt="First slide"
          interval={500}
        />
        <Carousel.Caption>
          {/* <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slider2.webp"
          alt="Second slide"
          interval={500}
        />
        <Carousel.Caption>
          {/* <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slider1.webp"
          alt="Third slide"
          interval={500}
        />
        <Carousel.Caption>
          {/* <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>

<div className="container">

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
                  className="card-img-top mt-3"
                  alt="..."
                  height="150px"
                  width="200px"
                />
                <div className="card-body">
                  <h5 className="card-title">Anand Utsav with Gurudev</h5>
                  {/* <p className="card-text">
                    You can edit phot0, date, time, location and more in this
                    design
                  </p> */}
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
                  className="card-img-top mt-3"
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
                  className="card-img-top mt-3"
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
                  className="card-img-top mt-3"
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
                  className="card-img-top mt-3"
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
                  className="card-img-top"
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
                  className="card-img-top"
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
                  className="card-img-top"
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
      </div>



<section className="productsection mt-5 mb-5">
  <br/>
  <h4 className="text-center">&lt;&lt; Explore Our Best Selling Products &gt;&gt; </h4>
<div className="container-fluid">
  <div className="row justify-content-center">

      <Card style={{ width: '13rem', height:'13rem' }}>
      <a href="https://artofliving.store/products/an-intimate-note-to-the-sincere-seeker" target="_blank">  <Card.Img variant="top" src="intimate.webp" className="mt-2 img-fluid"  /> </a>
    </Card>
  

    <Card style={{ width: '13rem', height:'13rem' }}>
    <a href="https://artofliving.store/products/talking-bhagavad-gita" target="_blank"><Card.Img variant="top" src="bhagvad.webp" className="mt-2 img-fluid" /> </a>
  
    </Card>
  
  
    <Card style={{ width: '13rem', height:'13rem' }}>
    <a href="https://artofliving.store/products/saregama-carvaan-mini-the-art-of-living-5w-bluetooth-speaker-saffron-orange-stereo-channel" target="_blank"><Card.Img variant="top" src="saregama.webp" className="mt-2 img-fluid"/></a>
   
    </Card>
 
    <Card style={{ width: '13rem', height:'13rem' }}>
    <a href="https://artofliving.store/products/silver-coin-pre-order-now" target="_blank"> <Card.Img variant="top" src="coin1.webp" className="mt-2 img-fluid" /></a>

    </Card>


    <Card style={{ width: '13rem', height: '13rem'}}>
    <a href="https://artofliving.store/products/gold-coin-pre-order-now" target="_blank"><Card.Img variant="top" src="coin2.webp" className="mt-2 img-fluid"/></a>
    </Card>
  

    </div>
    </div>
    </section>

      {/* faq */} 

    

<div className="container mt-4 mb-4"> 
  <div className="row">


      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button active" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        When this will be fully functional?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is on the developing process.</strong> It will be fully functional soon. Omce it is completed we will notify via email or our community. <code>Be in touch</code>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Who is operating this?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>The Art of Living</strong> - Maintained by Sri Sri Publication Trust <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        What's the purpose?

      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>It is specially designed</strong>  to help volunteers/teachers who is organizing courses events and many more in the field. It contains already made fliers where you can just put your details, download it and share. <code>.accordion-body</code>
      </div>
    </div>
  </div>
</div>
</div>
</div>

<div>
  
</div>


      {/* Footer */}

      <footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
            
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                            <img src="./logo.avif" className="img-fluid mb-1" width="100px" height="auto"/>
                            </div>
                            <div className="footer-text">
                                <p>We promote peace through diverse humanitarian projects, including conflict resolution, disaster relief, sustainable rural development, empowerment of women, prisoner rehabilitation, education for all, and environmental sustainability.</p>
                            </div>
                            <div className="footer-social-icon">
                               Follow us:<br/>   
                                <a href="#"><i className="bi bi-facebook"></i></a>
                                <a href="#"><i className="bi bi-twitter"></i></a>
                                <a href="#"><i className=" bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Help</h3>
                            </div>
                            <ul>
                                <li><a href="https://artofliving.store/pages/payment" target="_blank">Payment</a></li>
                                <li><a href="#">Shipping</a></li>

                            
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Terms & Condition</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Cancellation & Refund Policy</a></li>
                                <li><a href="#">Terms & Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>About Store</h3>
                            </div>
                            <div className="footer-text mb-25">
                            <i className="bi-map"> </i><span>Bengaluru, Karnataka 560082</span>
                            </div>
                            <br/>
                            <div className="footer-text mb-25">
                            <i className="bi-phone"> </i><span>+91 7411057770</span>
                            </div>
                            <br/>
                            <div className="footer-text mb-25">
                            <i className="bi-envelope"> </i><span>support@artofliving.store</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="row">

                    <div className="col-xl-4 col-md-4 mb-3">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Store Location</h4>
                                <span>21st KM, Udayapura Post, Kanakapura Rd, Bengaluru, Karnataka 560082</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Call/Text us</h4>
                                <span>+91 7411057770</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span className="mail">support@artofliving.store</span>
                            </div>
                        </div>
                    </div>
                </div> */}
          

        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2024, All Right Reserved <a href="https://artofliving.store/">Sri Sri Publications Trust</a></p>
                        </div>
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
