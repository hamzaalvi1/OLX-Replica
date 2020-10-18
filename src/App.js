import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import AllCategories from "./Components/Navbar/AllCategories"
import BrandImage from "./Components/Navbar/Brand"
import BrandFooter from "./Components/Footer/Brand-Footer"
import FooterNavigation from "./Components/Footer/Footer-Navigation"
import Footer from "./Components/Footer/Footer"
import RouteConfig from "./Components/RouterConfig/RouteConfig"
import {GlobalProvider} from "./Components/Context/GlobalState"

import {withRouter} from "react-router-dom"





function App(props) {
  return (
    <GlobalProvider>
    <div className="App">
          <Navbar/>   
          {props.location.pathname !== "/AdCreator" ? <AllCategories/> : null}
          {props.location.pathname !== "/AdCreator" ? <BrandImage/> : null}
          <RouteConfig/>
          {props.location.pathname !== "/AdCreator" ? <BrandFooter/>: null}
          {props.location.pathname !== "/AdCreator" ?<FooterNavigation/>:null}
          <Footer/> 

    </div>
    </GlobalProvider>

  );
}

export default withRouter(App);
