
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
import Horaires from './Pages/Horaires';
import Drink from './Pages/Drink';




function App() {
  return (
   <>
  <Navbar/>
          
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="carte" element={<Carte/>}/>
          <Route path="place" element={<Place/>}/>
          <Route path="sandwitchs" element={<Sandwich/>}/>
          <Route path="burger" element={<Burgapas/>}/>
          <Route path="chickens" element={<Chickens/>}/>
          <Route path="extra" element={<Extras/>}/>
          <Route path="horaire" element={<Horaires/>}/>
          <Route path="drink" element={<Drink/>}/>
          <Route path="route" element={<Carte/>}/>

            
        </Routes>

  <Footer/>
  
   </>
  );
}

export default App;
