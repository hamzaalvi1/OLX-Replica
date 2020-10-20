import React,{useContext} from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import AllCategories from "./Components/Navbar/AllCategories"
import BrandImage from "./Components/Navbar/Brand"
import BrandFooter from "./Components/Footer/Brand-Footer"
import FooterNavigation from "./Components/Footer/Footer-Navigation"
import Footer from "./Components/Footer/Footer"
import RouteConfig from "./Components/RouterConfig/RouteConfig"
import {GlobalContext} from "./Components/Context/GlobalState"

import {withRouter} from "react-router-dom"





function App(props) {
  const gblContext = useContext(GlobalContext)
  const {isCategory} = gblContext
  return (
    
    <div className="App">
          <Navbar/>   
          {props.location.pathname !== "/AdCreator" && props.location.pathname !== `/AdCreator/${isCategory}`  ? <AllCategories/> : null}
          {props.location.pathname !== "/AdCreator"  && props.location.pathname !== `/AdCreator/${isCategory}` ? <BrandImage/> : null}
          <RouteConfig/>
          {props.location.pathname !== "/AdCreator"  && props.location.pathname !== `/AdCreator/${isCategory}` ? <BrandFooter/>: null}
          {props.location.pathname !== "/AdCreator"  && props.location.pathname !== `/AdCreator/${isCategory}` ?<FooterNavigation/>:null}
          <Footer/> 

    </div>

  );
}

export default withRouter(App);
