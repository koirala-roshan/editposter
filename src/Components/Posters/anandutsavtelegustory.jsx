import React, { useState,useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import emailjs from '@emailjs/browser';


const Anandutsavtelegustory = () => {
  const [show, setShow] = useState(false);

 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Teachersname, setTeachersName] = useState('ரோஹித் சர்மா');
  const [link, setLink] = useState('பதிவு செய்யுங்கள்: aolic.org/12345');
  const [date, setDate] = useState('13th -16th August');
  const [time, setTime] = useState('6:00-9:00AM');
  const [contact, setContact] = useState('9036425223');
  const [venue, setVenue] = useState('இடம்: வாழும் கலை சர்வதேச மையம்');

  //image handler
  const [imagePreview, setImagePreview] = useState("./sample.jpg");
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


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

//emailjs code
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

//downloadpostercode

  const downloadPoster = async () => {

    const poster = document.getElementById('posteranandtelegustory');
    
    if (poster, {scale:2}) {
      try { 
  
 
        const canvas = await html2canvas(poster);
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpg');
        link.download = 'design.jpg';
        link.click();
       

      } catch (error) {
        console.error('Error generating canvas: ', error);
      }
    } else {
      console.error('Poster element not found');
    }
  };

  // const captureFunction = () => {
  //   html2canvas(document.querySelector(".firstdiv"), { scale: 5 }).then(
  //     (canvas) => {
  //       document.body.appendChild(canvas);
  //       link.download = 'design.jpg';
  //       link.click();
  //     }
  //   );
  // };

  //handle click
  const handleButtonClick = async (event) => {
    await downloadPoster();
    await sendEmail();
    event.preventDefault();
    
};


  const styles = {
    container: {   display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px',}, 
    imagePreviewContainer: { width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', marginTop: '400px', marginLeft: '366px', border: '2px solid #a44242', position: 'relative',},
    imagePreview: { width: '100%', height: '100%', objectFit: 'cover',},
  };
  



  return (
  
      <>
{/* <nav class="navbar fixedtop">
        <div class="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a href="/"> Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/#"> Our Products</a></li>
                <li><a href="/">Testimonial</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <h1 class="logo"><img src="./logo.avif" className="img-fluid mb-1" width="100px" height="auto"/> </h1> */}
             {/* //<span className="dd"> Flier- Editor [Powered by SSPT]</span>  */}
        {/* </div>
    </nav>
     */}
    <div className='container'>
    
      <div id="posteranandtelegustory" className='firstdiv' style={{ width: '810px', height: '1440px', border: '1px solid #000', padding: '20px' }}>

        <h5 id='teachersnameanandtelegustory'>{Teachersname}</h5>
        <h5 id='linkanandtelegustory'>{link}</h5>
        <h5 id='dateanandtelegustory'>{date}</h5>
        <h5 id='timeanandtelegustory'>{time}</h5>
        <h5 id='contactanandtelegustory'>{contact}</h5>
        <h5 id='venueanandtelegustory'>{venue}</h5>
       
        <div style={styles.container}>
      {imagePreview && (
        <div style={styles.imagePreviewContainer}>
          <img src={imagePreview} alt="Preview" style={styles.imagePreview} />
        </div>
      )}
    </div>
       

      </div>
      

  
    
      

      <div className="form-container">
      <h1>Enter Your Details Here</h1>
        <form>
            
       
            <label>Enter Teachers Name:
                <input
                    type="text" 
                
                    value={Teachersname}
                    onChange={(e) => setTeachersName(e.target.value)}
                />
               
           
                
            </label>
            
            <label>Enter your link:
                <input
                    type="text" 
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />
            </label>
            <label>Date:
                <input
                    type="text" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </label>
            <label>Date:
                <input
                    type="text" 
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
            </label>
            <label>Contact:
                <input
                    type="text" 
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                />
            </label>
            <label>Venue:
                <input
                    type="text" 
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                />
            </label>
            <label>
              Select Teachers Photo
            
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <i><p> **Select passport size photo for best result **</p></i>
            </label>

        

        </form>

       
        {/* <button  id="button">Download Poster</button> */}
        <Button variant="primary" className='m-2' onClick={handleShow}>
        Click here to download poster
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Please enter your email address.</Modal.Title>

        </Modal.Header>
        {/* <p className='m-2'><i>Download button will be clickable once you fill up the form</i></p> */}
        <Modal.Body>


        <form method="post" ref={form}>
      {/* <label>Name</label>
      <input type="text" placeholder="Enter your fullname" name="user_name" required value={formData.user_name} onChange={handleInputChange}  /> */}
      <label>Email</label>
      <input type="email" placeholder="something@gmail.com" name="user_email" required value={formData.user_email} onChange={handleInputChange} />
      {/* <label>Phone</label>
      <input type='number' placeholder="Please enter your contact number" name="user_phone" required value={formData.user_phone}  onChange={handleInputChange}  />
      <label>Teachers Code (Optional) </label>
      <input type='text' name="user_code" placeholder='type NA if its not available' required value={formData.user_code} onChange={handleInputChange}/>
      <label>Address</label>
      <input type='text'placeholder="Please enter your address" name="user_address" required value={formData.user_address} onChange={handleInputChange} /> */}
      <br/>
      

    </form>
    <input  onClick={handleButtonClick} type='submit' className='btn btn-primary' disabled={isButtonDisabled} value="Download" />
        </Modal.Body>
  
      </Modal>









        
    </div>
      </div>
      

      </>

  
  );
};



export default Anandutsavtelegustory;