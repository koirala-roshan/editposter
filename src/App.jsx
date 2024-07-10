import { useState } from 'react'
import './App.css'
import Happiness from './Components/Posters/Happiness.jsx'
import Navbar from './Components/Posters/navbar.jsx'
import Happiness2 from './Components/Posters/Happiness2.jsx'
import Landing from './Components/Posters/landingpage.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'                  
import Followup1 from './Components/Posters/followup1.jsx'
import Happiness3 from './Components/Posters/Happiness3.jsx'
import Anandutsav from './Components/Posters/anandutsav.jsx'




function App() {

  const router =createBrowserRouter([

    {
      path: "/editposter",
      element: <><Happiness /></> 
    },
    {
      path:"/",
      element: <Landing/>
    },
    {
    path: "/editposter2",
  element: <Happiness2 />
},
{
  path: "/editposter3",
element: <Followup1 />
},
{
  path: "/editposter4",
element: <Happiness3 />
}
,
{
  path: "/anandutsav",
element: <Anandutsav />
}
  ])
  return (
   
      <div>
        {/* <Landing/> */}
        {/* <Navbar />
        <Happiness />

        <Happiness2 />
       */}
      
         <RouterProvider router ={router}/>
       

     
      </div>
      
      
     
  )
}

export default App
