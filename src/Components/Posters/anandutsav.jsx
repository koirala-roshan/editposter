import React, { useState,useRef } from 'react';
import html2canvas from 'html2canvas';


const Anandutsav = () => {
  const [Teachersname, setTeachersName] = useState('Rohit Dharma');
  const [link, setLink] = useState('Registration Link: aolic.org/12345');
  const [date, setDate] = useState('13th -16th August');
  const [time, setTime] = useState('6:00-9:00AM');
  const [contact, setContact] = useState('91 9036425223');
  const [venue, setVenue] = useState('At Art of Living International Center');
  const [imagePreview, setImagePreview] = useState("./hp.jpg");

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

 



  const downloadPoster = async () => {
    const poster = document.getElementById('posteranand');
    if (poster) {
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
  const styles = {
    container: {   display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px',}, 
    imagePreviewContainer: { width: '90px', height: '90px', borderRadius: '50%', overflow: 'hidden', marginTop: '227px', marginLeft: '242px', border: '2px solid #1089a0', position: 'relative',},
    imagePreview: { width: '100%', height: '100%', objectFit: 'cover',},
  };
  



  return (
  
      

    <div className='container'>
    
      <div id="posteranand" className='firstdiv' style={{ width: '500px', height: '625px', border: '1px solid #000', padding: '20px' }}>

        <h5 id='teachersnameanand'>{Teachersname}</h5>
        <h5 id='linkanand'>{link}</h5>
        <h5 id='dateanand'>{date}</h5>
        <h5 id='timeanand'>{time}</h5>
        <h5 id='contactanand'>{contact}</h5>
        <h5 id='venueanand'>{venue}</h5>
       
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
            </label>

        

        </form>
        <button  id="button" onClick={downloadPoster}>Download Poster</button>
    </div>
  
     



      </div>



  
  );
};



export default Anandutsav;