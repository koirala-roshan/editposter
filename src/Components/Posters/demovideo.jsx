import React from 'react';

import { useNavigate } from "react-router-dom";
const Demovideo = () => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/`; 
      navigate(path);
    }
  return (
  
      <>
<div className='container '>
    <h1 className='text-center pt-5 bg-primary text-white'>
        Watch the complete video
    </h1>
    <p className='text-center'> This is reference video for making poster in this site. We are sure that you can edit and download poster after watching this video. </p>
<center> 
<video width="640" height="480" controls>
<source type="video/mp4" src="/demovideo.webm"/>
</video>

</center> 
<center>   
<button type="button" onClick={routeChange} className='btn btn-success'> Go back</button>
</center> 
</div>

      </>

  
  );
};



export default Demovideo;