import React from "react"

import NativeSelect from '@material-ui/core/NativeSelect';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({

   allCategories:{
    width: "20ch", 
    padding: theme.spacing(1),
   "& .MuiNativeSelect-icon": {
     color: "black",
     fontSize: "30px",
    },
    "&&&:before": {
      borderBottom: "none"
    },
    "&&:after": {
      borderBottom: "none"
    },
    [theme.breakpoints.down('md')]:{
        maxWidth: "20ch", 
        padding: theme.spacing(1),
    }
   } ,
   
   listItem:{
     display: "flex",
     justifyContent: "space-evenly",
     alignItems: "center",
   },
   listItemPara:{
   marginLeft:"4ch",
   cursor:"pointer",
   fontSize: "15px"
  },
  }));
const AllCategories = ()=>{
   const classes = useStyles()
   const [city, selectCity] = React.useState('');
  const handleChange = (event) => {
    selectCity(event.target.value);
  };    
    return(
        <div style = {{display: "flex",justifyContent: "between"}} >
 
          <NativeSelect className = {classes.allCategories}
          IconComponent = {KeyboardArrowDownIcon}        
          value={city}
          onChange={handleChange}
        >
          <option value="" disabled>
                  ALL CATEGORIES
          </option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        
       <div className = {classes.listItem}>
          {["Mobile Phones","Cars","Motorcycle","Houses","TV-Video-Audio","Tablets","Lands & Plots"].map((item)=>{
            return <Typography variant = "body2"  className = {classes.listItemPara} key = {item}>{item}</Typography>
          })}
        </div>
        </div>
    )
}
export default AllCategories