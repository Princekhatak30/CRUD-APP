
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/home/Home"
// import Table from "../src/components/home/Table"
import Fillform from "./components/register/Fillform"
import Details from "./components/details/Details"

import Edituser from "./components/edit/Edituser"
import {Routes,Route} from "react-router-dom"


function App() {
  
  return (
  <div >

    < Navbar />
    <Routes>
    <Route path='/Home'element={<Home/>} />
    
    <Route path='/Fillform'element={<Fillform/>} />
    <Route path='/Edituser/:id'element={<Edituser/>} />
    <Route path='/Details/:id'element={<Details/>} />

    </Routes>
  </div>
 
  )
}

export default App;
