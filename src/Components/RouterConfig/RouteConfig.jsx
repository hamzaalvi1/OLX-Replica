import React from "react"
import {Switch,Route} from "react-router-dom"
import AllSellItems from "../Pagination/AllSellItems"
import Electronics from "../Pagination/Electronics"
import Property from "../Pagination/Property"
import Furnitures from "../Pagination/Furnitures"
import Mobile_Phones from "../Pagination/Mobile-Phones"
import Pets from "../Pagination/Pets"
import FashionsAndBeauty from "../Pagination/FashionsAndBeauty"
import Vehicles from "../Pagination/Vechiles"
import BooksAndSports from "../Pagination/BooksAndSports"
import Kids from "../Pagination/Kids"
import AdCreator from "../AdCreator/AdCreator"
import AdFormCreator from "../AdCreator/AdFormCreator"
import ItemPage from "../ItemPage/ItemPage"






const RouteConfig  = ()=>{
    return(
        <div>
         <Switch>   
          <Route exact path = "/" component = {AllSellItems} />
          <Route path = "/Item/:item" component = {ItemPage}/>
          <Route  path = "/Electronics" component = {Electronics} />
          <Route  path = "/Property" component = {Property} />
          <Route  path = "/Furnitures" component ={Furnitures} />
          <Route  path = "/Mobiles" component = {Mobile_Phones} />
          <Route  path = {`/Fashion&Beauty`} component = {FashionsAndBeauty} />
          <Route  path = "/Pets" component = {Pets} />
          <Route  path = "/Vehicles" component = {Vehicles} />
          <Route  path = {`/Books&Hobbies`} component ={BooksAndSports} />
          <Route  path = "/Kids" component ={Kids} />
          <Route path = "/AdCreator" exact component = {AdCreator}/> 
          <Route path = "/AdCreator/:category" component = {AdFormCreator}/> 





         </Switch>
        </div>
    )
}
export default RouteConfig