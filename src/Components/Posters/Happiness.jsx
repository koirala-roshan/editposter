import React, { useState,useRef } from 'react';
import html2canvas from 'html2canvas';


const Happiness = () => {
  const [title, setTitle] = useState('Happiness Program');
  const [subtitle, setSubtitle] = useState('Learn powerful scientific breathing technique  SKY');
  const [Teachersname, setTeachersName] = useState('Rohit Dharma');
  const [Teacherstitle, setTeacherstitle] = useState('(ArtofLiving Faculty)');
  const [link, setLink] = useState('tiny.cc/link');
  const [date, setDate] = useState('29 May 2024');
  const [time, setTime] = useState('7AM- 10AM');
  const [contact, setContact] = useState('9810553757');
  const [venue, setVenue] = useState('Bangalore Ashram');
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
    const poster = document.getElementById('poster');
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
    imagePreviewContainer: { width: '90px', height: '90px', borderRadius: '50%', overflow: 'hidden', marginTop: '110px', marginLeft: '100px', border: '2px solid black', position: 'relative',},
    imagePreview: { width: '100%', height: '100%', objectFit: 'cover',},
  };
  



  return (
  
      

    <div className='container'>
    
      <div id="poster" className='firstdiv' style={{ width: '500px', height: '419px', border: '1px solid #000', padding: '20px' }}>
        <h1 id='course-title'>{title}</h1>
        <h5 id='subtitle'>{subtitle}</h5>
        <h5 id='Teachersname'>{Teachersname}<br/>{Teacherstitle}</h5>
        <h5 id='link'>{link}</h5>
        <h5 id='date'>{date}</h5>
        <h5 id='time'>{time}</h5>
        <h5 id='contact'>{contact}</h5>
        <h5 id='venue'>{venue}</h5>
       
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
            <label>Enter your name Title:
                <input
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>
            <label>Enter your name Subtitle:
                <input
                    type="text" 
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                />
            </label> 
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



export default Happiness;