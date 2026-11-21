import { BrowserRouter, Link, Route, Routes, } from "react-router-dom";
import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import AboutUs from "./AboutUs";

function App(){
  return(
    <>
      <BrowserRouter>
        <Link to='/home'>Home</Link>
        <Link to='/nonveg'>NonVeg</Link>
        <Link to='/veg'>Veg</Link>
        <Link to='/aboutus'>AboutUs</Link>
      

      <Routes>
           <Route path="/home" element={<Home/>} />
           <Route path="/veg" element={<Veg/>} />
           <Route path="/nonveg" element={<NonVeg/>} />
           <Route path="/aboutus" element={<AboutUs/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App; 