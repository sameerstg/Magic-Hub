import React from "react";
import Navbar from "./Sections/Navbar";

import Footer from "./Sections/Footer";
import Section1 from "./Sections/Section1";
import World from "./Sections/World";
import Section3 from "./Sections/Tokenomics";
import Chart from "./Sections/Chart";
import HowTo from "./Sections/HowTo";
import Section6 from "./Sections/Usecase";
import Roadmap from "./Sections/Roadmap";
import Drawer from "./Components/Drawer";


function App() {
  return (
    <div >
                      

      <Navbar/>
      {/* <Drawer/> */}
      <Section1/>
      <div className='world-to-roadmap w-full'>
      <World/>
      <Section3/>
      <Chart/>
     
      <HowTo/>
      <Section6/>
      
      <Roadmap/>
      </div>
      
      <Footer/>
      
    </div>
  );
}

export default App;
