import "./App.css";
import "../src/pdfCss/pdfTemplate1.css"
import Maincontainer from "./Components/Maincontainer";
import { AppContext } from "./ContextApi";
import { useState, useEffect } from "react";
import Maininformation from "./FormData";

function App() {

  const [activetabsection ,sectactivetab] = useState(Object.keys(Maininformation)[0])

  const Resumesections = {
    Basicinfo : "Basicinfo",
    WorkExp : "WorkExp" ,
    // Summary : "Summary", 
    Education : "Education",
    Projects : "Projects" ,
    Skills : "Skills"
  }
  
  return (
    <AppContext.Provider
    value={{Resumesections , Maininformation , sectactivetab ,activetabsection}}
    >
      <div className="App">
        <Maincontainer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
