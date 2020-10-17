import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import AllCategories from "./Components/Navbar/AllCategories"
import BrandImage from "./Components/Navbar/Brand"
import BrandFooter from "./Components/Footer/Brand-Footer"
import FooterNavigation from "./Components/Footer/Footer-Navigation"
import Footer from "./Components/Footer/Footer"
import RouteConfig from "./Components/RouterConfig/RouteConfig"
import {BrowserRouter as Router} from "react-router-dom"
import {GlobalProvider} from "./Components/Context/GlobalState"





function App() {
  return (
    <GlobalProvider>
    <Router>
    <div className="App">
         <Navbar/>
          <AllCategories/>
          <BrandImage/>
          <RouteConfig/>
          <BrandFooter/>
          <FooterNavigation/>
          <Footer/> 

    </div>
    </Router>
    </GlobalProvider>
  );
}

export default App;
