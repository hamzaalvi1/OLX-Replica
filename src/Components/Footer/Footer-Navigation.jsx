import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core"
import FBIcon  from "../../Assets/facebook.png"
import InstaIcon  from "../../Assets/instagram.png"
import TweetIcon  from "../../Assets/twitter.png"
import YutbeIcon  from "../../Assets/youtube.png"
import AppStoreBtn from "../../Assets/download on appstore.png"
import GooglePlayBtn from "../../Assets/get it on google play.png"


const useStyles = makeStyles((theme)=>({
   navTitle: {
       color: "#003034",
       fontSize: "15px",
       fontWeight: "bold",
       paddingTop: "19px",
       paddingBottom: "7px"

   },
   navItems: {
       padding: "2px",
       color: "grey",
       fontSize: "12px",
       cursor: "pointer", 
   },
   storeBtn: {
    width: "110px"
   }

}))

const FooterNavigation = ()=>{
 const classes = useStyles()
 
    return (
        <div style ={{display : "flex",justifyContent:"space-around",backgroundColor: "#eaeeef", border: "1px solid lightGrey"}}>
        <div style = {{display: "flex",justifyContent: "space-evenly",alignItems: "flex-start", width: "1000px"}}>
           <div>
               <Typography variant = "subtitle1" className = {classes.navTitle}>
                   POPULAR CATEGORIES
               </Typography>
               {["Cars","Flats for Rents","Jobs","Mobile Phones"].map((items)=>{
                 return <Typography key = {items} variant = "body2" className = {classes.navItems}>{items}</Typography>
               })}
          </div>
          <div>
               <Typography variant = "subtitle1" className = {classes.navTitle}>
                   TRENDING SEARCHES
               </Typography>
               {["Bikes","Watches","Books","Dogs"].map((items)=>{
                 return <Typography key = {items} variant = "body2" className = {classes.navItems} >{items}</Typography>
               })}
          </div>
          <div>
               <Typography variant = "subtitle1" className = {classes.navTitle}>
                   ABOUT US
               </Typography>
               {["About OLX Group","OLX Blog","Contact Us","OLX for Businesses"].map((items)=>{
                 return <Typography key = {items} variant = "body2" className = {classes.navItems} >{items}</Typography>
               })}
          </div>
          <div>
               <Typography variant = "subtitle1" className = {classes.navTitle}>
                   OLX
               </Typography>
               {["Help","Sitemap","Legal & Privacy information"].map((items)=>{
                 return <Typography key = {items} variant = "body2" className = {classes.navItems} >{items}</Typography>
               })}
          </div> 
        </div>
        <div style = {{padding: "15px"}} >
        <Typography variant = "subtitle1" className = {classes.navTitle}>
                   FOLLOW US
        </Typography>
        <div>
         <img src = {FBIcon} alt = "facebook" style={{marginRight: "7px"}}/>
         <img src = {InstaIcon} alt = "instagram" style={{marginRight: "7px"}}/>
         <img src = {TweetIcon} alt = "Twitter" style={{marginRight: "7px"}}/>
         <img src = {YutbeIcon} alt = "youtube" style={{marginRight: "7px"}}/>

        </div>
        <div>
        <input type="image" src={AppStoreBtn} alt = "submit" className = {classes.storeBtn} />
        <input type="image" src={GooglePlayBtn} alt = "submit" className = {classes.storeBtn} />

        </div>    
        </div> 
        </div>
    )
}
export default FooterNavigation