import React from "react"
import { Typography } from "@material-ui/core"

const Footer = ()=>{
    return(
        <div style = {{height: "45px",backgroundColor: "#003034",display: "flex",alignItems:"center",justifyContent:"space-between"}}>
            <div style = {{display: "flex",alignItems:"center",marginLeft:"50px"}}>
              <Typography variant = "subtitle2" style = {{fontSize: "12px",fontWeight: "bold",color: "white",padding: "2px"}}>
               Other Countries
              </Typography>
              <Typography variant = "body2" style = {{color: "white", fontSize: "12px",padding: "2px"} }>
               India-South Africa-Indonesia
              </Typography>
            </div>
            <div style = {{display: "flex",alignItems:"center",marginRight:"50px"}}>
              <Typography variant = "subtitle2" style = {{fontSize: "12px",fontWeight: "bold",color: "white",padding: "2px"}}>
               Free Classifieds in Pakistan  .
              </Typography>
              <Typography variant = "body2" style = {{fontSize: "12px",color: "white",padding: "2px"} }>
               2006-2020 OLX
              </Typography>
            </div>
        </div> 
    )
}
export default Footer