import React from "react"
import {Switch,Route} from "react-router-dom"
import AllSellItems from "../Pagination/AllSellItems"
import Electronics from "../Pagination/Electronics"
import Houses from "../Pagination/Houses"
import LandsAndPlots from "../Pagination/Lands&Plots"
import Mobile_Phones from "../Pagination/Mobile-Phones"
import Pets from "../Pagination/Pets"
import TV_Audio from "../Pagination/TV-Audio"
import Vehicles from "../Pagination/Vechiles"






const RouteConfig  = ()=>{
    return(
        <div>
         <Switch>   
          <Route exact path = "/" component = {AllSellItems} />
          <Route  path = "/Electronics" component = {Electronics} />
          <Route  path = "/Houses" component = {Houses} />
          <Route  path = {`/Lands & Plots`} component ={LandsAndPlots} />
          <Route  path = "/Mobile Phones" component = {Mobile_Phones} />
          <Route  path = "/TV-Video-Audio" component = {TV_Audio} />
          <Route  path = "/Pets" component = {Pets} />
          <Route  path = "/Vehicles" component = {Vehicles} />



         </Switch>
        </div>
    )
}
export default RouteConfig