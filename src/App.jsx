import { useState } from 'react'
import './App.css'
import Happiness from './Components/Posters/Happiness.jsx'
import Navbar from './Components/Posters/navbar.jsx'
import ImageUpload from './Components/upload image/imageupload.jsx'






function App() {

  return (
   
      <div>
        <Navbar />
        <Happiness />
        <ImageUpload />
     
     
      </div>
        
      
     
  )
}

export default App
