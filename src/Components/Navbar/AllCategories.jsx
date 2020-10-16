import React from "react"

import NativeSelect from '@material-ui/core/NativeSelect';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom"
import MenuItems from "../Menu.json"
const useStyles = makeStyles((theme) => ({

   allCategories:{
    width: "22ch", 
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
   const [menuItem, setMenuItem] = React.useState('');
  const menuHandleChange = (event) => {
    setMenuItem(event.target.value);
  };    
    return(
        <div style = {{display: "flex",justifyContent: "between"}} >
 
          <NativeSelect className = {classes.allCategories}
          IconComponent = {KeyboardArrowDownIcon}        
          value={menuItem}
          onChange={menuHandleChange}
        >
          <option value="" disabled>
                  ALL CATEGORIES
          </option>
          {MenuItems.map((menu)=> <option key = {menu.id}>
           
             {menu.title} 
          </option>)}
        </NativeSelect>
        
       <div className = {classes.listItem}>
          {["Mobile Phones","Electronics","Vehicles","Houses","TV-Video-Audio","Pets","Lands & Plots"].map((item)=>{
            return <Typography variant = "body2"  className = {classes.listItemPara} key = {item}>
              <Link to = {`/${item}`}>
              {item}
              </Link>
              </Typography>
          })}
        </div>
        </div>
    )
}
export default AllCategories