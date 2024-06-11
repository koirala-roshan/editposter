import React from 'react';
import Navbar from './navbar';

import { Link, NavLink } from 'react-router-dom';
const Landing = () => {
  

  return (
  
      

    <>
    <Navbar/>
    <div className="container bg-primary">
 
<div className="card">
  <img src="./s1.jpg" class="card-img-top" alt="..." height="290rem"/>
  <div className="card-body">
    <h5 className="card-title">Happiness Program</h5>
    <p className="card-text">You can edit phot, date, time, location and more in this design</p>
    <NavLink to="/editposter" className="btn btn-primary">Edit this template </NavLink>
  </div>
</div>

<div className="card">
  <img src="./s2.jpg" class="card-img-top" alt="..." height="290rem"/>
  <div className="card-body">
    <h5 className="card-title">Happiness Program</h5>
    <p className="card-text">You can edit phot, date, time, location and more in this design</p>
    <NavLink to="/editposter2" className="btn btn-primary">Edit this template </NavLink>
  </div>
</div>

<div className="card">
  <img src="./s2.jpg" class="card-img-top" alt="..." height="290rem"/>
  <div className="card-body">
    <h5 className="card-title">Happiness Program</h5>
    <p className="card-text">You can edit phot, date, time, location and more in this design</p>
    <NavLink to="/editposter2" className="btn btn-primary">Edit this template </NavLink>
  </div>
</div>

<div className="card">
  <img src="./s2.jpg" class="card-img-top" alt="..." height="290rem"/>
  <div className="card-body">
    <h5 className="card-title">Happiness Program</h5>
    <p className="card-text">You can edit phot, date, time, location and more in this design</p>
    <NavLink to="/editposter2" className="btn btn-primary">Edit this template </NavLink>
  </div>
</div>






</div>




      </>



  
  );
};


export default Landing;