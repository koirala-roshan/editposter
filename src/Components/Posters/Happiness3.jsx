import React, { useState,useRef } from 'react';
import html2canvas from 'html2canvas';


const Happiness3 = () => {

  const [Teachersname, setTeachersName] = useState('with Rohit Dharma');
  const [link, setLink] = useState('Registration Link: tiny.cc/link');
  const [date, setDate] = useState('29 May 2024 l 7:00-9:00AM');
  const [contact, setContact] = useState('More Info: 9810553757');
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

 



  const downloadPoster3 = async () => {
    const poster = document.getElementById('poster3');
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
    container: {   display: 'flex', flexDirection: 'column', margin: '20px',}, 
    imagePreviewContainer: { width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', marginTop: '310px', marginLeft: '5px', border: '2px solid black', position: 'relative',},
    imagePreview: { width: '100%', height: '100%', objectFit: 'cover',},
  };
  



  return (
  
      

    <div className='container'>
    
      <div id="poster3" className='firstdiv' style={{ width: '600px', height: '600px', border: '1px solid #000', padding: '20px' }}>
    
  
        <h5 id='teachersname4'>{Teachersname}<br/></h5>
        <h5 id='link4'>{link}</h5>
        <h5 id='date4'>{date}</h5>
        <h5 id='contact4'>{contact}</h5>

       
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
            <label>Date & Time:
                <input
                    type="text" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </label>

            <label>Contact:
                <input
                    type="text" 
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                />
            </label>

            <label>
              Select Teachers Photo
            
            <input type="file" accept="image/*" onChange={handleImageChange} />
            </label>

        

        </form>
        <button  id="button" onClick={downloadPoster3}>Download Poster</button>
    </div>
  
     



      </div>



  
  );
};



export default Happiness3;