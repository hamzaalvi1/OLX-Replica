import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import AllCategories from "./Components/Navbar/AllCategories"
import BrandImage from "./Components/Navbar/Brand"
import BrandFooter from "./Components/Footer/Brand-Footer"
import FooterNavigation from "./Components/Footer/Footer-Navigation"




function App() {
  return (
    <div className="App">
     <Navbar/>
     <AllCategories/>
     <BrandImage/>
     <BrandFooter/>
     <FooterNavigation/>
    </div>
  );
}

export default App;
