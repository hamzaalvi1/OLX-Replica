import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import AllCategories from "./Components/Navbar/AllCategories"
import BrandImage from "./Components/Navbar/Brand"



function App() {
  return (
    <div className="App">
     <Navbar/>
     <AllCategories/>
     <BrandImage/>
    </div>
  );
}

export default App;
