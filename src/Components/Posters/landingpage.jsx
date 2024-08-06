import React, {useRef,useState, useEffect} from "react";
import Modal from 'react-bootstrap/Modal';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { NavLink } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Landing = () => {



const [formData, setFormData] = useState({

    user_email: '',

});
  // State to manage button disabled state
const [isButtonDisabled, setIsButtonDisabled] = useState(true);

// Effect to check if all fields are filled
useEffect(() => {
    const {user_email} = formData;
    setIsButtonDisabled(!(user_email ));
}, [formData]);

// Handle input change
const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};


  //email js
  const form = useRef();
  const sendEmail = () => {
    emailjs
      .sendForm('service_tmqtsbd', 'template_m3dzzif', form.current, {
        publicKey: 'rdStUfWtC91vQZenl',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          window.location.replace("/");

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  const MasterCreative = () => {
  sendEmail();
    const link = document.createElement('a');
    link.href = './English.jpg'; // Specify the file URL
    link.download = 'Master-AnandUtsav.jpg'; // Specify the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  const MasterCreative1 = () => {
    sendEmail();
    const link = document.createElement('a');
    link.href = './Hindi.jpg'; // Specify the file URL
    link.download = 'Master-AnandUtsav.jpg'; // Specify the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const MasterCreative2 = () => {
    const link = document.createElement('a');
    link.href = './englishbackground.jpg'; // Specify the file URL
    link.download = 'englishbackground.jpg'; // Specify the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const MasterCreative3 = () => {
    const link = document.createElement('a');
    link.href = './hindibackground.jpg'; // Specify the file URL
    link.download = 'hindibackground.jpg'; // Specify the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const MasterCreativekannada = () => {
    const link = document.createElement('a');
    link.href = './kannada.jpg'; // Specify the file URL
    link.download = 'kannada.jpg'; // Specify the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const MasterCreativetelegu = () => {
    const link = document.createElement('a');
    link.href = './telegu.jpg'; // Specify the file URL
    link.download = 'telugu.jpg'; // Specify the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const MasterCreativemalayalam = () => {
    const link = document.createElement('a');
    link.href = './malayalam.jpg'; // Specify the file URL
    link.download = 'malayalam.jpg'; // Specify the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const MasterCreativetamil = () => {
    const link = document.createElement('a');
    link.href = './tamil.jpg'; // Specify the file URL
    link.download = 'tamil.jpg'; // Specify the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const MasterCreativebengoli = () => {
    const link = document.createElement('a');
    link.href = './bengoli.jpg'; // Specify the file URL
    link.download = 'bengali.jpg'; // Specify the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const MasterCreativegujrati = () => {
    const link = document.createElement('a');
    link.href = './gujarati.jpg'; // Specify the file URL
    link.download = 'gujrati.jpg'; // Specify the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const MasterCreativemarathi = () => {
    const link = document.createElement('a');
    link.href = './marathi.jpg'; // Specify the file URL
    link.download = 'marathi.jpg'; // Specify the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };









  return (
    <>


<nav class="navbar fixedtop">
        <div class="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a href=""> Home</a></li>
                <li><NavLink to="/demovideo">Demo </NavLink></li>    

                <li><a href="https://artofliving.store/">Products</a></li>
                <li><a href="#contactpage">Contact</a></li>
          
                <li><a href="https://artofliving.store/pages/about-us">About</a></li>                 

                {/* <li><a href="#">Testimonial</a></li> */}
                {/* <li><a href="#">Contact</a></li> */}
            </ul>
            <h1 class="logo"><img src="./logo.avif" className="img-fluid mb-1" width="100px" height="auto"/> </h1>
             {/* //<span className="dd"> Flier- Editor [Powered by SSPT]</span>  */}
        </div>
    </nav>

<div className="herobg">
  <div className="content-arrange pt-5">
<h1 className="display-2 text-center text-white">
Official Flyer Making Site
</h1>
<h3 className="text-center text-white">Powered by Sri Sri Publications Trust</h3>
</div>
</div>










<div className="container">



      <Tabs 
        defaultActiveKey="anandutsav" 
        id="uncontrolled-tab-example" variant="pills"
        className="mb-3 justify-content-center ntabs pt-3"
      >
                <Tab eventKey="anandutsav" id="anandutsav" title="Anand Utsav">
                
         <div class="container">
                <Tabs
      defaultActiveKey="english"
      id="uncontrolled-tab-example"
      className="mb-3  justify-content-center newtabs" 
    >
      

      <Tab eventKey="english" title="English">
      <Container>

                <Row className="m-5">


                <Col>
                
                <div>
            <img
                  src="./design.png"

                  alt="..."
                  height="250px"
                  width="200px"
                  className="mt-3"
                />
                <center>
              <p>Size: 4:5 (1080*1350px)</p>
                <NavLink to="/anandutsav"> <button className=" btn btn-primary btn-sm mb-3 w-100"> Edit</button></NavLink>

                </center>
                </div>
                </Col>





                <Col>
                <div>
    <img
                  src="./design2.jpg"

                  alt="..."
                  height="200px"
                  width="200px"
                  className="mt-3"
                />
                              
                           <center>
                             
                             <p>Size: Square (1080*1080px)</p> 
                             <NavLink to="/anandutsav2"> <button className="btn btn-primary btn-sm mb-3 w-100"> Edit</button></NavLink>
                             </center>
              
       </div>
                </Col>
                <Col>
                <div>
                <img
                  src="./design3.jpg"

                  alt="..."
                  height="240px"
                  width="135px"
                  className="mt-3"
                />
                              
                           
                        <center>
                             <p>Size: Story (1920*1080px)</p>
                           
                             <NavLink to="/anandutsav3"> <button className=" btn btn-primary btn-sm mb-3 w-100"> Edit</button></NavLink>  </center>
                             </div>
                </Col>
                <Col>
                
                
                </Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>

                </Row>
                </Container>
      </Tab>




      <Tab eventKey="hindi" title="Hindi">
        <Container>
          <Row className="m-5">
      <Col>
      <div>
                <img
                  src="./web1hindi.png"

                  alt="..."
                  height="250px"
                  width="200px"
                  className="mt-3"
                />
                <center>
              <p>Size: 4:5 (1080*1350px)</p>
                <NavLink to="/anandutsavhindi"> <button className=" btn btn-primary btn-sm mb-3 w-100"> Edit</button></NavLink>

                </center>
                </div>
                </Col>

                <Col>
                <div>
                <img
                  src="./web1hindi.png"

                  alt="..."
                  height="250px"
                  width="200px"
                  className="mt-3"
                />
                <center>
              <p>Size: 4:5 (1080*1350px)</p>
                <NavLink to="/hindisquare"> <button className=" btn btn-primary btn-sm mb-3 w-100"> Edit</button></NavLink>

                </center>
                </div>
                </Col>
                <Col>
                <div>
                <img
                  src="./hindistory.jpg"

                  alt="..."
                  height="240px"
                  width="135px"
                  className="mt-3"
                />
                              
                           
                        <center>
                             <p>Size: Story (1920*1080px)</p>
                           
                             <NavLink to="/anandutsavhindistory"> <button className=" btn btn-primary btn-sm mb-3 w-100"> Edit</button></NavLink>  </center>
                             </div>
                </Col>
                <Col></Col>
                <Col></Col>
             


              </Row>
            </Container>

      </Tab>

      <Tab eventKey="kannada" title="Kannada">
        <Container>
          <Row className="m-5">
    

                <Col>
                <div>
                <img
                  src="./kannadasquare.jpg"

                  alt="..."
                  height="250px"
                  width="250px"
                  className="mt-3"
                />
                <center>
              <p>Size: square (1080*1080px)</p>
                <NavLink to="/kannadasquare"> <button className=" btn btn-primary btn-sm mb-3 w-100"> Edit</button></NavLink>

                </center>
                </div>
                </Col>
                <Col>
                <div>
                <img
                  src="./kannada45.jpg"

                  alt="..."
                  height="250px"
                  width="200px"
                  className="mt-3"
                />
                <center>
              <p>Size: 4:5 (1080*1350px)</p>
                <NavLink to="/kannada45"> <button className=" btn btn-primary btn-sm mb-3 w-100"> Edit</button></NavLink>

                </center>
                </div>
                </Col>
                <Col>
                <div>
                <img
                  src="./kannadastory.jpg"

                  alt="..."
                  height="240px"
                  width="135px"
                  className="mt-3"
                />
                <center>
              <p>Size: 4:5 (1080*1350px)</p>
                <NavLink to="/kannadastory"> <button className=" btn btn-primary btn-sm mb-3 w-100"> Edit</button></NavLink>

                </center>
                </div>
                
                </Col>
                <Col></Col>
             


              </Row>
            </Container>

      </Tab>


      <Tab eventKey="malayalam" title="Malayalam">
        <Container>
          <Row className="m-5">
    

                <Col>
                <div>
                <img
                  src="./malyalamsquare.jpg"

                  alt="..."
                  height="250px"
                  width="250px"
                  className="mt-3"
                />
                <center>
              <p>Size: square (1080*1080px)</p>
                <NavLink to="/malyalamsquare"> <button className=" btn btn-primary btn-sm mb-3 w-100"> Edit</button></NavLink>

                </center>
                </div>
                </Col>
                <Col>
                <div>
                <img
                  src="./malyalam45.jpg"

                  alt="..."
                  height="250px"
                  width="200px"
                  className="mt-3"
                />
                <center>
              <p>Size: 4:5 (1080*1350px)</p>
                <NavLink to="/malyalam45"> <button className=" btn btn-primary btn-sm mb-3 w-100"> Edit</button></NavLink>

                </center>
                </div>
                </Col>
                <Col>
                <div>
                <img
                  src="./malyalamstory.jpg"

                  alt="..."
                  height="240px"
                  width="135px"
                  className="mt-3"
                />
                <center>
              <p>Size: 4:5 (1080*1350px)</p>
                <NavLink to="/malyalamstory"> <button className=" btn btn-primary btn-sm mb-3 w-100"> Edit</button></NavLink>

                </center>
                </div>
                
                </Col>
                <Col></Col>
             


              </Row>
            </Container>

      </Tab>


      <Tab eventKey="marathi" title="Marathi">
        <Container>
          <Row className="m-5">
    

                <Col>
                <div>
                <img
                  src="./marathisquare.jpg"

                  alt="..."
                  height="250px"
                  width="250px"
                  className="mt-3"
                />
                <center>
              <p>Size: square (1080*1080px)</p>
                <NavLink to="/marathisquare"> <button className=" btn btn-primary btn-sm mb-3 w-100"> Edit</button></NavLink>

                </center>
                </div>
                </Col>
                <Col>
                <div>
                <img
                  src="./marathi45.jpg"

                  alt="..."
                  height="250px"
                  width="200px"
                  className="mt-3"
                />
                <center>
              <p>Size: 4:5 (1080*1350px)</p>
                <NavLink to="/marathi45"> <button className=" btn btn-primary btn-sm mb-3 w-100"> Edit</button></NavLink>

                </center>
                </div>
                </Col>
                <Col>
                <div>
                <img
                  src="./marathistory.jpg"

                  alt="..."
                  height="240px"
                  width="135px"
                  className="mt-3"
                />
                <center>
              <p>Size: 4:5 (1080*1350px)</p>
                <NavLink to="/marathistory"> <button className=" btn btn-primary btn-sm mb-3 w-100"> Edit</button></NavLink>

                </center>
                </div>
                
                </Col>
                <Col></Col>
             


              </Row>
            </Container>

      </Tab>

      <Tab eventKey="gujrati" title="Gujarati">
        <Container>
          <Row className="m-5">
    

                <Col>
                <div>
                <img
                  src="./gujratisquare.jpg"

                  alt="..."
                  height="250px"
                  width="250px"
                  className="mt-3"
                />
                <center>
              <p>Size: square (1080*1080px)</p>
                <NavLink to="/gujratisquare"> <button className=" btn btn-primary btn-sm mb-3 w-100"> Edit</button></NavLink>

                </center>
                </div>
                </Col>
                <Col>
                <div>
                <img
                  src="./gujrati45.jpg"

                  alt="..."
                  height="250px"
                  width="200px"
                  className="mt-3"
                />
                <center>
              <p>Size: 4:5 (1080*1350px)</p>
                <NavLink to="/gujrati45"> <button className=" btn btn-primary btn-sm mb-3 w-100"> Edit</button></NavLink>

                </center>
                </div>
                </Col>
                <Col>
                <div>
                <img
                  src="./gujratistory.jpg"

                  alt="..."
                  height="240px"
                  width="135px"
                  className="mt-3"
                />
                <center>
              <p>Size: 4:5 (1080*1350px)</p>
                <NavLink to="/gujratistory"> <button className=" btn btn-primary btn-sm mb-3 w-100"> Edit</button></NavLink>

                </center>
                </div>
                
                </Col>
                <Col></Col>
             


              </Row>
            </Container>

      </Tab>

      <Tab eventKey="Bengali" title="Bengali">
        <Container>
          <Row className="m-5">
    

                <Col>
                <div>
                <img
                  src="./bengolisquare.jpg"

                  alt="..."
                  height="250px"
                  width="250px"
                  className="mt-3"
                />
                <center>
              <p>Size: square (1080*1080px)</p>
                <NavLink to="/bengolisquare"> <button className=" btn btn-primary btn-sm mb-3 w-100"> Edit</button></NavLink>

                </center>
                </div>
                </Col>
                <Col>
                <div>
                <img
                  src="./bengoli45.jpg"

                  alt="..."
                  height="250px"
                  width="200px"
                  className="mt-3"
                />
                <center>
              <p>Size: 4:5 (1080*1350px)</p>
                <NavLink to="/bengoli45"> <button className=" btn btn-primary btn-sm mb-3 w-100"> Edit</button></NavLink>

                </center>
                </div>
                </Col>
                <Col>
                <div>
                <img
                  src="./bengolistory.jpg"

                  alt="..."
                  height="240px"
                  width="135px"
                  className="mt-3"
                />
                <center>
              <p>Size: 4:5 (1080*1350px)</p>
                <NavLink to="/bengolistory"> <button className=" btn btn-primary btn-sm mb-3 w-100"> Edit</button></NavLink>

                </center>
                </div>
                
                </Col>
                <Col></Col>
             


              </Row>
            </Container>

      </Tab>

      <Tab eventKey="tamil" title="Tamil">
        <Container>
          <Row className="m-5">
    

                <Col>
                <div>
                <img
                  src="./tamilsquare.jpg"

                  alt="..."
                  height="250px"
                  width="250px"
                  className="mt-3"
                />
                <center>
              <p>Size: square (1080*1080px)</p>
                <NavLink to="/tamilsquare"> <button className=" btn btn-primary btn-sm mb-3 w-100"> Edit</button></NavLink>

                </center>
                </div>
                </Col>
                <Col>
                <div>
                <img
                  src="./tamil45.jpg"

                  alt="..."
                  height="250px"
                  width="200px"
                  className="mt-3"
                />
                <center>
              <p>Size: 4:5 (1080*1350px)</p>
                <NavLink to="/tamil45"> <button className=" btn btn-primary btn-sm mb-3 w-100"> Edit</button></NavLink>

                </center>
                </div>
                </Col>
                <Col>
                <div>
                <img
                  src="./tamilstory.jpg"

                  alt="..."
                  height="240px"
                  width="135px"
                  className="mt-3"
                />
                <center>
              <p>Size: 4:5 (1920*1080px)</p>
                <NavLink to="/tamilstory"> <button className=" btn btn-primary btn-sm mb-3 w-100"> Edit</button></NavLink>

                </center>
                </div>
                
                </Col>
                <Col></Col>
             


              </Row>
            </Container>

      </Tab>
      <Tab eventKey="telegu" title="Telugu">
        <Container>
          <Row className="m-5">
    

                <Col>
                <div>
                <img
                  src="./telegusquare.jpg"

                  alt="..."
                  height="250px"
                  width="250px"
                  className="mt-3"
                />
                <center>
              <p>Size: square (1080*1080px)</p>
                <NavLink to="/telegusquare"> <button className=" btn btn-primary btn-sm mb-3 w-100"> Edit</button></NavLink>

                </center>
                </div>
                </Col>
                <Col>
                <div>
                <img
                  src="./telegu45.jpg"

                  alt="..."
                  height="250px"
                  width="200px"
                  className="mt-3"
                />
                <center>
              <p>Size: 4:5 (1080*1350px)</p>
                <NavLink to="/telegu45"> <button className=" btn btn-primary btn-sm mb-3 w-100"> Edit</button></NavLink>

                </center>
                </div>
                </Col>
                <Col>
                <div>
                <img
                  src="./telegustory.jpg"

                  alt="..."
                  height="240px"
                  width="135px"
                  className="mt-3"
                />
                <center>
              <p>Size: 4:5 (1920*1080px)</p>
                <NavLink to="/telegustory"> <button className=" btn btn-primary btn-sm mb-3 w-100"> Edit</button></NavLink>

                </center>
                </div>
                
                </Col>
                <Col></Col>
             


              </Row>
            </Container>

      </Tab>
























      <Tab eventKey="master" title="Master File" >
        <Container>

 <Row>
      <Col>
                
                <div>
            <img
                  src="./English.jpg"

                  alt="..."
                  height="250px"
                  width="250px"
                  className="mt-3"
                />
             
              <p>Size: square (1080*1080px)</p>
              {/* <input type="email" placeholder="something@gmail.com" name="user_email" required value={formData.user_email} onChange={handleInputChange} /> */}
        <button onClick={MasterCreative} className=" btn btn-primary btn-sm mb-3"  disabled={isButtonDisabled}> Download</button>

     
                </div>
                </Col>
                <Col>
                
                <div>
            <img
                  src="./Hindi.jpg"

                  alt="..."
                  height="250px"
                  width="250px"
                  className="mt-3"
                />
             
              <p>Size: square (1080*1080px)</p>
              {/* <input type="email" placeholder="something@gmail.com" name="user_email1" required value={formData.user_email1} onChange={handleInputChange} /> */}
        <button onClick={MasterCreative1} className=" btn btn-primary btn-sm mb-3"  disabled={isButtonDisabled}> Download</button>
                
                </div>
                </Col>
                <Col>
                <div>
            <img
                  src="./kannada.jpg"

                  alt="..."
                  height="250px"
                  width="250px"
                  className="mt-3"
                />
             
              <p>Size: square (1080*1080px)</p>
              {/* <input type="email" placeholder="something@gmail.com" name="user_email2" required value={formData.user_email2} onChange={handleInputChange} /> */}
        <button onClick={MasterCreativekannada} className=" btn btn-primary btn-sm mb-3"  disabled={isButtonDisabled}> Download</button>


                </div>
                </Col>
                <Col>
                <div>
            <img
                  src="./malayalam.jpg"

                  alt="..."
                  height="250px"
                  width="250px"
                  className="mt-3"
                />
             
              <p>Size: square (1080*1080px)</p>
              {/* <input type="email" placeholder="something@gmail.com" name="user_email3" required value={formData.user_email3} onChange={handleInputChange} /> */}
        <button onClick={MasterCreativemalayalam} className=" btn btn-primary btn-sm mb-3"  disabled={isButtonDisabled}> Download</button>

                </div>
                
                </Col>
                <Col>
                <div>
            <img
                  src="./telegu.jpg"

                  alt="..."
                  height="250px"
                  width="250px"
                  className="mt-3"
                />
             
              <p>Size: square (1080*1080px)</p>
              {/* <input type="email" placeholder="something@gmail.com" name="user_email4" required value={formData.user_email4} onChange={handleInputChange} /> */}
        <button onClick={MasterCreativetelegu} className=" btn btn-primary btn-sm mb-3"  disabled={isButtonDisabled}> Download</button>


                </div>
                
                </Col>
                <Col>
                <div>
            <img
                  src="./tamil.jpg"

                  alt="..."
                  height="250px"
                  width="250px"
                  className="mt-3"
                />
             
              <p>Size: square (1080*1080px)</p>
              {/* <input type="email" placeholder="something@gmail.com" name="user_email5" required value={formData.user_email5} onChange={handleInputChange} /> */}
        <button onClick={MasterCreativetamil} className=" btn btn-primary btn-sm mb-3"  disabled={isButtonDisabled}> Download</button>

                
                </div>
                </Col>

                <Col>
                <div>
            <img
                  src="./bengoli.jpg"

                  alt="..."
                  height="250px"
                  width="250px"
                  className="mt-3"
                />
             
              <p>Size: square (1080*1080px)</p>
              {/* <input type="email" placeholder="something@gmail.com" name="user_email6" required value={formData.user_email6} onChange={handleInputChange} /> */}
              <button onClick={MasterCreativebengoli} className=" btn btn-primary btn-sm mb-3"  disabled={isButtonDisabled}> Download</button>

                
                </div>
                </Col>
                <Col>
                <div>
            <img
                  src="./marathi.jpg"

                  alt="..."
                  height="250px"
                  width="250px"
                  className="mt-3"
                />
             
              <p>Size: square (1080*1080px)</p>
              {/* <input type="email" placeholder="something@gmail.com" name="user_email7" required value={formData.user_email7} onChange={handleInputChange} /> */}
        <button onClick={MasterCreativemarathi} className=" btn btn-primary btn-sm mb-3"  disabled={isButtonDisabled}> Download</button>


                </div>
                </Col>
                <Col>
                <div>
            <img
                  src="./gujarati.jpg"

                  alt="..."
                  height="250px"
                  width="250px"
                  className="mt-3"
                />
             
              <p>Size: square (1080*1080px)</p>
              {/* <input type="email" placeholder="something@gmail.com" name="user_email8" required value={formData.user_email8} onChange={handleInputChange} /> */}
        <button onClick={MasterCreativegujrati} className=" btn btn-primary btn-sm mb-3"  disabled={isButtonDisabled}> Download</button>

                
                </div>
                </Col>
                
              </Row>
            </Container>
      </Tab>



      <Tab eventKey="zoom" title="Zoom Backgrounds" >
        <Container>

 <Row>
      <Col>
                
                <div>
            <img
                  src="./englishbackground.jpg"

                  alt="..."
                  height="135px"
                  width="240px"
                  className="mt-3"
                />
             
              <p>Size: zoom background - english (1920*1080px)</p>
              {/* <input type="email" placeholder="something@gmail.com" name="user_email9" required value={formData.user_email9} onChange={handleInputChange} /> */}
        <button onClick={MasterCreative2} className=" btn btn-primary btn-sm mb-3"  disabled={isButtonDisabled}> Download</button>


                </div>
                </Col>
                <Col>
                
                <div>
            <img
                  src="./hindibackground.jpg"

                  alt="..."
                  height="135px"
                  width="240px"
                  className="mt-3"
                />
             
              <p>Size: zoom background -hindi (1920*1080px)</p>
              {/* <input type="email" placeholder="something@gmail.com" name="user_email9" required value={formData.user_email9} onChange={handleInputChange} /> */}
        <button onClick={MasterCreative3} className=" btn btn-primary btn-sm mb-3"  disabled={isButtonDisabled}> Download</button>
     

                
                </div>
                </Col>
                <Col>
                
                </Col>
                <Col></Col>
              </Row>
            </Container>
      </Tab>
    </Tabs>
    </div>




         
             





        </Tab>
        <Tab eventKey="happiness" id="hp" variant="pills" title="Happiness Program">
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
        <Tab eventKey="sahaj" variant="pills" title="Sahaj Samadhi Meditation">
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
        <Tab eventKey="yoga" variant="pills" title="Sri Sri Yoga">
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
        <Tab variant="pills" eventKey="followup" title="Follow Up">
          <Container>
            <Row>
        <Col>
                
                <div>
            <img
                  src="./followupnew.jpg"

                  alt="..."
                  height="200px"
                  width="200px"
                  className="mt-3"
                />
             
              <p>Size: Followup Square Size (1080*1080px)</p>
              <NavLink to="/editposter3"> <button className=" btn btn-primary btn-sm mb-3 w-100"> Edit</button></NavLink>

                
                </div>
                </Col>
                <Col>
                <div>
            <img
                  src="./followupnew2.jpg"

                  alt="..."
                  height="200px"
                  width="200px"
                  className="mt-3"
                />
             
              <p>Size: Followup Square Size (1080*1080px)</p>
              <NavLink to="/followup2"> <button className=" btn btn-primary btn-sm mb-3 w-100"> Edit</button></NavLink>

                
                </div>
                </Col>

                <Col></Col>
                <Col></Col>
                <Col></Col>  
                <Col></Col>



              </Row>
            </Container>
        </Tab>

        <Tab variant="pills" eventKey="satsang" title="Satsang">
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

      <section className="contactpage" id="contactpage">
<div class="container">
  <div class="row p-4 justify-content-center">
    <div class="col-lg-12">
      {/* <h1 class="mb-3">Contact us</h1> */}
      <h4 class="mb-2 text-center">For Teachers Discount on Gurudev Photo Frames/ Paintings/Prints and other Products</h4>
  <p className="text-white text-center">
  Call: +91 7411057770 or Email: support@artofliving.store
    </p>
    </div>
  </div>
</div>

</section>

<section className="productsection">

{/* <h4 className="text-center">&lt; Explore Our Best Selling Products &gt; </h4> */}
<div className="container-fluid p-4">
  <div className="row justify-content-center ">

      <Card style={{ width: '13rem', height:'13rem', backgroundColor:'transparent',border:'none' }}>
        <Card.Img variant="top" src="intimate.webp" className="mt-2 img-fluid"  /><a href="https://artofliving.store/products/an-intimate-note-to-the-sincere-seeker"><button type="button" className="btn btn-primary btn-sm w-100">View Product</button> </a>
    </Card>
  

    <Card style={{ width: '13rem', height:'13rem',backgroundColor:'transparent',border:'none' }}>
   <Card.Img variant="top" src="bhagvad.webp" className="mt-2 img-fluid" />  <a href="https://artofliving.store/products/talking-bhagavad-gita"><button type="button" className="btn btn-primary btn-sm w-100">View Product</button> </a>
  
    </Card>
  
  
    <Card style={{ width: '13rem', height:'13rem',backgroundColor:'transparent',border:'none' }}>
<Card.Img variant="top" src="saregama.webp" className="mt-2 img-fluid"/>     <a href="https://artofliving.store/products/saregama-carvaan-mini-the-art-of-living-5w-bluetooth-speaker-saffron-orange-stereo-channel"> <button type="button" className="btn btn-primary btn-sm w-100">View Product</button></a>
   
    </Card>
 
    <Card style={{ width: '13rem', height:'13rem',backgroundColor:'transparent',border:'none' }}>
 <Card.Img variant="top" src="patanjali.webp" className="mt-2 img-fluid" />    <a href="https://artofliving.store/products/patanjali-yoga-sutras-english-1?_pos=2&_psq=patanja&_ss=e&_v=1.0"> <button type="button" className="btn btn-primary btn-sm w-100">View Product</button></a>

    </Card>


    <Card style={{ width: '13rem', height: '13rem',backgroundColor:'transparent',border:'none'}}>
<Card.Img variant="top" src="coin2.webp" className="mt-2 img-fluid"/>    <a href="https://artofliving.store/products/gold-coin-pre-order-now"><button type="button" className="btn btn-primary btn-sm w-100">View Product</button></a>
    </Card>

    <Card style={{ width: '13rem', height: '13rem',backgroundColor:'transparent',border:'none'}}>
<Card.Img variant="top" src="magazine.webp" className="mt-2 img-fluid"/>    <a href="https://artofliving.store/products/art-of-living-magazine"><button type="button" className="btn btn-primary btn-sm w-100">View Product</button></a>
    </Card>
    <Card style={{ width: '13rem', height: '13rem',backgroundColor:'transparent',border:'none'}}>
<Card.Img variant="top" src="shivasutras.webp" className="mt-2 img-fluid"/>    <a href="https://artofliving.store/products/shiva-sutra-hindi-9789380592398"><button type="button" className="btn btn-primary btn-sm w-100">View Product</button></a>
    </Card>
  
    <Card style={{ width: '13rem', height: '13rem',backgroundColor:'transparent',border:'none'}}>
<Card.Img variant="top" src="paduka.webp" className="mt-2 img-fluid"/>    <a href="https://artofliving.store/products/metal-pooja-stand-with-paduka"><button type="button" className="btn btn-primary btn-sm w-100">View Product</button></a>
    </Card>
    <Card style={{ width: '13rem', height: '13rem',backgroundColor:'transparent',border:'none'}}>
<Card.Img variant="top" src="aolapp.webp" className="mt-2 img-fluid"/>    <a href="https://artofliving.store/products/art-of-living-app"><button type="button" className="btn btn-primary btn-sm w-100">View Product</button></a>
    </Card>
    <Card style={{ width: '13rem', height: '13rem',backgroundColor:'transparent',border:'none'}}>
<Card.Img variant="top" src="foldablegurudev.webp" className="mt-2 img-fluid"/>    <a href="https://artofliving.store/products/gurudev-foldable-photo-frame-with-paduka-1"><button type="button" className="btn btn-primary btn-sm w-100">View Product</button></a>
    </Card>
    <Card style={{ width: '13rem', height: '13rem',backgroundColor:'transparent',border:'none'}}>
<Card.Img variant="top" src="naradbhakti.webp" className="mt-2 img-fluid"/>    <a href="https://artofliving.store/products/narada-bhakti-sutra-english-9789380114279?variant=41463036575780"><button type="button" className="btn btn-primary btn-sm w-100">View Product</button></a>
    </Card>

    <Card style={{ width: '13rem', height: '13rem',backgroundColor:'transparent',border:'none'}}>
<Card.Img variant="top" src="keychain.webp" className="mt-2 img-fluid"/>    <a href="https://artofliving.store/products/wooden-key-chain-capsule-shape"><button type="button" className="btn btn-primary btn-sm w-100">View Product</button></a>
    </Card>
    <Card style={{ width: '13rem', height: '13rem',backgroundColor:'transparent',border:'none'}}>
<Card.Img variant="top" src="ashtavakra.webp" className="mt-2 img-fluid"/>    <a href="https://artofliving.store/products/ashtavakra-gita-english"><button type="button" className="btn btn-primary btn-sm w-100">View Product</button></a>
    </Card>
    <Card style={{ width: '13rem', height: '13rem',backgroundColor:'transparent',border:'none'}}>
    <Card.Img variant="top" src="WONDERS.webp" className="mt-2 img-fluid"/><a href="https://artofliving.store/products/wonders-of-ashram-english"><button type="button" className="btn btn-primary btn-sm w-100">View Product</button></a>
    </Card>
  

    </div>
    </div>
    </section>




{/* 
    <Carousel indicators={false} controls={false} className="">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="frames.webp"
          alt="First slide"
          interval={100}
        />
        <Carousel.Caption> */}
          {/* <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        {/* </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slider2.webp"
          alt="Second slide"
          interval={100}
        />
        <Carousel.Caption> */}
          {/* <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        {/* </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item> */}
        {/* <img
          className="d-block w-100"
          src="slider1.webp"
          alt="Third slide"
          interval={100}
        /> */}
        {/* <Carousel.Caption> */}
          {/* <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        {/* </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}











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
        <strong>This is on the developing process.</strong> It will be fully functional soon. Once it is completed we will notify via email or our community. <code>Be in touch</code>
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
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                           <h3>About Us</h3>
                            </div>
                            <div className="footer-text">
                                <p>We promote peace through diverse humanitarian projects, including conflict resolution, disaster relief, sustainable rural development, empowerment of women, prisoner rehabilitation, education for all, and environmental sustainability.</p>
                            </div>
                            <div className="footer-social-icon">
                               Follow us:<br/>   
                                <a href="https://www.facebook.com/ArtofLiving/"><i className="bi bi-facebook"></i></a>
                                <a href="https://x.com/ArtofLiving"><i className="bi bi-twitter"></i></a>
                                <a href="https://www.instagram.com/artofliving/?hl=en"><i className=" bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Help</h3>
                            </div>
                            <ul>
                                <li><a href="https://artofliving.store/pages/payment">Payment</a></li>
                                <li><a href="https://artofliving.store/pages/shipping">Shipping</a></li>

                            
                                <li><a href="https://artofliving.store/pages/cancellation-and-return-policy">Return and Cancellation</a></li>
                                <li><a href="https://artofliving.store/pages/terms-and-conditions">Terms & Condition</a></li>
                                <li><a href="https://artofliving.store/pages/privacy-policy">Privacy Policy</a></li>
                                <li><a href="https://artofliving.store/pages/cancellation-and-return-policy">Refund Policy</a></li>
                                <li><a href="https://artofliving.store/policies/terms-of-servicehttps://artofliving.store/policies/terms-of-service">Terms & Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Sri Sri Publications Trust</h3>
                            </div>
                            <div className="footer-text mb-25">
                            <i className="bi-map"> </i><span>Bengaluru, Karnataka 560082</span>
                            </div>
                            
                            <div className="footer-text mb-25">
                            <i className="bi-phone"> </i><span>+91 7411057770</span>
                            </div>
                            
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
