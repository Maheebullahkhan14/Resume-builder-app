import "./App.css";
import "../src/pdfCss/pdfTemplate1.css"
import Maincontainer from "./Components/Maincontainer";
import { AppContext } from "./ContextApi";
import { useState, useEffect } from "react";
import Maininformation from "./FormData";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Routes , Router, Route } from "react-router-dom";


function App() {

  const [activetabsection ,sectactivetab] = useState(Object.keys(Maininformation)[0])
  const [savedModulesData , setSaveModulesData] = useState([])

  const Resumesections = {
    Basicinfo : "Basicinfo",
    WorkExp : "WorkExp" ,
    // Summary : "Summary", 
    Education : "Education",
    Projects : "Projects" ,
    Skills : "Skills",
    Achievements : 'Achievements'
  }
  
  return (
    <AppContext.Provider
    value={{Resumesections , Maininformation , sectactivetab ,activetabsection , setSaveModulesData , savedModulesData}}
    >
      <div className="App">
        <Routes>
          <Route  path="/dashboard" element={<Maincontainer/>}></Route>
          <Route  path="/register" element={<Login pagelink="/register"/>}></Route>
          <Route  path="/" element={<Login pagelink="/login"/>}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
