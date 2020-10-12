import React from "react"

import Grid from '@material-ui/core/Grid';
import NativeSelect from '@material-ui/core/NativeSelect';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { makeStyles } from '@material-ui/core/styles';
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
     justifyContent: "space-between",
     alignItems: "center",
   }
  }));
const AllCategories = ()=>{
   const classes = useStyles()
   const [city, selectCity] = React.useState('');
  const handleChange = (event) => {
    selectCity(event.target.value);
  };    
    return(
        <div >
        <Grid container spacing = {2}  
        alignItems="center" justify= "center">
          <Grid item xs = {2} md= {2} lg={2} sm ={2}>
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
      </Grid>    
      <Grid item  xs ={9} md = {9} lg = {9} sm ={9}>
      <div className = {classes.listItem}>
          <p>Mobile Phones</p>
          <p>Cars</p>
          <p>Motorcycles</p>
          <p>Houses</p>
          <p>TV-Video-Audio</p>
          <p>Tablets</p>
          <p>Lands & Plots</p>
        </div>
        </Grid>
        </Grid>
        </div>
    )
}
export default AllCategories