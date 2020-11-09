import React,{useEffect} from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import AllCategories from "./Components/Navbar/AllCategories"
import BrandImage from "./Components/Navbar/Brand"
import BrandFooter from "./Components/Footer/Brand-Footer"
import FooterNavigation from "./Components/Footer/Footer-Navigation"
import Footer from "./Components/Footer/Footer"
import RouteConfig from "./Components/RouterConfig/RouteConfig"
import {useDispatch} from "react-redux"
import {withRouter} from "react-router-dom"
import {asyncAdsFetch} from "./Components/StateManagement/ActionCreator"
import {useSelector} from "react-redux"
import {GlobalProvider} from "./Components/Context/GlobalState"




function App(props) {
  const dispatch = useDispatch()

  const is_Category = useSelector(state=> state.categoryReducer)
  console.log(is_Category)
  console.log(props.location)
  useEffect(()=>{
    dispatch(asyncAdsFetch())
  },[dispatch])
  return (
    <GlobalProvider>
    <div className="App" >
          <Navbar/>   
          {props.location.pathname !== "/AdCreator" && props.location.pathname !== `/AdCreator/${is_Category}`  ? <AllCategories/> : null}
          {(props.location.pathname !== "/AdCreator"  && props.location.pathname !== `/AdCreator/${is_Category}`) &&  props.location.pathname !== `/Item/${is_Category}` ? <BrandImage/> : null}
          <RouteConfig/>
          {props.location.pathname !== "/AdCreator"  && props.location.pathname !== `/AdCreator/${is_Category}` &&  props.location.pathname !== `/Item/${is_Category}` ? <BrandFooter/>: null}
          {props.location.pathname !== "/AdCreator"  && props.location.pathname !== `/AdCreator/${is_Category}` ?<FooterNavigation/>:null}
          <Footer/> 
      
    </div>
   </GlobalProvider>
  );
}

export default withRouter(App);
