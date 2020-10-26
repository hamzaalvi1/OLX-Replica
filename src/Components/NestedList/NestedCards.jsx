import React,{useState} from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core"
import Paper from '@material-ui/core/Paper';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 268,
      width: 260,
      backgroundColor: "#f7f9f8"
    },
    image:{
        display: "block",
        margin: "0 auto",
        width: "160px",
        paddingTop: "10px" 
    },
    detail:{
     borderLeft: "6px solid" ,  
     borderLeftColor: " yellow",
     height: "88px"
    },
  }));

 const NestedCard = ()=>{
     
        const [toggleFavourite,setToggleFavourite] = useState(false)
        const classes = useStyles();
        return(
            <div >
                <Grid container spacing = {1} className = {classes.root}>
                 <Grid item xs ={12} >
                 <Grid container justify="center" spacing={2}>
                  {[0, 1, 2,3,4,5,6,7,8,9,10,11].map((value) => (
                <Grid key={value} item>
                  <Paper className={classes.paper} variant="outlined" >
                      <div style={{display:'flex',alignItems:"start",justifyContent:"flex-start"}}> 
                      <img src ="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-2.jpg" className ={classes.image}/>   
                      <IconButton aria-label="FavouriteIcon" className={classes.margin}
                      onClick = {()=>setToggleFavourite(!toggleFavourite)}>
                       {toggleFavourite ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
                      </IconButton>
                      </div>
                      <div className = {classes.detail}>
                          <Typography variant = "h5" style ={{fontWeight: "bold",fontSize: "22px",color: "#002e36",margin: '5px 8px'}}>
                              Rs 30,000
                          </Typography>
                          <Typography variant = "subtitle1" style ={{color: "grey",margin: '5px 8px',fontSize: "14px"}}>
                              Iphone X
                          </Typography>
                          <Typography variant = "subtitle2" style ={{margin: '5px 8px',color: "#002e36"}}>
                              Karachi Pakistan
                          </Typography>
                      </div>
                      
                    </Paper>
                </Grid>
              ))}
            </Grid>
    
                 </Grid>
    
                </Grid>
    
            </div>
        )

     
 }
 export default NestedCard