import React,{useState} from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core"
import Paper from '@material-ui/core/Paper';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import {useSelector} from "react-redux"
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 225,
      width: 270,
    },
    image:{
        display: "block",
        margin: "0 auto",
        width: "200px",
        height: "120px",
        paddingTop: "08px" 
    },
    detail:{
     borderLeft: "6px solid" ,  
     borderLeftColor: " yellow",
     height: "90px"
    },
  }));

const AllSellItems = ()=>{
    const adsArray = useSelector(state=>state.adReducer)
    const ads_Arr = adsArray ? adsArray : []
    const [toggleFavourite,setToggleFavourite] = useState(false)
    const classes = useStyles();
    return(
        <div style = {{padding: "15px"}}>
            <Grid container spacing = {1} className = {classes.root}>
             <Grid item xs ={12} >
             <Grid container justify="center" spacing={2}>
              {ads_Arr.length !== 0 ? ads_Arr.map((ads) => (
            <Grid key={ads.title} item>
              <Paper className={classes.paper} variant="outlined" >
                  <div style={{display:'flex',alignItems:"start",justifyContent:"flex-start"}}> 
                  <img src ={ads.photo1} alt = {ads.title} className ={classes.image}/>   
                  <IconButton aria-label="FavouriteIcon" className={classes.margin}
                  onClick = {()=>setToggleFavourite(!toggleFavourite)}>
                   {toggleFavourite ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
                  </IconButton>
                  </div>
                  <div className = {classes.detail}>
                      <Typography variant = "h5" style ={{fontWeight: "bold",fontSize: "22px",color: "#002e36",margin: '2px 8px'}}>
                          {ads.price}
                      </Typography>
                      <Typography variant = "subtitle1" style ={{color: "grey",margin: '2px 8px',fontSize: "14px"}}>
                          {ads.title}
                      </Typography>
                      
                      <Typography variant = "subtitle2" style ={{margin: '2px 8px',color: "#002e36"}}>
                          {ads.location},Pakistan
                      </Typography>
                  </div>
                  
                </Paper>
            </Grid>
          )): <Typography variant = "h5"> NO ADS AVAILABLE</Typography>}
        </Grid>

             </Grid>

            </Grid>

        </div>
    )
}
export default AllSellItems