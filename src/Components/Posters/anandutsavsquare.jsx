import React, { useState,useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import emailjs from '@emailjs/browser';


const Anandutsav2 = () => {
  const [show, setShow] = useState(false);

 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Teachersname, setTeachersName] = useState('Rohit Dharma');
  const [link, setLink] = useState('Registration Link: aolic.org/12345');
  const [date, setDate] = useState('13th -16th August');
  const [time, setTime] = useState('6:00-9:00AM');
  const [contact, setContact] = useState('9036425223');
  const [venue, setVenue] = useState('At Art of Living International Center');

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
    user_name: '',
    user_email: '',
    user_phone: '',
    user_code: '',
    user_address: ''
});

// State to manage button disabled state
const [isButtonDisabled, setIsButtonDisabled] = useState(true);

// Effect to check if all fields are filled
useEffect(() => {
    const {user_name, user_email, user_phone,  user_code,user_address } = formData;
    setIsButtonDisabled(!(user_name && user_email && user_phone && user_code && user_address));
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

    const poster = document.getElementById('posteranand2');
    
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
    imagePreviewContainer: { width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', marginTop: '300px', marginLeft: '326px', border: '2px solid #a44242', position: 'relative',},
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
    
      <div id="posteranand2" className='firstdiv' style={{ width: '750px', height: '750px', border: '1px solid #000', padding: '20px' }}>

        <h5 id='teachersnameanand2'>{Teachersname}</h5>
        <h5 id='linkanand2'>{link}</h5>
        <h5 id='dateanand2'>{date}</h5>
        <h5 id='timeanand2'>{time}</h5>
        <h5 id='contactanand2'>{contact}</h5>
        <h5 id='venueanand2'>{venue}</h5>
       
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
          <Modal.Title>Fill these details to download poster</Modal.Title>

        </Modal.Header>
        <p className='m-2'><i>Download button will be clickable once you fill up the form</i></p>
        <Modal.Body>


        <form method="post" ref={form}>
      <label>Name</label>
      <input type="text" placeholder="Please enter your fullname" name="user_name" required value={formData.user_name} onChange={handleInputChange}  />
      <label>Email</label>
      <input type="email" placeholder="Please enter your correct email address" name="user_email" required value={formData.user_email} onChange={handleInputChange} />
      <label>Phone</label>
      <input type='number' placeholder="Please enter your contact number" name="user_phone" required value={formData.user_phone}  onChange={handleInputChange}  />
      <label>Teachers Code (Optional) </label>
      <input type='text' name="user_code" placeholder='type NA if its not available' required value={formData.user_code} onChange={handleInputChange}/>
      <label>Address</label>
      <input type='text'placeholder="Please enter your address" name="user_address" required value={formData.user_address} onChange={handleInputChange} />
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



export default Anandutsav2;