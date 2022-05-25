
import './App.css';
import  {Routes, Route, Router} from "react-router-dom"
import Navbar from "./component/Navbar"
import Sandwich from "./Pages/Sandwichfroid"
import Burgapas from "./Pages/Burgapa"
import  Chickens from "./Pages/Chickens"
import Extras from "./Pages/Extras"



function App() {
  return (
   <>
  <Navbar/>
          
        <Routes>
          <Route path="sandwitchs" element={<Sandwich/>}/>
          <Route path="burger" element={<Burgapas/>}/>
          <Route path="chickens" element={<Chickens/>}/>
          <Route path="extra" element={<Extras/>}/>

            
        </Routes>
  
   </>
  );
}

export default App;
