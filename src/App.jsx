
import "./App.css";
import Happiness from "./Components/Posters/Happiness.jsx";

import Happiness2 from "./Components/Posters/Happiness2.jsx";
import Landing from "./Components/Posters/landingpage.jsx";
import ScrollToTop from "react-scroll-to-top";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Followup1 from "./Components/Posters/followup1.jsx";
import Happiness3 from "./Components/Posters/Happiness3.jsx";
import Anandutsav from "./Components/Posters/anandutsav.jsx";
import { ContactUs } from "./Components/Posters/login.jsx";
import Anandutsav2 from "./Components/Posters/anandutsavsquare.jsx";
import Anandutsav3 from "./Components/Posters/anandutsavstory.jsx";
import Anandutsavhindi from "./Components/Posters/anandutsavhindi.jsx";
import Demovideo from "./Components/Posters/demovideo.jsx";
import Anandutsavhindisquare from "./Components/Posters/anandutsavhindisquare.jsx";
import Text from "./Components/Posters/textfile.jsx";
import Anandutsavhindistory from "./Components/Posters/anandutsavhindistory.jsx";
import Anandutsavkannada from "./Components/Posters/anandutsavkannada.jsx";
import Followup2 from "./Components/Posters/followup2.jsx";
import Anandutsavkannada45 from "./Components/Posters/anandutsavkannada45.jsx";
import Anandutsavkannadastory from "./Components/Posters/anandutsavkannadastory.jsx";
import Anandutsavmalayalam45 from "./Components/Posters/anandutsavmalyalam45.jsx";
import Anandutsavmalyalamstory from "./Components/Posters/anandutsavmalyalamstory.jsx";
import Anandutsavmalyalam from "./Components/Posters/anandutsavmalyalamsquare.jsx";
import Anandutsavmarathi45 from "./Components/Posters/anandutsavmarathi45.jsx";
import Anandutsavmarathistory from "./Components/Posters/anandutsavmarathistory.jsx";
import Anandutsavmarathi from "./Components/Posters/anandutsavmarathisquare.jsx";
import Anandutsavgujrati45 from "./Components/Posters/anandutsavgujrati45.jsx";
import Anandutsavgujrati from "./Components/Posters/anandutsavgujratisquare.jsx";
import Anandutsavgujratistory from "./Components/Posters/anandutsavgujratistory.jsx";
import Anandutsavbengoli45 from "./Components/Posters/anandutsavbengoli45.jsx";
import Anandutsavbengoli from "./Components/Posters/anandutsavbengolisquare.jsx";
import Anandutsavbengolistory from "./Components/Posters/anandutsavbengolistory.jsx";
import Anandutsavtamil45 from "./Components/Posters/anandutsavtamil45.jsx";
import Anandutsavtamilstory from "./Components/Posters/anandutsavtamilstory.jsx";
import Anandutsavtamil from "./Components/Posters/anandutsavtamilsquare.jsx";
import Anandutsavtelegu45 from "./Components/Posters/anandutsavtelegu45.jsx";
import Anandutsavtelegustory from "./Components/Posters/anandutsavtelegustory.jsx";
import Anandutsavtelegu from "./Components/Posters/anandutsavtelegusquare.jsx";
// import { Route, Switch } from 'react-router-dom';
function App() {

  const router = createBrowserRouter([
    {
      path: "/editposter",
      element: (
        <>
          <Happiness />
        </>
      ),
    },
    { path: "/", element: <Landing /> },
    { path: "/editposter2", element: <Happiness2 /> },
    { path: "/editposter3", element: <Followup1 /> },
    { path: "/editposter4", element: <Happiness3 /> },
    { path: "/anandutsav", element: <Anandutsav /> },
    { path: "/contact", element: <ContactUs /> },
    { path: "/anandutsav2", element: <Anandutsav2 /> },
    { path: "/anandutsav3", element: <Anandutsav3 /> },
    { path: "/anandutsavhindi", element: <Anandutsavhindi /> },
    { path: "/demovideo", element: <Demovideo /> },
    { path: "/hindisquare", element: <Anandutsavhindisquare /> },
    { path: "/text", element: <Text /> },
    { path: "/anandutsavhindistory", element: <Anandutsavhindistory /> },
    { path: "/kannadasquare", element: <Anandutsavkannada /> },
    { path: "/followup2", element: <Followup2 /> },
    { path: "/kannada45", element: <Anandutsavkannada45 /> },
    { path: "/kannadastory", element: <Anandutsavkannadastory /> },
    { path: "/malyalam45", element: <Anandutsavmalayalam45 /> },
    { path: "/malyalamstory", element: <Anandutsavmalyalamstory /> },
    { path: "/malyalamsquare", element: <Anandutsavmalyalam /> },
    { path: "/marathi45", element: <Anandutsavmarathi45 /> },
    { path: "/marathistory", element: <Anandutsavmarathistory /> },
    { path: "/marathisquare", element: <Anandutsavmarathi /> },
    { path: "/gujrati45", element: <Anandutsavgujrati45 /> },
    { path: "/gujratistory", element: <Anandutsavgujratistory /> },
    { path: "/gujratisquare", element: <Anandutsavgujrati /> },
    { path: "/bengoli45", element: <Anandutsavbengoli45 /> },
    { path: "/bengolistory", element: <Anandutsavbengolistory /> },
    { path: "/bengolisquare", element: <Anandutsavbengoli /> },
    { path: "/tamil45", element: <Anandutsavtamil45 /> },
    { path: "/tamilstory", element: <Anandutsavtamilstory /> },
    { path: "/tamilsquare", element: <Anandutsavtamil /> },
    { path: "/telegu45", element: <Anandutsavtelegu45 /> },
    { path: "/telegustory", element: <Anandutsavtelegustory /> },
    { path: "/telegusquare", element: <Anandutsavtelegu /> },
  ]);

  return (
    <div>
      {/* <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/editposter2" component={Happiness2} />
      <Route path="/editposter3" component={Followup1} />
      <Route path="/editposter4" component={Happiness3} />
      <Route path="/anandutsav" component={Anandutsav} />
      <Route path="/contact" component={ContactUs} />
      <Route path="/anandutsav2" component={Anandutsav2} />
      <Route path="/anandutsav3" component={Anandutsav3} />
      <Route path="/anandutsavhindi" component={Anandutsavhindi} />
      <Route path="/demovideo" component={Demovideo} />
      <Route path="/hindisquare" component={Anandutsavhindisquare} />
      <Route path="/text" component={Text} />
      <Route path="/anandutsavhindistory" component={Anandutsavhindistory} />
      <Route path="/kannadasquare" component={Anandutsavkannada} />
      <Route path="/kannada45" component={Anandutsavkannada45} />
      <Route path="/kannadastory" component={Anandutsavkannadastory} />
      <Route path="/malyalam45" component={Anandutsavmalayalam45} />      
      <Route path="/malyalamstory" component={Anandutsavmalyalamstory} />
      <Route path="/malyalamsquare" component={Anandutsavmalyalam} />
      <Route path="/marathi45" component={Anandutsavmarathi45} />
      <Route path="/marathistory" component={Anandutsavmarathistory} />
      <Route path="/marathisquare" component={Anandutsavmarathi} />
      <Route path="/gujrati45" component={Anandutsavgujrati45} />
      <Route path="/gujratistory" component={Anandutsavgujratistory} />
      <Route path="/gujratisquare" component={Anandutsavgujrati} />
      <Route path="/bengoli45" component={Anandutsavbengoli45} />
      <Route path="/bengolistory" component={Anandutsavbengolistory} />
      <Route path="/bengolisquare" component={Anandutsavbengoli} />
      <Route path="/tamil45" component={Anandutsavtamil45} />
      <Route path="/tamilstory" component={Anandutsavtamilstory} />
      <Route path="/tamilsquare" component={Anandutsavtamil} />
      <Route path="/telegu45" component={Anandutsavtelegu45} />
      <Route path="/telegustory" component={Anandutsavtelegustory} />      
      <Route path="/telegusquare" component={Anandutsavtelegu} />



      </Switch>
    */}
      {/* <Landing/> */}
      {/* <Navbar />
        <Happiness />

        <Happiness2 />
       */}

      <RouterProvider router={router} />
      <ScrollToTop smooth color="#f48a21" />
    </div>
  );
}

export default App;
