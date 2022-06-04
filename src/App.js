
import './App.css';
import  {Routes, Route, Router} from "react-router-dom"
import Navbar from "./component/Navbar"
import Sandwich from "./Pages/Sandwichfroid"
import Burgapas from "./Pages/Burgapa"
import  Chickens from "./Pages/Chickens"
import Extras from "./Pages/Extras"
import Home from "./Pages/Home"
import Place from './Pages/Place';
import Carte from './Pages/Carte';
import Footer from "./component/Footer"



function App() {
  return (
   <>
  <Navbar/>
          
        <Routes>
          <Route path="accueil" element={<Home/>}/>
          <Route path="carte" element={<Carte/>}/>
          <Route path="place" element={<Place/>}/>
          <Route path="sandwitchs" element={<Sandwich/>}/>
          <Route path="burger" element={<Burgapas/>}/>
          <Route path="chickens" element={<Chickens/>}/>
          <Route path="extra" element={<Extras/>}/>

            
        </Routes>

  <Footer/>
  
   </>
  );
}

export default App;
