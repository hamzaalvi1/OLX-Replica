import React from "react"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppStoreBtn from "../../Assets/download on appstore.png"
import GooglePlayBtn from "../../Assets/get it on google play.png"

const useStyles = makeStyles((theme)=>({
    brandTitle: {
        fontWeight: "bold",
        color: "#002f33",
        marginBottom: "20px",
    },
    brandDetail: {
        color: "#002f33",
        fontSize: "18px",
    },
    brandtitle: {
        fontWeight: "bold",
        color: "#002f33",
        marginBottom: "10px",

    },
    storeBtn: {
     width: "150px"
    }
}))

const BrandFooter = ()=>{
  const classes = useStyles();

    return(
        <div style = {{display:"flex",alignItems:"center",backgroundColor: "#f7f9f8",boxSizing: "border-box",}}>
           <div >
               <img src="https://statics.olx.com.pk/external/base/img/phone-app.webp" alt="brand-footer-img" />
           </div>
           <div style={{display:"flex",flexDirection: "column", padding:"35px",marginLeft: "30px"}}>
              <Typography variant = "h3" className = {classes.brandTitle}>
                  TRY THE OLX APP
              </Typography>
              <Typography variant = "body1" className = {classes.brandDetail} >
                  Buy, sell and find just about anything <br/>
                  using the app on your mobile.
              </Typography>
           </div>
           <div style = {{marginLeft: "30px"}}>
           <Typography variant = "body1" className = {classes.brandtitle}>
                  GET YOUR APP TODAY
              </Typography>
              <div >   
              <input type="image" src={AppStoreBtn} alt = "submit" className = {classes.storeBtn} />
              <input type="image" src={GooglePlayBtn} alt = "submit" className = {classes.storeBtn} />
              </div>
           </div>
        </div>
    )
}
export default BrandFooter