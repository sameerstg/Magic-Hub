import React from "react";
import Navbar from "./Sections/Navbar";

import Footer from "./Sections/Footer";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Tokenomics";
import Section4 from "./Sections/Chart";
import Section5 from "./Sections/HowTo";
import Section6 from "./Sections/Usecase";
import Section7 from "./Sections/Roadmap";


function App() {
  return (
    <div >
                      

      <Navbar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Footer/>
    </div>
  );
}

export default App;